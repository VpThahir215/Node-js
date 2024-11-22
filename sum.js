var r=require('readline-sync')
num1=r.question('Enter 2 number')
num2=r.question('')
console.log(num1,num2)
if(num1>num2){
    console.log('Larger number is '+num1)

}else if(num1===num2){
  

}else{
    console.log('larger number is '+num2)
}