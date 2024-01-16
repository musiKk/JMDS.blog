# JMDS.blog

> JMDS puts MD in JS

Want to write content in Markdown? Can't be assed to set up Ruby? Or Python? Or npm? Download a go executable? Or whatever the newest static site generator uses?

The goal of JMDS is to simplfiy writing as much as possible while still allowing some level of flexbility over something like a basic GitHub Gist solution. There is no setup besides cloning, writing and pushing.

Steps to publish:
- add your Markdown file
- add an entry in the posts.json catalog
- push your wisdom into the world

## Installation

Currently there is not much of an install besides cloning the repo and get going. Configuration is something for the future. And a bright future this will be.

1. clone with `git clone git@github.com:musiKk/JMDS.blog.git`
2. write a post in the `posts` directory
3. add an entry in the `posts/posts.json` file
4. (optional) [customize the templates](#customization)
5. publish to GitHub Pages

## Customization

There is not a lot to adjust. Currently the HTML templates are

| template | what it does |
| -------- | - |
| index.html       | The main layout for the whole page. |
| posts/posts.html | The layout for the post listing. |
| posts/post.html  | The layout for a single post. |

The templates have no restriction except

* they need an element with ID `content`; it will contain the content
* the `index.html` has to load the `js/blog.js` script, duh

There is also a `css/blog.css` but I don't know CSS so it currently looks like shit. 🤷‍♂️

## Credit

Credit where credit is due. JMDS is **heavily** inspired by [CMS.js](https://github.com/chrisdiana/cms.js). But I suffer from NIH. Oh and ChatGPT of course.
