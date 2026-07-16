import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  EnvelopeSimple,
  GithubLogo,
  GraduationCap,
  Moon,
  Sun,
} from '@phosphor-icons/react';
import {
  BrowserRouter,
  Link,
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
} from './data/site';

type Theme = 'light' | 'dark';

const navItems = [
  { label: 'About', href: '/' },
  { label: 'Research', href: '/research' },
  { label: 'Stories', href: '/stories' },
];

const pageTitles: Record<string, string> = {
  '/': 'Yue Peng',
  '/research': 'Research | Yue Peng',
  '/stories': 'Stories | Yue Peng',
};

function getInitialTheme(): Theme {
  const applied = document.documentElement.dataset.theme;
  if (applied === 'light' || applied === 'dark') return applied;
  const stored = window.localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function ContactIcon({ label }: { label: string }) {
  const props = { 'aria-hidden': true, size: 16, weight: 'regular' as const };
  if (label === 'Email') return <EnvelopeSimple {...props} />;
  if (label === 'Scholar') return <GraduationCap {...props} />;
  if (label === 'GitHub') return <GithubLogo {...props} />;
  return null;
}

function ExternalLink({
  href,
  label,
  showIcon = false,
}: {
  href: string;
  label: string;
  showIcon?: boolean;
}) {
  const isEmail = href.startsWith('mailto:');
  return (
    <a
      href={href}
      {...(!isEmail && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      <span className="external-link-label">
        {showIcon && <ContactIcon label={label} />}
        <span>{label}</span>
      </span>
      <ArrowUpRight aria-hidden="true" size={14} weight="regular" />
    </a>
  );
}

function EntryLinks({ links }: { links: Story['links'] }) {
  if (!links?.length) return null;

  return (
    <div className="entry-links">
      {links.map((link) =>
        link.href.startsWith('/') ? (
          <Link key={link.label} to={link.href}>
            {link.label}
            <ArrowRight aria-hidden="true" size={14} weight="regular" />
          </Link>
        ) : (
          <ExternalLink key={link.label} {...link} />
        ),
      )}
    </div>
  );
}

function IdentityPanel() {
  return (
    <aside className="identity-panel" aria-label="Profile">
      <div className="identity-block">
        <Link className="identity-home" to="/" aria-label="Yue Peng home">
          <span className="identity-name">{profile.name}</span>
          <span className="identity-chinese">{profile.chineseName}</span>
          <span className="identity-cantonese">Paang4 Jyut6 · Guangzhou</span>
        </Link>
        <div className="identity-meta">
          <span>{profile.degree}</span>
          <span>{profile.institution}</span>
          <span>{profile.graduationYear}</span>
        </div>
      </div>

      <nav className="identity-links" aria-label="External profiles">
        {externalLinks.map((link) => (
          <ExternalLink key={link.label} {...link} showIcon />
        ))}
      </nav>
    </aside>
  );
}

function Header({
  theme,
  onToggleTheme,
}: {
  theme: Theme;
  onToggleTheme: () => void;
}) {
  return (
    <header className="topbar">
      <nav className="primary-nav" aria-label="Primary navigation">
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
      <button
        className="theme-toggle"
        type="button"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <Sun aria-hidden="true" size={17} weight="regular" />
        ) : (
          <Moon aria-hidden="true" size={17} weight="regular" />
        )}
      </button>
    </header>
  );
}

function PageHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="page-heading">
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </header>
  );
}

function HomePage() {
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
            <Link to="/stories/robotics-lab-infrastructure">writing code</Link>,
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
  const groups: Publication['type'][] = [
    'Published and accepted',
    'Preprints and manuscripts',
  ];

  return (
    <section
      className="content-section publications-section"
      id="publications"
      aria-labelledby="publications-heading"
    >
      <h2 className="section-label" id="publications-heading">
        Publications
      </h2>

      {groups.map((group) => (
        <section className="publication-group" key={group}>
          <h3 className="publication-group-title">{group}</h3>
          <div className="publication-list">
            {publications
              .filter((publication) => publication.type === group)
              .map((publication) => (
                <article className="publication-entry" key={publication.title}>
                  <p className="publication-year">{publication.date}</p>
                  <div>
                    <p className="entry-meta">{publication.status}</p>
                    <h4>{publication.title}</h4>
                    <AuthorList publication={publication} />
                    <p className="venue">{publication.venue}</p>
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
                          <ExternalLink key={link.label} {...link} />
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </section>
  );
}

function ResearchPage() {
  return (
    <div className="page research-page">
      <PageHeading
        title="Research"
        description="Publications and manuscripts."
      />
      <PublicationsSection />
    </div>
  );
}

function StoriesPage() {
  return (
    <div className="page stories-page">
      <PageHeading
        title="Stories"
        description="Selected communities, teams, and systems I have helped build."
      />

      <section className="story-gallery" aria-label="Selected stories">
        {stories.map((story, index) => (
          <Link
            className="story-gallery-entry"
            key={story.slug}
            to={`/stories/${story.slug}`}
          >
            <div className="story-image-placeholder" aria-hidden="true">
              <span className="placeholder-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="placeholder-label">Image forthcoming</span>
            </div>
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
        ))}
      </section>
    </div>
  );
}

function StoryPage() {
  const { slug } = useParams();
  const story = stories.find((candidate) => candidate.slug === slug);

  if (!story) return <NotFoundPage />;

  return (
    <article className="page story-page">
      <Link className="story-back" to="/stories">
        <ArrowLeft aria-hidden="true" size={15} weight="regular" />
        All stories
      </Link>

      <header className="story-hero">
        <p className="story-kicker">
          {story.category} · {story.period}
        </p>
        <h1>{story.title}</h1>
        <p className="story-introduction">{story.introduction}</p>
        <EntryLinks links={story.links} />
      </header>

      <section className="story-sections" aria-label={`${story.title} details`}>
        {story.sections.map((section) => (
          <section className="story-section" key={section.title}>
            <div className="story-section-heading">
              <h2>{section.title}</h2>
              {section.period && <p>{section.period}</p>}
            </div>
            <div>
              <p>{section.description}</p>
              <EntryLinks links={section.links} />
            </div>
          </section>
        ))}
      </section>

    </article>
  );
}

function NotFoundPage() {
  return (
    <div className="page">
      <PageHeading
        title="Page not found"
        description="The page you requested does not exist."
      />
      <p className="not-found-link">
        <Link to="/">Return home</Link>
      </p>
    </div>
  );
}

function ScrollAndTitle() {
  const location = useLocation();

  useEffect(() => {
    const story = location.pathname.startsWith('/stories/')
      ? stories.find(
          (candidate) => `/stories/${candidate.slug}` === location.pathname,
        )
      : undefined;
    document.title = story
      ? `${story.title} | Yue Peng`
      : pageTitles[location.pathname] || 'Yue Peng';

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
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem('theme', theme);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute('content', theme === 'dark' ? '#171716' : '#f8f7f4');
  }, [theme]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="site-shell">
        <IdentityPanel />
        <div className="content-panel">
          <Header
            theme={theme}
            onToggleTheme={() =>
              setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
            }
          />
          <main className="main-content" id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/stories" element={<StoriesPage />} />
              <Route path="/stories/:slug" element={<StoryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <footer className="site-footer">
            <span>© 2026 Yue Peng</span>
            <span>Last updated: July 17, 2026</span>
          </footer>
        </div>
      </div>
      <ScrollAndTitle />
    </>
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
