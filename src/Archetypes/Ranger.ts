import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Rager extends Archetype {
  private _energyType: EnergyType;
  static qntInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Rager.qntInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Rager.qntInstances;
  }
}

export default Rager;