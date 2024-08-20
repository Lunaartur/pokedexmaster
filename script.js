/*let endereco = "https://www.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SVP/SVP_EN_";
let complemento = ".png";
let numeroCarta = 1; // Inicia o número da carta em 1

document.getElementById('myButton').addEventListener('click', function() {
    let carta = newCard(endereco, numeroCarta, complemento);
    const root = document.documentElement;

    // Define a variável CSS --Card com o novo URL da imagem
    root.style.setProperty('--Card', `url(${carta})`);

    // Incrementa o número da carta
    numeroCarta++;
});

function newCard(endereco, numeroCarta, complemento) {
    let teste = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/00"
    if(numeroCarta >= 10){
        teste = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/0"
    }
    let novoEndereco = teste + numeroCarta+ complemento;
    console.log(novoEndereco)
    return novoEndereco;
}


:root {
    --Card: none; /* Valor inicial vazio */
//}

//card {
   // width: 320px;
  //  height: 446px;
 //   background-color: #211799;
  //  background-size: cover;
 //   background-repeat: no-repeat;
  ///  background-position: center;
 //   border-radius: 15px;
  //  box-shadow: -3px -3px 3px 0;
//}


