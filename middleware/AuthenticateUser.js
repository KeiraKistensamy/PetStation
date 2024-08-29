import 'dotenv/config'
import jwt from 'jsonwebtoken'
const { sign, verify } = jwt

function createToken(user) {
    return sign ({
        emailAdd: user.emailAdd,
        password: user.password
    }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    }
)
}

function verifyAToken(req, res, next) {
    const token = req?.headers["authorization"] //creating a token, headers is 
    // where we gonna save the token (frontend)
    if(token) {
        if (verify(token, process.env.SECRET_KEY)) {
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: "Information is incorrect, please provide the correct information."
            })
        }
        } else {
            res?.json({
                status: res.statusCode,
                msg: "Please login."
            })
        }
    }


export {
    createToken,
    verifyAToken
} 