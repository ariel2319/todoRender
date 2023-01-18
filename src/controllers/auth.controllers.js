const jwt = require('jsonwebtoken');
const AuthService = require('../services/auth.services');

require("dotenv").config();

const userLogin = async (req, res) => {
   try {
      const { email, password } = req.body;
      const response = await AuthService.login(email, password);
      //*  {isValid: true/false}

      if (response.isValid) {
         const data = {
            email: response.result.email,
            username: response.result.username,
            id: response.result.id
         }
         //firmamos un nuevo token..
         //! en el sign usamos una palabra secreta que solo la tienen los usuarios del proyecto...extra seguridad
         const token = jwt.sign(
            data,
            process.env.JWT_SECRET,
            {
               algorithm: 'HS512',
               expiresIn: "1m"
            });
         data.token = token;
         console.log(token);

         res.json(data);
      } else {
         res.status(401).json({ message: "Credenciales Inválidas perrito.." })
      }

   } catch (error) {
      res.status(400).json(error.message);
   }
}


module.exports = {
   userLogin
};