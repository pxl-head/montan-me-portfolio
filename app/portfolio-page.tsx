'use client';

/* oxlint-disable next/no-img-element -- portfolio files are pre-optimized WebP assets */

import { useEffect } from 'react';

import { assetPath } from './asset-path';
import { siteCopy, type Language } from './i18n';
import { LanguageSwitcher } from './language-switcher';
import { ProjectGallery } from './portfolio-gallery';
import { ThemeSwitcher } from './theme-switcher';

const socials = [
  ['TELEGRAM', 'https://t.me/montan_me'],
  [
    'INSTAGRAM',
    'https://www.instagram.com/montan.me?igsi=MWNncDEzZ2U1d3Q1ag%3D%3D&utm_source=qr',
  ],
  ['TIKTOK', 'https://www.tiktok.com/@montan.me?_r=1&_t=ZS-99LVg2zFRZK'],
];

export function PortfolioPage({ language }: { language: Language }) {
  const copy = siteCopy[language];
  const projects = copy.projects;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main data-language={language} lang={language}>
      <header className="site-header">
        <nav className="header-menu" aria-label={copy.header.navigationLabel}>
          <details className="site-menu">
            <summary
              onKeyDown={(event) => {
                if (event.key === 'Escape') {
                  event.currentTarget.parentElement?.removeAttribute('open');
                  event.currentTarget.focus();
                }
              }}
            >
              {copy.header.menu}
            </summary>
            <div className="site-menu-panel">
              <div className="site-menu-projects">
                <p className="site-menu-label">{copy.header.work}</p>
                <div className="site-menu-project-list">
                  {projects.map((project) => (
                    <a
                      className="project-menu-link"
                      href={`#project-${project.number}`}
                      key={project.number}
                      onClick={(event) => {
                        event.currentTarget
                          .closest('details')
                          ?.removeAttribute('open');
                      }}
                    >
                      <span>{project.number}</span>
                      <span>{project.title}</span>
                    </a>
                  ))}
                </div>
              </div>
              <a
                className="site-menu-contact"
                href="#contact"
                onClick={(event) => {
                  event.currentTarget
                    .closest('details')
                    ?.removeAttribute('open');
                }}
              >
                {copy.header.contact}
              </a>
              <div className="site-menu-controls">
                <ThemeSwitcher language={language} />
                <LanguageSwitcher language={language} />
              </div>
            </div>
          </details>
        </nav>
        <a className="brand" href="#top" aria-label={copy.header.homeLabel}>
          MONTAN.ME
        </a>
      </header>

      <section className="hero" id="top" aria-label="MONTAN.ME">
        <img
          className="hero-art"
          src={assetPath('/media/cover.webp')}
          alt={copy.hero.alt}
          width="2200"
          height="1555"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-scrim" />
        <div className="hero-corners" aria-hidden="true">
          <span>{copy.hero.portfolio}</span>
          <span>{copy.hero.scroll}</span>
        </div>
      </section>

      <section className="statement" aria-labelledby="statement-title">
        <p className="eyebrow">{copy.statement.eyebrow}</p>
        <h1 id="statement-title">
          {copy.statement.headline[0]}
          <br />
          {copy.statement.headline[1]}
        </h1>
        <p className="statement-copy">{copy.statement.copy}</p>
      </section>

      <div className="signal-strip" aria-hidden="true">
        <div>
          <span>{copy.signal}</span>
          <span>{copy.signal}</span>
        </div>
      </div>

      <section className="work" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">{copy.work.eyebrow}</p>
          <h2 id="work-title">{copy.work.title}</h2>
          <p>{copy.work.status}</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              id={`project-${project.number}`}
              key={project.number}
            >
              <ProjectGallery project={project} language={language} />
            </article>
          ))}
        </div>
      </section>

      <section className="process-note" aria-labelledby="process-title">
        <div>
          <p className="eyebrow">{copy.process.eyebrow}</p>
          <p className="note-index">M.M / 001</p>
        </div>
        <h2 id="process-title">{copy.process.title}</h2>
        <p>{copy.process.copy}</p>
      </section>

      <section className="frame-archive" aria-labelledby="frames-title">
        <div className="frame-heading">
          <p className="eyebrow">{copy.framesSection.eyebrow}</p>
          <h2 id="frames-title">{copy.framesSection.title}</h2>
        </div>
        <div className="frame-wall">
          {copy.frames.map((frame, index) => {
            return (
              <figure key={frame.src}>
                {'type' in frame ? (
                  <video
                    src={assetPath(frame.src)}
                    poster={assetPath(frame.poster)}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={frame.alt}
                  >
                    <track
                      kind="captions"
                      src={assetPath('/media/pony-selected-frame-captions.vtt')}
                      srcLang="en"
                      label="Audio description"
                      default
                    />
                  </video>
                ) : (
                  <img
                    src={assetPath(frame.src)}
                    alt={frame.alt}
                    width={frame.width}
                    height={frame.height}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <figcaption>
                  {copy.framesSection.frame}{' '}
                  {String(index + 1).padStart(2, '0')}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <footer id="contact">
        <div className="footer-mark">
          <img
            src={assetPath('/media/mark.webp')}
            alt=""
            width="478"
            height="480"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <p>{copy.footer.availability}</p>
        </div>

        <div className="contact-main">
          <p className="eyebrow">{copy.footer.contact}</p>
          <a className="contact-link" href="https://t.me/mo0ntan">
            @mo0ntan ↗
          </a>
          <a className="email-link" href="mailto:tsergeev58@gmail.com">
            tsergeev58@gmail.com
          </a>
        </div>

        <div className="social-list" aria-label={copy.footer.socialsLabel}>
          {socials.map(([label, href], index) => (
            <a href={href} key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{label}</span>
              <span>↗</span>
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MONTAN.ME</span>
          <a href="#top">{copy.footer.backToTop}</a>
        </div>

        <p className="site-credit">
          {copy.footer.credit}{' '}
          <a
            href="https://pxl-head-portfolio.pxl-head.chatgpt.site"
            target="_blank"
            rel="noreferrer"
          >
            pxl_head
          </a>
        </p>
      </footer>
    </main>
  );
}
