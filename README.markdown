============
ready.load.js — A light weight library to simplify and optimize your page load and functionality.
============
 
This two part library is designed to utilize jQuery but minimize the initial footprint for loading the site. Also take advantage of the streamlined HTML5 enabler, browser specific and viewport based classes, not to mention the automated polyfill. See the complete feature set below.
 
Features
============

*   Extremely Small load footprint. __Initial load is less than 1kb__.
*   Streamlined HTML5 shim for older browsers. Only what we used.
*   No javascript class for fallback CSS styles.
*   Browser specific CSS classes. (.webkit, .moz, .ie, .opera)
*   Predefined screen widtd based CSS classes. (.small, .medium, .large)
*   IE version classes. (.ie6, .ie7, etc.)
*   CSS class for usage with css3pie.com. (.pie) 
*   Utilize jQuery before its actually loaded.
*   Script loader simplify your use of additional plugins.
*   Automated and extendable polyfill feature to load additional scripts.
*   Automated Layout specific scripts are loaded utilizing metatags.
*   Simplified and very handy Google Analytics loader using metatags.

Usage
=====
 
Add the ready script to the &lt;head&gt; of your document.
 
    <script src="/scripts/ready.js"></script>
    
Then load jQuery and then the load script to the bottom of your document.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
    <script>!window.jQuery && document.write(unescape('%3Cscript src="/scripts/jquery.js"%3E%3C/script%3E'))</script>
    <script src="/scripts/load.js?v=1"></script>
  
Now anywhere you would normally use jQuery.ready your can simply use ready. The ready function passes the reference to jQuery to make your coding easier.

    ready(function($){
      $('a').hide();
    });
  
You can also do script loading as well.

    ready('/scripts/plugin.js',function($){
      $('a').plugin();
    });
    
Along with the standard html5 shim there are a few extra goodies.
 
Enjoy.
 
 
 
Credit
======
Copyright 2011, Don Selkirk ( http://avelica.com )
 
Thanks to HTML5BoilerPlate and HeadJS.