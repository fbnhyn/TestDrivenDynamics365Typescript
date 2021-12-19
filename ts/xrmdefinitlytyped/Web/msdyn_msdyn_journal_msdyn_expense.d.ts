interface msdyn_msdyn_journal_msdyn_expense_Base extends WebEntity {
  msdyn_expenseid?: string | null;
  msdyn_journalid?: string | null;
  msdyn_msdyn_journal_msdyn_expenseid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_msdyn_journal_msdyn_expense_Relationships {
  msdyn_msdyn_journal_msdyn_expense?: msdyn_expense_Result[] | null;
}
interface msdyn_msdyn_journal_msdyn_expense extends msdyn_msdyn_journal_msdyn_expense_Base, msdyn_msdyn_journal_msdyn_expense_Relationships {
}
interface msdyn_msdyn_journal_msdyn_expense_Create extends msdyn_msdyn_journal_msdyn_expense {
}
interface msdyn_msdyn_journal_msdyn_expense_Update extends msdyn_msdyn_journal_msdyn_expense {
}
interface msdyn_msdyn_journal_msdyn_expense_Select {
  msdyn_expenseid: WebAttribute<msdyn_msdyn_journal_msdyn_expense_Select, { msdyn_expenseid: string | null }, {  }>;
  msdyn_journalid: WebAttribute<msdyn_msdyn_journal_msdyn_expense_Select, { msdyn_journalid: string | null }, {  }>;
  msdyn_msdyn_journal_msdyn_expenseid: WebAttribute<msdyn_msdyn_journal_msdyn_expense_Select, { msdyn_msdyn_journal_msdyn_expenseid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_msdyn_journal_msdyn_expense_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_msdyn_journal_msdyn_expense_Filter {
  msdyn_expenseid: XQW.Guid;
  msdyn_journalid: XQW.Guid;
  msdyn_msdyn_journal_msdyn_expenseid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_msdyn_journal_msdyn_expense_Expand {
  msdyn_msdyn_journal_msdyn_expense: WebExpand<msdyn_msdyn_journal_msdyn_expense_Expand, msdyn_expense_Select, msdyn_expense_Filter, { msdyn_msdyn_journal_msdyn_expense: msdyn_expense_Result[] }>;
}
interface msdyn_msdyn_journal_msdyn_expense_FormattedResult {
}
interface msdyn_msdyn_journal_msdyn_expense_Result extends msdyn_msdyn_journal_msdyn_expense_Base, msdyn_msdyn_journal_msdyn_expense_Relationships {
  "@odata.etag": string;
}
interface msdyn_msdyn_journal_msdyn_expense_RelatedOne {
}
interface msdyn_msdyn_journal_msdyn_expense_RelatedMany {
  msdyn_msdyn_journal_msdyn_expense: WebMappingRetrieve<msdyn_expense_Select,msdyn_expense_Expand,msdyn_expense_Filter,msdyn_expense_Fixed,msdyn_expense_Result,msdyn_expense_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_msdyn_journal_msdyn_expenseset: WebMappingRetrieve<msdyn_msdyn_journal_msdyn_expense_Select,msdyn_msdyn_journal_msdyn_expense_Expand,msdyn_msdyn_journal_msdyn_expense_Filter,msdyn_msdyn_journal_msdyn_expense_Fixed,msdyn_msdyn_journal_msdyn_expense_Result,msdyn_msdyn_journal_msdyn_expense_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_msdyn_journal_msdyn_expenseset: WebMappingRelated<msdyn_msdyn_journal_msdyn_expense_RelatedOne,msdyn_msdyn_journal_msdyn_expense_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_msdyn_journal_msdyn_expenseset: WebMappingCUDA<msdyn_msdyn_journal_msdyn_expense_Create,msdyn_msdyn_journal_msdyn_expense_Update,msdyn_msdyn_journal_msdyn_expense_Select>;
}
