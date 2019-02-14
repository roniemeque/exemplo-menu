//funcao que faz o toggle da classe .ativo no item .menu
export const toggleMenu = () => {
  //selecionando o menu
  //as tags criadas na pagina tambem sao chamadas de 'nodes' quanto usadas no javascript
  const menuNode = document.querySelector(".menu");

  //cada vez que essa funcao toggle eh chamada na propriedade classList do node (elemento)
  //ela adiciona a classe se nao houver ou retira se houver
  //eh possivel tambem adicionar com .add() ou remover com .remove()
  //mas na maioria dos casos .toggle() ja vem completinho pro que precisa
  menuNode.classList.toggle("ativo");
};

//funcao que inicializa os elementos, coloca os event listeners e tals -- init eh um padrao legal de usar pra esse tipo de funcao que prepara as coisas
export const initNavbar = () => {
  //esse eh o botaozinho topper
  const menuToggleNode = document.querySelector(".menu-toggle");

  //atrelando a funcao que faz o toggle no menu no botao
  menuToggleNode.addEventListener("click", toggleMenu);
};
