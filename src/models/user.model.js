import {
  sequelize
} from '../../db/connection.js';
import {
  DataTypes,
  Model
} from "sequelize";

const User = sequelize.define('users', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

class UserModel {

  static findAll = async () => {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      return res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }

  static findOne = async (id) => {
    try {
      const user = await User.findOne({
        where: {
          id
        }
      });

      return user;
    } catch (error) {
      return res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }

  static create = async (name, email, age) => {

    const user = await User.create({
      name,
      email,
      age
    })

    return (user)
  }

  static update = async (id,name, email, age) => {

    const query = (`UPDATE users SET name = '${name}', email = '${email}', age = '${age}' WHERE users. id = ${id}`)
    const result = await User.sequelize.query(query,{raw:true})
    return result;
    // console.log(id)
    // const user = await User.update({
    //   name : name,
    //   email : email,
    //   age : age
    // },{ where: { _id: id }} )
    // return (user)
  }

  static deleteById = async (id) => {
    try {
      const user = await User.destroy({
        where: {
          id
        }
      });

      return user;
    } catch (error) {
      return res.status(500).json({
        message: 'Something went wrong'
      })
    }
  }
}


export default UserModel;