class human {
    
    

    constructor(name,gender,salary,skill,tasks){
        this.name=name;
        this.gender=gender;
        this.salary=salary;
        this.skill=skill;
        this.tasks=tasks;


    }
}
let human1=new human("abhishek","male","10k","development",function(){
    console.log("developer");
});
console.log(human1);


class animal{


    constructor(name,gender,salary,skill,tasks){
        super();
        this.name=name;
        this.gender=gender;
        this.salary=salary;
        this.skill=skill;
        this.tasks=tasks;
    }
}
let animal1=new animal("cheetah","male",'10k','hunting',function(){
    console.log("cheetah hi boldee");
});
console.log(animal1);