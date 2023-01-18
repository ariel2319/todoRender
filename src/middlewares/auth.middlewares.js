//!validar el token

//?si el token es válido lo dejamos pasar a la ruta..
//?si es inválido...anda pasha..

const jwt = require('jsonwebtoken');

require ('dotenv').config();

//* next es para que vaya al siguiente middleware...
const authMiddleware = (req, res, next) => {
   //destructuración y asignación de nombre => nuevo nombre es token..
   let { authorization: token } = req.headers; //=> utilizamos let xq a continuación la modificamos...para quitar el Bearer
   token = token.replace("Bearer ", "");
   //token = token.splice(" ")[1]; => también sirve
   console.log(token)
   jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: "HS512" },
      (err, decoded) => {
         if (err) {
            res.status(400).json({
               error: "invalid token perrito",
               message: "Eñ tpken no es válido, debes enviar un token correcto."
            })
         } else {
            console.log(decoded);
            next();
         }
      }
   );
}

module.exports = authMiddleware;
