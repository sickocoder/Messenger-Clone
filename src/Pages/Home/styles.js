import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const PageHeader = styled.View`
  padding: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PageHeaderTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PageTitle = styled.Text`
  font-size: 32px;
  font-weight: 700;
`;

export const RoundedImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;
