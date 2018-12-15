const shuffler = (a) => {
    let currentIndex = a.length
    let temporaryValue = currentIndex
    let randomIndex = temporaryValue;  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = a[currentIndex];
      a[currentIndex] = a[randomIndex];
      a[randomIndex] = temporaryValue;
    }
    return a;
  }

  export default shuffler