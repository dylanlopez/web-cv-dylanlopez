export const ParrafoContacto = (props: any) => {
  const { cabecera, detalle } = props;

  return (
    <p className="contacto"> <span>{ cabecera }: </span>{ detalle }</p>
  )
}
