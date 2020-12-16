import styled from 'styled-components';

export const Container = styled.button`
  height:120px;
  width:15%;
  margin: 1% 2%;
  align-items: center;
  color:#ecf1f8;
  background-position: center;

  :active {
    border:solid 2px #ecf1f8;
    background-color: #ecf1f8;
    background-size: 100%;
    transition: background 0s;
  }
`;
