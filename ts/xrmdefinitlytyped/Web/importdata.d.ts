interface ImportData_Base extends WebEntity {
  createdon?: Date | null;
  data?: string | null;
  errortype?: importdata_errortype | null;
  haserror?: boolean | null;
  importdataid?: string | null;
  linenumber?: number | null;
  modifiedon?: Date | null;
  recordid?: string | null;
  statecode?: importdata_statecode | null;
  statuscode?: importdata_statuscode | null;
}
interface ImportData_Relationships {
  ImportData_AsyncOperations?: AsyncOperation_Result[] | null;
  ImportData_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ImportLog_ImportData?: ImportLog_Result[] | null;
  userentityinstancedata_importdata?: UserEntityInstanceData_Result[] | null;
}
interface ImportData extends ImportData_Base, ImportData_Relationships {
  importfileid_bind$importfiles?: string | null;
}
interface ImportData_Create extends ImportData {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ImportData_Update extends ImportData {
}
interface ImportData_Select {
  createdby_guid: WebAttribute<ImportData_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ImportData_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ImportData_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  data: WebAttribute<ImportData_Select, { data: string | null }, {  }>;
  errortype: WebAttribute<ImportData_Select, { errortype: importdata_errortype | null }, { errortype_formatted?: string }>;
  haserror: WebAttribute<ImportData_Select, { haserror: boolean | null }, {  }>;
  importdataid: WebAttribute<ImportData_Select, { importdataid: string | null }, {  }>;
  importfileid_guid: WebAttribute<ImportData_Select, { importfileid_guid: string | null }, { importfileid_formatted?: string }>;
  linenumber: WebAttribute<ImportData_Select, { linenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<ImportData_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ImportData_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ImportData_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  ownerid_guid: WebAttribute<ImportData_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ImportData_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ImportData_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ImportData_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  recordid: WebAttribute<ImportData_Select, { recordid: string | null }, {  }>;
  statecode: WebAttribute<ImportData_Select, { statecode: importdata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ImportData_Select, { statuscode: importdata_statuscode | null }, { statuscode_formatted?: string }>;
}
interface ImportData_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  data: string;
  errortype: importdata_errortype;
  haserror: boolean;
  importdataid: XQW.Guid;
  importfileid_guid: XQW.Guid;
  linenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  recordid: XQW.Guid;
  statecode: importdata_statecode;
  statuscode: importdata_statuscode;
}
interface ImportData_Expand {
  ImportData_AsyncOperations: WebExpand<ImportData_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ImportData_AsyncOperations: AsyncOperation_Result[] }>;
  ImportData_BulkDeleteFailures: WebExpand<ImportData_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ImportData_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ImportLog_ImportData: WebExpand<ImportData_Expand, ImportLog_Select, ImportLog_Filter, { ImportLog_ImportData: ImportLog_Result[] }>;
  createdby: WebExpand<ImportData_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ImportData_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  importfileid: WebExpand<ImportData_Expand, ImportFile_Select, ImportFile_Filter, { importfileid: ImportFile_Result }>;
  modifiedby: WebExpand<ImportData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ImportData_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<ImportData_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ImportData_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<ImportData_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ImportData_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  userentityinstancedata_importdata: WebExpand<ImportData_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_importdata: UserEntityInstanceData_Result[] }>;
}
interface ImportData_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  errortype_formatted?: string;
  importfileid_formatted?: string;
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
interface ImportData_Result extends ImportData_Base, ImportData_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  importfileid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ImportData_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  importfileid: WebMappingRetrieve<ImportFile_Select,ImportFile_Expand,ImportFile_Filter,ImportFile_Fixed,ImportFile_Result,ImportFile_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ImportData_RelatedMany {
  ImportData_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ImportData_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ImportLog_ImportData: WebMappingRetrieve<ImportLog_Select,ImportLog_Expand,ImportLog_Filter,ImportLog_Fixed,ImportLog_Result,ImportLog_FormattedResult>;
  userentityinstancedata_importdata: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  importdataset: WebMappingRetrieve<ImportData_Select,ImportData_Expand,ImportData_Filter,ImportData_Fixed,ImportData_Result,ImportData_FormattedResult>;
}
interface WebEntitiesRelated {
  importdataset: WebMappingRelated<ImportData_RelatedOne,ImportData_RelatedMany>;
}
interface WebEntitiesCUDA {
  importdataset: WebMappingCUDA<ImportData_Create,ImportData_Update,ImportData_Select>;
}
