import React from "react";
import { Component } from "react";

export class Footer extends Component {
  myname = 'Mike';
  render () {
    return <div><h2>My Footer {this.myname}</h2></div>;
  }
}

export default Footer;