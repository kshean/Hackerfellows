var banana = {
  'name': 'banana',
  'price': 100
};
var apple = {
  'name': 'apple',
  'price': 200
};
var orange = {
  'name': 'orange',
  'price': 300
};
var chicken = {
  'name': 'chicken',
  'price': 600
};
var beer = {
  'name': 'beer',
  'price': 3
};
var potato = {
  'name': 'potato',
  'price': 1000
};
var items = [
  banana,
  apple,
  orange,
  chicken,
  beer,
  potato
];
var total = 0;
function getItemandPrice() {
  var addedElement = document.getElementById('item').value;
  var addedPrice = document.getElementById('price').value;
  console.log(addedElement);
  console.log(addedPrice);
  var addedItem = {};
  addedItem.name = addedElement;
  addedItem.price = addedPrice;
  console.log('added ' + addedItem.name + ' ' + addedItem.price);
  items.push(addedItem);
  var target = items.length - 1;
  addElement(target);
}
function addElement(target) {
  var item = {};
  item = items[target];
  var newElement = document.createElement('p');
  newElement.innerHTML = item.name + ' ' + item.price;
  document.getElementById('list').appendChild(newElement);
  total += Number(item.price);
  console.log(item.name);
  console.log(item.price);
  document.getElementById('total').innerHTML = total;
}
function PrintElements() {
  items.forEach(function (item) {
    var newElement = document.createElement('p');
    newElement.innerHTML = item.name + ' ' + item.price;
    document.getElementById('list').appendChild(newElement);
    total += item.price;
    console.log(item.name);
    console.log(item.price);
  });
  // var newElement = document.createElement('div');
  // newElement.innerHTML = '<h1> Total is ' + total + '</h1>';
  //document.body.appendChild(newElement);
  // console.log("Total is " + total);
  document.getElementById('total').innerHTML = total;
}
PrintElements();