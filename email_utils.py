import smtplib
import os
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

GMAIL_USER = os.getenv("GMAIL_USER")
GMAIL_PASS = os.getenv("GMAIL_PASS")

def send_email(name, email, message):
    msg = EmailMessage()
    msg["Subject"] = f"New Contact from {name}"
    msg["From"] = GMAIL_USER
    msg["To"] = GMAIL_USER
    msg.set_content(f"Name: {name}\nEmail: {email}\nMessage:\n{message}")

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(GMAIL_USER, GMAIL_PASS)
        smtp.send_message(msg)
