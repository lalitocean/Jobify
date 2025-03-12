import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User Not Auithenticated..",
        success: false,
      });
    }

    // token verify
    const tokenDecode = jwt.verify(token, process.env.SECRET_KEY);

    if (!tokenDecode) {
      return res.status(401).json({
        message: "invalide token..",
        success: false,
      });
    }

    req.id = tokenDecode.userId;
    next();
  } catch (error) {
    console.log(error.message);
  }
};

export default isAuthenticated;
