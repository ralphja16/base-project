# Get Started

Get started with the Base-project, a solid and fully customizable front-end resposive framewerk for each type of project.

## Download

<a href="https://github.com/ralphja16/base-project/archive/master.zip">Download</a> the base framework to get all source files for starting the development. Rename the folder or place all files in your project.

## Starter template

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>

	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Project title</title>

	<!-- Includes compiled CSS file -->
	<link rel="stylesheet" href="../css/index.css">

	<!-- Optional: Includes modernizr and detectizr -->
	<script async src="../js/vendors/modernizr-custom.js"></script>
	<script async src="../js/vendors/detectizr.min.js"></script>
</head>
<body>


	<!-- Includes compiled javascript file -->
	<script src="../js/preload.bundle.js"></script>

</body>
</html>
```

## HTML5 doctype

This base requires the use of the HTML5 doctype. Without it, you’ll see some funky incomplete styling, but including it shouldn’t cause any considerable hiccups.

```html
<!doctype html>
<html lang="en">
  ...
</html>
```

## Responsive meta tag

<p>This base is developed <em>mobile first</em>, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, <strong>add the responsive viewport meta tag</strong> to your `<head>`.</p>

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

## Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

```css
.selector-for-some-widget {
	box-sizing: content-box;
}
```

With the above snippet, nested elements—including generated content via ::before and ::after—will all inherit the specified box-sizing for that .selector-for-some-widget.

Learn more about <a href="https://css-tricks.com/box-sizing/">box model and sizing at CSS Tricks</a>.

## Reset

For improved cross-browser rendering, we use <a href="https://necolas.github.io/normalize.css/">Normalize</a> to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.
The `\_normalize.scss` file can be found in `'src/base/'` folder.
