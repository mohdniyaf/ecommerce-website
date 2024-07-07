const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";
    const extraDetail = err.extraDetail || null;

    res.status(statusCode).json({
        status: statusCode,
        message,
        extraDetail
    });
};

module.exports = errorMiddleware;