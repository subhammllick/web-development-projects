import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askAI = async () => {
    if (!input.trim()) {
      setError("Please enter a question.");
      return;
    }

    setLoading(true);
    setResponse("");
    setError("");

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },

          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: input,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();

      console.log("Gemini response:", data);

      if (!res.ok) {
        throw new Error(
          data?.error?.message || "Gemini API request failed."
        );
      }

      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!aiText) {
        throw new Error("Gemini did not return an answer.");
      }

      setResponse(aiText);

    } catch (err) {
      console.error("Gemini error:", err);
      setError(err.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="chat-container">

        <h1>AI Q&A Assistant</h1>

        <p className="subtitle">
          Ask a question and Gemini will answer.
        </p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />

        <button
          onClick={askAI}
          disabled={loading}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {response && (
          <div className="answer">
            <h2>AI Response</h2>
            <p>{response}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;