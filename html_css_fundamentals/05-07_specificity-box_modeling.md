## 05 Specificity

| Selector     | Weight |
| ------------ | ------ |
| element      | 1      |
| class        | 10     |
| inline-style | 100    |
| !important   | 1000   |

- background: teal important!

## 06 Common Rules

```css
.some_text {
    color: #BDBFEF;
    font-size: 12px;
    text-align: center;
    font-family: helvetica, sans-serif;
    letter-spacing: -1px;
    text-transform: lowercase;
    text-shadow: 0 2px 0 black;
    /* first value is horizontal offset */
    /* second value is vertical offset */
    /* third value is how much blur */
    /* fourth value is the color */
    line-height: 1.4;
    
}
```

```html
<link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'> 
```

```css
body {
    font-family: 'Open Sans', sans-serif;
}
```

## 07 Box Model

margin: top right bottom left

margin: top right

border: 20px solid black;

- box-sizing: border-box; /* Includes padding and border into the width and height. (default includes padding).
- 

