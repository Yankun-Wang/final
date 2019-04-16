
//Typewriter Effect  -- 15 pts
var hobby = ['Basketball', 'Videogames','Drawing'];
var  i = 0;
var typecount = 0
var selectedText = '';
var text = '';

//Immediately calling an anonymus function with a specific parameter.
function typewirter() {
  if (typecount == hobby.length) {
    typecount = 0;
  }
  selectedText = hobby[typecount];
  text = selectedText.slice(0, ++i);
  document.getElementById('typing').innerHTML = text;

  if (text.length === selectedText.length) {
    typecount++;
    i = 0;
  }

  setTimeout(typewirter, 200); //speed
}

//run the function when page is loaded
window.onload = typewirter();



//////////////////////////////////////

//Carousel  -- 15 pts


