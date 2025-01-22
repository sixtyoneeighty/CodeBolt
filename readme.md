# CodeBolt

CodeBolt is a modern web application inspired by [bolt.new](https://bolt.new), designed to provide users with an intuitive interface for rapid, AI-assisted coding and problem-solving. This project leverages the power of Google's LLM model `gemini-2.0-flash-thinking-exp-1219` to deliver seamless AI-driven functionality.

## Features

- **Google LLM Integration:** Utilize the Gemini-2.0 model for advanced language understanding and code generation.
- **Minimalistic Design:** A sleek and user-friendly interface for enhanced productivity.
- **Rapid Responses:** Get real-time AI-driven coding assistance.
- **Code Export:** Generate and download code snippets for your projects.

## Getting Started

### Prerequisites

To set up the project locally, ensure you have the following installed:

- Node.js (v16 or later)
- npm or Yarn
- A Google Cloud account with access to the Gemini-2.0 model

### Folder Structure

The project is organized into two main folders:

- `client`: Contains the frontend code built with React and Vite.
- `server`: Contains the backend code built with Express.

### Installation

#### Client (Frontend)

1. Navigate to the `client` folder:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application in your browser at `http://localhost:3000`.

#### Server (Backend)

1. Navigate to the `server` folder:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. The server will run at `http://localhost:5000`.

### Environment Variables

Create a `.env` file in the root of the `server` folder with the following:

```env
GOOGLE_LLM_KEY=your-google-cloud-api-key
MODEL_NAME=gemini-2.0-flash-thinking-exp-1219
```

### Deployment

#### Client (Frontend)

1. Build the project:

   ```bash
   npm run build
   # or
   yarn build
   ```

2. Deploy the `dist/` folder to your hosting service (e.g., Vercel, Netlify).

#### Server (Backend)

1. Use a hosting service like Heroku, AWS, or Render.
2. Ensure the `.env` variables are configured in your hosting environment.

## Usage

- Navigate to the CodeBolt website.
- Interact with the AI by typing your coding queries or requirements.
- Receive AI-generated solutions or code snippets.
- Export code snippets as needed.

## Tech Stack

- **Frontend:** React.js, Vite, TypeScript
- **Backend:** Express.js, Node.js
- **AI Integration:** Google Cloud Gemini-2.0
- **Styling:** TailwindCSS

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. Commit your changes and push the branch:

   ```bash
   git commit -m "Add feature-name"
   git push origin feature-name
   ```

4. Open a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by [bolt.new](https://bolt.new).
- Powered by [Google Cloud LLM](https://cloud.google.com/ai).
