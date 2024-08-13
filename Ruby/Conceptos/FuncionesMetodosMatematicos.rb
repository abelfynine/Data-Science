#FuncionesMetodosMatematicos

# Importa el módulo Math para poder usar funciones matemáticas avanzadas.
include Math

# Calcula la raíz cuadrada de 25 y la guarda en la variable 'cuadrado'.
cuadrado = Math.sqrt(25)
# Imprime el resultado de la raíz cuadrada.
puts cuadrado

# Calcula 2 elevado a la potencia de 3 y lo guarda en la variable 'potencia'.
potencia = 2**3
# Imprime el resultado de la potencia.
puts potencia

# Calcula el seno de 90 grados (el valor está en radianes).
seno = Math.sin(90)
# Imprime el valor del seno.
puts seno

# Calcula el coseno de 90 grados (en radianes).
coseno = Math.cos(90)
# Imprime el valor del coseno.
puts coseno

# Calcula la tangente de 90 grados (en radianes).
tangente = Math.tan(90)
# Imprime el valor de la tangente.
puts tangente

# Asigna un número decimal a la variable 'numDec'.
numDec = 123.34
# Redondea 'numDec' al número entero más cercano y lo imprime.
puts numDec.round
# Redondea 'numDec' hacia arriba al número entero más cercano y lo imprime.
puts numDec.ceil
# Redondea 'numDec' hacia abajo al número entero más cercano y lo imprime.
puts numDec.floor

# Asigna un número negativo a la variable 'numNeg'.
numNeg = -5
# Obtiene el valor absoluto de 'numNeg' (convierte a positivo) y lo imprime.
puts numNeg.abs