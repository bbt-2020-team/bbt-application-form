var collegelist = new Array();
collegelist['北校'] = ['体育学院', '建筑学院', '工商管理学院(体尖)'];
collegelist['南校'] = ['材料科学与工程学院', '化学与化工学院', '轻工科学与工程学院', '食品科学与工程学院', '数学学院', '物理与光电学院', '经济与贸易学院', '计算机科学与工程学院', '生物科学与工程学院', '环境与能源学院', '软件学院', '工商管理学院(非体尖)', '公共管理学院', '马克思主义学院', '外国语学院', '法学院', '新闻与传播学院', '艺术学院', '设计学院', '医学院', '国际教育学院'];
collegelist['国际校区'] = ['机械与汽车工程学院', '土木与交通学院', '电力学院', '电子与信息学院', '自动化科学与工程学院', '微电子学院', '生物医学科学与工程学院', '分子科学与工程学院', '吴贤能智能工程学院'];

var departmentslist = new Array();
departmentslist['北校'] = ['行政部', '人力资源部', '综合新闻部', '频道资讯部', '视频部', '市场拓展部', '形象推广部', '技术部-代码组', '技术部-产品设计组', '视觉设计部'];
departmentslist['南校'] = ['综合管理部', '人力资源部', '综合新闻部', '编辑部', '视频部', '外联部', '策划推广部', '技术部-代码组', '技术部-设计组', '视觉设计部', '节目部-国语', '节目部-粤语', '节目部-英语'];
departmentslist['国际校区'] = ['行政部', '人力资源部', '综合新闻部', '频道资讯部', '视频部', '市场拓展部', '形象推广部', '技术部-代码组', '技术部-产品设计组', '视觉设计部'];



document.getElementById('campus').addEventListener('change', function () {
    var campus = document.getElementById('campus').value;
    var college = document.getElementById('college');
    college.innerHTML = ''; //空值
    for (var i in collegelist) {
        if (i == campus) {
            college.add(new Option('请选择'));
            for (var j in collegelist[i]) {
                college.add(new Option(collegelist[i][j], collegelist[i][j], null))

            }
        }
    }
    var campus = document.getElementById('campus').value;
    var departments = document.getElementById('departments');
    departments.innerHTML = ''; //空值
    for (var i in departmentslist) {
        if (i == campus) {
            departments.add(new Option('请选择'));
            for (var j in departmentslist[i]) {
                departments.add(new Option(departmentslist[i][j], departmentslist[i][j], null))
            }
        }
    }
})







