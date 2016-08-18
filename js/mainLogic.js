
function buttonClick() {
    var el = document.getElementsByClassName('visited');
    var text = '';
    var value = '';
    if(el.length != 0) {
        text = el[0].text.replace(/[\r\n]/g, " ");
        value = $(".input").val();
    }
    else {
        el = document.getElementsByClassName('selected');
        text = el[0].text.replace(/[\r\n]/g, " ");
        value = $(".li-input").val();
    }
    if (text == '搜索') {
        urlLink("https://cn.bing.com/search?q=" + value);
        //window.open("http://cn.bing.com/search?q=" + document.getElementsByClassName('input')[0].value);
    } else if (text == '英文搜索') {
        urlLink("https://global.bing.com/search?q=" + value + "&setmkt=en-us&setlang=en-us&FORM=SECNEN");
        //window.open("http://global.bing.com/search?q=" + document.getElementsByClassName('input')[0].value + "&setmkt=en-us&setlang=en-us&FORM=SECNEN");
    } else if (text == '知乎') {
        //urlLink("https://www.zhihu.com/search?type=content&q=" + value);
        window.open("https://www.zhihu.com/search?type=content&q=" + value);
    } else if (text == '图片') {
        urlLink("https://cn.bing.com/images/search?q=" + value);
        //window.open("http://cn.bing.com/images/search?q=" + document.getElementsByClassName('input')[0].value);
    } else if (text == '视频') {
        urlLink("https://cn.bing.com/videos/search?q=" + value);
        //window.open("http://cn.bing.com/videos/search?q=" + document.getElementsByClassName('input')[0].value);
    } else if (text == '地图') {
        urlLink("https://ditu.amap.com/search?query=" + value);
        //window.open("http://ditu.amap.com/search?query=" + document.getElementsByClassName('input')[0].value);
    } else if (text == '文献') {
        $.ajax({
            url: 'http://epub.cnki.net/KNS/request/SearchHandler.ashx',
            dataType: 'JSONP',
            data: {
                action: '',
                NaviCode: '*',
                ua: '1.11',
                PageName: 'ASP.brief_default_result_aspx',
                DbPrefix: 'SCDB',
                DbCatalog: '中国学术文献网络出版总库',
                ConfigFile: 'SCDBINDEX.xml',
                db_opt: 'CJFQ,CJFN,CDFD,CMFD,CPFD,IPFD,CCND,CCJD,HBRD',
                txt_1_sel: 'FT$%=|',
                txt_1_value1: value,
                txt_1_special1: '%',
                his: 0,
                parentdb: 'SCDB',
                _: new Date(),
            },
            error: function () {
                urlLink("http://epub.cnki.net/kns/brief/brief.aspx?pagename=ASP.brief_default_result_aspx&dbPrefix=SCDB&dbCatalog=中国学术文献网络出版总库&ConfigFile=SCDBINDEX.xml&research=off&t=" + new Date() + "&keyValue=" + value + "&S=1");
                //window.open("http://epub.cnki.net/kns/brief/brief.aspx?pagename=ASP.brief_default_result_aspx&dbPrefix=SCDB&dbCatalog=中国学术文献网络出版总库&ConfigFile=SCDBINDEX.xml&research=off&t=" + new Date() + "&keyValue=" + document.getElementsByClassName('input')[0].value + "&S=1");
            }
        });
    } else if (text == '兴趣') {
        //urlLink("https://www.douban.com/group/search?cat=1019&q=" + value);
        window.open("https://www.douban.com/group/search?cat=1019&q=" + value);
    } else if (text == '微博') {
		window.open("http://s.weibo.com/weibo/" + value + "&Refer=STopic_box");
    } else if (text == '图书') {
        //urlLink("https://www.amazon.cn/s/ref=nb_sb_noss?__mk_zh_CN=亚马逊网站&url=search-alias%3Daps&field-keywords=" + value);
        window.open("https://www.amazon.cn/s/ref=nb_sb_noss?__mk_zh_CN=亚马逊网站&url=search-alias%3Daps&field-keywords=" + value);
    }
}
$("#input").bind('keydown', function (e) {
    var key = e.which;
    if (key == 13) {
        buttonClick();
    }
})

$(".li-input").bind('keydown', function (e) {
    var key = e.which;
    if (key == 13) {
        buttonClick();
    }
})

function urlLink(url) {
    var iframe = $("#crossWeb").attr("src",url);
    iframe.onload = function () {
        var data = iframe.contentWindow;
        alert(data);
    }
    if(!isNull($(".input").val()))
        $(".li-input").val($(".input").val());
    if(!isNull($(".visited").text()))
        $("#menu-text").text($(".visited").text());
    resizeBody();
    iframe.show();
}
function resizeBody() {
    $('body').layout({
    });
    $("#header").hide();
    $("#header").empty();
    $("#div-iframe").css("top", "0px");
    $("#div-iframe").height("100%");
    $("#row").show();
    $("#row").height("60px;");
    $(".icon-envelope").css("color", "#ffffff");
    $(".mb").css("color", "#ffffff");
}
function isNull(obj) {
    if (typeof(obj)=="undefined" || obj==0 || obj ==null) return true;
    return false;
}

function goBack() {
	location.href = "http://www.nobaido.com";
}
