<!-- Question 1: -->

-> getElementById: it helps to select one element by its id
-> getElementsByClassName:
it helps to select element with the same class
-> querySelector / querySelectorAll:
_ querySelector ; Check the 1st element matches (return empty if not found)
_ querySelectorAll; Check the all the element matches , (return empty if not found)

<!-- Question 2: -->

step 1: create an element using document.createElement()
step 2: add content
step 3: select the parent element where you want to insert
step 4: then insert it using appendChild()

<!-- Question 3: -->

Event Bubbling : When we click a element it propagate through its parent.
It maintain the hierarchy
when you click a button it go to its parent and then grandparent and so on

<!-- Question 4: -->

Event Delegation : In this precess we add only one event listener on parents instead of adding multiple event listeners on children.
It help to save memory and it is more efficient

<!-- Question 5: -->

preventDefault() : It stops the default behavior
stopPropagation() : It prevent an event from bubbling(event bubbling)
