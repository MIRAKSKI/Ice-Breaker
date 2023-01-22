
var x = setInterval(function() {
var now = new Date().getTime();
var distance = 24 - now;
var hours =Math.abs( Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
var minutes =Math.abs(( Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))+1);
var seconds = Math.abs((Math.floor((distance % (1000 * 60)) / 1000))+1);
if (hours == 24) {
  hours = 00;
    if (minutes<10) {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + "0" + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + "0" + minutes + " : " + seconds ;
      }
    }
    else {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        +  minutes + " : " + seconds ;
      }
    }
  }
else {
  if (hours <10) {
    if (minutes<10) {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + "0" + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + "0" + minutes + " : " + seconds ;
      }
    }
    else {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML ="0" + hours + " : "
        +  minutes + " : " + seconds ;
      }
    }
  }
  else {
    if (minutes<10) {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML = hours + " : 0" + minutes + " : 0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML = hours + " : 0" + minutes + " : " + seconds ;
      }
    }
    else {
      if (seconds<10) {
        document.getElementById("jackie").innerHTML = hours + " : " + minutes + " : " + "0" + seconds ;
      }
      else {
        document.getElementById("jackie").innerHTML = hours + " : " +  minutes + " : " + seconds ;
      }
    }
  }
}
}, 1000);
  function aa() {
    var butt =document.getElementById('butt1');
    var mun =document.getElementById('mun1');
    if (mun.style.display == "block") {
      mun.style.display = "none";
      butt.style.display = "block";
    }
    else if (mun.style.display == "none") {
      mun.style.display = "block";
      butt.style.display = "none";
    }
  }
  function ab() {
    var length = window.history.length;
    var I = Number(document.getElementById('I').value);
    var Y = Number(document.getElementById('Y').value);
    if (I > 1) {
          window.history.back();
          I=I-1;
          document.getElementById('I').value= I;
      }
      else if (I == 1) {
        document.getElementById('bot2').disabled = true;
        window.history.back();
        I=I-1;
        document.getElementById('I').value= I;
      }
      else {
        window.history.back();
        I=length-1;
        document.getElementById('I').value= I;
        document.getElementById('check2').click();
      }
      Y=Y+1;
      document.getElementById('bot01').disabled = false;
      document.getElementById('Y').value= Y;
  }
  function ac() {
    var Y = Number(document.getElementById('Y').value);
    var I = Number(document.getElementById('I').value);
    window.history.forward()
    Y=Y-1;
    if (Y == 0) {
      document.getElementById('bot01').disabled = true;
      document.getElementById('Y').value = Y;
    }
    else {
      document.getElementById('bot01').disabled = false;
      document.getElementById('Y').value = Y;
    }
    I=I+1;
    document.getElementById('bot2').disabled = false;
    document.getElementById('I').value = I;
  }
  function check() {
    var I = Number(document.getElementById('I').value);
    if (I==0){
      I=I+1;
      document.getElementById('I').value= I;
    }
    else {
      I=I+1;
      document.getElementById('I').value= I;
    }

    if (I >= 1) {
      document.getElementById('bot2').disabled = false;
    }
    else {
      document.getElementById('bot2').disabled = true;
    }
  }
  function check2() {
    var I = Number(document.getElementById('I').value);
    if (I >= 1) {
      document.getElementById('bot2').disabled = false;
    }
    else {
      document.getElementById('bot2').disabled = true;
    }
  }

  function aac() {
    var on2mm = document.getElementById('2master');
    var on1er = document.getElementById('1master');
    var on3em = document.getElementById('3em');
    var on2em = document.getElementById('2em');
    if (on3em.style.display=="none") {
      on3em.style.display= "block";
      on2mm.style.display= "none";
      on1er.style.display= "none";
      on2em.style.display= "none";
    }
    else {
      on2mm.style.display= "none";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
    }
    document.getElementById('hide').click();
  }

  function aad() {
    var on2mm = document.getElementById('2master');
    var on1er = document.getElementById('1master');
    var on3em = document.getElementById('3em');
    var on2em = document.getElementById('2em');
    if (on1er.style.display=="none") {
      on1er.style.display= "block";
      on2mm.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
    }
    else {
      on2mm.style.display= "none";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
    }
    document.getElementById('hide').click();
  }

  function aae() {
    var on2mm = document.getElementById('2master');
    var on1er = document.getElementById('1master');
    var on3em = document.getElementById('3em');
    var on2em = document.getElementById('2em');
    if (on2mm.style.display=="none") {
      on2mm.style.display= "block";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
      document.getElementById('hide').click();
    }
    else {
      on2mm.style.display= "none";
      on1er.style.display= "none";
      on3em.style.display= "none";
      on2em.style.display= "none";
      document.getElementById('hide').click();
    }

  }

  function hide() {
      var ons3 = document.getElementById('2s3');
      var ons4 = document.getElementById('2s4');
      var on2mm = document.getElementById('2master');
      var on1er = document.getElementById('1master');
      var on3em = document.getElementById('3em');
      var on2em = document.getElementById('2em');
      var ons5 = document.getElementById('3s5');
      var ons6 = document.getElementById('3s6');
      var ont3 = document.getElementById('2mmt3');
      var m2m1 = document.getElementById('2m1');
      var m2m2 = document.getElementById('2m2');
      var ont1 = document.getElementById('1ertr1');
      var ont2 = document.getElementById('1ertr2');
      var menu = document.getElementById('mun1');
      if (on2em.style.display=="none") {
        document.getElementById('2ems1').disabled = false;
        document.getElementById('2ems2').disabled = false;
        ons3.style.display = "none";
        ons4.style.display = "none";
        } else {
        // do nothing
      }
      if (on3em.style.display=="none") {
        document.getElementById('3ems5').disabled = false;
        document.getElementById('3ems6').disabled = false;
        ons5.style.display = "none";
        ons6.style.display = "none";
        }else {
        // do nothing
      }
      if (on1er.style.display=="none") {
        document.getElementById('1ert1').disabled = false;
        document.getElementById('2emt2').disabled = false;
        ont1.style.display = "none";
        ont2.style.display = "none";
        } else {
          // do nothing
      }
      if (ont3.style.display=="block") {
        ont3.style.display="none"
        m2m2.style.display="none"
        m2m1.style.display="block"
        } else {
        // do nothing
      }
      if (menu.style.display=="none") {
        document.getElementById('2ems1').disabled = false;
        document.getElementById('2ems2').disabled = false;
        ons3.style.display = "none";
        ons4.style.display = "none";
        document.getElementById('3ems5').disabled = false;
        document.getElementById('3ems6').disabled = false;
        ons5.style.display = "none";
        ons6.style.display = "none";
        document.getElementById('1ert1').disabled = false;
        document.getElementById('2emt2').disabled = false;
        ont1.style.display = "none";
        ont2.style.display = "none";
        ont3.style.display="none";
        m2m2.style.display="none";
        m2m1.style.display="block";
        on2em.style.display="none";
        on2mm.style.display="none";
        on3em.style.display="none";
        on1er.style.display="none";
        } else {
        // do nothing
      }
      }

  function b01() {
    document.getElementById('b01').click()
  }
  function b02() {
    document.getElementById('b02').click();
  }
  function b03() {
    document.getElementById('b03').click();
  }
  function b04() {
    document.getElementById('b04').click();
  }
  function b05() {
    document.getElementById('b05').click();
  }
  function b06() {
    document.getElementById('b06').click();
  }
  function b07() {
    document.getElementById('b07').click();
  }
  function b08() {
    document.getElementById('b08').click();
  }
  function home() {
    document.getElementById('bb').click();
    document.getElementById('aa').click();
  }
  function setto0() {
    document.getElementById('bot2').disabled = true;
    document.getElementById('bot01').disabled = true;
    Y=0;
    X=0;
    document.getElementById('Y').value = Y;
    document.getElementById('X').value = X;
  }
  var container = document.querySelector(".hoster");
  container.addEventListener('click', function (event) {
    var img = document.getElementById('IMG');
    var up = document.getElementById('up');
    var x = event.clientX;
    var y = event.clientY;
    var ball = document.querySelector(".holder");
    img.style.display = "none";
    up.style.display = "none";
    img.style.display = "block";
    up.style.display = "block";
    ball.style.position = "absolute";
    ball.style.left = `${x-15}px`;
    ball.style.top = `${y-15}px`;
    Y01 = y-15;
    X01 = x-15;
    document.getElementById('Y01').value = Y01;
    document.getElementById('X01').value = X01;
    var delayInMilliseconds = 900; //2.8 second

    setTimeout(function() {
      //your code to be executed after 2.8 second
      img.style.display = "none";
      up.style.display = "none";
    }, delayInMilliseconds);
  });
  var d = setInterval(function() {
  var ball = document.querySelector(".holder");
    var y = document.getElementById('Y01').value;
    var x = document.getElementById('X01').value;
    ball.style.position = "absolute";
    ball.style.left = `${x}px`;
    ball.style.top = `${y-2.5}px`;
    Y01 = y-5; //riseing up with 25 px each
    X01 = x;
    document.getElementById('Y01').value = Y01;
    document.getElementById('X01').value = X01;
  }, 45);
