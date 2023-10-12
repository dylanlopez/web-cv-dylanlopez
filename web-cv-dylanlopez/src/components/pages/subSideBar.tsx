import './subsidebar.css'
import imagePath from './../../assets/dylan_lopez.png';
import { Image } from "../ui/atoms/image";
import { SocialMediaLinks } from "../ui/molecules/socialMediaLinks";
import { Titles } from '../ui/molecules/titles';

export function SubSideBar() {
  return (
    <>
      <Image imagePath={ imagePath } />
      <Titles titlesType="01" titleH1="Dylan López" titleH2="Fullstack Developer" />
      <SocialMediaLinks />
    </>
  )
}
