//xx change to call from department table xx//
connection.query("SELECT * FROM products WHERE ?", [{
	item_id: answers.item_id
}], function(err, response) {
	if (err) throw err;
	var itemID = answers.item_id
	var newQty = parseInt(response[0].stock_qty) + parseInt(answers.stock_qty)
	connection.query("UPDATE products SET ? WHERE ?", [{
		stock_qty: newQty
	}, {
		item_id: itemID
	}], function(err, rows, fields) {
		if (err) throw err;
		//continue program with new choice
		makeChoice();
	});
});