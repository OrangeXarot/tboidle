const fs = require('fs');

const itemsData = require('./items.json'); 

exports.getItemStuff = function (id) {
    const item = itemsData.find(item => item.itemid === id);
    return item
};
