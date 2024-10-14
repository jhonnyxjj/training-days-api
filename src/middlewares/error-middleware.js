import ServerError from "../errors/server-errors.js";

const errorHandler = (err, req, res, next) => {
    if (err instanceof ServerError) {
        res.status(err.statusCode).send({
            error: err.name,
            message: err.message,
        });
        return;
    }
    console.error(err);
    res.status(500).send({
        error: "InternalServerError",
        message: "Algo deu errado!"
    });
};

export default errorHandler;
