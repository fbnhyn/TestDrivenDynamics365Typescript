import { Account } from '../DataServcie';

test('Mock DataService', async () => {
  Account.DataService.GetByName = jest.fn().mockImplementationOnce(() => true);
  const result = await Account.DataService.GetByName("Lufthansa");
  return expect(result).toBe(true);
});