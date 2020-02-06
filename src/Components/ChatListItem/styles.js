import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
  padding-horizontal: 16px;
`;

export const LeftSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RoundedImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 23px;
  border-color: rgba(0, 0, 0, 0.05);
  border-width: 1px;
`;
