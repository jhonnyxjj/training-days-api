import ServerError from './server-errors.js';

class ConflictError extends ServerError {
    constructor(message) {
        super("ConflictError", 409, message);
    }
}

export default ConflictError;
