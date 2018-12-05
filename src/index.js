import {
  getParents,
  getUniqueSelectorWithinParent,
  sanitizeOptions,
  testSelector,
} from './utilities';
import {getNthChildSelector} from './selectors';
import {DESCENDANT_OPERATOR} from './constants';

/**
 * Generates unique CSS selector for an element.
 * @param {Element} element
 * @param {css_selector_generator_options} [custom_options]
 * @return {string}
 */
export function getCssSelector (element, custom_options = {}) {
  const options = sanitizeOptions(custom_options);
  const parents = getParents(element, options.root);
  const result = [];
  for (let i = 0; i < parents.length; i++) {
    result.unshift(getUniqueSelectorWithinParent(parents[i], options));
    const selector = result.join(DESCENDANT_OPERATOR);
    if (testSelector(element, selector, options.root)) {
      return selector;
    }
  }
  // use nth-child selector chain to root as fallback
  return parents
    .map((element) => getNthChildSelector(element)[0])
    .join(DESCENDANT_OPERATOR);
}

/**
 * @typedef {Object} css_selector_generator_options
 * @property {Array.<css_selector_type>} [selectors] - List of selector types to use. They will be prioritised by their order.
 * @property {RegExp | string} [whitelist] - List of selectors that should be prioritised.
 * @property {RegExp | string} [blacklist] - List of selectors that should be ignored.
 * @property {Element} [root] - Root element inside which the selector will be generated. If not set, the document root will be used.
 * @property {boolean} [combineWithinSelector = true] - If set to `false`, the generator will not test combinations of selectors of single type (e.g. multiple class selectors).
 * @property {boolean} [combineBetweenSelectors = false] - If set to `true`, the generator will try to test combinations of selectors of different types. Warning: Turning this on may cause performance issues.
 */

/**
 * @typedef {'id' | 'class' | 'tag' | 'attribute' | 'nthchild'} css_selector_type
 */
