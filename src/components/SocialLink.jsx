import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialLink({ href, icon }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon">
			<FontAwesomeIcon icon={icon} size="2x" />
		</a>
    );
}

export default SocialLink