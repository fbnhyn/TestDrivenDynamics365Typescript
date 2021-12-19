import { Blb } from "../Businessrules"
import { XrmMockGenerator } from "xrm-mock";

test('User XrmMockGenerator', () => {
  XrmMockGenerator.initialise();
  XrmMockGenerator.Attribute.createString('name');
  XrmMockGenerator.Attribute.createString('fax', "123456");
  const formContext = XrmMockGenerator.getFormContext() as Form.account.Main.Account
  let accountBusinessrules = new Blb.Account.Businessrules(formContext)
  accountBusinessrules.showName();
  const actual = formContext.getControl("name");
  expect(actual.getVisible()).toBe(false);
})