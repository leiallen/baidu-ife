/**
 * Created by Administrator on 2016/11/6 0006.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById('aqi-city-input').value.trim();
    var value = document.getElementById('aqi-value-input').value.trim();
    var cityRex = /^[A-Za-z\u4E00-\u9FA5]+$/;
    var valueRex = /^[1-9]\d*/;
    if(cityRex.test(city)){
        if(valueRex.test(value)){
            aqiData[city] = value;
        }else {
            alert('您输入的数据不规范，请输入整数');
        }
    }else {
        alert('您输入的城市不规范，请输入中英文字符');
    }
    console.log(aqiData);
    return aqiData;

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
   var aqiTable = document.getElementById('aqi-table');
    var html = '<tr><td>城市</td><td>空气质量</td><td>操作</tr>';
    for(city in aqiData){
        html+='<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td>删除</tr>';
    }
    aqiTable.innerHTML = html;

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    var Btn = document.getElementById('add-btn');
    Btn.onclick = function () {
        addBtnHandle();
    };

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();