function wpb_demo_shortcode11() {   
	
	// Things that you want to do.
	$message = '
	<style>
	  #more {display: none;}
	  #playbutton {
		position: absolute;
		top: 40%;
		left: 42%;
		width: 70px;
		height: 50px;    
		z-index: 10;
		opacity:0.6;
	}
	#playbutton:hover { 
		opacity:1.0;
	}
	#myVideo {    
		position: relative;
		top: 0;
		left: 0;
		width: 330px;
		height: 200px;    
		z-index: 5;
        display: none;
	}
	#stopbutton {
		position: absolute;
		top: 48%;
		left: 48%;
		width: 30px;
		height: 20px;    
		z-index: 15;
		opacity:0.3;
		display: none;
	}
	#stopbutton:hover { 
		opacity:1.0;
	}
	</style><div onclick="myFunc1()" id = "playbutton"><img src = "https://www.studiokappa.it/test/wp-content/uploads/2024/04/playbutton.png" width = "70px" height = "50px" /></div>
	<div onclick="myFuncS1()"  id = "stopbutton"><img src = "https://www.studiokappa.it/test/wp-content/uploads/2024/04/stopbutton.png" width = "30px" height = "20px" /></div>	
    <video id="myVideo" controls="controls">
	  <source src="your_video_file.mp4" type="video/mp4">
	</video>
	<script type="text/javascript">
		var sliderControl;
		var anchors;		
        function myHandler1(e) {		
			if(!e) { e = window.event; }
			anchors.querySelector("#myVideo").style.display = "none";
			anchors.querySelector("#playbutton").style.display = "block";
			sliderControl.style.display = "block";
		}
		function myFuncS1()
		{
			anchors.querySelector("#stopbutton").style.display = "none";
			anchors.querySelector("#playbutton").style.display = "block";
			sliderControl.style.display = "block";        
			var videosrc = anchors.querySelector("#myVideo");
			videosrc.style.display = "none";
			videosrc.pause();			
		}
	  function myFunc1() {		
        anchors = document.getElementById("slidervideo11");
        const el = anchors.querySelector("#myVideo");        
        if (el) {
            el.addEventListener("ended",myHandler1,false);
        }        		
		var container1 = anchors.getElementsByClassName("slideshow_container");     
		sliderControl = container1[0];
		var viewslides = sliderControl.getElementsByClassName("slideshow_view");        
		var selI = -1;
		var ww = 0;
		var wh = 0;
		var dmax = 0.0;
		for (var i=0; i<viewslides.length; i++){		
			var disp = viewslides[i].style.display;
			var dtop = viewslides[i].style.top;
			var dNtop = parseInt(dtop);				
			if (isNaN(dNtop) == true || dNtop == 0)
			{			
				  var dopacity = parseFloat(viewslides[i].style.opacity);				  
				  if (isNaN(dopacity) == true)
				  {
					  dopacity = 0.1;
				  }			  
					if (dopacity >= dmax){
						dmax = dopacity;
						selI = i;
					}			
			}
		}	        
		if (selI != -1)
		{	 
		  var imgs = viewslides[selI].getElementsByTagName("img");
		  var videosrc = anchors.querySelector("#myVideo");	  
          var videoplysrc;         
          if (videosrc)
          {
            videoplysrc = videosrc.getElementsByTagName("source");
            videoplysrc[0].currentSrc = imgs[0].alt;
            videoplysrc[0].src = imgs[0].alt;
            ww = imgs[0].width;
            wh = imgs[0].height;
            var wh1 = anchors.style.height;
            var ww1 =  anchors.style.width;		  
            anchors.style.height = (wh + 20) + "px";
            anchors.style.height = wh1 + "px";
            anchors.style.width = ww1 + "px";
            videosrc.load();	  
            anchors.querySelector("#myVideo").style.width = ww + "px";
            anchors.querySelector("#myVideo").style.height = wh + "px";
            videosrc.play();    	 	  
            anchors.querySelector("#playbutton").style.display = "none";
            anchors.querySelector("#myVideo").style.display = "block";
            anchors.querySelector("#myVideo").style.position = "absolute";	  
            anchors.querySelector("#stopbutton").style.display = "block";	  
            anchors.querySelector("#stopbutton").style.position = "absolute";	
            sliderControl.style.display = "none";
          } 
		}
	}
	</script>';   
	// Output needs to be return
	return $message;
	}
	// register shortcode
	add_shortcode('svideobutton1', 'wpb_demo_shortcode11');
	
	
	
	