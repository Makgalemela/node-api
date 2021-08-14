const { StatusCodes } = require('http-status-codes');


function sendSuccess(req, data, status){
    req.status(StatusCodes.OK)
    .json({
        ...data,
        status:{
            ...status
        }
    })
}
function sendError(req, data, error){
    req.status(StatusCodes.OK)
    .json({
        ...data,
        error :{
            ...error
        }
    })
}

module.exports ={
    sendSuccess,
    sendError
}