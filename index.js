console.log("hello This is Array Manipulation");
document.createAttribute("p");

let foo = false;
function clickButton() {
  // const btn = document.createElement("button");
  const btn = document.getElementById("test1");
  // create element child create new html element
  if (foo === true) {
    btn.innerHTML = "New Button";
  } else {
    btn.innerHTML = "Old Button";
  }
  document.body.appendChild(btn);
  foo = !foo;
}

const kapa = document.createElement("p");
kapa.innerHTML = "inner text";
document.body.appendChild(kapa);

const texting = document.createElement("p");
const arr0 = [
  "txt1",
  "txt2",
  "txt3",
  "txt4",
  "txt5",
  "txt6",
  "txt7",
  "txt8",
  "txt9",
];

const arr1 = [
  { id: 1, val: "Value 1" },
  { id: 2, val: "Value 2" },
  { id: 3, val: "Value 3" },
  { id: 4, val: "Value 4" },
  { id: 5, val: "Value 5" },
  { id: 6, val: "Value 6" },
  { id: 7, val: "Value 7" },
];
const arr2 = [
  { id: 8, val: "Value 8" },
  { id: 9, val: "Value 9" },
  { id: 10, val: "Value 10" },
  { id: 14, val: "Value 14" },
  { id: 5, val: "Value 5" },
  { id: 6, val: "Value 6" },
  { id: 7, val: "Value 7" },
];

let txt = "";
arr1.forEach(myFunction);
// texting.innerHTML = "lalalla";
// document.body.appendChild(texting);
// document.texting.innerHTML = txt;
// document.createElement("p").innerHTML = txt;
document.getElementById("texting").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value.val + "<br>";
  console.log("texting inside", value, array);
}

const combinedArr = [...arr1, ...arr2];
const mapArrAsArr = [...new Map(combinedArr.map((x) => [x.id, x]))];
const mapArrAsObjKeyVal = new Map(combinedArr.map((x) => [x.id, x.val]));
const mapArrAsObjVal = new Map(combinedArr.map((x) => [x.id, x.val])).values();

const newMethodUnique = new Map([...arr1, ...arr2]); // Gagal

// const newMap = new Map([...combinedArr]);

// mapArrAsArr.has("8");
// console.log("Combined New Map", newMap);
// console.log("mapArrAsArr Map HAS", mapArrAsArr.has("id"));
// console.log("Combined Arr", combinedArr);
// console.log("Arr as Arr", mapArrAsArr);
console.log("Arr as Obj", mapArrAsObjKeyVal);
console.log("Arr as Obj has", mapArrAsObjKeyVal.has(3));
// console.log("Arr as Obj idx val", mapArrAsObjKeyVal.values());
// console.log("Arr as Obj idx 2", mapArrAsObjKeyVal.get(2));
// console.log("mapArrAsObjVal", mapArrAsObjVal);
// console.log("newMethodUnique", newMethodUnique);

// mapArrAsArr.map((x) => {
//   console.log(x);
// });

// for (const iterator of mapArrAsObjKeyVal) {
//   console.log(iterator);
// }
// for (const key of mapArrAsObjKeyVal) {
// const element = mmapArrAsObjKeyVal[i];
// console.log("i :", key);
// console.log("i :", mapArrAsObjKeyVal[key]);
// }

const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  // console.log(item);
}
console.log("map1 ", map1);
console.log("map1 ", map1.has("0"));

// console.log("full", map1.values());
// console.log(map1.keys());
// console.log(map1.values());

const original = new Map([[1, "one"]]);

const clone = new Map(original);

// console.log(clone.get(1)); // one
// console.log(original === clone);
// console.log(clone);
