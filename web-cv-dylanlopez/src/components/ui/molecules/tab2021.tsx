import { Experience } from "./experience";

export const Tab2021 = (props: any) => {

  return (
    <div data-content="2021">
      <Experience company="Baufest" companyWeb="https://baufest.com/" job="Desarrollador Fullstack SR" dateInitial="2022/02" dateFinal="Presente" description="Empresa argentina con presencia internacional en los que se participó en proyectos de Argentina, Chile y España" backends={ [ "C#.Net Framework", "C#.Net Core", "NodeJS" ] } frontends={ [ "ASP.NET", "Angular", "React Native" ] } databases={ [ "Sql Server", "Azure CosmoDB" ] } clouds={ [ "Azure Pipelines", "Azure Blob Storage", "Azure Functions" ] } others={ [ "Scrum", "Git", "Docker" ] } />

      <Experience company="MDP" companyWeb="https://www.mdp.com.pe/" job="Desarrollador Fullstack SSR" dateInitial="2021/06" dateFinal="2021/12" description="Empresa peruana de desarrollo de software, para la que trabajé en dos proyectos para dos clientes diferentes: Antamina y La Caja Municipal de Lima" backends={ [ "C#.Net Core" ] } frontends={ [ "Angular" ] } databases={ [ "Sql Server" ] }  others={ [ "Scrum", "Git", "AWS CodeCommit" ] } />
    </div> 
  );
};
