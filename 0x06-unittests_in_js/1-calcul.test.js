const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return rounded value when type = SUM', () => {
        assert.equal(calculateNumber('SUM', 1, 3), 4);
        assert.equal(calculateNumber('SUM', 1, 3.7), 5);
        assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
        assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
        assert.equal(calculateNumber('SUM', 0.1, 0.3), 0);
        assert.equal(calculateNumber('SUM', 0.1, 0.3), 0);
        assert.equal(calculateNumber('SUM', -1, -3), -4);
        assert.equal(calculateNumber('SUM', -1, -3.7), -5);
        assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
        assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
        assert.equal(calculateNumber('SUM', 1, 0), 1);
    });

    // SUBTRACT
    it('should return rounded value when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
        assert.equal(calculateNumber('SUBTRACT', 3.7, 1), 3);
        assert.equal(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
        assert.equal(calculateNumber('SUBTRACT', 0.3, 0.1), 0);
        assert.equal(calculateNumber('SUBTRACT', -3, -1), -2);
        assert.equal(calculateNumber('SUBTRACT', -3.7, -1), -3);
        assert.equal(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
        assert.equal(calculateNumber('SUBTRACT', -3.7, -1.5), -3);
        assert.equal(calculateNumber('SUBTRACT', 1, 0), 1);
    });

    // DIVIDE
    it('should return rounded value when type = DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE', 9, 3), 3);
        assert.equal(calculateNumber('DIVIDE', 3.7, 1), 4);
        assert.equal(calculateNumber('DIVIDE', 3.7, 1.2), 4);
        assert.equal(calculateNumber('DIVIDE', 3.7, 1.5), 2);
        assert.equal(calculateNumber('DIVIDE', -3, -1), 3);
        assert.equal(calculateNumber('DIVIDE', -3.7, 0), 'Error');
    });
});