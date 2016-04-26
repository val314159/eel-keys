print=console.log.bind(console);
print("bkeys.js");
callback=function(x){
    var li=document.createElement("li");
    li.innerHTML=x;
    document.body.appendChild(li);}
function StrCode(e){ return String.fromCharCode(e.keyCode).toLowerCase(); }
function onkeydown(e){
    var kc=e.keyCode;
    switch(kc){
    case 9:
	callback( e.shiftKey?"S-TAB":"TAB" );
	return false;
    case 8:
	callback( e.altKey||e.metaKey?"M-DEL":"DEL" );
	return false;
    case 27:
	callback("ESC");
	return false;
    case 16: // shift
    case 17: // ctrl
    case 18: // meta
    case 91: // osleft
    case 93: // osright
	return;
    }
    if(e.ctrlKey||e.altKey||e.metaKey){
	var ret;
	switch(kc){
	case 13: ret = "RET"; break;
	case 32: ret = "SPC"; break;
	default: ret = StrCode(e);}
	if (e.altKey||e.metaKey)  ret = "M-" + ret;
	if (e.ctrlKey) ret = "C-" + ret;
	callback(ret);
	return false;
    }
}
function onkeypress(e){
    var kc=e.keyCode;
    var s=StrCode(e);
    switch(kc){
    case 13:callback("RET");break;
    case 32:callback("SPC");break;
    default:callback(s);}
}
function onkeyup(e){}
