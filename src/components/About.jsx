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

          Hi, I'm Rajesh Jakka, a passionate and dedicated DevOps Engineer with 2.6 years of hands-on experience in automating, optimizing, 
          and securing software development pipelines. I thrive at the intersection of development and operations, focusing on enhancing collaboration,
          increasing deployment frequency, and improving overall software quality.

          Over the past few years, I've worked on a range of projects, focusing on building robust Continuous Integration and
          Continuous Deployment (CI/CD) pipelines, automating infrastructure, and ensuring security compliance throughout the 
          software delivery lifecycle.
        </p>

        <br />

        <p className="text-xl">
          Throughout my career, I've gained proficiency in a wide range of DevOps
          tools and technologies. 
          CI/CD Expertise: I have extensive experience setting up automated pipelines using Jenkins, integrating with tools
          like SonarQube for code quality, Maven for builds, and OWASP Dependency Check for vulnerability scanning.
          Cloud and Containerization: Proficient in managing and orchestrating containers using Docker and Kubernetes, 
          alongside hands-on experience in cloud platforms like AWS.
          Automation and Infrastructure as Code (IaC): Skilled in creating scalable infrastructure using tools like Ansible, 
          ensuring efficient, repeatable deployments.
          Security and Monitoring: Committed to building secure pipelines with integrated testing for vulnerabilities and performance
          monitoring throughout the development lifecycle.


          
        </p>
      </div>
    </div>
  );
};

export default About;