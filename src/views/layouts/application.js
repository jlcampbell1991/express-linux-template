module.exports.application = (title, html) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New App - ${title}</title>
        <link rel="stylesheet" href="/stylesheets/style.css" type="text/css" />
        <script src="/scripts/common.js"></script>
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