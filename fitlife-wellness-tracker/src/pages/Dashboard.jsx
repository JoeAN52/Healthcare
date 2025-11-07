import { useState, useEffect } from 'react';

const Dashboard = () => {
  // State for activities, meals, and exercises
  const [activities, setActivities] = useState([]);
  const [meals, setMeals] = useState([]);
  const [exercises, setExercises] = useState([]);

  // State for active tab
  const [activeTab, setActiveTab] = useState('overview');

  // State for forms
  const [activityForm, setActivityForm] = useState({ type: '', duration: '', date: '' });
  const [mealForm, setMealForm] = useState({ name: '', calories: '', time: '', date: '' });
  const [exerciseForm, setExerciseForm] = useState({ name: '', sets: '', reps: '', date: '' });

  // Load data from localStorage on component mount
  useEffect(() => {
    const loadedActivities = JSON.parse(localStorage.getItem('activities') || '[]');
    const loadedMeals = JSON.parse(localStorage.getItem('meals') || '[]');
    const loadedExercises = JSON.parse(localStorage.getItem('exercises') || '[]');

    setActivities(loadedActivities);
    setMeals(loadedMeals);
    setExercises(loadedExercises);
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  useEffect(() => {
    localStorage.setItem('meals', JSON.stringify(meals));
  }, [meals]);

  useEffect(() => {
    localStorage.setItem('exercises', JSON.stringify(exercises));
  }, [exercises]);

  // Handle form submissions
  const handleAddActivity = (e) => {
    e.preventDefault();
    if (activityForm.type && activityForm.duration && activityForm.date) {
      setActivities([...activities, { ...activityForm, id: Date.now() }]);
      setActivityForm({ type: '', duration: '', date: '' });
    }
  };

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (mealForm.name && mealForm.calories && mealForm.date) {
      setMeals([...meals, { ...mealForm, id: Date.now() }]);
      setMealForm({ name: '', calories: '', time: '', date: '' });
    }
  };

  const handleAddExercise = (e) => {
    e.preventDefault();
    if (exerciseForm.name && exerciseForm.sets && exerciseForm.reps && exerciseForm.date) {
      setExercises([...exercises, { ...exerciseForm, id: Date.now() }]);
      setExerciseForm({ name: '', sets: '', reps: '', date: '' });
    }
  };

  // Delete functions
  const deleteActivity = (id) => {
    setActivities(activities.filter(item => item.id !== id));
  };

  const deleteMeal = (id) => {
    setMeals(meals.filter(item => item.id !== id));
  };

  const deleteExercise = (id) => {
    setExercises(exercises.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Track your wellness journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 mb-1">Total Activities</p>
                <p className="text-3xl font-bold">{activities.length}</p>
              </div>
              <div className="text-5xl opacity-80">🏃</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 mb-1">Total Meals</p>
                <p className="text-3xl font-bold">{meals.length}</p>
              </div>
              <div className="text-5xl opacity-80">🥗</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 mb-1">Total Exercises</p>
                <p className="text-3xl font-bold">{exercises.length}</p>
              </div>
              <div className="text-5xl opacity-80">💪</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('activities')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'activities'
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Activities
              </button>
              <button
                onClick={() => setActiveTab('meals')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'meals'
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Meals
              </button>
              <button
                onClick={() => setActiveTab('exercises')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'exercises'
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                Exercises
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>

                <div className="space-y-6">
                  {/* Recent Activities */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Latest Activities</h3>
                    {activities.length === 0 ? (
                      <p className="text-gray-500 italic">No activities logged yet</p>
                    ) : (
                      <div className="space-y-2">
                        {activities.slice(-3).reverse().map((activity) => (
                          <div key={activity.id} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-semibold text-gray-800">{activity.type}</p>
                                <p className="text-sm text-gray-600">{activity.duration} minutes • {activity.date}</p>
                              </div>
                              <span className="text-2xl">🏃</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Recent Meals */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Latest Meals</h3>
                    {meals.length === 0 ? (
                      <p className="text-gray-500 italic">No meals logged yet</p>
                    ) : (
                      <div className="space-y-2">
                        {meals.slice(-3).reverse().map((meal) => (
                          <div key={meal.id} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-semibold text-gray-800">{meal.name}</p>
                                <p className="text-sm text-gray-600">{meal.calories} cal • {meal.time} • {meal.date}</p>
                              </div>
                              <span className="text-2xl">🥗</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Recent Exercises */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">Latest Exercises</h3>
                    {exercises.length === 0 ? (
                      <p className="text-gray-500 italic">No exercises logged yet</p>
                    ) : (
                      <div className="space-y-2">
                        {exercises.slice(-3).reverse().map((exercise) => (
                          <div key={exercise.id} className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="font-semibold text-gray-800">{exercise.name}</p>
                                <p className="text-sm text-gray-600">{exercise.sets} sets × {exercise.reps} reps • {exercise.date}</p>
                              </div>
                              <span className="text-2xl">💪</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Activities Tab */}
            {activeTab === 'activities' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Log Activity</h2>
                <form onSubmit={handleAddActivity} className="mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Activity Type</label>
                      <input
                        type="text"
                        value={activityForm.type}
                        onChange={(e) => setActivityForm({ ...activityForm, type: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., Walking, Running"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Duration (minutes)</label>
                      <input
                        type="number"
                        value={activityForm.duration}
                        onChange={(e) => setActivityForm({ ...activityForm, duration: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Date</label>
                      <input
                        type="date"
                        value={activityForm.date}
                        onChange={(e) => setActivityForm({ ...activityForm, date: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Add Activity
                  </button>
                </form>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Activity Log</h3>
                {activities.length === 0 ? (
                  <p className="text-gray-500 italic">No activities logged yet. Start by adding one above!</p>
                ) : (
                  <div className="space-y-3">
                    {activities.slice().reverse().map((activity) => (
                      <div key={activity.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-800 text-lg">{activity.type}</p>
                          <p className="text-gray-600">{activity.duration} minutes • {activity.date}</p>
                        </div>
                        <button
                          onClick={() => deleteActivity(activity.id)}
                          className="text-red-600 hover:text-red-800 font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Meals Tab */}
            {activeTab === 'meals' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Log Meal</h2>
                <form onSubmit={handleAddMeal} className="mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Meal Name</label>
                      <input
                        type="text"
                        value={mealForm.name}
                        onChange={(e) => setMealForm({ ...mealForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="e.g., Chicken Salad"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Calories</label>
                      <input
                        type="number"
                        value={mealForm.calories}
                        onChange={(e) => setMealForm({ ...mealForm, calories: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Time</label>
                      <select
                        value={mealForm.time}
                        onChange={(e) => setMealForm({ ...mealForm, time: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Date</label>
                      <input
                        type="date"
                        value={mealForm.date}
                        onChange={(e) => setMealForm({ ...mealForm, date: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add Meal
                  </button>
                </form>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Meal Log</h3>
                {meals.length === 0 ? (
                  <p className="text-gray-500 italic">No meals logged yet. Start by adding one above!</p>
                ) : (
                  <div className="space-y-3">
                    {meals.slice().reverse().map((meal) => (
                      <div key={meal.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-800 text-lg">{meal.name}</p>
                          <p className="text-gray-600">{meal.calories} calories • {meal.time} • {meal.date}</p>
                        </div>
                        <button
                          onClick={() => deleteMeal(meal.id)}
                          className="text-red-600 hover:text-red-800 font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Exercises Tab */}
            {activeTab === 'exercises' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Log Exercise</h2>
                <form onSubmit={handleAddExercise} className="mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Exercise Name</label>
                      <input
                        type="text"
                        value={exerciseForm.name}
                        onChange={(e) => setExerciseForm({ ...exerciseForm, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="e.g., Push-ups"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Sets</label>
                      <input
                        type="number"
                        value={exerciseForm.sets}
                        onChange={(e) => setExerciseForm({ ...exerciseForm, sets: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="3"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Reps</label>
                      <input
                        type="number"
                        value={exerciseForm.reps}
                        onChange={(e) => setExerciseForm({ ...exerciseForm, reps: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="12"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Date</label>
                      <input
                        type="date"
                        value={exerciseForm.date}
                        onChange={(e) => setExerciseForm({ ...exerciseForm, date: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Add Exercise
                  </button>
                </form>

                <h3 className="text-xl font-bold text-gray-800 mb-4">Exercise Log</h3>
                {exercises.length === 0 ? (
                  <p className="text-gray-500 italic">No exercises logged yet. Start by adding one above!</p>
                ) : (
                  <div className="space-y-3">
                    {exercises.slice().reverse().map((exercise) => (
                      <div key={exercise.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-800 text-lg">{exercise.name}</p>
                          <p className="text-gray-600">{exercise.sets} sets × {exercise.reps} reps • {exercise.date}</p>
                        </div>
                        <button
                          onClick={() => deleteExercise(exercise.id)}
                          className="text-red-600 hover:text-red-800 font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
