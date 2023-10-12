import { useState } from 'react';

export const TitlesH1 = (props) => {
  const [ text ] = useState(props.text);

  return (
    <h1>{ text }</h1>
  )
}
