import {fullLegalName} from "./util.js";
import {firstNames, lastNames} from "./theNames.js";

export const realFirstLast = () => {
    return fullLegalName({
        firstArr: firstNames,
        lastArr1: lastNames
    })
}

export const realFirstMiddleLast = () => {
    return fullLegalName({
        firstArr: firstNames,
        middleArr: firstNames,
        lastArr1: lastNames
    })
}

export const realFirstMiddleLastHyphenated = () => {
    return fullLegalName({
        firstArr: firstNames,
        middleArr: firstNames,
        lastArr1: lastNames,
        lastArr2: lastNames
    })
}


