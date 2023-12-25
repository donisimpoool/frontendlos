
export function priceFormatter(price) {
    // console.log("price : "+price)
    var val = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return val;
}

export function fetchHandler(param,handleSuccess,handleError) {
    let url = param.url;
    let type = param.type;
    let auth = param.auth;
    let body = param.body;
    let paramSend = param.paramSend?param.paramSend:{};
    let headers = auth == 'login'?{'content-type': 'application/json'}:{'content-type': 'application/json',Authorization:""}
    fetch(url,
    {
        method: type,
        headers: {
            // 'Authorization': auth,
            'content-type': 'application/json'
        },
        // mode:'no-cors',,
        body: JSON.stringify(body)

    })
    .then(response => response.json())
    .then(appList => {
        alert(appList)
    }).catch((error) => {
        console.log(error)
    });
}