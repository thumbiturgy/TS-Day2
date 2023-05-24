abstract class Adventurer {
    currentWeapon: string;
  
    constructor(public name: string, currentWeapon: string = '', protected currentDefense: string = '') {
      this.currentWeapon = currentWeapon;
      this.currentDefense = currentDefense;
    }
  
    attack(target) {
        console.log(`${this.name} `)
    }
    defend() {}
    collectSpoils() {}
    equipWeapon(newWeapon: string) {}
    equipDefense(newDefense: string) {}
    viewEquipment(): void {
      console.log(this.currentWeapon, this.currentDefense);
    }
  }
  
  class Ogre extends Adventurer {
    constructor(name: string, equippedWeapon: string = 'club', equippedDefense: string = 'shield', gold: number = 0) {
      super(name, equippedWeapon, equippedDefense);
    }
  }