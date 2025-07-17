from flask import Flask, render_template, request, redirect, url_for
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

EMAIL_ADDRESS = "nykplumb@gmail.com"
EMAIL_PASSWORD = "your_password_here"
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/testimonials')
def testimonials():
    return render_template('testimonials.html')

@app.route('/case-studies')
def case_studies():
    return render_template('case-studies.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        msg = MIMEText(f"Name: {name}\nEmail: {email}\nMessage: {message}")
        msg['Subject'] = 'New Contact Form Submission - Plumbline HR'
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = EMAIL_ADDRESS
        try:
            with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
                server.starttls()
                server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
                server.send_message(msg)
            return redirect(url_for('index'))
        except Exception as e:
            return f"Error sending email: {str(e)}"
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
