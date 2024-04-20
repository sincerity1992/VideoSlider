# VideoSlider
WordPress
# Description
 In WordPress, Video Slider implement by using SliderView.
 Insert Slider and import images and edit Properties (you can add Video URL in ALT property)
# Step
------------Video Slide----------
1)Make the Slider
SlideShow/All Sliders	->Create automatically [slideshow_deploy id='20707']
Create Slider and Import Images
Edit Properties
	URL: No input (If you Click the image , nothing happen)
	Alternative text: Video Address (if you click the "PLAY" button, then play video with address)
	   (ex: https://www.studiokappa.it/test/wp-content/uploads/2024/04/videosample2.mp4)


2)Snippet/Create SVideo1.js
You can see follow code (If you Add or Update code, you see //Change comments)
function wpb_demo_shortcode11() {  //Change function name wpb_demo_shortcode11()=>wpb_demo_shortcode12()
</style><div onclick="myFunc1()" id = "playbutton">....//Change myFunc1=>myFunc2
	<div onclick="myFuncS1()"  id = "stopbutton"> //Change myFuncS1=>myFuncS2
....
function myHandler1(e) {		 //Change myHandler1=>myHandler2
			if(!e) { e = window.event; }
		
....
function myFunc1() {		
        anchors = document.getElementById("slidervideo11"); //Change "slidervideo11"=>"slidervideo12
        const el = anchors.querySelector("#myVideo");        
        if (el) {
            el.addEventListener("ended",myHandler1,false);   //Change myHandler1=>myHandler2
        }        		
...
add_shortcode('svideobutton1', 'wpb_demo_shortcode11'); //Change (svideobutton1=>svideobutton2, wpb_demo_shortcode11=>wpb_demo_shortcode12)



3)Design
Add Shotcode [slideshow_deploy id='20707']
Add Shortcode [svideobutton1]

-Design Code View (Shift+Alt+Ctrl+M)
You can see 
<div class="wp-block-group">
<!-- wp:shortcode -->
[slideshow_deploy id='20707']
<!-- /wp:shortcode -->
<!-- wp:shortcode -->
[svideobutton1]
<!-- /wp:shortcode -->
</div>

==> You change above code  (You use id in Snippet id = "slidervideo11")
<div class="wp-block-group" style = "width:33vw; position:relative"  id = "slidervideo11"> //Change 
<!-- wp:shortcode -->
[slideshow_deploy id='20707']
<!-- /wp:shortcode -->
<!-- wp:shortcode -->
[svideobutton1]
<!-- /wp:shortcode -->
</div>
