1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 => getElementById: Select specific element by the Selected Id.
    getElementsByClassName : Select element under the same class name.
    querySelector: It select the first element that matches the selector
    querySelectorAll: It select the all element that matches the selector

How do you create and insert a new element into the DOM?
 => First create a new element using createELement()
    Add html content 
    select the element you want to insert 
    then insert using appendChild()

4. What is Event Delegation in JavaScript? Why is it useful?
  => In this method we add event Listener on the parent instead of added multiple event Listener on child.
      * it is efficient 
      * it simplifies the code
      * memory usage
5. What is the difference between preventDefault() and stopPropagation() methods?
  => preventDefault(): Prevent default action from occurring.
  For example : If a user click the submit button on form by default it will submit but if we use preventDefault it will prevent from submitting.

  stopPropagation(): It stops the event from Bubbling. 
  When an event happen on a child element it propagate up-words
  all the way to document. But if we use stopPropagation() it will stop Bubbling at the element where it is called. 

