import "./StatusCheck.css";
import { useState } from "react";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️");

  async function handleCheckApiStatus() {
    setStatusIcon("⏳");

    try {
      const response = await fetch(apiStatusUrl);

      if (!response.ok) {
        setStatusIcon("❌");
        throw new Error(
          `Failed to fetch data! Status Code: ${response.status}`
        );
      }
      setStatusIcon("✅");
    } catch (error) {
      console.error("An error occurred: ", error.message);
      setStatusIcon("🚨");
    }
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">{statusIcon}</span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
