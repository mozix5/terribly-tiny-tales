# Terribly Tiny Tales Profile Page

## Overview

This React application is designed to showcase a dynamic user profile page featuring posts and user statistics. The architecture is modular, comprising distinct components and pages that contribute to the overall structure and functionality.

## Components

1. **Navbar.jsx**: Simple navigation bar with a logo and "Courses" button.
2. **Posts.jsx**: Component for rendering individual posts with title, content, type, and stats.

## Pages

1. **Profile.jsx**: Main profile page displaying user information, bio, and a list of posts.

## Libraries and Plugins

- **React**: JavaScript library for building user interfaces.
- **react-icons**: Icon library for React.
- **Tailwind CSS**: CSS framework for styling.

## External Data

- **userData.json**: JSON file containing mock user data.

## Data Fetching and Optional Chaining

- **Data Fetching:**
  - User-specific data is fetched from `userData.json` using the `useEffect` hook in `Profile.jsx`.

    ```javascript
    const fetchData = async () => {
      try {
        const response = await fetch("userData.json");
        const data = await response.json();
        setData(data?.user); // Optional chaining used here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
    ```

- **Optional Chaining:**
  - The optional chaining (`?.`) is employed in `setData(data?.user)` to gracefully handle situations where the data may be missing or the structure has changed.

    - This ensures that the application won't break if data is undefined or not in the expected format.


## Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
2. **Install dependencies**:
   ```bash
   npm install
3. **Run the development server**:
   ```bash
   npm run dev

