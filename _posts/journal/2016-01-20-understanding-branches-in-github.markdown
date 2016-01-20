---
layout: post
title: Understanding Branches in Github
description: Github Branches confused me when working locally to begin with, hopefully this blog post will make it easier for you to understand too. 
date:   2016-01-20 19:30:00
categories: journal
type: journal
author: Conor McAfee
---
Github Branches confused me when working locally to begin with, hopefully this blog post will make it easier for you to understand too.

Over the last 6 months I’ve adapted my workflow to include using Github for version control.  This is something that I had wanted to do for a while, but was always put off as I find it confusing on the Command Line.  In August 2015, Github released a new and improved version of their desktop application [https://github.com/blog/2046-github-desktop-is-now-available](https://github.com/blog/2046-github-desktop-is-now-available){:target="_blank"} so this spurred me on to give it another go.

> On a side note, if anyone knows any good tutorials for using Git in the Command Line leave a link in the comments please.

Like anything new in the world of web development, you can read articles upon articles on the subject, but it’s not until you actually get your hands dirty that you will begin to properly understand it.

What I couldn’t get my head around however, was how branches worked on your local machine.  Are they a sub-folder? Why can I not see my ‘Development’ branch? Where did that go?

##Example

Let’s take my [repo](https://github.com/conormcafee/conormcafee.github.io){:target="_blank"} for this website as an example.  I have two branches which I actively use:

- Master
- Development

The ‘master’ branch contains the deployed code that run this site, the ‘development’ branch is for me to develop locally so that I can commit any changes I make without it affecting the live site.  When I am ready for the changes to be reflected on the live site, I submit a pull request to merge ‘development’ into ‘master’.

Now, where is that ‘development’ branch on my local computer so that I can make a dent on that [to-do list](https://trello.com/b/WtQCGHgg){:target="_blank"}?

![Confused](https://media.giphy.com/media/7dPhaWI5mxmAU/giphy.gif)

I expected that it would be a folder, and I would just edit there.  But Git actually does a lot of magic behind the scenes.  Depending on what branch is active, will depend on what files it will show on your local machine.  If you switch from your master branch to your development branch and watch your files at the same time, you will see them switch over.

![Branch Gif](/assets/images/journal/github-branches-demo.gif)

This may have been obvious to others ,but it’s something that confused me at the beginning - hopefully it can help someone else.