============
ready.load.js — Simplified shim and resource loader
============
 
Two part resource loader along with some html5 goodness.
 
Compatibility
============

What ever jQuery supports, this supports.

Usage
=====
 
Add the ready script to the &lt;head&gt; of your document.
 
    <script src="/scripts/ready.js"></script>
    
Then load jQuery and then the load script to the bottom of your document.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
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
 
Enjoy.
 
 
 
Credit
======
Copyright 2011, Don Selkirk ( http://avelica.com )
 
Thanks to HTML5BoilerPlate and HeadJS.