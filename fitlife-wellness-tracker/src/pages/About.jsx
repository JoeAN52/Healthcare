const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About FitLife</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering you to take control of your health and wellness journey
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-4xl mr-3">🎯</span>
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At FitLife Wellness Tracker, our mission is to make health and fitness tracking simple,
            accessible, and effective for everyone. We believe that everyone deserves the tools and
            support needed to achieve their wellness goals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're just starting your fitness journey or you're a seasoned athlete, FitLife
            provides the comprehensive tracking and insights you need to stay motivated and reach
            your goals.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-4xl mr-3">✨</span>
            Benefits for Your Health
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-3xl mr-4">📊</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Track Your Progress</h3>
                <p className="text-gray-600">
                  Monitor your daily activities, meals, and exercises to see how far you've come
                  and stay motivated for the journey ahead.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-3xl mr-4">🎯</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Set Clear Goals</h3>
                <p className="text-gray-600">
                  Define your health and fitness objectives and track your progress toward
                  achieving them with our intuitive dashboard.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-3xl mr-4">💡</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Build Better Habits</h3>
                <p className="text-gray-600">
                  Develop sustainable healthy habits through consistent tracking and
                  positive reinforcement of your daily wellness activities.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-3xl mr-4">📱</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Access Anywhere</h3>
                <p className="text-gray-600">
                  Your health data is stored locally and accessible anytime you need it,
                  giving you complete control over your wellness information.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-3xl mr-4">🥗</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nutrition Awareness</h3>
                <p className="text-gray-600">
                  Keep track of your meals and develop a better understanding of your
                  eating patterns and nutritional intake.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-3xl mr-4">💪</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Exercise Consistency</h3>
                <p className="text-gray-600">
                  Log your workouts and maintain consistency in your exercise routine
                  with our comprehensive tracking system.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose FitLife?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-5xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
              <p>Your data stays on your device, ensuring complete privacy and security.</p>
            </div>
            <div>
              <div className="text-5xl mb-3">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p>Simple, intuitive interface designed for users of all experience levels.</p>
            </div>
            <div>
              <div className="text-5xl mb-3">📈</div>
              <h3 className="text-xl font-semibold mb-2">Real Results</h3>
              <p>See tangible progress through detailed logs and tracking over time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
