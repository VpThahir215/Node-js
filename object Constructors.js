function person(Name,Age,Place){
    this.Name=Name
    this.Age=Age
    this.Place=Place
    this.display=function(){
        console.log("Name :"+this.Name+ " Age:"
            +this.Age
        )
    }
}
var Thahir=new person("Thahir", 21,"Malappuram,Tirurangadi")
var Moideen=new person("Moideen",22,"Malappuram,Kottakal")

Thahir.display()
Moideen.display()
