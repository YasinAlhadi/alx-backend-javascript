export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }

    set name(name) {
        if (typeof name === 'string') {
            this._name = name;
        } else {
            throw new TypeError('Name must be a string');
        }
    }

    get name() {
        return this._name;
    }

    set code(code) {
        if (typeof code === 'string') {
            this._code = code;
        } else {
            throw new TypeError('Code must be a string');
        }
    }

    get code() {
        return this._code;
    }

    displayFullAirport() {
        return `${this._name} (${this._code})`;
    }
}