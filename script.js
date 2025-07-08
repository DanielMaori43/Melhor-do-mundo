let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides() {
  slideIndex = (slideIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showSlides, 4000); // troca a cada 4 segundos

function adicionarAoCarrinho() {
  const precoUnitario = 229.90;
  const qtd = parseInt(document.getElementById("quantidade").value);
  const total = (qtd * precoUnitario).toFixed(2).replace('.', ',');
  document.getElementById("total").textContent = total;
}

function toggleCarrinho() {
  const carrinho = document.getElementById("carrinho-container");
  carrinho.style.display = carrinho.style.display === "none" ? "block" : "none";
}
function adicionarAoCarrinho() {
  const precoUnitario = 59.90;
  const qtd = parseInt(document.getElementById("quantidade").value);
  const total = (qtd * precoUnitario).toFixed(2).replace('.', ',');
  document.getElementById("total").textContent = total;
}

function toggleCarrinho() {
  const carrinho = document.getElementById("carrinho-container");
  carrinho.style.display = carrinho.style.display === "none" ? "block" : "none";
}
