var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  displayItems();
});

//this will display all items avaialable upon connection
function displayItems() {
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    console.log(results);
    customerPrompt();
  });
}

//prompt module that will walk customer through selecting an item

function customerPrompt() {
  inquirer
    .prompt([
      {
        name: "itemID",
        type: "input",
        message: "What is the item ID you would like to buy?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units would you like to buy?"
      }
    ])
    .then(function(answer) {
      console.log(answer);
      var itemID = answer.itemID;
      var units = answer.quantity;
      connection.query(
        "SELECT * FROM products WHERE id = ?",
        [itemID],
        function(err, results) {
          if (err) throw err;
          if (results.length === 0) {
            console.log("Unavailable");
            customerPrompt();
          } else if (results[0].stock_quantity >= units) {
            //console.log("here");
            connection.query(
              "UPDATE products SET stock_quantity = ? WHERE id = ?;",
              [results[0].stock_quantity - units, itemID],
              function(err, res) {
                if (err) throw err;
                console.log("Your order is on it's way!");
                customerPrompt();
              }
            );
          } else if (units > results[0].stock_quantity) {
            console.log("Sorry, Not Enough!");
            customerPrompt();
          }
        }
      );
    });
}
