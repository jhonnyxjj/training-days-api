import ServerError from './server-errors.js';

class InvalidParameterError extends ServerError {
    constructor(message) {
        super("InvalidParameterError", 400, message);
    }
}

export default InvalidParameterError;
