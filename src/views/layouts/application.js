const appendQuery = require('append-query')

module.exports.application = (title, html, url) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>New App - ${title}</title>
        <link rel="stylesheet" href="/stylesheets/style.css" type="text/css" />
    </head>
    <h1><a href="/">New App</a></h1>
    <table id='menu'>
        <tr>
            <td><a href="#">Add new</a></td>
        </tr>
    </table><br>
    <hr>

    ${html}
    </html>
    `
}