EX_1

function removefirst(arr, index){
  if(arr[index+1] === undefined){
    arr.pop();
    return arr;
  }
  arr[index] = arr[index+1];
  return removefirst(arr, index+1);
}
removefirst([6, 78, "n", 0, 1], 0);



EX_2

let obj = { a: '1', b: '2', c: '2', d: '2'};
let newObj = {};
for (let key in obj){
  let val = obj[key];
  if(!newObj[val]){
    newObj[val] = key;
  }
  else{
    newObj[val] = [...newObj[val]];
    newObj[val].push(key);
  }
}
newObj;



EX_3

let arr = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40},
  { book: "Animal Farm", readStatus: true, percent: 20},
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 } ,
  { book: "After Dark", readStatus: true, percent: 70 }
];

let percentArr = [];
arr.forEach(book => book.readStatus ? percentArr.push(book.percent) : null);
percentArr.sort((item1, item2) => item2 - item1);



EX_4

function movechar(arr, index){
  if(index < 0){
    index = arr.length + index;
  }
  if(index === 0){
    return arr;
  }
  arr.push(arr.shift());
  return movechar(arr, index-1);
}
movechar(["a","b","c","d","e","f","g","h"], 3);



EX_5

function treeCreator(arr, tree, index, count) {  
  if (index == arr.length){
    return tree;
  }
  if (arr[index].parent === null){
    tree[arr[index].id] = {};
    count = [arr[index].id];
    return treeCreator(arr, tree, index + 1, count);
  }
  if (tree[arr[index].parent]){
    tree[arr[index].parent][arr[index].id] = {};
    return treeCreator(arr, tree, index + 1, count);
  }
  else{
    tree[count] = treeCreator(arr, tree[count], index, arr[index].parent);
  }
  return tree;
}

let treeNodes = [
  {parent: null, id: 0},
  {parent: 0, id: 1},
  {parent: 0, id: 2},
  {parent: 1, id: 3},
  {parent: 1, id: 4},
  {parent: 2, id: 5},
  {parent: 4, id: 6},
];

treeCreator(treeNodes, {}, 0);



EX_7

function MapCreator() {
  
  this.map = function(clb) {       
    for (let key in this) {
    this[key] = clb(this[key]);
    }
  }
}

let instanceObj = new MapCreator();
instanceObj.a = 1;
instanceObj.b = 2;
instanceObj.c = 3;

//console.log(instanceObj instanceof MapCreator)
instanceObj.map(item => Math.pow(item, 2));
instanceObj
