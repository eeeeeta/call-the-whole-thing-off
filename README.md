Let's Call the Whole Thing Off
------------------------------
*♪ You say /ˈiːð.ə(ɹ)/ and I say /ˈaɪð.ə(ɹ)/ ♪*

## What is this thing?
Have you ever been writing code like this:
```javascript
if (a || b) {
    // which one was it?
}
```
...and wanted to get which value was eventually used in your `||` OR statement?


Well, *Let's Call the Whole Thing Off* is for you!

## How do I use it?
It's simple!
```javascript
var a = "I'm an example!";
var b = false;
if (either(b, a)) {
    console.log(either.which()); // "I'm an example!"
}
```
Just replace your `||` statement with `either(a, b, c...`. So for `if (oh || my || god)`, you would put `if (either(oh, my, god))`.
Magic™!

## But what if there's more than one true statement?
`either()` will take the **first** statement that is true (would pass an `if ()`) and make it available to `either.which()`.
You can also use `either.all()`, which will return **all** true statements in an array:
```javascript
if (either.all(true, true, true)) {
    console.log(either.which()) // [true, true, true]
}
```

## Can I have some tests?
Sure:
```
$ npm test
```
*(you might need to `npm install` first to install the `mocha` devDependency)*

