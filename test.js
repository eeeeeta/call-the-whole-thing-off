var either = require('./index.js');
var should = require('should');
describe('Let\'s Call the Whole Thing Off', function() {
    var a = true;
    var b = false;
    var c = 3;
    var d = 'hello world';
    var e = function(){};
    var f;
    var g = null;
    describe('#either', function() {
        it('should pick the true value and return it', function() {
            return either(a, b, f, g).should.equal(a);
        });
        it('should return false if no values are true', function() {
            return either(b, f, g).should.equal(false);
        });
        it('should pick the first true value if there are multiple', function() {
            return either(d, c, a).should.equal(d);
        });
        describe('#which', function() {
            it('should recall the first true value', function() {
                if (either(d, c, a)) {
                    return either.which().should.equal(d);
                }
                else {
                    return new Error('failed to pick correctly');
                }
            });
            it('should recall false if no values were true and the user screwed up', function() {
                if (either(b, f, g)) {
                    return new Error('failed to return false');
                }
                else {
                    // hurr durr I'ma stupid programmer
                    return either.which().should.equal(false);
                }
            });
        });
    });
    describe('#all', function() {
        it('should pick and return all true values in an ordered array', function() {
            return either.all(a, c, d, e).should.eql([a, c, d, e]);
        });
        it('should return false if no values are true', function() {
            return either.all(b, f, g).should.equal(false);
        });
        describe('#which', function() {
            it('should recall an array of all true values', function() {
                if (either.all(a, c, d, e)) {
                    return either.which().should.eql([a, c, d, e]);
                }
                else {
                    return new Error('failed to pick correctly');
                }
            });
            it('should recall false if no values were true and the user screwed up', function() {
                if (either(b, f, g)) {
                    return new Error('failed to return false');
                }
                else {
                    // still a stupid programmer
                    return either.which().should.equal(false);
                }
            });
        });
    });
});
