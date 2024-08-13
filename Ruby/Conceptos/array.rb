#Array
miArray = []
elemento = [1,2,3,"cuatro",5,6,7]
puts elemento
puts elemento[5]
elemento[0] = "uno"
elemento[1] = "dos"
elemento[2] = "tres"
puts elemento

#Agregar un elemento al final del Array
elemento.push(8)
puts elemento
#Borrar un elemento al final del Array
elemento.pop()
puts elemento
#Agregar un elemento al inicio del Array
elemento.unshift(0)
puts elemento
#Ver el tamaño del Array
puts elemento.length
res = elemento.include?("cuatro")
puts res
#Saber el index de un elemento
indexElemento = elemento.index("tres")
puts indexElemento
#Crear un arreglo con cierto numero de elemento
arr = Array.new(10, "numero")
puts arr

#Concatenacion de Array
array1 = [10,20,30]
array2 = [40,50,60,70]
arrayConcatenacion = array1 + array2
puts arrayConcatenacion
arrayConcat = array1.concat(array2)
puts arrayConcat
arr1 = [10,20,30]
arr2 = ["a","b","c","d"]
arrayOperadorMenor = arr1 << arr2
arr1.push(*arr2)
puts arr1

#Interseccion de Array
arrNum1 = [1,2,3,4,5]
arrNum2 = [3,4,5,6,7]

#Solo muestra los elementos que se repiten en ambos arreglos
arrInterseccion = arrNum1 & arrNum2
arrIntersection = arrNum1.intersection(arrNum2)
puts arrIntersection

#Union de Array
#Devuelve un arreglo sin duplicados.
arrUnion = arrNum1 | arrNum2
arrayUnion = arrNum1.union(arrNum2)
puts arrayUnion

#Diferencia de Array
#Devuelve un arreglo que contiene solo los elementos de arrNum1 que no están en arrNum2.
arrDif = arrNum1 - arrNum2
#Devuelve un arreglo que contiene solo los elementos de arrNum2 que no están en arrNum1.
arrDiference = arrNum2.difference(arrNum1)
puts arrDiference