import * as React from 'react';
import { Link } from 'react-router-dom';


interface ButtonProps {
    to ? : string;
    primary ? : boolean;
    onClick ? () : void;
}

const Button : React.FC<ButtonProps> = (props) => {
    const { to, children, primary, onClick } = props;
    const isLink = !!to;

    const renderButton = () => {
        return (
            <button
                style={}
            >
            </button>
        )
    }

    const renderLink = () => {
        if (!to) {
            return <div></div>
        }

        return (
            <Link
            >

            </Link>
        )
    }
}

const buttonStyle = (primary: boolean) => {
    return {

    }
}

export default Button;
