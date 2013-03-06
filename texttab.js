var $texteditor = null;
var textStored = null;

var init = function () {
  $texteditor = document.getElementsByTagName('p')[0];
  textStored = localStorage.getItem('chrome-textTab-text');

  $texteditor.addEventListener("input", handleTextChange, false);
  loadText();
};

var handleTextChange = function () {
    var textToSave = $texteditor.innerHTML;
    localStorage.setItem('chrome-textTab-text', textToSave);
};

var loadText = function () {
  var textToDisplay = textStored;
  if (textStored) {
    $texteditor.innerHTML = textToDisplay;
  }
};

var readyStateCheckInterval = setInterval(function() {
  if (document.readyState === "complete") {
    init();
    clearInterval(readyStateCheckInterval);
  }
}, 10);
