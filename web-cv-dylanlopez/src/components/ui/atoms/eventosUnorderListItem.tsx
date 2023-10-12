export const EventosUnorderListItem = (props: any) => {
  const { name, duration } = props;

  return (
    // <li>{ name }({duration} Horas).</li>
    <li>{ name }(<span>{duration} Horas).</span></li>
  )
}
