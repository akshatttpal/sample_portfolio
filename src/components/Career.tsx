import { useEffect, useRef, useState } from "react";
import "./styles/Career.css";

const Career = () => {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const careerSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isCertificateOpen) return;

    const timeoutId = window.setTimeout(() => {
      setIsCertificateOpen(false);
    }, 10000);

    const handleScroll = () => {
      const careerSection = careerSectionRef.current;
      const workSection = document.getElementById("work");

      if (!careerSection) return;

      const careerRect = careerSection.getBoundingClientRect();
      const workRect = workSection?.getBoundingClientRect();
      const viewportBottom = window.innerHeight;

      const careerBottom = careerRect.bottom;
      const workTop = workRect ? workRect.top : careerBottom + 1;

      const hasReachedNextSection =
        careerBottom <= viewportBottom * 0.2 &&
        workTop <= viewportBottom * 0.9;

      if (hasReachedNextSection) {
        setIsCertificateOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isCertificateOpen]);

  return (
    <div className="career-section section-container" ref={careerSectionRef}>
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Summer Intern</h4>
                <div className="career-location">
                  <h5>MANIT Bhopal</h5>
                  <button
                    type="button"
                    className="career-certificate-link"
                    onClick={() => setIsCertificateOpen(true)}
                  >
                    View Certificate
                  </button>
                </div>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a summer internship at MANIT Bhopal, 
              where I worked on Product Design and Smart Manufacturing. 
              Designed and implemented a smart automation system leveraging 
              AI, IoT, and embedded technologies for adaptive home control.
            </p>
          </div>
          {/*<div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Developer</h4>
                <h5>Monocept (Max Life Insurance)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Led two development teams on Mpro, a large-scale insurance
              operations platform. Developed multiple modules using React.js &
              migrated critical functionalities to Node.js microservices.
            </p>
          </div>*/}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Fiverr, Upwork, Freelancer, Outlier.ai and more</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing web applications, automation workflows, and custom 
              software solutions for clients across global freelance platforms. 
              Delivering scalable, efficient, and user-focused solutions 
              tailored to business needs.
            </p>
          </div>
        </div>
      </div>

      {isCertificateOpen && (
        <div
          className="career-certificate-modal-backdrop"
          onClick={() => setIsCertificateOpen(false)}
        >
          <div
            className="career-certificate-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="career-certificate-close"
              onClick={() => setIsCertificateOpen(false)}
              aria-label="Close certificate"
            >
              ×
            </button>
            <img src="/images/certificate.jpeg" alt="Certificate" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
