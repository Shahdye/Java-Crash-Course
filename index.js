let cash = 50
let price = 40
let difference = cash - price
let isStoreOpen = true

if (cash > price && isStoreOpen){
    console.log(`give receipt`)
}

else (cash < price || isStoreOpen === false){
    console.log('do not give receipt')
}
