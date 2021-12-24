import { Fbn } from "../DataServcie";

test("Mock DataService", async () => {
  Fbn.Account.DataService.GetByName = jest.fn().mockImplementationOnce(() => {
    return {
      accountnumber: 30016,
    };
  });
  const result = await Fbn.Account.DataService.GetByName("Lufthansa");
  return expect(result.accountnumber).toBe(30016);
});
