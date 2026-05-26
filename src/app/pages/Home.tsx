import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import logo from '../../imports/logo.png';
import logoOutline from '../../imports/logo-outline.png';

const caseStudies = [
  {
    id: 'studio-magazine',
    title: 'Studio Magazine',
    image: 'https://images.unsplash.com/photo-1606135703721-fe8f08b95b4e?w=600&h=450&fit=crop',
    alt: 'Brand Identity Project'
  },
  {
    id: 'visual-identity',
    title: 'Visual Identity',
    image: 'https://images.unsplash.com/photo-1615799936413-7e1cd55d55e5?w=600&h=450&fit=crop',
    alt: 'Circular Design'
  },
  {
    id: 'app-interface',
    title: 'App Interface',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=450&fit=crop',
    alt: 'Mobile App Design'
  },
  {
    id: 'living-space',
    title: 'Living Space',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=450&fit=crop',
    alt: 'Interior Design'
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

      {/* About Section */}
      <section className="px-6 py-20 max-w-2xl mx-auto text-center">
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          I help sustainable & ethical brands get the positive attention they deserve, because I believe design can play a positive thing.
        </p>
        <button className="px-8 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors">
          Contact
        </button>
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
