var _lang = "es";
/**
 * cambio lenguaje
 */
function setLanguage(){
	var stag = document.createElement("script");
  stag.type = 'text/javascript';
  stag.src = "lang/"+_lang+"_.js";
  document.querySelector("head").appendChild(stag); 
 	stag.onload = function (){
    afterLoad();
    if (_lang == "en") {
      var i = location.href;
      var j = i.replace(/#/g, "");
      if (i == j ) {
        var idiom = j + "#";
        sessionStorage.setItem("leng", idiom);    
      }else{
        var igual = j + "#";
        sessionStorage.setItem("leng", igual);
        
      }  
    }else{
      var idiom1 = location.href;
      var k = idiom1.replace(/#/g, "");
      sessionStorage.setItem("leng", k);
    }
  }
}

function afterLoad(){
	var lan = window[_lang+"_"];
	for (var key in lan) {
		var ar = document.getElementsByClassName(key);
		for (var i = 0; i < ar.length; i++) {
			ar[i].innerHTML=lan[key];
		}
	}
}


function alt_lang(){
	var i = document.getElementById("lang_ico");
	if(_lang == "en"){
		_lang = "es";
    i.innerHTML="EN";
	} else {
		_lang = "en";
    i.innerHTML="ES";
    
  }
	setLanguage();
}


/**
 * verificacion lenguaje
 */
function verLanguage() {
    var home = sessionStorage.getItem("leng");
    var ini = sessionStorage.getItem("prin");
    var home1 = home + "#";
    if (home == home) {
      var j = home1.replace(/#/g, "");
      if (home == j ) {
        sessionStorage.setItem("leng", home);    
      }else{
        var igual = j + "#";
        sessionStorage.setItem("leng", igual);
        
      }  
    }
    var inicio = "http://www.saviasoft.com/#";
    var otro = "http://www.saviasoft.com/index.html#";
    var inicio1 = "http://saviasoft.com/#"; // PARA COMPU PROFE
    var otro1 = "http://saviasoft.com/index.html#"; // PARA COMPU PROFE
    //var inicio = "http://www.saviasoft.com/tmp/nv/#"; // PARA MI COMPU
    //var otro = "http://www.saviasoft.com/tmp/nv/index.html#"; // PARA MI COMPU
    
    var j = document.getElementById("lang_ico");
    
    if (ini == ini) {
      if (home == inicio || home == otro || home == igual || home == home1 || home == inicio1 || home == otro1) {
        _lang = "en";
        j.innerHTML="ES"
        setLanguage();
      }else if(ini == home){
        setLanguage();    
      }else{
        setLanguage();
      }
    }
  }