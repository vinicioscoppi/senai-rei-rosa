import styled from 'styled-components';

export const Container = styled.button`
  border:solid 2px #e2e6ed;
  height:120px;
  width:170px;
  margin: 15px 20px;
  align-items: center;
  color:#ecf1f8;
  background:#ecf1f8;
  background-position: center;
  transition: background 0.3s;

  :hover {
    border:solid 2px #ecf1f8;
    background:#c3ccff radial-gradient(circle, transparent 1%, #c3ccff 1%) center/15000%;
    transition: background 0.8s;
    cursor: pointer;
  }

  :active {
    border:solid 2px #ecf1f8;
    background-color: #ecf1f8;
    background-size: 100%;
    transition: background 0s;
  }
`;
