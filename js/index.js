const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const imgCar = new Image()
  imgCar.src = "../images/car.png"
  const imgRoad = new Image()
  imgRoad.src = "../images/road.png"


  function startGame() {
    this.context = this.canvas.getContext("2d");
  }
};
