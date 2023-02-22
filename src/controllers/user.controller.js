import UserModel from '../models/user.model.js';

class UserController{

  index = async (req, res) => {
    try {
      const response = await UserModel.getAll();     
      res.send(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error
      });
    }
  }

  show = async (req, res) => {
    try {
      const id = req.params.id;
      const response = await UserModel.findOne(id);
      res.send(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error
      });
    }
  }

  create = async (req, res) => {
    try {
      const {name,email,age} = req.body;
      const response = await UserModel.create(name,email,age);    
      res.send(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error
      });
    }
  }

  // update = async (req, res) => {
  //   try {
  //     const response = await UserModel.getAll();     
  //     res.send(response);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({
  //       message: error
  //     });
  //   }
  // }

  // delete = async (req, res) => {
  //   try {
  //     const response = await UserModel.getAll();     
  //     res.send(response);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({
  //       message: error
  //     });
  //   }
  // }
}

export default UserController