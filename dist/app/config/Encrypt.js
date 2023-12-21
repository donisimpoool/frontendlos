export var passcode = 'LOS@123!SYSTEM';
export function EncrypsCode (content) {
    var result = [];
    var passLen = passcode.length ;
    for(var i = 0  ; i < content.length ; i++) {
        var passOffset = i%passLen ;
        var calAscii = (content.charCodeAt(i)+passcode.charCodeAt(passOffset));
        result.push(calAscii);
    }
    return JSON.stringify(result) ;
}

export function DecrypsCode (content) {
    var result = [];
    var str = '';
    var codesArr = JSON.parse(content);
    var passLen = passcode.length ;
    for(var i = 0  ; i < codesArr.length ; i++) {
        var passOffset = i%passLen ;
        var calAscii = (codesArr[i]-passcode.charCodeAt(passOffset));
        result.push(calAscii) ;
    }

    for(var i = 0 ; i < result.length ; i++) {
        var ch = String.fromCharCode(result[i]);
        str += ch ;
    }
    return str ;
}