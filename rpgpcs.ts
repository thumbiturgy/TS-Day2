abstract class Adventurer{
    constructor(name:string){}
    attack(){}
    defend(){}
    collectSpoils(){}
    equipWeapon(newWeapon){}
    equipDefense(newDefense){}
    viewEquipment():void{
        console.log(equippedWeapon)
    }
}

class Ogre extends Adventurer{
    constructor(name:string, equippedWeapon:string = 'club', equippedDefense:string = 'shield', gold:number = 0){
        super(name)
        equippedWeapon = 'club'
        equippedDefense = 'shield'
        gold = 0
    }
    
}

const gronk = new Ogre('gronk')
gronk.viewEquipment()

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

