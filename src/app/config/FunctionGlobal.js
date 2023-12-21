export function convertByteToMB(size){
    return size / Math.pow(1024,2)
}

export function longToDate(datelong){
    var tempdate = new Date(datelong);
    var month = (tempdate.getMonth() + 1);
    if(month < 10){
        month = "0"+month
    }
    var date = tempdate.getDate()
    if(date < 10){
        date = "0"+date;
    }
    return tempdate.getFullYear() + "-" + month + "-" + date
}

export function corsEnabled (url) {
    var xhr = new XMLHttpRequest()
    // use sync to avoid popup blocker
    xhr.open('HEAD', url, false)
    // xhr.withCredentials = true;
    try {
        xhr.send()
    } catch (e) {}
    return xhr.status
}
