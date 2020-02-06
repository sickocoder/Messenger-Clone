import styled from 'styled-components/native';

export const Container = styled.View`
  padding-vertical: 8px;
  padding-horizontal: 16px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border-color: rgba(0, 0, 0, 0.1);
  border-top-width: 1px;
`;

export const BottomNavigationItem = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
