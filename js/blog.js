async function renderPostList() {
    const postsPromise = fetch("posts/posts.json")
    const postsTemplatePromise = fetch("posts/posts.html")

    Promise.all([postsPromise, postsTemplatePromise])
        .then(responses => Promise.all([responses[0].json(), responses[1].text()]))
        .then(responses => {
            const posts = responses[0]
            const postsTemplate = responses[1]

            const templateContainer = document.getElementById("content")
            templateContainer.innerHTML = postsTemplate

            const postsContainer = document.getElementById("template-content")

            posts.posts.forEach(post => {
                const div = document.createElement("div")
                div.innerHTML = `<a href="#posts/${post.link}">${post.title}</a>`
                templateContainer.appendChild(div)
            })
        })
}

async function renderPost(url) {
    var postPromise = fetch(url)
    var postsTemplatePromise = fetch("posts/post.html")
    Promise.all([postPromise, postsTemplatePromise])
        .then(responses => Promise.all([responses[0].text(), responses[1].text()]))
        .then(responses => {
            var post = responses[0]
            var postTemplate = responses[1]

            const templateContainer = document.getElementById("content")
            templateContainer.innerHTML = postTemplate

            const div = document.createElement("div")
            div.innerHTML = renderMarkdown(post)
            document.getElementById("template-content").appendChild(div)
        })

}

function renderMarkdown(text) {
    const lines = text.split("\n")
    var listStarted = false
    var fence = ""
    var code = Array()
    return lines.flatMap(line => {
        if (result = line.match(/^```(.*)/)) {
            if (fence == "") {
                fence = result[1] || "plaintext"
                return []
            } else {
                // const lang = hljs.getLanguage(fence) ? fence : "plaintext"
                const result = [
                    `<pre class="code">`,
                    // hljs.highlight(code.join("\n"), { language: lang }).value,
                    code.join("\n"),
                    "</pre>"]

                fence = ""
                code = Array()

                return result
            }
        }
        if (fence != "") {
            code.push(line)
            return []
        }

        additionalOutput = Array()
        if (line == "") {
            line = "<p>"
        }
        if (line.match(/^ *\*/)) {
            if (!listStarted) {
                listStarted = true
                additionalOutput.push("<ul>")
            }
            line = line.replace(/^ *\*/, "<li>")
        } else {
            if (listStarted) {
                listStarted = false
                additionalOutput.push("</ul>")
            }
        }

        line = line.replaceAll(/^# (.*)$/mg, "<h1>$1</h1>")
        line = line.replaceAll(/`([^`]*)`/g, "<code>$1</code>")
        line = line.replaceAll(/\*\*([^*]*)\*\*/g, "<b>$1</b>")
        line = line.replaceAll(/\*([^*]*)\*/g, "<i>$1</i>")
        line = line.replaceAll(/_([^_]*)_/g, "<u>$1</u>")
        line = line.replaceAll(/\[([^\]]*)\]\(([^\)]*)\)/g, "<a href=\"$2\">$1</a>")

        output = additionalOutput.concat(line)

        return output
    }).join("")
}

async function renderPage() {
    const hash = window.location.hash.substring(1)
    const parts = hash.split("/")
    if (parts.length == 1) {
        if (parts[0] == "posts") {
            renderPostList()
        }
        window.location.hash = "posts"
    } else if (parts.length > 1) {
        if (parts[0] == "posts") {
            const post = parts[1]
            const url = `/posts/${post}`
            renderPost(url)
        }
    } else {
        window.location.hash = "posts"
    }
}
function start() {
    window.addEventListener("hashchange", (event) => {
        renderPage()
    })
    console.log(document.hashchange)
    renderPage()
}

document.addEventListener("DOMContentLoaded", start)
