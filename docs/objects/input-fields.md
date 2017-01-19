---
layout: docs
title: Input fields
description: 
group: Objects
---

# {{ page.title }}
<section id="headings clearfix">
	<h2 class="section__title">Input fields</h2>

	<fieldset class="o-input-field__container">
		<label for="uniqueID" class="o-input-field__label">Input label</label>
		<input type="text" class="o-input-field" id="uniqueID" placeholder="This is a placeholder">
	</fieldset>

	<fieldset class="o-input-field__container">
		<label for="uniqueID2" class="o-input-field__label">Input label disabled</label>
		<input type="text" class="o-input-field" id="uniqueID2" placeholder="This is a placeholder" disabled="disabled">
	</fieldset>

	<fieldset class="o-input-field__container">
		<label for="uniqueID3" class="o-input-field__label">Small input label</label>
		<input type="text" class="o-input-field o-input-field--sm" id="uniqueID3" placeholder="This is a placeholder">
	</fieldset>


	
	{% highlight html %}
	<fieldset class="o-input-field__container">
		<label for="uniqueID" class="o-input-field__label">Input label</label>
		<input type="text" class="o-input-field" id="uniqueID" placeholder="This is a placeholder">
	</fieldset>

	<fieldset class="o-input-field__container">
		<label for="uniqueID2" class="o-input-field__label">Input label disabled</label>
		<input type="text" class="o-input-field" id="uniqueID2" placeholder="This is a placeholder" disabled="disabled">
	</fieldset>

	<fieldset class="o-input-field__container">
		<label for="uniqueID3" class="o-input-field__label">Small input label</label>
		<input type="text" class="o-input-field o-input-field--sm" id="uniqueID3" placeholder="This is a placeholder">
	</fieldset>
	{% endhighlight %}

</section>