from database.conexao import conectar

def recuperar_carrinho(usuario:str) ->list:
    conexao, cursor = conectar()
    cursor.execute("""SELECT 
                    p.PRODUTO,
                    ic.QUANTIDADE,
                    p.PRECO
                    FROM Itens_carrinhos ic
                    JOIN Produtos p 
                    ON p.CODIGO = ic.COD_PRODUTO
                    JOIN Carrinhos c 
                    ON c.COD_CARRINHO = ic.COD_CARRINHO
                WHERE c.USUARIO = 'godothalya'; = %s
        """, [usuario])
    
    resultado = cursor.fetchall()
    conexao.close()
    return resultado