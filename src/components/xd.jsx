import React from 'react';
import ReactTooltip from 'react-tooltip';

const TalentButton = (props) => {
  const {id,icon,select,isSelected,showTooltip,isMouseOver,description} = props;
  return (
    <button 
      id={id}
      onClick={(e) => {
        e.preventDefault();   // ==========> Lambda function
        select(id);
      }}
      onMouseOver={(e) => {
        e.preventDefault();
        console.log(description);
        showTooltip(description)
      }}
      style={{
          borderColor: (isSelected ? 'yellow' : 'black'),
          borderWidth: '5px'
        }}
        data-tip data-for='TalentBtn'
    >
    {
      isMouseOver ? 
        <ReactTooltip id='TalentBtn'>
          <span>{description}</span>
        </ReactTooltip>
        : null
    }

      <img src={icon}/>
    </button>
  )
}

export default TalentButton;