const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('calculateNumber SUM', () => {
        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', -1, -3.7)).to.equal(-5);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', -1.2, -3.7)).to.equal(-5);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
        });

        it('should return rounded value when type = SUM', () => {
            expect(calculateNumber('SUM', 1, 0)).to.equal(1);
        });
    });

    describe('calculateNumber SUBTRACT', () => {
        it('should return rounded value when type = SUBTRACT', () => {
            expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
        });

        it('should return rounded value when type = SUBTRACT', () => {
            expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
        });

        it('should return rounded value when type = SUBTRACT', () => {
            expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
        });

        it('should return rounded value when type = SUBTRACT', () => {
            expect(calculateNumber('SUBTRACT', 0.3, 0.1)).to.equal(0);
        });

        it('should return rounded value when type = SUBTRACT', () => {
            expect(calculateNumber('SUBTRACT', -3, -1)).to.equal(-2);
        });

        it('should return rounded value when type = SUBTRACT', () => {
            expect(calculateNumber('SUBTRACT', -3.7, -1)).to.equal(-3);
        });

        it('should return rounded value when type = SUBTRACT', () => {
            expect(calculateNumber('SUBTRACT', -3.7, -1.2)).to.equal(-3);
        });

        it('should return rounded value when type = SUBTRACT', () => {
            expect(calculateNumber('SUBTRACT', -3.7, -1.5)).to.equal(-3);
        });

        it('should return rounded value when type = SUBTRACT', () => {
            expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
        });
    });

    describe('calculateNumber DIVIDE', () => {
        it('should return rounded value when type = DIVIDE', () => {
            expect(calculateNumber('DIVIDE', 9, 3)).to.equal(3);
        });

        it('should return rounded value when type = DIVIDE', () => {
            expect(calculateNumber('DIVIDE', 3.7, 1)).to.equal(4);
        });

        it('should return rounded value when type = DIVIDE', () => {
            expect(calculateNumber('DIVIDE', 3.7, 1.2)).to.equal(4);
        });

        it('should return rounded value when type = DIVIDE', () => {
            expect(calculateNumber('DIVIDE', 3.7, 1.5)).to.equal(2);
        });

        it('should return rounded value when type = DIVIDE', () => {
            expect(calculateNumber('DIVIDE', -3, -1)).to.equal(3);
        });

        it('should return rounded value when type = DIVIDE', () => {
            expect(calculateNumber('DIVIDE', -3.7, 0)).to.equal('Error');
        });
    });
});
