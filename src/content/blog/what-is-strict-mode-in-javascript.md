---
title: What is Strict Mode in JavaScript
description: '"Strict mode" in JS is a way to opt-in to a restricted variant of
  JS, eliminating some errors & disallowing unsafe features for more secure &
  optimized code.'
pubDate: "2023-01-24"
image: /assets/1_xaJADF3RJOY9OiHCNxib5w_gl26p3.png
---

JavaScript's strict mode is a way to opt into a restricted variant of JavaScript. Strict mode eliminates some JavaScript silent errors by changing them to throw errors. It also fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.

When a script is running in strict mode, it cannot use certain features of JavaScript that are considered "unsafe" or "problematic." For example, in strict mode, you cannot use a variable without declaring it first with the "var" keyword. This helps prevent accidental global variable assignments, which can lead to hard-to-find bugs.

In addition to preventing accidental global variable assignments, strict mode also disallows the use of some other features that are considered "unsafe." For example, in strict mode you cannot use the "with" statement, which can also lead to hard-to-find bugs.

Strict mode also makes it impossible to accidentally create a global variable by misspelling a variable name. In normal JavaScript, if you accidentally create a global variable by misspelling a variable name, the global variable will simply be created with the misspelled name. In strict mode, this will throw an error.

Another important feature of strict mode is that it makes it impossible to delete variables or functions that are considered "non-configurable." This includes variables like "undefined," "NaN," and "Infinity," as well as function arguments and function names.

To enable strict mode for an entire JavaScript file, you can place the following line at the top of the file:

```javascript
"use strict";
```

You can also enable strict mode for a specific function by placing the line

```javascript
"use strict";
```

at the beginning of the function.

It's worth noting that strict mode is not backwards compatible with older JavaScript engines. This means that if you use strict mode in your code, it may not work properly in older browsers. However, with the vast majority of users now running modern browsers, this is becoming less of an issue.

In summary, strict mode is a feature in JavaScript that can help you write more secure and optimized code. It eliminates some silent errors and disallows some unsafe features. It's a good practice to use strict mode in your JavaScript projects, but be aware that it's not backwards compatible with older JavaScript engines.
F
ooter
