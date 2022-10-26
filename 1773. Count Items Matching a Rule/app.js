/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let response = 0
    for (const [type, color, name] of items) {
        if (ruleKey === 'type' && type === ruleValue) {
            response++
        }
        if (ruleKey === 'color' && color === ruleValue) {
            response++
        }
        if (ruleKey === 'name' && name === ruleValue) {
            response++
        }
    }
    return (response)
};

countMatches([["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], "color", "silver")
countMatches([["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], "type", "phone")