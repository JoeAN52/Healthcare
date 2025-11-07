# FitLife Wellness Tracker

A comprehensive healthcare fitness and wellness tracking website built with React.js that helps users log daily activities, meals, and exercise routines.

## Features

### Pages

1. **Home** - Overview of the app with a welcoming design and motivational quote that changes on each visit
2. **About** - Explains the purpose of the website and its benefits for personal health
3. **Services/Features** - Showcases key features including:
   - Activity Logging
   - Meal Tracking
   - Exercise Tracking
   - Progress Reports
4. **Contact** - Functional contact form with validation for name, email, and message fields
5. **Dashboard** - Dynamic page displaying user logs for activities, meals, and exercises

### Key Technologies

- **React.js** - Functional components with hooks (useState, useEffect)
- **React Router** - Client-side routing for seamless navigation
- **Tailwind CSS** - Modern, responsive UI styling
- **localStorage** - Persistent data storage for user inputs

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd fitlife-wellness-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Project Structure

```
fitlife-wellness-tracker/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation component
│   │   └── Footer.jsx        # Footer component
│   ├── pages/
│   │   ├── Home.jsx          # Home page
│   │   ├── About.jsx         # About page
│   │   ├── Services.jsx      # Services/Features page
│   │   ├── Contact.jsx       # Contact form page
│   │   └── Dashboard.jsx     # Dashboard with tracking
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Application entry point
│   └── index.css             # Tailwind CSS imports
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies and scripts
```

## Features in Detail

### Dashboard Functionality

The Dashboard provides comprehensive tracking capabilities:

#### Activity Logging
- Log various physical activities (walking, running, cycling, etc.)
- Track duration in minutes
- Record date of activity
- View complete activity history
- Delete individual activity entries

#### Meal Tracking
- Log meal names and descriptions
- Track calorie intake
- Categorize meals (Breakfast, Lunch, Dinner, Snack)
- Record meal dates
- View complete meal history
- Delete individual meal entries

#### Exercise Tracking
- Log exercise names
- Track sets and repetitions
- Record workout dates
- View complete exercise history
- Delete individual exercise entries

#### Overview Tab
- Quick summary of total activities, meals, and exercises
- Recent entries from each category
- Visual statistics cards

### Contact Form

The contact form includes:
- Name field validation
- Email format validation
- Message field validation
- Success notification on submission
- Form data stored in localStorage
- Error messages for invalid inputs

### Data Persistence

All user data is stored locally using browser localStorage:
- Activities stored under 'activities' key
- Meals stored under 'meals' key
- Exercises stored under 'exercises' key
- Contact messages stored under 'contactMessages' key

Data persists across browser sessions and page refreshes.

## Design Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Clean and intuitive interface using Tailwind CSS
- **Color-Coded Sections** - Different colors for activities (green), meals (blue), and exercises (purple)
- **Interactive Elements** - Hover effects, transitions, and active states
- **Accessibility** - Semantic HTML and proper form labels

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Privacy

All data is stored locally in your browser. No data is sent to external servers. You have complete control over your wellness information.

## Future Enhancements

Potential features for future versions:
- Data visualization with charts and graphs
- Goal setting and progress tracking
- Export data functionality
- User authentication
- Cloud sync across devices
- Nutrition database integration
- Exercise video tutorials

## License

This project is open source and available for educational purposes.

## Support

For questions or issues, please use the Contact form within the application or reach out to support@fitlife.com.

---

**Built with React.js, Tailwind CSS, and dedication to health and wellness!**
