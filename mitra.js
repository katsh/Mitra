/*
 * A really basic javascript browser-side templating engine.
 * Uses mustache syntax as template. ie, {{name}}.
 * Mitra will look for the word inside {{ }} and look for that
 * word as key in the object passed to .render(). If found, it'll
 * replace. That's all there is to it, really. No loops of 
 * conditions. Left those out as sacrifice for speed. Maybe
 * one day it'll be implemented.
 */

var Mitra = (function(mitra) {
	
	"use strict";
	
	mitra.render = function(object) {
		
		/*
		 * Root - The root element where templating starts.
		 * Specify the root in the HTML by giving the element
		 * an ID of #mitra. Mitra will then look at every child
		 * of the root element for {{ }}. Any templating done
		 * on a parent of the root element will not be parsed.
		 * If an ID of #mitra isn't passed, we'll make the root
		 * be the <body> tag.
		 */
		var root = document.getElementById('mitra')
		? document.getElementById('mitra') 
		: document.getElementsByTagName('body')[0];
		

		/*
		 * Our regular expression. We're searching for 
		 * {{word}} on the html string
		 */
		var re = /{{(\S+)}}/g;

		/*
		 * The string where we will be performing the regex
		 */
		var htmlString = root.innerHTML

		/*
		 * Replace every match found with the value in the
		 * onbject. ie, if we found a {{name}}, our object
		 * should have a key with that name (ie {name:'john'}).
		 * Replace {{name}} with john.
		 */
		var parsedHtmlString = htmlString.replace(re, function(match, key) {
		    return object[key]
		});

	
		root.innerHTML = parsedHtmlString;
		
	}
	
	
	return mitra;


})(Mitra || {});
