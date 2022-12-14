
  $(document).ready(function() {    
    $("body").css("opacity", "1");


    // Burger handler ////////////////////////
    let cliked=true;

    $("#burger").click(function(){
      if(!cliked){

          cliked=true;
          $(".burger_ul").css('display','none')
          $('.first_page').css('display','block')
          $('.page2').css('display','block')
          $('.text_oblast_container').css('display','flex')
          $('.page4').css('display','block')
         

      } else if(cliked){
        
         
          $('.burger_ul').css('visibility','visible')
       
          $('.burger_ul').css('display','block')
          $('.burger_ul li').css('margin-bottom','30px')
          $('.burger_ul li a').css('font-size','20px')
          $('.burger_ul li a').css('line-height','20px')
          $('.burger_ul li').css('margin-top','20px')
          
          $('.first_page').css('display','none')
          $('.page2').css('display','none')
          $('.text_oblast_container').css('display','none')
          $('.page4').css('display','none')
          cliked=false;
          console.log(cliked)
      }

    });

  });

  

// responsive block for oblast hovering

  $('.oblast').mouseover(function(){
    
    $(this).css("fill","rgba(74, 245, 23,0.6)");

    let idHovered = $(this).attr('id');
    let idText = $(`a#${idHovered}`);
    console.log(idText)
    $(idText).css("color","rgba(74, 245, 23,1)");
    $(idText).css("transition","0.5s");
    $(idText).css("font-weight","bold");
    $(idText).css("font-size","30px");
  })

  $('.oblast').mouseout(function(){
    let idHoveredout = $(this).attr('id');
    let idTextout = $(`a#${idHoveredout}`);
    
    $(idTextout).css("color","white");
    $(idTextout).css("transition","0.5s");
    $(idTextout).css("font-weight","normal");
    $(idTextout).css("font-size","20px");

    $(this).css("fill","rgba(195, 197, 194, 0.5)");
  })




// responsive block for text hovering

let windowWidth = $(window).width();


if(windowWidth>992){
  $('.text_oblast_container ul li a').mouseover(function(){
    let idHoveredTextOn = $(this).attr('id');
    let idOblast = $(`.map_ukraine #${idHoveredTextOn}`);
    $(this).css("color","rgba(74, 245, 23,1)");
    $(this).css("transition","0.5s");
    $(this).css("font-weight","bold");
    $(this).css("font-size","30px");

    $(idOblast).css("fill","rgba(74, 245, 23, 0.6)");
  })

  $('.text_oblast_container ul li a').mouseout(function(){
    let idHoveredTextOn = $(this).attr('id');
    let idOblast = $(`.map_ukraine #${idHoveredTextOn}`);
    $(idOblast).css("fill","rgba(195, 197, 194, 0.5)");
    $(this).css("color","white");
    $(this).css("transition","0.5s");
    $(this).css("font-weight","normal");
    $(this).css("font-size","20px");
  })


} 

// Text click handler

$('.text_oblast_container ul li a').click(function(){
  let text = $(this).attr('id');
  let topAmount = $(`.oblast_block_info #${text}`).offset().top;
  console.log(topAmount)

  $('html').scrollTop(topAmount-130)
})





// Map click handler

$('.map_ukraine path').click(function(){
  let oblastId = $(this).attr('id');
  let topMapAmount = $(`.oblast_block_info #${oblastId}`).offset().top;
  console.log(topMapAmount)

  $('html').scrollTop(topMapAmount-130)
})






//Swiper function

new Swiper('.swiper',{
  effect:'flip',
  allowTouchMove:false,
  speed:1500,
  navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev'
  },
  pagination:{
      el:'.swiper-pagination',
      clickable:true,
      type:'bullets',
  },
});






// Back button handler

  //appearance of button

  $(window).scroll(function(){
    let scrollAmount= $(window).scrollTop();
  if(scrollAmount>600){
    $('.back_btn').css('display','block')
  } else if (scrollAmount<600){
    $('.back_btn').css('display','none')
  }
  })

  // Back button click handler

  $('.back_btn').click(function(){
    $('html').scrollTop(0)
  })

//






// Quiz section /////////////////////////////////////////////////////

const imagesCollection = [
  {
    img:'images/Oblast/Chernivtsi1.jpg',
    answers:{
      first:'Kyiv oblast',
      second:'Chernivtsi oblast',
      third:'Kharkiv oblast',
    },
    correctAnswer:'Chernivtsi oblast',
  },

  {
    img:'images/Oblast/Crimea1.jpg',
    answers:{
      first:'Crimea',
      second:'Zararpattia oblast',
      third:'Odesa oblast',
    },
    correctAnswer:'Crimea',
  },

  {
    img:'images/Oblast/Kherson3.png',
    answers:{
      first:'Zhytomyr oblast',
      second:'Kirovograd oblast',
      third:'Kherson oblast',
    },
    correctAnswer:'Kherson oblast',
  },

  {
    img:'images/Oblast/Donetsk2.jpg',
    answers:{
      first:'Donetsk oblast',
      second:'Volyn oblast',
      third:'Poltava oblast',
    },
    correctAnswer:'Donetsk oblast',
  },

  {
    img:'images/Oblast/Khmelnytskyi3.jpeg',
    answers:{
      first:'Sumy oblast',
      second:'Khmelnytskyi oblast',
      third:'Zararpattia oblast',
    },
    correctAnswer:'Khmelnytskyi oblast',
  },

  {
    img:'images/Oblast/Zakarpattia3.jpg',
    answers:{
      first:'Zakarpattia oblast',
      second:'Kyiv oblast',
      third:'Vinnytsia oblast',
    },
    correctAnswer:'Zakarpattia oblast',
  }

]

let gameSession =[];
let counter=0;



let image=$('.quiz_container img');
// console.log(image)
let ulBlockLi = $('.quiz_answers li');
// console.log(ulBlockLi)
let answersText = $('.quiz_answers li label');
// console.log(answersText)
let answersInput = $('.quiz_answers li input');
// console.log(answersInput)



let questionNumber;
  

function questionCreator(){
  
  let newSrc = imagesCollection[counter].img;
  $(image).attr('src',`${newSrc}`)
  $('.counter').text(`Question ${counter+1}/${imagesCollection.length}`)
}
questionCreator();


function answersCteator(){
  let counteranswersCteator=0;
  for (key in imagesCollection[counter].answers){
    
    if(counteranswersCteator==0){
        $('#q1').text(`${imagesCollection[counter].answers[key]}`)
        counteranswersCteator++;
      } else if(counteranswersCteator==1){
        $('#q2').text(`${imagesCollection[counter].answers[key]}`)
        counteranswersCteator++;
    } else if(counteranswersCteator==2){
      $('#q3').text(`${imagesCollection[counter].answers[key]}`)
      counteranswersCteator++;
    }
  }
}
answersCteator();


function answerChecking(){
  document.getElementById('submit').addEventListener('click',function(event){
    event.preventDefault();

    if($('#first_q input').is(':checked')){
      if(($('#first_q label').text())==imagesCollection[counter].correctAnswer && counter<5){
        $('#first_q label').css('color','#4af517')
        $('#next').css('display','inline')
        $('.result').text("")
      } else{
        $('.result').text("Please revise material again!").css('color','red')
        $('label').css('color','black')
        $('#next').css('display','none')
        $('#submit').css('display','none')
      }
    }

    if($('#second_q input').is(':checked')  && counter<5){
      if(($('#second_q label').text())==imagesCollection[counter].correctAnswer){
        $('#second_q label').css('color','#4af517')
        $('#next').css('display','inline')
        $('.result').text("")
      }else{
        $('.result').text("Please revise material again!").css('color','red')
        $('label').css('color','black')
        $('#next').css('display','none')
        $('#submit').css('display','none')
      }
    }

    if($('#third_q input').is(':checked')  && counter<5){
      if(($('#third_q label').text())==imagesCollection[counter].correctAnswer){
        $('#third_q label').css('color','#4af517');
        $('#next').css('display','inline')
        $('.result').text("")
      }else{
        $('.result').text("Please revise material again!").css('color','red')
        $('label').css('color','black')
        $('#next').css('display','none')
        $('#submit').css('display','none')
      }
    } if(counter==5){
      $('#next').css('display','none')
      $('.counter').text(``)
      $('#submit').css('display','none')
      $('.result').text("Perfect! You an expert in Ukraine! Now more places are available for you.").css('color','#4af517')
      $('#more').css('display','block')
      
    }
    
    
  })
  
}
answerChecking()

  

function nextHandler(){
  document.getElementById('next').addEventListener('click',function(event){
    event.preventDefault();
    counter++;
    $('label').css('color','black');
    $('input').prop('checked', false); 

    if(counter<6){
      questionCreator();
      answersCteator();
      $('#next').css('display','none');
      answerChecking();
    } 
  })
}
nextHandler()


$('#bonus').hide()

function moreHandler(){
  
  document.getElementById('more').addEventListener('click',function(event){
    event.preventDefault();

    $('.quizBonus').show();
    let bonusAmount = $('.quizBonus').offset().top;
    $('html').scrollTop(bonusAmount)

  })
}
moreHandler()


