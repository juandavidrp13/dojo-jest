const cal = require('./calculator');

describe('Add Operator', ()=> {

test('adds 1 + 1 to equals 2', ()=> {
    var value = cal.add(1,1);
    expect(value).toBe(2);
});

test('adds 5 + 2 to equals 7', ()=> {
    var value = cal.add(5,2);
    expect(value).toBe(7);
    
});

});

describe('subtract Operator', ()=> {

    test('subs 1 - 1 to equals 2', ()=> {
        var value = cal.subtract(1,1);
        expect(value).toBe(0);
    });
    
    test('subs 5 - 2 to equals 7', ()=> {
        var value = cal.subtract(5,2);
        expect(value).toBe(3);
        
    });
    
    });
