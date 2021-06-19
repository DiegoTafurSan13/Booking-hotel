// functions for messages
function success (req,res,message,status){
    res.status(200 || status).send(
        {
            err:"",
            body:message
        }
        );
}
function error (req,res,message,status){
    res.status(400 || status).send(
        {
            err:message,
            body:""
        }
    );
}
module.exports = {
    success,error
}