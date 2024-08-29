# Case

dia = "lunes"
# Case de comparacion directa
case dia
when "lunes"
  puts "Es lunes"
when "martes"
  puts "Es martes"
when "miercoles"
  puts "Es miercoles"
when "jueves"
  puts "Es jueves"
when "viernes"
  puts "Es viernes"
when "sabado"
  puts "Es sabado"
when "domingo"
  puts "Es domingo"
else
  puts "No es un dia de la semana"
end

calific = 69
# Case con condiciones
case
when calific >= 90
  puts "A"
when calific >= 80
  puts "B"
when calific >= 70
  puts "C"
else
  puts "F"
end

# Case usando Rango
case calific
when 90..100
  puts "A"
when 80..89
  puts "B"
when 70..79
  puts "C"
else
  puts "F"
end