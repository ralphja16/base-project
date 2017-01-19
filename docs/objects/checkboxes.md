---
layout: docs
title: Checkboxes
description: 
group: Objects
---

# {{ page.title }}

<section id="headings clearfix">
	<h2 class="section__title">Checkboxes</h2>

	<fieldset class="o-checkbox__container">
		<label class="o-checkbox__label">First checkbox
			<input class="o-checkbox__input" type="checkbox" checked="checked"/>
			<div class="o-checkbox__indicator"></div>
		</label>
	</fieldset>

	<fieldset class="o-checkbox__container">
		<label class="o-checkbox__label">Second checkbox
			<input class="o-checkbox__input" type="checkbox"/>
			<div class="o-checkbox__indicator"></div>
		</label>
	</fieldset>

	<fieldset class="o-checkbox__container">
		<label class="o-checkbox__label">Disabled
			<input class="o-checkbox__input" type="checkbox" disabled="disabled"/>
			<div class="o-checkbox__indicator"></div>
		</label>
	</fieldset>

	<fieldset class="o-checkbox__container">
		<label class="o-checkbox__label">Disabled &amp; checked
			<input class="o-checkbox__input" type="checkbox" disabled="disabled" checked="checked"/>
			<div class="o-checkbox__indicator"></div>
		</label>
	</fieldset>


	
	{% highlight html %}
	<fieldset class="o-checkbox__container">
		<label class="o-checkbox__label">First checkbox
			<input class="o-checkbox__input" type="checkbox" checked="checked"/>
			<div class="o-checkbox__indicator"></div>
		</label>
	</fieldset>

	<fieldset class="o-checkbox__container">
		<label class="o-checkbox__label">Second checkbox
			<input class="o-checkbox__input" type="checkbox"/>
			<div class="o-checkbox__indicator"></div>
		</label>
	</fieldset>

	<fieldset class="o-checkbox__container">
		<label class="o-checkbox__label">Disabled
			<input class="o-checkbox__input" type="checkbox" disabled="disabled"/>
			<div class="o-checkbox__indicator"></div>
		</label>
	</fieldset>

	<fieldset class="o-checkbox__container">
		<label class="o-checkbox__label">Disabled &amp; checked
			<input class="o-checkbox__input" type="checkbox" disabled="disabled" checked="checked"/>
			<div class="o-checkbox__indicator"></div>
		</label>
	</fieldset>
	{% endhighlight %}

</section>