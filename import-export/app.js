const logger = require("./logger.js");
const sendInfo = logger.info("This is my information");
const sendError = logger.error("This is an error.");

module.exports = { sendInfo, sendError };
