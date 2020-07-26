import styled from 'styled-components';

export const Container = styled.button`
  background: #ecf1f8;
  border-radius: 3px;
  border:solid 2px #7159c1;
  color: #7159c1;
  padding: 10px;
  background-position: center;
  transition: background 0.8s;

  :hover {
    background: #d7b6ff radial-gradient(circle, transparent 1%, #d7b6ff 1%) center/15000%;
    cursor: pointer;
  }

  :active {
    background-color: #ecf1f8;
    background-size: 100%;
    transition: background 0s;
  }
`;
