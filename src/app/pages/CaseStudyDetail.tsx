import { Link, useParams } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logo from '../../imports/logo.png';
import logoOutline from '../../imports/logo-outline.png';

const caseStudyData: Record<string, {
  title: string;
  description: string;
  role: string;
  year: string;
  client: string;
  heroImage: string;
  images: string[];
  overview: string;
  challenge: string;
  solution: string;
}> = {
  'studio-magazine': {
    title: 'Studio Magazine',
    description: 'Brand Identity & Editorial Design',
    role: 'Lead Designer',
    year: '2024',
    client: 'Studio Magazine',
    heroImage: 'https://images.unsplash.com/photo-1606135703721-fe8f08b95b4e?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1606135703721-fe8f08b95b4e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1615799936413-7e1cd55d55e5?w=1200&h=800&fit=crop'
    ],
    overview: 'A comprehensive brand identity and editorial design system for a modern creative magazine.',
    challenge: 'The magazine needed a fresh visual identity that would stand out in a crowded market while maintaining readability and elegance.',
    solution: 'Developed a minimal yet distinctive brand system with custom typography, a flexible grid system, and a sophisticated color palette that works across print and digital.'
  },
  'visual-identity': {
    title: 'Visual Identity',
    description: 'Brand Design & Systems',
    role: 'Brand Designer',
    year: '2024',
    client: 'Modern Brand Co.',
    heroImage: 'https://images.unsplash.com/photo-1615799936413-7e1cd55d55e5?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1615799936413-7e1cd55d55e5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606135703721-fe8f08b95b4e?w=1200&h=800&fit=crop'
    ],
    overview: 'A complete visual identity system for a forward-thinking brand.',
    challenge: 'Creating a cohesive brand identity that communicates innovation while remaining timeless.',
    solution: 'Built a comprehensive design system including logo, color palette, typography, and brand guidelines that scale across all touchpoints.'
  },
  'app-interface': {
    title: 'App Interface',
    description: 'Mobile Application Design',
    role: 'UX/UI Designer',
    year: '2024',
    client: 'Tech Startup',
    heroImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop'
    ],
    overview: 'Designing an intuitive mobile application for a productivity startup.',
    challenge: 'Balancing feature complexity with ease of use for first-time users.',
    solution: 'Created a clean, gesture-based interface with progressive disclosure, onboarding flows, and thoughtful micro-interactions.'
  },
  'living-space': {
    title: 'Living Space',
    description: 'Interior Design Showcase',
    role: 'Creative Director',
    year: '2024',
    client: 'Interior Design Studio',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop'
    ],
    overview: 'A digital showcase for contemporary interior design projects.',
    challenge: 'Presenting interior design work in a way that captures the atmosphere and attention to detail.',
    solution: 'Developed a photography-first layout with careful attention to spacing, typography, and transitions that mirror the calm sophistication of the physical spaces.'
  }
};

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudyData[id] : null;

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

      {/* Hero Image */}
      <section className="px-6 mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
            <ImageWithFallback
              src={study.heroImage}
              alt={study.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="px-6 pb-20 max-w-4xl mx-auto">
        <div className="space-y-16">
          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              Overview
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{study.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              Challenge
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{study.challenge}</p>
          </div>

          <div>
            <h2 className="text-2xl mb-4" style={{ fontFamily: '"Fraunces", serif', fontWeight: 400 }}>
              Solution
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{study.solution}</p>
          </div>
        </div>
      </section>

      {/* Additional Images */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {study.images.slice(1).map((image, index) => (
            <div key={index} className="aspect-[16/10] bg-gray-100 overflow-hidden">
              <ImageWithFallback
                src={image}
                alt={`${study.title} - Image ${index + 2}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

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
