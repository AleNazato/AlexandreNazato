function enviar(){
    let primeironome = document.getElementById("primeironome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let empresa = document.getElementById("empresa").value;
    let email = document.getElementById("email").value;
    let codigo = document.getElementById("codigo").value;
    let number = document.getElementById("number").value;
    let opcoes = document.getElementById("opcoes").value;
    let selecionado = document.querySelector('input[name="chkIniciante"]:checked').value;
    var blob = new Blob(["Nome Completo: "+ primeironome +" "+ sobrenome +
    "\nEmpresa: "+ empresa +
    "\nE-mail: "+ email +
    "\nDDD: "+ codigo +
    "\nTelefone: "+ number +
    "\nSexo: " + opcoes +
    "\nInciante? " + selecionado],
     { type: "text/plain;charset=utf-8" });
    saveAs (blob, primeironome + sobrenome + ".txt");
    alert("Formulario eviado com sucesso !")
}