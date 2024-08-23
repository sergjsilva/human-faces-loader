# Human Faces Loader

This project is a dynamic web page that loads human face images as users scroll down the page. The images are fetched from Unsplash through network requests triggered by the user's scrolling activity.

## Features

- **Infinite Scrolling:** Images are continuously loaded as the user scrolls down the page.
- **Dynamic Image Loading:** A network request is made to the Unsplash API to fetch a new human face image each time the user reaches the end of the page.
- **Responsive Design:** The layout adapts to different screen sizes, ensuring a smooth user experience across devices.

## Getting Started

### Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript.
- An API key from Unsplash to make requests.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/human-faces-loader.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd human-faces-loader
    ```
3. **Open `index.html` in your preferred browser:**
    ```bash
    open index.html
    ```

### Configuration

To use the Unsplash API, you need to obtain an API key:

1. Go to [Unsplash Developers](https://unsplash.com/developers) and register your application.
2. Get your API key and replace the placeholder in the JavaScript file:

    ```javascript
    const UNSPLASH_API_KEY = 'your-unsplash-api-key';
    ```

### How It Works

- **Scroll Event Listener:** The page listens for the `scroll` event. When the user scrolls near the bottom, a network request is triggered.
- **API Request:** The request fetches a random human face image from the Unsplash API.
- **Image Insertion:** The fetched image is dynamically inserted into the DOM.

### Project Structure

```plaintext
human-faces-loader/
│
├── index.html         # Main HTML file
├── style.css          # Styling for the project
└── script.js          # Main JavaScript file containing logic for API requests and DOM manipulation
