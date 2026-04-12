import { useState } from "react";
import API from "./api";

export default function Admin() {
  const [password, setPassword] = useState("");
  const [profileFile, setProfileFile] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  const [profileMsg, setProfileMsg] = useState("");
  const [cvMsg, setCvMsg] = useState("");
  const [profileLoading, setProfileLoading] = useState(false);
  const [cvLoading, setCvLoading] = useState(false);

  async function uploadProfile() {
    if (!profileFile || !password) {
      setProfileMsg("Please enter password and select a file!");
      return;
    }
    setProfileLoading(true);
    const formData = new FormData();
    formData.append("file", profileFile);
    formData.append("password", password);
    try {
      const res = await API.post("/api/upload/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProfileMsg("Success! URL: " + res.data.url);
    } catch (e) {
      setProfileMsg("Failed: " + (e.response?.data?.message || e.message));
    } finally {
      setProfileLoading(false);
    }
  }

  async function uploadCV() {
    if (!cvFile || !password) {
      setCvMsg("Please enter password and select a file!");
      return;
    }
    setCvLoading(true);
    const formData = new FormData();
    formData.append("file", cvFile);
    formData.append("password", password);
    try {
      const res = await API.post("/api/upload/cv", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setCvMsg("Success! URL: " + res.data.url);
    } catch (e) {
      setCvMsg("Failed: " + (e.response?.data?.message || e.message));
    } finally {
      setCvLoading(false);
    }
  }

  return (
    <div style={{ fontFamily: "sans-serif", background: "#0f172a", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ background: "#1e293b", borderRadius: "16px", padding: "2.5rem", maxWidth: "500px", width: "100%", border: "1px solid #334155" }}>

        <h1 style={{ color: "#f97316", fontSize: "1.5rem", fontWeight: 700, marginBottom: ".25rem" }}>Admin Panel</h1>
        <p style={{ color: "#94a3b8", fontSize: ".8rem", marginBottom: "2rem" }}>Only you can access this page</p>

        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ color: "#94a3b8", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em" }}>Admin Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your admin password"
            style={{ width: "100%", marginTop: ".4rem", background: "#0f172a", border: "1px solid #334155", borderRadius: "8px", padding: ".75rem 1rem", fontSize: ".9rem", color: "white", fontFamily: "inherit", outline: "none", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "1.5rem", marginBottom: "1rem", border: "1px solid #334155" }}>
          <p style={{ color: "#f1f5f9", fontWeight: 600, marginBottom: "1rem" }}>Upload Profile Picture</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setProfileFile(e.target.files[0])}
            style={{ color: "#94a3b8", marginBottom: "1rem", display: "block" }}
          />
          <button
            onClick={uploadProfile}
            disabled={profileLoading}
            style={{ background: profileLoading ? "#94a3b8" : "#f97316", color: "white", border: "none", padding: ".6rem 1.5rem", borderRadius: "8px", fontFamily: "inherit", fontSize: ".85rem", fontWeight: 600, cursor: profileLoading ? "not-allowed" : "pointer" }}
          >
            {profileLoading ? "Uploading..." : "Upload Picture"}
          </button>
          {profileMsg && (
            <p style={{ marginTop: ".75rem", fontSize: ".8rem", color: profileMsg.includes("Success") ? "#86efac" : "#f87171" }}>
              {profileMsg}
            </p>
          )}
        </div>

        <div style={{ background: "#0f172a", borderRadius: "12px", padding: "1.5rem", border: "1px solid #334155" }}>
          <p style={{ color: "#f1f5f9", fontWeight: 600, marginBottom: "1rem" }}>Upload CV</p>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setCvFile(e.target.files[0])}
            style={{ color: "#94a3b8", marginBottom: "1rem", display: "block" }}
          />
          <button
            onClick={uploadCV}
            disabled={cvLoading}
            style={{ background: cvLoading ? "#94a3b8" : "#f97316", color: "white", border: "none", padding: ".6rem 1.5rem", borderRadius: "8px", fontFamily: "inherit", fontSize: ".85rem", fontWeight: 600, cursor: cvLoading ? "not-allowed" : "pointer" }}
          >
            {cvLoading ? "Uploading..." : "Upload CV"}
          </button>
          {cvMsg && (
            <p style={{ marginTop: ".75rem", fontSize: ".8rem", color: cvMsg.includes("Success") ? "#86efac" : "#f87171" }}>
              {cvMsg}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}