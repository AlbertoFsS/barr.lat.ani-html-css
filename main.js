//sidebar toggle
const btnToggle = document.querySelector('.toggle-btn');//almacenamos  lo que encontramos en la constante

btnToggle.addEventListener('click',function(){//el click quedara alamacenado en la funcion, con el evento de escuchar click.
    document.getElementById('sidebar').classList.toggle('active');
});//el documento selecciona un elemento por id, con el metodo le agregamos o quitamos la clase.
