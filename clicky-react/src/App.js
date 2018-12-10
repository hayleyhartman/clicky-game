import React, { Component } from 'react';
import Nav from "./components/Nav"
import Photos from "./components/Photos"
import Footer from "./components/Footer"
import shuffler from "./shuffler.js"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


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


shuffler(images)

class App extends Component {
  state = {
    images
  };
  render () {
    return (
      <div className = "wrapper">
        <Nav></Nav>
        <div className="container">
        <div className="photoDiv">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="row">
              {this.state.images.map(obj => (
                <Photos
                id={obj.id}
                key={obj.image}
                url={obj.image}
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
