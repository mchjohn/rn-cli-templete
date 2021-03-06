import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button } from 'react-native';

import Logo from '../../assets/img/example-svg.svg';
import { useAppContext } from '../../context/App';
import { useSwitchTheme } from '../../context/SwitchTheme';

import * as S from './styles';

export function Home() {
  const { navigate } = useNavigation();

  const { currentTheme } = useAppContext();
  const { toggleTheme } = useSwitchTheme();

  const [isEnabled, setIsEnabled] = useState(currentTheme === 'dark');

  async function onPressToChangeTheme() {
    setIsEnabled(!isEnabled);
    await toggleTheme();
  }

  return (
    <S.Container>
      <S.Header>
        <Logo width={62} height={62} />
        <Button title='Mudar tema' onPress={onPressToChangeTheme} />
      </S.Header>

      <S.Title>Template de aplicação{'\n'}com React Native CLI</S.Title>
      <Button title='Navegar para About' onPress={() => navigate('About')} />
    </S.Container>
  );
}