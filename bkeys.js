print=console.log.bind(console);
print("bkeys.js");
callback=print;
function StrCode(e){
    return String.fromCharCode(e.keyCode).toLowerCase();
}
function onkeydown(e){
    var kc=e.keyCode;
    var ret;
    switch(kc){
    case 9:
	callback( e.shiftKey?"<backtab>":"<tab>" );
	return false;
    case 8:
	callback( e.altKey||e,metaKey?"M-DEL":"DEL" );
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
	switch(kc){
	case 13: ret = "RET"; break;
	case 32: ret = "SPC"; break;
	default: ret = StrCode(e);
	}
	if (e.altKey||e.metaKey)  ret = "M-" + ret;
	if (e.ctrlKey) ret = "C-" + ret;
	callback(ret);
	return false;
    }
}
function onkeypress(e){
    var kc=e.keyCode;
    var s=StrCode(e);
    //if(kc==69){callback("111111");return false}
    //if(kc==102){callback("FFFFFF");return false}
    //if(kc==112){callback("PPPPPP");return false}
    if(kc==13)callback("RET");
    if(kc==32)callback("SPC");
    callback(s);
}
function onkeyup(e){}
