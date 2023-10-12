import { Tooltip } from "react-tooltip";

interface AbilityProps {
  title: string;
  technologies: string[];
  durations: number[];
}

export const Ability = (props: AbilityProps) => {
  const { title, technologies, durations } = props;
  const titleToClass = (title: string) => {
    switch (title) {
      case "BackEnd":
        return "progress is-info";
      case "FrontEnd":
        return "progress is-success";
      case "Databases":
        return "progress is-danger";
      case "Cloud":
        return "progress is-warning";
      case "Others":
        return "progress";
      default:
        return "progress";
    }
  };

  return (
    <div className={(title === "BackEnd" || title === "FrontEnd") ? "column is-3" : "column is-2"}>
      <h2>{title}</h2>
      {technologies.map((technology, index) => (
        <p id={"my-technology-" + title} className={"my-technology-" + title + "-" + index} key={index}>
          {technology} ({(durations[index] / 12) < 1 ? "< 1 " : (Math.floor((durations[index] / 12) + 0.5))} año(s))
          <Tooltip place="bottom" anchorSelect={".my-technology-" + title + "-" + index}>{durations[index]} meses</Tooltip>
          <progress className={titleToClass(title)} value={Math.floor((durations[index] / 12) + 0.9)} max="8">{technology} {(durations[index] / 12)} años</progress>
        </p>
      ))}
    </div>
  )
}
