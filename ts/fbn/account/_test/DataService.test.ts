import { Fbn } from '../DataServcie';

test('Mock DataService', async () => {
  Fbn.Account.DataService.GetByName = jest.fn().mockImplementationOnce(() => true);
  const result = await Fbn.Account.DataService.GetByName("Lufthansa");
  return expect(result).toBe(true);
});