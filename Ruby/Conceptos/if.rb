# Condicional if

edad = 45

if edad >= 18 && edad < 60
  puts "Eres mayor de edad"
elsif edad >= 60
  puts "Eres un adulto mayor"
else
  puts "Eres menor de edad"
end

# Operador Ternario
# El operador ternario sigue la estructura: condición ? expresión_si_verdadero : expresión_si_falso.
msj = edad >= 18 && edad < 60 ? "Eres mayor de edad" : edad >= 60 ? "Eres un adulto mayor" : "Eres menor de edad"
puts msj