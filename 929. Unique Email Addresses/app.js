/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function (emails) {
    const result = []
    for (let i = 0; i < emails.length; i++) {
        const emailArr = emails[i].split('@')
        const domain = emailArr[1]
        const name = emailArr[0]
        const nameArr = name.split("+")
        result.push(nameArr[0].split('.').join('') + '@' + domain)
    }
    return (Array.from(new Set(result)).length)
};


numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])
numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])