export const generateRandomElement = (arr) => {
    if (arr.length > 0) {
        const length = arr.length
        const randomIndex = Math.floor(Math.random() * length)
        return arr[randomIndex]
    } return ""
}

export const fullLegalName = ({
      firstArr = [],
      middleArr = [],
      lastArr1 = [],
      lastArr2 = []
    }) => {
    const first = generateRandomElement(firstArr)
    const middle = generateRandomElement(middleArr)
    const last1 =  generateRandomElement(lastArr1)
    const last2 =  generateRandomElement(lastArr2)

    if (last2 !== "") {
        return `${first} ${middle} ${last1}-${last2}`.replaceAll("  ", " ")
    } else {
        return `${first} ${middle} ${last1}`.replaceAll("  ", " ")
    }
}

