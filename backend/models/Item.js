const { DataTypes, Sequelize } = require('sequelize');
const db = require('../dbConfig');
const Category = require('./Categories');
// User story: I can add a new item with name, category, note, and image.
const Item = db.define('item', {

		item_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		category_id: {
			allowNull: false,
			type: DataTypes.INTEGER
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

	// Item.belongsTo(Category)
	Category.hasMany(Item,{as: 'items', foreignKey: 'category_id'})
	Item.belongsTo(Category)
	Item.sync().then(() => {
		console.log('Item table created');
	});

module.exports = Item;


