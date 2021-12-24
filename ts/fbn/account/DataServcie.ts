export namespace Fbn.Account {
  export namespace DataService {
    export async function GetByName(name: string) {
      return await XrmQuery.retrieveMultiple((x) => x.accounts)
        .select((x) => [x.accountnumber])
        .filter((x) => Filter.equals(x.name, name))
        .promiseFirst();
    }
    export async function GetById(id: string) {
      return await XrmQuery.retrieve((x) => x.accounts, id)
        .select((x) => [x.accountnumber, x.name])
        .promise();
    }
  }
}
