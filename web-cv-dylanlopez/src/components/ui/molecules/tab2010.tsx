import { Experience } from "./experience";

export const Tab2010 = (props: any) => {

  return (
    <div data-content="2010">
      <Experience company="D&P Solutions for Business" companyWeb="http://dypsol.com/" job="Analista - Programador / Jefe de Proyectos" dateInitial="2013/11" dateFinal="2014/03" description="Empresa peruana de desarrollo de software para la que trabajé desarrollando y dando mantenimiento a tres proyectos: SIAH, SIAR, SIAE" backends={ [ "Java EE", "C#.Net Framework" ] } frontends={ [ "JSP", "Windows Forms", "ASP.NET" ] } databases={ [ "PostGreSQL", "Sql Server" ] } others={ [ "Subversion", "Jasper Reports", "Report Viewer" ] } />

      <Experience company="Transportes Cromotex" companyWeb="http://www.cromotex.com.pe/" job="Analista - Programador" dateInitial="2013/04" dateFinal="2013/10" description="Empresa peruana de transporte interprovincial, para la que trabajé en su área de sistemas" backends={ [ "C#.Net Framework", "Serverlets" ] } frontends={ [ "Windows Forms", "JSP" ] } databases={ [ "PostGreSQL" ] } others={ [ "Subversion", "Jasper Reports" ] } />

      <Experience company="D&P Solutions for Business" companyWeb="http://dypsol.com/" job="Analista - Programador" dateInitial="2012/01" dateFinal="2013/03" description="Empresa peruana de desarrollo de software para la que se trabajó desarrollando y dando mantenimiento a tres proyectos: SIAH, SIAR, SIAE" backends={ [ "C#.Net Framework", "Java SE", "Serverlets" ] } frontends={ [ "Java SE", "Windows Forms", "ASP.NET", "JSP" ] } databases={ [ "PostGreSQL", "Sql Server" ] } others={ [ "Subversion", "Jasper Reports", "Report Viewer" ] } />

      <Experience company="LP Analistas y Consultiores" companyWeb="https://lpanalistas.com/" job="Analista - Programador" dateInitial="2010/12" dateFinal="2011/06" description="Empresa peruana de desarrollo de software para la que se trabajó desarrollando y dictando cursos de C#" backends={ [ "C#.Net Framework", "Java JEE" ] } frontends={ [ "JSP", "Windows Forms" ] } databases={ [ "PostGreSQL", "Sql Server" ] } others={ [ "Crystal Reports" ] } />
    </div> 
  );
};
