import AnimatedHero from '../components/AnimatedHero';

export default function Home() {
  return (
    <main>
      <AnimatedHero />
      
      {/* Your other sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          {/* About content */}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
          {/* Projects content */}
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Contact</h2>
          {/* Contact content */}
        </div>
      </section>
    </main>
  );
}