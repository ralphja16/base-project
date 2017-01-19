---
layout: docs
title: Grid
description: 
group: Global
---

# {{ page.title }}

<section id="headings clearfix">
	<h2 class="section__title">Grid With No modifiers</h2>

	<div class="l-grid">
		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-12">col-xxs-12</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-6">col-xxs-6</div>
			<div class="l-grid__item col-xxs-6">col-xxs-6</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-4">col-xxs-4</div>
			<div class="l-grid__item col-xxs-4">col-xxs-4</div>
			<div class="l-grid__item col-xxs-4">col-xxs-4</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-3">col-xxs-3</div>
			<div class="l-grid__item col-xxs-3">col-xxs-3</div>
			<div class="l-grid__item col-xxs-3">col-xxs-3</div>
			<div class="l-grid__item col-xxs-3">col-xxs-3</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
		</div>

	</div>

	
	{% highlight html %}
	<div class="l-grid">

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-12">col-xxs-12</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-6">col-xxs-6</div>
			<div class="l-grid__item col-xxs-6">col-xxs-6</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-4">col-xxs-4</div>
			<div class="l-grid__item col-xxs-4">col-xxs-4</div>
			<div class="l-grid__item col-xxs-4">col-xxs-4</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-3">col-xxs-3</div>
			<div class="l-grid__item col-xxs-3">col-xxs-3</div>
			<div class="l-grid__item col-xxs-3">col-xxs-3</div>
			<div class="l-grid__item col-xxs-3">col-xxs-3</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
			<div class="l-grid__item col-xxs-2">col-xxs-2</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
			<div class="l-grid__item col-xxs-1">col-xxs-1</div>
		</div>
		
	</div>
	{% endhighlight %}

</section>

<section id="headings clearfix">
	<h2 class="section__title">Grid With Nested Grid</h2>

	<div class="l-grid">
		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-6">
				<div class="l-container">
					<div class="l-grid__row">
						<div class="l-grid__item col-xxs-6">Nested 1</div>
						<div class="l-grid__item col-xxs-6">Nested 2</div>
					</div>
				</div>
			</div>
			<div class="l-grid__item col-xxs-6">

				<div class="l-container">
					<div class="l-grid__row">
						<div class="l-grid__item col-xxs-4">Nested 1</div>

					</div>
				</div>
			</div>
		</div>
		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-3">1</div>
			<div class="l-grid__item col-xxs-8">2</div>
			<div class="l-grid__item col-xxs-1">3</div>
		</div>
		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-2">col 2</div>
			<div class="l-grid__item col-xxs-4">col 4</div>
			<div class="l-grid__item col-xxs-6">col 6</div>
		</div>
	</div>

	{% highlight html %}
	<div class="l-grid">

		<div class="l-grid__row">
	
			<div class="l-grid__item col-xxs-6">
				<div class="l-container">
					<div class="l-grid__row">
						<div class="l-grid__item col-xxs-6">Nested 1</div>
						<div class="l-grid__item col-xxs-6">Nested 2</div>
					</div>
				</div>
			</div>
	
			<div class="l-grid__item col-xxs-6">
				<div class="l-container">
					<div class="l-grid__row">
						<div class="l-grid__item col-xxs-4">Nested 1</div>
					</div>
				</div>
			</div>

		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-3">1</div>
			<div class="l-grid__item col-xxs-8">2</div>
			<div class="l-grid__item col-xxs-1">3</div>
		</div>

		<div class="l-grid__row">
			<div class="l-grid__item col-xxs-2">col 2</div>
			<div class="l-grid__item col-xxs-4">col 4</div>
			<div class="l-grid__item col-xxs-6">col 6</div>
		</div>

	</div>
	{% endhighlight %}
</section>
<section id="flexboxgrid">
	<h2 class="section__title">Flexbox grid</h2>

	<div class="l-flex l-flex__justify--start">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>
	
	<div class="l-flex l-flex__justify--end">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>
	
	<div class="l-flex l-flex__justify--center">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>
	
	<div class="l-flex l-flex__justify--between">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>
	
	<div class="l-flex l-flex__justify--around">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>

	{% highlight html %}
		<div class="l-flex l-flex__justify--start">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>
	
	<div class="l-flex l-flex__justify--end">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>
	
	<div class="l-flex l-flex__justify--center">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>
	
	<div class="l-flex l-flex__justify--between">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>
	
	<div class="l-flex l-flex__justify--around">
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
		<div class="l-flex__item"> Item </div>
	</div>
	{% endhighlight %}
</section>