class Shape {
    area: number;
    //color: string;
    private color:string;

    constructor ( public name: string, width: number, height: number ){
        this.area = width * height;
        this.color = "pink";
    };
}