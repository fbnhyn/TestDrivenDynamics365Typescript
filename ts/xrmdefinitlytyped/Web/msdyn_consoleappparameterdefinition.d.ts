interface msdyn_consoleappparameterdefinition_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_consoleappparameterdefinitionid?: string | null;
  msdyn_defaultvalue?: string | null;
  msdyn_isruntime?: boolean | null;
  msdyn_name?: string | null;
  msdyn_runtimetype?: msdyn_consoleapplicationparameterruntimetype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_consoleappparameterdefinition_statecode | null;
  statuscode?: msdyn_consoleappparameterdefinition_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_consoleappparameterdefinition_Relationships {
  msdyn_consoleappparameterdefinition_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_consoleappparameterdefinition_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_consoleappparameterdefinition_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_consoleappparameterdefinition_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_consoleappparameterdefinition_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_consoleappparameterdefinition_SyncErrors?: SyncError_Result[] | null;
  msdyn_consoleappparameterdefinition_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_consoleapplicationtype_msdyn_consol?: msdyn_consoleapplicationtype_Result[] | null;
}
interface msdyn_consoleappparameterdefinition extends msdyn_consoleappparameterdefinition_Base, msdyn_consoleappparameterdefinition_Relationships {
}
interface msdyn_consoleappparameterdefinition_Create extends msdyn_consoleappparameterdefinition {
}
interface msdyn_consoleappparameterdefinition_Update extends msdyn_consoleappparameterdefinition {
}
interface msdyn_consoleappparameterdefinition_Select {
  createdby_guid: WebAttribute<msdyn_consoleappparameterdefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_consoleappparameterdefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_consoleappparameterdefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_consoleappparameterdefinition_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_consoleappparameterdefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_consoleappparameterdefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_consoleappparameterdefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_consoleappparameterdefinitionid: WebAttribute<msdyn_consoleappparameterdefinition_Select, { msdyn_consoleappparameterdefinitionid: string | null }, {  }>;
  msdyn_defaultvalue: WebAttribute<msdyn_consoleappparameterdefinition_Select, { msdyn_defaultvalue: string | null }, {  }>;
  msdyn_isruntime: WebAttribute<msdyn_consoleappparameterdefinition_Select, { msdyn_isruntime: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_consoleappparameterdefinition_Select, { msdyn_name: string | null }, {  }>;
  msdyn_runtimetype: WebAttribute<msdyn_consoleappparameterdefinition_Select, { msdyn_runtimetype: msdyn_consoleapplicationparameterruntimetype | null }, { msdyn_runtimetype_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_consoleappparameterdefinition_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_consoleappparameterdefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_consoleappparameterdefinition_Select, { statecode: msdyn_consoleappparameterdefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_consoleappparameterdefinition_Select, { statuscode: msdyn_consoleappparameterdefinition_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_consoleappparameterdefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_consoleappparameterdefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_consoleappparameterdefinition_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_consoleappparameterdefinition_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_consoleappparameterdefinitionid: XQW.Guid;
  msdyn_defaultvalue: string;
  msdyn_isruntime: boolean;
  msdyn_name: string;
  msdyn_runtimetype: msdyn_consoleapplicationparameterruntimetype;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_consoleappparameterdefinition_statecode;
  statuscode: msdyn_consoleappparameterdefinition_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_consoleappparameterdefinition_Expand {
  createdby: WebExpand<msdyn_consoleappparameterdefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_consoleappparameterdefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_consoleappparameterdefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_consoleappparameterdefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_consoleappparameterdefinition_AsyncOperations: WebExpand<msdyn_consoleappparameterdefinition_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_consoleappparameterdefinition_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_consoleappparameterdefinition_BulkDeleteFailures: WebExpand<msdyn_consoleappparameterdefinition_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_consoleappparameterdefinition_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_consoleappparameterdefinition_MailboxTrackingFolders: WebExpand<msdyn_consoleappparameterdefinition_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_consoleappparameterdefinition_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_consoleappparameterdefinition_PrincipalObjectAttributeAccesses: WebExpand<msdyn_consoleappparameterdefinition_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_consoleappparameterdefinition_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_consoleappparameterdefinition_ProcessSession: WebExpand<msdyn_consoleappparameterdefinition_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_consoleappparameterdefinition_ProcessSession: ProcessSession_Result[] }>;
  msdyn_consoleappparameterdefinition_SyncErrors: WebExpand<msdyn_consoleappparameterdefinition_Expand, SyncError_Select, SyncError_Filter, { msdyn_consoleappparameterdefinition_SyncErrors: SyncError_Result[] }>;
  msdyn_consoleappparameterdefinition_UserEntityInstanceDatas: WebExpand<msdyn_consoleappparameterdefinition_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_consoleappparameterdefinition_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_consoleapplicationtype_msdyn_consol: WebExpand<msdyn_consoleappparameterdefinition_Expand, msdyn_consoleapplicationtype_Select, msdyn_consoleapplicationtype_Filter, { msdyn_msdyn_consoleapplicationtype_msdyn_consol: msdyn_consoleapplicationtype_Result[] }>;
  organizationid: WebExpand<msdyn_consoleappparameterdefinition_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_consoleappparameterdefinition_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_runtimetype_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_consoleappparameterdefinition_Result extends msdyn_consoleappparameterdefinition_Base, msdyn_consoleappparameterdefinition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_consoleappparameterdefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_consoleappparameterdefinition_RelatedMany {
  msdyn_consoleappparameterdefinition_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_consoleappparameterdefinition_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_consoleappparameterdefinition_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_consoleappparameterdefinition_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_consoleappparameterdefinition_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_consoleappparameterdefinition_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_consoleappparameterdefinition_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_consoleapplicationtype_msdyn_consol: WebMappingRetrieve<msdyn_consoleapplicationtype_Select,msdyn_consoleapplicationtype_Expand,msdyn_consoleapplicationtype_Filter,msdyn_consoleapplicationtype_Fixed,msdyn_consoleapplicationtype_Result,msdyn_consoleapplicationtype_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_consoleappparameterdefinitions: WebMappingRetrieve<msdyn_consoleappparameterdefinition_Select,msdyn_consoleappparameterdefinition_Expand,msdyn_consoleappparameterdefinition_Filter,msdyn_consoleappparameterdefinition_Fixed,msdyn_consoleappparameterdefinition_Result,msdyn_consoleappparameterdefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_consoleappparameterdefinitions: WebMappingRelated<msdyn_consoleappparameterdefinition_RelatedOne,msdyn_consoleappparameterdefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_consoleappparameterdefinitions: WebMappingCUDA<msdyn_consoleappparameterdefinition_Create,msdyn_consoleappparameterdefinition_Update,msdyn_consoleappparameterdefinition_Select>;
}
