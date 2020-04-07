const path = require("path");
const fs = require("fs");

const rootDir = require("../util/path");


module.exports = class Product {

    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(rootDir, 'data', 'products.json');
        fs.readFile(p, (err, filecontent) => {
            let products = [];

            if (!err) {
                products = JSON.parse(filecontent);
            }
            products.push(this);
            fs.writeFile(err, JSON.stringify(products), (err) => {
                console.log(err);
            });

        });


    }

    static fetchAll() {
        const p = path.join(rootDir, 'data', 'products.json');
        fs.readFile(p, (err, filecontent) => {
            if (err) {
                return [];
            }
            return JSON.parse(filecontent);
        });
    }
}