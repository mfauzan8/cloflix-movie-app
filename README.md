<div align="center">
    <img src="./src/assets/image/cloflix.png" alt="Cloflix" width="100" />
  <h2>Movies Website - Cloflix</h2>
    <a href="https://cloflix-movie-app.vercel.app/" target="_blank">➥ Live Demo</a>
</div>

## Technologies Used
- Vite
- React
- Node.js

## How To Run
This website is built using Vite-React.Js + Modern library and use TMDB API to fetch movie and TV show data.

To get started, you will need to obtain an API key from TMDB by creating an account on their website (https://www.themoviedb.org/). Once you have your API key, you can set it as an environment variable.

To run the website locally, clone the repository and run the following commands:

1. Clone repository using git clone
   ```bash
    git clone https://github.com/mfauzan8/cloflix-movie-app.git
    ```
2. Navigate to the project directory
   ```bash
    cd cloflix-movie-app
    ```
3. Install dependencies
   ```bash
    npm install
    ```
4. Get your TMDB API key from [here](https://www.themoviedb.org/) and set it as an environment variable in `.env` file
   ```bash
    VITE_BASE_API_URL=<your_api_url>
    VITE_AUTH_KEY=<your_api_auth_key>
    ```
5. Run the development server
   ```bash
    npm run dev
    ```

This will start the development server and the website will be available at http://localhost:5173/.
