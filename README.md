# HTML & CSS Basic Guide:

## HTML Basics:

- What is HTML and markup language vs programming language?
- Introducing VS code (IDE)
- Creating files (.html, .css, .js, extensions etc. ) and folders in VS code
  Head, body, title
- What is Tags/elements (opening & closing)?
  ```html
  <h1>Content</h1>
  ```
- Inline and Block-level elements?
- What is Attributes and How to use it?

## The folder structure in HTML / vs code

- assets (folder)
  - images (folder)
    - svg (folder)
    - png (folder)
  - css (folder)
    - style.css (file)
  - js (folder)
  - fonts (folder)
- index.html (file)

  **Example:**

  ![App Screenshot](https://i.postimg.cc/zv1PWWcm/image.png)

## CSS Basics:

- What is CSS and how to use it?
  `css
/* proprerty:value; */
color:red;
background-color:yellow;
    `
- Types of CSS:

  - Inline
    ```css
    <p style="color:red;">Hello world!</p>
    ```
  - Internal CSS with element-name and id, class attributes:
    ```html
    /* using style in head tag */
    <style>
      p {
        background-color: yellow;
      }
      .text-red {
        color: red;
      }
    </style>
    ```
  - External

    Create a separate file named `style.css`
