---
layout: docs
title: Radiobuttons
description: 
group: Objects
---

# {{ page.title }}

<section id="headings clearfix">
	<h2 class="section__title">Radiobuttons</h2>

	<fieldset class="o-radiobutton__container">
		<label class="o-radiobutton__label">First radio
			<input class="o-radiobutton__input" type="radio" name="radio" checked="checked"/>
			<div class="o-radiobutton__indicator"></div>
		</label>
	</fieldset>
	<fieldset class="o-radiobutton__container">
		<label class="o-radiobutton__label">Second radio
			<input class="o-radiobutton__input" type="radio" name="radio"/>
			<div class="o-radiobutton__indicator"></div>
		</label>
	</fieldset>
	<fieldset class="o-radiobutton__container">
		<label class="o-radiobutton__label">Disabled
			<input class="o-radiobutton__input" type="radio" name="radio2" disabled="disabled"/>
			<div class="o-radiobutton__indicator"></div>
		</label>
	</fieldset>
	<fieldset class="o-radiobutton__container">
		<label class="o-radiobutton__label">Disabled & checked
			<input class="o-radiobutton__input" type="radio" name="radio2" disabled="disabled" checked="checked"/>
			<div class="o-radiobutton__indicator"></div>
		</label>
	</fieldset>


	
	{% highlight html %}
	<fieldset class="o-radiobutton__container">
		<label class="o-radiobutton__label">First radio
			<input class="o-radiobutton__input" type="radio" name="radio" checked="checked"/>
			<div class="o-radiobutton__indicator"></div>
		</label>
	</fieldset>
	<fieldset class="o-radiobutton__container">
		<label class="o-radiobutton__label">Second radio
			<input class="o-radiobutton__input" type="radio" name="radio"/>
			<div class="o-radiobutton__indicator"></div>
		</label>
	</fieldset>
	<fieldset class="o-radiobutton__container">
		<label class="o-radiobutton__label">Disabled
			<input class="o-radiobutton__input" type="radio" name="radio2" disabled="disabled"/>
			<div class="o-radiobutton__indicator"></div>
		</label>
	</fieldset>
	<fieldset class="o-radiobutton__container">
		<label class="o-radiobutton__label">Disabled & checked
			<input class="o-radiobutton__input" type="radio" name="radio2" disabled="disabled" checked="checked"/>
			<div class="o-radiobutton__indicator"></div>
		</label>
	</fieldset>
	{% endhighlight %}

</section>