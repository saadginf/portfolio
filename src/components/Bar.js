import React from "react";
import { FaGit, FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiAdobexd,
  SiFirebase,
  SiPostgresql,
  SiPowershell,
} from "react-icons/si";

const Bar = ({ value: { icon, name, level } }) => {
  const bar_width = `${level}%`;
  return (
    <div className="bar">
      <div
        className="bar__wrapper"
        style={{
          width: bar_width,
        }}
      >
        <span className="bar__name">
          {icon === "java" ? (
            <FaJava className="bar__icon mr-2" />
          ) : icon === "react" ? (
            <FaReact className="bar__icon mr-2" />
          ) : icon === "git" ? (
            <FaGit className="bar__icon mr-2" />
          ) : icon === "python" ? (
            <FaPython className="bar__icon mr-2" />
          ) : icon === "sql" ? (
            <SiPostgresql className="bar__icon mr-2" />
          ) : icon === "node" ? (
            <FaNodeJs className="bar__icon mr-2" />
          ) : icon === "shell" ? (
            <SiPowershell className="bar__icon mr-2" />
          ) : icon === "adobe" ? (
            <SiAdobexd className="bar__icon mr-2" />
          ) : icon === "firebase" ? (
            <SiFirebase className="bar__icon mr-2" />
          ) : null}

          {name}
        </span>
      </div>
    </div>
  );
};

export default Bar;
