class Response {
    static success(res, data) {
        console.log("zzzzzzzzzzzzzzzz")
        return res.json({
            success: true,
            data
        })
    }

    static error(res, error) {
        console.log("zzzzzzzzzzzzzzzz1111")
        return res.json({
            success: false,
            error
        })
    }
}

module.exports = Response