let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


let nacionalidadeA = produtoA.internacional ? "Internacional" : "Nacional";
let taxaA = produtoA.internacional ? produtoA.valor * 1.2 : produtoA.valor * 1.12;

console.log(`Produto A: ${produtoA.nome} | Produto ${nacionalidadeA} | Valor com imposto: ${taxaA}`);


let nacionalidadeB = produtoB.internacional ? "Internacional" : "Nacional";
let taxaB = produtoB.internacional ? produtoB.valor * 1.2 : produtoB.valor * 1.12;

console.log(`Produto B: ${produtoB.nome} | Produto ${nacionalidadeB} | Valor com imposto: ${taxaB}`);


let nacionalidadeC = produtoC.internacional ? "Internacional" : "Nacional";
let taxaC = produtoC.internacional ? produtoC.valor * 1.2 : produtoC.valor * 1.12;

console.log(`Produto A: ${produtoC.nome} | Produto ${nacionalidadeC} | Valor com imposto: ${taxaC}`);