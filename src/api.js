const url = 'https://api.coincap.io/v2'

function getAssets() {
    return fetch(`${url}/assets?limit=20`) /// permite hace fetch al api solicitada pasando la url y el moetod, con el limite de 20
        .then(res => res.json()) //manejo de promesas que tiene la respuesta de res y la parsea a formato json
        .then(res => res.data) // otra promensa se ejecutal al terminar el primer then manda el objeto data que es el de la respuesta del api

}

function getAsset(coin) {
    return fetch(`${url}/assets/${coin}`) /// permite hace fetch al api solicitada pasando la url y el moetod, con el limite de 20
        .then(res => res.json()) //manejo de promesas que tiene la respuesta de res y la parsea a formato json
        .then(res => res.data) // otra promensa se ejecutal al terminar el primer then manda el objeto data que es el de la respuesta del api

}


function getAssetHistory(coin) {

    const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()

    return fetch(`${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
        .then(res => res.json())
        .then(res => res.data)
}



function getMarkets(coin) {
    //console.log(`${url}/assets/${coin}/markets?limit=5`)
    return fetch(`${url}/assets/${coin}/markets?limit=5`).then(res => res.json()).then(res => res.data)
}

function getExchange(id) {
    return fetch(`${url}/exchanges/${id}`).then(res => res.json()).then(res => res.data)
}

export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange
}