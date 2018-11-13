var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

var assert2 = {
  isEqual: function(assertionToCheck1, assertionToCheck2) {
    if (assertionToCheck1 != assertionToCheck2) {
      throw new Error("Assertion failed: " + assertionToCheck1 + " is not equal to " + assertionToCheck2);
    }
  }
};
