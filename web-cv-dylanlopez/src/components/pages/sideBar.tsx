import { faHome, faBriefcase, faGraduationCap, faCalendarDays, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { MenuItem } from '../ui/atoms/menuItem';
import './sideBar.css'

type HandleClick<T> = () => T;

interface SideBarProps {
  handleAcercaDeMiClick: HandleClick<void>;
  handleHabilidadesClick: HandleClick<void>;
  handleExperienciaClick: HandleClick<void>;
  handleEducacionClick: HandleClick<void>;
  handleCapacitacionClick: HandleClick<void>;
  handleEventosClick: HandleClick<void>;
  handleContactosClick: HandleClick<void>;
}

export const SideBar = (props: SideBarProps) => {
  const { handleAcercaDeMiClick, handleHabilidadesClick, handleExperienciaClick, handleEducacionClick, handleCapacitacionClick, handleEventosClick, handleContactosClick } = props;

  return (
    <ul>
      <li>
        <MenuItem url={ handleAcercaDeMiClick } iconIcon={ faHome } iconName="Acerca de mi" />
      </li>
      <li>
        <MenuItem url={ handleHabilidadesClick } iconIcon={ faBriefcase } iconName="Habilidades" />
      </li>
      <li>
        <MenuItem url={ handleExperienciaClick } iconIcon={ faBriefcase } iconName="Experiencia" />
      </li>
      <li>
        <MenuItem url={ handleEducacionClick } iconIcon={ faGraduationCap } iconName="Educación" />
      </li>
      <li>
        <MenuItem url={ handleCapacitacionClick } iconIcon={ faGraduationCap } iconName="Capacitación" />
      </li>
      <li>
        <MenuItem url={ handleEventosClick } iconIcon={ faCalendarDays } iconName="Eventos" />
      </li>
      <li>
        <MenuItem url={ handleContactosClick } iconIcon={ faAddressBook } iconName="Contactos" />
      </li>
    </ul>
  )
}
