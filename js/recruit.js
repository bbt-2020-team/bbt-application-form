var collegelist = new Array();
collegelist = ['材料科学与工程学院', '化学与化工学院', '轻工科学与工程学院', '食品科学与工程学院', '数学学院', '物理与光电学院', '经济与贸易学院', '计算机科学与工程学院', '生物科学与工程学院', '环境与能源学院', '软件学院', '工商管理学院(非体尖)', '公共管理学院', '马克思主义学院', '外国语学院', '法学院', '新闻与传播学院', '艺术学院', '设计学院', '医学院', '国际教育学院'];

var departmentslist = new Array();
departmentslist = ['技术部', '策划推广部', '人力资源部', '综合管理部', '视觉设计部', '综合新闻部', '外联部', '节目部', '视频部', '编辑部'];


var college = document.getElementById('college');
var departments1 = document.getElementById('firstwish');
var departments2 = document.getElementById('secondwish');
for (var i in departmentslist) {
    departments1.add(new Option(departmentslist[i], departmentslist[i]))
}
for (var i in departmentslist) {
    departments2.add(new Option(departmentslist[i], departmentslist[i]))
}
for (var i in collegelist) {
    college.add(new Option(collegelist[i], collegelist[i]))
}
