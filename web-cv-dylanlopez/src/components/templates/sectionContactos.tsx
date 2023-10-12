import { TitlesH1 } from '../ui/atoms/titleH1';
import { Contacts } from '../ui/molecules/contacts';
import './sectionContactos.css'

export const SectionContactos = () => {
  return (
    <section id="contactos" className="section animate__animated animate__bounceInRight">
      <TitlesH1 text="Contactos" />
        <ol className="list">
          <Contacts nombres="Jean Lizano" email="jean.lizano@orbis.com.pe" cargo="Desarrollador .Net SSR" celular="944 330 108" />
          <Contacts nombres="Saul Cachay" email="saul.cachay@midis.gob.pe" cargo="Ministerio de Desarrollo e Inclusión Social" celular="994 649 341" />
          <Contacts nombres="Iván Tapia" email="diurvan1@gmail.com" cargo="Chain Services Technology Information Corp" celular="997 078 999" />
        </ol>
    </section>
  )
}
