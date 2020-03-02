/** time */
function datetime(){
    var today = new Date();
        //星期几显示
    var weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六",];
    var x = weekday[today.getDay()] //得到当前对应星期几
        //创建日期
    var a = today.toLocaleDateString();

        //创建时间，其实小于10的显示格式是0X;
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
        h = checktime(h);
        m = checktime(m);
        s = checktime(s);

    document.getElementById("timer").innerHTML =a+"&nbsp"+"&nbsp"+h+":"+m+":"+s+"&nbsp"+"&nbsp"+x;       

}
    datetime();
    setInterval(function() {datetime()},500);
//判断当前时间与10数字比较
function checktime(i){
        if(i<10){
            i = "0" + i;
        }
        return i;
}
