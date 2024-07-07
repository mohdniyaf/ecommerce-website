const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  const payload = { id };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });
};




module.exports = { generateToken };
