import { SectionAcercaDeMi } from '../templates/sectionAcercaDeMi'
import { SectionHabilidades } from '../templates/sectionHabilidades';
import { SectionExperiencia } from '../templates/sectionExperiencia';
import { SectionEducacion } from '../templates/sectionEducacion';
import { SectionCapacitacion } from '../templates/sectionCapacitacion';
import { SectionEventos } from '../templates/sectionEventos';
import { SectionContactos } from '../templates/sectionContactos';
import './principal.css'

interface PrincipalProps {
  currentSection: string;
}

export const  Principal = (props: PrincipalProps) => {
  const { currentSection } = props;

  return (
    <>
      { currentSection === "acercaDeMi" && <SectionAcercaDeMi /> }
      { currentSection === "habilidades" && <SectionHabilidades /> }
      { currentSection === "experiencia" && <SectionExperiencia /> }
      { currentSection === "educacion" && <SectionEducacion /> }
      { currentSection === "capacitacion" && <SectionCapacitacion /> }
      { currentSection === "eventos" && <SectionEventos /> }
      { currentSection === "contactos" && <SectionContactos /> }
    </>
  )
}
