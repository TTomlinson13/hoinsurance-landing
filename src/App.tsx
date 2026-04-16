function App() {
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

      {/* Hero Section with Happy Family Image */}
      <section className="relative bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600')" }}
        ></div>
        
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
              <div className="grid sm:grid-cols-3 gap-4 justify-center md:justify-start">
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
                <a 
                  href="https://hoinsurance.wufoo.com/forms/m96j1zb0kfqk62/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-100 text-teal-800 font-bold py-4 px-6 rounded-xl shadow-lg transition text-center"
                >
                  <span className="text-xl block mb-1">📝</span>
                  <span>Start Quote</span>
                  <span className="block text-xs font-normal">2 Minutes</span>
                </a>
                <a 
                  href="tel:800-616-1418"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition text-center"
                >
                  <span className="text-xl block mb-1">📞</span>
                  <span>Call Now</span>
                  <span className="block text-xs font-normal">Instant Help</span>
                </a>
              </div>
              
              {/* Sync My Policy Callout */}
              <div className="mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg max-w-xl">
                <p className="text-yellow-800 text-sm">
                  <strong>💡 Tip:</strong> Click <strong>"Sync My Policy"</strong> to securely connect your current insurance — we'll pull your coverage details automatically. No forms to fill out!
                </p>
              </div>
            </div>
            
            {/* Right: Happy Family Image */}
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1581579438747-104c53d7fbc5?w=600" 
                alt="Florida homeowners"
                className="rounded-2xl shadow-2xl"
              />
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

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-teal-900 mb-4">
            Why Choose Us for Your Florida Home?
          </h3>
          <p className="text-center text-gray-600 mb-12 text-lg">Protecting Florida homeowners since 1966</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏝️</span>
              </div>
              <h4 className="font-bold text-xl text-teal-900 mb-3">Barrier Island Coverage</h4>
              <p className="text-gray-600">We insure homes others won't — coastal, barrier islands, flood zones.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌊</span>
              </div>
              <h4 className="font-bold text-xl text-blue-800 mb-3">Flood Insurance Experts</h4>
              <p className="text-gray-600">Private flood options often cheaper than NFIP with better coverage.</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h4 className="font-bold text-xl text-green-800 mb-3">Bundle & Save</h4>
              <p className="text-gray-600">Combine home, flood, and auto for maximum discounts.</p>
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
                Florida's unique weather challenges — hurricanes, flooding, tropical storms — require specialized coverage. 
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
                Full protection for your Florida home — from hurricanes to liability.
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
                Protect your condo unit, personal property, and liability — even in high-rises.
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
                Don't wait — flood insurance has a 30-day waiting period. Private options available.
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
            Get your free quote in minutes — or call for instant help.
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
            Protecting Florida Homes — Even on Barrier Islands!
          </p>
          <p className="text-sm">
            HOInsurance.com • Florida Homeowners & Flood Specialists<br/>
            A Tomlinson & Co Agency
          </p>
          <p className="text-xs mt-4">
            © {new Date().getFullYear()} Tomlinson & Co Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
