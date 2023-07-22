function App() { }

App.prototype.setState = function(state) {
  localStorage.setItem('alertme', state);
}

App.prototype.getState = function() {
  return localStorage.getItem('alertme');
}

function init() {
  var app = new App();
  var state = app.getState();
  var checkbox = document.querySelector('#alertme');
  
  if (state == 'true') {
    checkbox.checked = true;
  }
  
  checkbox.addEventListener('click', function() {
      app.setState(checkbox.checked);
  });
}

init();