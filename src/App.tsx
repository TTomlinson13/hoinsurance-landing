function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-900 via-teal-800 to-teal-900">
      {/* Header */}
      <header className="bg-white shadow-lg">
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

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Florida Homeowners & Flood Insurance
          </h2>
          <p className="text-2xl text-yellow-300 font-semibold mb-2">
            Coverage ANYWHERE in Florida!
          </p>
          <p className="text-xl text-teal-200 mb-8">
            Yes, even on barrier islands.
          </p>
          
          {/* Action Buttons */}
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <a 
              href="https://hoinsurance.wufoo.com/forms/m96j1zb0kfqk62/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-5 px-6 rounded-xl shadow-lg transition transform hover:scale-105 block"
            >
              <span className="text-2xl block mb-1">⚡</span>
              <span className="text-lg">Sync My Policy</span>
              <span className="block text-sm font-normal">(Fastest Way)</span>
            </a>
            <a 
              href="https://hoinsurance.wufoo.com/forms/m96j1zb0kfqk62/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-teal-900 font-bold py-5 px-6 rounded-xl shadow-lg transition transform hover:scale-105 block"
            >
              <span className="text-2xl block mb-1">📝</span>
              <span className="text-lg">Start Quote</span>
              <span className="block text-sm font-normal">2 Minutes</span>
            </a>
            <a 
              href="tel:800-616-1418"
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-5 px-6 rounded-xl shadow-lg transition transform hover:scale-105 block"
            >
              <span className="text-2xl block mb-1">📞</span>
              <span className="text-lg">Call Now</span>
              <span className="block text-sm font-normal">Instant Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-teal-900 mb-4">
            Why Choose Us for Your Florida Home?
          </h3>
          <p className="text-center text-gray-600 mb-10 text-lg">Protecting Florida homeowners since 1987</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-teal-50 border-2 border-teal-200">
              <div className="text-4xl mb-4">🏝️</div>
              <h4 className="font-bold text-lg text-teal-900 mb-2">Barrier Island Coverage</h4>
              <p className="text-gray-600">We insure homes others won't — coastal, barrier islands, flood zones.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-blue-50 border-2 border-blue-200">
              <div className="text-4xl mb-4">🌊</div>
              <h4 className="font-bold text-lg text-blue-800 mb-2">Flood Insurance Experts</h4>
              <p className="text-gray-600">Private flood options often cheaper than NFIP with better coverage.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50 border-2 border-green-200">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="font-bold text-lg text-green-800 mb-2">Bundle & Save</h4>
              <p className="text-gray-600">Combine home, flood, and auto for maximum discounts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Homeowners */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                🏠 Homeowners Insurance
              </h3>
              <p className="text-gray-300 mb-4">
                Full protection for your Florida home — from hurricanes to liability.
                We shop multiple carriers to find the best rates.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>✓ Coverage anywhere in Florida</li>
                <li>✓ Hurricane & wind coverage included</li>
                <li>✓ Replacement cost options</li>
                <li>✓ Same-day quotes available</li>
              </ul>
            </div>

            {/* Flood */}
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                🌊 Flood Insurance
              </h3>
              <p className="text-gray-300 mb-4">
                Don't wait for a storm — flood insurance has a 30-day waiting period.
                We offer private flood options that often beat NFIP rates.
              </p>
              <ul className="space-y-2 text-gray-200">
                <li>✓ Private flood options available</li>
                <li>✓ Often cheaper than NFIP</li>
                <li>✓ Higher coverage limits</li>
                <li>✓ Faster claims processing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Fast Phone Quotes: 800-616-1418
          </h3>
          <p className="text-xl text-green-100 mb-8">
            We can give you a phone quote INSTANTLY.
          </p>
          <a 
            href="tel:800-616-1418"
            className="inline-block bg-white text-green-700 font-bold text-xl py-4 px-10 rounded-xl shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
          >
            📞 Call 800-616-1418 Now
          </a>
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
