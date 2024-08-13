#Herencia

# Definición de la clase base Vehicle
class Vehicle
  # El método initialize se llama automáticamente cuando se crea una nueva instancia de Vehicle.
  def initialize(make, model, year)
    # Marca del vehículo
    @make = make  
    # Modelo del vehículo
    @model = model 
    # Año del vehículo
    @year = year   
  end

  # Método para obtener una descripción del vehículo
  def description
    "#{@make} #{@model} #{@year}"
  end
end

# Definición de la clase Car que hereda de Vehicle
class Car < Vehicle
  def initialize(make, model, year, doors)
    # Llama al constructor de la clase base
    super(make, model, year)
    # Número de puertas en el coche
    @doors = doors            
  end

  # Sobrescribe el método description para incluir el número de puertas
  def description
    puts super + ", #{@doors} puertas"
  end
end

# Crear una instancia de la clase Car
myCar = Car.new("Toyota", "Corolla", 2024, 4)
myCar.description