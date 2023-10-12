import { TitlesH2 } from './../atoms/titleH2';
import { TitlesH1 } from './../atoms/titleH1';

interface TitlesProps {
  titlesType: string;
  titleH1: string;
  titleH2: string;
}

export const Titles = (props: TitlesProps) => {
  const { titlesType, titleH1, titleH2 } = props;

  return (
    <>
    {
      titlesType == '01' ? 
        (<div><TitlesH1 text={ titleH1 }/><TitlesH2 text={ titleH2 }/></div>) : 
        (<div><TitlesH2 text={ titleH2 }/><TitlesH1 text={ titleH1 }/></div>)
    }
    </>
  )
}
