import React from "react";

//const logoSection="Logo Here";
//const menus=["HOME","ABOUT","CONTACT US","LOGIN"];
//const mainMenu=menus.map((item)=><li>{item}</li>);

class Header extends React.Component{
    constructor(props){
        super(props);
        this.menus=["HOME","ABOUT","CONTACT US","LOGIN"];
    }
    render(){
    return(
        <div className="navbar">
            <img id="logo" src="logo512.png"/>
            <ul>
                {this.menus.map(menu=>(
                <li>{menu}</li>
                ))}
            </ul>
        </div>
    );
}
}
export default Header;