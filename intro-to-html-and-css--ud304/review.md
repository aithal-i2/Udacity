# Review

# Score : 7 / 10

## HTML
- Should have named file index.html because that's the default file a server will load
- Use double quotes for HTML attributes 
  - `<link href='http://fonts.googleapis.com/css?family=Lato:100,400' rel='stylesheet' type='text/css'>` should be `<link href="http://fonts.googleapis.com/css?family=Lato:100,400" rel="stylesheet" type="text/css">`
- URLs should always be links. 
  - Eg. `<p>https://github.com/udacity/appify</p>` should be `<p><a href="https://github.com/udacity/appify" target="_blank">https://github.com/udacity/appify</a></p>`
- External links should always have `targer="_blank"` attribute defined.

## CSS
- NEVER write an inline style
    ![Agai, NEVER!](http://i.imgur.com/W9FP0yP.png)
- Always leave a space before opening bracket of the selector rules
- Always leave a space after colon for a property
- Learn to write shorthands 
  - Eg. 
    ```
    margin-left: auto;
    margin-right: auto;
    ```
    can be written as,
    `margin: 0 auto;`
- Class naming of `col-md-12 col-sm-12` is same as `col-sm-12`. `col-md-12` is redundant here. Same for `col-md-4 col-sm-4`.
- Keep class names semantic. `text-color` does not make sense, could have used `grey-text` instead.

