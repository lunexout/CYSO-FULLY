let geo_language = document.getElementById("geo_language");
let usa_language = document.getElementById("usa_language");
let k = 0;

function language_change() {
  if (k == 0) {
    geo_language.style.display = "none";
    usa_language.style.display = "block";
    k++;
  } else if (k == 1) {
    usa_language.style.display = "none";
    geo_language.style.display = "block";
    k--;
  }
}

geo_language.addEventListener("click", language_change);
usa_language.addEventListener("click", language_change);

// background javascript
//end

//partners
//end
