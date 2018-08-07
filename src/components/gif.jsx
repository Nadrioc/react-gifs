import React, {Component} from 'react';

class Gif extends Component {

  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id
  }

  render(){
    const { id } = this.props
    if (!id) {
      return null
    }

    const src = `https://media3.giphy.com/media/${id}/200.gif`
    return (
        <img src={src} className="gif" alt="A gif is here"  onClick={this.handleClick}/>
    )
  }
}

export default Gif;
