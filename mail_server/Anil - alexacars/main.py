import smtplib
from email.message import EmailMessage
from email.utils import formataddr

# === Email Config ===
sender_email = "anubhavjaiswal1803@gmail.com"
sender_name = "Anubhav Jaiswal | FounDEV Studio"
app_password = "ghhk elsd uiis bqmd"
receiver_email = "sakshamjaiswalofficial@gmail.com"

# === Create EmailMessage ===
msg = EmailMessage()
msg['Subject'] = "Alexa Car Rental Platform – Project Documentation"
msg['From'] = formataddr((sender_name, sender_email))
msg['To'] = receiver_email

# === Load HTML Template ===
with open("email_template.html", "r", encoding="utf-8") as file:
    html_content = file.read()

msg.set_content("Please view this email in HTML format.")
msg.add_alternative(html_content, subtype='html')

# === Attach PDF ===
with open("Alexa_Car_Project_Documentation.pdf", "rb") as pdf:
    msg.add_attachment(pdf.read(), maintype='application', subtype='pdf', filename="Alexa_Car_Project_Documentation.pdf")

# === Send Email ===
try:
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(sender_email, app_password)
        smtp.send_message(msg)
    print("✅ Email sent successfully!")
except Exception as e:
    print(f"❌ Failed to send email: {e}")
