function calcularMedia() {
  
  var div = document.getElementById("resp");

  
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let text;
  

let media= (nota1+nota2+nota3) / 3;

if (media >= 6) {
  text =  `Aprovado, sua media é ${media}`; 
} else {
  text = `Reprovado, sua media é ${media}`;
}

div.innerHTML=text;

}
