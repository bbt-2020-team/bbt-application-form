from config import db
import mysql.connector

conn = mysql.connector.connect(host=db['host'], user=db['user'], passwd=db['passwd'], 
                                database=db['database'], charset='utf8mb4')
db = conn.cursor()

def createApplicant(name,gender,grade,college,dorm,phone,firstWish,secondWish,adjustment,faceTime):
    db.execute('insert into spring (`name`, `gender`, `grade`, `college`, `dorm`, `phone`, `firstWish`, `secondWish` ,`adjustment` ,`faceTime`) values (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)', (name,gender,grade,college,dorm,phone,firstWish,secondWish,adjustment,faceTime))
    conn.commit()
    return db.rowcount

def checkPhone(phone):
    db.execute('select * from spring where `phone`=%s',(phone,))
    result = db.fetchone()
    dictReturn=dict()
    uniqueness=(result==None)
    phoneLength=((len(phone)==11)and phone[0]=='1')
    if(phoneLength and uniqueness):
        dictReturn={'phoneLength':True,'uniqueness':True}
    elif((phoneLength==True)and(uniqueness==False)):
        dictReturn={'phoneLength':True,'uniqueness':False}
    elif((phoneLength==False)and(uniqueness==True)):
        dictReturn={'phoneLength':False,'uniqueness':True}
    else: dictReturn={'phoneLength':False,'uniqueness':False}
    return dictReturn
