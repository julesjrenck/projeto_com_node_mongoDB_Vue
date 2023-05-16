const User = require('../models/user.model');

exports.registerNewUser = async (req, res) => {
    try {
      // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado:
      const isUser = await User.find({ email: req.body.email });
      console.log(isUser);
      if (isUser.length >= 1) {
        return res
          .status(409)
          .json({ message: "Atenção! Este e-mail já possui registro!" });
      }
  
      const newUser = new User(req.body);
      const user = await newUser.save();
      const token = await newUser.generateAuthToken(); // ==> Aqui chamaremos o método que criamos no model
      return res
        .status(201)
        .json({ message: "Usuário(a) criado(a) com sucesso!", user, token });
    } catch (err) {
      return res.status(400).json({ err });
    }
  };