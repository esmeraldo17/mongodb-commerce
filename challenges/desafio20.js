db.produtos.updateOne({ nome: "Quarteirão com Queijo" }, { $pull: { ingredientes: "hamburguer" } });

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 });