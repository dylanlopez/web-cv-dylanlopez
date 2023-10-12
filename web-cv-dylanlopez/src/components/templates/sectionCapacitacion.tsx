import { CapacitacionUnorderListItem } from '../ui/atoms/capacitacionUnorderListItems';
import { TitlesH1 } from '../ui/atoms/titleH1';
import './sectionCapacitacion.css'

export const SectionCapacitacion = () => {
  return (
    <section id="capacitacion" className="section animate__animated animate__bounceInRight">
      <TitlesH1 text="Capacitación" />
        <ul className="unlist">
          <CapacitacionUnorderListItem institution="ISUR" course="PDC en Java Intermedio" hours="55" date="2008/11" />
          <CapacitacionUnorderListItem institution="BS Grupo" course="PDE Administración de Proyectos de Software" hours="48" date="2009/02" />
          <CapacitacionUnorderListItem institution="BS Grupo" course="Diplomado en Java EE 6 Web Service Developer" hours="120" date="2014/08" />
          <CapacitacionUnorderListItem institution="Data Mining Solutions" course="Administración de Bases de Datos con Oracle" hours="40" date="2015/12" />
          <CapacitacionUnorderListItem institution="Cibertec" course=".NET 4.5 Web Application Developer Visual Studio 2013 C#" hours="70" date="2016/02" />
          <CapacitacionUnorderListItem institution="Peru In HSE" course="Seguridad de la Información" hours="24" date="2016/05" />
          <CapacitacionUnorderListItem institution="Conect@Salud" course="Repositorio de Datos Abiertos" hours="24" date="2016/08" />
          <CapacitacionUnorderListItem institution="ENEG" course="Diplomado en Gestión Pública" hours="280" date="2016/12" />
          <CapacitacionUnorderListItem institution="B. Soft" course="Software Architecture and Design" hours="24" date="2020/08" />
          <CapacitacionUnorderListItem institution="Certiprof" course="Scrum Foundation Professional Certificate (SFPC)" hours="Examen" date="2020/09" />
          <CapacitacionUnorderListItem institution="HackerRank" course="C# Basic Certificate" hours="Examen" date="2021/02" />
          <CapacitacionUnorderListItem institution="Udemy" course="Blazor ASP.Net Core 3.1 con Entity Framework Core" hours="22" date="2021/03" />
          <CapacitacionUnorderListItem institution="Certiprof" course="Remote Work and Virtual Collaboration Professional Certificate (RWVCPC)" hours="Examen" date="2021/04" />
          <CapacitacionUnorderListItem institution="Certiprof" course="Cyber Security Foundation Professional Certificate (CSFPC)" hours="Examen" date="2021/04" />
          <CapacitacionUnorderListItem institution="Netec" course="Developing on AWS" hours="21" date="2021/07" />
          <CapacitacionUnorderListItem institution="HackerRank" course="Angular Basic Certificate" hours="Examen" date="2021/12" />
          <CapacitacionUnorderListItem institution="Udemy" course="React Native - The Practical Guide 2023" hours="29" date="2023/03" />
          <CapacitacionUnorderListItem institution="Udemy" course="Creando Web APIS Profesionales con .NET 6" hours="12" date="2023/03" />
          <CapacitacionUnorderListItem institution="Udemy" course="Docker, de Principiante a Experto" hours="9" date="2023/03" />
          <CapacitacionUnorderListItem institution="Udemy" course="The Complete SQL Oracle Certification" hours="17" date="2023/03" />
          <CapacitacionUnorderListItem institution="Udemy" course="AZ-900 Microsoft Azure Fundamentals Exam Prep" hours="7" date="2023/03" />
          <CapacitacionUnorderListItem institution="HackerRank" course="Javascript Basic Certificate" hours="Examen" date="2023/09" />
          <CapacitacionUnorderListItem institution="HackerRank" course="SQL Intermediate Certificate" hours="Examen" date="2023/09" />
        </ul>
    </section>
  )
}
