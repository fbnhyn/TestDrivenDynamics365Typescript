import { DataService } from "../../src/account/DataServcie";


test("Mock DataService", async () => {
  DataService.GetByName = jest.fn().mockImplementationOnce(() => {
    return {
      accountnumber: 30016,
    };
  });
  const result = await DataService.GetByName("Lufthansa");
  return expect(result.accountnumber).toBe(30016);
});
