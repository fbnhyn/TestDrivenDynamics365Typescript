interface msdyn_adaptivecardconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_adaptivecardconfigurationid?: string | null;
  msdyn_adaptivecardtemplate?: string | null;
  msdyn_name?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_adaptivecardconfiguration_statecode | null;
  statuscode?: msdyn_adaptivecardconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_adaptivecardconfiguration_Relationships {
  msdyn_adaptivecardconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_adaptivecardconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_adaptivecardconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_adaptivecardconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_adaptivecardconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_adaptivecardconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_adaptivecardconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_adaptivecardconfiguration extends msdyn_adaptivecardconfiguration_Base, msdyn_adaptivecardconfiguration_Relationships {
}
interface msdyn_adaptivecardconfiguration_Create extends msdyn_adaptivecardconfiguration {
}
interface msdyn_adaptivecardconfiguration_Update extends msdyn_adaptivecardconfiguration {
}
interface msdyn_adaptivecardconfiguration_Select {
  componentidunique: WebAttribute<msdyn_adaptivecardconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_adaptivecardconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_adaptivecardconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_adaptivecardconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_adaptivecardconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_adaptivecardconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_adaptivecardconfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_adaptivecardconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_adaptivecardconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_adaptivecardconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_adaptivecardconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_adaptivecardconfigurationid: WebAttribute<msdyn_adaptivecardconfiguration_Select, { msdyn_adaptivecardconfigurationid: string | null }, {  }>;
  msdyn_adaptivecardtemplate: WebAttribute<msdyn_adaptivecardconfiguration_Select, { msdyn_adaptivecardtemplate: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_adaptivecardconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_adaptivecardconfiguration_Select, { msdyn_uniquename: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_adaptivecardconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_adaptivecardconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_adaptivecardconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_adaptivecardconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_adaptivecardconfiguration_Select, { statecode: msdyn_adaptivecardconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_adaptivecardconfiguration_Select, { statuscode: msdyn_adaptivecardconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_adaptivecardconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_adaptivecardconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_adaptivecardconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_adaptivecardconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_adaptivecardconfiguration_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_adaptivecardconfigurationid: XQW.Guid;
  msdyn_adaptivecardtemplate: string;
  msdyn_name: string;
  msdyn_uniquename: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  solutionid: XQW.Guid;
  statecode: msdyn_adaptivecardconfiguration_statecode;
  statuscode: msdyn_adaptivecardconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_adaptivecardconfiguration_Expand {
  createdby: WebExpand<msdyn_adaptivecardconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_adaptivecardconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_adaptivecardconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_adaptivecardconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_adaptivecardconfiguration_AsyncOperations: WebExpand<msdyn_adaptivecardconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_adaptivecardconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_adaptivecardconfiguration_BulkDeleteFailures: WebExpand<msdyn_adaptivecardconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_adaptivecardconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_adaptivecardconfiguration_MailboxTrackingFolders: WebExpand<msdyn_adaptivecardconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_adaptivecardconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_adaptivecardconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_adaptivecardconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_adaptivecardconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_adaptivecardconfiguration_ProcessSession: WebExpand<msdyn_adaptivecardconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_adaptivecardconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_adaptivecardconfiguration_SyncErrors: WebExpand<msdyn_adaptivecardconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_adaptivecardconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_adaptivecardconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_adaptivecardconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_adaptivecardconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_adaptivecardconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_adaptivecardconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_adaptivecardconfiguration_Result extends msdyn_adaptivecardconfiguration_Base, msdyn_adaptivecardconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_adaptivecardconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_adaptivecardconfiguration_RelatedMany {
  msdyn_adaptivecardconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_adaptivecardconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_adaptivecardconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_adaptivecardconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_adaptivecardconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_adaptivecardconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_adaptivecardconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_adaptivecardconfigurations: WebMappingRetrieve<msdyn_adaptivecardconfiguration_Select,msdyn_adaptivecardconfiguration_Expand,msdyn_adaptivecardconfiguration_Filter,msdyn_adaptivecardconfiguration_Fixed,msdyn_adaptivecardconfiguration_Result,msdyn_adaptivecardconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_adaptivecardconfigurations: WebMappingRelated<msdyn_adaptivecardconfiguration_RelatedOne,msdyn_adaptivecardconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_adaptivecardconfigurations: WebMappingCUDA<msdyn_adaptivecardconfiguration_Create,msdyn_adaptivecardconfiguration_Update,msdyn_adaptivecardconfiguration_Select>;
}
