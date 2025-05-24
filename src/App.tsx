import { useState } from 'react';
import HeroStatement from './components/main/HeroStatement';
import ProblemScroll from './components/main/ProblemScroll';
import HowItWorks from './components/main/HowItWorks';
import Pricing from './components/main/Pricing';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  // State for user authentication (simplified for demo)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {!isLoggedIn ? (
        // Landing page for non-logged in users
        <main>
          {/* Navigation */}
          <Navbar />

          {/* Hero Section */}
          <HeroStatement />

          {/* Problem Section */}
          <ProblemScroll />

          {/* How It Works Section */}
          <div id="how-it-works">
            <HowItWorks />
          </div>

          {/* Pricing Section */}
          <div id="pricing">
            <Pricing />
          </div>

          {/* Footer */}
          <Footer />

          {/* Temporary login button for demo purposes */}
          <div className="fixed bottom-4 right-4">
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Demo Dashboard
            </button>
          </div>
        </main>
      ) : (
        // Dashboard for logged in users
        <div className="min-h-screen bg-gray-50">
          {/* Navigation */}
          <nav className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center">
            <div className="font-bold text-xl">Global Entry Finder</div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">Help</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Settings</a>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </nav>

          {/* Using the new Dashboard component */}
          <Dashboard />
        </div>
      )}
    </div>
  );
}

export default App;