import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/AustinO97" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/austin-oblow-526b04240/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Social;
