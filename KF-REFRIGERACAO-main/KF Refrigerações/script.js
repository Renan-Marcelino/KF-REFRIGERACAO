

const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
});

function toggleSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';

    // Recolher outras sub-listas quando uma nova é aberta
    var allSubMenus = document.querySelectorAll('.sub-menu');
    for (var i = 0; i < allSubMenus.length; i++) {
        if (allSubMenus[i].id !== subMenuId) {
            allSubMenus[i].style.display = 'none';
        }
    }
}

// Adicionar classe para ativar recolhimento suave da sublista
var menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var sidebar = document.querySelector('.sidebar');
        sidebar.classList.add('active-submenu');
    });
});
const searchContainer = document.querySelector('.search-container');
const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus(); 
    }
});

document.addEventListener('click', (event) => {
    if (!searchContainer.contains(event.target) && event.target !== searchIcon) {
        searchContainer.classList.remove('active');
    }
});

// Função para alternar a visibilidade do submenu
function toggleSubMenu(subMenuId) {
    var subMenu = document.getElementById(subMenuId);
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }
}
function showItem1Content() {
    var item1Content = document.getElementById('item1-content');
    if (item1Content.style.display === 'block') {
        item1Content.style.display = 'none';
    } else {
        item1Content.style.display = 'block';
    }
}
function showItem2Content() {
    var item2Content = document.getElementById('item2-content');
    if (item2Content.style.display === 'block') {
        item2Content.style.display = 'none';
    } else {
        item2Content.style.display = 'block';
    }
}

function showItem3Content() {
    var item3Content = document.getElementById('item3-content');
    if (item3Content.style.display === 'block') {
        item3Content.style.display = 'none';
    } else {
        item3Content.style.display = 'block';
    }
}

function showItem4Content() {
    var item4Content = document.getElementById('item4-content');
    if (item4Content.style.display === 'block') {
        item4Content.style.display = 'none';
    } else {
        item4Content.style.display = 'block';
    }
}
