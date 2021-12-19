interface msdyusd_auditdiag_tracesourcesetting_Base extends WebEntity {
  msdyusd_auditanddiagnosticssettingid?: string | null;
  msdyusd_auditdiag_tracesourcesettingid?: string | null;
  msdyusd_tracesourcesettingid?: string | null;
  versionnumber?: number | null;
}
interface msdyusd_auditdiag_tracesourcesetting_Relationships {
  msdyusd_auditdiag_tracesourcesetting?: msdyusd_tracesourcesetting_Result[] | null;
}
interface msdyusd_auditdiag_tracesourcesetting extends msdyusd_auditdiag_tracesourcesetting_Base, msdyusd_auditdiag_tracesourcesetting_Relationships {
}
interface msdyusd_auditdiag_tracesourcesetting_Create extends msdyusd_auditdiag_tracesourcesetting {
}
interface msdyusd_auditdiag_tracesourcesetting_Update extends msdyusd_auditdiag_tracesourcesetting {
}
interface msdyusd_auditdiag_tracesourcesetting_Select {
  msdyusd_auditanddiagnosticssettingid: WebAttribute<msdyusd_auditdiag_tracesourcesetting_Select, { msdyusd_auditanddiagnosticssettingid: string | null }, {  }>;
  msdyusd_auditdiag_tracesourcesettingid: WebAttribute<msdyusd_auditdiag_tracesourcesetting_Select, { msdyusd_auditdiag_tracesourcesettingid: string | null }, {  }>;
  msdyusd_tracesourcesettingid: WebAttribute<msdyusd_auditdiag_tracesourcesetting_Select, { msdyusd_tracesourcesettingid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_auditdiag_tracesourcesetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_auditdiag_tracesourcesetting_Filter {
  msdyusd_auditanddiagnosticssettingid: XQW.Guid;
  msdyusd_auditdiag_tracesourcesettingid: XQW.Guid;
  msdyusd_tracesourcesettingid: XQW.Guid;
  versionnumber: number;
}
interface msdyusd_auditdiag_tracesourcesetting_Expand {
  msdyusd_auditdiag_tracesourcesetting: WebExpand<msdyusd_auditdiag_tracesourcesetting_Expand, msdyusd_tracesourcesetting_Select, msdyusd_tracesourcesetting_Filter, { msdyusd_auditdiag_tracesourcesetting: msdyusd_tracesourcesetting_Result[] }>;
}
interface msdyusd_auditdiag_tracesourcesetting_FormattedResult {
}
interface msdyusd_auditdiag_tracesourcesetting_Result extends msdyusd_auditdiag_tracesourcesetting_Base, msdyusd_auditdiag_tracesourcesetting_Relationships {
  "@odata.etag": string;
}
interface msdyusd_auditdiag_tracesourcesetting_RelatedOne {
}
interface msdyusd_auditdiag_tracesourcesetting_RelatedMany {
  msdyusd_auditdiag_tracesourcesetting: WebMappingRetrieve<msdyusd_tracesourcesetting_Select,msdyusd_tracesourcesetting_Expand,msdyusd_tracesourcesetting_Filter,msdyusd_tracesourcesetting_Fixed,msdyusd_tracesourcesetting_Result,msdyusd_tracesourcesetting_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_auditdiag_tracesourcesettingset: WebMappingRetrieve<msdyusd_auditdiag_tracesourcesetting_Select,msdyusd_auditdiag_tracesourcesetting_Expand,msdyusd_auditdiag_tracesourcesetting_Filter,msdyusd_auditdiag_tracesourcesetting_Fixed,msdyusd_auditdiag_tracesourcesetting_Result,msdyusd_auditdiag_tracesourcesetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_auditdiag_tracesourcesettingset: WebMappingRelated<msdyusd_auditdiag_tracesourcesetting_RelatedOne,msdyusd_auditdiag_tracesourcesetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_auditdiag_tracesourcesettingset: WebMappingCUDA<msdyusd_auditdiag_tracesourcesetting_Create,msdyusd_auditdiag_tracesourcesetting_Update,msdyusd_auditdiag_tracesourcesetting_Select>;
}
