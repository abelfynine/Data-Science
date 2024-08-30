# Cadenas

# Cadena de comillas dobles
cadComillasDobles = "Esto es una cadena de comillas dobles"
# Cadena de comillas simples
cadComillasSimples = 'Esto es una cadena de comillas simples'

# Concatenación de las dos cadenas anteriores con una coma y un espacio
concatenacionCad = cadComillasDobles + ", "+ cadComillasSimples
puts concatenacionCad

# Creación de una cadena usando el método de clase String.new
cadString = String.new("Creando cadena usando la clase")
puts cadString

# Interpolación de cadenas para insertar el valor de la variable nombre en otra cadena
nombre = "Juan"
puts "Hola #{nombre}"

# Reemplazo de texto en una cadena
cad = "Cambia la palabra: 'texto'"
puts cad
puts cad.sub('texto', 'remplazado')

# Eliminación de todas las vocales en la cadena
puts cad.delete('aeiou')

# Búsqueda de la posición de la palabra
indexPalabra = cad.index("palabra")
puts indexPalabra

# Obtener la longitud de la cadena
puts cad.length()

# Verificación si la cadena está vacía
puts cad.empty?

# Conversión de la cadena a mayúsculas
puts cad.upcase

# Comparaciones de Cadenas
cad1 = "hola"
cad2 = 'hola'
cad3 = "Hola"
cad4 = "mundo"

# Comparación de igualdad entre cadenas
puts cad1 == cad2
puts cad1 == cad3

# Comparación de desigualdad entre cadenas
puts cad1 != cad3

# Comparación de orden lexicográfico entre cadenas
puts cad4 > cad1

# Inversión de la cadena
puts cad4.reverse

# Listado de todos los métodos disponibles para el objeto de cadena
puts cad.methods