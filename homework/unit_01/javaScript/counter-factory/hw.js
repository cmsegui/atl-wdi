// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    var counterId = CounterCollection.createCounter(); 
    var counterList = document.getElementById("counter-list");
    var counterElement = document.createElement('div');
    counterElement.setAttribute('class','counter');
    counterElement.setAttribute('data-count-id', counterId);
    var headerElement = document.createElement('h3');
    headerElement.textContent = 'Count: ';
    var spanElement = document.createElement('span');
    spanElement.textContent = '0';
    headerElement.appendChild(spanElement);
    var buttonElement = document.createElement('button');
    buttonElement.setAttribute('class','increment');
    buttonElement.textContent = ' + 1';
    counterElement.appendChild(headerElement);
    counterElement.appendChild(buttonElement);
    counterList.appendChild(counterElement);
  },
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    var counterValue = CounterCollection.getCounterValue(countId);
    if (counterValue) {
      document.querySelector("[data-count-id]")
    }





  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){
    // Your Code Here
  },
  onClickIncrement: function(event){
    // Your Code Here
  },
  onClickDelete: function(event){                           // REACH
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};

