import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SOCIAL_LINKS = [
  { href: "https://github.com/arcueun", icon: faGithub },
  { href: "mailto:arcueun@gmail.com", icon: faEnvelope },
  { href: "https://www.linkedin.com/in/marcusbc/", icon: faLinkedin },
  { href: "https://www.instagram.com/arcueun/", icon: faInstagram },
];


function SocialLink() {
    return (
        <>
          {SOCIAL_LINKS.map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={icon} size="2x" />
            </a>
          ))}
        </>
    );
}

export default SocialLink