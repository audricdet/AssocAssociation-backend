import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    // Get the token from the cookies
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(403).send("Unauthorized");
    }

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Set the user ID and email on the request object
    req.userId = decodedToken.user.id;
    req.userEmail = decodedToken.user.email;

    next();
  } catch (error) {
    console.error(error);
    res.status(403).send("Unauthorized");
  }
};

export default auth;


