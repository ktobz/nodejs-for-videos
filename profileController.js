const { Profile } = require('../models');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret';

exports.createProfile = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { bio, avatar } = req.body;
    const profile = await Profile.create({ bio, avatar, userId: decoded.id });
    res.status(201).json(profile);
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
