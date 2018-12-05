# CSS Selector Generator

JavaScript object that creates a unique CSS selector for a given DOM element.

It also generates shorter selectors and is faster and/or more robust than many other libraries - see this [comparison](https://github.com/fczbkk/css-selector-generator-benchmark) and select the best alternative for your use case.

## Documentation

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

-   [getCssSelector](#getcssselector)
    -   [Parameters](#parameters)
-   [css_selector_generator_options](#css_selector_generator_options)
    -   [Properties](#properties)
-   [css_selector_type](#css_selector_type)

### getCssSelector

Generates unique CSS selector for an element.

#### Parameters

-   `element` **[Element](https://developer.mozilla.org/docs/Web/API/Element)** 
-   `custom_options` **[css_selector_generator_options](#css_selector_generator_options)?**  (optional, default `{}`)

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

### css_selector_generator_options

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

#### Properties

-   `selectors` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[css_selector_type](#css_selector_type)>?** List of selector types to use. They will be prioritised by their order.
-   `whitelist` **([RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) \| [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))?** List of selectors that should be prioritised.
-   `blacklist` **([RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp) \| [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))?** List of selectors that should be ignored.
-   `root` **[Element](https://developer.mozilla.org/docs/Web/API/Element)?** Root element inside which the selector will be generated. If not set, the document root will be used.
-   `combineWithinSelector` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** If set to `false`, the generator will not test combinations of selectors of single type (e.g. multiple class selectors).
-   `combineBetweenSelectors` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)?** If set to `true`, the generator will try to test combinations of selectors of different types. Warning: Turning this on may cause performance issues.

### css_selector_type

Type: (`"id"` \| `"class"` \| `"tag"` \| `"attribute"` \| `"nthchild"`)

## Migrate from v1 to v2

TODO

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue on GitHub][1] or send me an e-mail at [riki@fczbkk.com][2]

## License

CSS Selector Generator is published under the [MIT license][3].

[1]: https://github.com/fczbkk/css-selector-generator/issues

[2]: mailto:riki@fczbkk.com?subject=CSSSelectorGenerator

[3]: https://github.com/fczbkk/css-selector-generator/blob/master/LICENSE
