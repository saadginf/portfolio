import React from "react";

import api from "../../assets/icons/api.svg";
import algo from "../../assets/icons/algo.svg";
import computer from "../../assets/icons/computer.svg";
import repair from "../../assets/icons/repair.svg";
import puzzle from "../../assets/icons/puzzle.svg";

const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using HTML, CSS and React.js",
  },
  {
    icon: repair,
    title: "Backend  Development",
    about:
      "Developping in Micro Services Arch using Spring Cloud, Eureka, Spring Gateway",
  },
  {
    icon: api,
    title: "API Development",
    about: [
      "I can develop robust REST API using",
      <strong key={1}> Spring Boot, Express Js</strong>,
    ],
  },
  {
    icon: algo,
    title: "Mobile App Development",
    about: "I can Developpe Modern mobile Apps using React Native",
  },
  {
    icon: puzzle,
    title: "UI/UX designer",
    about: "minimalistic user interface designer using Adobe XD, Figma",
  },
];

export default skills;
