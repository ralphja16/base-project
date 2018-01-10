# Sass guidelines

## Naming convention

### Components naming

```SCSS
@charset "UTF-8";

/* =============================================================================
  CONFIG
============================================================================= */

$object-name: 					'image';


/* =============================================================================
  BASE
============================================================================= */

.o-#{$object-name} {

}
```

### BEM

Block Element Modifier

(Documentation: [http://getbem.com/naming/])

#### Block

Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well.

#### Element

Parts of a block and have no standalone meaning. Any element is semantically tied to its block.

#### Modifier

Flags on blocks or elements. Use them to change appearance, behavior or state.

## Rules

Here are some rules for writing clean (s)css.

### white space

* Between selecter and { one space
* After a : on space
* Remove unnecessary line breaks

### @includes

@includes at the bottom of the selector

```SCSS
.selector {
	background: white;
	width: 100px;
	height: 100px;
	@include rem(16);
	@include transition(all, ease, .3s);
}
```

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

## States

is--active

### Hamburger menu

https://github.com/jonsuh/hamburgers
