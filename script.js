function Timer(elem) {
  this.timerElem = elem;
  this.passedTime = 0;
  this.intervalId = null;
  this.reset();
}

Timer.prototype = {

  start: function() {
    if (this.intervalId !== null) {
      return;
    }


    var self = this;
    this.intervalId = setInterval(function() {
      self.passedTime++;
      self.render();
    }, 1000);
  },
  stop: function() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  },
  reset: function() {
    this.stop();
    this.passedTime = 0;
    this.render();
  },


  render: function() {
    var minutes = Math.floor(this.passedTime / 60);
    var seconds = this.passedTime % 60;
    this.timerElem.textContent = this.zeroFill(minutes) + ':' + this.zeroFill(seconds);
  },
  
  zeroFill: function(num) {
    return ('0' + num).slice(-2);
  }
};

var timer = new Timer(document.getElementById('timer'));
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

startButton.addEventListener('click', function() { timer.start(); });
stopButton.addEventListener('click', function() { timer.stop(); });
resetButton.addEventListener('click', function() { timer.reset(); });

