'use client';

/* oxlint-disable next/no-img-element -- gallery files are pre-optimized WebP assets */

import { useEffect, useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { assetPath } from './asset-path';
import {
  caseCredits,
  siteCopy,
  type Language,
  type PortfolioProject,
} from './i18n';

function getGalleryImages(project: PortfolioProject) {
  const images = Array.from({ length: project.galleryCount }, (_, index) => ({
    type: 'image' as const,
    src: assetPath(
      `/gallery/${project.gallerySlug}/${String(index + 1).padStart(2, '0')}.webp`,
    ),
  }));

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

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (nextOpen) setActiveIndex(0);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        className="project-trigger"
        aria-label={`${labels.openGallery} ${project.title}`}
      >
        <figure>
          <div className="image-wrap">
            <img src={assetPath(project.image)} alt={project.alt} loading="lazy" />
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
      </DialogTrigger>

      <DialogContent className="gallery-dialog" showCloseButton={false}>
        <DialogClose className="gallery-close" aria-label={labels.close}>
          <span aria-hidden="true">×</span>
        </DialogClose>
        <header className="gallery-header">
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(media.length).padStart(2, '0')}
          </DialogDescription>
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
                src={assetPath('/media/pony-video-captions.vtt')}
                srcLang="en"
                label="Audio cues"
              />
            </video>
          ) : (
            <img
              src={media[activeIndex].src}
              alt={`${project.title} — ${labels.photo} ${activeIndex + 1} ${labels.of} ${media.length}`}
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
              key={item.src}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  muted
                  playsInline
                  preload="none"
                  aria-hidden="true"
                >
                  <track
                    kind="captions"
                    src={assetPath('/media/pony-video-captions.vtt')}
                    srcLang="en"
                    label="Audio cues"
                  />
                </video>
              ) : (
                <img src={item.src} alt="" aria-hidden="true" loading="lazy" />
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
                        <a href={person.href} target="_blank" rel="noreferrer">
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
      </DialogContent>
    </Dialog>
  );
}
