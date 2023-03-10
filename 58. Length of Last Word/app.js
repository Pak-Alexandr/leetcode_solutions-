/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    return s.split(' ').filter((word) => word !== '').at(-1).length
};

lengthOfLastWord("Hello World")
lengthOfLastWord("   fly me   to   the moon  ")
lengthOfLastWord("luffy is still joyboy")