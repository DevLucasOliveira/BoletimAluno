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
        console.log(array);
        let media = (n1 + n2 + n3 + n4) / 4;
        if (media >= 6) {
            document.getElementById('finalResult').innerHTML = '<p style="color:green;">Você está aprovado';
        } else {
            document.getElementById('finalResult').innerHTML = '<p style="color:red;">Você está reprovado';
        }
        document.getElementById('media-final').innerHTML = media;
        document.getElementById('maior-nota').innerHTML = maiorNota;
        document.getElementById('menor-nota').innerHTML = menorNota;
    }

    function funcaoClear() {
        document.getElementById("nota1").value = '';
        document.getElementById("nota2").value = '';
        document.getElementById("nota3").value = '';
        document.getElementById("nota4").value = '';
        document.getElementById('media-final').innerHTML = '';
        document.getElementById('maior-nota').innerHTML = '';
        document.getElementById('menor-nota').innerHTML = '';
        document.getElementById('finalResult').innerHTML = '';
    }

    Object.onkeyup = function() { digitar(inputName) }

    function digitar(inputName) {
        let n = document.getElementById(inputName);

        console.log(n.value);
        if (n.value.length >= 1 && n.value.length < 3) {
            parseFloat(
                n.value = n.value + '.'
            );
        }
        if(n.value.length == 4) {
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