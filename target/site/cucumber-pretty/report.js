$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "ilhan@sample.com",
        "test123"
      ],
      "line": 19,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "hasan@sample.com",
        "abc@123"
      ],
      "line": 20,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "ismet@sample.com",
        "456@wer"
      ],
      "line": 21,
      "id": "login-feature;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9026133348,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 949548064,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter ilhan@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter test123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ilhan@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 378927358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 153708432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 11
    }
  ],
  "location": "LoginSD.clickonButton(String)"
});
formatter.result({
  "duration": 146738175,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 24418086221,
  "status": "passed"
});
formatter.after({
  "duration": 270021137,
  "status": "passed"
});
formatter.before({
  "duration": 5242565705,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 16408925,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter hasan@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter abc@123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hasan@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 338709902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 411262671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 11
    }
  ],
  "location": "LoginSD.clickonButton(String)"
});
formatter.result({
  "duration": 480575553,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 7482220878,
  "status": "passed"
});
formatter.after({
  "duration": 217821752,
  "status": "passed"
});
formatter.before({
  "duration": 6997862573,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSD.iAmOnHomePage()"
});
formatter.result({
  "duration": 62763115,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-feature;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I enter ismet@sample.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter 456@wer into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify that I am in invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ismet@sample.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 340367195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456@wer",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginSD.enterDataUserAndPassField(String,String)"
});
formatter.result({
  "duration": 165567879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 11
    }
  ],
  "location": "LoginSD.clickonButton(String)"
});
formatter.result({
  "duration": 126331997,
  "status": "passed"
});
formatter.match({
  "location": "LoginSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 4174642049,
  "status": "passed"
});
formatter.after({
  "duration": 276129191,
  "status": "passed"
});
});