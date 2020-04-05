from werkzeug.security import generate_password_hash, check_password_hash

def encrypt(phoneNumber):
    return generate_password_hash(phoneNumber)

def checkPhoneNumber(phone, hashedphone):
    return check_password_hash(hashedphone, phone)
