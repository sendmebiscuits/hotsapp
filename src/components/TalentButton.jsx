import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

class TalentButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: this.props.description,
    }
  }

  render(){

    return(
      <button
        id={this.props.id}
        onClick={(e)=>{
          e.preventDefault();
          this.props.select(this.props.id);
        }}
        onMouseOver={(e)=>{
          e.preventDefault();
          console.log(this.state.description);
          this.props.showTooltip(this.state.description);
        }}
        style={{
          borderColor: (this.props.isSelected ? 'yellow' : 'black'),
          borderWidth: '5px'
        }}
        data-tip data-for='TalentBtn'
      >
        <img src={this.props.icon}/>
        {
        this.props.isMouseOver ?
          <ReactTooltip id='TalentBtn'>
            <span>{this.state.description}</span>
          </ReactTooltip>
          : null
      } 
      </button>
    )
  }
}

export default TalentButton;