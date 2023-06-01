calc = document.getElementById("calcula");
kg = document.getElementById("kg");
m = document.getElementById("m");
imc = document.getElementById("imc");
lectura = document.getElementById("lectura");

calc.onclick = function () {
  if (kg.value != "" && m.value != "") {
    imcx = kg.value / (m.value * m.value);
    imc.innerHTML = imcx;
    console.log(imcx);

    if (imcx < 18.5) {
      lectura.innerHTML =
        "Su Peso Es inferior al normal Consulte a su nutricionista";
    } else if (imcx >= 18.5 && imcx <= 24.9) {
      lectura.innerHTML = "Peso Normal";
    } else if (imcx >= 25 && imcx <= 29.9) {
      lectura.innerHTML =
        "Peso Superior, regula tu alimentación";
    } else if (imcx >= 30 && imcx <= 39.9) {
      lectura.innerHTML = "Obesidad Consulte a su nutricionista";
    } else if (imcx > 40) {
      lectura.innerHTML = "Extrema Obesidad Consulte a su nutricionista";
    }
  } else {
    alert("Debe ingresar sus datos");
  }
};