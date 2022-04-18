import React from 'react'
class Favs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const fullHeart = <img src="https://img.icons8.com/ios-filled/50/4a90e2/like--v1.png" alt="fullHeart"/>
    const emptyHeart = <img src="https://img.icons8.com/ios/50/4a90e2/like--v1.png" alt="emptyHeart"/>
    
    return (
      <div className="Favs" onClick={this.handleClick} >
        {this.state.isToggleOn ? fullHeart : emptyHeart}

      </div>
    );
  }
}

export default Favs;