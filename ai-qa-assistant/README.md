# 🤖 AI Q&A Assistant

A simple beginner-friendly AI Q&A web application built with **React, Vite, JavaScript, and the Google Gemini API**.

The purpose of this project is to understand how a React frontend communicates with an external AI API and displays the generated response dynamically.

## 🚀 Features

* Ask questions to an AI assistant
* React state management using `useState`
* Loading / thinking state
* Error handling
* Gemini API integration
* Environment variables using Vite
* Clean and responsive UI

## 🛠️ Technologies Used

* React
* Vite
* JavaScript
* CSS
* Google Gemini API
* Fetch API

## 🔄 How It Works

```text
User enters a question
        ↓
React stores the input
        ↓
User clicks "Ask AI"
        ↓
JavaScript sends request using fetch()
        ↓
Google Gemini API
        ↓
Gemini returns JSON response
        ↓
React stores the AI response
        ↓
Response displayed on the screen
```

## 📁 Project Structure

```text
AI-QA-Assistant/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── public/
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go into the project:

```bash
cd AI-QA-Assistant
```

Install dependencies:

```bash
npm install
```

## 🔑 API Key Setup

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Do not upload your `.env` file to GitHub.

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite.

## 📚 What I Learned

Through this project, I learned:

* How React components work
* How `useState()` manages application data
* How `onChange` handles user input
* How `onClick` triggers functions
* How `async/await` works with API requests
* How `fetch()` communicates with an external API
* How JSON responses are processed
* How React updates the UI when state changes
* How Vite environment variables work
* Basic API error handling

## ⚠️ Security Note

The API key is loaded through a Vite environment variable for learning purposes.

For a production application, the API key should be kept on a backend/server-side environment instead of exposing it in frontend code.

## 🎯 Future Improvements

* Chat history
* Multiple questions and answers
* Markdown rendering
* Dark mode
* Typing animation
* Backend API
* Authentication
* Conversation storage
