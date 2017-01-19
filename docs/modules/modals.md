---
layout: docs
title: Modals
description: 
group: Modules
---

# {{ page.title }}

<section id="headings clearfix">
	<h2 class="section__title"></h2>
	
	<h2 class="section__title">Modals</h2>
	<button type="button" class="o-btn o-btn--primary js--m-modal__trigger" data-modal="#myModal1">Launch 1</button>
	<div class="m-modal m-modal__bg" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="m-modal__dialog" role="document">
			<div class="m-modal__content">
				<h1>Modal title 1</h1>
				<p>modal content1</p>
				<a href="javascript:void(0)" class="m-modal__close">
					<svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/><path d="M0 0h24v24h-24z" fill="none"/></svg>
				</a>
			</div>
		</div>
	</div>

	<button type="button" class="o-btn o-btn--primary js--m-modal__trigger" data-modal="#myModal2">Launch 2</button>
	<div class="m-modal m-modal__bg" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="m-modal__dialog" role="document">
			<div class="m-modal__content">
				<h1>Modal title 2</h1>
				<p>modal content2</p>
				<a href="javascript:void(0)" class="m-modal__close">
					<svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/><path d="M0 0h24v24h-24z" fill="none"/></svg>
				</a>
			</div>
		</div>
	</div>

	
	{% highlight html %}
	<button type="button" class="o-btn o-btn--primary js--m-modal__trigger" data-modal="#myModal1">Launch 1</button>
	<div class="m-modal m-modal__bg" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
		<div class="m-modal__dialog" role="document">
			<div class="m-modal__content">
				<h1>Modal title 1</h1>
				<p>modal content1</p>
				<a href="javascript:void(0)" class="m-modal__close">
					<svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/><path d="M0 0h24v24h-24z" fill="none"/></svg>
				</a>
			</div>
		</div>
	</div>
	{% endhighlight %}

</section>