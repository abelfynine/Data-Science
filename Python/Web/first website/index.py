from flask import Flask, render_template

app = Flask(__name__)

#creamos ruta para la pagina principal
@app.route('/')
def home():
    #retorna la plantilla html
    return render_template('home.html')

#creamos otra ruta
@app.route('/about')
def about():
    return render_template('about.html')

#Validacion para comprobar si estamos en el archivo principal
if __name__ == '__main__':
    app.run(debug=True)
