# Vertic - CSS Guidelines

This document holds the guidelines for front-end development with CSS at Vertic. The guidelines should be followed at any time, for any given project. A lot of the guidelines is based on [SMACSS](http://smacss.com/) and [OOCSS](https://github.com/stubbornella/oocss/wiki), so make sure to know your way around those guidelines to understand where these guidelines deviate and align with SMACSS and OOCSS. 

Also, remember that this is a set of [guidelines](http://www.youtube.com/watch?v=b6kgS_AwuH0). So follow them closely at all times, but deviate if deemed necessary and/or prudent - not because you're lazy. AND, if and when you decide to deviate from them, make sure to comment it thoroughly, documenting _why_ and _how_. 

## TL:DR;

* Be familiar with OOCSS and SMACSS. 
* Use SASS, but only nest one level.
* Write OOCSS modules for everything.
* Name modules according to functionality (not content), and use descriptive names.
* Namespace all sub-module elements by prefixing module name to selector (e.g. .modulename-subelement).
* All modifiers should be prefixed with is-/has-, not module name.
* Use SASS, but only nest one level.
* Order properties in every rule like this: BOX, POS, TYPO, BG, MISC.
* Use lowercase with dashes for naming. No camel casing or underscores.
* Comment modules [like this](guideline-css-commentexample.css), and use double-dashes for inline/in-module comments.
* Get familiar with the framework and build on it if you have a useful idea.
* One module per file.
* Put variables in the vars.scss file.
* If possible, use third-party stuff as-is, but make sure it doesn't mess up your modules or base styles.
* Be sensible.

## Code structure

### Sections and modules

All code is divided into one of three sections: __Base__, __Layout__ and __Module__, as inspired by SMACSS. 

All our CSS is written as modular CSS. The only exception from this rule is __Base__ styles, e.g. styles that control the base behaviour of the document, such as reset styles and base styling of common elements such as HTML, BODY and A tags. 

__Layout__ holds very high-level modules with very limited styling, such as site-centering wrappers.

__Module__ holds the rest of the site's styling, divided into portable modules.

All modules are stand-alone code blocks, that can and will work on their own and in conjunction with other modules. Modules can be nested inside each other, but shouldn't depend on it. 

### Naming and namespacing modules

Modules should be named for functionality, not for what content they hold. This way, we keep or modules flexible and adaptable as content or module application change. 

Module names should also be one-word (if possible) and lowercase with no hyphenation. Keep the module names as short as possible, without compromising readibility . Remember to think about your fellow coders - code should be readable. 

All subelements in a given module should be prefixed with the module name. We do this to avoid specificity and inheritance errors when one module lives inside another module. For instance, two nested modules might both have headers (like a _.site_ module and a _.article_ module), so to avoid confusion, each module's header should be namespaced as such: _.site-header_, _.article-header_.

Also, all submodule elements should be prefixed with the module class in the selector - e.g. _.site .site-header_ to ensure specificity and avoid inheritance issues. This is usually done through nesting in SASS (but more on that later). 

### Module modifiers

Most module will have modifiers (or states). Most common modifiers are _active_, _hover_ or _hidden_. Some modifiers will be classic CSS pseudo-classes such as _:hover_. 

All modifiers that are not CSS pseudo-classes should be prefixed with _.is-_ or _.has-_. These classes do not need module name prefixing, as they are namespaced through the selector and always used in conjunction with an already namespaced class. 

### Theming modules

### Working with SASS

### Ordering properties

  BOX
  POS
  TYPO
  BG
  MISC

## Naming conventions

### Functional naming

### Casing and hyphenation

## Comments

### Module commenting

### Code commenting

## File structure

### Framework

### Variables

### Modules

## Third-party plugins




---



Modules
Namespacing - even subelements
Is/Has modifiers

Coding guidelines
CSS: “is-” or “has-” for all modifiers?
JS: Quotation marks and other specifics
JS: More strict guidelines?
JSLint
Update wiki
https://github.com/madrobby/pragmatic.js


CSS:
* Modules
* Namespace each module
* Is/has state prefixes
* Sub elements in modules prefixed with module name (explain why)
* Module names based on function - readable module names
* Take a look at Compass
* Comments
  - Section names based on SMACCS @section (Framework / Layout / Module)
  - Module head comment format:
    /**
    * Module name
    * 
    * Here is a longer description of the module that potentially
    * can span over multiple lines.
    *
    * @section Framework/Layout/Module
    * @author ldeleuran
    * @modifiedby echristensen (can have multiple of these)
    */
  - Do comments with // style
* Single module files (with the odd exception (gridlist))
* Code stubs for basic functionality
* Extend the framework with a generated content polyfill mixin
* Attribute order
  BOX
  POS
  TYPO
  BG
  MISC
