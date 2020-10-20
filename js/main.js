document.addEventListener("DOMContentLoaded", () => {
    botones();
    container = document.querySelector('.main-container');

    function botones() {
        btncab = document.querySelectorAll('.showDetailCab');
        btncab.forEach(btnUno => {
            btnUno.addEventListener('click', function (e) {
                e.preventDefault;
                call('cabaña.html');
        });
        });

        btnChalet = document.querySelectorAll('.showDetailChalet');
        btnChalet.forEach(btnUno => {
            btnUno.addEventListener('click', function (e) {
                e.preventDefault;
                call('chalet.html');
        });
        });
        btnDepto = document.querySelectorAll('.showDetailDepto');
        btnDepto.forEach(btnUno => {
            btnUno.addEventListener('click', function (e) {
                e.preventDefault;
                call('depto.html');
        });
        });

    }

    async function call(destino) {
        let response = await fetch(destino, {
            method: 'GET'
        });
        let html = await response.text();
        container.innerHTML += html;
        btnCerrar = document.querySelector('.btn-cerrar');
        btnCerrar.addEventListener('click', function (e) {
            removeModal();
        });


    }

function removeModal() {
    let containermodal = document.querySelector(".modal-overlay");
    let padre = containermodal.parentNode;
    padre.removeChild(containermodal);
    botones();
}
});