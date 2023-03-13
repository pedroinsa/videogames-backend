const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,

    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },

   platforms: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
  },
  createdInDb:{
   type: DataTypes.BOOLEAN,
   allowNull: false,
   defaultValue: true
  }
    
    
  }, {timestamps: false});
};
