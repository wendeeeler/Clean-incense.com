import { Leaf, Wind, Flame, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-light text-stone-800 mb-4 tracking-tight">
              What Is Clean Incense?
            </h1>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              A guide to natural botanicals, safe scenting, and incense without the smoke.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1000"
              alt="Natural botanical atmosphere"
              className="rounded-sm shadow-lg w-full object-cover h-[400px]"
            />
          </div>
        </section>

        <section className="mb-20 bg-white p-10 rounded-sm shadow-sm border border-stone-200 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1615485925694-a039755d143c?auto=format&fit=crop&q=80&w=1000"
              alt="Raw botanical resins"
              className="rounded-sm shadow-lg w-full object-cover h-[400px]"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-light text-stone-800 mb-6">The Definition</h2>
            <p className="text-lg text-stone-700 leading-relaxed mb-4">
              Clean incense is a botanical scenting method that uses natural plant materials—resins, woods, and herbs—without combustion, synthetic fragrances, or harmful additives. Instead of burning, clean incense is gently warmed to release pure aromatic compounds without smoke or particulate matter.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              This approach honors ancient scenting traditions while addressing modern concerns about indoor air quality and environmental health.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            Why Traditional Incense Isn't Always Clean
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <Flame className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="text-lg font-medium text-stone-800 mb-3">Combustion Creates Particulates</h3>
              <p className="text-stone-600 leading-relaxed">
                Burning organic material releases fine particulate matter (PM2.5) that can linger in indoor air and affect respiratory health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <Wind className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="text-lg font-medium text-stone-800 mb-3">Artificial Fragrance Oils</h3>
              <p className="text-stone-600 leading-relaxed">
                Many commercial incense sticks contain synthetic fragrances and chemical additives that mask rather than enhance natural aromas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <Shield className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="text-lg font-medium text-stone-800 mb-3">Charcoal & Accelerants</h3>
              <p className="text-stone-600 leading-relaxed">
                Traditional stick incense often uses charcoal bases and burning accelerants that produce harsh smoke and alter the botanical aroma.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <Leaf className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="text-lg font-medium text-stone-800 mb-3">Unclear Sourcing</h3>
              <p className="text-stone-600 leading-relaxed">
                Without transparent ingredient lists, it's difficult to know what you're actually burning in your space.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            What Makes Incense Clean
          </h2>
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Sparkles className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">Natural Botanicals Only</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Pure resins, woods, and herbs with no synthetic additives or fillers.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <Sparkles className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">No Combustion or Low Emissions</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Gentle warming instead of burning eliminates smoke and reduces particulate matter.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <Sparkles className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">No Synthetic Fragrances</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Every aroma comes from the plant itself, preserving the complexity and therapeutic properties of botanicals.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <Sparkles className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">Transparent Sourcing</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Clear ingredient lists and ethical harvesting practices you can trust.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <Sparkles className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">Gentle Warming for Full Aroma</h3>
                  <p className="text-stone-600 leading-relaxed">
                    Low-heat diffusion reveals the true character of each botanical without destruction.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            Clean Incense vs Burning Incense
          </h2>
          <div className="bg-white rounded-sm border border-stone-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-stone-50">
                <tr>
                  <th className="px-8 py-4 text-left text-sm font-medium text-stone-800 tracking-wide">Aspect</th>
                  <th className="px-8 py-4 text-left text-sm font-medium text-stone-800 tracking-wide">Clean Incense (Warming)</th>
                  <th className="px-8 py-4 text-left text-sm font-medium text-stone-800 tracking-wide">Traditional Burning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="px-8 py-4 text-sm font-medium text-stone-800">Method</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Gentle warming with indirect heat</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Direct combustion</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-sm font-medium text-stone-800">Smoke</td>
                  <td className="px-8 py-4 text-sm text-stone-600">None</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Significant smoke production</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-sm font-medium text-stone-800">Particulates</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Minimal to none</td>
                  <td className="px-8 py-4 text-sm text-stone-600">High PM2.5 levels</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-sm font-medium text-stone-800">Aroma Quality</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Pure, nuanced botanical notes</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Often harsh, smoky overtones</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-sm font-medium text-stone-800">Indoor Air Quality</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Preserved</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Compromised</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-sm font-medium text-stone-800">Scent Sensitivity</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Gentle, suitable for sensitive individuals</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Can trigger respiratory irritation</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-sm font-medium text-stone-800">Residue</td>
                  <td className="px-8 py-4 text-sm text-stone-600">No smoke smell or residue</td>
                  <td className="px-8 py-4 text-sm text-stone-600">Smoke clings to fabrics and walls</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            The Science of Low-Emission Scenting
          </h2>
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              When botanicals are burned, high temperatures destroy delicate aromatic molecules and create new compounds through combustion. This process releases volatile organic compounds (VOCs) along with particulate matter that can remain suspended in indoor air for hours.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Warming, by contrast, uses gentle indirect heat to volatilize the natural aromatic compounds without destruction. This heat-diffusion method preserves the integrity of the botanical's essential oils and resins, allowing them to evaporate slowly and completely.
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              The result is a pure expression of the plant's natural aroma profile—complex, layered, and free from the acrid notes that combustion creates. This is why warmed frankincense smells distinctly different from burned frankincense: you're experiencing the true botanical, not its byproducts.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            How Incense Warming Works
          </h2>
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <div className="space-y-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 font-light text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">Place botanicals in a ceramic holder</h3>
                  <p className="text-stone-600 leading-relaxed">
                    A small amount of resin, wood, or herbal blend is placed in a heat-safe ceramic vessel.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 font-light text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">Apply gentle, indirect heat</h3>
                  <p className="text-stone-600 leading-relaxed">
                    A tealight candle or electric warmer provides consistent low heat from below, warming the botanicals without igniting them.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 font-light text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium text-stone-800 mb-2">Aroma diffuses naturally</h3>
                  <p className="text-stone-600 leading-relaxed">
                    As the botanicals warm, their essential oils and resins volatilize and release into the air as pure aromatic vapor—no smoke, no combustion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            A Note on Safety
          </h2>
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Clean incense warming offers a gentler approach to scenting your space:
            </p>
            <ul className="space-y-4 text-stone-700">
              <li className="flex gap-3">
                <span className="text-stone-400">•</span>
                <span>Significantly lower particulate exposure compared to burning</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400">•</span>
                <span>No lingering smoke smell on fabrics or walls</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400">•</span>
                <span>Ideal for scent-sensitive individuals and those with respiratory concerns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-stone-400">•</span>
                <span>Preserves indoor air quality while still enjoying botanical aromas</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-stone-100 p-10 rounded-sm border border-stone-200">
            <p className="text-stone-600 leading-relaxed mb-6">
              Clean-incense.com is maintained by <span className="font-medium text-stone-800">Soul Space</span>, a studio dedicated to creating clean botanical incense and ceramic warmers that honor traditional scenting rituals while prioritizing health and environmental consciousness.
            </p>
            <div className="flex gap-4">
              <a
                href="https://soul-space.com"
                className="inline-block px-6 py-3 bg-stone-800 text-white text-sm tracking-wide rounded-sm hover:bg-stone-700 transition-colors"
              >
                Explore Clean Botanical Blends →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
