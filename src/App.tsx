import { useState } from 'react'

function App() {
  const [showQuoteMenu, setShowQuoteMenu] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-teal-900">HOInsurance.com</h1>
            <p className="text-sm text-gray-600">Florida Homeowners & Flood Specialists</p>
          </div>
          <a href="tel:800-616-1418" className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition">
            📞 800-616-1418
          </a>
        </div>
      </header>

      {/* Hero Section — CSS Animated Aerial Neighborhood */}
      <section className="relative bg-teal-900 overflow-hidden">
        {/* Animated background image — slow Ken Burns zoom/pan */}
        <style>{`
          @keyframes kenBurns {
            0%   { transform: scale(1.0) translate(0%, 0%); }
            25%  { transform: scale(1.08) translate(-1.5%, -1%); }
            50%  { transform: scale(1.12) translate(-2%, 1%); }
            75%  { transform: scale(1.08) translate(1%, 1.5%); }
            100% { transform: scale(1.0) translate(0%, 0%); }
          }
          .hero-bg {
            animation: kenBurns 30s ease-in-out infinite;
            will-change: transform;
          }
        `}</style>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="hero-bg absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-neighborhood.jpg')", opacity: 0.45 }}
          ></div>
          {/* Teal gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-teal-800/60 to-teal-900/70"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div className="text-center md:text-left">
              <p className="text-teal-300 font-semibold mb-2 uppercase tracking-wider">Florida Home Insurance</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Protect Your Florida Dream Home
              </h2>
              <p className="text-2xl text-yellow-300 font-semibold mb-2">
                Coverage ANYWHERE in Florida!
              </p>
              <p className="text-xl text-teal-100 mb-8">
                Yes, even on barrier islands.
              </p>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-3 gap-4 justify-center md:justify-start items-stretch">
                <a
                  href="https://app.usecanopy.com/c/tomlinson-and-co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-6 rounded-xl shadow-lg transition transform hover:scale-105 text-center relative overflow-hidden"
                >
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded-bl-lg font-bold">EASY!</span>
                  <span className="text-xl block mb-1">⚡</span>
                  <span className="text-lg">Sync My Policy</span>
                  <span className="block text-xs font-normal mt-1">We pull your info automatically</span>
                </a>
                {/* Full Quote Form Dropdown */}
                <div className="relative" style={{zIndex: 100}}>
                  <button
                    onClick={() => setShowQuoteMenu(!showQuoteMenu)}
                    className="w-full bg-white hover:bg-gray-100 text-teal-800 font-bold py-4 px-6 rounded-xl shadow-lg transition text-center h-full min-h-[100px] flex flex-col items-center justify-center"
                  >
                    <span className="text-xl block mb-1">📝</span>
                    <span>Full Quote Form</span>
                    <span className="block text-xs font-normal opacity-70 mt-1">{showQuoteMenu ? '▲ Choose type' : '▼ Choose type'}</span>
                  </button>
                  {showQuoteMenu && (
                    <div className="absolute top-full mt-2 left-0 w-64 bg-white rounded-xl shadow-2xl border border-teal-100 overflow-visible" style={{zIndex: 9999}}>
                      <a
                        href="https://hoinsurance.wufoo.com/forms/tc-home-insurance-savings-form/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-teal-50 transition border-b border-gray-100"
                        onClick={() => setShowQuoteMenu(false)}
                      >
                        <span className="text-2xl">🏠</span>
                        <div className="text-left">
                          <div className="font-bold text-teal-900 text-sm">Homeowners (HO3)</div>
                          <div className="text-xs text-gray-500">Single family home</div>
                        </div>
                      </a>
                      <a
                        href="https://hoinsurance.wufoo.com/forms/condominium-owners-insurance-form/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-teal-50 transition border-b border-gray-100"
                        onClick={() => setShowQuoteMenu(false)}
                      >
                        <span className="text-2xl">🏗️</span>
                        <div className="text-left">
                          <div className="font-bold text-teal-900 text-sm">Condo (HO6)</div>
                          <div className="text-xs text-gray-500">Condominium owners</div>
                        </div>
                      </a>
                      <a
                        href="https://hoinsurance.wufoo.com/forms/get-my-flood-insurance/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-teal-50 transition"
                        onClick={() => setShowQuoteMenu(false)}
                      >
                        <span className="text-2xl">🌊</span>
                        <div className="text-left">
                          <div className="font-bold text-teal-900 text-sm">Flood Insurance</div>
                          <div className="text-xs text-gray-500">Private &amp; NFIP flood</div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="tel:800-616-1418"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition text-center"
                >
                  <span className="text-xl block mb-1">📞</span>
                  <span>Call Us</span>
                  <span className="block text-xs font-normal">800-616-1418</span>
                </a>
              </div>

              {/* Sync My Policy Callout */}
              <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg max-w-xl">
                <p className="text-yellow-800 text-sm">
                  <strong>💡 Tip:</strong> Click <strong>"Sync My Policy"</strong> to securely connect your current insurance - we'll pull your coverage details automatically. No forms to fill out!
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-teal-900 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-teal-100 text-sm">
          <span>✓ Licensed Since 1966</span>
          <span>✓ A-Rated Carriers</span>
          <span>✓ Same-Day Quotes</span>
          <span>✓ Barrier Island Experts</span>
        </div>
      </section>

      {/* Carriers Section */}
      {/* Florida Coverage Map Section */}
      <section className="py-12 px-4 bg-teal-900 text-white text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-2">Coverage Across All of Florida</h3>
          <p className="text-teal-300 mb-6">From the Panhandle to the Keys — we protect homes in every corner of the Sunshine State.</p>
          <img
            src="/hero-florida-5cities-collage.jpg"
            alt="Florida home insurance coverage - Fort Lauderdale, Orlando, Miami, Jacksonville, Miami Beach"
            className="w-full rounded-2xl shadow-2xl"
          />
          <p className="text-teal-400 text-sm mt-4">Fort Lauderdale · Orlando · Miami · Jacksonville · Miami Beach · and everywhere in between</p>
        </div>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-teal-900 mb-3">
            We Represent Over 50 Florida Home Insurance Carriers
          </h3>
          <p className="text-gray-600 mb-2">
            Too many to list! We shop them all to find the best coverage at the best price for YOUR home.
          </p>
          <p className="text-sm text-gray-500">
            Including carriers that specialize in barrier islands, older homes, and difficult-to-place risks.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-teal-900 mb-4">
            Why Choose Us for Your Florida Home?
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">Protecting Florida homeowners since 1966</p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏝️</span>
              </div>
              <h4 className="font-bold text-lg text-teal-900 mb-2">Barrier Island Coverage</h4>
              <p className="text-gray-600 text-sm">Coastal, barrier islands, flood zones - we cover them.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h4 className="font-bold text-lg text-amber-800 mb-2">Older & Difficult Homes</h4>
              <p className="text-gray-600 text-sm">Older roofs, unique properties - we find solutions.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌊</span>
              </div>
              <h4 className="font-bold text-lg text-blue-800 mb-2">Flood Experts</h4>
              <p className="text-gray-600 text-sm">Private flood options often cheaper than NFIP.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-bold text-lg text-green-800 mb-2">Bundle & Save</h4>
              <p className="text-gray-600 text-sm">Combine home, flood, and auto for max discounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Homeowners Image Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600"
                alt="Beautiful Florida home"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-teal-900 mb-6">
                Your Home Deserves the Best Protection
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Florida's unique weather challenges - hurricanes, flooding, tropical storms - require specialized coverage.
                We work with multiple A-rated carriers to find you the best protection at the best price.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  Coverage anywhere in Florida
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  Hurricane & wind coverage included
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  Replacement cost options
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  Same-day quotes available
                </li>
              </ul>
              <a
                href="https://hoinsurance.wufoo.com/forms/m96j1zb0kfqk62/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition"
              >
                Get Your Free Quote →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Comprehensive Coverage Options</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Homeowners */}
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                🏠 Homeowners Insurance
              </h3>
              <p className="text-gray-300 mb-4">
                Full protection for your Florida home - from hurricanes to liability.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>✓ Coverage anywhere in Florida</li>
                <li>✓ Hurricane & wind included</li>
                <li>✓ Replacement cost options</li>
                <li>✓ Same-day quotes</li>
              </ul>
            </div>

            {/* Condo HO6 */}
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                🏢 Condo Insurance (HO6)
              </h3>
              <p className="text-gray-300 mb-4">
                Protect your condo unit, personal property, and liability - even in high-rises.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>✓ Unit owner coverage</li>
                <li>✓ Loss assessment protection</li>
                <li>✓ Personal property coverage</li>
                <li>✓ Coastal condos welcome</li>
              </ul>
            </div>

            {/* Flood */}
            <div className="bg-gray-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                🌊 Flood Insurance
              </h3>
              <p className="text-gray-300 mb-4">
                Don't wait - flood insurance has a 30-day waiting period. Private options available.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>✓ Private flood options</li>
                <li>✓ Often cheaper than NFIP</li>
                <li>✓ Higher coverage limits</li>
                <li>✓ Faster claims processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Auto Section */}
      <section className="py-12 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            🚗 Need Auto Insurance Too?
          </h3>
          <p className="text-blue-100 text-lg mb-4">
            Bundle your home and auto for even bigger savings! We shop multiple carriers to find you the best rates.
          </p>
          <a 
            href="https://floridauto.com"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Get Auto Quote at FloridAuto.com →
          </a>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-2xl text-gray-700 italic mb-6">
            "They found us coverage when other agents said it was impossible. Our barrier island home is finally protected, and we're paying less than we expected!"
          </blockquote>
          <p className="text-gray-600 font-semibold">— Happy Florida Homeowner</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Protect Your Home?
          </h3>
          <p className="text-xl text-green-100 mb-8">
            Get your free quote in minutes - or call for instant help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hoinsurance.wufoo.com/forms/m96j1zb0kfqk62/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 font-bold text-xl py-4 px-10 rounded-xl shadow-lg hover:bg-gray-100 transition"
            >
              Get Free Quote →
            </a>
            <a
              href="tel:800-616-1418"
              className="bg-green-800 hover:bg-green-900 text-white font-bold text-xl py-4 px-10 rounded-xl shadow-lg transition"
            >
              📞 800-616-1418
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-white mb-2">
            Protecting Florida Homes - Even on Barrier Islands!
          </p>
          <p className="text-sm">
            HOInsurance.com • Florida Homeowners & Flood Specialists<br/>
            A Tomlinson & Co Agency
          </p>
          <p className="text-xs mt-4">
            © {new Date().getFullYear()} Tomlinson & Co Inc. All rights reserved.
          </p>
          <p className="text-xs mt-2">
            <a href="/privacy-policy.html" className="text-gray-400 hover:text-white underline">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
