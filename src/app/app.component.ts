import { Component} from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  logo = "../assets/logo.png";
  imgProfile: string = "../assets/photoPerfil.webp";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];
  pokemons: Pokemon[] = [
    new Pokemon(1,'Bulbasaur', ['Grama'], 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.','https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),
    new Pokemon(2, 'Ivysaur', ['Grama'], 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'),
    new Pokemon(3,'Venusaur', ['Grama'], 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'),
    new Pokemon(4,'Charmander',['Fogo'], 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png')
  ];
  selectedPokemon?: Pokemon;
  showDetails(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }
  closeModal(){
    this.selectedPokemon = undefined;
  }
  filterValue: string = '';
  filteredPokemons(): Pokemon[]{
    if(!this.filterValue){
      return this.pokemons;
    }
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()));
  }
}
