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
        let saxonPos = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingPos = Math.floor(Math.random() * this.vikingArmy.length);

        let damageCalc = this.saxonArmy[saxonPos].receiveDamage(this.vikingArmy[vikingPos].strength);

        if(this.saxonArmy[saxonPos].health <= 0) {
            this.saxonArmy.splice(saxonPos, 1);
        }

        return damageCalc;
    }

    saxonAttack() {
        let saxonPos = Math.floor(Math.random() * this.saxonArmy.length);
        let vikingPos = Math.floor(Math.random() * this.vikingArmy.length);

        let damageCalc = this.vikingArmy[vikingPos].receiveDamage(this.saxonArmy[saxonPos].strength);
        
        if(this.vikingArmy[vikingPos].health <= 0) {
            this.vikingArmy.splice(vikingPos, 1);
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
