---
layout: post-case-study
title:  "2015 Redesign"
date:   2015-09-14 20:00:00
categories: case-studies
type: "case-study"
thumbnail: case-studies/conormcafee/conor-mcafee-logo.jpg
header: /case-studies/conormcafee/conormcafee-header.jpg
author: Conor McAfee
---

You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run jekyll serve, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the _posts directory that follows the convention YYYY-MM-DD-name-of-post.ext and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight scss %}
$post-colours: (
    case-study: (
        base:   $blue,
        light: lighten($blue, 10%),
        hover: darken($blue, 20%),
        svg:  case-study
    ),

    journal: (
        base: $green,
        light: lighten($green, 10%),
        hover: darken($green, 20%),
        svg: journal
    ),

    labs: (
        base: $purple,
        light: lighten($purple, 10%),
        hover: darken($purple, 20%),
        svg: labs
    )
);

@function post-colour($post-colour, $tone: 'base') {
    @return map-get(map-get($post-colours, $post-colour), $tone);
}

@function get-post-colour($post-colour, $tone: 'base') {
    @return map-get(map-get($post-colours, $post-colour), $tone);
}
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
