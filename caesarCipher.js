export default function caesarCipher(word) {
  const array = word.split("");
  const newArray = [];
  array.forEach((letter) => {
    const code = letter.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      let newCode = code + 3;
      if ((newCode > 90 && newCode < 97) || newCode > 122) newCode -= 26;

      newArray.push(newCode);
    } else {
      newArray.push(code);
    }
  });

  return String.fromCharCode(...newArray);
}
