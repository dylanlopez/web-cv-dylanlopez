import { faLinkedin, faFacebook, faTwitter, faSteam } from '@fortawesome/free-brands-svg-icons';
import { SocialMediaLink } from '../atoms/socialMediaLink';

export const SocialMediaLinks = () => {

  return (
    <div className="social-media">
      {/* <a href="https://www.linkedin.com/in/dylanlopeze/">
        <span className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a> */}

      {/* <a href="https://www.facebook.com/dylan.lopez.75457">
        <span className="icon">
          <FontAwesomeIcon icon={faFacebook} />
        </span>
      </a> */}

      {/* <a href="https://twitter.com/dylanlopeze">
        <span className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </a> */}

      {/* <a href="https://www.google.com/">
        <span className="icon">
          <FontAwesomeIcon icon={faSteam} />
        </span>
      </a> */}

      <SocialMediaLink linkRoute="https://www.linkedin.com/in/dylanlopeze/" linkIcon={ faLinkedin } />
      <SocialMediaLink linkRoute="https://www.facebook.com/dylan.lopez.75457" linkIcon={ faFacebook } />
      <SocialMediaLink linkRoute="https://twitter.com/dylanlopeze" linkIcon={ faTwitter } />
      <SocialMediaLink linkRoute="https://www.google.com/" linkIcon={ faSteam } />
    </div>
  )
}
