import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Error catcher — shows the real error on the page instead of a white screen
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error("App crashed:", error, info); }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 28, fontFamily: "system-ui, sans-serif", maxWidth: 760, margin: "40px auto", color: "#1f2a44" }}>
          <h2 style={{ color: "#b91c1c", marginBottom: 8 }}>The demo hit an error</h2>
          <p style={{ color: "#555", marginBottom: 16 }}>Copy the message below and send it back to fix it:</p>
          <pre style={{ background: "#f4f6f9", border: "1px solid #e2e6ee", borderRadius: 10, padding: 16, whiteSpace: "pre-wrap", wordBreak: "break-word", fontSize: 13, color: "#7f1d1d" }}>
{String(this.state.error && this.state.error.stack ? this.state.error.stack : this.state.error)}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
