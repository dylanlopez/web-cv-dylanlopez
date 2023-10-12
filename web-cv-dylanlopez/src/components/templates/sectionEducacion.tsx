import { TitlesH1 } from '../ui/atoms/titleH1';
import { Education } from '../ui/molecules/education';
import './sectionEducation.css'

export const SectionEducacion = () => {
  return (
    <section id="educacion" className="section animate__animated animate__bounceInRight">
      <TitlesH1 text="Educación" />
      <Education institution="Universidad Tecnológica del Perú" study="Ingeniería de Sistemas" from="2009" until="2013" />
      <Education institution="Instituto Tecnológico del Sur" study="Computación e Informática" from="2004" until="2007" />
      <Education institution="Colegio Salesianos Don Bosco" study="Educacion Secundaria" from="1999" until="2003" />
      <Education institution="Colegio Daniel Comboni" study="Educación Primaria" from="1993" until="1998" />
    </section>
  )
}
