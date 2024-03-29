import React from "react";
import { socials } from "~/constants/socials";

const SocialList = ({ className = "" }) => {
  return (
    <ul
      className={`flex items-center justify-center gap-6 md:justify-start ${className}`}
    >
      {socials.map((social) => (
        <li className="text-xl" key={social.label}>
          <a href={social.url} target="_blank" rel="noopenner noreferrer">
            {social.icon({
              className:
                "opacity-50 hover:opacity-100 transition-all text-gray-800",
            })}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
