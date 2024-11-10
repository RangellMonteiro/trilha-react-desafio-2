import React from 'react'

import { ButtonContainer } from './styles';

function ButtonRemove({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
       Remover
    </ButtonContainer>
  )
}

export default ButtonRemove