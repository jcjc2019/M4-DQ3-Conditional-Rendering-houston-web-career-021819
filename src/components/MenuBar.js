import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  return (
    <div className="ui four item menu">
      <a className={props.profile} id="profile" onClick={()=>{props.changeMenu("profile")}}>

        <i className="user large icon" id="profile"/>
      </a>

      <a className={props.photo}  id="photo"  onClick={()=>{props.changeMenu("photo")}}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={props.cocktail}  id="cocktail"  onClick={()=>{props.changeMenu("cocktail")}}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={props.pokemon} id="pokemon"  onClick={()=>{props.changeMenu("pokemon")}}> 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
