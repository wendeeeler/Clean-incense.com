import { Leaf, Flame, Droplet, Eye, Thermometer } from 'lucide-react';

export default function Standards() {
  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <section className="mb-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl font-light text-stone-800 mb-4 tracking-tight">
              The Clean Incense Standards
            </h1>
            <p className="text-xl text-stone-600 font-light leading-relaxed mb-8">
              A framework for safe, natural, and mindful scenting.
            </p>
            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <p className="text-lg text-stone-700 leading-relaxed">
                These five principles define what makes incense "clean"—a standard developed to honor ancient botanical traditions while addressing modern health and environmental considerations. When incense meets all five criteria, it represents the highest standard of natural, safe scenting.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1470114716159-2709038260a5?auto=format&fit=crop&q=80&w=1000"
              alt="Nature"
              className="w-full h-[400px] object-cover rounded-sm shadow-lg"
            />
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-light text-stone-800 mb-10">
            The Five Clean Incense Principles
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-10 rounded-sm border border-stone-200 hover:bg-stone-50 transition-colors duration-300">
              <div className="flex gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-stone-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-stone-800 mb-3">1. Natural Botanicals Only</h3>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Clean incense contains exclusively natural plant materials: resins like frankincense and myrrh, woods such as sandalwood and palo santo, and aromatic herbs like lavender and sage. No synthetic compounds, chemical binders, or artificial fragrance oils.
                  </p>
                  <p className="text-stone-600 leading-relaxed italic">
                    Why it matters: Synthetic fragrances can contain undisclosed chemical cocktails. Natural botanicals offer pure aromas with inherent therapeutic properties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-sm border border-stone-200 hover:bg-stone-50 transition-colors duration-300">
              <div className="flex gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                    <Droplet className="w-8 h-8 text-stone-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-stone-800 mb-3">2. Zero Synthetic Fragrance Oils</h3>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Every molecule of scent comes from the plant itself. Clean incense never relies on laboratory-created fragrance compounds, even if they're designed to mimic natural aromas. The complexity and subtle variations of genuine botanicals cannot be replicated synthetically.
                  </p>
                  <p className="text-stone-600 leading-relaxed italic">
                    Why it matters: Synthetic fragrances are a common trigger for headaches, allergic reactions, and respiratory irritation. Pure botanicals are gentler and more authentic.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-sm border border-stone-200 hover:bg-stone-50 transition-colors duration-300">
              <div className="flex gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                    <Flame className="w-8 h-8 text-stone-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-stone-800 mb-3">3. No Combustion</h3>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Rather than burning, clean incense is gently warmed through indirect heat. This eliminates smoke, ash, and the fine particulate matter (PM2.5) created by combustion. The result is aromatherapy without air quality compromise.
                  </p>
                  <p className="text-stone-600 leading-relaxed italic">
                    Why it matters: Burning organic material—even natural botanicals—releases particles that can accumulate in indoor spaces and affect respiratory health over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-sm border border-stone-200 hover:bg-stone-50 transition-colors duration-300">
              <div className="flex gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-stone-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-stone-800 mb-3">4. Transparent Sourcing</h3>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Clean incense producers provide clear information about every ingredient: botanical names, origin regions, and harvesting practices. This transparency ensures ethical sourcing and allows users to make informed decisions about what they bring into their spaces.
                  </p>
                  <p className="text-stone-600 leading-relaxed italic">
                    Why it matters: Without transparency, you can't verify quality, sustainability, or safety. Clean incense means knowing exactly what you're using.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-sm border border-stone-200 hover:bg-stone-50 transition-colors duration-300">
              <div className="flex gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center">
                    <Thermometer className="w-8 h-8 text-stone-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-stone-800 mb-3">5. Gentle Warming for Full Aroma Expression</h3>
                  <p className="text-stone-700 leading-relaxed mb-4">
                    Low, consistent heat allows botanicals to release their aromatic compounds gradually and completely. This method preserves the nuanced layers of each plant's scent profile—notes that are destroyed or masked by the high temperatures of combustion.
                  </p>
                  <p className="text-stone-600 leading-relaxed italic">
                    Why it matters: Burning alters and obscures natural aromas. Warming reveals the true character of each botanical in its fullest expression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            How These Standards Were Developed
          </h2>
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              The Clean Incense Standards emerged from a simple question: How can we honor the ancient practice of incense while addressing modern concerns about indoor air quality, synthetic chemicals, and environmental health?
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Drawing on traditional scenting methods from cultures worldwide—Japanese kōdō, Ayurvedic dhūpa, Middle Eastern bakhoor—these principles identify what made historical incense both effective and safe: pure botanicals, skillful heating, and respect for the natural materials.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              By combining ancestral wisdom with contemporary research on indoor air quality and botanical chemistry, these standards offer a path forward for mindful, health-conscious scenting.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            Why These Standards Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <h3 className="text-lg font-medium text-stone-800 mb-3">Health Protection</h3>
              <p className="text-stone-600 leading-relaxed">
                By eliminating combustion, synthetic fragrances, and undisclosed additives, clean incense reduces exposure to common indoor air pollutants and allergens.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <h3 className="text-lg font-medium text-stone-800 mb-3">Authentic Experience</h3>
              <p className="text-stone-600 leading-relaxed">
                Pure botanicals warmed gently reveal the true aromatic complexity that inspired centuries of incense traditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <h3 className="text-lg font-medium text-stone-800 mb-3">Environmental Responsibility</h3>
              <p className="text-stone-600 leading-relaxed">
                Transparent sourcing supports sustainable harvesting practices and ensures botanical materials are ethically obtained.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <h3 className="text-lg font-medium text-stone-800 mb-3">Informed Choice</h3>
              <p className="text-stone-600 leading-relaxed">
                Clear standards empower consumers to distinguish between genuine botanical incense and products containing hidden synthetic ingredients.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            Who Clean Incense Is Ideal For
          </h2>
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <ul className="space-y-4 text-stone-700">
              <li className="flex gap-3">
                <span className="text-stone-400 flex-shrink-0">•</span>
                <span><span className="font-medium text-stone-800">Parents and caregivers</span> who want safe scenting options around children</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400 flex-shrink-0">•</span>
                <span><span className="font-medium text-stone-800">Scent-sensitive individuals</span> who experience headaches or irritation from synthetic fragrances</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400 flex-shrink-0">•</span>
                <span><span className="font-medium text-stone-800">Apartment dwellers</span> concerned about smoke detectors and lingering odors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400 flex-shrink-0">•</span>
                <span><span className="font-medium text-stone-800">Mindful consumers</span> seeking transparency about what they bring into their homes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400 flex-shrink-0">•</span>
                <span><span className="font-medium text-stone-800">Wellness practitioners</span> who prioritize clean air quality in healing spaces</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400 flex-shrink-0">•</span>
                <span><span className="font-medium text-stone-800">Botanical enthusiasts</span> who appreciate pure, unadulterated plant aromas</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
