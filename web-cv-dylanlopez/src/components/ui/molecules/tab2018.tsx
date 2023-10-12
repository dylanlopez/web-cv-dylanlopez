import { Experience } from "./experience";

export const Tab2018 = (props: any) => {

  return (
    <div data-content="2018">
      <Experience company="El Comercio" companyWeb="https://www.pagoefectivo.la/pe/" job="Desarrollador .Net/Node SSR" dateInitial="2020/01" dateFinal="2021/05" description="Empresa peruana que cuenta con una división de productos digitales, para la que se trabajó en su Producto Pago Efectivo" backends={ [ "C#.Net Core", "NodeJS", "Python" ] } frontends={ [ "Angular", "React" ] } databases={ [ "Sql Server", "AWS DynamoDB", "MongoDB" ] } clouds={ [ "AWS Cloudwatch", "AWS S3", "AWS Labda", "AWS Cloudformation" ] } others={ [ "Scrum", "Git", "Docker" ] } />

      <Experience company="Métrica Andina" companyWeb="https://www.metricaandina.com/" job="Desarrollador .Net SSR" dateInitial="2018/01" dateFinal="2019/12" description="Empresa peruana de desarrollo de software, para la que trabajé en un proyecto para un cliente: Pago Efectivo del Grupo Digital del Comercio" backends={ [ "C#.Net Core" ] } frontends={ [ "Angular" ] } databases={ [ "Sql Server", "AWS DynamoDB" ] } clouds={ [ "AWS Cloudwatch", "AWS S3", "AWS Labda", "AWS Cloudformation" ] } others={ [ "Scrum", "Git", "Docker" ] } />
    </div> 
  );
};
