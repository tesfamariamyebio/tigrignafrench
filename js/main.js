
function btn(){
    document.getElementById("nav").style.width="250px";
    document.getElementById("nav").style.height="700px";
    document.getElementById("name").style.marginLeft="250px";
    document.getElementById("dev").style.marginLeft="250px";
    document.getElementById("name").style.color='white';
    document.getElementById("dev").style.color='orange';
    document.getElementsByClassName("namedev").style.textTransform='capitalize';
}
function cls(){
    document.getElementById("nav").style.width="0";
  
}
function x(){
    document.getElementById("name").style.color='red';
}
function expe(){
    document.getElementById("name").style.color='orange';
}

$(document).ready(function(){
  $(".click").click(function(){
          $("#name").css("color","white");
  });
});
//  document.querySelector('.click').onclick=function(){
//     document.querySelector('#name').style.color='red';
//  }
$(document).ready(function(){
    $('.exe').click(function(){
        $("#name").css("color","green");
        $("#name").css("marginLef","50px");
      
    });
});
document.querySelector('.exe').onclick=function(){
    document.querySelector("#name").css('color','red');
}

// $(document).ready(function(){
// $(".pronom").click(function(){
//     $(".pronomtable").show();
// $(".pronomtable").css("width","500px");
// $(".pronomtable").css("marginLeft","0px");
// $(".pronomtable").css("height","500px");
// $(".pronomtable").css("color","red");
// });
// });

document.querySelector('.pronom').onclick=function(){
    document.querySelector('.pronomtable').css("color","red");
}