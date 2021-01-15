// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    construct(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    attack(arrAttacker, arrTarget) {
        let attackerPos = Math.floor(Math.random() * arrAttacker.length);
        let targetPos = Math.floor(Math.random() * arrTarget.length);

        let damageCalc = arrTarget[targetPos].receiveDamage(arrAttacker[attackerPos].strength);

        if(arrTarget[targetPos].health <= 0) {
            arrTarget.splice(targetPos, 1);
        }

        return damageCalc;
    }

    vikingAttack() {
        return this.attack(this.vikingArmy, this.saxonArmy);
    }

    saxonAttack() {
        return this.attack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        if(! this.saxonArmy.length) {
            return "Vikings have won the war of the century!";
        }
        if(! this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day...";
        }

        return "Vikings and Saxons are still in the thick of battle.";
    }
}
