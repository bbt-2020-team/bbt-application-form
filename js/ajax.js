function getRadio(obj) {
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked === true) {
            return obj[i].value;
        }
    }
    return null;
}

function sendMes() {

    var name = document.getElementById('name').value;
    var sex = getRadio(document.getElementsByName('sex'));
    var grade = getRadio(document.getElementsByName("grade"));
    var campus = document.getElementById('campus').value;
    var college = document.getElementById('college').value;
    //var dorm = document.getElementById('dorm').value;
    var telephone = document.getElementById('telephone').value;
    var departments = document.getElementById('departments').value;
    var time = document.getElementById('time').value;
    var introduction = document.getElementById('introduction').value;
    
    var data = {
        'name': name,
        'gender': sex,
        'grade': grade,
        'area': campus,
        'college': college,
        //'dorm': dorm,
        'phone': telephone,
        'department': departments,
        'faceTime': time,
        'introduction': introduction
    };
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://129.204.250.51/sendform', true);
    xmlhttp.setRequestHeader('Content-type', 'application/json');
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var response = xmlhttp.responseText;
            var RESPONSE = JSON.parse(response);
            var errcode = RESPONSE['errcode'];
            var errmsg = RESPONSE['errmsg'];
            if (errcode == 0) {
                document.getElementById('uWarn').innerHTML = errmsg;
                document.getElementById('uWarn').style.color = 'green';
            } else {
                document.getElementById('uWarn').innerHTML = errmsg;
                document.getElementById('uWarn').style.color = 'red';
            }
        } else {
            document.getElementById('uWarn').innerHTML = '请求失败';
            document.getElementById('uWarn').style.color = 'red';
        }
    }
}

document.getElementById('submit').addEventListener('click', sendMes);