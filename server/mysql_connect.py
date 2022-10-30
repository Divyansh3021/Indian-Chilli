import mysql.connector

mysql = mysql.connector.connect(host="localhost", user="root", password="")

cursor = mysql.cursor()

cursor.execute('show databases')


"".join([chr(ord(secret_c) ^ ord(new_key_c)) for (secret_c,new_key_c) in zip(secret,new_key)])
