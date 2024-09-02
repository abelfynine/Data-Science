# Directorios

# Crea un carpeta
Dir.mkdir("carpeta_ruby")

#Comprueba si existe la carpeta
if Dir.exist?("carpeta_ruby")
  puts "La carpeta ya existe"
else
  puts "La carpeta no existe"
end

# Lista todos los directorios y archivos dentro del directorio actual
directorios = Dir.children("./")
# Itera sobre cada elemento del array directorios
# Imprime el nombre de cada directorio o archivo
directorios.each do |directorio|
  puts directorio
end

# Borrar carpeta
Dir.rmdir("carpeta_ruby")

# Muestra el directorio de trabajo actual
puts Dir.pwd