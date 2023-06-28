import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import HTTPerror from "http-error";
import userDAO from '../model/user/dao.js'

// import userDAO from "";

//recoger token de la request
//descodificar el token
// comprueba que el user existe
// NO DEVUELVE RESPUESTA, cuando está todo correcto da paso

//Verifica el token
const tokenVerify = (token) => {
  const decodedToken = jwt.verify(token, process.env.SECRET);

  return decodedToken;
};

//saca el token y lo desencripta
const getTokenFrom = (request) => {
  const authorization = request.get("authorization");

  if (authorization && authorization.toLowerCase().startsWith("bearer "))
    return authorization.substring(7);

  return null;
};

const authUser = async (req, res, next) => {
  try {
    const token = getTokenFrom(req);

    const decodedToken = await tokenVerify(token);

    if (!token || !decodedToken.id) {
      next(HTTPerror(401, {
        error: "token invalid or missing"
      }));
    } else {
      const user = await userDAO.findUserById(decodedToken.id);

      user === null ?
        next(HTTPerror(401, {
          error: "token not matching user"
        })) :
        next();
    }
  } catch (err) {
    console.log(err);
  }
};

export default authUser;