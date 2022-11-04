import React from "react";
import {NavLink, withRouter} from 'react-router-dom';
import {Nav,Header1,H2} from '../../styles/header';

const Header = () =>{
    return(
        <Nav>
            <Header1>
                <div>
                    <NavLink exact to='/home'><h2>RASBet</h2></NavLink>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink exact to='/login'><H2>Login</H2></NavLink>
                    <NavLink exact to='/register'><H2>Registo</H2></NavLink>
                    <NavLink exact to='/profile'><H2>Perfil</H2></NavLink>
                </div>
            </Header1>
        </Nav>
    ) 
}

export default Header;