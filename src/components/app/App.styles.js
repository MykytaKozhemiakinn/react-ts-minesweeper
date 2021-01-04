import styled from "styled-components";

export const AppContainer = styled.div`
  background: #c2c2c2;
  padding: 16px;
  border-width: 4px;
  border-style: solid;
  border-right-color: #999;
  border-bottom-color: #999;
  border-left-color: white;
  border-top-color: white;
`;

export const AppHeader = styled.div`
  background: #c0c0c0;
  padding: 10px 12px;
  border-width: 4px;
  border-style: solid;
  border-right-color: white;
  border-bottom-color: white;
  border-left-color: #7b7b7b;
  border-top-color: #7b7b7b;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AppBody = styled.div`
  margin-top: 16px;
  border-width: 4px;
  border-style: solid;
  border-right-color: white;
  border-bottom-color: white;
  border-left-color: #7b7b7b;
  border-top-color: #7b7b7b;
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  grid-template-columns: repeat(9, 1fr);
`;

export const SmileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  font-size: 32px;
  border-width: 4px;
  border-style: solid;
  border-right-color: #7b7b7b;
  border-bottom-color: #7b7b7b;
  border-left-color: white;
  border-top-color: white;
  cursor: pointer;
  &:active {
    border-right-color: white;
    border-bottom-color: white;
    border-left-color: #7b7b7b;
    border-top-color: #7b7b7b;
  }

`;
