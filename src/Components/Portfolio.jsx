/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Web-based system for skin anomaly classification using Deep Learning",
    description:
      "A system to detect a skin disease from a given image using 9 sub categories and to describe the severity. The model is to be deployed as a website with a chatbot feature. Focus area: Computer Vision, Web Development",
    url: "https://github.com/riyaeliza123/Skin-Disease-Classification/tree/main",
  },
  {
    title: "Multi criterion decision making using neutrosophy for personality selection based on imposter syndrome",
    description:
      "Dataset collected from students of ages between 19-22. Gender balanced. Asked about their views on societal pressure, gender roles, and how it is different pre and post covid. Created a model predicting the dominant factors in understanding imposter syndrome.",
    url: "https://github.com/riyaeliza123/imposter-syndrome",
  },
  {
    title: "Medical emergency alert system using emotion detection",
    description:
      "A self collected dataset of 5 emotions, namely agony, scared, happy, neutral and sad was created. Model for detection was trained using Transfer learning (MobileNet) and testing was done using CV and PyGame camera modules.",
    url: "",
  },
  {
    title: "HEAL - (Hospital Emergency Ambulance Locator)",
    description:
      "Worked in research to develop a system that can connect our patients to the hospitals as well as provide them with quick ambulance services through our drivers and also help them get in touch with the doctors",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
