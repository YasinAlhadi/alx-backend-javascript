const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul');

describe('calculateNumber', () => {
    it('should return rounded value when type = SUM', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
        expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
        expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
        expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
        expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
        expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
        expect(calculateNumber('SUM', 1, 0)).to.equal(1);
    });

    // SUBTRACT
    it('should return rounded value when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
        expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
        expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
        expect(calculateNumber('SUBTRACT', 0.3, 0.1)).to.equal(0);
        expect(calculateNumber('SUBTRACT', -3, -1)).to.equal(-2);
        expect(calculateNumber('SUBTRACT', -3.7, -1)).to.equal(-3);
        expect(calculateNumber('SUBTRACT', -3.7, -1.2)).to.equal(-3);
        expect(calculateNumber('SUBTRACT', -3.7, -1.5)).to.equal(-3);
        expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
    });

    // DIVIDE
    it('should return rounded value when type = DIVIDE', () => {
        expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
        expect(calculateNumber('DIVIDE', 3.7, 1)).to.equal(4);
        expect(calculateNumber('DIVIDE', 3.7, 1.2)).to.equal(4);
        expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.equal(2);
        expect(calculateNumber('DIVIDE', -3, -1)).to.equal(3);
        expect(calculateNumber('DIVIDE', -3.7, 0)).to.equal('Error');
    });
});