import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static qntInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
    Halfling.qntInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling.qntInstances;
  }
}

export default Halfling;