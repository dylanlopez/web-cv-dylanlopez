import { ParrafoContacto } from "../atoms/parrafoContacto"


export const Contacts = (props: any) => {
  const { nombres, email, cargo, celular } = props;

  return (
    <li>
      {/* <p className="contacto"> <span>Nombres: </span>Jean Lizano</p>
      <p className="contacto"> <span>Email: </span>jean.lizano@orbis.com.pe</p>
      <p className="contacto"> <span>Empresa: </span>El Comercio</p>
      <p className="contacto"> <span>Cargo: </span>Desarrollador .Net SSR</p>
      <p className="contacto"> <span>Teléfono: </span>944 330 108</p> */}

      <ParrafoContacto cabecera="Nombres" detalle={ nombres } />
      <ParrafoContacto cabecera="Empresa" detalle={ email } />
      <ParrafoContacto cabecera="Cargo" detalle={ cargo } />
      <ParrafoContacto cabecera="Teléfono" detalle={ celular } />
    </li>
  )
}
