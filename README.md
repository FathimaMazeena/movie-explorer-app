# 🎬 Movie Explorer App

A modern and responsive Movie Explorer web application that allows users to search for movies, discover trending films, and view detailed information in real-time using the TMDb API.

---

## 🚀 Live Demo

🔗 https://movie-explorer-app-three-azure.vercel.app/

---

## 📌 Features

### 🔐 Authentication

* Simple user login interface (username & password)

### 🔍 Movie Search

* Search movies by title
* Infinite scrolling / Load more functionality

### 🎥 Movie Listings

* Grid layout displaying:

  * Poster
  * Title
  * Release Year
  * Rating

### 📄 Movie Details

* Detailed movie view including:

  * Overview
  * Genres
  * Ratings
  * Cast
  * Trailer (YouTube embed)

### 🔥 Trending Movies

* Display trending/popular movies from TMDb API

### 🌗 UI/UX Enhancements

* Light/Dark mode toggle
* Responsive design (mobile-first)

### ⭐ Favorites

* Save favorite movies (stored in local storage)

### 💾 Persistence

* Last searched movie stored in local storage

---

## 🛠️ Tech Stack

* **Frontend:** React, JavaScript
* **State Management:** Context API / Redux
* **Styling:** Material UI (MUI)
* **API Requests:** Axios
* **Routing:** React Router
* **API:** TMDb (The Movie Database)

---

## 🔗 API Used

* https://developers.themoviedb.org/3

---

## 📂 Project Structure

```
src/
│── components/
│   ├── MovieCard.js
│   ├── SearchBar.js
│   ├── Navbar.js
│── pages/
│   ├── Home.js
│   ├── MovieDetails.js
│   ├── Favorites.js
│── context/
│   ├── MovieContext.js
│── services/
│   ├── api.js
│── App.js
│── index.js
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
https://github.com/FathimaMazeena/movie-explorer-app/
```

2. Navigate into the project

```
cd movie-explorer-app
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file and add your TMDb API key:

```
REACT_APP_TMDB_API_KEY=your_api_key_here
```

5. Run the app

```
npm start
```

---

## 🧪 Error Handling

* Graceful API error handling with user-friendly messages
* Fallback UI for missing movie data

---

## 📱 Responsiveness

* Fully responsive design
* Optimized for mobile, tablet, and desktop

---

## 🚀 Deployment

This app can be deployed using:

* Vercel
* Netlify

---

##  📅 Project Details
Type: Personal Project
Date: May 2025


---
## 👨‍💻 Author

Developed by Mazeena Cader

---

## 📄 License

This project is for educational purposes.
