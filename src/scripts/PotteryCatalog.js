export const potteryForsale = []

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked === false)
        if (pottery.weight >= 6) {
            pottery.price = 40
        } else {
            pottery.price = 20
        }
    if (pottery.cracked === true)
        { pottery.price = 2.50 }
    potteryForsale.push(pottery)
    return pottery
}
export const usePottery = () => {
    return structuredClone(pottery)
}