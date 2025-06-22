// script.test.js
// Unit tests for the GitHub Profile Search App using Mocha and Chai
// These tests check the GitHub API responses for user profiles.
//
// Usage:
//   1. Ensure you have a package.json with "type": "module".
//   2. Install dependencies: npm install --save-dev mocha chai node-fetch
//   3. Run tests with: npx mocha
//
// These tests use the public GitHub API and may be rate-limited if run too often.

import { expect } from "chai";
import fetch from "node-fetch";

// Attach fetch to global for compatibility with browser-like code
global.fetch = fetch;

describe("GitHub Profile Search App", function () {
  // Example: Test fetching a valid GitHub user profile
  it("should return profile data for a valid user", async function () {
    // Fetch the profile for the user 'octocat'
    const response = await fetch("https://api.github.com/users/octocat");
    const data = await response.json();
    // Assert that the returned data contains the expected login property
    expect(data).to.have.property("login", "octocat");
  });

  // Example: Test fetching an invalid GitHub user profile
  it("should return 404 for an invalid user", async function () {
    // Attempt to fetch a profile for a non-existent user
    const response = await fetch(
      "https://api.github.com/users/thisuserdoesnotexist123456"
    );
    // Assert that the response status is 404 (Not Found)
    expect(response.status).to.equal(404);
  });

  // Example: Test that a valid user profile contains an 'id' property of type number
  it("should return profile data with a specific property", async function () {
    const response = await fetch("https://api.github.com/users/octocat");
    const data = await response.json();
    expect(data).to.have.property("id");
    expect(data.id).to.be.a("number");
  });

  // Example: Test that a valid user profile contains a 'type' property with value 'User'
  it("should return profile data with a specific property type", async function () {
    const response = await fetch("https://api.github.com/users/octocat");
    const data = await response.json();
    expect(data).to.have.property("type", "User");
  });
});
