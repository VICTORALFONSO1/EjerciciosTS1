var shape = {
    name: "rectangle",
    popup: function() {

        console.log('This inside popup(): ' + this.name);

        setTimeout(function(){
            console.log('This insidesetTimeout(): ' + this.name);
            console.log("I'm a " + this.name + "!");
        }, 3000);
    }
};

shape.popup();