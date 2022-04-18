import React from "react";

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <ul className="user-menu">
          <li>Mensajes</li>
          <li>Notificaciones </li>
          <li>Listas de favoritos <span className="menu-notifications">99</span></li>
          <li>Cuenta</li>
          <LogoutButton onClick={this.handleLogoutClick} />
        </ul>;
    } else {
      button = <ul className="user-menu">
      <li>Régistrate</li>
      <LoginButton onClick={this.handleLoginClick} />
        </ul>;
    }

    return (
      <div>
        <Log isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserImg(props) {
  return <img src="https://img.icons8.com/plasticine/100/000000/user.png"/>;
}

function GuestImg(props) {
  return <img src="https://img.icons8.com/ios-glyphs/100/000000/user--v1.png"/>;
}

function Log(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserImg />;
  }
  return <GuestImg />;
}

function LoginButton(props) {
  return (
    <li onClick={props.onClick}>Iniciar sesion</li>
  );
}

function LogoutButton(props) {
  return (
    <li onClick={props.onClick}>Cerrar sesion</li>
  );
}

export default UserMenu;