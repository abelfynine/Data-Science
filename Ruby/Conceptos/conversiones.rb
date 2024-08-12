#Clases de numeros y conversiones.

#Clase Integer: Es una clase abstracta que representa números enteros.
#Clase Fixnum: SubClass de Integer que representa números enteros pequeños que cabían en un espacio de memoria fijo.
#Clase Bignum: SubClass de Integer que representa números enteros grandes que no podían ser almacenados como Fixnum.
#Clase Float/Flotante: Representa números en punto flotante de doble precisión.
#Clase Rational/Racional: Representa números racionales como una fracción exacta de dos enteros (numerador/denominador).

# Conversiones entre Clases
# Float = Integer
num1 = 10.369
puts num1
puts Integer(num1)
# Cadena = Integer
cadena = "1369"
puts cadena
puts Integer(cadena)
# Hexadecimal = Integer
hexD = 0xA4f5D
puts "0x#{hexD.to_s(16).upcase}"
puts Integer(hexD)
# Octal = Integer
octal = 01231
puts "0#{octal.to_s(8).upcase}"
puts Integer(octal)
# Binario = Integer
binario = 0b10101
puts "0b#{binario.to_s(2).upcase}"
puts Integer(binario)
# Integer = Float
numInteger = 102
puts numInteger
puts Float(numInteger)
