import React from "react";
import { socials } from "~/constants/socials";

import { Link } from "remix";

const SocialList = ({ className = "" }) => {
  return (
    <ul className={`flex items-center gap-6 ${className}`}>
      {socials.map((social) => (
        <li className="text-xl" key={social.label}>
          <a href={social.url} target="_blank" rel="noopenner noreferrer">
            {social.icon({
              className:
                "opacity-50 hover:opacity-100 transition-all text-white",
            })}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
