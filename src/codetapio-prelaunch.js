import React, { Component } from 'react';
import './codetapio-prelaunch.css';
import HeaderMessage from './component/header-message'
import config from './component/config/config';

class CodetapioPrelaunch extends Component {
  render() {
    const message = config["header-message__title"];
    return (
      <div className="codetapio-prelaunch">
        <HeaderMessage message={message}/>
      </div>
    );
  }
}

export default CodetapioPrelaunch;
