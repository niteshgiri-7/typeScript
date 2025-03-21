/*
5. Classes
Exercise:
Create a class Rectangle with the following:
Properties: width (number), height (number)
Methods:
area() – returns the area of the rectangle.
perimeter() – returns the perimeter of the rectangle.
Create another class Square that extends Rectangle.
Add a constructor to initialize the square using a single side length.
Create instances of both classes and calculate their area and perimeter.
*/


class Rectangle {
    width:number;
    height:number;

    constructor(w:number,h:number){
        this.width=w;
        this.height=h;
    }

    area():number{
        return this.height*this.width;
    }
    perimeter():number{
        return 2*(this.height+this.width);
    }
}

class Square extends Rectangle{
    constructor(length:number){

        super(length,length);

    }

}

const rect = new Rectangle(10,5);
const sq = new Square(5);

console.log("sq area",sq.area())
console.log("sq perimeter",sq.perimeter())
console.log("rect area",rect.area())
console.log("rect perimeter",rect.perimeter())