const req = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve, time)
    })
}

req(2000).then(() => console.log("Hello mother fuck"))