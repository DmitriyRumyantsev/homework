//Создать прототип Animal с полями name, sound, say() [name говорит sound] + создать внутренню конструкцию для Animal
//Создать героев Утиных Историй минимум 3
const Animal = {
    title: "",
    difference: 0,
    say: function(){
        console.log(this.title + " имеет " + this.difference)
    },
    constrct: function(title, difference){
        this.title = title;
        this.difference = difference;
    }
}

const Duck = Object.create(Animal)
Duck.constrct("Уточка", "2 лапки!")

const Dog = Object.create(Animal)
Dog.constrct("Собачка", "4 лапки!")

const Chipmunk  = Object.create(Animal)
Chipmunk .constrct("Бурундучок", "прикольненькую шёрстку!")


Duck.say()
Dog.say()
Chipmunk.say()