#Variables

#Constante
miConstante = "Hola soy una constante"

#Ruby y tipado dinamico de variables
#Declarar una variable
var1 = 100
#Asignacion paralela
a = 10
b = 20
c = 30

a, b, c = 10,20,30

#Identificacion de un tipo de variable
puts var1.kind_of? Integer
puts a.class

# Cambiar el tipo de una variable
var2 = 1000
var2 = "Hola"
puts var2.class

# Conversion de valores de variables
num = 100
puts num.to_f
cadena = num.to_s
puts cadena.class

#Alcance de variables
#varLocal
varLocal = 10
#varGlobal usando $
$varGlobal = 10
#var Instancia usando @
@varInstancia = 10
#var constantes son con Mayusculas
VARCONSTANTES = 10
puts defined? varLocal
puts defined? $varGlobal
puts defined? @varInstancia
puts defined? VARCONSTANTES

# Una Clase en Ruby
class VarClass
  #varGlobal usando @@
  @@varClase = 10
#Para acceder a la variable de clase desde fuera de la clase, se define un método de clase que la retorne.
  def self.mostrarVarClase
    puts defined? @@varClase
  end
end

puts VarClass.mostrarVarClase
