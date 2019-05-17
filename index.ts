// Import stylesheets
import './style.css';

// Typescript Generics, mixing anything
let play_one = "There are";
let play_two = 4567;
let play_three = "";

let appDiv: HTMLElement = document.getElementById('app');

interface License <T, V, U> {
  fst0: T,
  fst1: V,
  fst2: U
}
function license<T, V, U> (arg0: T, arg1: V, arg2: U): License <T, V, U> {  
  let licenses: License <T, V, U> = {
    fst0: arg0,
    fst1: arg1,
    fst2: arg2
  };
    return licenses;
}
let out0=license (play_one, play_two, play_three).fst0;
let out1=license (play_one, play_two, play_three).fst1;
let out2=license (play_one, play_two, play_three).fst2;
appDiv.innerText = `${out0} ${out1} ${out2}`;