class Sample{
    hlo(){
        console.log('Thahiryyyy');
        
    
    }
        
    }







class Hello extends Sample{
    constructor(num1,num2){
        super()
        this.num1=num1
        this.num2=num2
        


    }
    Hello(){
        console.log("Hello friends :" +(this.num1+this.num2))

    }
    
}
let hey=new Hello(10,20)
let hook=new Sample()
hey.Hello()
hook.hlo()



