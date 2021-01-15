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

    attack(attacker, target) {
        return target.receiveDamage(attacker.strength);
    }

    vikingAttack() {
        let saxon = this.saxonArmy[this.saxonArmy.length - 1];
        let viking = this.vikingArmy[this.vikingArmy.length - 1];
        let damageCalc = saxon.receiveDamage(viking.strength);

        if(saxon.health <= 0) {
            this.saxonArmy.pop();
        }

        return damageCalc;
    }

    saxonAttack() {
        let saxon = this.saxonArmy[this.saxonArmy.length - 1];
        let viking = this.vikingArmy[this.vikingArmy.length - 1];
        let damageCalc = viking.receiveDamage(saxon.strength);
        
        if(viking.health <= 0) {
            this.vikingArmy.pop();
        }

        return damageCalc;
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
