import { jest } from "@jest/globals";
import { createUserTests } from "./createUser.js";
import { getMyProfileTests } from "./getMyProfile.js";
import { loginTests } from "./login.js";
import { logoutTests } from "./logout.js";
import { updateMyProfileTests } from "./updateProfile.js";

jest.setTimeout(10000);

const authTestData = {
  firstName: "Hamza",
  lastName: "Nafasat",
  email: "gyromaster55@gmail.com",
  role: "admin",
  wrongEmail: "wrongtest@test.com",
  failEmail: "failtest@test.com",
  uniqueEmail: "uniqueuser@test.com",
  notExistingEmail: "notexistinguser@test.com",
  password: "12345678",
  wrongPassword: "12345687",
};

describe("Auth Tests - Login", () => loginTests(authTestData));
describe("Auth Tests - Logout", () => logoutTests(authTestData));
describe("Auth Tests - Get Profile", () => getMyProfileTests(authTestData));
describe("Auth Tests - Update Profile", () => updateMyProfileTests(authTestData));
