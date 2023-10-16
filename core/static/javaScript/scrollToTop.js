function scrolToTopHome() {
    if (window.location.pathname === '/') {

        document.getElementById('home-link').addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {

        document.getElementById('home-link').href = '/';
    }
}

function scrolToTopHomeLink() {
    if (window.location.pathname === '/') {
        document.getElementById('top-link').addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {

        document.getElementById('top-link').href = '/';
    }
}

function scrollToTopStations() {
    if (window.location.pathname === '/stations/') {
        document.getElementById('stations-link').addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        document.getElementById('stations-link').href = '/stations/';
    }
}

function scrollToTopMap() {
    if (window.location.pathname === '/map/') {
        document.getElementById('map-link').addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        document.getElementById('map-link').href = '/map/';
    }
}

function scrollToTopContact() {
    if (window.location.pathname === '/contact/') {
        document.getElementById('contact-link').addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    } else {
        document.getElementById('contact-link').href = '/contact/';
    }
}

scrolToTopHome();
scrolToTopHomeLink();
scrollToTopStations();
scrollToTopMap();
scrollToTopContact();

