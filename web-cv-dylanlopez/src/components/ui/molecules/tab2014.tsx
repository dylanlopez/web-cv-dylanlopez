import { Experience } from "./experience";

export const Tab2014 = (props: any) => {

  return (
    <div data-content="2014">
      <Experience company="Ministerio de Desarrollo e Inclusión Social" companyWeb="https://www.midis.gob.pe/registro/" job="Desarrollador" dateInitial="2017/01" dateFinal="2017/12" description="Ministerio público peruano de poblaciones vulnerables" backends={ [ "C#.Net Framework", "Java Spring Boot" ] } frontends={ [ "Angular" ] } databases={ [ "Sql Server", "Oracle" ] } />

      <Experience company="MDP Consulting" companyWeb="https://www.mdp.com.pe/" job="Desarrollador .Net SSR" dateInitial="2016/10" dateFinal="2017/01" description="Empresa peruana de desarrollo de software, para la que trabajé en un proyecto para su cliente: AFP Prima" backends={ [ "C#.Net Framework" ] } frontends={ [ "ASP.NET" ] } databases={ [ "Sql Server" ] } others={ [ "Scrum", "Subversion", "ETL - SSIS" ] } />

      <Experience company="Superintendencia Nacional de Salud" companyWeb="http://www.susalud.gob.pe/" job="Analista - Programador" dateInitial="2016/07" dateFinal="2016/09" description="Superintendencia peruana de salud, para la que trabajé en un de envergadura Nacional: TEDEF" backends={ [ "C#.Net Framework" ] } frontends={ [ "ASP.NET" ] } databases={ [ "Oracle" ] } others={ [ "Subversion" ] } />

      <Experience company="Chain Services Technology Information Corp" companyWeb="https://csticorp.biz/" job="Analista - Programador SSR" dateInitial="2015/12" dateFinal="2016/05" description="Empresa peruana de desarrollo de software, para la que trabajé en un proyecto para su cliente: Prosegur" backends={ [ "C#.Net Framework" ] } frontends={ [ "Windows Forms" ] } databases={ [ "Sql Server" ] } />

      <Experience company="B-It Solutions" companyWeb="http://www.bitsolutions.com.pe/" job="Analista - Programador .Net Oracle" dateInitial="2015/03" dateFinal="2015/12" description="Empresa peruana de desarrollo de software, para la que trabajé en un proyecto para su cliente: Susalud" backends={ [ "C#.Net Framework" ] } frontends={ [ "ASP.NET" ] } databases={ [ "Oracle" ] } others={ [ "Report Viewer" ] } />

      <Experience company="Dimexa" companyWeb="https://www.dimexa.com.pe/" job="Analista - Programador" dateInitial="2014/05" dateFinal="2015/02" description="Empresa peruana de venta de productos farmcéuticos en las que trabajé en el área de Sistemas" backends={ [ "Java EE", "C#.Net Framework" ] } frontends={ [ "JSP" ] } databases={ [ "PostGreSQL" ] } others={ [ "Jasper Reports", "Report Viewer" ] } />
    </div> 
  );
};
