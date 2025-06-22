// script.test.js
// Unit tests for the GitHub Profile Search App using Mocha and Chai
// These tests check the GitHub API responses for user profiles

// Test: Should return profile data for a user with a specific property

import { expect } from "chai";
import fetch from "node-fetch";

global.fetch = fetch;

describe("GitHub Profile Search App", function () {
  it("should return profile data for a valid user", async function () {
    const response = await fetch("https://api.github.com/users/octocat");
    const data = await response.json();
    expect(data).to.have.property("login", "octocat");
  });

  it("should return 404 for an invalid user", async function () {
    const response = await fetch(
      "https://api.github.com/users/thisuserdoesnotexist123456"
    );
    expect(response.status).to.equal(404);
  });
});
