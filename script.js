// 1. Efeito na Barra de Navegação (Mudar de transparente para preto no scroll)
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Dados de exemplo para as categorias
const categories = [
    { title: "Populares na StreamFlix", id: "populares" },
    { title: "Séries de Ação e Aventura", id: "acao" },
    { title: "Comédias para Rir à Gargalhada", id: "comedia" },
    { title: "Novos Lançamentos", id: "novos" }
];

// 3. Gerar o catálogo dinamicamente
const catalog = document.getElementById('catalog');

categories.forEach(category => {
    // Contentor principal da linha
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    
    // Título da categoria
    const title = document.createElement('h2');
    title.innerText = category.title;
    rowDiv.appendChild(title);

    // Contentor relativo para os botões e pósteres
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');

    // Contentor dos pósteres (que fará o scroll)
    const rowPosters = document.createElement('div');
    rowPosters.classList.add('row-posters');

    // Botão de deslizar para a Esquerda
    const leftBtn = document.createElement('button');
    leftBtn.classList.add('scroll-btn', 'left');
    leftBtn.innerText = '❮';
    leftBtn.onclick = () => {
        rowPosters.scrollBy({ left: -600, behavior: 'smooth' });
    };

    // Botão de deslizar para a Direita
    const rightBtn = document.createElement('button');
    rightBtn.classList.add('scroll-btn', 'right');
    rightBtn.innerText = '❯';
    rightBtn.onclick = () => {
        rowPosters.scrollBy({ left: 600, behavior: 'smooth' });
    };

    // Gerar 15 pósteres falsos (usando o picsum para imagens aleatórias) para cada categoria
    for(let i = 1; i <= 15; i++) {
        const img = document.createElement('img');
        img.classList.add('poster');
        // Usa um ID diferente para gerar imagens de filmes diferentes
        img.src = `https://picsum.photos/seed/${category.id}${i}/200/300`;
        img.alt = `Capa do filme ${i}`;
        rowPosters.appendChild(img);
    }

    // Adicionar tudo ao DOM
    rowContainer.appendChild(leftBtn);
    rowContainer.appendChild(rowPosters);
    rowContainer.appendChild(rightBtn);
    
    rowDiv.appendChild(rowContainer);
    catalog.appendChild(rowDiv);
});