interface EducationProps {
  institution: string;
  study: string;
  from: string;
  until: string;
}

export const Education = (props: EducationProps) => {
  const { institution, study, from, until } = props;

  return (
    <div className="columns spacing">
      <div className="column is-5">
        <p className="empresa">{ institution }</p>
        <p className="fechas">{ from } - { until }</p>
      </div>
      <div className="divider2"></div>
      <div className="column is-5">
        <ul className="unlist2">
          <li> { study }</li>
        </ul>
      </div>
    </div>
  )
}
