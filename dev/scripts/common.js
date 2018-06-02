////hamburger-button
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
////navigationMobile
$(document).ready(function(){
  $('.hamburger').click(function() {
    $('.hamburger').toggleClass('listActive');
    $('.list').toggleClass('listActive');
  });
});
////slider
$(function(){
		  var r = $('#first');
		  r.on('mouseenter',function(){
		    var p = r.val();
		    r.on('click',function(){
		      p = r.val();
		      bg(p);
		    });
		    r.on('mousemove',function(){
		      p = r.val();
		      bg(p);
		    });
		  });
		  function bg(n){
		      r.css({
		        'background-image':'-webkit-linear-gradient(left ,#fff 0%,#fff '+n+'%,#414042 '+n+'%, #414042 100%)'
		      });
		  }
		});
$(function(){
		  var r = $('#second');
		  r.on('mouseenter',function(){
		    var p = r.val();
		    r.on('click',function(){
		      p = r.val();
		      bg(p);
		    });
		    r.on('mousemove',function(){
		      p = r.val();
		      bg(p);
		    });
		  });
		  function bg(n){
		      r.css({
		        'background-image':'-webkit-linear-gradient(left ,#fff 0%,#fff '+n+'%,#414042 '+n+'%, #414042 100%)'
		      });
		  }
		});
$(function(){
		  var r = $('#third');
		  r.on('mouseenter',function(){
		    var p = r.val();
		    r.on('click',function(){
		      p = r.val();
		      bg(p);
		    });
		    r.on('mousemove',function(){
		      p = r.val();
		      bg(p);
		    });
		  });
		  function bg(n){
		      r.css({
		        'background-image':'-webkit-linear-gradient(left ,#fff 0%,#fff '+n+'%,#414042 '+n+'%, #414042 100%)'
		      });
		  }
		});
$(function(){
		  var r = $('#fourth');
		  r.on('mouseenter',function(){
		    var p = r.val();
		    r.on('click',function(){
		      p = r.val();
		      bg(p);
		    });
		    r.on('mousemove',function(){
		      p = r.val();
		      bg(p);
		    });
		  });
		  function bg(n){
		      r.css({
		        'background-image':'-webkit-linear-gradient(left ,#fff 0%,#fff '+n+'%,#414042 '+n+'%, #414042 100%)'
		      });
		  }
		});
$(function(){
		  var r = $('#fifth');
		  r.on('mouseenter',function(){
		    var p = r.val();
		    r.on('click',function(){
		      p = r.val();
		      bg(p);
		    });
		    r.on('mousemove',function(){
		      p = r.val();
		      bg(p);
		    });
		  });
		  function bg(n){
		      r.css({
		        'background-image':'-webkit-linear-gradient(left ,#fff 0%,#fff '+n+'%,#414042 '+n+'%, #414042 100%)'
		      });
		  }
		});
$(function(){
		  var r = $('#sixth');
		  r.on('mouseenter',function(){
		    var p = r.val();
		    r.on('click',function(){
		      p = r.val();
		      bg(p);
		    });
		    r.on('mousemove',function(){
		      p = r.val();
		      bg(p);
		    });
		  });
		  function bg(n){
		      r.css({
		        'background-image':'-webkit-linear-gradient(left ,#fff 0%,#fff '+n+'%,#414042 '+n+'%, #414042 100%)'
		      });
		  }
		});
$(function(){
		  var r = $('#seventh');
		  r.on('mouseenter',function(){
		    var p = r.val();
		    r.on('click',function(){
		      p = r.val();
		      bg(p);
		    });
		    r.on('mousemove',function(){
		      p = r.val();
		      bg(p);
		    });
		  });
		  function bg(n){
		      r.css({
		        'background-image':'-webkit-linear-gradient(left ,#fff 0%,#fff '+n+'%,#414042 '+n+'%, #414042 100%)'
		      });
		  }
		});
$(function(){
		  var r = $('#eighth');
		  r.on('mouseenter',function(){
		    var p = r.val();
		    r.on('click',function(){
		      p = r.val();
		      bg(p);
		    });
		    r.on('mousemove',function(){
		      p = r.val();
		      bg(p);
		    });
		  });
		  function bg(n){
		      r.css({
		        'background-image':'-webkit-linear-gradient(left ,#fff 0%,#fff '+n+'%,#414042 '+n+'%, #414042 100%)'
		      });
		  }
		});
    /////скролинг
    $(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});
