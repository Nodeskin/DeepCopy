//DEEPCOPY OF OBJECT
const o = {
  a: "a",
  b: "b",
  obj: {
    key: "goal",
  },
};

function deepCopy(obj) {
  const keys = Object.keys(obj);
  const newObject = {};
  //USING A FOR-LOOP
  for (let x = 0; x < keys.length; x++) {
    const key = keys[x];
    if (typeof obj[key] === "object") {
      newObject[key] = deepCopy(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}
const o2 = deepCopy(o);
console.log(o2.obj);


// USING FOR-OF
//   for (let x of keys) {
//     // const key = keys[x];
//     if (typeof obj[x] === "object") {
//       newObject[x] = deepCopy(obj[x]);
//     } else {
//       newObject[x] = obj[x];
//     }
//   }
//   return newObject;
// }

// const o2 = deepCopy(o);
// console.log(o2.obj);
