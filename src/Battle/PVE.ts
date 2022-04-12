import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _character: Fighter;
  private _monsters: SimpleFighter[];

  constructor(character: Fighter, monsters: SimpleFighter[]) {
    super(character);

    this._character = character;
    this._monsters = monsters;
  }

  // logica de batalha feita com ajuda do Eric - Turma 15 - A
  batalha(i: number) {
    while (this._character.lifePoints > 0 && this._monsters[i].lifePoints > 0) {
      this._character.attack(this._monsters[i]);
      this._monsters[i].attack(this._character);
    }

    if (this._character.lifePoints <= 0) {
      return -1; // se o personagem morrer retorna -1
    } 
    return 0; // se o personagem nao morrer, retorna 0
    
    // a função está dentro do for, dentro de fight(), após um monstro ser derrotado, o for itera mais um e uma nova batalha começa. O loop continua até acabar os monstros, dando um valor final no fim.

    // no teste o personagem é upado 500 vezes antes da batalha
  }

  fight(): number {
    for (let i = 0; i < this._monsters.length; i += 1) {
      const condicaoDaBatalha = this.batalha(i);
      if (condicaoDaBatalha === -1) return -1;
    }
    return 1;
  }
}

export default PVE;