function area(shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + "cm squared";
}
console.log(area({ name: "rectangle", width: 30, height: 15 }));
console.log(area({ name: "square", width: 30, height: 30, color: "blue" }));
console.log(area({ width: 30, height: 15 }));
