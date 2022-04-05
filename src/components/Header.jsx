import React from "react";
import styled from 'styled-components';
import userImg from '../assets/logos/icon-user.png'
import '../styles/Header.module.css'

export const Header = () => {
  return (
    <Nav>
      <Logo>BS</Logo>
      <Forms>
        <Firstform>
          <input type="text" placeholder="Medellín, Colombia" />
          <input type="text" placeholder="Agregar fechas" />
          <input type="text" placeholder="¿Cuántos?" />
          <button type="submit">🔍</button>
        </Firstform>
        <Secondform>
          <select>
            <option value disabled selected>Precio</option>
            <option value>$20-50</option>
            <option value>$51-100</option>
            <option value>$101-200</option>
          </select>
          <select>
            <option value disabled selected>Tipo de alojamiento</option>
            <option value>Casa del árbol</option>
            <option value>Alojamiento aislado</option>
            <option value>Casa subterránea</option>
            <option value>Contenedor</option>
            <option value>Casa domo</option>
            <option value>Casa rodante</option>
            <option value>Mansion</option>
            <option value>Casa alpina</option>
            <option value>Granja</option>
            <option value>Casa flotante</option>
          </select>
          <select>
            <option value disabled selected>Calificación</option>
            <option value>⭐⭐⭐⭐⭐</option>
            <option value>⭐⭐⭐⭐</option>
            <option value>⭐⭐⭐</option>
            <option value>⭐⭐</option>
            <option value>⭐</option>
          </select>
        </Secondform>
      </Forms>
      <UserProfile>
        <a className="become-host" href="#">Hazte anfitrión</a>
        <img className="user-img" src={userImg} alt="Profile" />
        <span className="notifications">?</span>
        <ul className="user-menu">
          <li>Mensajes</li>
          <li>Notificaciones </li>
          <li>Listas de favoritos <span className="menu-notifications">99</span></li>
          <li>Cuenta</li>
        </ul>
      </UserProfile>
    </Nav>
  );
};

const Nav = styled.header`
  width: 100%;
  height: 222px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
const Logo = styled.div`
  height: 80px;
  width: 80px;
  margin-top: 30px;
  border-radius: 50%;
  background: #1572A1;
  padding: 25px 0;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`
const Forms = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Firstform = styled.form`
  height: 60px;
  padding-top: 18px;
  border-radius: 25px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, .25);

  & button{
  background-color: #1572A1;
  border-radius: 50%;
  border: 0;
  }

  & :nth-child(-n+2){
  border-right: 3px solid #1572A1;
  }
  & input {
  border: 0;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  }
`
const Secondform = styled.form`
  display: flex;
  justify-content: space-between;

  & select{
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #fff;
    border: 1px solid #1572A1;
    border-radius: 25px;
    color: #1572A1;
    text-align: center;
  }
`

const UserProfile = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & a{
    color: #1572A1;
    padding-right: 8px;
  }

  & img{
    height: 60px;
    width: 60px;
    background-color: #7e7f80;
    border-radius: 50%;
  }
  & > span{
    position: absolute;
    top: -4px;
    right: 0px;
  }

  & ul{
    display: none;
    position: absolute;
    top: 41px;
    right: -71px;
  }

  &:hover ul{
    display:block;
  }
  
  & ul li{
    list-style: none;
    padding-top: 20px;
    padding-bottom: 20px;

    &:not(:last-child){
      border-bottom: 1px solid #9B9B9B;
    }
  
    & span{
      min-width: 19px;
      min-height: 19px;
      background-color: #3e96c2;
      border-radius: 50%;
      text-align: center;
      color: #fff;
    }
  }
`
export default Header;
