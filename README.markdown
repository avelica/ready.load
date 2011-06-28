============
ready.load.js — Simple html5 shim and script loader
============
 
This two part loader is designed to utilize jQuery but minimize the initial footprint for loading the site. Along with the standard html5 shim and some extra goodies makes this a great solution for your web toolbox.
 
Features
============

*   Small load footprint. Only 2kb plus your standard jQuery load.
*   Maximized load performance. Initial load is less then 1kb.
*   Standard html5 shim for older browsers.
*   No javascript class for CSS styles.
*   Browser specific CSS classes. (.webkit, .moz, .ie, .opera)
*   IE version classes. (.ie6, .ie7, etc.)
*   jQuery ready wrapper to define functionality before jQuery is loaded.
*   Script loader and callback to simplify your use of additional plugins.
*   Customizable autoload feature to load additional scripts based upon selectors and test functions.
*   Automated Layout specific scripts are loaded utilizing metatags.
*   Simplified Google Analytics configuration using metatags.

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