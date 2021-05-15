function student(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.display=function(){
        console.log("name = "+this.name + "   age= "+this.age)
    }
}

var shahid = new student("shahid",18,"calicut");
var ramees = new student("rameesh",19,"malappuram")
shahid.display();
ramees.display();