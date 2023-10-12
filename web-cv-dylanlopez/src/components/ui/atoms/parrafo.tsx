interface ParrafoProps {
  text: string;
}

export const Parrafo = (props: ParrafoProps) => {
  const { text } = props;

  return (
    <p>{ text }</p>
  )
}
