import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static qntInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 99;
    Elf.qntInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.qntInstances;
  }
}

export default Elf;