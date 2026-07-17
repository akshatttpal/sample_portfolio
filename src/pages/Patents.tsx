import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowBack, MdLock, MdLockOpen } from "react-icons/md";
import Cursor from "../components/Cursor";
import {
  PATENTS_PASSWORD,
  PATENTS_SESSION_KEY,
  patents,
} from "../config/patents";
import "../components/styles/Patents.css";

const Patents = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "auto";
    if (sessionStorage.getItem(PATENTS_SESSION_KEY) === "true") {
      setIsUnlocked(true);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === PATENTS_PASSWORD) {
      sessionStorage.setItem(PATENTS_SESSION_KEY, "true");
      setIsUnlocked(true);
      setError("");
      setPassword("");
      return;
    }
    setError("Incorrect password. Feel free to contact me for access!");
  };

  const handleLock = () => {
    sessionStorage.removeItem(PATENTS_SESSION_KEY);
    setIsUnlocked(false);
    setPassword("");
    setError("");
  };

  const handleBackToPortfolio = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="patents-page">
      <Cursor />
      <div className="patents-container section-container">
        <Link to="/" className="patents-back" data-cursor="disable" onClick={handleBackToPortfolio}>
          <MdArrowBack /> Back to Portfolio
        </Link>

        {!isUnlocked ? (
          <div className="patents-gate">
            <div className="patents-gate-icon">
              <MdLock />
            </div>
            <h1>
              Patents <span>Vault</span>
            </h1>
            <p>
              This section contains protected patent information. Enter the
              password to continue.
            </p>
            <form className="patents-form" onSubmit={handleSubmit}>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter password"
                autoComplete="current-password"
                data-cursor="disable"
              />
              <button type="submit" data-cursor="disable">
                Unlock
              </button>
            </form>
            {error && <p className="patents-error">{error}</p>}
          </div>
        ) : (
          <div className="patents-content">
            <div className="patents-header">
              <div>
                <h1>
                  My <span>Patents</span>
                </h1>
                <p>Research and innovation protected by intellectual property.</p>
              </div>
              <button
                type="button"
                className="patents-lock-btn"
                onClick={handleLock}
                data-cursor="disable"
              >
                <MdLockOpen /> Lock
              </button>
            </div>

            <div className="patents-grid">
              {patents.map((patent) => (
                <article className="patents-card" key={patent.title}>
                  <div className="patents-card-top">
                    <h3>{patent.title}</h3>
                    <span>{patent.year}</span>
                  </div>
                  <p className="patents-number">{patent.number}</p>
                  {patent.media && (
                    <div className="patents-media">
                      {patent.media.type === "image" ? (
                        <img
                          src={patent.media.src}
                          alt={patent.media.alt || patent.title}
                        />
                      ) : (
                        <video
                          controls={patent.media.controls ?? true}
                          poster={patent.media.poster}
                          preload="metadata"
                        >
                          <source src={patent.media.src} />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  )}
                  <p className="patents-description">{patent.description}</p>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Patents;
