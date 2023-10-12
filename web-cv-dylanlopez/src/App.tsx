import { useState  } from 'react';
import './App.css'
import 'bulma/css/bulma.min.css';
import 'animate.css';
import { SideBar, SubSideBar, Principal } from './components';

export const App = () => {
  const [currentSectionValue, setSection] = useState('acercaDeMi');

  return (
    <div className='columns'>
      <div className='column is-1 sidebar-menu'>
        <SideBar 
          handleAcercaDeMiClick={ () => setSection('acercaDeMi') } 
          handleHabilidadesClick={ () => setSection('habilidades') } 
          handleExperienciaClick={ () => setSection('experiencia') } 
          handleEducacionClick={ () => setSection('educacion') } 
          handleCapacitacionClick={ () => setSection('capacitacion') } 
          handleEventosClick={ () => setSection('eventos') } 
          handleContactosClick={ () => setSection('contactos') }  />
      </div>
      
      <div className="column is-3 subsidebar">
        <SubSideBar />
      </div>

      <div className="column is-8 principal">
        <Principal currentSection={currentSectionValue} />
      </div>
    </div>
  )
}

export default App
