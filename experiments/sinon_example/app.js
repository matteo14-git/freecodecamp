const sinon = require('sinon')


var obj = {
    saluta: function(){return "Ciao"}
}

console.log(obj.saluta())
sinon.stub(obj, 'saluta').callsFake(function(){return "Hello"})
console.log(obj.saluta())
obj.saluta.restore()
console.log(obj.saluta())

