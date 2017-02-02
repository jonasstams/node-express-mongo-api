var log4js = require('log4js');

log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: 'logs/info.log', category: 'API' }
    ]
});

var logger = log4js.getLogger('API');

exports.info = (msg,object) => {
    object?
        logger.info(msg, object) :
        logger.info(msg);
};

exports.trace = (msg,object) => {
    object?
        logger.trace(msg, object) :
        logger.trace(msg);
};

exports.warn = (msg, object) => {
    object?
        logger.warn(msg, object) :
        logger.warn(msg);
};

exports.error = (msg, object) => {
    object?
        logger.error(msg, object) :
        logger.error(msg);
};

exports.fatal = (msg, object) => {
    object?
        logger.fatal(msg, object) :
        logger.fatal(msg);
};
exports.debug = (msg, object) => {
    object?
        logger.debug(msg, object) :
        logger.debug(msg);
};
