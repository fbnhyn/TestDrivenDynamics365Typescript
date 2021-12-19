interface msdyn_msdyn_journal_msdyn_timeentry_Base extends WebEntity {
  msdyn_journalid?: string | null;
  msdyn_msdyn_journal_msdyn_timeentryid?: string | null;
  msdyn_timeentryid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_journal_msdyn_timeentry_Relationships {
  msdyn_msdyn_journal_msdyn_timeentry?: msdyn_timeentry_Result[] | null;
}
interface msdyn_msdyn_journal_msdyn_timeentry extends msdyn_msdyn_journal_msdyn_timeentry_Base, msdyn_msdyn_journal_msdyn_timeentry_Relationships {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Create extends msdyn_msdyn_journal_msdyn_timeentry {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Update extends msdyn_msdyn_journal_msdyn_timeentry {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Select {
  msdyn_journalid: WebAttribute<msdyn_msdyn_journal_msdyn_timeentry_Select, { msdyn_journalid: string | null }, {  }>;
  msdyn_msdyn_journal_msdyn_timeentryid: WebAttribute<msdyn_msdyn_journal_msdyn_timeentry_Select, { msdyn_msdyn_journal_msdyn_timeentryid: string | null }, {  }>;
  msdyn_timeentryid: WebAttribute<msdyn_msdyn_journal_msdyn_timeentry_Select, { msdyn_timeentryid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_journal_msdyn_timeentry_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_journal_msdyn_timeentry_Filter {
  msdyn_journalid: XQW.Guid;
  msdyn_msdyn_journal_msdyn_timeentryid: XQW.Guid;
  msdyn_timeentryid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_journal_msdyn_timeentry_Expand {
  msdyn_msdyn_journal_msdyn_timeentry: WebExpand<msdyn_msdyn_journal_msdyn_timeentry_Expand, msdyn_timeentry_Select, msdyn_timeentry_Filter, { msdyn_msdyn_journal_msdyn_timeentry: msdyn_timeentry_Result[] }>;
}
interface msdyn_msdyn_journal_msdyn_timeentry_FormattedResult {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Result extends msdyn_msdyn_journal_msdyn_timeentry_Base, msdyn_msdyn_journal_msdyn_timeentry_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_journal_msdyn_timeentry_RelatedOne {
}
interface msdyn_msdyn_journal_msdyn_timeentry_RelatedMany {
  msdyn_msdyn_journal_msdyn_timeentry: WebMappingRetrieve<msdyn_timeentry_Select,msdyn_timeentry_Expand,msdyn_timeentry_Filter,msdyn_timeentry_Fixed,msdyn_timeentry_Result,msdyn_timeentry_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_journal_msdyn_timeentryset: WebMappingRetrieve<msdyn_msdyn_journal_msdyn_timeentry_Select,msdyn_msdyn_journal_msdyn_timeentry_Expand,msdyn_msdyn_journal_msdyn_timeentry_Filter,msdyn_msdyn_journal_msdyn_timeentry_Fixed,msdyn_msdyn_journal_msdyn_timeentry_Result,msdyn_msdyn_journal_msdyn_timeentry_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_journal_msdyn_timeentryset: WebMappingRelated<msdyn_msdyn_journal_msdyn_timeentry_RelatedOne,msdyn_msdyn_journal_msdyn_timeentry_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_journal_msdyn_timeentryset: WebMappingCUDA<msdyn_msdyn_journal_msdyn_timeentry_Create,msdyn_msdyn_journal_msdyn_timeentry_Update,msdyn_msdyn_journal_msdyn_timeentry_Select>;
}
