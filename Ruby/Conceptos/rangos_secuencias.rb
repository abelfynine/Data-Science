#Rangos de secuencias
inclusivo = 1..10
exclusivo = 1...10
puts inclusivo.to_a
puts exclusivo.to_a

letras = ("a".."z")
puts letras.to_a

cadenas = ("cab".."car")
puts cadenas.to_a

puts letras.min
puts inclusivo.max
puts letras.include?("h")