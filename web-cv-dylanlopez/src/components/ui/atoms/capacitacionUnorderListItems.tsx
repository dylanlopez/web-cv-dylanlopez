export const CapacitacionUnorderListItem = (props: any) => {
  const { institution, course, hours, date } = props;

  return (
    <li>{ institution }: { course } ({ hours } Horas)({ date })</li>
  )
}
