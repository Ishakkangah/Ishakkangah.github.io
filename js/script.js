





// even pada saat link diketik
$('.page-scroll').on('click', function(e) {


	//ambil isi href
	var tujuan = $(this).attr('href');

	//tangkap element yang bersangkutan
	var elemenTujuan = $(tujuan);

	//pindahkan scrool
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000);

	e.preventDefault();

});






//paralex
//about
	$(window).on('load', function(){
		$('.pKiri').addClass('pMuncul');
		
	});	


	$(window).on('load', function(){
		$('.pKanan').addClass('pMuncul');
	})
//akhir about



$(window).scroll(function (){ 
	var wScroll = $(this).scrollTop();


	//Bagian Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate( 0px,'+ wScroll/4 +'% )'
	});

	$('.jumbotron h2').css({
		'transform' : 'translate( 0px, '+ wScroll/2 +'% )'
	});

	$('.jumbotron p').css({
		'transform' : 'translate ( 0px, '+ wScroll/10 + '% )'
	});
	// Akhir Jumbotron











	// Bagian Portfolio
	if ( wScroll > $('.portfolio').offset().top -100 ) {
		$('.portfolio .thumbnail').each( function(i) {

			setTimeout(function() {
		$('.portfolio .thumbnail').eq(i).addClass('muncul');

			}, 300 * (i+1) );

		});


			}
	// Akhir Portfolio



});





















