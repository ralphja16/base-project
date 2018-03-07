# Navigation

## SCSS Variables

## Examples

## Animations

There are a serveral animations build in for hover states.
Om deze animaties te gebruiken dien je de <code>$navigation-animation</code> op <code>'true'</code> te zetten.

Beneden aan in de Scss file is een block met alle type animaties. Je kunt uit een van de animaties kiezen door één van de animatie type varialbles <code>$animation-type-...</code> op <code>'true'</code> te zetten en de specifieke class op de Navigation holder te plaatsen. Zet de andere animatie-variables op <code>'false'</code>. Hierdoor wordt de styling niet mee genomen.

### Shift

To use the Shift animation, set the variable <code>$animation-type-shift</code> on <code>'true'</code>.
And place the <code>a-shift</code> class on the navigation holder.

```html
<nav class="m-navigation a-shift">
	...
</nav>
```

## Methodes

## Events
