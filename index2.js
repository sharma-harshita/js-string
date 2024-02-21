const str = "students";

const value = str.charAt(0);
const value2 = str.charAt(5);
// const value3 = str.charAt(-1);      //it will not work
const value4 = str.charCodeAt(0);

const value5 = str.at(1);
const value6 = str.at(-3);
const value7 = str[3];
console.log(value, value2, value4, value5, value6, value7);
