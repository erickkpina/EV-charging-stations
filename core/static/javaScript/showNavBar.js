function showNavBar() {
    document.getElementById('open-menu-button').addEventListener('click', function () {
        var menu = document.getElementById('navbar-default');
        menu.classList.toggle('hidden');
    });
}

showNavBar();
