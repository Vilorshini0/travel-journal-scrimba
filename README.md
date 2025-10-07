# 🌍 Travel Journal React

    A responsive React app built as part of the Scrimba Frontend Developer Career Path.
    The Travel Journal displays a collection of travel destinations with images, locations, descriptions, and Google Maps links — designed to look like a personal travel log.


## 🌐 Demo

    https://vilorshini-travel-journal-scrimba.netlify.app/


## 📁 How It Works

    1. The app imports an array of travel destinations from data.js.

    2. Each object in the array includes:

        {
            title: "Mount Fuji",
            location: "Japan",
            googleMapsLink: "https://goo.gl/maps/example",
            dates: "12 Jan, 2021 - 24 Jan, 2021",
            description: "Mount Fuji is Japan’s tallest mountain...",
            img: {
                src: "mount-fuji.jpg",
                alt: "Mount Fuji"
            }
        }

    3. The App.jsx file maps through this array to render an Entry component for each destination.


## 🚀 Features

    - Built with React functional components

    - Dynamically renders travel entries from a data file

    - Each card includes:

        -> Destination image

        -> Location and Google Maps link

        -> Travel dates

        -> Description of the trip

    - Clean, minimalist UI

    - Fully desktop responsive design


## 🛠️ Tech Stack

    - React – For building reusable UI components and managing component-based structure
    
    - Vite -  For fast and easy development setup

    - SCSS – For styling and layout (custom styles for cards, header, and responsive design)

    - HTML5 Semantics – For accessibility and structured markup using sections, headers, and images
    
    - JavaScript (ES6) - For dynamic rendering and data mapping through components


## 📦 Usage

    1. Clone the repository:

       git clone https://github.com/yourusername/travel-journal.git

    2. Go into the project folder

       cd travel-journal


    3. Install dependencies:
    
       npm install


    4. Run the project:

       npm run dev


    5. The app will open at http://localhost:3000 in your browser.


## ⚙️ Customization

    Add more destinations in data.js

    Replace images inside /assets folder

    Customize Google Maps links or text content


## 📄 License

    This project is part of the Scrimba Frontend Developer Career Path and is available for personal or educational use. 🤗