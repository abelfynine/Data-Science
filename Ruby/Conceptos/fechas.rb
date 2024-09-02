# Fechas

# Cargamos la biblioteca estándar para manejar fechas y horas en Ruby
require 'time'
# Cargamos ActiveSupport, una biblioteca de Ruby que amplía funcionalidades, especialmente para fechas y horas
require 'active_support/all'

# Muestra la fecha y hora actual del sistema
puts Time.now

# Crea un objeto DateTime a partir de una cadena de texto con una fecha específica
date = DateTime.parse("2024-08-31")
puts date

# Guarda la fecha y hora actual en la variable time
time = Time.now
# Suma un día a la fecha
sumDia = time + 1.day
# Suma una hora
sumHora = time + 1.hour
puts sumDia
puts sumHora

# Obtiene la zona horaria actual configurada
timeZone = Time.zone 
puts timeZone

# Crea un objeto de zona horaria usando ActiveSupport para la zona America/Los_Angeles
# Esto permite manejar fechas y horas en función de la zona horaria especificada
timeZoneActSupp = ActiveSupport::TimeZone.new("America/Los_Angeles")
puts timeZoneActSupp