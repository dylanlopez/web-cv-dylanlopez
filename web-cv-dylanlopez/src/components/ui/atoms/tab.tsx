import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TabProps {
  year: string;
  isActive: boolean;
  onClick: () => void;
}

export const Tab = (props: TabProps) => {
  const { year, isActive, onClick } = props;

  return (
    <li className={ isActive ? 'is-active' : '' } data-tab={ year } onClick={ onClick }>
      <a>
        <span className="icon is-small"><FontAwesomeIcon icon={ faCalendarDays } size="lg" className='iconSidebar' /></span>
        <span>{year}</span>
      </a>
    </li>
  );
};
