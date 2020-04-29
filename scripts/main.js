function funcaoCalc() {
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);
    var n4 = parseFloat(document.getElementById("nota4").value);
    let maiorNota = 0,
        menorNota = 0;
    let array = [n1, n2, n3, n4];
    menorNota = array[0];
    maiorNota = array[0];

    for (let i = 0; i <= array.length; i++) {
        if (array[i] > maiorNota) {
            maiorNota = array[i];
        }
    }
    for (let i = 0; i <= array.length; i++) {
        if (array[i] < menorNota) {
            menorNota = array[i];
        }
    }
    let media = ((n1 + n2 + n3 + n4) / 4).toFixed(2);
    maiorNota = maiorNota.toFixed(2);
    menorNota = menorNota.toFixed(2);

    if (media >= 6) {

        trocarBackground(media);
        document.getElementById('finalResult').innerHTML = '<p style="color:green;">Você está aprovado';
    } else {
        trocarBackground(media);
        document.getElementById('finalResult').innerHTML = '<p style="color:red;">Você está reprovado';
    }
    document.getElementById('media-final').innerHTML = media;
    document.getElementById('maior-nota').innerHTML = maiorNota;
    document.getElementById('menor-nota').innerHTML = menorNota;
}

function funcaoClear() {
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
    document.getElementById('nota3').value = '';
    document.getElementById('nota4').value = '';
    document.getElementById('media-final').innerHTML = '';
    document.getElementById('maior-nota').innerHTML = '';
    document.getElementById('menor-nota').innerHTML = '';
    document.getElementById('finalResult').innerHTML = '';
}

Object.onkeyup = function () {
    digitar(inputName)
}

function digitar(inputName) {

    let n = document.getElementById(inputName);

    if (n.value <= 10) {
        if (n.value.length >= 1 && n.value.length < 3) {
            parseFloat(
                n.value = n.value + '.'
            );
        }

        if (n.value.length == 4) {
            n.setAttribute('readonly', true);
            let icon = document.getElementById(`${inputName}-icon`);
            icon.classList.remove('d-none');
        }


    } else {
        n.setAttribute('readonly', true);
        let icon = document.getElementById(`${inputName}-icon`);
        icon.classList.remove('d-none');
    }
}

function limparInput(inputName) {
    document.getElementById(inputName).value = '';
    let icon = document.getElementById(`${inputName}-icon`);
    icon.classList.add('d-none');
    let n = document.getElementById(inputName);
    n.removeAttribute('readonly');
}

function trocarBackground(media) {
    if (media >= 6) {
        return (
            document.body.style.background = "-webkit-linear-gradient(left, rgb(61, 173, 70), rgb(224, 230, 220)",
            document.body.style.background = "-o-linear-gradient(right, rgb(61, 173, 70), rgb(224, 230, 220)",
            document.body.style.background = "-moz-linear-gradient(right, rgb(61, 173, 70), rgb(224, 230, 220)",
            document.body.style.background = "linear-gradient(to right,rgb(61, 173, 70), rgb(224, 230, 220)",
            document.body.style.backgroundColor = "rgb(61, 173, 70)"
        );
    }
    return (
        document.body.style.background = "-webkit-linear-gradient(left, rgb(173, 61, 61), rgb(224, 230, 220)",
        document.body.style.background = "-o-linear-gradient(right, rgb(173, 61, 61), rgb(224, 230, 220)",
        document.body.style.background = "-moz-linear-gradient(right, rgb(173, 61, 61), rgb(224, 230, 220)",
        document.body.style.background = "linear-gradient(to right,rgb(173, 61, 61), rgb(224, 230, 220)",
        document.body.style.backgroundColor = "rgb(173, 61, 61)"
    );
}

function validateForm() {
    var n1 = document.forms["notasForm"]["nota1"].value;
    var n2 = document.forms["notasForm"]["nota2"].value;
    var n3 = document.forms["notasForm"]["nota3"].value;
    var n4 = document.forms["notasForm"]["nota4"].value;

    if (n1 == "" || n2 == "" || n3 == "" || n4 == "") {
        alert("Preencha todos os campos");
        return false;
    }

    this.funcaoCalc();
}