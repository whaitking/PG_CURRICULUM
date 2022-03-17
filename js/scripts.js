// Scripts
// 

// BOTON PARIDAD
function pari() {
    var x = document.getElementById("num1").value;
    var contador = 0;
    var q = 1;
    var e = 0;

    if (x == null || x == '' || x == "") {
        alert("Tienes que escribir algo. Porfavor Escriba un numero BINARIO");
    } else {

        for (let i = 0; i < x.length; i++) {
            if (x[i] != 1 && x[i] != 0) {
                console.log("INTRODUZCA UN BINARIO");
                alert("Porfavor Escriba un numero BINARIO");
                a = true;
                break
            }
            if (x[i] == 1) {
                contador++;
            }
        }
        if (contador == 0) {

        } else if (contador % 2 == 0) {

            document.getElementById("parire").innerHTML = x + e;

        } else {

            document.getElementById("parire").innerHTML = x + q;

        }
    }
};
//BOTON COMPLEMENTO
function comple() {
    var x = document.getElementById("num1").value;
    let numberComple = "";

    if (x == null || x == '' || x == "") {
        alert("Tienes que escribir algo. Porfavor Escriba un numero BINARIO");
    } else {
        for (let i = 0; i < x.length; i++) {
            if (x[i] != 1 && x[i] != 0) {
                console.log("INTRODUZCA UN BINARIO");
                alert("Porfavor Escriba un numero BINARIO");
                a = true;
                break
            } else if (x[i] == 1) {
                numberComple += "0";
            } else if (x[i] == 0) {
                numberComple += "1";
            }

        }

        console.log(numberComple);
        document.getElementById("compleee").innerHTML = numberComple;
    }
}

function and() {
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    let numberComple = "";

    if (x == null || x == '' || x == "") {
        alert("Tienes que escribir algo. Porfavor Escriba un Numero BINARIO 1");
    } else if (y == null || y == '' || y == "") {
        alert("Tienes que escribir algo. Porfavor Escriba un Numero BINARIO 2");
    } else {
        if (x.length > y.length) {
            var c = x.length - y.length;
            for (let i = 0; i < c; i++) {
                y = 0 + y;
            }
        } else if (y.length > x.length) {
            var c = y.length - x.length;
            for (let i = 0; i < c; i++) {
                x = 0 + x;
            }
        }
        console.log(y);
        console.log(x);

        for (let i = 0; i < x.length; i++) {
            if (x[i] != 1 && x[i] != 0) {
                console.log("INTRODUZCA UN BINARIO");
                alert("Porfavor Escriba un numero BINARIO Imput 1");
                a = true;
                break
            } else if (y[i] != 1 && y[i] != 0) {
                console.log("INTRODUZCA UN BINARIO");
                alert("Porfavor Escriba un numero BINARIO Imput 2");
                a = true;
                break
            } else if (x[i] == 1 && y[i] == 1) {
                numberComple += "1";
            } else {
                numberComple += "0";
            }
        }
        document.getElementById("compleee").innerHTML = numberComple;
    }
}

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


});