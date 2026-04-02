from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def pagina_inicial():
    return render_template("index.html")

@app.route("/produto")
def pagina_produto():
    return render_template("produto.html")

app.run(debug=True)