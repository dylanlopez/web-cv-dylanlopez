import { TitlesH1 } from '../ui/atoms/titleH1';
import { EventosUnorderListItem } from '../ui/atoms/eventosUnorderListItem';
import './sectionEventos.css'

export const SectionEventos = () => {
  return (
    <section id="eventos" className="section animate__animated animate__bounceInRight">
      <TitlesH1 text="Eventos" />

      <ul className="unlist">
        <EventosUnorderListItem name="AWSOME DAY" duration="10" />
        <EventosUnorderListItem name="AWS INNOVATE" duration="8" />
        <EventosUnorderListItem name="HACKATON MINSA 2016" duration="40" />
        <EventosUnorderListItem name="PONENTE EN INFOTEK 2013" duration="18" />
        <EventosUnorderListItem name="ASISTENTE EN I CONGRESO DE TECNOLOGÍAS AMBIENTALES" duration="12" />
        <EventosUnorderListItem name="ASISTENTE EN CONGRESO INTERNACIONAL DE DIRECCIÓN DE PROYECTOS PMI 2011" duration="16" />
        <EventosUnorderListItem name="ASISTENTE EN XVI CONGRESO INTERNACIONAL INFOTEK" duration="16" />
        <EventosUnorderListItem name="ASISTENTE EN CONGRESO INTERNACIONAL DE DIRECCIÓN DE PROYECTOS PMI 2010" duration="10" />
        <EventosUnorderListItem name="ASISTENTE EN CONFERENCIAS MAGISTRALES – MICROSOFT" duration="7" />
        <EventosUnorderListItem name="ASISTENTE EN CONFERENCIAS MAGISTRALES – GOBIERNO ELECTRÓNICO" duration="7" />
        <EventosUnorderListItem name="ASISTENTE PMI AREQUIPA BRANCH-CONFERENCIA EN GERENCIIA DE PROYECTOS" duration="6" />
        <EventosUnorderListItem name="ASISTENTE EN EXPERTS ROADSHOW 08’" duration="6" />
        <EventosUnorderListItem name="ASISTENTE EN ED TECH DAY 2008" duration="10" />
        <EventosUnorderListItem name="ASISTENTE EN CIUDAD DE HÉROES" duration="6" />
        <EventosUnorderListItem name="ASISTENTE EN TECHNET SUMMIT III" duration="8" />
        <EventosUnorderListItem name="ASISTENTE EN INGENIATE CON .NET" duration="16" />
        <EventosUnorderListItem name="ASISTENTE EN READY ACADEMICO" duration="10" />
        <EventosUnorderListItem name="ASISTENTE EN TECNOLOGÍAS DE INFORMACIÓN Y COMUNICACIONES: OPORTUNIDADES DE CRECIMIENTO PARA NUESTRA REGIÓN" duration="16" />
        <EventosUnorderListItem name="ASISTENTE EN PER-AREQUIPA ANDEAN WEB DAY" duration="7" />
      </ul>
    </section>
  )
}
