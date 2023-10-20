import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";

function Projects(props) {
  return (
    <>
      <div className="outercard" id="projects">
        <h1 className="title">Projects</h1>
        <div className="innercard">
          {props.DataProjects.map((data) => {
            return (
              <div className="project-cards" key={data.id}>
                <h2 className="project-title">{data.title}</h2>
                <div>
                  <img
                    className="img-style"
                    src={data.img}
                    alt="Description of images"
                  />
                </div>

                <p className="description-text">{data.description}</p>
                <div className="links">
                  <p>
                    <a
                      className="länkar"
                      href={data.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                      <FontAwesomeIcon
                        icon={faEye}
                        size="lg"
                        className="FaIcons"
                      />
                    </a>
                  </p>

                  <p>
                    <a
                      href={data.viewcode}
                      target="_blank"
                      className="button-class"
                      rel="noreferrer"
                    >
                      Code
                      <FontAwesomeIcon
                        icon={faCode}
                        size="lg"
                        className="FaIcons"
                      />
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Projects;
