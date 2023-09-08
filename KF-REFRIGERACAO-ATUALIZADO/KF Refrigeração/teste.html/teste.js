// Adiciona um evento de clique ao item do submenu
document.querySelector('.submenu').addEventListener('click', function () {
    // Seleciona o elemento ul que é o submenu
    var submenu = this.querySelector('ul');
    
    // Verifica se o submenu está visível ou oculto
    if (submenu.style.display === 'none') {
        // Se estiver oculto, torna-o visível
        submenu.style.display = 'block';
    } else {
        // Se estiver visível, torna-o oculto
        submenu.style.display = 'none'; 
    }s
});
