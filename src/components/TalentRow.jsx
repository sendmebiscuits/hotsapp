import React, {Component} from 'react';
import TalentButton from './TalentButton';
import ReactTooltip from 'react-tooltip';

class TalentRow extends Component {

  constructor(props){
    super(props);
    this.state = {
      talents: this.props.talents,
      selectedBtn: null,
      description: null 
    }; 

    this.selectButton = this.selectButton.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  showTooltip(talent){
    this.setState({description : talent});
  }

  selectButton(id){
    console.log(id);
    this.setState({selectedBtn : id});
    
  }

  render(){
    console.log(this.props);
    return (this.props.talents.map((talent, id) => {
      return (
        <TalentButton
          id={id}
          description={talent.description}
          icon={talent.icon_url['64x64']} 
          select={this.selectButton} 
          isSelected={id === this.state.selectedBtn}
          showTooltip={this.showTooltip}
          isMouseOver={talent.description === this.state.description}
        />
        )
      }) 
    )
  }

}

export default TalentRow;