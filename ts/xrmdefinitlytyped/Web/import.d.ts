interface Import_Base extends WebEntity {
  createdon?: Date | null;
  emailaddress?: string | null;
  importid?: string | null;
  isimport?: boolean | null;
  modecode?: import_modecode | null;
  modifiedon?: Date | null;
  name?: string | null;
  sendnotification?: boolean | null;
  sequence?: number | null;
  statecode?: import_statecode | null;
  statuscode?: import_statuscode | null;
}
interface Import_Relationships {
  Import_AsyncOperations?: AsyncOperation_Result[] | null;
  Import_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  Import_ImportFile?: ImportFile_Result[] | null;
  userentityinstancedata_import?: UserEntityInstanceData_Result[] | null;
}
interface Import extends Import_Base, Import_Relationships {
}
interface Import_Create extends Import {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface Import_Update extends Import {
}
interface Import_Select {
  createdby_guid: WebAttribute<Import_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Import_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Import_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  emailaddress: WebAttribute<Import_Select, { emailaddress: string | null }, {  }>;
  importid: WebAttribute<Import_Select, { importid: string | null }, {  }>;
  isimport: WebAttribute<Import_Select, { isimport: boolean | null }, {  }>;
  modecode: WebAttribute<Import_Select, { modecode: import_modecode | null }, { modecode_formatted?: string }>;
  modifiedby_guid: WebAttribute<Import_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Import_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Import_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Import_Select, { name: string | null }, {  }>;
  ownerid_guid: WebAttribute<Import_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Import_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Import_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Import_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  sendnotification: WebAttribute<Import_Select, { sendnotification: boolean | null }, {  }>;
  sequence: WebAttribute<Import_Select, { sequence: number | null }, {  }>;
  statecode: WebAttribute<Import_Select, { statecode: import_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Import_Select, { statuscode: import_statuscode | null }, { statuscode_formatted?: string }>;
}
interface Import_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  emailaddress: string;
  importid: XQW.Guid;
  isimport: boolean;
  modecode: import_modecode;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  sendnotification: boolean;
  sequence: number;
  statecode: import_statecode;
  statuscode: import_statuscode;
}
interface Import_Expand {
  Import_AsyncOperations: WebExpand<Import_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Import_AsyncOperations: AsyncOperation_Result[] }>;
  Import_BulkDeleteFailures: WebExpand<Import_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Import_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  Import_ImportFile: WebExpand<Import_Expand, ImportFile_Select, ImportFile_Filter, { Import_ImportFile: ImportFile_Result[] }>;
  createdby: WebExpand<Import_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Import_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<Import_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Import_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<Import_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Import_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<Import_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<Import_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  userentityinstancedata_import: WebExpand<Import_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_import: UserEntityInstanceData_Result[] }>;
}
interface Import_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modecode_formatted?: string;
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
interface Import_Result extends Import_Base, Import_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface Import_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface Import_RelatedMany {
  Import_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Import_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  Import_ImportFile: WebMappingRetrieve<ImportFile_Select,ImportFile_Expand,ImportFile_Filter,ImportFile_Fixed,ImportFile_Result,ImportFile_FormattedResult>;
  userentityinstancedata_import: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  imports: WebMappingRetrieve<Import_Select,Import_Expand,Import_Filter,Import_Fixed,Import_Result,Import_FormattedResult>;
}
interface WebEntitiesRelated {
  imports: WebMappingRelated<Import_RelatedOne,Import_RelatedMany>;
}
interface WebEntitiesCUDA {
  imports: WebMappingCUDA<Import_Create,Import_Update,Import_Select>;
}
