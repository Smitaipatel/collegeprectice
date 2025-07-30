from flask import Flask, request, render_template_string
import pyodbc

app = Flask(__name__)

conn_str = (
    'DRIVER={ODBC Driver 18 for SQL Server};'
    'SERVER=DESKTOP-65JLCDI\SQLEXPRESS;'
    'DATABASE=SmitPractical;'
    'Trusted_Connection=yes;'
)
# HTML template with form
form_html = '''
<!DOCTYPE html>
<html>
<head><title>Contact</title></head>
<body>
    <h2>Contact Form</h2>
    <form method="POST">
        <label>Name:</label><br>
        <input type="text" name="name" required><br>
        <label>Email:</label><br>
        <input type="email" name="email" required><br>
        <label>Message:</label><br>
        <textarea name="message" rows="4" required></textarea><br><br>
        <button type="submit">Submit</button>
    </form>
    <p>{{ msg }}</p>
</body>
</html>
'''

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

    return render_template_string(form_html, msg=msg)

if __name__ == '__main__':
    app.run(debug=True)
