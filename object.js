var person={Name:"Thahir",Age:"21",Place:"Malappuram", display:function (){
    var Name="Vp Thahir"
    console.log(Name)
} }
person.dob="30-6-2003"
person.displayAge=function(){
    console.log(this.Age)
}
  
console.log(person.displayAge())



