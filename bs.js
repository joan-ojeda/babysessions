

/* jojeda 2013
 * Canviar totes les ocurrències d'una cadena per una altre
 */
 
function replaceAll(text,busca,reemplaza){
  while (text.toString().indexOf(busca) != -1)
      text = text.toString().replace(busca,reemplaza);
	return text;
}

/* jojeda 2013
 * Neteja les etiquetes extres que afegeix el servidor
 */
function cleanExtraTags(text){
	text=text.replace("<ul>","");
	text=text.replace("</ul>","");
	text=text.replace("<p>","");
	text=text.replace("</p>","");
	text=replaceAll(text,"http://","");
	return text;
}

/* jojeda 2013
 * Donar contingut a un iframe, és a dir carregar la url que ha de mostrar
 */
function loadIframe(iframeName, url) {
    if ( window.frames[iframeName] ) {
        //window.frames[iframeName].location = "http://www.uoc.edu";   
		window.frames[iframeName].location = url;   
        return false;
    }
    return true;
}

/* Copyright (c) 2006 Mathias Bank (http://www.mathias-bank.de)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Thanks to Hinnerk Ruemenapf - http://hinnerk.ruemenapf.de/ for bug reporting and fixing.
 */
jQuery.extend({
/**
* Returns get parameters.
*
* If the desired param does not exist, null will be returned
*
* @example value = $.getURLParam("paramName");
*/ 
 getURLParam: function(strParamName){
	  var strReturn = "";
	  var strHref = window.location.href;
	  var bFound=false;
	  
	  var cmpstring = strParamName + "=";
	  var cmplen = cmpstring.length;

	  if ( strHref.indexOf("?") > -1 ){
	    var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	    var aQueryString = strQueryString.split("&");
	    for ( var iParam = 0; iParam < aQueryString.length; iParam++ ){
	      if (aQueryString[iParam].substr(0,cmplen)==cmpstring){
	        var aParam = aQueryString[iParam].split("=");
	        strReturn = aParam[1];
	        bFound=true;
	        break;
	      }
	      
	    }
	  }
	  if (bFound==false) return null;
	  return strReturn;
	}
});