import React, {Component} from 'react';
import HeroButton from './HeroButton';

class HeroRoster extends Component {

  constructor(props){
    super(props);
    this.state = {
      showCalc: false,
    };

    this.getHeroesList = this.getHeroesList.bind(this);
    this.fillGallery = this.fillGallery.bind(this);

  }

  componentDidMount(){
    this.getHeroesList();
  }

  /**
   * Fetches the list of heroes in json format.
   * Call .fillGallery() to insert picture links
   * into Gallery.
  */
  getHeroesList(){
    fetch('http://hotsapi.net/api/v1/heroes', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(response => {
      response.json().then(data => ({
        data: data,
      })
      
    ).then(heroes_list => {
      this.setState({roster : heroes_list.data});
      console.log(this.state.roster);
      this.fillGallery();
    });
  });
}

/**
 * Fill image grid with hero buttons from hero objects
 * from API.
 */
  fillGallery(){
    var images = [],
        roster = this.state.roster,
        rosterSize = roster.length;
    for (var i = 0; i < rosterSize; i++){
      var hero = (
        <HeroButton hero={roster[i]}/>
      );
      images.push(hero);
  }
    this.setState({ Gallery : images});
    console.log(this.state.Gallery);
  }

  /**
   * Group heroes based on role
   */
  groupHeroes(){
    
  }

  render(){

    if (!this.state.Gallery){
      return <div>Loading...</div>
    }

    return(
      <div className='heroRoster'>
        {this.state.Gallery.map((image, index) => {
          return image
          }
        )}
      </div>
      );
  }
}

export default HeroRoster;