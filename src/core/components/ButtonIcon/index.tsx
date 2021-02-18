import React from 'react'
import './styles.css'

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (

    <button className="btn-text">
        <h5>{text}</h5>
    </button>

);

export default ButtonIcon;