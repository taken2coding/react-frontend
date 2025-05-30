import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color:black;
`;

export const Button = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const StyledLink = styled.a`
  background-color: yellow;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: orange;
  transition: color 0.2s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &:hover {
    color: #23527c;
    text-decoration: none;
  }
`;




