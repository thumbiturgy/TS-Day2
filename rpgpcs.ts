abstract class Adventurer {
    currentWeapon: string;
  
    constructor(public name: string, currentWeapon: string = '', protected currentDefense: string = '', gold: number = 0, items = []) {
      this.currentWeapon = currentWeapon;
      this.currentDefense = currentDefense;
      this.gold = gold;
    }
  
    attack(target:string) {
        console.log(`${this.name} attacks ${target} with ${this.currentWeapon}`)
    }
    defend() {}
    collectSpoils() {}
    equipWeapon(newWeapon: string) {
        this.currentWeapon = newWeapon
    }
    equipDefense(newDefense: string) {
        this.currentDefense = newDefense
    }
    viewEquipment(): void {
      console.log(this.currentWeapon, this.currentDefense);
    }
    viewGold():void{
        console.log(this.gold)
    }
  }
  
  class Ogre extends Adventurer {
    constructor(name: string, currentWeapon: string = 'club', currentDefense: string = 'shield', gold: number = 0, items =[] ) {
      super(name, currentWeapon, currentDefense, gold, items);
      this.gold = gold;
    }
  }

const choGall = new Ogre("Cho'Gall")
choGall.currentWeapon
choGall.viewEquipment()

class Peon extends Adventurer{
    equippedDefense: string = 'shield'
    equippedWeapon: string = 'club'
}

class Knight extends Adventurer{
    equippedDefense: string = 'armor'
    equippedWeapon: string = 'sword'
}

class Archer extends Adventurer{
    equippedDefense: string = 'tunic'
    equippedWeapon: string = 'bow and arrow'
}

