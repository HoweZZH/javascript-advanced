function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);   
}

a();

console.log(newvariable); // not good!

b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}


var d = {
    name: 'The d object',
    log: function() {
        this.name = 'Updated d object';
        console.log(this);
        nestLog1 = function() {
            console.log(this);  
            
        }
        nestLog1();
    }
}

this.a = 'aaa';
//c.log();

d.log();


w


