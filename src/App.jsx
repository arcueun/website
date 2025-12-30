import './css/App.css'
import SocialLink from './components/SocialLink'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SOCIAL_LINKS = [
  { href: "https://github.com/arcueun", icon: faGithub },
  { href: "mailto:arcueun@gmail.com", icon: faEnvelope },
  { href: "https://www.linkedin.com/in/marcusbc/", icon: faLinkedin },
  { href: "https://www.instagram.com/arcueun/", icon: faInstagram },
];

function App() {
  return (
    <>
    {/* i love Jesus! */}
      <div className='center'>
          <div className='text-name'>arcueun</div>
          <div className='text-bio'>hi, i'm marcus.</div>
          <div className='text-bio'>i love Jesus, computer networks and security engineering.</div>

          <div id='link-table'>
             {SOCIAL_LINKS.map((link, index) => (
                <SocialLink 
                  key={index} 
                  href={link.href} 
                  icon={link.icon} 
                />
              ))}
          </div>
      </div>
    </>
  )
}

export default App
