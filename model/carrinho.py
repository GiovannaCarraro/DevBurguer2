from database.conexao import conectar

def recuperar_carrinho(usuaio:str) ->list:
    conexao, cursor = conectar()
    cursor.execute("""
        """)
    
    resultado = cursor.fetchall()
    conexao.close()
    return resultado