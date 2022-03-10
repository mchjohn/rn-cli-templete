import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/img/example-svg.svg';

import * as S from './styles';

export function About() {
  const { navigate } = useNavigation();

  return (
    <S.Container>
      <S.Header>
        <Logo width={62} height={62} />
      </S.Header>

      <S.Title>Parabéns a navegação aconteceu</S.Title>
      <Button title='Navegar para Home' onPress={() => navigate('Home')} />
    </S.Container>
  );
}