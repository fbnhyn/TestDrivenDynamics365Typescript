interface ImportLog_Base extends WebEntity {
  additionalinfo?: string | null;
  columnvalue?: string | null;
  createdon?: Date | null;
  errordescription?: string | null;
  errornumber?: number | null;
  headercolumn?: string | null;
  importlogid?: string | null;
  linenumber?: number | null;
  logphasecode?: importlog_logphasecode | null;
  modifiedon?: Date | null;
  sequencenumber?: number | null;
  statecode?: importlog_statecode | null;
  statuscode?: importlog_statuscode | null;
}
interface ImportLog_Relationships {
  ImportLog_AsyncOperations?: AsyncOperation_Result[] | null;
  ImportLog_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  userentityinstancedata_importlog?: UserEntityInstanceData_Result[] | null;
}
interface ImportLog extends ImportLog_Base, ImportLog_Relationships {
  importdataid_bind$importdataset?: string | null;
  importfileid_bind$importfiles?: string | null;
}
interface ImportLog_Create extends ImportLog {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ImportLog_Update extends ImportLog {
}
interface ImportLog_Select {
  additionalinfo: WebAttribute<ImportLog_Select, { additionalinfo: string | null }, {  }>;
  columnvalue: WebAttribute<ImportLog_Select, { columnvalue: string | null }, {  }>;
  createdby_guid: WebAttribute<ImportLog_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ImportLog_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ImportLog_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  errordescription: WebAttribute<ImportLog_Select, { errordescription: string | null }, {  }>;
  errornumber: WebAttribute<ImportLog_Select, { errornumber: number | null }, {  }>;
  headercolumn: WebAttribute<ImportLog_Select, { headercolumn: string | null }, {  }>;
  importdataid_guid: WebAttribute<ImportLog_Select, { importdataid_guid: string | null }, { importdataid_formatted?: string }>;
  importfileid_guid: WebAttribute<ImportLog_Select, { importfileid_guid: string | null }, { importfileid_formatted?: string }>;
  importlogid: WebAttribute<ImportLog_Select, { importlogid: string | null }, {  }>;
  linenumber: WebAttribute<ImportLog_Select, { linenumber: number | null }, {  }>;
  logphasecode: WebAttribute<ImportLog_Select, { logphasecode: importlog_logphasecode | null }, { logphasecode_formatted?: string }>;
  modifiedby_guid: WebAttribute<ImportLog_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ImportLog_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ImportLog_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  ownerid_guid: WebAttribute<ImportLog_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ImportLog_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ImportLog_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ImportLog_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  sequencenumber: WebAttribute<ImportLog_Select, { sequencenumber: number | null }, {  }>;
  statecode: WebAttribute<ImportLog_Select, { statecode: importlog_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ImportLog_Select, { statuscode: importlog_statuscode | null }, { statuscode_formatted?: string }>;
}
interface ImportLog_Filter {
  additionalinfo: string;
  columnvalue: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  errordescription: string;
  errornumber: number;
  headercolumn: string;
  importdataid_guid: XQW.Guid;
  importfileid_guid: XQW.Guid;
  importlogid: XQW.Guid;
  linenumber: number;
  logphasecode: importlog_logphasecode;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  sequencenumber: number;
  statecode: importlog_statecode;
  statuscode: importlog_statuscode;
}
interface ImportLog_Expand {
  ImportLog_AsyncOperations: WebExpand<ImportLog_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ImportLog_AsyncOperations: AsyncOperation_Result[] }>;
  ImportLog_BulkDeleteFailures: WebExpand<ImportLog_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ImportLog_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<ImportLog_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ImportLog_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  importdataid: WebExpand<ImportLog_Expand, ImportData_Select, ImportData_Filter, { importdataid: ImportData_Result }>;
  importfileid: WebExpand<ImportLog_Expand, ImportFile_Select, ImportFile_Filter, { importfileid: ImportFile_Result }>;
  modifiedby: WebExpand<ImportLog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ImportLog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<ImportLog_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ImportLog_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<ImportLog_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ImportLog_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  userentityinstancedata_importlog: WebExpand<ImportLog_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_importlog: UserEntityInstanceData_Result[] }>;
}
interface ImportLog_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  importdataid_formatted?: string;
  importfileid_formatted?: string;
  logphasecode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ImportLog_Result extends ImportLog_Base, ImportLog_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  importdataid_guid: string | null;
  importfileid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ImportLog_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  importdataid: WebMappingRetrieve<ImportData_Select,ImportData_Expand,ImportData_Filter,ImportData_Fixed,ImportData_Result,ImportData_FormattedResult>;
  importfileid: WebMappingRetrieve<ImportFile_Select,ImportFile_Expand,ImportFile_Filter,ImportFile_Fixed,ImportFile_Result,ImportFile_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ImportLog_RelatedMany {
  ImportLog_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ImportLog_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  userentityinstancedata_importlog: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  importlogs: WebMappingRetrieve<ImportLog_Select,ImportLog_Expand,ImportLog_Filter,ImportLog_Fixed,ImportLog_Result,ImportLog_FormattedResult>;
}
interface WebEntitiesRelated {
  importlogs: WebMappingRelated<ImportLog_RelatedOne,ImportLog_RelatedMany>;
}
interface WebEntitiesCUDA {
  importlogs: WebMappingCUDA<ImportLog_Create,ImportLog_Update,ImportLog_Select>;
}
