const Services = () => {
  const features = [
    {
      icon: '🏃',
      title: 'Activity Logging',
      description: 'Track your daily physical activities and movements',
      details: [
        'Log various types of activities (walking, running, cycling, etc.)',
        'Record duration and intensity of each activity',
        'View activity history and patterns',
        'Set daily activity goals'
      ]
    },
    {
      icon: '🥗',
      title: 'Meal Tracking',
      description: 'Monitor your nutritional intake and eating habits',
      details: [
        'Log meals throughout the day',
        'Track calories and nutritional information',
        'Record meal times and portions',
        'Build healthy eating habits'
      ]
    },
    {
      icon: '💪',
      title: 'Exercise Tracking',
      description: 'Keep track of your workout routines and progress',
      details: [
        'Create custom workout routines',
        'Log exercises, sets, and repetitions',
        'Track workout duration and intensity',
        'Monitor strength and endurance progress'
      ]
    },
    {
      icon: '📊',
      title: 'Progress Reports',
      description: 'Visualize your wellness journey with comprehensive data',
      details: [
        'View all your logged activities in one place',
        'Track progress over time',
        'Identify patterns and trends',
        'Stay motivated with visual feedback'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Features</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools to help you achieve your health and fitness goals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h2>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Sign Up</h3>
              <p className="text-gray-600">Get started with FitLife in seconds</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Log Activities</h3>
              <p className="text-gray-600">Track meals, exercises, and activities</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Monitor Progress</h3>
              <p className="text-gray-600">View your wellness data on the dashboard</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Achieve Goals</h3>
              <p className="text-gray-600">Reach your health and fitness targets</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-6">
            Join thousands of users who are already transforming their health with FitLife
          </p>
          <a
            href="/dashboard"
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
