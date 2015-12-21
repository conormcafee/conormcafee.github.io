---
layout: post
title: Colour Management with Sass Maps
description: 
date:   2015-11-01 19:30:00
categories: journal
type: journal
author: Conor McAfee
---

I feel I don’t particularly take advantage of all the best features of Sass, sometimes when I look at Sass as a pre-processor I see some people over complicating it by creating complex mixins or functions that end up doing a simple task.

To me, the reason I love using Sass is for these five uses:

- Nesting (appropriate nesting, hover states etc)
- Partials
- Variables
- Mixins
- Maps

I’m not going to explain the first 4 in this post, I am wanting to focus on maps.

I use Sass maps to maintain my colour palette within a website.

I’m going to talk you through setting it up for your own project, its relatively simple and might seem like overkill at the start, but trust me when you’re writing your CSS after this is set up you won’t go back to your previous way of managing your colour palette.

{% highlight scss %}

$grey: #C1CAD6;
$orange: #EF4640;
$blue: #4392F1;
$green: #00A676;
$white: #ffffff;
$black: #525252;

{% endhighlight %}

Above I have declared the variables for the colours I plan on using in this website.  You can call them whatever you want, I tend to find that calling them by there actual name is the easiest method.

The next stage now is to create your map, for those who are familiar with JSON, writing out your Sass Map should be simple enough for you.

{% highlight scss %}
$brand-colours: (
    grey: (
        base:   $grey,
        light:  lighten($grey, 10%),
        dark:   darken($grey, 10%)
    ),

    orange: (
        base:   $orange,
        light:  lighten($orange, 10%),
        dark:   darken($orange, 10%)
    ),

    blue: (
        base:   $blue,
        light:  lighten($blue, 10%),
        dark:   darken($blue, 10%)
    ),

    green: (
        base:   $green,
        light:  lighten($green, 10%),
        dark:   darken($green, 10%)
    ),
    
    white: (
	    base: $white
    ),
    
    black: (
	    base: $black
    )
);
{% endhighlight %}

Above you can see the map, I have called it *brand-colours*, again feel free to call it what you want.

If you look now at the map, you can see the colours have been listed again, but now they also have 3 additional values nested.  I usually go for:

- base - which is the main colour
- light - using the Sass lighten function, I lighten the base by 10% (or whatever value you require)
- dark - using the Sass darken function, I darken the base by 10% (or whatever value you require)

After you have completed your map, you just need to create a function now so that you can call it when writing your CSS.

{% highlight scss %}
@function brand-colour($brand-colour, $tone: 'base') {
    @return map-get(map-get($brand-colours, $brand-colour), $tone);
}
{% endhighlight %}

The above bit of code is what you need to turn your map into a function.  Again, feel free to call the function whatever you want - my choice is always *brand-colours*.

Once you have this all set up, you are now ready to use it in your css.  Look at the example below to see how to call it.

{% highlight scss %}
a {
  colour: brand-colour(blue);
    
    &:hover {
      colour: brand-colour(blue, dark);
    }
}
{% endhighlight %}

And that’s it.  The power behind this now is that if you need to change your any of your original colours, this can be done once and the change will be site wide after your compile your Sass.

Original concept by [Erskine Design](http://erskinedesign.com/blog/friendlier-colour-names-sass-maps/)
