# Javascript asynchronicity
The goal of this page is to reinforce sync/async **ideas** through example **code**:

It's all about how asynchronous functions are defined, and how they are called.

## The ideas
### Synchronous
A caller must wait for the function to be done.  The results are then available to the caller: successful or failure.

#### Defining a synchronous function
* use`return` when the function succeeds, to pass good stuff to the caller
* use `throw` when the function fails, to pass error stuff to the caller
* _(remember this function defining pattern)_

#### Calling a synchronous function
* use the `return` value when the function succeeds
* wrap the call in a `try`/`catch` block to handle when the function fails
* _(remember this function calling pattern)_
  
### Asynchronous
A caller doesn't wait for the function to be done, but has to know how to get the results when they become available in the future.

#### Define an asynchronous function
* A function is asynchronous when it returns a `Promise`
* You can tell your function to return a `Promise` in two ways
  * Manually (`return new Promise()`)
    * call `resolve()` when the function succeeds, to pass good stuff to the caller
    * call `reject()` when the function fails, to pass error stuff to the caller
  * Automatically `async function myFn()`
    * use `return` when the function succeeds, to pass good stuff to the caller
    * use `throw` when the function fails, to pass error stuff to the caller
    * _déjà vu_

#### Call an asynchronous function
* Once a function is asynchronous by either means, callers use it in the same way
    * a caller doesn't care _how_ a function became asynchronous 
    * it has to handle the `Promise` either way
* Callers can handle a `Promise` in two ways
  * Manually - chain functions to the promise
    * chain a `.then()` to the promise to access whatever was passed to `resolve()`
    * chain a `.except()` to the promise to access whatever was passed to `reject()`
  * Automatically -  put an `await` in front of the promise
    * use the `return` value when the function succeeds
    * wrap the call in a `try`/`catch` block to handle when the function fails
    * _déjà vu_

### Magic words
The automated synchronicity is provided by the two magic words:  `async`/`await`

#### <span class="code">async</span>
> magic when **defining** an asynchronous function
* The goal of `async` in front of a function is to make the function syntactically as close to a regular function as possible
  * a regular function doesn't create a `Promise`
  * a regular function doesn't call `resolve()` when it's done - it just `return`s a value (or not)
  * a regular function doesn't call `reject()` when there's an error - it just throws an exception (or not)
  * `async` does the `Promise`, `resolve` and `reject` work for you

#### <span class="code">await</span>
> magic when **calling** an asynchronous function
* To handle a `Promise` manually:
  * you need `.then()` to get the stuff passed to `resolve()`
  * you need `.catch()` to get the stuff passed to `reject()`
* The goal of `await` in front of a call to an asynchronous method (either manual or auto) is to make the function syntactially as close to a regular function as possible
  * a regular function doesn't `.then()` to extract the returned value - it just uses the value returned from a function
  * a regular function uses a `try`/`catch` block to get exceptions that are thrown


## The code

### Defining the functions
Here are three versions of the same goal:
* Call `...Fn()` with a `1`, it succeeds: `hooray`!
* Call it with anything else, it fails: `boo`!

<table>
<tbody>
<tr>
  <th>Synchronous</th>
  <th>Automatically Async</th>
  <th>Manually Async</th>
</tr>
<tr>
<td>
A plain jane function

```javascript
function plainJaneFn(v) {
  if (v == 1) {
      return "hooray"
  } else {
      throw 'boo'
  }
}
```
<br/><br/>
</td>

<td>
No benefit being async - just run with it

```javascript
async function automaticallyAsyncFn(v) {
  if (v == 1) {
      return 'hooray'
  } else {
      throw 'boo'
  }
}
```
<br/><br/>
</td>

<td>
This is functionally the same as the auto async

```javascript
function manuallyAsyncFn(v) {
  return new Promise((resolve, reject) => {
      if (v == 1) {
          resolve('hooray')
      } else {
          reject('boo')
      }
  })
}
```
<br/>
</td>
</tr>

</tbody>
</table>

### Calling the functions

First note that simply calling `plainJaneFn()` looks like this:

```javascript{3}
function plainJaneCaller(v) {
    try {
        result = plainJaneFn(v)        
        console.log(result)
    } catch (error) {
        console.error(`did not work, got: ${error}`)
    }
}
```

Keep this in mind as you look at the following.


#### <span class="code">manuallyAsyncFn()</span>
These are behaviourly identical:

<table>
<tbody>
<tr>
<td>
Doesn't this look <i>almost</i> the same as the synchronous call to the synchronous `plainJaneFn()` above?

```javascript{3}
async function autoHandleManualAsyncStuff(v) {
    try {
        const result = await manuallyAsyncFn(v)
        console.log(result)
    } catch(error)  {
        console.error(`did not work, got: ${error}`)
    }
}
```
</td>

<td>
The first function is effectively rewritten for you, as if you typed this:

```javascript{2}
function manuallyHandleManualAsyncStuff(v) {
    manuallyAsyncFn(v)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.error(`did not work, got: ${error}`)
        })
}
```
</td>

</tr>
</tbody>
</table>

#### <span class="code">autoAsyncFn()</span>
As you see, it doesn't matter if the async function you call was written with `async/await` or if it manually created its `Promise`, you call either the same way

<table>
<tbody>
<tr>
<td>

```javascript{3}
async function autoHandleAutoAsyncStuff(v) {
    try {
        const result = await autoAsyncFn(v)
        console.log(result)
    } catch(error)  {
        console.error(`did not work, got: ${error}`)
    }
}
```
</td>

<td>

```javascript{2}
function manuallyHandleAutoAsyncStuff(v) {
    autoAsyncFn(v)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.error(`did not work, got: ${error}`)
        })
}
```
</td>

</tr>
</tbody>
</table>

