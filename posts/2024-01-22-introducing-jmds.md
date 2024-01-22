# Introducing JMDS.blog

Ok, so here we are. This is my very minimal blog system. For quite some time I wanted to do something like this.

## JMDWHAT

To get it out of the way: It's JS with MD in it. I suck at naming. You suck at naming. Let's get over it.

## Let the client deal with it

Everybody loves Markdown. It's used for content of all forms and shapes. [Documentation](https://www.mkdocs.org/), [forum software](https://stackoverflow.com/), blogs. And I love Markdown too. That's why I love writing documentation with it, am delighted when I see forums using it and would love to use it in blogs.

When looking at various blog solutions for GitHub I always hated the build step. Static sites are great and sure, you *just* write your Markdown, but then you have to build your site. The site is HTML after all. In the (long ago) past I looked at [Jekyll](https://jekyllrb.com/) and [Octopress](http://octopress.org/). I know they are old and Octopress looks abandoned. But from the concept I don't think that much has changed. Look at this statement on the Jekyll homepage:

![It just takes seconds!](img/2024-01-22-introducing-jmds/jekyll-in-seconds.png)

No disrespect but when I see this I just want to puke. Sure, I'll download Ruby just to get this going. This will not take seconds. I don't have it installed, I don't want to install gems. Personal preference. I'm sure you love Ruby. Doesn't matter. What I do. Not. Want. To. Do. Is have a build step.

All of this just for a little bit of HTML. Why would we not put this on the client? The ordinary client is powerful enough to process a little bit of text and convert it to HTML. Sure, we [tried a similar concept already](https://en.wikipedia.org/wiki/XSLT) and to the surprise of probably no one I have to say, this *always* intrigued me. The idea to have your data in one file, apply some transformation on top of it and have a page as a result makes me ecstatic. I just tried the example from the article and it still works in modern browsers. But as much as I like the idea of XSLT, it's just too clunky. Everybody loves Markdown though...

## But don't we hate SPAs?

In the end it's an SPA, plain and simple. It downloads a few files to build the page and lazily downloads more, optionally processing them in case they are Markdown files. It's the exact same thing als XSLT but with a little more application code and much much less XML. Is it elegant? I don't know. But I like it. I can drop a Markdown file in a directory, reference it in the post list and it will be rendered. I can be on my work machine where I don't have the right tools installed. I can do it from any browser directly on GitHub itself! And it probably works on GitLab as well (although they are [much worse](https://gitlab.com/pages) at making this look simple).

I guess the idea is somewhat similar to HTMX, just tailor made. But I don't really know HTMX (I'm not even a web dev; just a backend engineer with access to ChatGPT) so I may be wrong. Luckily there is no comment section here.

## What about that other tool?

I looked at another client side site generator called [CMS.js](https://chrisdiana.github.io/cms.js/). It looks awesome. But the conceptual downside I saw is that it basically downloads your whole site from the start. So in order to get your post list rendered, it will get a directory listing, download all post files just so it can parse the front matter and create the link. This is two counts of don't want for me already.

That being said, not going with directory listing is the biggest tradeoff I had to make. The posts and templates need to be catalogued so they can be referenced and downloaded. And yes this may be done by a small script in the future just for convenience. But my goal is to never make this required.

But yeah, CMS.js, looks great. At the time of writing almost-three-years-abandoned-great. It served as a big inspiration. Hopefully in three years JMDS will not be a thee-years-abandoned-shit-show.

## What will the future bring?

I don't know. I think I'll keep adding a few features while keeping the core design principle; one last time: no build step.

Pagination could become useful. Tags. Themes. (Maybe I'll steal themes from CMS.js. They have themes.) I'm sure custom pages could be supported better.

And maybe real templates with code. The big downside is that the API between the code and the templates is sort of hardcoded through HTML elements with expected IDs and an expected structure of the document (*ok, get me the element with ID "header" and then let me add all links to that*). I'd love to shift this to a template language API instead. But one other principle I have is: Don't add dependencies unless ab-so-fuckin-lutely needed. That's why there are no dependencies. Oh, and no build step for the code itself. This may change. But you know how I feel about this.

If anyone wants to try, feel free. As of now there will still be loads of breaking changes. Or rather, *if* there are changes, they will for sure be breaking.
