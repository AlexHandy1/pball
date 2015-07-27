Summary
=================

* My implementation of a rankings predictor for the fictitious game of Pulseball - TDD using Jasmine and includes a mobile responsive web UI enabling users to add matches and view an automatically updated rankings table

* Based on the specification, I made a number of key implementation decisions:

  * System built in native Javascript with a minor amount of JQuery for manipulating the front-end UI elements.  Ordinarily I would have elected to use a front-end framework (e.g. Angular (see [Subredditor](https://github.com/AlexHandy1/subredditor)) to allow for quicker development and extended functionality.

  * I explored a number of options for implementing a 'Global function' in Javascript (e.g. [Reference 1](http://stackoverflow.com/questions/18282610/create-a-global-function-in-javascript), [Reference 2](http://www.permadi.com/tutorial/jsFunc/index.html)) but was unable to find an idiomatic best practice implementation.  Therefore, I elected to use the constructor method creating a ```function pulseball``` with prototype methods (e.g. init and addMatch) which I instantiated via ```var PULSEBALL = new pulseball();``` thus satisfying the spec requirements of initialising the application via ```PULSEBALL.init( rankingsJson )``` and ```PULSEBALL.addMatch( match )```.

  * I used Jasmine to develop a robust suite of unit tests for the underlying system.  With the primary focus on the system logic, the limited scope of the UI and the lack of a framework specific browser testing technology (e.g. Protractor) I decided not to implement feature tests.

  * For the purposes of the exercise, I assumed user knowledge of the system and did not build in error validations into UI.  Additionally, I assumed all match inputs were completed (e.g. Status : "C") as no use case was detailed in specification for how system should handle upcoming or live matches.

  * Followed specific output of specification by not dynamically updating 'pos' property in rankings table JSON. I did, however, ensure my UI always clearly displayed the teams in order based on latest ranking points.

* More detail on areas where I would extend the application can be found listed below in 'Further improvements'

![PULSEBALL](https://github.com/AlexHandy1/pball/blob/master/Pulseball.png)

Use Cases:
-------

```
- [x] As a User,
      So that I can follow the latest Pulseball international tournament,
      I want to have a rankings table of the teams in the tournament

- [x] As a User,
      So that I can see who is leading in the tournament,
      I want the rankings table to be sorted by pts in descending order

- [x] As a User,
      So that the rankings table takes into account the latest matches,
      I want to be able to add matches to the rankings table and have the rankings table automatically update ranking pts

```

How to run
----

### Local Installation

Run the below commands in your command line interface to view the static web page and run the test suite.

```
git clone https://github.com/AlexHandy1/pball
cd pball
open index.html
open SpecRunner.html
```

Technologies used
----

* Production - Javascript, jQuery, HTML, CSS (Bootstrap)
* Testing - Jasmine

Further Improvements
----

*  User input validations - develop specified drop-downs/ input paramaters in form fields containing only valid input for system. Enable users to add scores.

*  Feature testing - implement feature tests for UI elements.

*  Adapt system to deal with non-completed matches - e.g. develop separate rankings table view for live matches vs completed matches.

* Implement a front-end JS framework e.g. Angular to enable development of more advanced feature set - toggle between live and completed match rankings table views.

* Allow further dynamic updating of underlying JSON rankings table e.g. update position property, enable new teams to be added.

