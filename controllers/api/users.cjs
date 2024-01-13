const User = require('../../models/users.cjs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
}

function checkToken(req, res) {
    console.log('req.user', req.user);
    res.json(req.exp);
  }

async function create(req, res) {
  try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    console.log(req.body)
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) throw new Error ('User Not Found');
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        console.log(err);
        res.status(400).json('Bad Credentials');
    }
}

/* ======= Helper Function ======== */
function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}