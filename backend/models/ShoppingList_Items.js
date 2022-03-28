const { DataTypes, Sequelize } = require('sequelize');
const db = require('../dbConfig');
const Item = require('./Item');
const ShoppingList = require('./ShoppingList');

const ShoppingList_Items = db.define('shoppinglist_item', {
                                                        list_id: {
                                                            type: DataTypes.INTEGER,
                                                            references: {
                                                                model: ShoppingList,
                                                                key: 'list_id'
                                                            }
                                                        },
                                                        item_id: {
                                                            type: DataTypes.INTEGER,
                                                            references: {
                                                                model: Item,
                                                                key: 'item_id'
                                                            }
                                                        }
                                                    });


  Item.belongsToMany(ShoppingList, { through: ShoppingList_Items });
  ShoppingList.belongsToMany(Item, { through: ShoppingList_Items });

  ShoppingList_Items.sync().then(() => {
    console.log('hoppingList_Items table created');
});


  module.exports = ShoppingList_Items