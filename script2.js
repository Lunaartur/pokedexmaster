const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const imagemURL = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 
const root = document.documentElement;



function sortearNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM totalmente carregado e analisado.");

    // Sorteia um número entre 1 e 500
    let numeroSorteado = sortearNumero(1, 500);

    // Exibe o número sorteado no console
    console.log("O número sorteado é: " + numeroSorteado);

    // Verifica se o número sorteado é 100
    if (numeroSorteado !== 100) {
        console.log("Número sorteado não é 100, chamando checkPokemon.");
        checkPokemon(numeroSorteado);
    } else {
        console.log("Número sorteado é 100, redefinindo para 1 e chamando checkPokemon.");
        numeroSorteado = 1;
        checkPokemon(numeroSorteado);
    }
});



async function checkPokemon(pokemon) {
    console.log("Executando checkPokemon com o ID/nome: " + pokemon);
    

    if(typeof pokemon === 'string' || pokemon instanceof String){
        pokemon = pokemon.toLowerCase();
    }

    const response = await fetch(`${apiUrl}${pokemon}`);
    
    if(response.status == 404){
        alert("Pokemon Não encontrado!!!");
        checkPokemon(1);
    } else {
        console.log("Pokémon encontrado, atualizando dados.");
        const data = await response.json();
        console.log(data);

        const id = data.id;
        const img = document.querySelector('.background .image');
        
        img.src = imagemURL + retornarZeros(id) + id + ".png";
        document.querySelector(".pokemon-name").innerHTML = data.name.toUpperCase();
        document.querySelector(".attacks").innerHTML = "Attack Name: " + data.abilities[0].ability.name.toUpperCase();
        document.querySelector(".pokemon-type").innerHTML = data.types[0].type.name.toUpperCase();
        document.querySelector(".power").innerHTML = "HP: " + data.stats[0].base_stat;
        document.querySelector(".damage").innerHTML = "Power Attack: " + data.stats[1].base_stat;
        document.querySelector(".defense").innerHTML = "Defense: " + data.stats[2].base_stat;

        let cor = corFundo(data.types[0].type.name);
        root.style.setProperty('--cor-fundo-2', cor);
    }
}

searchBtn.addEventListener("click", () => {
    let pokemon =  checkPokemon(searchBox.value);
});

function retornarZeros(id) {
    if(id < 10){
        return "00";
    }else if(id < 100){
        return "0";
    }else{
        return "";
    }
}

//função para retornar a cor de fundo da minha imagem
function corFundo(type) {
    let cor;

    switch(type.toLowerCase()){
        case "fire": 
            cor = "linear-gradient(135deg, #FF4500, #FFA07A)";
            break;
        case "water": 
            cor = "linear-gradient(135deg, #1E90FF, #00BFFF)";
            break;
        case "grass": 
            cor = "linear-gradient(135deg, #32CD32, #228B22)";
            break;
        case "electric": 
            cor = "linear-gradient(135deg, #FFD700, #FFA500)";
            break;
        case "normal": 
            cor = "linear-gradient(135deg, #A9A9A9, #808080)";
            break;
        case "bug": 
            cor = "linear-gradient(135deg, #ADFF2F, #7FFF00)";
            break;
        case "psychic": 
            cor = "linear-gradient(135deg, #FF69B4, #800080)";
            break;
        case "rock": 
            cor = "linear-gradient(135deg, #CD853F, #A52A2A)";
            break;
        case "ground": 
            cor = "linear-gradient(135deg, #F4A460, #DEB887)";
            break;
        case "fighting": 
            cor = "linear-gradient(135deg, #FF6347, #8B0000)";
            break;
        case "poison": 
            cor = "linear-gradient(135deg, #9400D3, #9932CC)";
            break;
        case "ice": 
            cor = "linear-gradient(135deg, #B0E0E6, #ADD8E6)";
            break;
        case "dragon": 
            cor = "linear-gradient(135deg, #0000CD, #00008B)";
            break;
        case "fairy": 
            cor = "linear-gradient(135deg, #FF1493, #FF69B4)";
            break;
        case "ghost": 
            cor = "linear-gradient(135deg, #483D8B, #6A5ACD)";
            break;
        case "dark": 
            cor = "linear-gradient(135deg, #696969, #000000)";
            break;
        case "steel": 
            cor = "linear-gradient(135deg, #B0C4DE, #708090)";
            break;
        case "flying":
            cor = "linear-gradient(135deg, #87CEEB, #4682B4)";
            break;
        default:
            cor = "linear-gradient(135deg, #FFFFFF, #E0E0E0)";
            break;
    }

    return cor;
}
