$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintoProduction.feature");
formatter.feature({
  "line": 2,
  "name": "Login to production (Data table)",
  "description": "\r\nIn order to perform successful login production\r\nAs a user\r\ni want to enter the correct username and password",
  "id": "login-to-production-(data-table)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Functional"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "In order to verify the login to facebook production",
  "description": "",
  "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered \"\u003cusername\u003e\" username",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select Age category",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "IND"
      ],
      "line": 15
    },
    {
      "cells": [
        "Above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"\u003clogintype\u003e\" successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "logintype"
      ],
      "line": 20,
      "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "shouldbe"
      ],
      "line": 21,
      "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;2"
    },
    {
      "cells": [
        "Invalid",
        "Invalid",
        "Shouldnot"
      ],
      "line": 22,
      "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 356200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "In order to verify the login to facebook production",
  "description": "",
  "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered \"valid\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered \"valid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select Age category",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "IND"
      ],
      "line": 15
    },
    {
      "cells": [
        "Above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"shouldbe\" successfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 175281900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 124300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_username(String)"
});
formatter.result({
  "duration": 5396100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_password(String)"
});
formatter.result({
  "duration": 190200,
  "status": "passed"
});
formatter.match({
  "location": "logintoProduction.user_select_Age_category(DataTable)"
});
formatter.result({
  "duration": 2012900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldbe",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "duration": 151500,
  "status": "passed"
});
formatter.after({
  "duration": 134600,
  "status": "passed"
});
formatter.before({
  "duration": 152100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "In order to verify the login to facebook production",
  "description": "",
  "id": "login-to-production-(data-table);in-order-to-verify-the-login-to-facebook-production;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Functional"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to facebook website",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user validates the homepage title",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user entered \"Invalid\" username",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user entered \"Invalid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select Age category",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ],
      "line": 14
    },
    {
      "cells": [
        "below 18",
        "IND"
      ],
      "line": 15
    },
    {
      "cells": [
        "Above 18",
        "USA"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user \"Shouldnot\" successfully logged in",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_facebook_website()"
});
formatter.result({
  "duration": 141000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_validates_the_homepage_title()"
});
formatter.result({
  "duration": 122000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_username(String)"
});
formatter.result({
  "duration": 201000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid",
      "offset": 14
    }
  ],
  "location": "LoginSteps.user_entered_the_password(String)"
});
formatter.result({
  "duration": 530100,
  "status": "passed"
});
formatter.match({
  "location": "logintoProduction.user_select_Age_category(DataTable)"
});
formatter.result({
  "duration": 283300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shouldnot",
      "offset": 6
    }
  ],
  "location": "LoginSteps.user_should_be_successfully_logged_in(String)"
});
formatter.result({
  "duration": 263200,
  "status": "passed"
});
formatter.after({
  "duration": 122300,
  "status": "passed"
});
});