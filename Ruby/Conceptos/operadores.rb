#Operadores
#Suma
resSum = 10 + 20
#Resta
resResta = 20 - 10
#Multiplicacion
resMult = 10 * 20
#Division
resDiv = 20 / 10
#Residuo de la división
resMod = 11 % 3
#Comparación de igualdad
resIgual = (10 == 10)
#Comparación de desigualdad
resDiferente = (10 != 10)
#Comparación de mayor que
resMayor = (10 > 5)
#Comparación de menor que
resMenor = (10 < 5)
#Comparación de mayor o igual que
resMayorIgual = (10 >= 5)
#Comparación de menor o igual que
resMenorIgual = (5 <= 5)
#Operación lógica AND
resAnd = true && false
#Operación lógica OR
resOr = true || false
#Operación lógica NOT
resNot = !true
#Asigna a res el valor 1.
res = 1
#Incrementa el valor de res en 1. Ahora res es 2.
res += 1
#Decrementa el valor de res en 1. Ahora res vuelve a ser 1.
res -= 1
puts res

#Operadores con Mayor precedencia.
#1. `**` (exponenciación)
#2. `+`, `-` (unarios)
#3. `*`, `/`, `%` (multiplicación, división, módulo)
#4. `+`, `-` (binarios)
#5. `<<`, `>>` (sesgado a la izquierda y sesgado a la derecha)
#6. `&` (AND bit a bit)
#7. `|`, `^` (OR bit a bit, XOR bit a bit)
#8. `<`, `<=`, `>`, `>=` (comparaciones)
#9. `==`, `!=`, `===`, `<=>` (comparaciones de igualdad)
#10. `&&` (AND lógico)
#11. `||` (OR lógico)
#12. `..`, `...` (rangos inclusivos y excluyentes)
#13. `? :` (operador ternario)
#14. `=~`, `!~` (coincidencia de expresiones regulares)
#15. `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` (asignación y asignación compuesta)