// JavaScript Document
<!--time botton-->
day = new Date();
miVisit = day.getTime();
function clock() {
today = new Date();
hrNow = today.getHours();
mnNow = today.getMinutes();    
scNow = today.getSeconds();
miNow = today.getTime();
if (hrNow == 0) {
hour = 12;
ap = " AM";
} else if(hrNow <= 11) {
ap = " AM";
hour = hrNow;
} else if(hrNow == 12) {
ap = " PM";
hour = 12;
} else if (hrNow >= 13) {
hour = (hrNow - 12);
ap = " PM";
}
if (hrNow >= 13) {
hour = hrNow - 12;
}
if (mnNow <= 9) {
min = "0" + mnNow;
}
else (min = mnNow)
if (scNow <= 9) {
secs = "0" + scNow;
} else {
secs = scNow;
}
time = hour + ":" + min + ":" + secs + ap;
document.form.button.value = time;
self.status = time;
setTimeout('clock()', 1000);
}
function timeInfo() {
milliSince = miNow;
milliNow = miNow - miVisit;
secsVisit = Math.round(milliNow / 1000);
minsVisit = Math.round((milliNow / 1000) / 60);
alert("You have visited this page for "+ minsVisit + " minite "
+ secsVisit + " seconds");
}
document.write("<center><form name=\"form\">"
+ "<input type=button value=\"Click for info!\""
+ " name=button onClick=\"timeInfo()\"></form></center>");
onError = null;
clock();



<!--form validation-->
function validate_email(field,alerttxt)
{
with (field)
{
apos=value.indexOf("@");
dotpos=value.lastIndexOf(".");
if (apos<1||dotpos-apos<2) 
  {alert(alerttxt);return false;}
else {return true;}
}
}

function validate_required(field,alerttxt)
{
with (field)
{
if (value==null||value=="")
  {alert(alerttxt);return false;}
else {return true}
}
}


function validate_form(thisform)
{
with (thisform)
{
if (validate_required(Firstname,"Name must be filled out!")==false)
  {name.focus();return false;}
  
  if (validate_required(Lastname,"Name must be filled out!")==false)
  {name.focus();return false;}
 
  else if (validate_required(email,"Email must be filled out!")==false)
  {email.focus();return false;}

  else if (validate_email(email,"Not a valid e-mail address!")==false)
  {email.focus();return false;}
  
  else if (validate_required(phone,"Phone number must be filled out!")==false)
  {phone.focus();return false;}  
  
  else if (validate_required(message,"Message must be filled out!")==false)
  {message.focus();return false;}
  }
  
  alert("Your message has been sent successfully. Thanks!");
}


<!--pictures rolling-->
function $(id) { return document.getElementById(id); }
function addLoadEvent(func){
 var oldonload = window.onload;
 if (typeof window.onload != 'function') {
  window.onload = func;
 } else {
  window.onload = function(){
   oldonload();
   func();
  }
 }
}
function moveElement(elementID,final_x,final_y,interval) {
  if (!document.getElementById) return false;
  if (!document.getElementById(elementID)) return false;
  var elem = document.getElementById(elementID);
  if (elem.movement) {
    clearTimeout(elem.movement);
  }
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
  var xpos = parseInt(elem.style.left);
  var ypos = parseInt(elem.style.top);
  if (xpos == final_x && ypos == final_y) {
  return true;
  }
  if (xpos < final_x) {
    var dist = Math.ceil((final_x - xpos)/10);
    xpos = xpos + dist;
  }
  if (xpos > final_x) {
    var dist = Math.ceil((xpos - final_x)/10);
    xpos = xpos - dist;
  }
  if (ypos < final_y) {
    var dist = Math.ceil((final_y - ypos)/10);
    ypos = ypos + dist;
  }
  if (ypos > final_y) {
    var dist = Math.ceil((ypos - final_y)/10);
    ypos = ypos - dist;
  }
  elem.style.left = xpos + "px";
  elem.style.top = ypos + "px";
  var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
  elem.movement = setTimeout(repeat,interval);
}
function classNormal(iFocusBtnID,iFocusTxID){
 var iFocusBtns= $(iFocusBtnID).getElementsByTagName('li');
 var iFocusTxs = $(iFocusTxID).getElementsByTagName('li');
 for(var i=0; i<iFocusBtns.length; i++) {
  iFocusBtns[i].className='normal';
  iFocusTxs[i].className='normal';
 }
}
function classCurrent(iFocusBtnID,iFocusTxID,n){
 var iFocusBtns= $(iFocusBtnID).getElementsByTagName('li');
 var iFocusTxs = $(iFocusTxID).getElementsByTagName('li');
 iFocusBtns[n].className='current';
 iFocusTxs[n].className='current';
}
function iFocusChange() {
 if(!$('ifocus')) return false;
 $('ifocus').onmouseover = function(){atuokey = true};
 $('ifocus').onmouseout = function(){atuokey = false};
 var iFocusBtns = $('ifocus_btn').getElementsByTagName('li');
 var listLength = iFocusBtns.length;
 iFocusBtns[0].onmouseover = function() {
  moveElement('ifocus_piclist',0,0,5);
  classNormal('ifocus_btn','ifocus_tx');
  classCurrent('ifocus_btn','ifocus_tx',0);
 }
 if (listLength>=2) {
  iFocusBtns[1].onmouseover = function() {
   moveElement('ifocus_piclist',0,-400,5);
   classNormal('ifocus_btn','ifocus_tx');
   classCurrent('ifocus_btn','ifocus_tx',1);
  }
 }
 if (listLength>=3) {
  iFocusBtns[2].onmouseover = function() {
   moveElement('ifocus_piclist',0,-800,5);
   classNormal('ifocus_btn','ifocus_tx');
   classCurrent('ifocus_btn','ifocus_tx',2);
  }
 }
 if (listLength>=4) {
  iFocusBtns[3].onmouseover = function() {
   moveElement('ifocus_piclist',0,-1200,5);
   classNormal('ifocus_btn','ifocus_tx');
   classCurrent('ifocus_btn','ifocus_tx',3);
  }
 }
}
setInterval('autoiFocus()',5000);
var atuokey = false;
function autoiFocus() {
 if(!$('ifocus')) return false;
 if(atuokey) return false;
 var focusBtnList = $('ifocus_btn').getElementsByTagName('li');
 var listLength = focusBtnList.length;
 for(var i=0; i<listLength; i++) {
  if (focusBtnList[i].className == 'current') var currentNum = i;
 }
 if (currentNum==0&&listLength!=1 ){
  moveElement('ifocus_piclist',0,-403,5);
  classNormal('ifocus_btn','ifocus_tx');
  classCurrent('ifocus_btn','ifocus_tx',1);
 }
 if (currentNum==1&&listLength!=2 ){
  moveElement('ifocus_piclist',0,-804,5);
  classNormal('ifocus_btn','ifocus_tx');
  classCurrent('ifocus_btn','ifocus_tx',2);
 }
 if (currentNum==2&&listLength!=3 ){
  moveElement('ifocus_piclist',0,-1206,5);
  classNormal('ifocus_btn','ifocus_tx');
  classCurrent('ifocus_btn','ifocus_tx',3);
 }
 if (currentNum==3 ){
  moveElement('ifocus_piclist',0,0,5);
  classNormal('ifocus_btn','ifocus_tx');
  classCurrent('ifocus_btn','ifocus_tx',0);
 }
 if (currentNum==1&&listLength==2 ){
  moveElement('ifocus_piclist',0,0,5);
  classNormal('ifocus_btn','ifocus_tx');
  classCurrent('ifocus_btn','ifocus_tx',0);
 }
 if (currentNum==2&&listLength==3 ){
  moveElement('ifocus_piclist',0,0,5);
  classNormal('ifocus_btn','ifocus_tx');
  classCurrent('ifocus_btn','ifocus_tx',0);
 }
}
addLoadEvent(iFocusChange);


<!--switch styles-->
 function changeCSS(cssFile) {
 
        var oldlink = document.getElementsByTagName("link").item(0);
 
        var newlink = document.createElement("link")
        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", cssFile);
 
        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
      }
