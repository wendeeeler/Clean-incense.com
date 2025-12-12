import { Flame, Wind, Heart, Home, Lightbulb, CircleDot } from 'lucide-react';

export default function WarmingVsBurning() {
  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <section className="mb-20">
          <h1 className="text-5xl font-light text-stone-800 mb-4 tracking-tight">
            Incense Warming vs Burning
          </h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed">
            Understanding the difference between combustion and heat diffusion.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            How Incense Burning Works
          </h2>
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <div className="flex gap-6 mb-6">
              <Flame className="w-12 h-12 text-stone-400 flex-shrink-0" />
              <div>
                <p className="text-lg text-stone-700 leading-relaxed mb-4">
                  Traditional incense burning involves direct combustion: lighting plant material on fire and allowing it to smolder. As the incense burns, it consumes oxygen and releases aromatic compounds along with smoke, ash, and various combustion byproducts.
                </p>
                <p className="text-lg text-stone-700 leading-relaxed">
                  This process occurs at temperatures exceeding 600°C (1,112°F), which destroys many of the delicate aromatic molecules while creating new compounds through thermal decomposition. The result is a mixture of intended botanical aromas and unintended combustion products.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            Issues With Combustion
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <h3 className="text-lg font-medium text-stone-800 mb-3">Particulate Matter Production</h3>
              <p className="text-stone-700 leading-relaxed">
                Burning releases fine particulate matter (PM2.5 and PM10) that can remain suspended in indoor air for hours. These microscopic particles can penetrate deep into the respiratory system and, with regular exposure, may affect lung function and cardiovascular health. Studies have shown that incense smoke can produce particulate levels comparable to cigarette smoke in poorly ventilated spaces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <h3 className="text-lg font-medium text-stone-800 mb-3">Altered Aromatic Profile</h3>
              <p className="text-stone-700 leading-relaxed">
                High combustion temperatures destroy the subtle, complex aromatic compounds that give each botanical its distinctive character. What remains is often a harsh, smoky smell that obscures the plant's natural fragrance. The frankincense or sandalwood you smell when burning is fundamentally different from the pure botanical aroma—you're smelling combustion as much as the plant itself.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <h3 className="text-lg font-medium text-stone-800 mb-3">Volatile Organic Compound Release</h3>
              <p className="text-stone-700 leading-relaxed">
                Combustion produces various VOCs including formaldehyde, acetaldehyde, and polycyclic aromatic hydrocarbons (PAHs). While exposure levels vary based on incense type, frequency of use, and ventilation, these compounds are recognized indoor air pollutants that can contribute to respiratory irritation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <h3 className="text-lg font-medium text-stone-800 mb-3">Smoke Residue and Odor</h3>
              <p className="text-stone-700 leading-relaxed">
                Smoke particles settle on surfaces, fabrics, and walls, creating a persistent odor that many find unpleasant. This residue accumulation can be difficult to remove and may be problematic in rental properties or shared living spaces. The smell of stale incense smoke is a common complaint even among those who enjoy the ritual of burning.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            How Incense Warming Works
          </h2>
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex gap-6 mb-8">
                  <Wind className="w-12 h-12 text-stone-400 flex-shrink-0" />
                  <div>
                    <p className="text-lg text-stone-700 leading-relaxed mb-4">
                      Incense warming uses gentle, indirect heat to volatilize aromatic compounds without combustion. Botanicals are placed in a ceramic holder positioned above a low heat source—typically a tealight candle or electric warmer. The temperature remains well below ignition point, generally between 50-150°C (122-302°F).
                    </p>
                    <p className="text-lg text-stone-700 leading-relaxed">
                      At these lower temperatures, the essential oils, resins, and aromatic compounds naturally present in the botanicals evaporate and diffuse into the air. The plant material doesn't burn; it simply releases its volatile components through gentle heating, much like essential oil diffusion.
                    </p>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-8">
                  <h3 className="text-xl font-light text-stone-800 mb-6">The Warming Process</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <CircleDot className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-stone-700 mb-2"><span className="font-medium">Step 1:</span> A small amount of botanical material (resin, wood chips, or herbal blend) is placed in a heat-safe ceramic dish</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CircleDot className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-stone-700 mb-2"><span className="font-medium">Step 2:</span> A tealight candle or electric heat source is positioned beneath the dish, providing consistent low-level warmth</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CircleDot className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-stone-700 mb-2"><span className="font-medium">Step 3:</span> As the botanicals warm, their aromatic molecules volatilize and rise naturally into the surrounding air</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CircleDot className="w-6 h-6 text-stone-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-stone-700 mb-2"><span className="font-medium">Step 4:</span> The space gradually fills with pure botanical aroma—no smoke, no combustion byproducts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&q=80&w=1000"
                  alt="Ceramic aesthetics"
                  className="rounded-sm w-full object-cover h-full min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            Benefits of Warming
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <Heart className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="text-lg font-medium text-stone-800 mb-3">No Smoke Smell</h3>
              <p className="text-stone-600 leading-relaxed">
                Because nothing burns, there's no smoke odor to cling to fabrics, furniture, or walls. The space is scented without residue, making warming ideal for apartments and shared spaces where smoke can be problematic.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <Lightbulb className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="text-lg font-medium text-stone-800 mb-3">More Nuanced Aroma</h3>
              <p className="text-stone-600 leading-relaxed">
                Gentle heating preserves the delicate, complex notes that make each botanical unique. You experience the true aromatic profile—layered, subtle, and authentic—rather than the simplified, harsh scent that combustion produces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <Home className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="text-lg font-medium text-stone-800 mb-3">Safer for Scent-Sensitive Spaces</h3>
              <p className="text-stone-600 leading-relaxed">
                Without smoke and particulates, warming is gentler for those with respiratory sensitivities, allergies, or conditions like asthma. It offers a way to enjoy botanical scents without triggering irritation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-stone-200">
              <Wind className="w-8 h-8 text-stone-400 mb-4" />
              <h3 className="text-lg font-medium text-stone-800 mb-3">Cleaner Diffusion</h3>
              <p className="text-stone-600 leading-relaxed">
                The aromatic vapor from warming disperses evenly through the space without the visual haze or particulate load of smoke. Your indoor air quality remains clear while the room fills with pure botanical fragrance.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-light text-stone-800 mb-8">
            Why Clean Incense Pairs Best With Warming
          </h2>
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <p className="text-lg text-stone-700 leading-relaxed mb-6">
              Clean incense—made from pure botanicals without synthetic fragrances or chemical additives—is specifically designed to be warmed rather than burned. This intentional pairing serves multiple purposes:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2">Preserves Botanical Integrity</h3>
                <p className="text-stone-700 leading-relaxed">
                  When you've invested in high-quality, sustainably sourced botanicals like genuine frankincense or wild-harvested palo santo, burning them destroys much of what makes them special. Warming allows their full aromatic complexity to shine.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2">Maximizes Aromatic Value</h3>
                <p className="text-stone-700 leading-relaxed">
                  Pure botanicals release their scent gradually when warmed, meaning a small amount can scent a space for an extended period. Burning consumes material quickly and masks subtle notes with smoke.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2">Aligns With Health-Conscious Values</h3>
                <p className="text-stone-700 leading-relaxed">
                  If you've chosen clean incense to avoid synthetic chemicals and prioritize wellness, it makes sense to use a method that doesn't introduce combustion pollutants. Warming completes the clean scenting approach.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2">Respects Traditional Practice</h3>
                <p className="text-stone-700 leading-relaxed">
                  Many ancient incense traditions, from Japanese kōdō to Arabian bakhoor, emphasized gentle heating over burning. Warming honors these time-tested methods while adapting them for contemporary spaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-stone-100 p-10 rounded-sm border border-stone-200">
            <h2 className="text-2xl font-light text-stone-800 mb-4">
              Making the Transition
            </h2>
            <p className="text-stone-700 leading-relaxed mb-4">
              If you've always burned incense, warming may feel unfamiliar at first. The experience is quieter, gentler, and more gradual—there's no dramatic plume of smoke or immediate intensity. Instead, the aroma builds subtly, filling the space with a soft, persistent presence.
            </p>
            <p className="text-stone-700 leading-relaxed">
              Many who make the switch find they prefer the clarity and purity of warmed botanicals. The true scent of frankincense, copal, or sandalwood—unobscured by combustion—is a revelation. Once you experience it, burning feels harsh and imprecise by comparison.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-white p-10 rounded-sm border border-stone-200">
            <p className="text-stone-600 leading-relaxed mb-6">
              Learn more about clean botanical incense and ceramic warmers at <span className="font-medium text-stone-800">Soul Space</span>, where ancient scenting traditions meet modern wellness consciousness.
            </p>
            <a
              href="https://soul-space.com"
              className="inline-block px-6 py-3 bg-stone-800 text-white text-sm tracking-wide rounded-sm hover:bg-stone-700 transition-colors"
            >
              Explore Soul Space →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
