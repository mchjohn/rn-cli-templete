import styled from "styled-components/native";
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 16px;
  padding-top: ${StatusBar.currentHeight ? StatusBar.currentHeight + 16 : 32}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin-vertical: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.quicksand_bold};
  font-size: ${({ theme }) => theme.fontsize.font_twenty_four}px;
`;
