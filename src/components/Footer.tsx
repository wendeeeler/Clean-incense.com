export default function Footer() {
  return (
    <footer className="bg-[#1c1917] text-stone-400">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl text-white mb-4">Clean Incense</h3>
            <p className="leading-relaxed">
              Maintained by Soul Space, a studio dedicated to creating clean botanical incense and ceramic warmers that honor traditional scenting rituals while prioritizing health and environmental consciousness.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="https://soul-space.com"
              className="inline-block px-6 py-3 bg-white text-stone-900 text-sm tracking-wide rounded-sm hover:bg-stone-200 transition-colors font-medium"
            >
              Explore Soul Space
            </a>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8">
          <p className="text-sm text-stone-500">
            © 2024 Clean Incense / Soul Space
          </p>
        </div>
      </div>
    </footer>
  );
}
