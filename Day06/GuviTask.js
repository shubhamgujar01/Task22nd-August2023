// Person class to hold details
class Person{
    constructor(Name,Age,Occupation){
         this.Name=Name,
    this.Age=Age,
    this.Occupation=Occupation
    }
    
     getDetails(){
       
        
        console.log(p1)
    }
   
}

var p1 = new Person("Rohit",25,"Developer")

p1.getDetails();

// Class to calculate Uber Price


class UberPrice{
    constructor(baseprice,Priceperkm,Surgecharge){
         this.baseprice=baseprice,
    this.Priceperkm=Priceperkm,
    this.Surgecharge=Surgecharge
    }
    
     getPrice(distance){
       
       var total_price = this.baseprice+this.Surgecharge+(this.Priceperkm*distance)
       console.log(total_price)
    }
   
}

var p1 = new UberPrice(30,15,40)

p1.getPrice(5);
