import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

interface Project {
  title: string;
  category: string;
  tools: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "WanderNEST",
    category: "Local Tourism Platform",
    tools: "HTML5, CSS3, JavaScript, Node.js, EmailJS, PostgreSQL",
    image: "/images/WanderNEST.png",
  },
  {
    title: "Drone-Based Fire Detection System",
    category: "AI-Powered Disaster Monitoring",
    tools: "YOLOv5, AWS Cloud, Computer Vision, Python",
    image: "/images/Forest_Fire.png",
  },
  {
    title: "Vitals-Driven Home Automation with Sleep Vigilance",
    category: "IoT & Intelligent Automation",
    tools: "Machine Learning, Embedded Systems, Microservices, IoT",
    image: "/images/SleepVigilance.png",
  },
  {
    title: "Product Price Comparison",
    category: "AI & Process Automation",
    tools: "AI APIs, UiPath Studio, Web Automation, Data Processing",
    image: "/images/Automation.png",
  },
  {
    title: "Patented Projects",
    category: "Research & Innovation",
    tools: "Protected Content (Feel Free to contact me for access!)",
    image: "/images/Patents.png",
    link: "/patents",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const handleProjectClick = useCallback(
    (project: Project) => {
      if (project.link) {
        navigate(project.link);
      }
    },
    [navigate]
  );

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => {
                const isPatentedProject = project.title === "Patented Projects";

                return (
                  <div
                    className={`carousel-slide ${isPatentedProject ? "carousel-slide-patented" : ""}`}
                    key={index}
                  >
                    <div
                      className={`carousel-content ${isPatentedProject ? "carousel-content-patented" : ""}`}
                      onClick={() => handleProjectClick(project)}
                      onKeyDown={(event) => {
                        if ((event.key === "Enter" || event.key === " ") && project.link) {
                          event.preventDefault();
                          handleProjectClick(project);
                        }
                      }}
                      role={project.link ? "button" : undefined}
                      tabIndex={project.link ? 0 : undefined}
                    >
                      <div className="carousel-info">
                        <div className="carousel-number">
                          <h3>0{index + 1}</h3>
                        </div>
                        <div className="carousel-details">
                          <h4>
                            {project.title === "Vitals-Driven Home Automation with Sleep Vigilance" ? (
                              <>
                                Vitals-Driven Home Automation
                                <br />
                                with Sleep Vigilance
                              </>
                            ) : (
                              project.title
                            )}
                          </h4>
                          <p className="carousel-category">{project.category}</p>
                          <div className="carousel-tools">
                            <span className="tools-label">Tools & Features</span>
                            <p>{project.tools}</p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-image-wrapper">
                        <WorkImage
                          image={project.image}
                          alt={project.title}
                          link={isPatentedProject ? undefined : project.link}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
