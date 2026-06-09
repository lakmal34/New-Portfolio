import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logo from '../../imports/logo.png';
import logoOutline from '../../imports/logo-outline.png';
import figmaCommunityImg from '../../imports/ChatGPT_Image_Jun_9__2026__08_09_30_PM.png';
import transcendentalImg from '../../imports/ChatGPT_Image_Jun_6__2026__04_08_30_PM.png';
import fitRadioImg from '../../imports/ChatGPT_Image_Jun_6__2026__04_40_16_PM.png';
import bizzHubImg from '../../imports/ChatGPT_Image_Jun_6__2026__06_22_56_PM.png';
import livingSpaceImg from '../../imports/ChatGPT_Image_Jun_9__2026__06_35_56_PM.png';

const caseStudies = [
  {
    id: 'transcendental-meditation',
    title: 'Transcendental Meditation',
    image: transcendentalImg,
    alt: 'Transcendental Meditation'
  },
  {
    id: 'fitradio',
    title: 'FitRadio',
    image: fitRadioImg,
    alt: 'FitRadio'
  },
  {
    id: 'bizzhub',
    title: 'BizzHub',
    image: bizzHubImg,
    alt: 'BizzHub'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    image: livingSpaceImg,
    alt: 'Project Management'
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-8 flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <ImageWithFallback src={logo} alt="Lakmal" className="w-[60px] h-[60px] object-contain" />
        </Link>
        <nav className="flex gap-8 text-sm">
          <a href="#" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="#" className="hover:opacity-60 transition-opacity">About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl leading-tight mb-8" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
          I'm Lakmal Kaviratne,<br />
          UX & Product Designer<br />
          based in Australia.
        </h1>
      </section>

      {/* Project Grid */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-study/${study.id}`}
              className="space-y-4 block group"
            >
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <ImageWithFallback
                  src={study.image}
                  alt={study.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-gray-600">{study.title}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="relative flex items-start justify-between mb-20">
          <div className="absolute top-4 left-0 right-0 border-t border-dashed border-gray-300 mx-12" />
          {[
            {
              label: 'Discover',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              )
            },
            {
              label: 'Learn',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              )
            },
            {
              label: 'Build',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              )
            },
            {
              label: 'Launch',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              )
            },
            {
              label: 'Improve',
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              )
            },
          ].map((step) => (
            <div key={step.label} className="relative flex flex-col items-center gap-3 z-10">
              <div className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-600">
                {step.icon}
              </div>
              <span className="text-xs text-gray-500">{step.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl mb-6" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
            Every product is a journey.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-10">
            Whether it's finding calm, buying a first home, managing complex projects, or making confident business decisions, I design experiences that help people move forward with clarity.
          </p>
          <button className="px-8 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors">
            Let's work together
          </button>
        </div>
      </section>

      {/* Figma Community Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-6xl md:text-7xl mb-3" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>18.6K+</p>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-8">Figma Community Downloads</p>
            <p className="text-sm leading-relaxed text-gray-600 mb-8">
              Design systems and UI libraries trusted by thousands of designers around the world.
            </p>
            <a href="https://www.figma.com/@lakmal" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 hover:opacity-60 transition-opacity">
              View Community Profile <span>→</span>
            </a>
          </div>
          {/* Right — mockup */}
          <div className="rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <ImageWithFallback
              src={figmaCommunityImg}
              alt="Figma Design System"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <img src={logoOutline} alt="Lakmal" className="w-[72px] h-[72px]" />
          <p className="text-xs text-gray-400">© 2026 Lakmal Kaviratne. All rights reserved.</p>
          <nav className="flex gap-8 text-xs tracking-widest uppercase text-gray-500">
            <a href="#" className="hover:opacity-60 transition-opacity">Work</a>
            <a href="#" className="hover:opacity-60 transition-opacity">About</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
