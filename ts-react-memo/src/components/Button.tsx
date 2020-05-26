import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {
    to ? : string;
    primary ? : boolean;
    onClick ? () : void;
}

const ButtonStyle = styled.button<ButtonProps>`
  display: inline-block;
  border: solid 1px #ccc;
  border-color: ${props => props.primary ? "#2e6da4" : "#ccc"};
`;

const Button : React.FC<ButtonProps> = props => {
    const { to, children, primary, onClick } = props;
    const isLink = !!to;

    const renderButton = () => {
        return ( 
            <ButtonStyle primary={true}
                onClick={onClick}
            >{children}
            </ButtonStyle>
        )
    }

    const renderLink = () => {
        if (!to) {
            return <div></div>
        }
    }
}

export default Button;
