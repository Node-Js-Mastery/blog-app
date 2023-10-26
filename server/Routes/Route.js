const route = require('express').Router();
const API = require('../API')();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


route.get("/",(req,res)=>{
    res.json(API);
});

route.get('/api/blog/:category',(req,res)=>{
    const {category} = req.params;
    const filteredData = API.filter((item) => item.category === category);
    res.json(filteredData);
    // console.log("THIS IS FILTERED DATA",filteredData);
});


const users = [];
route.post('/register', async (req, res) => {
  const data = req.body
  try {
    const { FirstName, LastName,EmailAdress,password} = data;
    console.log(data);
    if (users.find(user => user.EmailAdress === EmailAdress)) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    console.log(password,salt)
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      id: users.length + 1,
      FirstName,
      LastName,
      EmailAdress,
      password:hashedPassword 
    };

    users.push(newUser);
    console.log(newUser);

    const token = jwt.sign({EmailAdress : newUser.EmailAdress},"udhwuduidubidb",{expiresIn:"2d"})
    console.log(token);
    return res.status(201).json({ message: 'User successfully registered',token:token,FirstName:FirstName });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'User registration failed' });
  }
});


route.post('/login', async (req, res) => {
  try {
    const { EmailAdress, password } = req.body;
    const user = users.find(user => user.EmailAdress === EmailAdress);
    if (!user) {
      return res.status(404).json({ message: 'User is not registered' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, 'dnabduiauifbuibfibui',{expiresIn:"2d"});

    return res.status(200).json({ message: 'User has logged in successfully', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = route;
