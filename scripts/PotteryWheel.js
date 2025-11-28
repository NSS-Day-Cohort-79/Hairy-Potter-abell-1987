let primaryKey = 1

const makePottery = (shape, weight, height) => {
    return {
        shape: shape,
        weight: weight,
        height: height,
        id: primaryKey ++,
    }
}
console.log(makePottery("mug", 5, 10))