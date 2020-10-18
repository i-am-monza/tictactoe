import React, { Component } from 'react';
import './../../assets/css/main.css';
import { Board } from '../Board/Board.jsx';
import { Dashboard } from '../Dashboard/Dashboard.jsx';
import { Header } from '../Header/Header.jsx';
var cors = require('cors')

this.use(cors()) // Use this after the variable declaration

export class Game extends Component{
  
  urlAddress = 'https://localhost:5002';
  
  constructor() {
    super();
    this.state = { isXTurn: false, history: Array(9).fill(null), movesStack: [], redos: { x: 0, o: 0} };
  }

  handleClick = e => {
    // prevent triggered action from component with form from reloading apgefont
    e.preventDefault();
    let historyCopy = this.state.history.slice();
    let stackCopy = this.state.movesStack.slice();
    let redoCopy = this.state.redos;
   
    switch(e.target.id) {
      case "rewind": {        
          if(stackCopy.length !== 0) {
            let lastMove = stackCopy.pop();
            this.updateRedos(redoCopy, historyCopy[lastMove]);
            historyCopy[lastMove] = null;
            this.setHistory(historyCopy, stackCopy);
            this.disableEnable(`${lastMove}`);
          } else {
            let option = window.confirm("Rewind action with no plays will exit to project source, are you sure?");
            
            if(option) {
              window.location.href = "https://i-am-monza.github.io/tictactoe";
            } else {
              alert("Ok, carry on...");
            }
          }

        break;
      }

      default: {
        if(!isNaN(e.target.id)) {
          historyCopy[e.target.id] = this.state.isXTurn ? 'X' : 'O';
          stackCopy.push(e.target.id);
          this.setHistory(historyCopy, stackCopy);
          this.disableEnable(e.target.id);
        } else {
          alert("Ok, something went wrong. Please refresh page.");
        }

        break;
      }
    }
  }

  updateRedos = (redos, player) => {
    if(player === 'O') {
      redos = Object.assign(redos, {o: redos.o + 1});  
    } else {
      redos = Object.assign(redos, {x: redos.x + 1}) 
    }

    this.setState({redos});
  }

  setHistory = ( history, stack )  => {
    this.setState({
        history: history,
        movesStack: stack,
        isXTurn: !this.state.isXTurn
    });
  }

  getHistory = a => {
        return this.state.history[a];
  }

  disableEnable = id => {
    let button = document.getElementById(id);
    button.disabled = !button.disabled;
  }

  checkWinner = history => {
    // keep track of number of plays
    let cap = 0;

    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(history[a] && history[b] && history[c]) {
        cap++;
      }
      // check for a winner
      if(history[a] && history[b] === history[c] && history[c] === history[a]) {
        return history[a]
      }
    }

    if(cap === 8) {
      alert("It seems we got a tie...");
      window.location.reload();
    }
  }

  syncPlays = (player, position) => {
    let requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({ player, position })
    };

    fetch(this.urlAddress.concat('/CoinJar/increase'), requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
  };

  render() {
    let win = this.checkWinner(this.state.history);
    
    if(win) {
      setTimeout(() => {
        alert(`Game over. Winner is ${win}.`);
        window.location.reload();
      }, 100);
    }

    return (
      <main title="tic tac toe" className="app row">
        <section className="header col-12">
          <Header redos={ this.state.redos } />
        </section>
        <section title="playing board" className="board col-8">
          <Board 
            handleClick={ this.handleClick } 
            getHistory={ this.getHistory }
          />
        </section>
        <section title="progress dashboard" className="dashboard col">
          <Dashboard 
            isXTurn={ this.state.isXTurn } 
            moves={ this.state.movesStack } 
            getHistory={ this.getHistory } 
            handleClick={ this.handleClick }
            syncPlays={ this.syncPlays } 
          />
        </section>
      </main>
    );
  }
}