const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return 4 when type = SUM', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 when type = SUM', () => {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 5 when type = SUM', () => {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should return 6 when type = SUM', () => {
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should return 0 when type = SUM', () => {
        expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
    });

    it('should return -4 when type = SUM', () => {
        expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });

    it('should return -5 when type = SUM', () => {
        expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
    });

    it('should return -5 when type = SUM', () => {
        expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
    });

    it('should return -5 when type = SUM', () => {
        expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
    });

    it('should return 1 when type = SUM', () => {
        expect(calculateNumber('SUM', 1, 0)).to.equal(1);
    });

    // SUBTRACT
    it('should return 2 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });

    it('should return 3 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
    });

    it('should return 3 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
    });

    it('should return 0 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 0.3, 0.1)).to.equal(0);
    });

    it('should return 0 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 0.1, 0.3)).to.equal(0);
    });

    it('should return -2 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', -3, -1)).to.equal(-2);
    });

    it('should return -3 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', -3.7, -1)).to.equal(-3);
    });

    it('should return -3 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', -3.7, -1.2)).to.equal(-3);
    });

    it('should return -3 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', -3.7, -1.5)).to.equal(-3);
    });

    it('should return 1 when type = SUBTRACT', () => {
        expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
    });
    // DIVIDE
    it('should return 3 when type = DIVIDE', () => {
        expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
    });

    it('should return 4 when type = DIVIDE', () => {
        expect(calculateNumber('DIVIDE', 3.7, 1)).to.equal(4);
    });

    it('should return 4 when type = DIVIDE', () => {
        expect(calculateNumber('DIVIDE', 3.7, 1.2)).to.equal(4);
    });

    it('should return 3 when type = DIVIDE', () => {
        expect(calculateNumber('DIVIDE', -3, -1)).to.equal(3);
    });

    it('should return Erro when type = DIVIDE', () => {
        expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
    });
});