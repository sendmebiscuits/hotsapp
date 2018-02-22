import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

class HeroTable extends Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
      <table>
        <tbody>
          {this.props.Gallery.map((image, row)=> {

            return (
              <tr keys={index}>
                <button>
                  <td><img src={image.icon_url['92x93']}
                        onClick={this.handleClick.bind(this, image)}/>
                  </td>
                </button>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default HeroTable;