import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">

            About

          </p>
        </div>

        <p className="text-xl mt-20">
          As a recent graduate with a B.Tech in Electronics and Communication Engineering from JNTUA University, I am passionate about IT. 
          I have developed a solid foundation in Key Skills like JAva,Git,Jenkins,Docker through my coursework, personal projects.
          My portfolio showcases a range of projects where I have applied my skills in software development,data analysis to solve real-world problems.
        </p>

        <br />

        <p className="text-xl">
          Throughout my career, I've gained proficiency in a wide range of DevOps
          tools and technologies. My experience with version control systems like Git, 
          coupled with my ability to build and maintain CI/CD pipelines using tools like 
          Jenkins and GitLab CI, has enabled me to enhance development workflows and 
          reduce deployment times. I am well-versed in containerization using Docker 
          and have orchestrated containerized applications with Kubernetes, ensuring 
          high availability and efficient resource management.
        </p>
      </div>
    </div>
  );
};

export default About;