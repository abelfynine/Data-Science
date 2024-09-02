# Archivos

# Crear un archivo
# Comprueba si el archivo existe
# Ya que el metodo File.open
# Si el archivo ya existe, su contenido será sobrescrito
if File.exist?("archivo.txt")
  puts "El archivo existe"
else 
  # Abre o crea un archivo llamado archivo.txt en modo de escritura ('w')
  File.open("archivo.txt", "w") do |file|
    # Escribe una línea de texto en el archivo
    file.puts "Este es el contenido del archivo."

    # Escribe otra línea de texto en el archivo
    file.puts "Estamos aprendiendo a manipular archivos en Ruby."
  end

  # Mensaje para confirmar que el archivo se ha creado y el contenido se ha escrito
  puts "Archivo creado y contenido escrito exitosamente."
end

# Leer un Archivo
# Abre el archivo en modo de lectura
file = File.open("archivo.txt", "r")
# Lee el contenido del archivo
contenido = file.read()
# Cierra el archivo
file.close
# Imprime el contenido
puts contenido

# Abre y lee el archivo usando un bloque, que cierra automáticamente el archivo
File.open("archivo.txt", "r") do |file|
  contenido = file.read
  puts contenido
end

# Usando el metodo each_line para leer cada linea del archivo
# Abre el archivo archivo.txt en modo de lectura ('r')
File.open("archivo.txt", "r") do |file|
  # Lee cada línea del archivo y la imprime en la consola
  file.each_line do |line|
    puts line
  end
end

# Escribir en un archivo
# Con esto su contenido será sobrescrito
# Abre el archivo archivo.txt en modo de escritura ('w')
File.open("archivo.txt", "w") do |file|
  # Escribe una línea de texto en el archivo
  file.puts "Este es el nuevo contenido del archivo."
end

# Abre el archivo archivo.txt en modo apéndice
File.open("archivo.txt", "a") do |file|
  # Escribe el nuevo contenido al final del archivo
  file.puts("Este es el nuevo contenido que se añade al final.")
end

# Renombra el archivo
File.rename("archivo.txt", "newArchivo.txt")

# Retorna el tamaño del archivo, siempre es en bytes
sizeFile = File.size("newArchivo.txt")
puts "El tamaño del archivo es de #{sizeFile} bytes."

# Eliminar un archivo
File.delete("newArchivo.txt")