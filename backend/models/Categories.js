const { DataTypes } = require('sequelize');
const db = require('../dbConfig');
const Item = require('./Item');

const Category = db.define('category', {
		
		category_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		}
	});


    

Category.sync().then(() => {
    console.log('table created');
  });

module.exports = Category;