//starter function:
//maintains current topscore
//sets score to 0
//shuffles images
//sets "clicked" on all images to 0

// import shuffler from "./shuffler"

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

const start = () => {
   
//there must be a faster way than a for loop right???
   for (let i = 0; i < images.length; i++) {
       images[i].clicked = 0
   }

}

export default start