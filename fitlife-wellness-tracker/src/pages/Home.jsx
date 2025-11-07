import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
  const quotes = [
    "The only bad workout is the one that didn't happen.",
    "Take care of your body. It's the only place you have to live.",
    "Health is wealth. Invest in yourself.",
    "Your health is an investment, not an expense.",
    "Small steps every day lead to big changes."
  ];

  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to FitLife Wellness Tracker
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your personal companion for tracking fitness, nutrition, and wellness goals
          </p>
          <Link
            to="/dashboard"
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Motivational Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-2xl italic text-gray-700">"{currentQuote}"</p>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose FitLife?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏃</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Activity Tracking</h3>
              <p className="text-gray-600">
                Log your daily activities and monitor your progress over time
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Meal Logging</h3>
              <p className="text-gray-600">
                Track your nutrition and maintain a balanced diet effortlessly
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Exercise Routines</h3>
              <p className="text-gray-600">
                Create and follow personalized workout plans for your goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start tracking your wellness journey today and see the amazing results
          </p>
          <Link
            to="/dashboard"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Start Tracking Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
