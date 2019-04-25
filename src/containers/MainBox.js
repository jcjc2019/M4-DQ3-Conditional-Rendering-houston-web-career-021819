import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    //use className as value for each key
    profile: "item active",
    photo: "item",
    cocktail: "item",
    pokemon: "item"
  }

  //first change everything's id into item
  //take an argument with id, change that id to item active
  changeMenu = id => {
    this.setState({
      profile: "item",
      photo: "item",
      cocktail: "item",
      pokemon: "item"
    })
    this.setState({[id]: "item active"})
  }

  //show different card
  displayCard = () => {
    if(this.state.profile === "item active"){
      return <Profile />
    }else if(this.state.photo === "item active"){
      return <Photos />
    }else if(this.state.cocktail === "item active"){
      return <Cocktails />
    }else if(this.state.pokemon === "item active"){
      return <Pokemon />
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div> {this.displayCard()} </div>;

    return (
      <div>
        <MenuBar 
        profile = {this.state.profile} 
        photo = {this.state.photo}
        cocktail={this.state.cocktail}
        pokemon={this.state.pokemon}
        changeMenu={this.changeMenu}
        />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
