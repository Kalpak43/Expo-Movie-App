# Reli Movie App

Reli is a cross-platform movie discovery app built with Expo, React Native, and Appwrite. It allows users to search for movies, view trending titles, and see detailed information about each film.

## Features

- **Movie Search:** Search for movies using The Movie Database (TMDB) API.
- **Trending Movies:** View trending movies based on search popularity, powered by Appwrite.
- **Movie Details:** See detailed information, including genres, ratings, budget, revenue, and production companies.
- **Modern UI:** Responsive and visually appealing interface using Tailwind CSS (via NativeWind).

## Design Rationale

The Reli Movie App is designed with Jakob Nielsen’s 10 Usability Heuristics in mind to ensure a user-friendly and intuitive experience:

1. **Visibility of System Status:**  
   The app provides loading indicators and feedback for actions like searching or fetching movie data, keeping users informed about ongoing processes.

2. **Match Between System and the Real World:**  
   Movie information is presented using familiar terminology and layouts, mirroring popular movie platforms to reduce the learning curve.

3. **User Control and Freedom:**  
   Users can easily navigate back, cancel searches, and switch between tabs without losing their place or data.

4. **Consistency and Standards:**  
   UI components and navigation patterns are consistent throughout the app, following platform conventions and using standard icons.

5. **Recognition Rather Than Recall:**  
   Frequently used actions (like trending, search, and details) are always accessible via the tab bar, reducing the need to remember navigation paths

6. **Flexibility and Efficiency of Use:**  
   The app supports both quick browsing (trending movies) and detailed exploration (movie details), catering to both casual and power users.

7. **Aesthetic and Minimalist Design:**  
   The interface uses a clean, modern design with clear typography and minimal clutter, focusing attention on movie content.



## Tech Stack

- **React Native** (with Expo)
- **Expo Router** for navigation
- **NativeWind** (Tailwind CSS for React Native)
- **Appwrite** for backend database and trending logic
- **TMDB API** for movie data
- **TypeScript** for type safety

## Folder Structure

```
.
├── README.md
├── app
│   ├── (tabs)
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── search.tsx
│   ├── _layout.tsx
│   ├── global.css
│   ├── index.tsx
│   └── movie
│       └── [id].tsx
├── app.json
├── assets
│   ├── fonts
│   │   └── SpaceMono-Regular.ttf
│   ├── icons
│   │   ├── arrow.png
│   │   ├── home.png
│   │   ├── logo.png
│   │   ├── person.png
│   │   ├── play.png
│   │   ├── save.png
│   │   ├── search.png
│   │   └── star.png
│   └── images
│       ├── bg.png
│       ├── highlight.png
│       ├── logo.png
│       └── rankingGradient.png
├── babel.config.js
├── components
│   ├── movie-card.tsx
│   ├── searchbar.tsx
│   └── trending-card.tsx
├── constants
│   ├── icons.ts
│   └── images.ts
├── eas.json
├── eslint.config.js
├── expo-env.d.ts
├── hooks
│   └── useFetch.ts
├── interfaces
│   └── interfaces.d.ts
├── metro.config.js
├── nativewind-env.d.ts
├── package-lock.json
├── package.json
├── services
│   ├── api.ts
│   └── appwrite.ts
├── tailwind.config.js
├── tree.txt
├── tsconfig.json
└── types
    └── images.d.ts

14 directories, 43 files

```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Appwrite Project](https://appwrite.io/)
- [TMDB API Key](https://www.themoviedb.org/documentation/api)

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/reli.git
cd reli
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Copy .env.example to .env and fill in your credentials:

```sh
cp [.env.example](http://_vscodecontentref_/0) .env
```

- `EXPO_PUBLIC_MOVIE_API_KEY`: Your TMDB API key
- `EXPO_PUBLIC_APPWRITE_PROJECT_ID`: Appwrite project ID
- `EXPO_PUBLIC_APPWRITE_DATABASE_ID`: Appwrite database ID
- `EXPO_PUBLIC_APPWRITE_COLLECTION_ID`: Appwrite collection ID

### 4. Start the App

```sh
npx expo start
```

Then follow the Expo CLI instructions to run on Android, iOS, or Web.

#### Scripts

- `npm start` — Start the Expo development server
- `npm run android` — Run on Android device/emulator
- `npm run ios` — Run on iOS simulator
- `npm run web` — Run in the browser
- `npm run lint` — Lint the codebase


Made with ❤️ using Expo, React Native, and Appwrite
