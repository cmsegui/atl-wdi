---
title: Resource Factories
type: lesson
duration: "1:25"
creator:
    name: Marc Wright
    city: WDIR
competencies: Front-end frameworks
---

# Angular Services

### Objectives
*After this lesson, students will be able to:*

- Refactor $http API calls as a service
- Describe the difference between a factory and a service

### Preparation
*Before this lesson, students should already be able to:*

- Create http requests with `$http`
- Describe RESTful resources
- Build a Node RESTFUL API

<br>

## You Do

- https://docs.angularjs.org/guide/services (read down to the Unit Testing section)
- https://toddmotto.com/factory-versus-service

<br>

## Angular Services - Intro (15 mins)

Each web application you build with Angular is composed of objects that collaborate to get stuff done. These objects need to be instantiated and wired together using [dependency injection](https://docs.angularjs.org/guide/di) for the app to work.

When you inject a dependency into a module, e.g.

```javascript
angular
  .module("lightsaberApp", ['ngResource']);
```

AngularJS offers several useful built-in services (e.g. `$http`, `$q`, `$rootScope`, `$animate`, `$log`), but for most applications you'll also want to create your own.

List of built-in Angular Services: http://howtodoinjava.com/angularjs/angularjs-services-built-in-and-custom/

Services are a great way to DRY up our code and make reusable modules that we can use to share information across our app. A Service is similiar to the `authHelper.js` that we created in Unit 2.


#### Services are Singletons

Angular [services](https://docs.angularjs.org/guide/services) (anything that can be injected as a dependency) are:

- **Lazily instantiated** – Angular only instantiates a service when it is needed
- **Singletons** – Each component dependent on a service gets a reference to the single instance generated by the service factory.  

> Note: A singleton is an object that there should only be one of.

Once instantiated, unlike a controller, it is persisted throughout the lifetime of our app.

If your app needs data from an API or database, we probably don't want to keep loading that same data every time we change routes. Fetching that data once and holding it in a service makes a lot of sense.

Also, because services are persistent singletons, they provide a mechanism to share data between controllers.


#### Example of a Service

```javascript
angular
  .module("myApp", [])
  .service('myService');
  
  function myService() {

  // a service is just a constructor function
  // that will be called with 'new'
  // this happens under the hood
  
  var self = this;

  self.sayHello = function(name) {
    return `Hello ${name}!`;
  };
});
```

You should only make a service if you only ever need to and want to make one instance of it.  For example:

- A function that we want to wrap up in an object with a name so it's clear and useable to check whether a JWT token is acceptable & should be authorized or not
- A function to add Cross Origin Resource Sharing to our app, so an API can share JSON with any domain
- A function to inject the replace every instance of the word "javascript" with "bagel", because that would make tons of sense



<br>

## Delivering a Custom Service - Codealong (45 mins)

Let's create a custom service in Codepen.io for practice. Make sure that you click on Settings -> JS to add AngularJS as an external script. Let's start by creating a new Angular app with a controller and a service.

```js
angular
  .module('myApp')
  .controller('greeterController', greeterController)
  .service('greeterService', greeterService);

function greeterController() {

}

function greeterService(){

}
```

This looks almost exactly the same as a controller module.

#### Injecting our `greeterService` into MainController

In order to use this service in our `greeterController`, we want to include it as a dependency.

```javascript
greeterController.$inject = ['greeterService'];

function greeterController(greeterService){

}
```

Let's test that this has been injected correctly by just returning something from inside the service:

```javascript
function greeterService() {
  console.log('greeterService is alive!');
  
  var self = this;
  self.greeting = 'The greeterService says Hi ';
}
```

Now let's assign it to a property in our `greeterController`

```javascript
function greeterController(greeterService){
  var self = this;
  self.greetingFromService = greeterService.greeting;
  ...
```

And finally bind it on our page so that we can see if something was returned:

```html
<body ng-app="myApp">
  <section ng-controller="greeterController as ctrl">
    <h1>AngularJS - Services</h1>
    <h4 ng-bind="ctrl.greetingFromService"></h4>
  </section>
</body>
```

You should see your string output!

#### One more example with a method

Let's look at one more example using a method. Let's add a `sayHello` method to our Service.

```js
function greeterService() {
  console.log('greeterService is alive!');
  
  var self = this;
  self.greeting = 'The greeterService says Hi ';
  
  self.sayHello = function(name) {
    return `${self.greeting} ${name}`;
  };
}
```

Let's assign it to a variable in our Controller and pass in a name as an argument.

```js
function greeterController(greeterService) {
  console.log('greeterCtrl is alive!');
  
  var self = this;  
  self.greetingFromService = greeterService.greeting;
  self.sayHelloFromService = greeterService.sayHello('Marc');
};
```

Finally, let's bind it to our view.

```html
<h4 ng-bind="ctrl.sayHelloFromService"></h4>
```

We should see something like this.

![](https://i.imgur.com/Fl1Y4LX.png)

<br>

## Factories

Another popular way to refactor your code in Angular is to use a Factory. In Angular, Services and Factories offer basically the same thing - a singleton that returns either an object (Service) or a function that returns an object (Factory). 

The choice of when to use Services and when to use Factories is purely a developer preference. Some devs like the pattern/syntax of a factory because you don't need to write a `var self = this;`.

For example, here is what our `greeterService` would look like as a `greeterFactory`.

```js
function greeterFactory() {
  return {
    greeting: "Hello World",
      
    sayHello: function(name) {
      return `${this.greeting} ${name}`;
    }
  }
}
```

We'd also need to instantiate the factory, inject it into our controller, and assign something to a property.

```js
angular.module('myApp', [])
  .controller('greeterController', greeterController)
  .service('greeterService', greeterService)
  .factory('greeterFactory', greeterFactory);

greeterController.$inject = ['greeterService', 'greeterFactory'];

function greeterController(greeterService, greeterFactory) {

...
  
  self.sayHelloFromFactory = greeterFactory.sayHello('Colin');
};
```

Finally, we'd `ng-bind` it to our view.

```html
<h4 ng-bind="ctrl.sayHelloFromFactory"></h4>
```

Here is a Codepen.io for reference: http://codepen.io/marcwright/pen/rjKVVY

<br>

## Refactor Giphy App

Now, let's see how Services can be super useful. Let's refactor the `$http` API calls into a Service.

1. Let's create a `public/js/giphyService.js` file and add the following.

    ```js
    angular.module('giphyAngularApp')
      .service('$GiphyService', GiphyService);

    GiphyService.$inject = ['$http'];

    function GiphyService($http){
      console.log("$GihpyService ready for action!");


    }    
    ```
    > Sidenote: Angular services start with a `$` so some folks like to add that to their custom services for clarity (e.g. - `$GiphyService`). Up to you. 
    
    Since we're gonna move all of the `$http` logic to this Service we need to `$inject` here.

2. Make sure to add this new file to our `index.html`

    ```html
    <script src="/scripts/router.js"></script>
    <script src="/scripts/app.js"></script>
    <script src="/scripts/giphyService.js"></script>
    ```
    
3. Finally, let's inject the `GiphyService` into our `GiphyController`.

    ```js
    function GiphyController($http, $state, $stateParams, $GiphyService) {
    ```

We should see this:

![](https://i.imgur.com/YMKfiYZ.png)


#### Refactor the `getGif()` function.

To start, we're gonna rip out the `$http` API call from our controller's `getGif()` function:

```js
function getGif() {
  // remove the `$http` line below...
  // $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
    .then(function(giphyResponse) {
      self.gifUrl = giphyResponse.data.data.image_url

      $state.go('gif')
    })
}
```

Create a `this.getGif` method in our `$GiphyService` and add that code with a `.then`.

```js
angular.module('giphyAngularApp')
  .service('$GiphyService', GiphyService);

GiphyService.$inject = ['$http'];

function GiphyService($http){
  console.log("$GihpyService ready for action!");

  this.getGif = function() {
    return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(function(giphyResponse) {
        // code in here
      });
  };
}
```

#### Complete the `$GiphyService` method

What do we want to return back to our controller? Well, the same parsed data url we had in the controller originally. We'll add a `console.log` to confirm everything's working correctly.

```js
angular.module('giphyAngularApp')
  .service('$GiphyService', GiphyService);

GiphyService.$inject = ['$http'];

function GiphyService($http){
  console.log("$GihpyService ready for action!");

  this.getGif = function() {
    return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC')
      .then(function(giphyResponse) {
        console.log(giphyResponse.data.data.image_url);
        return giphyResponse.data.data.image_url;
      });
  };
}
```

#### Refactor the `GiphyController`

Now, inside our `getGif()` method we're gonna call `$GiphyService.getGif()` and add a `.then` to use the response returned from our Service. We'll add a `console.log` to confirm everything's working correctly.

```js
function getGif(){
    $GiphyService.getGif()
      .then(function(giphyResponse){
        console.log(giphyResponse);
        // now our Service is returning giphyResponse.data.data.image_url via giphyResponse
        self.gifUrl = giphyResponse;
        $state.go('gif');
      });
}
```

Remember that the behavior of our app should be the same as before. We've merely used a Service to DRY up our code and keep all ouf our `$http` API calls in one place. We can inject this reusable Service to clean up controller code. 

For example, to grab movie poster images from OMDB or Netflix in a seperate controller, we could refactor the Service to make that `$http` API call or just add a new method.


<br>

## Independent Practice

Using the example above, refactor the `$http` `GiphyController` functions into the `GiphyService`. 

- `saveGif()`
- `updateGif(gif)`
- `getSavedGifs()`
- `deleteGif()`


<br>

## For Further Reading:

* [Factory vs. Service](https://toddmotto.com/factory-versus-service)
* [Service vs Factory - Once and for All](http://blog.thoughtram.io//angular/2015/07/07/service-vs-factory-once-and-for-all.html)
* [Stack Overflow](http://stackoverflow.com/questions/13762228/confused-about-service-vs-factory)
