interface InterProcessLock_Base extends WebEntity {
  interprocesslockid?: string | null;
  modifiedon?: Date | null;
  token?: string | null;
}
interface InterProcessLock_Relationships {
}
interface InterProcessLock extends InterProcessLock_Base, InterProcessLock_Relationships {
}
interface InterProcessLock_Create extends InterProcessLock {
}
interface InterProcessLock_Update extends InterProcessLock {
}
interface InterProcessLock_Select {
  interprocesslockid: WebAttribute<InterProcessLock_Select, { interprocesslockid: string | null }, {  }>;
  modifiedon: WebAttribute<InterProcessLock_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  token: WebAttribute<InterProcessLock_Select, { token: string | null }, {  }>;
}
interface InterProcessLock_Filter {
  interprocesslockid: XQW.Guid;
  modifiedon: Date;
  token: XQW.Guid;
}
interface InterProcessLock_Expand {
}
interface InterProcessLock_FormattedResult {
  modifiedon_formatted?: string;
}
interface InterProcessLock_Result extends InterProcessLock_Base, InterProcessLock_Relationships {
  "@odata.etag": string;
}
interface InterProcessLock_RelatedOne {
}
interface InterProcessLock_RelatedMany {
}
interface WebEntitiesRetrieve {
  interprocesslocks: WebMappingRetrieve<InterProcessLock_Select,InterProcessLock_Expand,InterProcessLock_Filter,InterProcessLock_Fixed,InterProcessLock_Result,InterProcessLock_FormattedResult>;
}
interface WebEntitiesRelated {
  interprocesslocks: WebMappingRelated<InterProcessLock_RelatedOne,InterProcessLock_RelatedMany>;
}
interface WebEntitiesCUDA {
  interprocesslocks: WebMappingCUDA<InterProcessLock_Create,InterProcessLock_Update,InterProcessLock_Select>;
}
