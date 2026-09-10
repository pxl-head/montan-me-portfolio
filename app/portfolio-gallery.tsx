'use client';

/* oxlint-disable next/no-img-element -- gallery files are pre-optimized WebP assets */

import { useEffect, useRef, useState } from 'react';

import { assetPath } from './asset-path';
import {
  caseCredits,
  siteCopy,
  type Language,
  type PortfolioProject,
} from './i18n';

const galleryAliases: Record<string, Record<number, number>> = {
  'veins-of-vanity': { 7: 1 },
  'horse-games': { 36: 7, 37: 9, 38: 10, 39: 13, 40: 16, 41: 25, 42: 6 },
};

function getGalleryImages(project: PortfolioProject) {
  const images = Array.from({ length: project.galleryCount }, (_, index) => {
    const number = index + 1;
    const fileNumber = galleryAliases[project.gallerySlug]?.[number] ?? number;

    return {
      type: 'image' as const,
      src: assetPath(
        `/gallery/${project.gallerySlug}/${String(fileNumber).padStart(2, '0')}.webp`,
      ),
    };
  });

  return project.galleryVideo
    ? [
        ...images,
        {
          type: 'video' as const,
          src: assetPath(project.galleryVideo.src),
          poster: assetPath(project.galleryVideo.poster),
        },
      ]
    : images;
}

export function ProjectGallery({
  project,
  language,
}: {
  project: PortfolioProject;
  language: Language;
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const media = getGalleryImages(project);
  const labels = siteCopy[language].gallery;
  const credits = caseCredits[project.gallerySlug] ?? [];
  const details = siteCopy[language].caseDetails;

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + media.length) % media.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % media.length);
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (index - 1 + media.length) % media.length);
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index + 1) % media.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, media.length]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen) setActiveIndex(0);
  };

  return (
    <>
      <button
        type="button"
        className="project-trigger"
        aria-label={`${labels.openGallery} ${project.title}`}
        onClick={() => handleOpenChange(true)}
      >
        <figure>
          <div className="image-wrap">
            <img
              src={assetPath(project.image)}
              alt={project.alt}
              width={project.width}
              height={project.height}
              loading="lazy"
              decoding="async"
            />
            <span className="view-mark" aria-hidden="true">
              {labels.openMark} / {media.length}
            </span>
          </div>
          <figcaption>
            <span>{project.number}</span>
            <h3>{project.title}</h3>
            <span>{project.note}</span>
          </figcaption>
        </figure>
      </button>

      {open && (
        <dialog
          ref={dialogRef}
          className="gallery-dialog"
          aria-labelledby={`gallery-title-${project.gallerySlug}`}
          aria-describedby={`gallery-counter-${project.gallerySlug}`}
          onCancel={() => handleOpenChange(false)}
        >
          <button
            type="button"
            className="gallery-close"
            aria-label={labels.close}
            onClick={() => handleOpenChange(false)}
          >
            <span aria-hidden="true">×</span>
          </button>
          <header className="gallery-header">
            <h2 id={`gallery-title-${project.gallerySlug}`}>{project.title}</h2>
            <p id={`gallery-counter-${project.gallerySlug}`} aria-live="polite">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(media.length).padStart(2, '0')}
            </p>
          </header>

          <div className="gallery-stage">
            {media[activeIndex].type === 'video' ? (
              <video
                src={media[activeIndex].src}
                poster={media[activeIndex].poster}
                controls
                playsInline
                preload="metadata"
                aria-label={`${project.title} — ${labels.video} ${activeIndex + 1} ${labels.of} ${media.length}`}
              >
                <track
                  kind="captions"
                  src={assetPath('/media/pony-img-3912-captions.vtt')}
                  srcLang="en"
                  label="Audio description"
                  default
                />
              </video>
            ) : (
              <img
                src={media[activeIndex].src}
                alt={`${project.title} — ${labels.photo} ${activeIndex + 1} ${labels.of} ${media.length}`}
                decoding="async"
              />
            )}
            {media.length > 1 && (
              <div className="gallery-nav" aria-label={labels.navigation}>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label={labels.previousMedia}
                >
                  {labels.previous}
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label={labels.nextMedia}
                >
                  {labels.next}
                </button>
              </div>
            )}
          </div>

          <div className="gallery-thumbs" aria-label={labels.allMedia}>
            {media.map((item, index) => (
              <button
                type="button"
                className={index === activeIndex ? 'is-active' : undefined}
                onClick={() => setActiveIndex(index)}
                aria-label={`${labels.openMedia} ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                key={`${item.src}-${index}`}
              >
                {item.type === 'video' ? (
                  <video
                    poster={item.poster}
                    muted
                    playsInline
                    aria-hidden="true"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </button>
            ))}
          </div>

          {credits.length > 0 && (
            <section
              className="case-details"
              aria-labelledby={`case-details-${project.gallerySlug}`}
            >
              <p
                className="case-details-title"
                id={`case-details-${project.gallerySlug}`}
              >
                {details.title}
              </p>
              <div className="case-details-groups">
                {credits.map((group) => (
                  <div className="case-details-group" key={group.role}>
                    <h3>{details.roles[group.role]}</h3>
                    <ul>
                      {group.people.map((person) => (
                        <li key={person.href}>
                          <a
                            href={person.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {person.label} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}
        </dialog>
      )}
    </>
  );
}
