//---------------------------quotations -------

var data = [];
var authors, tab;

$.get('dane/quotationsData.txt', function(data) {
  tab = JSON.parse(data);
  addAuthorsToArray();
});

function addAuthorsToArray() {
  var lengthArrayAuthors = tab.authors.length;
  for (var i = 0; i < lengthArrayAuthors; i++) {
    var obj = {};
    obj.name = tab.authors[i].name;
    obj.quotes = tab.authors[i].quotes;
    data.push(obj);
  }
}

var quotation = $('#quotation');
var author = $('#author');
$('#newQuotes').click(function(){
  console.log('test');
  var random = Math.floor(Math.random()*data.length);
  quotation.text(data[random].quotes);
  author.text(data[random].name);
});