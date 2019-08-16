const jwt = require('jsonwebtoken');
const config = require('./config');
const privateKey = config.SECRET;

const signin = () => {
    const token = jwt.sign({
        "_id" : "5d561638d6047042140ca02e",
        "name" : "Lê Quang Sáng",
        "email" : "lqsang19953@gmail.com",
        "password" : "$2a$10$0AMdz2b4gx2SHKFBnGBYieATl4OXfqHoGLnFOHlrsiPLacMT.KBMy",
        "username" : "asdasd",
    }, privateKey);
    return token;
}

const decodeToken = (token) => {
    return jwt.verify(token, privateKey);
}

const test = () => {
    const token = signin();
    console.log(token);
    const decode_token = decodeToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDU2MTYzOGQ2MDQ3MDQyMTQwY2EwMmUiLCJuYW1lIjoiTMOqIFF1YW5nIFPDoW5nIiwiZW1haWwiOiJscXNhbmcxOTk1M0BnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCQwQU1kejJiNGd4MlNIS0ZCbkdCWWllQVRsNE9YZnFIb0dMbkZPSGxyc2lQTGFjTVQuS0JNeSIsInVzZXJuYW1lIjoiYXNkYXNkIiwiaWF0IjoxNTY1OTMxMzQ4fQ.RYrgdlo-UhDSg14oHcSqkkiSq7KbbHfxSgKGZeItezs');
    console.log(111111, decode_token)
}

test();
