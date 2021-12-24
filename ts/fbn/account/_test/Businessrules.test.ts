import { Fbn } from "../Businessrules";
import { Fbn as _fbn } from "../DataServcie";
import { XrmMockGenerator } from "xrm-mock";

test("Should hide name", () => {
  XrmMockGenerator.initialise();
  XrmMockGenerator.Attribute.createString("name");
  XrmMockGenerator.Attribute.createString("fax", "123456");
  const formContext = XrmMockGenerator.getFormContext() as Form.account.Main.Account;
  let accountBusinessrules = new Fbn.Account.Businessrules(formContext);
  accountBusinessrules.showName();
  const actual = formContext.getControl("name");
  expect(actual.getVisible()).toBe(false);
});

test("Should show name", () => {
  XrmMockGenerator.initialise();
  XrmMockGenerator.Attribute.createString("name", "lufthansa");
  const formContext = XrmMockGenerator.getFormContext() as Form.account.Main.Account;
  let accountBusinessrules = new Fbn.Account.Businessrules(formContext);
  accountBusinessrules.showName();
  const actual = formContext.getControl("name");
  expect(actual.getVisible()).toBe(true);
});

test("Should show name with api call", () => {
  _fbn.Account.DataService.GetById = jest.fn().mockImplementationOnce(() => {
    return { name: "lufthansa" };
  });
  XrmMockGenerator.initialise();
  XrmMockGenerator.Attribute.createString("name", "lufthansa");
  const formContext = XrmMockGenerator.getFormContext() as Form.account.Main.Account;
  let accountBusinessrules = new Fbn.Account.Businessrules(formContext);
  accountBusinessrules.showNameWithApiCall();
  const actual = formContext.getControl("name");
  expect(actual.getVisible()).toBe(true);
});
