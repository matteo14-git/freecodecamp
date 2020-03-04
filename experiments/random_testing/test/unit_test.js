var chai = require('chai')
var assert = chai.assert

suite('Starting test', function () {
    test('Undefined test', function () {
        assert.isUndefined(undefined, 'it should be undefined')
    })
    test('Defined test', function () {
        assert.isDefined('defined', 'it should be defined')
    })
    test('Null test', function () {
        assert.isNull(null, 'it should be null')
    })
    test('Not null test', function () {
        assert.isNotNull(3, 'it should not be null')
    })
    test('Ok test', function () {
        assert.isOk('yes', 'it should be ok')
    })
    test('Not ok test', function () {
        assert.isNotOk(undefined, 'it should not be ok')
    })
})

suite('Number test', function () {
    test('Number test', function () {
        assert.isNumber(3, '3 is a number and i am writing this error just to try if it works or not')
    })
    test('Not number test', function () {
        assert.isNotNumber('3', 'value should not be a number')
    })
    test('Equal test', function () {
        assert.equal(3, '3', 'values should be equal')
    })
    test('Not equal test', function () {
        assert.notEqual(4, '3', 'value should not be equal')
    })
    test('0 - 10 test', function () {
        const x = 10
        assert.isAtLeast(x, 0, `${x} should be bigger then 0`)
        assert.isBelow(x, 11, `${x} should be smaller then 11`)
    })
})

suite('Array test', function () {
    const a1 = [1, 2, 3]
    const a2 = ['ciao', 'mao', 'pizza']
    const a3 = [
        {
            name: "mat",
            age: 22
        },
        {
            name: "teo",
            age: 44
        },
        {
            name: "matteo",
            age: 66
        }
    ]
    test('Is array test', function () {
        assert.isArray(a1, 'should be an array')
    })
    test('Is not array test', function () {
        assert.isNotArray(3, 'should not be an array')
    })
    test('Include test', function () {
        assert.include(a1, 3, 'should contain the element')
    })
    test('Not include test', function () {
        assert.notInclude(a2, 'maio', 'should not contain the element')
    })
    test('Typeof array test', function () {
        assert.typeOf(a3, 'Array', 'should  be typeof array')
    })
    test('Not typeof array test', function () {
        assert.notTypeOf(a3[0], 'Array', 'should  be not typeof array')
    })
    test('Typeof object test', function () {
        assert.typeOf(a3[1], 'object', 'should  be typeof object')
    })
    test('Not typeof object test', function () {
        assert.notTypeOf(a3, 'object', 'should  not be typeof object')
    })
})

suite('Person test', function () {

    const person = {
        name: "mario",
        surname: "rossi",
        age: 30
    }

    test('Person object test', function () {
        assert.isObject(person, 'person should be an object'),
            assert.exists(person, 'person should exist')
    })
    test('Name test', function () {
        assert.exists(person.name, 'person should have a name')
    })
    test('Surname test', function () {
        assert.exists(person.surname, 'person should have surname')
    })
    test('Age test', function () {
        assert.exists(person.age, 'age should exist')
        assert.isNumber(person.age, 'age should be a number')
        assert.isAtLeast(person.age, 1, 'age should be greater than 0')
    })
})