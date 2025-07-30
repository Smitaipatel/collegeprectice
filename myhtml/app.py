from flask import Flask, request, render_template
import pyodbc

app = Flask(__name__)

# SQL Server connection string
conn_str = (
    'DRIVER={ODBC Driver 17 for SQL Server};'
    'SERVER=DESKTOP-65JLCDI\SQLEXPRESS;'
    'DATABASE=SmitPractical;'
    'Trusted_Connection=yes;'
)

@app.route('/', methods=['GET', 'POST'])
def contact():
    msg = ""
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        try:
            conn = pyodbc.connect(conn_str)
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO ContactMessages (Name, Email, Message)
                VALUES (?, ?, ?)""", (name, email, message))
            conn.commit()
            cursor.close()
            conn.close()
            msg = "Form submitted successfully!"
        except Exception as e:
            msg = f"Error: {e}"

    return render_template("contact.html", msg=msg)

if __name__ == '__main__':
    app.run(debug=True)
