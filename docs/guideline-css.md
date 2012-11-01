# Vertic - CSS Guidelines

This document contains the guidelines for front-end development with CSS at Vertic. The guidelines should be followed at any time, for any given project. A lot of the guidelines is based on [SMACSS](http://smacss.com/) and [OOCSS](https://github.com/stubbornella/oocss/wiki), so make sure to know your way around those guidelines to understand where these guidelines deviate and align with SMACSS and OOCSS. 

Also, remember that this is a set of [guidelines](http://www.youtube.com/watch?v=b6kgS_AwuH0). So follow them closely at all times, but deviate if deemed necessary and/or prudent - not because you're lazy. AND, if and when you decide to deviate from them, make sure to comment it thoroughly, documenting _why_ and _how_. 

## TL:DR;

* Be familiar with [SMACSS](http://smacss.com/) and [OOCSS](https://github.com/stubbornella/oocss/wiki). 
* Use [SASS](http://sass-lang.com/), but only nest one level.
* Write OOCSS modules for everything.
* Name modules according to functionality (not content), and use [sensible](http://csswizardry.com/2010/08/semantics-and-sensibility/), descriptive names.
* Namespace all sub-module elements by prefixing module name to selector (e.g. .modulename-subelement).
* All modifiers should be prefixed with is-/has-, not module name.
* Use SASS, but only nest one level.
* Order properties in every rule like this: BOX, POS, TYPO, BG, MISC, INC.
* Use lowercase with regular hyphens for naming. No camel casing or underscores.
* Comment modules [like this](guideline-css-commentexample.css), and use double-dashes for inline/in-module comments.
* Get familiar with the framework and build on it if you have a useful idea.
* One module per file.
* Put variables in the vars.scss file.
* If possible, use third-party stuff as-is, but make sure it doesn't mess up your modules or base styles.
* Be sensible.

## Code structure

### Sections and modules

All code is divided into one of four sections: __Framework__, __Layout__, __Base__, and __Module__, as inspired by SMACSS. 

All our CSS is written as modular CSS. The only exception from this rule is __Base__ styles, e.g. styles that control the base behaviour of the document, such as reset styles and base styling of common elements such as `html`, `body` and `a` tags. 

__Layout__ holds very high-level modules with very limited styling, such as site-centering wrappers.

__Module__ holds the rest of the site's styling, divided into portable modules.

__Framework__ hold cross-project framework code. 

All modules are stand-alone code blocks, that can and will work on their own and in conjunction with other modules. Modules can be nested inside each other, but shouldn't depend on it. 

### Naming, namespacing modules and inheritance

Modules should be [sensible](http://csswizardry.com/2010/08/semantics-and-sensibility/), for functionality, not for what content they hold. This way, we keep or modules flexible and adaptable as content or module application change. 

Module names should also be one-word (if possible) and lowercase with no hyphenation. Keep the module names as short as possible, without compromising readibility . Remember to think about your fellow coders - code should be readable. 

All subelements in a given module should be prefixed with the module name. We do this to avoid specificity and inheritance errors when one module lives inside another module. For instance, two nested modules might both have headers (like a `.site` module and a `.article` module), so to avoid confusion, each module's header should be namespaced as such: `.site-header`, `.article-header`.

Avoid styling on core-elements, like `.site-header h1`, as this will very likely mess with the inheritance, if a module within the `.site-header` also uses the `h1` tag. This is known as either [selector intent](http://csswizardry.com/2012/07/shoot-to-kill-css-selector-intent/) or [depth of applicability](http://smacss.com/book/applicability). Adhering to this makes your code more flexible and portable.

Also, all submodule elements should be prefixed with the module class in the selector - e.g. `.site .site-header` to ensure specificity and avoid inheritance issues. This is usually done through nesting in SASS (but more on that later). 

### Module modifiers

Most module will have modifiers (or states). Most common modifiers are _active_, _hover_ or _hidden_. Some modifiers will be classic CSS pseudo-classes such as `:hover`. 

All modifiers that are not CSS pseudo-classes should be prefixed with `.is-` or `.has-`. These classes do not need module name prefixing, as they are namespaced through the selector and always used in conjunction with an already namespaced class. 

Modifiers should be applied to the outermost element or containing module element if sensible (to allow changes across the entire module).

#### Theming modules

Themes, if they only apply to a single module, should be applied as a modifier and follow the rules given for that.

Project-wide themes should be applied to absolute containing elements, such as a site-container, the `body` or the `html` element. Such themes should be prefixed with the worn __theme__, e.g. `.theme-admin`. Theme styles should then be put together with the modules they are affecting. In other words, we do not create a single file for the theme, but split theme rules out into the module files. This keeps module rules at the same place and makes it easier to understand inheritance and specificity. 

#### Nesting modules

If a module is nested inside another module, and it needs to behave a certain way, this should be done through applying a modifier to the nested module. If this is not possible, modifying rules should be kept inside the outer module. 

### Working with SASS

[SASS](http://sass-lang.com/) is great and gives us a lot of freedom. But with [great powers, comes great responsibility](http://www.youtube.com/watch?v=IKmQW7JTb6s). So even though there's a lot of cool stuff in SASS, we need to keep our code clean and readable.

* Use nesting only for namespacing modules and nest only one (1) level. 

        .modulename {
        	// Module level properties
        	
        	.modulename-elementname {
        		// Module element level properties
        		// No nesting beyond this level
        	}
        }

* Use for loops only if it makes sense.
* If you find yourself writing the same type of code over and over, create a mixin. If you find yourself creating the same mixin in two or more projects, think about adding it to the framework.
* Use math to calculate percentage. It helps convey what you're actually doing to fellow developers.

#### Variables

Variables are very, very handy and one of the main upsides brought to light when talking about SASS. Varaibles, too, should be named using lowercase and normal hyphenation (see Naming conventions).

However, the most common example for variables and SASS - _that color variables enable you to define a `$brandColor` variable and use it throughout a project_ - is fairy-tale land. Changes rarely only concern a single color change, and rarely are consistent cross-project. Therefore, name colors sensibly and with color, e.g. `$color-blue`, `$color-orange`, `$color-orange-dark` etc..

### Ordering properties

We order our properties in every rule in 6 different sections:

1. Box model - display mode, width, height, padding, margin etc.
2. Position - Positioning and offsets
3. Typography
4. Background styles
5. Miscellaneous
6. Includes - mixins etc.

Every section is seperated with a blank new line. Example:


	.modulename {
		display: block;
		padding: 0;
		margin: 0;
		overflow: hidden;
		width: auto;
		height: auto;
		min-width: 300px;
		max-width: 800px;		
		
		position: relative;
		
		font-family: Arial, Helvetica, sans-serif;
		font-size: 2em;
		
		background:#ccc url(../media/images/ui/back.gif) 0 0 repeat-x;
		
		border-radius: 5px;
		
		@include box-shadow(0 0 5px rgba(0,0,0,0.5));
	}


## Casing, hyphenation and tabs

Follow [CSS semantics](http://csswizardry.com/2010/12/css-camel-case-seriously-sucks/) when you name stuff, be it class names or variables. CSS semantics means: all lowercase with no underscores. Use regular hyphens for hyphenation. 

Use hard tabs (e.g. regular tabs, not spaces) for tabbing your code. This [allows your fellow coders to choose for themselves](http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/) whether they want 2 or 4 spaces. Do, however, use spaces for vertical alignment. 

## Comments

Add blank line breaks to seperate code and use comments to explain your code - not repeat it.

### Module commenting

All modules should begin with a defining comment block, such as this:

    /**
    * Module name
    * 
    * Here is a longer description of the module that potentially
    * can span over multiple lines.
    *
    * @section Framework/Base/Layout/Module
    * @author ldeleuran
    * @modifiedby echristensen (can have multiple of these)
    */
    
Remember that comments is the best way to help your fellow developers.

### Code commenting

If you need to put comments in-line or inside a module, use SASS double dashes (`// Inline code comment`) to define these comments. 

## File structure

### Framework

All framework code should be kept in the __framework/framework.scss__ folder. If you need to add another framework file (which is unlikely), prefix the file with _framework-_.

### Variables

Add all project level variables to __framework/vars.scss__. Only put variables in module files if you're ___absolutely sure that they will only be used in that module___.

### Modules

Modules should live in they own designated file, named after the module (e.g. `.modulename` lives in __modules/modulename.scss__). One module per file.

## Third-party plugins

Do not spend unecessary time rewriting modules to conform with these guidelines, but when including third party files, make sure that they don't mess with your project. If necessary, namespace them.

## Deployment and tools

TODO: Minification and VS Studio, WebWorkbench, Codekit

## Full module sample

    /**
    * Module name
    * 
    * Here is a longer description of the module that potentially
    * can span over multiple lines.
    *
    * @section Framework/Base/Layout/Module
    * @author ldeleuran
    * @modifiedby echristensen (can have multiple of these)
    */
    $local-variable: 100px;
    
	.modulename {
		// Module level properties
		display: block;
		padding: 0;
		margin: 0;
		overflow: hidden;
		width: auto;
		height: auto;
		min-width: 300px;
		max-width: 800px;		
		
		position: relative;
		
		font-family: Arial, Helvetica, sans-serif;
		font-size: 2em;
		
		background:#ccc url(../media/images/ui/back.gif) 0 0 repeat-x;
		
		border-radius: 5px;
		
		@include box-shadow(0 0 5px rgba(0,0,0,0.5));
		
		.modulename-elementname {
			// Module element level properties
			// No nesting beyond this level
		}
		&.is-active {
			// Active state
		}
		&.is-active .modulename-elementname {
			// Active state
		}
	}
	.theme-admin .modulename {
		// Theme module level properties
		
		.modulename-elementname {
			// Theme module element level properties
		}
	} 
