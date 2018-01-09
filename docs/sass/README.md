# Sass guidelines

## Naming convention

BEM

## Nesting

Don't nest more then 3 levels in a selector.

```SCSS
<!-- BAD EXAMPLE -->
.header {

	&__container{

		&__logo {
			color: white;
		}

		&__nav {

			&__container {
				width: 100%;
			}
		}
	}
}

<!-- GOOD EXAMPLE -->
.header__container {

	&__logo {
		color: white;
	}

	&__nav {

		&__container {
			width: 100%;
		}
	}
}

<!-- OR BETTER SPLIT IN SEPARATE CLASSES -->
.header

	&__container {

		&__logo {
			color: white;
		}
	}
}


.nav {
	&__container {
		width: 100%;
	}
}
```
