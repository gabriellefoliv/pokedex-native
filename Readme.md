<h1 align="center">Seja bem-vindo à demo da Pokedéx</h1>
<h2 align="center">Abaixo está passo a passo as funcionalidades do aplicativo</h2>
<p align="center">Construído com React Native, TypeScript, styled-components e PokéAPI</p>

# Página Welcome
- A página Welcome é bem básica e possui apenas uma animação do Pokemon para apresentar o app.
<div display="flex" flex-direction="row" align="center">
    <img src="/src/design/PWelcome.png" align="center" width="250"/>
</div>

# Página Home
- A página Home é responsável por puxar as informações da API e organizar os pokemons em cards.
- Os cards mudam de info de acordo com o Pokemon. É uma tela de Scroll com todos os pokemons da API.
<div display="flex" flex-direction="row" align="center">
    <img src="/src/design/PHome.png" align="center" width="250"/>
</div>

# Página About
- A página About é carregada ao clicar em um dos cards. 
- Nela, vai carregar as especificações do pokemon selecionado.
- De novo, todas as informações são puxadas da API e carregadas na página.
<div display="flex" flex-direction="row" align="center">
    <img src="/src/design/PAbout1.png" width="250">
    <img src="/src/design/PAbout2.png" width="250">
</div>