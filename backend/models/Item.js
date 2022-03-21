const { DataTypes } = require('sequelize');
const db = require('../dbConfig');
// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
// User story: I can add a new item with name, category, note, and image.
const Item = db.define('item', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		category: {
			allowNull: false,
			type: DataTypes.STRING
		},
        note: {
            allowNull: false,
			type: DataTypes.STRING
        },
        image: {
            allowNull: false,
			type: DataTypes.STRING
        }
	});

Item.sync().then(() => {
    console.log('table created');
  });

module.exports = Item;