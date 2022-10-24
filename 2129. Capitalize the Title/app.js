/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = function (title) {
    const resolve = title.split(' ').map((word) => {
        if (word.length <= 2) {
            return word.toLowerCase()
        } else {
            return word[0].toUpperCase() + word.slice(1).toLowerCase()
        }
    }).join(' ')
    return resolve
};

console.log(capitalizeTitle("capiTalIze tHe titLe")) //"Capitalize The Title"
console.log(capitalizeTitle("First leTTeR of EACH Word"))//"First Letter of Each Word"
console.log(capitalizeTitle("i lOve leetcode"))//"i Love Leetcode"