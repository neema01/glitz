const notFound = (req,res,next) =>{
    const error = new Error(`Not Found- ${req.originalUrl}`)
    res.status(404)
    next(error)
    }

const errorHandler = (err,req,res,next) =>{
    // const statuscode = res.statusCode === 200 ? 500 : res.statusCode
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message : err.message,
        stack : process.env.NODE_ENV === 'product' ? err.stack:''
        

    })
}

export {notFound, errorHandler}