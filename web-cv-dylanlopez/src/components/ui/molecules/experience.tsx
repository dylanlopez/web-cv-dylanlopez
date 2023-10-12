interface ExperienceProps {
  company: string;
  companyWeb: string;
  job: string;
  dateInitial: string;
  dateFinal: string;
  description: string;
  backends?: string[];
  frontends?: string[];
  databases?: string[];
  clouds?: string[];
  others?: string[];
}

export const Experience = (props: ExperienceProps) => {
  const { company, companyWeb, job, dateInitial, dateFinal, description, backends, frontends, databases, clouds, others } = props;

  return (
    <div className="columns spacing">
      <div className="column is-3">
        <p className="empresa"><a href={ companyWeb } target="_blank">{ company }</a></p>
        <p className="cargo">{ job }</p>
        <p className="fechas">{ dateInitial } - { dateFinal }</p>
      </div>
      <div className="column is-7">
        <p className="giro">{ description }</p>
        <p className="empresa">Tenologías Utilizadas</p>
        <ul className="unlist">
          { backends?.length > 0 && <li>{ backends?.join(', ') }</li> }
          { frontends?.length > 0 && <li>{ frontends?.join(', ') }</li> }
          { databases?.length > 0 && <li>{ databases?.join(', ') }</li> }
          { clouds?.length > 0 && <li>{ clouds?.join(', ') }</li> }
          { others?.length > 0 && <li>{ others?.join(', ') }</li> }
        </ul>
      </div>
    </div>
  )
}
