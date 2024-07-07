
const Validator =(schema)=>async(req,res,next)=>{
    try {
        const parseBody=await schema.parseAsync(req.body);
        req.body=parseBody;
        next();

     } catch (err) {
        const message="fill it proprly";
        const extraDetail = (err.errors && err.errors.length > 0) ? err.errors[0].message : err.message;
        const status=500;
        const error={
            status,
            message,
            extraDetail

        }
        next(error)
    }
};

module.exports = Validator;