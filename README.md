# Quiz
## 1
>Google search tool:
>the following ‘pseudo’ code represents an input listener for the Google search tool:

```
$('#search').keyup(function(e){
    var topFiveSuggestions = fetchTopFiveSuggestions(e.target.val);
    showAsAutoComplete(topFiveSuggestions);
});
```


> what’s the disadvantage of this code ?

- Keyup event is a bad choice for input listening, because it will trigger on system keys clicks, which do not affect the input value. And also woudn't handle right events with long pressed button.
- if fetchTopFiveSuggestions is HTTP request, it will be async and the result going to showAsAitocomplete will be always empty. To solve this it's possible to use jQuery .ajax() or promises.
- e.target.val wouldn't return any value. Instead can use $(e.target).val() from jQuery, or e.target.value.

> add your own code that will solve the current issues.

```
$('#search').on('input', e => {
    const query = $(e.target).val().trim();
    query && fetchTopFiveSuggestions(query)
        .then(showAsAutoComplete)
        .catch(handleError);
});
```

## 2
> The next function gets a jQuery element and a Boolean flag.
> The function should show or hide the element, following the flag.
> flag==false: hide the element
> flag==true: show the element
> the function should contain only a single line that will starts with: ‘$element’.
> Complete the function, using ‘show’ and ‘hide’ jQuery functions.
```
function showMe($element, flag){
    $element && (flag ? $element.show() : $element.hide());    
}
```
