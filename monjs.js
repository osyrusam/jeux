document.addEventListener("DOMContentLoaded", () => {
  

var container = document.getElementsByClassName('box');

for (var i = 0, max = container.length; i < max; i++) {
  container[i].addEventListener('click', displayEventPhase, false);
  // container[i].addEventListener('click', displayEventPhase, true);
}

function displayEventPhase(e){
  var phase = e.eventPhase;

  // if ( 1 === phase) {
  //   phase = 'Capturing';
  //   } else if (2 === phase) {
  //     phase = 'At Target';
  //   } else if (3 === phase) {
  //     phase = 'Bubbling';
  //   };
    // console.log( 'Box: ' + this.id + ' - ' + phase);

    var selectedBox = this.id
    console.log(selectedBox);
    
    var offsets = this.getBoundingClientRect();

    var top = offsets.top;
    var left = offsets.left;
    console.log(top, left);

}


});
