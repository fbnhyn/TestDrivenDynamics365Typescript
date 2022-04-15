import { Account } from "../../../../src/account/form/main/Account";
import { DataService } from "../../../../src/account/DataServcie";
import { XrmMockGenerator } from "xrm-mock";

test("Should hide name", () => {
  XrmMockGenerator.initialise();
  XrmMockGenerator.Attribute.createString("name");
  const formContext = XrmMockGenerator.getFormContext() as Form.account.Main.Account;
  let accountBusinessrules = new Account(formContext);
  accountBusinessrules.showName();
  const actual = formContext.getControl("name");
  expect(actual.getVisible()).toBe(false);
});

test("Should show name", () => {
  XrmMockGenerator.initialise();
  XrmMockGenerator.Attribute.createString("name", "lufthansa");
  const formContext = XrmMockGenerator.getFormContext() as Form.account.Main.Account;
  let accountBusinessrules = new Account(formContext);
  accountBusinessrules.showName();
  const actual = formContext.getControl("name");
  expect(actual.getVisible()).toBe(true);
});

test("Should show name with api call", () => {
  DataService.GetById = jest.fn().mockImplementationOnce(() => {
    return { name: "lufthansa" };
  });
  XrmMockGenerator.initialise();
  XrmMockGenerator.Attribute.createString("name", "lufthansa");
  const formContext = XrmMockGenerator.getFormContext() as Form.account.Main.Account;
  let accountBusinessrules = new Account(formContext);
  accountBusinessrules.showNameWithApiCall();
  const actual = formContext.getControl("name");
  expect(actual.getVisible()).toBe(true);
});
