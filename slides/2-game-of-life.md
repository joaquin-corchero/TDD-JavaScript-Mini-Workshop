Deceptively Simple
---
(red-green-refactor)

- Think!
- Describe how it works
- Turn it into a test (add assertion)
- See it failing
- Make it pass (as quickly as possible)
- Refactor


Our first test
---

````javascript
<!--#include virtual="test/2-game-of-life/01.js" -->````


Enough to make it pass
---

(before refactoring)

````javascript
<!--#include virtual="test/2-game-of-life/01-solution.js" -->````


Remove duplication
---

````javascript
<!--#include virtual="test/2-game-of-life/01-solution-refactored.js" -->````


Onto our next test (model)
---

````javascript
<!--#include virtual="test/2-game-of-life/02.js" -->````


Enough to make it pass
---

````javascript
<!--#include virtual="test/2-game-of-life/02-solution.js" -->````


Back onto the view
---

````javascript
<!--#include virtual="test/2-game-of-life/03.js" -->````


Enough to make it pass
---

````javascript
<!--#include virtual="test/2-game-of-life/03-solution.js" -->````
