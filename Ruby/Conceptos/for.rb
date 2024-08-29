# For

# Utilizando un bucle for para iterar sobre un rango de números del 1 al 100
for num in 1..100 do 
  puts num
end

# Usar un bucle for para iterar sobre cada elemento del arreglo
for nombre in ["Ana", "Juan", "Luis", "María"] do
  puts "Hola, #{nombre}!"
end

# Usando el método times para repetir una acción un número específico de veces
5.times do
  puts "mensaje"
end

# Usando el método times con un bloque que toma un parámetro de índice
5.times do |i|
  puts "mensaje #{i}"
end

# Usando el método downto para contar hacia atrás desde 5 hasta 3
5.downto(3) do |i|
  puts "mensaje #{i}"
end

# Usando el método upto para contar hacia adelante desde 1 hasta 4
1.upto(4) do |i|
  puts "mensaje #{i}"
end