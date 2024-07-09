var shadowBoxInitialized = false;

$(function(){
	$(document).pjax('#navbar li a, #inductees li a, .bioColumn a','#pjax-container', {
		fragment: '#pjax-container'
	});

	$(document).on('pjax:send', function(){
		toggleContentOpacity();
	});

	$(document).on('pjax:complete', function(){
		toggleContentOpacity();
		pageLoad(false);
		$('.nav-collapse').collapse('hide');
	});

	$('#navbar li a').click(function(){
		$('.nav-collapse').collapse();
	});

	$('a.menu-btn').click(function(){
		$('.nav-collapse').collapse();
	});

	pageLoad(true);
});

function pageLoad(fullRefresh){
	var file = window.location.pathname.split('/')[1];
	toggleNavbarLink(file);

	if (!fullRefresh){
		toggleBillboard(file);
	}

	if (isHomePage(file)){		
		$('#gallery').imagesLoaded(function(){
			initGallery();
		});
	}
	if (isFoundersSeries(file)){
		$('#founders').imagesLoaded(function(){
			initVideos();
		});
	}

	if (isAbout(file)){
		initPhotosAbout();
	}

	if (isMedia(file)){
		initPhotosMedia();
	}

	if (!shadowBoxInitialized){
			Shadowbox.init();
			shadowBoxInitialized = true;
	}
	else{
			Shadowbox.setup('.foundersVideo a, .bio-video a');
		}
}

function toggleContentOpacity(){
	$('#pjax-container').toggleClass('show hide');
}

function toggleNavbarLink(file){	
	$('#navbar li a').each(function(){		
		var href = $(this).attr('href');
		if ((href == '/' && file == '') || (file != '' && file.indexOf(href) >= 0)){
			$(this).parent().addClass('active');
		}
		else{
			$(this).parent().removeClass('active');	
		}
	});
}

function toggleBillboard(file){
	if (isHomePage(file)){
		// home page
		$('.billboard').css('max-height', '500px');
		$('.billboard').css('opacity', '1');
	}
	else{
		// any other page
		$('.billboard').css('max-height', '0px');
		$('.billboard').css('opacity', '0');
	}
}

function initGallery(){
	// isotope
	var $inductees = $('.inductees');

	$inductees.isotope({
	  itemSelector : '.inductee',
	  layoutMode : 'fitRows'
	});

	$('#filters a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $inductees.isotope({ filter: selector });
	  return false;
	});

	$('select.filter').change(function(){
		$("select option:selected").each(function () {
			var selector = $(this).attr('data-filter');
			$inductees.isotope({ filter: selector });
			return false;
		});
	});

	// hoverdir
	$('#inductees > li').each(function(){ 
		$(this).hoverdir(); 
	});
}

function initVideos(){
	// isotope
	var $foundersVideo = $('.foundersVideos');

	$foundersVideo.isotope({
	  itemSelector : '.foundersVideo',
	  layoutMode : 'fitRows'
	});

	$('#filters a').click(function(){
	  var selector = $(this).attr('data-filter');
	  $foundersVideo.isotope({ filter: selector });
	  return false;
	});
	$('select.filter').change(function(){
		$("select option:selected").each(function () {
			var selector = $(this).attr('data-filter');
			$foundersVideo.isotope({ filter: selector });
			return false;
		});
	});
}

function isHomePage(file){
	return (file == "");
}

function isFoundersSeries(file){
	return (file.indexOf('founders') >= 0);
}

function isAbout(file){
	return (file.indexOf('about') >= 0);
}

function isMedia(file){
	return (file.indexOf('media') >= 0);
}

// TWITTER PLUGIN
jQuery(function($){
	$(".tweet").tweet({
	  join_text: "auto",
	  username: "entrepreneurhof",
	  avatar_size: 48,
	  count: 3,
	  filter: function(t){ return ! /^@\w+/.test(t.tweet_raw_text); },
	  loading_text: "loading tweets...",
	  template: "{text}"
	});
});

// FLICKR PLUGIN

function initPhotosAbout(){

	$.getJSON("http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=be58a8e94257fd0384521f22e4759fcb&user_id=40598240@N02&photoset_id=72157632009763509&per_page=6&format=json&jsoncallback=?", function(data){
			var list = $("<ul></ul>");
	        $.each(data.photoset.photo, function(i,photo){
		        var img_src = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "q.jpg";
		        var a_href = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "b.jpg";
		         var img = ("<a rel='shadowbox[Hall of Fame]' href='"+a_href+"'><img src='" + img_src + "'/></a>");
		        var li = $("<li/>").append(img);
		        $(list).append(li);
      		});
      		$(".photos").append(list);
      		Shadowbox.setup('.photos-about li a');
    });

}

function initPhotosMedia(){

	$.getJSON("http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=be58a8e94257fd0384521f22e4759fcb&user_id=40598240@N02&photoset_id=72157632009763509&per_page=8&format=json&jsoncallback=?", function(data){
			var list = $("<ul></ul>");
	        $.each(data.photoset.photo, function(i,photo){
		        var img_src = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "q.jpg";
		        var a_href = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "b.jpg";
		         var img = ("<a rel='shadowbox[Hall of Fame]' href='"+a_href+"'><img src='" + img_src + "'/></a>");
		        var li = $("<li/>").append(img);
		        $(list).append(li);
      		});
      		$(".photos").append(list);
      		Shadowbox.setup('.photos-media li a');
    });

}