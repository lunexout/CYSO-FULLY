let geo_language = document.getElementById("geo_language");
let usa_language = document.getElementById("usa_language");

function eng_index_html() {
  window.open("eng_index.html", "_self");
}

function geo_index_html() {
  window.open("index.html", "_self");
}


// scroll event

window.onscroll = function(){
  if(window.pageYOffset > 600){
    document.getElementById('main_navigation').style.backgroundColor = "#202c61";
    console.log(5);
  }
  if(window.pageYOffset == 0){
    document.getElementById('main_navigation').style.backgroundColor = "transparent";
  }
}
//end scroll event
