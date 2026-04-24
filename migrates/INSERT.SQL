SELECT CARRINHOS.COD_CARRINHO, USUARIOS.USUARIO, CARRINHOS.DATA, CARRINHOS.FINALIZADO, ITENS.PRODUTO, ITENS_CARRINHO.QUANTIDADE, ITENS.PRECO, ITENS.IMAGEM FROM CARRINHOS
INNER JOIN ITENS_CARRINHO ON CARRINHOS.COD_CARRINHO = ITENS_CARRINHO.COD_CARRINHO
INNER JOIN ITENS ON ITENS.CODIGO - ITENS_CARRINHO.COD_PRODUTO
WHERE USUARIOS.USUARIOS = "GODOTHALYA";

INSERT INTO `produtos`.`usuarios` (`USUARIO`, `SENHA`, `NOME`) VALUES ('nathalya ', '123', 'nathy');
INSERT INTO `produtos`.`usuarios` (`USUARIO`, `SENHA`, `NOME`) VALUES ('godofredo', '1234', 'godosantos');
INSERT INTO `produtos`.`usuarios` (`USUARIO`, `SENHA`, `NOME`) VALUES ('godothalya', '6969', 'godofredo');

INSERT INTO `produtos`.`produtos` (`PRODUTO`, `DESCRICAO`, `PRECO`, `FOTO`) VALUES ('hamburguer 2', 'gostoso', '37.90', 'https://cloudfront-us-east-1.images.arcpublishing.com/estadao/77XTHHCCLBEXLC2Y5RK4PN37CE.jpg');
INSERT INTO `produtos`.`produtos` (`PRODUTO`, `DESCRICAO`, `PRECO`, `FOTO`) VALUES ('hamburguer 3', 'muito bom', '56.90', 'https://www.seara.com.br/wp-content/uploads/2025/09/shutterstock_1489640750-1.jpg');