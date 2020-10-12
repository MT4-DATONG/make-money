
//define copy wx number variable
var defaultWx = '+852 9212 5362';
var wxArray = ['+852 9212 5362','+852 9212 5362','+852 9212 5362','+852 9212 5362'];
var whatAppUrl = 'https://wa.me/85292125362';
var defaultIndex = 0;
var switchSecond = 5;
var isFirst = false;
var wxElement = document.getElementById('wx');
var article = document.getElementById('article');
var wxs = document.getElementsByClassName('wxNum');

var int = window.setInterval(wxSwitch,1000*switchSecond);

//initial load method
window.onload = (function () {
  wxElement.innerHTML = wxArray[defaultIndex];
  article.innerHTML = wxArray[defaultIndex];
  for(var i = 0; i < wxs.length; i++) {
    wxs[i].innerHTML = defaultWx;
  }
});

function copyArticle(id){
  const range = document.createRange();
  range.selectNode(document.getElementById(id));

  const selection = window.getSelection();
  if(selection.rangeCount > 0) selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand('copy');


  window.parent.open(whatAppUrl, '_blank');
}

// document.getElementById('copy').addEventListener('click', copyArticle, false);

//this method order to copy current show wx number
function wxSwitch() {
  defaultIndex ++;
  if(isFirst) {
    isFirst = false;
    defaultIndex --;
  }
  wxElement.innerHTML = wxArray[defaultIndex];
  article.innerHTML = wxArray[defaultIndex];
  if(defaultIndex === wxArray.length -1) {
    defaultIndex = 0;
    isFirst = true;
  }
}

window.onbeforeunload= (function(e){
  clearInterval(int);
});

function closeP() {

  var wx = document.getElementById("wechat");

  var wxb = document.getElementById("wechatBox");

  wx.style.display = "none";

  wxb.style.display = "none";

}

function popup() {

  window.parent.open(whatAppUrl, '_blank');
  // window.location.href = whatAppUrl;
  // var wx = document.getElementById("wechat");
  //
  // var wxb = document.getElementById("wechatBox");
  //
  // wx.style.display = "block";
  //
  // wxb.style.display = "block";

}
