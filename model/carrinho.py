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

def inserir_item(usuario, cod_produto, disponibilidade):
    conexao, cursor = conectar()
    cursor.execute("""
               SELECT COD_ITENS_CARRINHOS
                FROM Itens_Carrinhos, Carrinhos
                WHERE Itens_Carrinhos.COD_CARRINHO = Carrinhos.COD_CARRINHO
                AND Carrinhos.USUARIO = %s
                AND Carrinhos.FINALIZADO = 0
                LIMIT 1;""", [usuario])
    
    resultado_carrinho = cursor.fetchone()

    if resultado_carrinho:
        codigo_carrinho = resultado_carrinho["COD_CARRINHO"]
    else:
        cursor.execute("""INSERT INTO Carrinhos (usuario)
                       VALUES (%s);""", [usuario])
        
        codigo_carrinho = cursor.lastrowid()

        cursor.execute("""
                    INSERT INTO Itens_Carrinhos 
                    (COD_CARRINHO, COD_PRODUTO, QUANTIDADE)
                    VALUES (%s, %s, %s);""", [codigo_carrinho, cod_produto, disponibilidade])
        
        conexao.commit()
    conexao.close()