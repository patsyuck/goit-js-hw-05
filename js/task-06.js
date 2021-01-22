function Storage(items) {
  this.items = items
}

Storage.prototype.getItems = function() {
  return this.items
}

Storage.prototype.addItem = function(newItem) {
  this.items.push(newItem)
}

Storage.prototype.removeItem = function(item) {
  i = this.items.indexOf(item)
  this.items.splice(i, 1)
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
