#OOP

# Definición de la clase Dog
class Dog
  # El método initialize se llama automáticamente cuando se crea una nueva instancia de Dog.
  def initialize(name, breed, age)
    # Asignamos los valores de los parámetros a variables de instancia.
    @name = name
    @breed = breed
    @age = age
  end

  # Método para obtener el nombre del perro
  def name
    @name
  end

  # Método para obtener la raza del perro
  def breed
    @breed
  end

  # Método para obtener la edad del perro
  def age
    @age
  end

  # Método para hacer que el perro ladre
  def bark
    puts "Woof! Woof!"
  end

  # Método para describir al perro
  def description
    puts "#{@name} es un #{@breed} y tiene #{@age} años."
  end
end

# Crear una instancia de la clase Dog
myDog = Dog.new("Lassie", "Collie", 3)

# Llamar a métodos en la instancia de Dog
myDog.bark                # Hace que el perro ladre
# Imprime el nombre del perro
puts myDog.name 
# Imprime la raza del perro
puts myDog.breed
# Imprime la edad del perro
puts myDog.age
# Imprime una descripción completa del perro
myDog.description         