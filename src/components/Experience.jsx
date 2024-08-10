
import React from "react";

import Java from "../assets/Java.png";
import Linux from "../assets/Linux.png";
import Devops from "../assets/Devops.png";
import reactImage from "../assets/react.png";
import Jenkins from "../assets/Jenkins.jpg";
import Docker from "../assets/Docker.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import AWS from "../assets/AWS.png"
import Ec2 from "../assets/Ec2.png"
import Kubernetes from "../assets/Kubernetes.png"
import VPC from "../assets/VPC.jpg" 

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Linux,
      title: "Linux",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: Devops,
      title: "Devops",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Jenkins,
      title: "Jenkins",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Docker,
      title: "Docker",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
        id: 9,
      src: AWS,
      title: "AWS",
      style: "shadow-green-400",
    },
    {
        id: 10,
      src: Ec2,
      title: "EC2",
      style: "shadow-blue-400",
    },
    {
        id: 11,
      src: Kubernetes,
      title: "Kubernetes",
      style: "shadow-indigo-400",
    },
    {
        id: 12,
      src: VPC,
      title: "VPC",
      style: "shadow-indigo-400",
    }


  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
