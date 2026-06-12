import { Link, useParams } from 'react-router';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logo from '../../imports/logo.png';
import logoOutline from '../../imports/logo-outline.png';
import tmVideo from '../../imports/TM_Portfolio_Showcase_45s.mp4';
import homepageDesktop from '../../imports/Homepage_desktop.png';
import whatisTMpage from '../../imports/WhatisTMpage_desktop.png';
import taughtByNonProfit from '../../imports/TaughtbyNonProfit_desktop.png';
import learnTM from '../../imports/LearnTM_desktop.png';
import singleTMCenter from '../../imports/SingleTMCenter_desktop.png';
import bookLocal from '../../imports/BookLocal_desktop-6.png';

const caseStudyData: Record<string, {
  title: string;
  description: string;
  role: string;
  year: string;
  client: string;
  heroImage: string;
  heroVideo?: string;
  images: string[];
  overview: string;
  challenge: string;
  solution: string;
}> = {
  'transcendental-meditation': {
    title: 'Transcendental Meditation',
    description: 'Creating a digital experience that reflects the simplicity and clarity of the TM practice.',
    role: 'Lead Designer',
    year: '2024',
    client: 'Transcendental Meditation',
    heroImage: 'https://images.unsplash.com/photo-1606135703721-fe8f08b95b4e?w=1200&h=800&fit=crop',
    heroVideo: tmVideo,
    images: [
      homepageDesktop,
      whatisTMpage,
      taughtByNonProfit,
      learnTM,
      singleTMCenter,
      bookLocal,
    ],
    overview: `Transcendental Meditation has helped millions of people worldwide, yet the digital experience didn't fully reflect the simplicity, trust, and calmness associated with the practice. The existing website contained a large amount of information, multiple user journeys, and diverse audience needs ranging from first-time visitors to experienced practitioners. The challenge was to simplify the experience, improve content discoverability, and create a cohesive design language that could scale across the organisation's digital ecosystem.`,
    challenge: 'Before attending a course, most visitors move through several stages.',
    solution: 'A core design principle was ensuring the interface reflected the philosophy behind the practice itself.'
  },
  'fitradio': {
    title: 'FitRadio',
    description: 'Brand Design & Systems',
    role: 'Brand Designer',
    year: '2024',
    client: 'FitRadio',
    heroImage: 'https://images.unsplash.com/photo-1615799936413-7e1cd55d55e5?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1615799936413-7e1cd55d55e5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606135703721-fe8f08b95b4e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200&h=800&fit=crop',
    ],
    overview: 'A complete visual identity system for a forward-thinking brand.',
    challenge: 'Creating a cohesive brand identity that communicates innovation while remaining timeless.',
    solution: 'Built a comprehensive design system including logo, color palette, typography, and brand guidelines that scale across all touchpoints.'
  },
  'bizzhub': {
    title: 'BizzHub',
    description: 'Mobile Application Design',
    role: 'UX/UI Designer',
    year: '2024',
    client: 'BizzHub',
    heroImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=1200&h=800&fit=crop',
    ],
    overview: 'Designing an intuitive mobile application for a productivity startup.',
    challenge: 'Balancing feature complexity with ease of use for first-time users.',
    solution: 'Created a clean, gesture-based interface with progressive disclosure, onboarding flows, and thoughtful micro-interactions.'
  },
  'project-management': {
    title: 'Project Management',
    description: 'Interior Design Showcase',
    role: 'Creative Director',
    year: '2024',
    client: 'Project Management',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&h=800&fit=crop',
    ],
    overview: 'A digital showcase for contemporary interior design projects.',
    challenge: 'Presenting interior design work in a way that captures the atmosphere and attention to detail.',
    solution: 'Developed a photography-first layout with careful attention to spacing, typography, and transitions that mirror the calm sophistication of the physical spaces.'
  }
};

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudyData[id] : null;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goNext = useCallback(() => {
    if (lightboxIndex === null || !study) return;
    setLightboxIndex((lightboxIndex + 1) % study.images.length);
  }, [lightboxIndex, study]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null || !study) return;
    setLightboxIndex((lightboxIndex - 1 + study.images.length) % study.images.length);
  }, [lightboxIndex, study]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  if (!study) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Case study not found</h1>
          <Link to="/" className="text-sm underline">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-8 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="Lakmal" className="w-[60px] h-[60px]" />
          </Link>
        </div>
        <nav className="flex gap-8 text-sm">
          <Link to="/" className="hover:opacity-60 transition-opacity">Work</Link>
          <a href="#" className="hover:opacity-60 transition-opacity">About</a>
        </nav>
      </header>

      {/* Breadcrumb */}
      <section className="px-6 py-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">{study.title}</span>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-6 py-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
          {study.title}
        </h1>
        <p className="text-xl text-gray-600 mb-12">{study.description}</p>

        {/* Project Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2">Role</p>
            <p className="text-sm">{study.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2">Year</p>
            <p className="text-sm">{study.year}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-gray-500 mb-2">Client</p>
            <p className="text-sm">{study.client}</p>
          </div>
        </div>
      </section>

      {/* Hero Media */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
            {study.heroVideo ? (
              <video
                src={study.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <ImageWithFallback
                src={study.heroImage}
                alt={study.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="space-y-16">
          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              The Challenge
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{study.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              Understanding the Journey
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">{study.challenge}</p>
            <div className="flex flex-wrap items-center gap-2">
              {['Curiosity', 'Learning', 'Trust Building', 'Finding a Local Centre', 'Course Enrolment', 'Practice'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 border border-gray-200 rounded-full px-4 py-1.5">{step}</span>
                  {i < arr.length - 1 && <span className="text-gray-300">→</span>}
                </div>
              ))}
            </div>
            <p className="text-lg leading-relaxed text-gray-700 mt-8">The design needed to support each stage without overwhelming users with information.</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              Designing for Calm
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">{study.solution}</p>
            <p className="text-lg text-gray-700 mb-4">The experience focused on:</p>
            <ul className="space-y-2 mb-8">
              {['Reduced visual noise', 'Clear information hierarchy', 'Guided content journeys', 'Improved readability', 'Intentional use of whitespace', 'Consistent interaction patterns'].map((item) => (
                <li key={item} className="text-lg text-gray-700 flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">Rather than competing for attention, the interface was designed to create a sense of clarity and focus.</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              Building a Scalable Design System
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">One of the most significant parts of the project was establishing a reusable design system.</p>
            <p className="text-lg text-gray-700 mb-4">The system included:</p>
            <ul className="space-y-2 mb-8">
              {['Design foundations', 'Typography standards', 'Colour tokens', 'Spacing scales', 'Reusable components', 'Responsive patterns', 'Accessibility guidelines'].map((item) => (
                <li key={item} className="text-lg text-gray-700 flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">The goal was to create a shared language that could support future growth while maintaining consistency across the experience.</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              Creating Consistency at Scale
            </h2>
            <p className="text-lg text-gray-700 mb-4">The design system enabled:</p>
            <ul className="space-y-2 mb-8">
              {['Faster design iteration', 'Improved collaboration', 'More consistent user experiences', 'Easier maintenance and expansion'].map((item) => (
                <li key={item} className="text-lg text-gray-700 flex items-start gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-gray-700">By moving from isolated page designs to a system-based approach, the organisation gained a foundation capable of supporting future digital initiatives.</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              Outcome
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">The redesigned experience better aligned the digital product with the values of the organisation.</p>
            <p className="text-lg leading-relaxed text-gray-700">The result was a clearer information architecture, a more approachable user journey, and a scalable design foundation that supports both current and future needs.</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              Outcome
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">The redesigned experience better aligned the digital product with the values of the organisation.</p>
            <p className="text-lg leading-relaxed text-gray-700">The result was a clearer information architecture, a more approachable user journey, and a scalable design foundation that supports both current and future needs.</p>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4">
          {study.images.slice(0, 6).map((image, index) => (
            <button
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="aspect-[4/3] bg-gray-100 overflow-hidden block w-full focus:outline-none group"
            >
              <ImageWithFallback
                src={image}
                alt={`${study.title} - Image ${index + 1}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="fixed top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="fixed left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className="max-w-5xl w-full mx-auto px-16 py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={study.images[lightboxIndex]}
              alt={`${study.title} - Image ${lightboxIndex + 1}`}
              className="w-full h-auto"
            />
            <p className="text-center text-gray-400 text-sm mt-4">
              {lightboxIndex + 1} / {study.images.slice(0, 6).length}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="fixed right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}

      {/* Back to Work */}
      <section className="px-6 py-20 text-center">
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
        >
          Back to Work
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 max-w-7xl mx-auto">
        <div className="flex justify-center">
          <img src={logoOutline} alt="Lakmal" className="w-[72px] h-[72px]" />
        </div>
      </footer>
    </div>
  );
}
