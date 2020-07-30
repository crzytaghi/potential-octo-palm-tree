import React from 'react';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import Square from './components/Square';

class App extends React.Component {
  render = () => {
    return (
      <div className="app">
        <Header />
        <Player whichPlayer="X"/>
        <Player whichPlayer="O"/>
        <Board className="board"/>
      </div>
    )
  }
}

export default App;
