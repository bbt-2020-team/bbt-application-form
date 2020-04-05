from app import app
from flask import request, session
from database import createApplicant,checkPhone

@app.route('/sendform', methods=['POST'])
def keepform():
    data = request.get_json()
    name=data['name']
    gender=data['gender']
    grade=data['grade']
    college=data['college']
    dorm=data['dorm']
    phone=data['phone']
    firstWish=data['firstWish']
    secondWish=data['secondWish']
    faceTime=data['faceTime']
    adjustment=data['adjustment']
    
    result = checkPhone(phone)
    if (result['phoneLength']==True):
        if(result['uniqueness']==False):
            return {
            'errcode': 400,
            'errmsg': '该手机已被填写'
            }, 400
    elif(result['phoneLength']==False):
        return{
            'errcode': 400,
            'errmsg': '手机号格式不正确'
            }, 400


    rowcount = createApplicant(name,gender,grade,college,dorm,phone,firstWish,secondWish,adjustment,faceTime)
    if rowcount > 0:
        return {
            'errcode': 0,
            'errmsg': '报名成功'
        }, 200
    
    return {
        'errcode': 400,
        'errmsg': '请检查网络或其他设置'
    }, 400
