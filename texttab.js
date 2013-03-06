var $texteditor = null;
var textStored = null;

var init = function () {
  $texteditor = document.getElementsByTagName('p')[0];
  textStored = localStorage.getItem('chrome-textTab-text');
  $texteditor.addEventListener("input", handleTextChange, false);
  loadText();
  displayPlaceholder();
};

var handleTextChange = function () {
    var textToSave = $texteditor.innerHTML;
    localStorage.setItem('chrome-textTab-text', textToSave);
    displayPlaceholder();
};

var displayPlaceholder = function () {
  var text = $texteditor.textContent;
  console.log(text);
  if (text && text != null && text != " " && text != "\n" && text != "<br>") {
    console.log("Content found");
    delete($texteditor.dataset.placeholderempty);
  } else {
    console.log("empty");
    $texteditor.dataset.placeholderempty = "true";
  }
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
