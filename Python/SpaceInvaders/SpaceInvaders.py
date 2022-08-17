import math #Este módulo proporciona acceso a las funciones matemáticas
import os #modulo de sistema operativo
import random #aleatorio
import turtle #modulo para dibujar
#para agregar el audio al juego
import winsound
#===============================================================================
#Configurar la pantalla
wn = turtle.Screen()
wn.bgcolor("black")
wn.title("Space Invaders")
wn.bgpic("space_invaders_background.gif")
wn.tracer(0)

#Registra las formas
turtle.register_shape("invader.gif")
turtle.register_shape("player.gif")

#Dibujar borde
border_pen = turtle.Turtle()
border_pen.speed(0)
border_pen.color("white")
border_pen.penup()
border_pen.setposition(-351,-399)
border_pen.pendown()
border_pen.pensize(3)
for side in range(4):
	border_pen.fd(700)
	border_pen.lt(90)
border_pen.hideturtle()	

#Establecer la puntuación en 0
score = 0

#Dibuja la partitura
score_pen = turtle.Turtle()
score_pen.speed(0)
score_pen.color("white")
score_pen.penup()
score_pen.setposition(-350, 280)
scorestring = "Abelfy.     Score: %s" %score
score_pen.write(scorestring, False, align="left", font=("Arial", 14, "normal"))
score_pen.hideturtle()
#===============================================================================
'''
turtle es una biblioteca de Python preinstalada que permite 
a los usuarios crear imágenes y formas proporcionándoles un lienzo virtual. 
El lápiz en pantalla que usa para dibujar se llama tortuga y 
esto es lo que le da nombre a la biblioteca. 
'''
#Crea la tortuga jugador
player = turtle.Turtle()
player.color("blue")
player.shape("player.gif")
player.penup()
player.speed(0)
player.setposition(0, -250)
player.setheading(90)
player.speed = 15

#Elige varios enemigos
number_of_enemies = 30
#Create an empty list of enemies
enemies = []

#===============================================================================
#Añadir enemigos a la lista
for i in range(number_of_enemies):
	#Crear al enemigo
	enemies.append(turtle.Turtle())

enemy_start_x = -225
enemy_start_y = 250
enemy_number = 0

for enemy in enemies:
	enemy.color("red")
	enemy.shape("invader.gif")
	enemy.penup()
	enemy.speed(0)
	x = enemy_start_x + (50 * enemy_number) #50 veces de enemigos
	y = enemy_start_y 
	enemy.setposition(x, y)
	#Actualiza el número del enemigo
	enemy_number += 1 #incrementar
	if enemy_number == 10:
		enemy_start_y -= 50
		enemy_number = 0

enemyspeed = 0.2
#===============================================================================
#Crea la bala del jugador
bullet = turtle.Turtle()
bullet.color("yellow")
bullet.shape("triangle")
bullet.penup()
bullet.speed(0)
bullet.setheading(90)
bullet.shapesize(0.5, 0.5)
bullet.hideturtle()

bulletspeed = 7

#Definir estado de viñeta
#ready - listo para disparar
#fire - la bala está disparando
bulletstate = "ready"

#===============================================================================
#Mueve al jugador hacia la izquierda y hacia la derecha
def move_left():
	x = player.xcor()
	x -= player.speed
	if x < -280:
		x = - 280
	player.setx(x)
#===============================================================================	
def move_right():
	x = player.xcor()
	x += player.speed
	if x > 280:
		x = 280
	player.setx(x)
#===============================================================================	
def fire_bullet():
	#Declare estado de bala como global si es necesario cambiarlo
	global bulletstate
	if bulletstate == "ready":
		#este es el audio al momento de disparar
		winsound.PlaySound("laser.wav", winsound.SND_ASYNC)
		bulletstate = "fire"
		#Mueve la bala al justo encima del jugador
		x = player.xcor()
		y = player.ycor() + 10
		bullet.setposition(x, y)
		bullet.showturtle()
#===============================================================================
def isCollision(t1, t2):
	distance = math.sqrt(math.pow(t1.xcor()-t2.xcor(),2)+math.pow(t1.ycor()-t2.ycor(),2))
	if distance < 15:
		return True
	else:
		return False
#===============================================================================
#Crear enlaces de teclado
turtle.listen()
turtle.onkey(move_left, "Left")
turtle.onkey(move_right, "Right")
turtle.onkey(fire_bullet, "space")
#===============================================================================
#Bucle de juego principal
while True:
	wn.update()
	#move_player()
	
	for enemy in enemies:
		#Mover al enemigo
		x = enemy.xcor()
		x += enemyspeed
		enemy.setx(x)

		#Mueva al enemigo hacia atrás y hacia abajo
		if enemy.xcor() > 280:
			#Mueve a todos los enemigos hacia abajo
			for e in enemies:
				y = e.ycor()
				y -= 40
				e.sety(y)
			#Cambiar la dirección del enemigo
			enemyspeed *= -1
		
		if enemy.xcor() < -280:
			#Mueve a todos los enemigos hacia abajo
			for e in enemies:
				y = e.ycor()
				y -= 40
				e.sety(y)
			#Cambiar la dirección del enemigo
			enemyspeed *= -1
			
		#Compruebe si hay una colisión entre la bala y el enemigo
		if isCollision(bullet, enemy):
			winsound.PlaySound("explosion.wav", winsound.SND_ASYNC)
			#Restablecer la bala
			bullet.hideturtle()
			bulletstate = "ready"
			bullet.setposition(0, -400)
			#Restablecer al enemigo
			enemy.setposition(0, 10000)
			#Actualizar la puntuación
			score += 10
			scorestring = "Score: %s" %score
			score_pen.clear()
			score_pen.write(scorestring, False, align="left", font=("Arial", 14, "normal"))
		
		if isCollision(player, enemy):
			winsound.PlaySound("explosion.wav", winsound.SND_ASYNC)
			player.hideturtle()
			enemy.hideturtle()
			print ("Game Over")
			break

#===============================================================================		
	#Mueve la bala
	if bulletstate == "fire":
		y = bullet.ycor()
		y += bulletspeed
		bullet.sety(y)
	
	#Comprueba si la bala se ha ido arriba
	if bullet.ycor() > 275:
		bullet.hideturtle()
		bulletstate = "ready"

#===============================================================================
delay = raw_input("Press enter to finsh.")
