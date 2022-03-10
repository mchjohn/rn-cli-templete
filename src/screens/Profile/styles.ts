import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.quicksand_medium};
  font-size: ${({ theme }) => theme.fontsize.font_twenty}px;
`;

export const Code = styled.Text`
  margin-top: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.quicksand_regular};
  font-size: ${({ theme }) => theme.fontsize.font_eighteen}px;
`;
