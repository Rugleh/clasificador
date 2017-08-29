console.log("hello");

function myFunction() {
  var nombre = document.getElementById("name").value;
  var b = document.getElementById("ganancias").value;
  var c = document.getElementById("tolerancia").value;
  var d = document.getElementById("inversion").value;
  var e = document.getElementById("ganancias_totales").value;


  var ganancias = parseInt(b);
  var tolerancia = parseInt(c);
  var inversion = parseInt(d);
  var ganancias_totales = parseInt(e);

  var total = ganancias + ganancias_totales;

  if ((ganancias * tolerancia) - inversion > 0){
    document.getElementById("title").innerHTML = nombre;
    document.getElementById("text").innerHTML = "<b>Proceso de Negocio</b>";
    document.getElementById("text2").innerHTML = "Ganancias totales de la empresa = $"+ total + " al mes luego de recuperar lo invertido";


  }

  else {
    document.getElementById("title").innerHTML = nombre;
    document.getElementById("text").innerHTML = "<b>Proceso de Soporte</b>";
    document.getElementById("text2").innerHTML = "Ganancias totales de la empresa = $"+ ganancias_totales + " al mes luego de recuperar lo invertido";
  }

  document.getElementById("name").value = "";
  document.getElementById("ganancias").value = "";
  document.getElementById("ganancias_totales").value = "";
  document.getElementById("inversion").value = "";
  document.getElementById("tolerancia").value = "";

}
