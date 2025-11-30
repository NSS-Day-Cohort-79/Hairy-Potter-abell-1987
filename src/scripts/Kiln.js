export const firePottery = (item, temp) => {
    item.fired = true
    if (temp > 2200) {
        item.cracked = true
    } else {
        item.cracked = false
    }
    return item
}