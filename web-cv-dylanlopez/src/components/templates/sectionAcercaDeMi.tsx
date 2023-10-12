import imagePath from './../../assets/dylan_lopez.png';
import { Image } from "../ui/atoms/image";
import { Titles } from '../ui/molecules/titles';
import { Parrafo } from '../ui/atoms/parrafo';
import './sectionAcercaDeMi.css'

export const SectionAcercaDeMi = () => {
  return (
    <section id="acerca-de-mi" className="section animate__animated animate__bounceInRight">
      <div className="columns">
        <div className="column is-4">
          <Image imagePath={ imagePath } />
        </div>
        <div className="column is-7">
          <Titles titlesType="02" titleH1="Dylan Alejandro López Enciso" titleH2="Fullstack Developer" />
          <Parrafo text="Ingeniero de Sistemas Titulado y Técnico Titulado en Computación e Informática, con más de 11 años de
            experiencia laboral acumulada." />
          <Parrafo text="Desarrollador Full Stack con amplio conocimiento y experiencia en todas las etapas del desarrollo de aplicaciones en entorno .NET (C# y VB). Con conocimiento en NET Core, NHibernate, Entity Framework, Fluent, Building Blocks, WCF; utilizando WPF, Silverlight, Razor, Blazor, ASP.NET para la interfaz de usuario con la utilización de los patrones MVVM o MVC, conocimiento de las librerías Bootstrap, Material Design, JQuery, AngularJS." />
          <Parrafo text="Conocimiento de las herramientas Amazon Web Services (AWS): S3, Lambda, S3, Routing, Cloudwatch y DynamoDB. Con conocimiento en herramientas de Git como GitHub, Bitbucket." />
          <Parrafo text="Conocimiento de patrones de diseño y GoFs, con utilización de conexiones directas e indirectas a base de datos, programación en 3 o N capas, conocimiento de los principios de SOLID, patrones de presentación MVC, MVP, MVVM, utilización de ORMs para el mapeo de base de datos." />
          <Parrafo text="Manejo de bases de datos potentes como Oracle, SQL Server, DynamoDB, MySQL, PostgreSQL, Access y SQLite con procedimientos almacenados, conocimiento de lenguaje SQL, así como sus derivados PL/SQL, TransacSQL y PGSQL." />
          <Parrafo text="Conocimiento de metodologías ágiles como, Scrum y Kanban." />
        </div>
      </div>
    </section>
  )
}
