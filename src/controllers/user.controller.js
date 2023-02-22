import UserModel from '../models/user.model.js';

class UserController{

  index = async (req, res) => {
    try {
      const response = await UserModel.findAll();     
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
      return res.status(202).json({'message': 'Created successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error
      });
    }
  }

  update = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id)

      const {name,email,age} = req.body;
      const response = await UserModel.update(id,name,email,age);     
      return res.status(202).json({'message': 'Update successfully'});;
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error
      });
    }
  }

  destroy = async (req, res) => {
    try {
      const id = req.params.id;
      const response = await UserModel.deleteById(id);
      return res.status(202).json({'message': 'Deleted successfully'});
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: error
      });
    }
  }
}

export default UserController