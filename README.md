# CSS Form Styling

A demonstration project showcasing a responsive, accessible HTML form styled with modern CSS Grid layout techniques. This project focuses on semantic HTML, accessibility, and clean, maintainable CSS — enhanced with light JavaScript for interactivity. No data is submitted; the form is purely for UI demonstration purposes.

[View on GitPage](https://chrisnajman.github.io/css-form-styling)

## CSS

The `form.css` file applies a modern CSS Grid layout to the form, using media query range syntax to adapt from single-column to two-column layouts responsively. The styling includes:

- `grid-template-columns` with `repeat()` for responsive columns.
- The `.full-width` utility spans elements across the full form width.
- Selective use of Flexbox (e.g., checkbox/radio layouts) for simpler inline content.
- Enhanced form control appearance (uniform font, border radius, color scheme).
- Custom focus states, hover effects, and styling for required indicators.
- Nested selectors and `:has()` for clean component-based logic.
- Respects accessibility and usability with consistent spacing and legible controls.

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

- `form.js`: Prevents default form submission behavior to stop URL parameter generation and resets form fields after submission.

### Other

- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

> [!IMPORTANT]
> Remember to change `const LOCAL_STORAGE_PREFIX` in `js-modules/theme.js` to a unique identifier.

---

## Accessibility

- All form inputs are associated with `label` elements using `for` and `id` attributes.
- The `fieldset` and `legend` elements group related radio inputs semantically.
- The telephone input uses `aria-describedby` for inline screen reader help.
- Visual focus indicators are preserved for keyboard navigation.
- Inputs use `autocomplete`, `inputmode`, and `placeholder` attributes for better mobile and screen reader support.
- `required` fields are clearly marked with both visual indicators and HTML validation attributes.
- The form is fully keyboard-navigable with tab and arrow keys.

The site is fully navigable using tab keys and up/down arrows.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
