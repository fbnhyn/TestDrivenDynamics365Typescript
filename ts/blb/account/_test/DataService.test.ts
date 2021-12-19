import { Blb } from '../DataServcie';

test('Mock DataService', async () => {
  Blb.Account.DataService.GetByName = jest.fn().mockImplementationOnce(() => true);
  const result = await Blb.Account.DataService.GetByName("Lufthansa");
  return expect(result).toBe(true);
});