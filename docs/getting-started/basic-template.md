---
layout: docs
title: Basic template
description: 
group: getting-started
---

# {{ page.title }}

<section id="headings clearfix">
	<h2 class="section__title">Basic template</h2>

	<p class="lead">Start with this basic HTML template, or modify these examples. We hope you'll customize our templates and examples, adapting them to suit your needs.</p>
	
	{% highlight html %}
	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8">
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
	    <meta name="viewport" content="width=device-width, initial-scale=1">
	    <title>Base project</title>

	    <link rel="stylesheet" href="./public/library/css/main.css">

	    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
	    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	    <![endif]-->
	  </head>
	  <body>
	  	<div id="l-wrapper">
	  		<header id="l-header">
				<div class="l-container">
					<a href="/">Logo</a>
				</div>
			</header>
			<main id="l-content">
				<div class="l-container">
				    <h1>Hello, world!</h1>
				</div>
			</main>

			<footer id="l-footer">

			</footer>
		
		</div>
	    <script src="./public/library/js/main.min.js"></script>
	  </body>
	</html>
	{% endhighlight %}

</section>