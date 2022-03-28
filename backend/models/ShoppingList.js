const { DataTypes, Sequelize } = require('sequelize');
const db = require('../dbConfig');
const Category = require('./Categories');
//item id, category id, date, quantity, list id, list name, is active, cancelled, completed, ip address
const ShoppingList = db.define('shopping_list', {

		list_id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		list_name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
        date_added: {
            allowNull: false,
			type: DataTypes.DATE
        },
        ip_address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        is_active: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        is_cancelled: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        },
        is_completed: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        }
        
	});

	
	ShoppingList.sync().then(() => {
		console.log('shopping list table created');
	});




module.exports = ShoppingList;