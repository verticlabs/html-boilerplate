# Vertic - Javascript Guidelines

This document contains the guidelines for front-end development with JavaScript at Vertic. The guidelines should be followed at any time, for any given project. A lot of our work is based on [jQuery](http://jquery.com/) and [AMD Modules](https://github.com/amdjs/amdjs-api/wiki) with [Require.js](http://requirejs.org/), so make sure to know your way around those libraries.

A large extent of our guidelines adhere to the [Pragmatic JS guidelines](https://github.com/madrobby/pragmatic.js) - which is released under the [MIT license](https://raw.github.com/madrobby/pragmatic.js/master/MIT-LICENSE). Please read those brief guidelines, as they are both sensible and easy to follow and so that you know where these guidelines are in line with Pragmatic JS, and where they deviate. 

Also, remember that this is a set of [guidelines](http://www.youtube.com/watch?v=b6kgS_AwuH0). So follow them closely at all times, but deviate if deemed necessary and/or prudent - not because you're lazy. AND, if and when you decide to deviate from them, make sure to comment it thoroughly, documenting _why_ and _how_. 

## TL:DR;

### Code style
* Use JSLint with our specified options.

		/*jslint browser: true, plusplus: true, vars: true, white: true, nomen:true*/
		/*global require: true, define: true*/

* Use long, descriptive variable and method names
* Use blank lines to separate "paragraphs" of code for readability
* `function name() { }` for named functions
* `(function () { }())` for self calling functions
* Any code block should have its starting parenthesis following the expression

		function something() {
			return "anything";
		}
		
* If you don't need to use a function twice make it an anonymous function
* Use short and concise expressions
* Always use curly brackets for single line `if`'s and friends

		if (expression) {
			// true
		} else {
			// falsy
		} 

* Use ternary when it is simple enough as to not make code difficult to understand
* If a source file is longer than 200 lines of code, think about splitting it up
* Write small concise functions that does just what it is expected to - nothing else
* Write commas in the end of the line
		var something = true,
			somethingElse = false;
			
		{
			something: true,
			somethingElse: false
		}

### Comments - TODO JSDoc3
All modules should begin with a defining comment block, such as this:

    /**
    * Module name
    * 
    * Here is a longer description of the module that potentially
    * can span over multiple lines.
    *
    * @section Framework/Library/Plugin/Project
    * @author ldeleuran
    * @modifiedby echristensen (can have multiple of these)
    */
    
Remember that comments is the best way to help your fellow developers.
NB: Single line comments on the line before
* Use comments to describe non-obvious code behavior (Don't do code description)
* Don't write comments that do not add to code understanding (Don't do code description)

### Performance - TODO

* Optimize for performance only if there's a measurable problem (Optimize algorithms, not code style)


## Code structure
As a general note for code structere we prioritize readable code. To help acheive this we have [JSLint](https://github.com/douglascrockford/JSLint) that can yell at you if you make formating or code style errors. It does this by performing static analysis and code quality checking with the following settings (Paste the following comment block just below the initial comment block in each module):

	/*jslint browser: true, plusplus: true, vars: true, white: true, nomen:true*/
	/*global require: true, define: true*/

This tell JSLint to run with the standard linting options, but asume a browser environment (window, document and the likes) 	

### Namespacing and functional programming

TODO: Don't spaghetti - pragmatic js.

### Working with AMD

TODO: Require.js workflow

#### Main.js and modules

TODO: Create funcitonality in modules, do stuff in main.js.

#### Structuring modules and dependencies

TODO: Only reference modules you're using. Remember to clean up. Briefly on sectioning: Framework/Library/Plugin/Project.

#### Building with r.js (grunt?)

### The global namespace and exposing stuff

TODO: Do not pollute, use a single object

## Coding style

TODO: camelCasing (Exceptions constructors and prototype objects). Hard tabs. JSLint. Semi-colons. Single quotes. 

Use hard tabs (e.g. regular tabs, not spaces) for tabbing your code. This [allows your fellow coders to choose for themselves](http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/) whether they want 2 or 4 spaces.

## Third-party plugins

TODO: Encapsulating third-party modules in AMD, especially jquery plugins.
Use the jQuery encapsulation factory

## Deployment and tools

TODO: Require JS build and config. nodeJS. JSLint.

## Full module sample

TODO: Code sample

