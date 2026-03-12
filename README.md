
## Project Description

**BuildTrack** is a modern responsive web application designed to help construction teams manage field operations efficiently.

The application allows site engineers and project managers to:

* Track construction projects
* Submit **Daily Progress Reports (DPR)**
* Upload work images from the site
* Monitor project progress and status

The project demonstrates **modern React development practices**, responsive UI design, and clean component architecture.


# Features

## Authentication

* Mock login authentication
* Form validation
* Error messages for incorrect credentials
* Redirect to Projects dashboard after successful login

Demo Login:

Email: test@test.com
Password: 123456


# Projects Dashboard

Users can view and manage construction projects.

Features:

* View project cards
* Search projects
* Filter by project status
* Responsive card layout
* Click project card to open DPR form

Project statuses:

* Active
* Completed
* Pending

# Daily Progress Report (DPR)

Users can submit a **Daily Progress Report** for a project.

Form fields:

* Project selection
* Date picker
* Weather selection
* Work description
* Worker count
* Image upload

Validation:

* All fields required
* Worker count must be greater than 0
* Maximum 3 images allowed


# Image Upload Preview

* Upload up to **3 images**
* Show preview thumbnails
* Remove selected images


# Dark / Light Mode

The application supports **theme switching**.

Features:

* Dark / Light mode toggle in Navbar
* Controlled globally using **ThemeContext**
* Entire application theme updates automatically


# Login Page UI

The login page includes:

* Full screen layout
* Background image
* Gradient overlay
* Modern login card
* Form validation
* Mobile friendly design


# Animations

The application includes smooth UI animations.

Using:

* **Framer Motion**

Examples:

* Page fade-in animation after login
* Hover effects on cards and buttons


# Modern UI Features

* Tailwind CSS styling
* Responsive design
* Modern card layouts
* Smooth hover animations
* Clean dashboard interface
* Sticky navigation bar


# Tech Stack

Frontend:

* React.js
* Vite

Routing:

* React Router v6

Styling:

* Tailwind CSS

Animations:

* Framer Motion

State Management:

* React Hooks (`useState`)
* Context API (`AuthContext`, `ThemeContext`)



# Responsive Design

Mobile-first responsive layout.

Breakpoints:

* Mobile: 375px
* Tablet: 768px
* Desktop: 1280px+

Features:

* Responsive grid layout
* Mobile-friendly forms
* Adaptive navigation
* No horizontal scrolling

# Future Improvements

Possible improvements for future versions:

* Backend API integration
* Database storage
* User authentication system
* Cloud image storage
* Admin dashboard
* Notifications system
* Project analytics

# Author

Deploy Link - https://intertaskk.netlify.app

GitHub
https://github.com/Viren-webx




