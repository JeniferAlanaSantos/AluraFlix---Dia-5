function adicionarSerie() {
  var inclusaoSerie = document.getElementById("serie").value;

  if (inclusaoSerie.endsWith(".jpg")) {
    exibirSeries(inclusaoSerie);
  } else {
    console.error ("Endereço inválido");
    
  }
  document.getElementById("serie").value = "";
}

function exibirSeries(serie) {
  var elemSerieFav = "<img src= " + serie + ">";
  var listaSeries = document.getElementById("listaSeries");
  listaSeries.innerHTML = listaSeries.innerHTML + elemSerieFav;
}