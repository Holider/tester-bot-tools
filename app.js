(function () {
  var filters = document.getElementById('filters');
  var search = document.getElementById('search');
  var empty = document.getElementById('empty');
  var tools = document.querySelectorAll('.tool');
  var buttons = document.querySelectorAll('.filter');
  var selected = 'all';
  if (!filters || !search || !tools.length) return;
  filters.style.display = 'flex';
  function update() {
    var query = search.value.toLowerCase();
    var visible = 0;
    for (var i = 0; i < tools.length; i++) {
      var show = (selected === 'all' || tools[i].getAttribute('data-platform') === selected) && tools[i].getAttribute('data-search').indexOf(query) !== -1;
      tools[i].style.display = show ? '' : 'none';
      if (show) visible++;
    }
    empty.style.display = visible ? 'none' : 'block';
  }
  for (var i = 0; i < buttons.length; i++) buttons[i].onclick = function () {
    selected = this.getAttribute('data-platform');
    for (var j = 0; j < buttons.length; j++) buttons[j].className = 'filter';
    this.className = 'filter active';
    update();
  };
  search.oninput = update;
  search.onkeyup = update;
}());
