 document.querySelector('verb').onclick=function(){
   document.querySelector('verb').style.backgroundColor='red';
}
console.log('heloow');
$(document).ready(function(){
    $(".verb").click(function(){
        $(".verb").css("background-color","red");
    });
});

$(document).ready(function(){
$('#1tes').click(function(){
  $('#2tes').css("display","block");
});
});
// $(document).ready(function(){
// $(".pr").click(function(){
//     $("#pronomtable").css('display','block');
// $("#pronomtable").css("width","500px");
// $("#pronomtable").css("marginLeft","0px");
// $("#pronomtable").css("height","500px");
// $("#pronomtable").css("color","red");
// });
// });

// document.querySelector('.pr').onclick=function(){
//   document.querySelector('#pronomtable').css("display","block");
// }



/* for pronnouns*/
function pronom(){
  document.getElementById("pronomtable").style.display="block";
  document.getElementById("pronomtable").style.width="100%";
  document.getElementById("pronomtable").style.height="100%";
  document.getElementById("pronomtable").style.lineHeight="30px";
  document.getElementById("pronomtable").style.backgroundColor="#ccc";
  document.getElementById("pronomtable").style.fontSize="20px";
  document.getElementById("pronomtable").style.marginLeft="0";
 
 
}
function m(){
  document.getElementById("pronomtable").style.display="none";

}
