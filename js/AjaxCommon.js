/**
 * AJAX GLOBAL VARIABLES
 */
var READY_STATE_UNINITIALISED   = 0;
var READY_STATE_LOADING         = 1;
var READY_STATE_LOADED          = 2;
var READY_STATE_INTERACTIVE     = 3;
var READY_STATE_COMPLETE        = 4;
var STATUS_OK                   = 200;

/**
 * XMLHttpRequest 객체 생성
 */
function initXMLHttpRequest() {
	var xRequest = null;
	
	if (window.XMLHttpRequest) {
	
		xRequest = new XMLHttpRequest();
	
	} else if (window.ActiveXObject) {
	
		xRequest = new ActiveXObject("Microsoft.XMLHTTP");
	
	}
	return xRequest;
}

/**
 * Send Request 함수
 */
function sendRequest(url, params, HttpMethod, callBack, async, req) {

	
	if (!HttpMethod) {
		HttpMethod = "GET";		
	}	
	var req = initXMLHttpRequest();
	if (req) {
		req.onreadystatechange = callBack;		
		req.open(HttpMethod, url, async);
		req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		req.send(params);
	}
}

/**
 * onreadystatechange 콜백함수
 */
function onAjaxCompleted() {
	var state = this.readyState;
	var status = this.status;
	var data = null;
	if ( state == READY_STATE_COMPLETE && status == STATUS_OK ) {
		data = this.responseText;
	}
	// To-Do after getting Async Response
}

/**
 * xml node 중 <node /> 처럼 childNode가 없는 node 처리
 */
function noChildHandler(xmlDoc, obj) {	
	if ( obj.childNodes[0] == null) {		
		obj.appendChild(xmlDoc.createTextNode(""));		
	}
	return obj;
}

function rgbToHex(R,G,B) {
	return toHex(R)+toHex(G)+toHex(B);
}

function toHex(n) {
 n = parseInt(n,10);
 if (isNaN(n)) return "00";
 n = Math.max(0,Math.min(n,255));
 return "0123456789ABCDEF".charAt((n-n%16)/16)
      + "0123456789ABCDEF".charAt(n%16);
}
