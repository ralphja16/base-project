---
layout: docs
title: Dropdowns
description: 
group: Objects
---

# {{ page.title }}

<section id="headings clearfix">
	<h2 class="section__title">Dropdowns</h2>

	<div class="o-dropdown">
		<button class="o-btn o-dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Dropdown
			<span class="caret">&#9660;</span>
		</button>
		<ul class="o-dropdown__menu" aria-labelledby="dropdownMenu1">
			<li><a href="#">Action</a></li>
			<li><a href="#">Another action</a></li>
			<li><a href="#">Something else here</a></li>
			<li role="separator" class="divider"></li>
			<li><a href="#">Separated link</a></li>
		</ul>
	</div>

	<div class="o-dropdown">
		<button class="o-btn o-dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Dropdown 2
			<span class="caret">&#9660;</span>
		</button>
		<ul class="o-dropdown__menu" aria-labelledby="dropdownMenu2">
			<li><a href="#">Action</a></li>
			<li><a href="#">Another action</a></li>
			<li><a href="#">Something else here</a></li>
			<li role="separator" class="divider"></li>
			<li><a href="#">Separated link</a></li>
		</ul>
	</div>

	
	{% highlight html %}
	<div class="o-dropdown">
		<button class="o-btn o-dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Dropdown
			<span class="caret">&#9660;</span>
		</button>
		<ul class="o-dropdown__menu" aria-labelledby="dropdownMenu1">
			<li><a href="#">Action</a></li>
			<li><a href="#">Another action</a></li>
			<li><a href="#">Something else here</a></li>
			<li role="separator" class="divider"></li>
			<li><a href="#">Separated link</a></li>
		</ul>
	</div>
	{% endhighlight %}

</section>