
let form = document.getElementById('form');
let lettersWidth = document.getElementById("letterwidth");
let lettersHeight = document.getElementById("letterheight");
let lettersDensity = document.getElementById("letterdensity");
let cost = document.getElementById("cost");
let squaremeters = document.getElementById("squaremeters");
let squaremetersValue = 0;
let options = document.getElementById('type');
let costN = 1620000;
let lettersValues = document.querySelectorAll('input[type="number"]');
let lettersLength = document.getElementById("letterslength");
let whatsappButton = document.getElementById("whatsappBtn");
let typeofmaterial = "Base ACM c/ letras de Acrilico";

whatsappButton.addEventListener("click", redirect);


lettersValues.forEach((element) => {
  element.onchange = (()=>{
    if(element.id == "letterslength"){
      element.value = element.value;
    }else{
      element.value = element.value/100;//converted from cm to m
    }
  });
})


function formatNumber(n) {
  r = n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return r;
}

//todo:refactor this code 
options.onchange = function(){
  console.log(options.selectedIndex)
  if (options.selectedIndex == 0) {
    //acrilicomacm
    typeofmaterial = "Base ACM c/ letras de Acrilico";
    costN = 1620000;
    console.log(options.selectedIndex)
    console.log(costN);
  } else if (options.selectedIndex == 1) {

    //acrilico
    typeofmaterial = "Acrilico";
    costN = 1320000;
  }else if (options.selectedIndex == 2) {
    //pvc
    costN = 810000;
    typeofmaterial = "Pvc";
  }else if (options.selectedIndex == 3) {
    //inox
    typeofmaterial = "Inox";
    costN = 860000;
  }
  if (options.selectedIndex == 4) {
    //polifan
    costN = 490000;
    typeofmaterial = "Polifan";

  }
};

function squaremetersCalc(height, width, density,){
  let r =height * width + density * width;
  return r
}

var total = 0;
var sqmeterstotal = 0;

form.addEventListener('submit',function (e){
  e.preventDefault();
  e.stopPropagation();

  total = squaremetersCalc(lettersHeight.value,lettersWidth.value,lettersDensity.value) * costN;
  sqmeterstotal = parseInt(total)/costN.toFixed(1);
  squaremeters.value = sqmeterstotal;

  if(lettersLength.value== ""){
    value = parseInt(total);
  }else{
    value = parseInt(total) * lettersLength.value;
  }
  valueConverted = value.toString();
  cost.value = formatNumber(valueConverted);
  
});



function redirect(){
  let totalprice = cost.value;
  let whatsappMessage = `https://api.whatsapp.com/send?phone=595983530756&text=Hola%20estoy%20solicitando%20un%20presupuesto%20con%20la%20herramineta%20mipresupuestodigital%20del%20siguiente%20pedido%3A%20${typeofmaterial}%2C%20${sqmeterstotal}%20m2%2C%20${totalprice}%20Gs.`;



  window.location.replace(whatsappMessage);
}
