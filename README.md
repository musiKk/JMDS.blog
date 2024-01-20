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

There is limited support for custom pages. Pages are defined in the configuration as follows:

```json
{
    "pages": [
        {
            "name": "Posts",
            "template": "posts.html"
        },
        {
            "name": "About",
            "template": "about.html"
        },
        {
            "name": "My Projects",
            "template": "my-projects.md"
        },
    ]
}
```

If the `template` link ends in `html`, the page is rendered as is into the main page's content element. If the link ends in `md`, the page will be run through the Markdown processor first.

## Posts

Posts are handled specially. They are split across two templates; both with an element of ID `template-content` respecitvely.

| template | what's in `template-content` |
| - | - |
| `templates/posts.html` | the list of posts |
| `posts/post.html` | the content of the post |

Posts are taken from the `posts/posts.json` file. Take a gander:

```json
{
    "posts": [
        {
            "link": "2028-02-22-from-teh-future.html",
            "title": "Time travel is possible"
        }
    ]
}
```

The link is relative to the `posts` directory. I guess in theory this would allow subfolders but for now this is not possible. Maybe later. The title is only used for the post list. The link must be in the format YYYY-MM-DD-mah-title. This will be used for grouping. Everything from the current year is rendered into a "Recent posts" section. Post order is determined by the order in the `posts.json` file but this is just laziness and will change probably.

## Index

The index is at the root in an `index.html` file. It needs elements with the following IDs:

| ID | what for |
| - | - |
| `header` | links to templates are rendered here |
| `content` | templates are rendered here |

The templates have no restriction except

* they need an element with ID `content`; it will contain the content
* the `index.html` has to load the `js/blog.js` script, duh

There is also a `css/blog.css` but I don't know CSS so it currently looks like shit. 🤷‍♂️

## Credit

Credit where credit is due. JMDS is **heavily** inspired by [CMS.js](https://github.com/chrisdiana/cms.js). But I suffer from NIH. Oh and ChatGPT of course.
