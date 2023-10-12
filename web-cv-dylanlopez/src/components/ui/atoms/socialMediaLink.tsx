import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialMediaLink = (props) => {
  const [linkRoute] = useState(props.linkRoute);
  const [linkIcon] = useState(props.linkIcon);

  return (
    <a href={ linkRoute }>
      <span className="icon">
        <FontAwesomeIcon icon={ linkIcon } />
      </span>
    </a>
  )
}
