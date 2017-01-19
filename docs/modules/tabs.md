---
layout: docs
title: Tabs
description: 
group: Modules
---

# {{ page.title }}

<section id="headings clearfix">
	
	<h2 class="section__title">Tabs</h2>

	<div class="m-tabs">
		<nav class="m-tabs__nav">
			<ul>
				<li class="m-tabs__item m-tabs__item--selected" role="presentation"><a class="m-tabs__item__link" href="#home" role="tab" data-toggle="tab" aria-controls="home">Home</a></li>
				<li class="m-tabs__item" role="presentation"><a class="m-tabs__item__link" href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
				<li class="m-tabs__item" role="presentation"><a class="m-tabs__item__link" href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
				<li class="m-tabs__item" role="presentation"><a class="m-tabs__item__link" href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
			</ul>

			<div class="o-select m-tabs__nav__selectbox__container">
				<select class="m-tabs__nav__selectbox">
					<option value="0">home</option>
					<option value="1">profile</option>
					<option value="2">messages</option>
					<option value="3">settings</option>
				</select>
				<div class="o-select__arrow"></div>
			</div>
		</nav>
		<div class="m-tabs__content">
			<div role="tabpanel" class="m-tabs__pane m-tabs__pane--active" id="home">1...</div>
			<div role="tabpanel" class="m-tabs__pane" id="profile">2...</div>
			<div role="tabpanel" class="m-tabs__pane" id="messages">3...</div>
			<div role="tabpanel" class="m-tabs__pane" id="settings">4...</div>
		</div>
	</div>

	<div class="m-tabs">
		<nav class="m-tabs__nav">
			<ul>
				<li class="m-tabs__item m-tabs__item--selected" role="presentation"><a class="m-tabs__item__link" href="#start" role="tab" data-toggle="tab" aria-controls="start">start</a></li>
				<li class="m-tabs__item" role="presentation"><a class="m-tabs__item__link" href="#end" aria-controls="end" role="tab" data-toggle="tab">end</a></li>
				<li class="m-tabs__item" role="presentation"><a class="m-tabs__item__link" href="#weekend" aria-controls="weekend" role="tab" data-toggle="tab">weekend</a></li>
				<li class="m-tabs__item" role="presentation"><a class="m-tabs__item__link" href="#finish" aria-controls="finish" role="tab" data-toggle="tab">finish</a></li>
			</ul>

			<div class="o-select m-tabs__nav__selectbox__container">
				<select class="m-tabs__nav__selectbox">
					<option value="0">start</option>
					<option value="1">end</option>
					<option value="2">weekend</option>
					<option value="3">finish</option>
				</select>
				<div class="o-select__arrow"></div>
			</div>
		</nav>
		<div class="m-tabs__content">
			<div role="tabpanel" class="m-tabs__pane m-tabs__pane--active" id="home">1...</div>
			<div role="tabpanel" class="m-tabs__pane" id="profile">2...</div>
			<div role="tabpanel" class="m-tabs__pane" id="messages">3...</div>
			<div role="tabpanel" class="m-tabs__pane" id="settings">4...</div>
		</div>
	</div>
	
	{% highlight html %}
	<div class="m-tabs">

		<nav class="m-tabs__nav">

			<ul>
				<li class="m-tabs__item m-tabs__item--selected" role="presentation"><a class="m-tabs__item__link" href="#home" role="tab" data-toggle="tab" aria-controls="home">Home</a></li>
				<li class="m-tabs__item" role="presentation"><a class="m-tabs__item__link" href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
				<li class="m-tabs__item" role="presentation"><a class="m-tabs__item__link" href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
				<li class="m-tabs__item" role="presentation"><a class="m-tabs__item__link" href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
			</ul>

			<div class="o-select m-tabs__nav__selectbox__container">
				<select class="m-tabs__nav__selectbox">
					<option value="0">home</option>
					<option value="1">profile</option>
					<option value="2">messages</option>
					<option value="3">settings</option>
				</select>
				<div class="o-select__arrow"></div>
			</div>

		</nav>

		<div class="m-tabs__content">
			<div role="tabpanel" class="m-tabs__pane m-tabs__pane--active" id="home">1...</div>
			<div role="tabpanel" class="m-tabs__pane" id="profile">2...</div>
			<div role="tabpanel" class="m-tabs__pane" id="messages">3...</div>
			<div role="tabpanel" class="m-tabs__pane" id="settings">4...</div>
		</div>
		
	</div>
	{% endhighlight %}

</section>