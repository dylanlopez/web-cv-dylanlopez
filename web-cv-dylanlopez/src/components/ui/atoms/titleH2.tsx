import { useState } from 'react';

export const TitlesH2 = (props) => {
  const [ text ] = useState(props.text);

  return (
    <h2>{ text }</h2>
  )
}