/* let originalContent;

function enlarge(foodId) {
  let frame = document.getElementById(foodId);
  let bigFrame = document.querySelector('.big-frame');
  let clonedFrame = frame.cloneNode(true);

  originalContent = bigFrame.innerHTML;
  bigFrame.innerHTML = '';
  bigFrame.appendChild(clonedFrame);

  clonedFrame.classList.add('enlarged');
  clonedFrame.querySelector('.limited-info').classList.add('hidden');
  clonedFrame.querySelector('.full-info').classList.remove('hidden');

  document.getElementById('searchBar').classList.add('hidden');
  document.getElementById('backButton').classList.remove('hidden');
}

function goBack() {
  let bigFrame = document.querySelector('.big-frame');
  bigFrame.innerHTML = originalContent;

  document.getElementById('searchBar').classList.remove('hidden');
  document.getElementById('backButton').classList.add('hidden');

  let frames = document.querySelectorAll('.small-frame');
  frames.forEach(function (frame) {
    frame.onclick = function() {
      enlarge(frame.id);
    };
  });
}

document.getElementById('searchBar').addEventListener('input', function (event) {
  let query = event.target.value.toLowerCase();
  let frames = document.querySelectorAll('.small-frame');
  frames.forEach(function (frame) {
    let foodInfo = frame.querySelector('.limited-info').innerText;
    if (foodInfo.toLowerCase().includes(query)) {
      frame.style.display = 'flex';
    } else {
      frame.style.display = 'none';
    }
  });
});

let frames = document.querySelectorAll('.small-frame');
frames.forEach(function (frame) {
  frame.onclick = function() {
    enlarge(frame.id);
  };
});
 */

/* start--Project.html中search bar的 */
document.getElementById('searchBar').addEventListener('input', function (event) {
  let query = event.target.value.toLowerCase();
  let frames = document.querySelectorAll('.small-frame');
  frames.forEach(function (frame) {
    let foodInfo = frame.querySelector('.limited-info').innerText;
    if (foodInfo.toLowerCase().includes(query)) {
      frame.style.display = 'flex';
    } else {
      frame.style.display = 'none';
    }
  });
});
/* end--Project.html中search bar的 */
