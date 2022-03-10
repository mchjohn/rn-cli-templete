import React from 'react';

import * as S from './styles';

export function Profile() {
  return (
    <S.Container>
      <S.Title>Tela privada</S.Title>
      <S.Title>Para voltar à tela Home deixe a propriedade name com uma string vazia na constante user em:</S.Title>
      <S.Code>src/routes/index.tsx</S.Code>
      <S.Code>const user = name: {'{'} ' ' {'}'}</S.Code>
    </S.Container>
  );
}