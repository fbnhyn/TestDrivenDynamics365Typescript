interface ImportFile_Base extends WebEntity {
  additionalheaderrow?: string | null;
  completedon?: Date | null;
  content?: string | null;
  createdon?: Date | null;
  datadelimitercode?: importfile_datadelimitercode | null;
  enableduplicatedetection?: boolean | null;
  entitykeyid?: string | null;
  failurecount?: number | null;
  fielddelimitercode?: importfile_fielddelimitercode | null;
  filetypecode?: importfile_filetypecode | null;
  headerrow?: string | null;
  importfileid?: string | null;
  isfirstrowheader?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  parsedtablecolumnprefix?: string | null;
  parsedtablecolumnsnumber?: number | null;
  parsedtablename?: string | null;
  partialfailurecount?: number | null;
  processcode?: importfile_processcode | null;
  processingstatus?: importfile_processingstatus | null;
  progresscounter?: number | null;
  relatedentitycolumns?: string | null;
  size?: string | null;
  source?: string | null;
  sourceentityname?: string | null;
  statecode?: importfile_statecode | null;
  statuscode?: importfile_statuscode | null;
  successcount?: number | null;
  targetentityname?: string | null;
  timezoneruleversionnumber?: number | null;
  totalcount?: number | null;
  upsertmodecode?: importfile_upsertmodecode | null;
  usesystemmap?: boolean | null;
  utcconversiontimezonecode?: number | null;
}
interface ImportFile_Relationships {
  ImportFile_AsyncOperations?: AsyncOperation_Result[] | null;
  ImportFile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ImportFile_ImportData?: ImportData_Result[] | null;
  ImportLog_ImportFile?: ImportLog_Result[] | null;
  recordsownerid_systemuser?: SystemUser_Result | null;
  recordsownerid_team?: Team_Result | null;
  userentityinstancedata_importfile?: UserEntityInstanceData_Result[] | null;
}
interface ImportFile extends ImportFile_Base, ImportFile_Relationships {
  importid_bind$imports?: string | null;
  importmapid_bind$importmaps?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  recordsownerid_systemuser_bind$systemusers?: string | null;
  recordsownerid_team_bind$teams?: string | null;
}
interface ImportFile_Create extends ImportFile {
}
interface ImportFile_Update extends ImportFile {
}
interface ImportFile_Select {
  additionalheaderrow: WebAttribute<ImportFile_Select, { additionalheaderrow: string | null }, {  }>;
  completedon: WebAttribute<ImportFile_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  content: WebAttribute<ImportFile_Select, { content: string | null }, {  }>;
  createdby_guid: WebAttribute<ImportFile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ImportFile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ImportFile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datadelimitercode: WebAttribute<ImportFile_Select, { datadelimitercode: importfile_datadelimitercode | null }, { datadelimitercode_formatted?: string }>;
  enableduplicatedetection: WebAttribute<ImportFile_Select, { enableduplicatedetection: boolean | null }, {  }>;
  entitykeyid: WebAttribute<ImportFile_Select, { entitykeyid: string | null }, {  }>;
  failurecount: WebAttribute<ImportFile_Select, { failurecount: number | null }, {  }>;
  fielddelimitercode: WebAttribute<ImportFile_Select, { fielddelimitercode: importfile_fielddelimitercode | null }, { fielddelimitercode_formatted?: string }>;
  filetypecode: WebAttribute<ImportFile_Select, { filetypecode: importfile_filetypecode | null }, { filetypecode_formatted?: string }>;
  headerrow: WebAttribute<ImportFile_Select, { headerrow: string | null }, {  }>;
  importfileid: WebAttribute<ImportFile_Select, { importfileid: string | null }, {  }>;
  importid_guid: WebAttribute<ImportFile_Select, { importid_guid: string | null }, { importid_formatted?: string }>;
  importmapid_guid: WebAttribute<ImportFile_Select, { importmapid_guid: string | null }, { importmapid_formatted?: string }>;
  isfirstrowheader: WebAttribute<ImportFile_Select, { isfirstrowheader: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ImportFile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ImportFile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ImportFile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ImportFile_Select, { name: string | null }, {  }>;
  ownerid_guid: WebAttribute<ImportFile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ImportFile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ImportFile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ImportFile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parsedtablecolumnprefix: WebAttribute<ImportFile_Select, { parsedtablecolumnprefix: string | null }, {  }>;
  parsedtablecolumnsnumber: WebAttribute<ImportFile_Select, { parsedtablecolumnsnumber: number | null }, {  }>;
  parsedtablename: WebAttribute<ImportFile_Select, { parsedtablename: string | null }, {  }>;
  partialfailurecount: WebAttribute<ImportFile_Select, { partialfailurecount: number | null }, {  }>;
  processcode: WebAttribute<ImportFile_Select, { processcode: importfile_processcode | null }, { processcode_formatted?: string }>;
  processingstatus: WebAttribute<ImportFile_Select, { processingstatus: importfile_processingstatus | null }, { processingstatus_formatted?: string }>;
  progresscounter: WebAttribute<ImportFile_Select, { progresscounter: number | null }, {  }>;
  recordsownerid_guid: WebAttribute<ImportFile_Select, { recordsownerid_guid: string | null }, { recordsownerid_formatted?: string }>;
  relatedentitycolumns: WebAttribute<ImportFile_Select, { relatedentitycolumns: string | null }, {  }>;
  size: WebAttribute<ImportFile_Select, { size: string | null }, {  }>;
  source: WebAttribute<ImportFile_Select, { source: string | null }, {  }>;
  sourceentityname: WebAttribute<ImportFile_Select, { sourceentityname: string | null }, {  }>;
  statecode: WebAttribute<ImportFile_Select, { statecode: importfile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ImportFile_Select, { statuscode: importfile_statuscode | null }, { statuscode_formatted?: string }>;
  successcount: WebAttribute<ImportFile_Select, { successcount: number | null }, {  }>;
  targetentityname: WebAttribute<ImportFile_Select, { targetentityname: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ImportFile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  totalcount: WebAttribute<ImportFile_Select, { totalcount: number | null }, {  }>;
  upsertmodecode: WebAttribute<ImportFile_Select, { upsertmodecode: importfile_upsertmodecode | null }, { upsertmodecode_formatted?: string }>;
  usesystemmap: WebAttribute<ImportFile_Select, { usesystemmap: boolean | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ImportFile_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface ImportFile_Filter {
  additionalheaderrow: string;
  completedon: Date;
  content: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datadelimitercode: importfile_datadelimitercode;
  enableduplicatedetection: boolean;
  entitykeyid: XQW.Guid;
  failurecount: number;
  fielddelimitercode: importfile_fielddelimitercode;
  filetypecode: importfile_filetypecode;
  headerrow: string;
  importfileid: XQW.Guid;
  importid_guid: XQW.Guid;
  importmapid_guid: XQW.Guid;
  isfirstrowheader: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parsedtablecolumnprefix: string;
  parsedtablecolumnsnumber: number;
  parsedtablename: string;
  partialfailurecount: number;
  processcode: importfile_processcode;
  processingstatus: importfile_processingstatus;
  progresscounter: number;
  recordsownerid_guid: XQW.Guid;
  relatedentitycolumns: string;
  size: string;
  source: string;
  sourceentityname: string;
  statecode: importfile_statecode;
  statuscode: importfile_statuscode;
  successcount: number;
  targetentityname: string;
  timezoneruleversionnumber: number;
  totalcount: number;
  upsertmodecode: importfile_upsertmodecode;
  usesystemmap: boolean;
  utcconversiontimezonecode: number;
}
interface ImportFile_Expand {
  ImportFile_AsyncOperations: WebExpand<ImportFile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ImportFile_AsyncOperations: AsyncOperation_Result[] }>;
  ImportFile_BulkDeleteFailures: WebExpand<ImportFile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ImportFile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ImportFile_ImportData: WebExpand<ImportFile_Expand, ImportData_Select, ImportData_Filter, { ImportFile_ImportData: ImportData_Result[] }>;
  ImportLog_ImportFile: WebExpand<ImportFile_Expand, ImportLog_Select, ImportLog_Filter, { ImportLog_ImportFile: ImportLog_Result[] }>;
  createdby: WebExpand<ImportFile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ImportFile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  importid: WebExpand<ImportFile_Expand, Import_Select, Import_Filter, { importid: Import_Result }>;
  importmapid: WebExpand<ImportFile_Expand, ImportMap_Select, ImportMap_Filter, { importmapid: ImportMap_Result }>;
  modifiedby: WebExpand<ImportFile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ImportFile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<ImportFile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ImportFile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<ImportFile_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ImportFile_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  recordsownerid_systemuser: WebExpand<ImportFile_Expand, SystemUser_Select, SystemUser_Filter, { recordsownerid_systemuser: SystemUser_Result }>;
  recordsownerid_team: WebExpand<ImportFile_Expand, Team_Select, Team_Filter, { recordsownerid_team: Team_Result }>;
  userentityinstancedata_importfile: WebExpand<ImportFile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_importfile: UserEntityInstanceData_Result[] }>;
}
interface ImportFile_FormattedResult {
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  datadelimitercode_formatted?: string;
  fielddelimitercode_formatted?: string;
  filetypecode_formatted?: string;
  importid_formatted?: string;
  importmapid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  processcode_formatted?: string;
  processingstatus_formatted?: string;
  recordsownerid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  upsertmodecode_formatted?: string;
}
interface ImportFile_Result extends ImportFile_Base, ImportFile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  importid_guid: string | null;
  importmapid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  recordsownerid_guid: string | null;
}
interface ImportFile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  importid: WebMappingRetrieve<Import_Select,Import_Expand,Import_Filter,Import_Fixed,Import_Result,Import_FormattedResult>;
  importmapid: WebMappingRetrieve<ImportMap_Select,ImportMap_Expand,ImportMap_Filter,ImportMap_Fixed,ImportMap_Result,ImportMap_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  recordsownerid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  recordsownerid_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface ImportFile_RelatedMany {
  ImportFile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ImportFile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ImportFile_ImportData: WebMappingRetrieve<ImportData_Select,ImportData_Expand,ImportData_Filter,ImportData_Fixed,ImportData_Result,ImportData_FormattedResult>;
  ImportLog_ImportFile: WebMappingRetrieve<ImportLog_Select,ImportLog_Expand,ImportLog_Filter,ImportLog_Fixed,ImportLog_Result,ImportLog_FormattedResult>;
  userentityinstancedata_importfile: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  importfiles: WebMappingRetrieve<ImportFile_Select,ImportFile_Expand,ImportFile_Filter,ImportFile_Fixed,ImportFile_Result,ImportFile_FormattedResult>;
}
interface WebEntitiesRelated {
  importfiles: WebMappingRelated<ImportFile_RelatedOne,ImportFile_RelatedMany>;
}
interface WebEntitiesCUDA {
  importfiles: WebMappingCUDA<ImportFile_Create,ImportFile_Update,ImportFile_Select>;
}
