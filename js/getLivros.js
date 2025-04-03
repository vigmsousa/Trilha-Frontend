fetch("../js/books.json")
  .then((response) => response.json())
  .then((data) => {
    const bookList = document.getElementById("cardBook");
    const booksCards = document.querySelector(".booksCards");

    const switchModal = () => {
      const modal = document.querySelector(".modal");
      const actualStyle = modal.style.display;
      if (actualStyle == "block") {
        modal.style.display = "none";
      } else {
        modal.style.display = "block";
      }
    };

    const btn = document.querySelector(".modalBtn");
    btn.addEventListener("click", switchModal);

    window.onclick = function (event) {
      const modal = document.querySelector(".modal");
      if (event.target == modal) {
        switchModal();
      }
    };

    bookList.innerHTML =
      booksCards.innerHTML +
      data
        .map(
          (book) =>
            `
      <div class="cardBook">  
        <p>${book.nome}</p>
        <p>${book.responsavel}</p>
        <p>${book.contato}</p>
        <img src="${book.img}"/>
      </div>

      <div class="modal">
        <div class="content">
          <h1 class="title">Olá, eu sou um modal!</h1>
          <p class="text">Você pode me fechar clicando fora desta área.</p>
        </div>
      </div>
      
      <button class="modalBtn">Alternar modal</button>
      `
        )
        .join("");
  })
  .catch((error) => console.error("Erro ao carregar JSON:", error));
