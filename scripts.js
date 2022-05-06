
let form = document.getElementById('form');
let lettersWidth = document.getElementById("letterwidth");
let lettersHeight = document.getElementById("letterheight");
let lettersDensity = document.getElementById("letterdensity");
let cost = document.getElementById("cost");
let squaremeters = document.getElementById("squaremeters");
let options = document.getElementById('type');
let costN = 1620000;
let lettersValues = document.querySelectorAll('input[type="number"]');

lettersValues.forEach((element) => {
  element.onchange = (()=>{
    element.value = element.value/100;//converted from cm to m
  });
})

//todo:fix it to replace correctly the commas
function formatNumber(n) {
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

//todo:refactor this code 
options.onchange = function(){
  console.log(options.selectedIndex)
  if (options.selectedIndex == 0) {
    //acrilicomacm
    costN = 1620000;
    console.log(options.selectedIndex)
    console.log(costN);
  } else if (options.selectedIndex == 1) {
    //acrilico
    costN = 13200000;
  }else if (options.selectedIndex == 2) {
    //pvc
    costN = 810000;
  }else if (options.selectedIndex == 3) {
    //inox
    costN = 860000;
  }
  if (options.selectedIndex == 4) {
    //polifan
    costN = 490000;
  }
};



form.addEventListener('submit',function (e){
  e.preventDefault();
  e.stopPropagation();

  //todo:refactor the code
  let squaremeterstotal = lettersHeight.value * lettersWidth.value + lettersDensity.value * lettersWidth.value;
  let total = squaremeterstotal * costN;
  squaremeters.value = parseInt(squaremeterstotal);
  value = parseInt(total);
  stringed = String(value);
  //todo: fix the format of the string
  valueConverted = stringed;
  cost.value = formatNumber(valueConverted);
});

