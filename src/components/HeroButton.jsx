import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';
import TalentCalc from './TalentCalc';
import Modal from 'react-modal';

class HeroButton extends Component {

  constructor(props){
    super(props);

    this.state = {
      hero: this.props.hero,
      showCalc: false
    }

    this.onClick = this.onClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

  }

  toggleMenu(){
    let calcState = !this.state.showCalc;
    this.setState({showCalc : calcState});
  }

  onClick(){
    this.toggleMenu();
  }

  render(){

    return (
      <div>
        <button>
          <img src={this.state.hero.icon_url['92x93']}
            onClick={this.onClick.bind(this, this.state.hero)}/>
        </button>
        <Modal isOpen={this.state.showCalc}
              onRequestClose={this.toggleMenu} 
              ariaHideApp={false}
              style={modal}>
          <TalentCalc hero={this.state.hero}/>
        </Modal>
      </div>
    );
  }

}

var modal = {
  overlay: {
    backgroundColor: (255,255,255,.5)
  },
  content: {
    border: '0',
    bottom: 'auto',
    minHeight: '45rem',
    left: '50%',
    padding: '2rem',
    position: 'absolute',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '40rem',
    width: '40%',
    maxWidth: '40rem',
    margin: '0'
  }
}

export default HeroButton;