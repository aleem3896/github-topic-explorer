import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #0366d6;
  border: none;
  border-radius: 3%;
  color: #f6f8fa;
  padding: 16px 33px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  margin: 4px 2px 16px 0px; 
  
`

export const Button = ({title, onClick}) => {
    return <StyledButton onClick={onClick}>{title}</StyledButton>
}