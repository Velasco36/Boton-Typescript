import React from "react";
import styled from "styled-components";

type ButtonProps ={
  content: string;
  onClick: () => void;
  
}

const handleclick = () => {
  console.log("Hola me has presionado")

}
 //css del Boton 
const ButtonElement = styled.button`
  background-color: #008CBA;
  border: none;
  color: white;
  text: center;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  
`;

  //FC = Function Componen   
  const Button: React.FC<ButtonProps> = ({content="presione aqui", onClick}) => {
  

  
  return <
    ButtonElement 
    
    onClick={handleclick}>    
    {content}
    </ButtonElement>;
  
};

export default Button;
