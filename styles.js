.selector-for-some-widget {
  box-sizing: content-box;
}
.alpha { color: $purple; }
.beta {
  color: $yellow-300;
  background-color: $indigo-900;
}
// Color mode variables in _root.scss
@include color-mode(dark) {
  // CSS variable overrides here...
}