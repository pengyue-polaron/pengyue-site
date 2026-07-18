import { createContext, useContext, useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  GraduationCap,
  LinkSimple,
  LinkedinLogo,
  Moon,
  Sun,
} from '@phosphor-icons/react';
import {
  BrowserRouter,
  Link,
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import {
  externalLinks,
  profile,
  publications,
  stories,
  type Publication,
  type Story,
  type StoryImage,
} from './data/site';
import {
  localizedLinkLabel,
  profileText,
  publicationText,
  storyText,
  ui,
  type Language,
} from './data/i18n';

type Theme = 'light' | 'dark';

const LanguageContext = createContext<Language>('en');

function useLanguage() {
  return useContext(LanguageContext);
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getInitialThemeOverride(): Theme | null {
  const requested = new URLSearchParams(window.location.search).get('theme');
  if (requested === 'light' || requested === 'dark') return requested;
  const stored = window.localStorage.getItem('themePreference');
  if (stored === 'light' || stored === 'dark') return stored;
  return null;
}

function getInitialLanguage(): Language {
  const applied = document.documentElement.dataset.language;
  if (applied === 'en' || applied === 'zh') return applied;
  return window.navigator.language.toLowerCase().startsWith('zh')
    ? 'zh'
    : 'en';
}

function ContactIcon({ href }: { href: string }) {
  const props = { 'aria-hidden': true, size: 20, weight: 'regular' as const };
  if (href.startsWith('mailto:')) return <EnvelopeSimple {...props} />;
  if (href.includes('scholar.google')) return <GraduationCap {...props} />;
  if (href.includes('github.com')) return <GithubLogo {...props} />;
  if (href.includes('huggingface.co')) {
    return <span aria-hidden="true" className="hugging-face-icon" />;
  }
  if (href.includes('linkedin.com')) return <LinkedinLogo {...props} />;
  return <LinkSimple {...props} />;
}

function ExternalLink({
  href,
  label,
  iconOnly = false,
}: {
  href: string;
  label: string;
  iconOnly?: boolean;
}) {
  const isEmail = href.startsWith('mailto:');
  return (
    <a
      href={href}
      className={iconOnly ? 'icon-only-link' : undefined}
      aria-label={iconOnly ? label : undefined}
      title={iconOnly ? label : undefined}
      {...(!isEmail && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {iconOnly ? (
        <ContactIcon href={href} />
      ) : (
        <>
          <span className="external-link-label">{label}</span>
          <ArrowUpRight aria-hidden="true" size={14} weight="regular" />
        </>
      )}
    </a>
  );
}

function EntryLinks({ links }: { links: Story['links'] }) {
  const language = useLanguage();
  if (!links?.length) return null;

  return (
    <div className="entry-links">
      {links.map((link) =>
        link.href.startsWith('/') ? (
          <Link key={link.label} to={link.href}>
            {localizedLinkLabel(link, language)}
            <ArrowRight aria-hidden="true" size={14} weight="regular" />
          </Link>
        ) : (
          <ExternalLink
            key={link.label}
            {...link}
            label={localizedLinkLabel(link, language)}
          />
        ),
      )}
    </div>
  );
}

function IdentityPanel() {
  const language = useLanguage();
  const copy = ui[language];
  const identity = profileText[language];

  return (
    <aside className="identity-panel" aria-label={copy.profile}>
      <div className="identity-block">
        <Link className="identity-home" to="/" aria-label={copy.homeLabel}>
          <span className="identity-name">{identity.primaryName}</span>
          <span className="identity-chinese">{identity.secondaryName}</span>
          <span className="identity-cantonese">Paang4 Jyut6 · Guangzhou</span>
        </Link>
        <div className="identity-meta">
          <span>{identity.degree}</span>
          <span>{identity.institution}</span>
          <span>{identity.graduationYear}</span>
        </div>
      </div>

      <nav className="identity-links" aria-label={copy.externalProfiles}>
        {externalLinks.map((link) => (
          <ExternalLink
            key={link.label}
            {...link}
            label={localizedLinkLabel(link, language)}
            iconOnly
          />
        ))}
      </nav>
    </aside>
  );
}

function Header({
  theme,
  onToggleTheme,
  onToggleLanguage,
}: {
  theme: Theme;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
}) {
  const language = useLanguage();
  const copy = ui[language];
  const navItems = [
    { label: copy.about, href: '/' },
    { label: copy.stories, href: '/stories' },
    { label: copy.research, href: '/research' },
  ];

  return (
    <header className="topbar">
      <nav className="primary-nav" aria-label={copy.primaryNavigation}>
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === '/'}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="topbar-actions">
        <button
          className="language-toggle"
          type="button"
          onClick={onToggleLanguage}
          aria-label={copy.switchLanguage}
          lang={language === 'en' ? 'zh-CN' : 'en'}
        >
          {copy.switchLanguageShort}
        </button>
        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? copy.switchToLight : copy.switchToDark}
        >
          {theme === 'dark' ? (
            <Sun aria-hidden="true" size={17} weight="regular" />
          ) : (
            <Moon aria-hidden="true" size={17} weight="regular" />
          )}
        </button>
      </div>
    </header>
  );
}

function PageHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="page-heading">
      <h1>{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </header>
  );
}

function HomePage() {
  const language = useLanguage();

  if (language === 'zh') {
    return (
      <div className="page home-page" lang="zh-CN">
        <section aria-label="关于彭越">
          <div className="home-copy">
            <h1 className="home-intro">
              我是彭越，就读于上海纽约大学，主修计算机科学。
            </h1>
            <p>
              一路走来，有几样东西陪了我很久：从 FLL、VEX，到{' '}
              <Link to="/stories/first-robotics">FRC</Link> 与{' '}
              <Link to="/stories/robomaster">RoboMaster</Link> 的机器人赛场；一个已经运行十余年的 Minecraft 世界{' '}
              <Link to="/stories/easecation">EaseCation</Link>；以及对群山、雪线和远方近乎固执的向往。
            </p>
            <p>
              我喜欢一群人围着机器人争论、调试，在一次次失败之后，看它终于按照想象中的方式动起来；也喜欢守着一个虚拟世界，看原本陌生的人在其中相遇，慢慢拥有共同的故事。后来我才意识到，我在意的或许从来不只是机器与代码，而是人们因为相信同一件事聚在一起，再把原本不存在的东西，一点一点做出来。
            </p>
            <p>
              现在，我做些<Link to="/research">研究</Link>，<a href="https://github.com/pengyue-polaron">写些代码</a>，也常常被那些尚无答案的问题吸引。我喜欢把偶然冒出的念头认真对待，直到它从一个不太确定的想法，变成真正能够运行的东西。比起沿着已经画好的路线前进，我更愿意顺着好奇心多走几步，也去看看山的那边，究竟还有什么。
            </p>
            <p>
              希望很多年以后回头看，那些走过的远路、做过的梦、守过的世界，以及和一群人共同熬过的夜，都算数。
            </p>
          </div>
          <blockquote className="motto" aria-label="座右铭">
            <p className="motto-english motto-primary-chinese">
              <strong>不为无益之事，何以遣有涯之生。</strong>
            </p>
            <p className="motto-chinese motto-secondary-english" lang="en">
              <strong>What’s life without whimsy?</strong>
            </p>
          </blockquote>
        </section>
      </div>
    );
  }

  return (
    <div className="page home-page">
      <section aria-label="About Yue Peng">
        <div className="home-copy">
          <h1 className="home-intro">
            I’m Peng Yue, a computer science student at NYU Shanghai.
          </h1>
          <p>
            A few things have stayed with me for much of my life: robotics
            competitions, from FLL and VEX to{' '}
            <Link to="/stories/first-robotics">FRC</Link> and{' '}
            <Link to="/stories/robomaster">RoboMaster</Link>;{' '}
            <Link to="/stories/easecation">EaseCation</Link>, a Minecraft world
            that has been running for more than a decade; and an almost stubborn
            longing for mountains, snowlines, and distant places.
          </p>
          <p>
            I love the nights when a team gathers around a robot, debating,
            debugging, and trying again until it finally moves the way we
            imagined. I also enjoy looking after a virtual world where strangers
            meet, build things together, and slowly become part of one another’s
            stories. Over time, I have come to realize that what draws me in is
            not only the machines or the code, but the way people gather around
            something they believe in and bring into existence what was not
            there before.
          </p>
          <p>
            These days, I spend much of my time doing{' '}
            <Link to="/research">research</Link>,{' '}
            <a href="https://github.com/pengyue-polaron">writing code</a>,
            and following questions that do not yet have answers. Rather than
            staying entirely on paths already mapped out, I prefer to let
            curiosity lead me a little farther—to turn passing ideas into
            something real, and to see what might be waiting beyond the next
            ridge.
          </p>
          <p>
            Years from now, I hope I can look back and feel that the long roads,
            unlikely dreams, worlds I helped keep alive, and late nights shared
            with others all counted for something.
          </p>
        </div>
        <blockquote className="motto" aria-label="Personal motto">
          <p className="motto-english">
            <strong>What’s life without whimsy?</strong>
          </p>
          <p className="motto-chinese" lang="zh-Hans">
            <strong>不为无益之事，何以遣有涯之生。</strong>
          </p>
        </blockquote>
      </section>
    </div>
  );
}

function AuthorList({ publication }: { publication: Publication }) {
  return (
    <p className="authors">
      {publication.authors.map((author, index) => {
        const isYue = author === profile.name;
        const isEqual = publication.equalContribution?.includes(author);
        return (
          <span key={author}>
            {index > 0 && ', '}
            <span className={isYue ? 'author-self' : undefined}>{author}</span>
            {isEqual && '*'}
          </span>
        );
      })}
    </p>
  );
}

function PublicationsSection() {
  const language = useLanguage();
  const copy = ui[language];
  const groups: Publication['type'][] = [
    'Published and accepted',
    'Preprints and manuscripts',
  ];

  return (
    <section
      className="content-section publications-section"
      id="publications"
      aria-label={copy.publications}
    >
      {groups.map((group) => (
        <section className="publication-group" key={group}>
          <h3 className="publication-group-title">
            {group === 'Published and accepted' ? copy.published : copy.preprints}
          </h3>
          <div className="publication-list">
            {publications
              .filter((publication) => publication.type === group)
              .map((sourcePublication) => {
                const publication = publicationText(sourcePublication, language);
                return (
                <article className="publication-entry" key={publication.title}>
                  <p className="publication-year">
                    {language === 'zh'
                      ? publication.date.replace(/([A-Z][a-z]{2}) (\d{4})/, (_, month, year) =>
                          `${year} 年 ${({ Mar: 3, Jun: 6, Jul: 7 } as Record<string, number>)[month] || month} 月`,
                        )
                      : publication.date}
                  </p>
                  <div>
                    <p className="entry-meta">{publication.status}</p>
                    <h4>{publication.title}</h4>
                    <AuthorList publication={publication} />
                    {publication.venue && (
                      <p className="venue">{publication.venue}</p>
                    )}
                    <p>{publication.summary}</p>
                    {publication.image && publication.imageAlt && (
                      <figure className="publication-figure">
                        <img
                          src={publication.image}
                          alt={publication.imageAlt}
                          width={publication.imageWidth}
                          height={publication.imageHeight}
                          loading="lazy"
                        />
                      </figure>
                    )}
                    {publication.links.length > 0 && (
                      <div className="entry-links">
                        {publication.links.map((link) => (
                          <ExternalLink
                            key={link.label}
                            {...link}
                            label={localizedLinkLabel(link, language)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </article>
                );
              })}
          </div>
        </section>
      ))}
    </section>
  );
}

function ResearchPage() {
  const language = useLanguage();
  const copy = ui[language];
  return (
    <div className="page research-page">
      <PageHeading title={copy.research} />
      <PublicationsSection />
    </div>
  );
}

function StoriesPage() {
  const language = useLanguage();
  const copy = ui[language];

  return (
    <div className="page stories-page">
      <PageHeading
        title={copy.stories}
        description={copy.storiesDescription}
      />

      <section className="story-gallery" aria-label={copy.selectedStories}>
        {stories.map((sourceStory, index) => {
          const story = storyText(sourceStory, language);
          const coverImage = story.coverImage ?? story.heroImages?.[0];
          return (
            <Link
              className="story-gallery-entry"
              key={story.slug}
              to={`/stories/${story.slug}`}
            >
              {coverImage ? (
                <div className="story-gallery-image">
                  <img
                    src={coverImage.src}
                    alt=""
                    width={coverImage.width}
                    height={coverImage.height}
                    loading="lazy"
                    style={{ objectPosition: story.coverPosition }}
                  />
                </div>
              ) : (
                <div className="story-image-placeholder" aria-hidden="true">
                  <span className="placeholder-number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="placeholder-label">{copy.imageForthcoming}</span>
                </div>
              )}
              <div className="story-gallery-heading">
                <h2>{story.shortTitle}</h2>
                <span className="story-arrow" aria-hidden="true">
                  <ArrowRight size={18} weight="regular" />
                </span>
              </div>
              <p className="story-gallery-meta">
                {story.category} · {story.period}
              </p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

function StoryFigure({
  image,
  className,
}: {
  image: StoryImage;
  className?: string;
}) {
  const visual = (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
    />
  );

  return (
    <figure className={className}>
      {image.href ? (
        <a href={image.href} target="_blank" rel="noopener noreferrer">
          {visual}
        </a>
      ) : (
        visual
      )}
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

function StoryPage() {
  const language = useLanguage();
  const copy = ui[language];
  const { slug } = useParams();
  const sourceStory = stories.find((candidate) => candidate.slug === slug);

  if (!sourceStory) return <NotFoundPage />;
  const story = storyText(sourceStory, language);

  return (
    <article className="page story-page">
      <Link className="story-back" to="/stories">
        <ArrowLeft aria-hidden="true" size={15} weight="regular" />
        {copy.allStories}
      </Link>

      <header className="story-hero">
        <p className="story-kicker">
          {story.category} · {story.period}
        </p>
        <h1>{story.title}</h1>
        <p className="story-introduction">{story.introduction}</p>
        <EntryLinks links={story.links} />
      </header>

      {story.heroImages && (
        <div
          className={`story-hero-media${story.heroImages.length === 1 ? ' single' : ''}`}
        >
          {story.heroImages.map((image) => (
            <StoryFigure image={image} key={image.src} />
          ))}
        </div>
      )}

      <section className="story-sections" aria-label={`${story.title} details`}>
        {story.sections.map((section) => (
          <section className="story-section" key={section.title}>
            <div className="story-section-heading">
              <h2>{section.title}</h2>
              {section.period && <p>{section.period}</p>}
            </div>
            <div>
              <p>{section.description}</p>
              {section.items && (
                <div className="story-project-list">
                  {section.items.map((item) => (
                    <article className="story-project" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              )}
              <EntryLinks links={section.links} />
              {section.images && (
                <div className="story-section-media">
                  {section.images.map((image) => (
                    <StoryFigure image={image} key={image.src} />
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </section>

    </article>
  );
}

function NotFoundPage() {
  const copy = ui[useLanguage()];
  return (
    <div className="page">
      <PageHeading
        title={copy.pageNotFound}
        description={copy.pageNotFoundDescription}
      />
      <p className="not-found-link">
        <Link to="/">{copy.returnHome}</Link>
      </p>
    </div>
  );
}

function ScrollAndTitle() {
  const language = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const story = location.pathname.startsWith('/stories/')
      ? stories.find(
          (candidate) => `/stories/${candidate.slug}` === location.pathname,
        )
      : undefined;
    const localizedStory = story ? storyText(story, language) : undefined;
    const name = language === 'zh' ? '彭越' : 'Yue Peng';
    const pageTitles: Record<string, string> = {
      '/': name,
      '/research': `${ui[language].research} | ${name}`,
      '/stories': `${ui[language].stories} | ${name}`,
    };
    document.title = localizedStory
      ? `${localizedStory.title} | ${name}`
      : pageTitles[location.pathname] || name;
  }, [language, location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));
      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.hash, location.pathname]);

  return null;
}

function AppShell() {
  const [themeOverride, setThemeOverride] = useState<Theme | null>(
    getInitialThemeOverride,
  );
  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const theme = themeOverride ?? systemTheme;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystemTheme = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? 'dark' : 'light');
    };

    preference.addEventListener('change', syncSystemTheme);
    return () => preference.removeEventListener('change', syncSystemTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute('content', theme === 'dark' ? '#171716' : '#f8f7f4');
  }, [theme]);

  useEffect(() => {
    const copy = ui[language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.dataset.language = language;

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', copy.siteDescription);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', copy.siteDescription);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute('content', copy.siteDescription);
  }, [language]);

  const copy = ui[language];

  return (
    <LanguageContext.Provider value={language}>
      <a className="skip-link" href="#main-content">
        {copy.skipToContent}
      </a>
      <div className="site-shell">
        <IdentityPanel />
        <div className="content-panel">
          <Header
            theme={theme}
            onToggleTheme={() => {
              const nextTheme = theme === 'dark' ? 'light' : 'dark';
              window.localStorage.setItem('themePreference', nextTheme);
              setThemeOverride(nextTheme);
            }}
            onToggleLanguage={() =>
              setLanguage((current) => (current === 'en' ? 'zh' : 'en'))
            }
          />
          <main className="main-content" id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route
                path="/stories/earlier-projects"
                element={<Navigate replace to="/stories/high-school-projects" />}
              />
              <Route path="/stories/:slug" element={<StoryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <footer className="site-footer">
            <span>© 2026 {language === 'zh' ? '彭越' : 'Yue Peng'}</span>
            <span>{copy.lastUpdated}</span>
          </footer>
        </div>
      </div>
      <ScrollAndTitle />
    </LanguageContext.Provider>
  );
}

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

  return (
    <BrowserRouter basename={basename}>
      <AppShell />
    </BrowserRouter>
  );
}
