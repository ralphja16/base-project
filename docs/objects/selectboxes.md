---
layout: docs
title: Selectboxes
description: 
group: Objects
---

# {{ page.title }}

<section id="headings clearfix">
	
	<h2 class="section__title">Selectboxes</h2>

	<div class="o-select">
		<select>
			<option>First select</option>
			<option>Option</option>
			<option>Option</option>
		</select>
		<div class="o-select__arrow"></div>
	</div>

	<div class="o-select">
		<select disabled="disabled">
			<option>Disabled</option>
			<option>Option</option>
			<option>Option</option>
		</select>
		<div class="o-select__arrow"></div>
	</div>

	<div class="o-select o-select--sm">
		<select>
			<option>First select small</option>
			<option>Option</option>
			<option>Option</option>
		</select>
		<div class="o-select__arrow"></div>
	</div>

	
	{% highlight html %}
	<div class="o-select">
		<select>
			<option>First select</option>
			<option>Option</option>
			<option>Option</option>
		</select>
		<div class="o-select__arrow"></div>
	</div>

	<div class="o-select">
		<select disabled="disabled">
			<option>Disabled</option>
			<option>Option</option>
			<option>Option</option>
		</select>
		<div class="o-select__arrow"></div>
	</div>

	<div class="o-select o-select--sm">
		<select>
			<option>First select small</option>
			<option>Option</option>
			<option>Option</option>
		</select>
		<div class="o-select__arrow"></div>
	</div>
	{% endhighlight %}

</section>