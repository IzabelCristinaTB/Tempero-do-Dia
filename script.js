const button = document.getElementById('button');

button.addEventListener('click', (event)=> {

    event.preventDefault();

    const usuario = document.getElementById('usuario');
    const senha = document.getElementById('senha');
    const nome = document.getElementById('nome');

    if(usuario.value === ''){
        usuario.classList.add("errorInput");
        alert('Preencha o campo usuario corretamente!')
    }
    if(senha.value === ''){
        senha.classList.add("errorInput");
        alert('Preencha o campo senha corretamente!')
    }
    if(nome.value === ''){
        nome.classList.add("errorInput");
        alert('Preencha o campo nome corretamente!')
    }
})