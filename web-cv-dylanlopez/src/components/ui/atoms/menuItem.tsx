import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HandleClick<T> = () => T;

interface MenuItemProps {
  url: HandleClick<void>;
  iconIcon: IconProp;
  iconName: string;
}

export const MenuItem = (props: MenuItemProps) => {
  const { url, iconIcon, iconName } = props;

  return (
    <a onClick={ url }>
      <span className="icon center">
        <FontAwesomeIcon icon={ iconIcon } size="2xl" className='iconSidebar' />
      </span>
      <span>{ iconName }</span>
    </a>
  )
};
