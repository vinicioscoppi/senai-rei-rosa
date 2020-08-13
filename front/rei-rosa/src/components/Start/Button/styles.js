import styled from 'styled-components';

export const Container = styled.button`
  background: #7159c1;
  border-radius: 3px;
  border:solid 0px;
  color: #fdd835;
  padding: 20px 100px;
  background-position: center;
  transition: background 0.8s;

  :hover {
    background:#a386f4 radial-gradient(circle, transparent 1%, #a386f4 1%) center/15000%;
    cursor: pointer;
  }

  :active {
    background-color: #ecf1f8;
    background-size: 100%;
    transition: background 0s;
  }
`;
