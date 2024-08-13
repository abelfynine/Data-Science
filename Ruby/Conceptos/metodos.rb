#Metodos
def saludo()
  puts "Hola desde un metodo"
end

saludo

def multiplicar(num1, num2)
  result = num1 * num2
  puts result
end

multiplicar(10, 2)

#Metodo con argumentos no definidos
def nArgumentos(*args)
  args.each{|string|puts string}
end

nArgumentos("Verde")
nArgumentos("Verde", "Azul", "Rojo")

def suma(num1, num2)
  result = num1 + num2
  return result
end

puts suma(10, 20)

#Asignar un alias a un metodo
alias sum suma
res = sum(3, 3)
puts res