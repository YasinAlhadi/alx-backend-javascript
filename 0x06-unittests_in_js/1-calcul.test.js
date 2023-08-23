const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    it('should return 4 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 5 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return 6 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should return 0 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', 0.1, 0.3), 0);
    });

    it('should return 0 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', 0.1, 0.3), 0);
    });

    it('should return -4 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', -1, -3), -4);
    });

    it('should return -5 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', -1, -3.7), -5);
    });

    it('should return -5 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
    });

    it('should return -5 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
    });

    it('should return 1 when type = SUM', () => {
        assert.equal(calculateNumber('SUM', 1, 0), 1);
    });

    // SUBTRACT
    it('should return 2 when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
    });

    it('should return 3 when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', 3.7, 1), 3);
    });

    it('should return 3 when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    });

    it('should return 0 when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', 0.3, 0.1), 0);
    });

    it('should return -2 when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', -3, -1), -2);
    });

    it('should return -3 when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', -3.7, -1), -3);
    });

    it('should return -3 when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
    });

    it('should return -3 when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', -3.7, -1.5), -3);
    });

    it('should return 1 when type = SUBTRACT', () => {
        assert.equal(calculateNumber('SUBTRACT', 1, 0), 1);
    });
    // DIVIDE
    it('should return 3 when type = DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE', 9, 3), 3);
    });

    it('should return 4 when type = DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE', 3.7, 1), 4);
    });

    it('should return 4 when type = DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE', 3.7, 1.2), 4);
    });

    it('should return 2 when type = DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE', 3.7, 1.5), 2);
    });

    it('should return 3 when type = DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE', -3, -1), 3);
    });

    it('should return Erro when type = DIVIDE', () => {
        assert.equal(calculateNumber('DIVIDE', -3.7, 0), 'Error');
    });
});