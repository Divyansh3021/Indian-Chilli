from flask import Flask, render_template, request, url_for, redirect
import mysql.connector

mysql = mysql.connector.connect(host="localhost", user="root", password="", database="indian_chilli")

cursor = mysql.cursor()


app = Flask(__name__)


@app.route('/')
def get_data(methods=['GET','POST']):
    if request.method == "GET":
        print("heheheheheh")
        date = request.args.get('date')
        dish = request.args.get('ordered-dish')
        print("Date is:", date)
        print("Dish is:", dish)
        query = "INSERT INTO guest_data (email, dish) VALUES (%s, %s)"
        val = ("divyansh3021@gmail.com", str(dish))
        cursor.execute(query, val)
        mysql.commit()

        search = "SELECT dish from guest_data where email = 'divyansh3021@gmail.com'"
        # param = ("dummymail3021@gmail.com")
        cursor.execute(search)
        result = cursor.fetchall()
        print("Length of result is: ", len(result))
        print("successful insertion")

        # else:
        #     print("insertion failed")
    # return "Your ordered ",dish," on ",date
    # else:
    return redirect("http://localhost:3000/loggedin")
        

if __name__ == "__main__":
    app.run(debug=True, port=3001)