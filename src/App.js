import React from 'react';
import  AttentionGraber  from './AttentionGraber.js';
import { styles } from './styles.js';

const divStyle = {
  background: styles.background,
  height:     '100%' 
};

class App extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <AttentionGraber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}

export default App;