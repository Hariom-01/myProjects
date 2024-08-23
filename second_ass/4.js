let n1 = 12;
let n2 = 21;
function func(n1, n2) {
  let output;
  output = (parseInt(n1 / 10) * parseInt(n2 / 10)) + ((n1 % 10) * (n2 % 10));
  console.log(output);
}
func(n1, n2)