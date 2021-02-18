import React from 'react'
import ButtonIcon from 'core/components/ButtonIcon'
import { NavLink } from 'react-router-dom'
import './styles.css'

const Home = () => (
    <div className="home-container">

        <div className="home-content">

            <h1 className="text-title">Desafio do Capítulo 3,<br /> Bootcamp DevSuperior</h1>

            <p className="text-subtitle"> Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/><br/>

                 Favor observar as instruções passadas no capítulo sobre a <br /> elaboração  deste projeto. <br /><br />
                 Este design foi adaptado a partir de Ant Design System for Figma, de <br />
                 Mateusz Wierzbicki: <span className="email"> antforfigma@gmail.com </span>
            </p>

            <NavLink to="/search" exact>
                    <div className="btn">
                        <ButtonIcon text="Começar" />
                    </div>
                </NavLink>
        </div>
      
           
            

    </div>
);
export default Home;