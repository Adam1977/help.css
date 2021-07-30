# help.css

Help.css is an auxiliary CSS class. It can be quickly used in your HTML and style sheets.

Here is quick view what they can do

- Set margins - Available for all directions from 0 - 80 px stepping value 4px
- Set padding - Available for all directions from 0 - 80 px stepping value 4px
- Set line-height - Available for all directions from 0 - 80 px stepping value 4px
- Set font-size - Available for all directions from 12 - 80 px stepping value 2px
- Set font-weight - Available for all directions from 100 - 700 stepping value 100

## Margins

You can add this class to any element in your HTML code to set Margins

| FIRST PREFIX ( M-\*) | SECOND PREFIX(M-T/B/L/R/X/Y\*)                                                 | LAST PREFIX(\*)     |
| -------------------- | ------------------------------------------------------------------------------ | ------------------- |
| mg for margin        | t : top, b : bottom, l : left, r : right, x : left && right, y : top && bottom | 0, 4, 8, 12, ... 80 |

### EXAMPLE

- `mg-t8` which means Margin Top 8px
- `mg-b12` which means Margin Bottom 12px
- `mg-l16` which means Margin Left 16px
- `mg-r20` which means Margin Right 20px

### RULE

Value can not be anything. It has a step of 4px, eg: 4,8,16

### OTHER OPTIONS

To remove margin from a HTML element add the class `mg-x0 mg-y0`

```html
<div class="mg-t8">I have a 8px margin in top</div>
```

## Padding

You can add this class to any element in your HTML code to set Padding

| FIRST PREFIX ( M-\*) | SECOND PREFIX(M-T/B/L/R/X/Y\*)                                                 | LAST PREFIX(\*)     |
| -------------------- | ------------------------------------------------------------------------------ | ------------------- |
| pd for padding       | t : top, b : bottom, l : left, r : right, x : left && right, y : top && bottom | 0, 4, 8, 12, ... 80 |

### EXAMPLE :

- `pd-t8` which means Padding Top 8px
- `pd-b12` which means Padding Bottom 12px
- `pd-l16` which means Padding Left 16px
- `pd-r20` which means Padding Right 20px

### RULE

Value can not be anything. It has a step of 5px, eg: 4,8,16

### OTHER OPTIONS

To remove padding from a HTML element add the class `pd-x0 pd-y0`

### EXAMPLE :

```html
<div class="pd-t8">I have a 8px padding in top</div>
```

## Font Size

You can add this class to any element in your HTML code to set font-size

| FIRST PREFIX ( M-\*) | LAST PREFIX(\*)    |
| -------------------- | ------------------ |
| fz for font-size     | 12, 14, 16, ... 80 |

### EXAMPLE :

- `fz-12` which means Font Size 12px
- `fz-24` which means Font Size 24px

### RULE

Value can not be anything. It has a step of 2px, eg: 12,14,16

### EXAMPLE :

```html
<div class="fz-12">My font size is 12 pixels</div>
```

### Ellipsis

- `text-ellipsis` An ellipsis is displayed for more than one line
- `no-wrap-more-1` An ellipsis is displayed for more than one line
- `no-wrap-more-2` An ellipsis is displayed for more than two lines

### EXAMPLE :

```html
<div class="text-ellipsis">An ellipsis is displayed for more than one line</div>
```

## Absolute positioning

- `p-r` which means `position: relative;`
- `p-a` which means `position: absolute;`

## Font Weights

### EXAMPLE :

- `fw-5` which means Font Weights 500
- `fw-7` which means Font Weights 700

### RULE

Value can not be anything. It has a step of 1, eg: 4,5,6,7

```html
<p class="fw-5">Font Weight 500</p>
<p class="fw-6">Font Weight 600</p>
```

## Text Align

### EXAMPLE :

- `ta-c` which means text align center
- `ta-l` which means text align left
- `ta-r` which means text align right

## Misc. classes

| CLASS NAME | DESCRIPTION                       |
| ---------- | --------------------------------- |
| `wb`       | It means `word-break: break-all;` |
| `d-f`      | It means `display: flex;`         |
