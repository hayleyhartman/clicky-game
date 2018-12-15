import React, { Component } from 'react';
import Nav from "./components/Nav"
import Photos from "./components/Photos"
import Footer from "./components/Footer"
import shuffler from "./shuffler.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import start from './start';

const images = 
[
    {
    "id":1,
    "image":"s1.jpg",
    "clicked":0
  },{
    "id":2,
    "image":"s2.jpg",
    "clicked":0
  },{
    "id": 3,
    "image":"s3.jpg",
    "clicked":0
  },{
    "id":4,
    "image":"s4.jpg",
    "clicked":0
  },{
    "id": 5,
    "image":"s5.jpg",
    "clicked": 0
  },{
    "id": 6,
    "image":"s6.jpg",
    "clicked": 0
  },{
    "id": 7,
    "image":"s7.jpg",
    "clicked": 0
  },{
    "id": 8,
    "image":"s8.jpg",
    "clicked": 0
  },{
    "id": 9,
    "image":"s9.jpg",
    "clicked": 0
  },{
    "id": 10,
    "image":"s10.jpg",
    "clicked": 0
  },{
    "id": 11,
    "image":"s11.jpg",
    "clicked": 0
  },{
    "id": 12,
    "image":"s12.jpg",
    "clicked": 0
  }
]
start()

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    correct: ""
  };

  handleClick = event => {
    let originalImages = images.slice(0)
    shuffler(originalImages)
    let arrayCopy = originalImages.slice(0)
    this.setState({images: arrayCopy})
    console.log("id " + event.target.id)
    const index = event.target.id -= 1

      if (originalImages[index].clicked) {
        this.setState({correct: "you already got that one!"})
        this.restartGame()    
      } else {
      this.handleIncrement()
      this.setState({correct: "good choice!"})
      originalImages[index].clicked = 1
    }
  }

  restartGame = () => {
    shuffler(images)
    this.setState({ score: 0 })
  }

  handleIncrement = () => {
    if (this.state.score >= this.state.topScore) {
      this.setState({score: this.state.score + 1 });
      this.setState({topScore: this.state.score + 1})
    } else {this.setState({score: this.state.score + 1 })}
  };


  render () {
    return (
      <div className = "wrapper">
        <Nav 
        score={this.state.score}
        topScore={this.state.topScore}
        correct={this.state.correct}>
        
        </Nav>
        <div className="container">
        <div className="photoDiv">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              {this.state.images.map(obj => (
                <Photos

                key={obj.image}
                src={obj.image}
                id={obj.id}

                handleClick={this.handleClick}                
                > </Photos>
                ))}
                </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        </div>
        <Footer></Footer>

      </div>
  )}
}


export default App;
