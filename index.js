const character = document.getElementById('character');
const block = document.getElementById('block');

//animation  jump function
function jump() {
  character.classList.add('animate'); //runs one time so setting timeout and remove the animation class

  setTimeout(function () {
    character.classList.remove('animate');
  }, 500);
}

const checkLost = setInterval(function () {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );

  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );
}, 10);
