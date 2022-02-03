const normalTxt = "Hello, how are you?";
function reverseString(text) {
  let reverse = "";
  for (const char of text) {
    reverse = char + reverse;
  }
  return reverse;
}
const reversed = reverseString(normalTxt);
console.log(reversed);
