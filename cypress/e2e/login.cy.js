import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const login = new Login();
const homePage = new HomePage();
const testEmail1 = "user888@gmail.com";
const testPass1 = "1234567890";

describe("Testing the login page", () => {
  beforeEach("Go to the page", () => {
    login.openPage();
  });

  it("Test 1: should login and logout with user888", () => {
    login.logIn(testEmail1, testPass1);
  });

  it("Test 2: should login and logout with testowyqa", () => {
    login.logIn("testowyqa@qa.team", "QA!automation-1");
  });

  afterEach("Logout the page", () => {
    homePage.logOut();
  });
});
