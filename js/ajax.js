function getRadio(obj) {
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked === true) {
            return obj[i].value;
        }
    }
    return null;
}

function checkErr(key, value, errmsg) {
    if (key === value) {
        errmsg.classList.add('show');
        return false;
    } else {
        errmsg.classList.remove('show');
        return true;
    }
}

function checkReg(reg, x1, errmsg) {
    if (x1 === '') {
        return
    } else {
        if ((reg.test(x1))) {
            errmsg.classList.remove('show');
            return true;
        } else {
            errmsg.classList.add('show');
            return false;
        }
    }

}

function sendMes() {
    //-------------------------------------------------------------------------
    var name = document.getElementById('name').value;
    var sex = getRadio(document.getElementsByName('sex'));
    var grade = getRadio(document.getElementsByName("grade"));
    //var campus = document.getElementById('campus').value;
    var college = document.getElementById('college').value;
    var dorm = document.getElementById('dorm').value;
    var telephone = document.getElementById('telephone').value;
    var firstwish = document.getElementById('firstwish').value;
    var secondwish = document.getElementById('secondwish').value;
    //var departments = document.getElementById('departments').value;
    var adjustment = getRadio(document.getElementsByName("adjustment"));
    var time = document.getElementById('time').value;
    var introduction = document.getElementById('introduction').value;
    //----------------------------------------------------------------------
    var errName = document.getElementById('errName');
    var errSex = document.getElementById('errSex');
    var errGrade = document.getElementById('errGrade');
    //var errCampus = document.getElementById('errCampus');
    var errCollege = document.getElementById('errCollege');
    var errDorm = document.getElementById('dorm');
    var errTelephone1 = document.getElementById('errTelephone1');
    var errTelephone2 = document.getElementById('errTelephone2');
    var errFirstwish = document.getElementById('errFirstwish');
    var errSecondwish = document.getElementById('errSecondwish');
    var errAdjustment = document.getElementById('errAdjustment');
    //var errDepartments = document.getElementById('errDepartments');
    var errTime = document.getElementById('errTime');
    //-------------------------------------------------------------------------
    var c1 = checkErr(name, '', errName);
    var c2 = checkErr(sex, null, errSex);
    var c3 = checkErr(grade, null, errGrade);
    //var c4 = checkErr(campus, '', errCampus);
    var c4 = checkErr(college, '', errCollege);
    var c5 = checkErr(dorm, '', errDorm);
    var c6 = checkErr(/^ *((C|c)([1-9]|1[0-9])|\W+|\W+[1-9]+) *(东|西)? *-? *[1-9][0-9]{2} */, dorm, errDorm)
    var c7 = checkErr(telephone, '', errTelephone1);
    var c8 = checkReg(/^1\d{10}$/, telephone, errTelephone2);
    //var c8 = checkErr(departments, '', errDepartments);
    var c9 = checkErr(time, '', errTime);
    //-------------------------------------------------------------------------
    if (c1 && c2 && c3 && c4 && c5 && c6 && c7 && c8 && c9) {
        var data = {
            'name': name,
            'gender': sex,
            'grade': grade,
            'college': college,
            'dorm': dorm,
            'phone': telephone,
            'firstWish': firstwish,
            'secondWish': secondwish,
            'faceTime': time,
            'adjustment': adjustment,
            'introduction': introduction
        };
        alert(JSON.stringify(data));
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', serverUrl, true);
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(JSON.stringify(data));
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var response = xmlhttp.responseText;
                var RESPONSE = JSON.parse(response);
                var errcode = RESPONSE['errcode'];
                var errmsg = RESPONSE['errmsg'];
                if (errcode == 0) {
                    window.location.href='../success.html'
                } else {
                    document.getElementById('uWarn').innerHTML = errmsg;
                    document.getElementById('uWarn').style.color = 'red';
                }
            } else {
                document.getElementById('uWarn').innerHTML = '请求失败';
                document.getElementById('uWarn').style.color = 'red';
            }
        }
    } else {

    }
}

document.getElementById('submit').addEventListener('click', sendMes);