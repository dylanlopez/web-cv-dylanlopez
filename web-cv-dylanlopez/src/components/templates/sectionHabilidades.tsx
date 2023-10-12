import { Ability } from '../ui/molecules/ability';
import { Titles } from '../ui/molecules/titles';
import './sectionHabilidades.css'

export const SectionHabilidades = () => {
  return (
    <section id="habilidades" className="section animate__animated animate__bounceInRight"> 
      <Titles titlesType="01" titleH1="Habilidades" titleH2="Experiencia Total: 12 años" />
      <p>(No incluye experiencias del empleo actual)</p>
      <div className="columns">
        <Ability title="BackEnd" technologies={["C#.Net Framework", "C#.Net Core", "VB.Net Framework", "Java SE", "Java EE", "ASP", "Action Script", "Servlets", "Java Spring Boot", "PHP", "Node", "Python"]} durations={[55, 44, 24, 10, 10, 9, 7, 6, 4, 4, 4, 2]} />

        <Ability title="FrontEnd" technologies={["ASP.NET", "Angular", "Windows Forms", "JSP", "HTML", "Flash", "React", "Visual Basic 6.0"]} durations={[25, 23, 21, 15, 10, 10, 2, 2]} />

        <Ability title="Databases" technologies={["SQL Server", "PostgreSQL", "Oracle", "AWS DynamoDB", "Access", "MySQL", "MongoDB"]} durations={[82, 38, 18, 10, 9, 4, 2]} />

        <Ability title="Cloud" technologies={["AWS Cloudwatch", "AWS S3", "AWS Lambda", "AWS Cloudformation", "AWS CodeCommit"]} durations={[34, 22, 22, 8, 6]} />

        <Ability title="Others" technologies={["Scrum", "Git", "Subversion", "Jasper Reports", "Report Viewer", "Dreamweaver", "Crystal Reports", "Docker", "ETL - SSIS", "Flex Builder"]} durations={[49, 46, 35, 24, 16, 7, 6, 6, 3, 2]} />
      </div>
    </section>
  )
}
