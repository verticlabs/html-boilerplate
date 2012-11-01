# Vertic - JS Guidelines

This document contains the guidelines for front-end development with JavaScript at Vertic. The guidelines should be followed at any time, for any given project. A lot of our work is based on [jQuery](http://jquery.com/) and [AMD Modules](https://github.com/amdjs/amdjs-api/wiki) with [Require.js](http://requirejs.org/), so make sure to know your way around those frameworks. 

TODO: [JSLint](https://github.com/douglascrockford/JSLint) and our flavour of it.

A large extent of our guidelines adhere to the [Pragmatic JS guidelines](https://github.com/madrobby/pragmatic.js). Please read those brief guidelines, as they are both sensible and easy to follow and so that you know ehere these guidelines are in line with Pragmatic JS, and where they deviate. 

Also, remember that this is a set of [guidelines](http://www.youtube.com/watch?v=b6kgS_AwuH0). So follow them closely at all times, but deviate if deemed necessary and/or prudent - not because you're lazy. AND, if and when you decide to deviate from them, make sure to comment it thoroughly, documenting _why_ and _how_. 

## TL:DR;

* Use (our flavour of) JSLint.
* Write modular code with AMD.
* Make sure modules return an object. 
* Only "do stuff" in main.js.
* Adhere to [Pragmatic JS](https://github.com/madrobby/pragmatic.js) guidelines, but __do write sensible semi-colons__.

## Code structure

### Namespacing and functional programming

TODO: Don't spaghetti - pragmatic js.

### Working with AMD

TODO: Introduce AMD

#### Main.js and modules

TODO: Create funcitonality in modules, do stuff in main.js.

#### Structuring modules and dependencies

TODO: Only reference modules you're using. Remember to clean up. Briefly on sectioning: Framework/Library/Plugin/Project.

### The global namespace and exposing stuff

TODO: Do not pollute, use vertic object.

## Coding style 

TODO: camelCasing. Hard tabs. JSLint. Semi-colons

Use hard tabs (e.g. regular tabs, not spaces) for tabbing your code. This [allows your fellow coders to choose for themselves](http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/) whether they want 2 or 4 spaces. Do, however, use spaces for vertical alignment. 

## OO patterns and the prototype

TODO: Talk about that we do not require OO patterns, but if ppl use them, ok. Maybe broad guidelines if people use them, like better documentation, etc.?

## Comments

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

## File structure

TODO: framework, libraries, plugins, project - what goes where? 

* Framework: Vertic framework
* Libraries: Third party libraries
* Plugin: AMD modules generic enough to be used cross project
* Project: AMD modules specific to this project

## Third-party plugins

TODO: Encapsulating third-party modules in AMD, especially jquery plugins.

## Deployment and tools

TODO: Require JS build and config. nodeJS. JSLint.

## Full module sample

TODO: Code sample

