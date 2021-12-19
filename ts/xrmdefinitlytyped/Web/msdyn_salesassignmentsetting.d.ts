interface msdyn_salesassignmentsetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_customownerfield?: string | null;
  msdyn_defaultcapacity?: number | null;
  msdyn_enabledtime?: Date | null;
  msdyn_name?: string | null;
  msdyn_opportunityroutingenabled?: boolean | null;
  msdyn_salesassignmentsettingid?: string | null;
  msdyn_verboselogging?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_salesassignmentsetting_statecode | null;
  statuscode?: msdyn_salesassignmentsetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_salesassignmentsetting_Relationships {
  msdyn_salesassignmentsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_salesassignmentsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_salesassignmentsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_salesassignmentsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_salesassignmentsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_salesassignmentsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_salesassignmentsetting extends msdyn_salesassignmentsetting_Base, msdyn_salesassignmentsetting_Relationships {
}
interface msdyn_salesassignmentsetting_Create extends msdyn_salesassignmentsetting {
}
interface msdyn_salesassignmentsetting_Update extends msdyn_salesassignmentsetting {
}
interface msdyn_salesassignmentsetting_Select {
  createdby_guid: WebAttribute<msdyn_salesassignmentsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_salesassignmentsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_salesassignmentsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_salesassignmentsetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_salesassignmentsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_salesassignmentsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_salesassignmentsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_customownerfield: WebAttribute<msdyn_salesassignmentsetting_Select, { msdyn_customownerfield: string | null }, {  }>;
  msdyn_defaultcapacity: WebAttribute<msdyn_salesassignmentsetting_Select, { msdyn_defaultcapacity: number | null }, {  }>;
  msdyn_enabledtime: WebAttribute<msdyn_salesassignmentsetting_Select, { msdyn_enabledtime: Date | null }, { msdyn_enabledtime_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_salesassignmentsetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_opportunityroutingenabled: WebAttribute<msdyn_salesassignmentsetting_Select, { msdyn_opportunityroutingenabled: boolean | null }, {  }>;
  msdyn_salesassignmentsettingid: WebAttribute<msdyn_salesassignmentsetting_Select, { msdyn_salesassignmentsettingid: string | null }, {  }>;
  msdyn_verboselogging: WebAttribute<msdyn_salesassignmentsetting_Select, { msdyn_verboselogging: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_salesassignmentsetting_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_salesassignmentsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_salesassignmentsetting_Select, { statecode: msdyn_salesassignmentsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_salesassignmentsetting_Select, { statuscode: msdyn_salesassignmentsetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_salesassignmentsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_salesassignmentsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_salesassignmentsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_salesassignmentsetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_customownerfield: string;
  msdyn_defaultcapacity: number;
  msdyn_enabledtime: Date;
  msdyn_name: string;
  msdyn_opportunityroutingenabled: boolean;
  msdyn_salesassignmentsettingid: XQW.Guid;
  msdyn_verboselogging: boolean;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_salesassignmentsetting_statecode;
  statuscode: msdyn_salesassignmentsetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_salesassignmentsetting_Expand {
  createdby: WebExpand<msdyn_salesassignmentsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_salesassignmentsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_salesassignmentsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_salesassignmentsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_salesassignmentsetting_AsyncOperations: WebExpand<msdyn_salesassignmentsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_salesassignmentsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_salesassignmentsetting_BulkDeleteFailures: WebExpand<msdyn_salesassignmentsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_salesassignmentsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_salesassignmentsetting_MailboxTrackingFolders: WebExpand<msdyn_salesassignmentsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_salesassignmentsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_salesassignmentsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_salesassignmentsetting_ProcessSession: WebExpand<msdyn_salesassignmentsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_salesassignmentsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_salesassignmentsetting_SyncErrors: WebExpand<msdyn_salesassignmentsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_salesassignmentsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_salesassignmentsetting_UserEntityInstanceDatas: WebExpand<msdyn_salesassignmentsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_salesassignmentsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_salesassignmentsetting_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_salesassignmentsetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_enabledtime_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_salesassignmentsetting_Result extends msdyn_salesassignmentsetting_Base, msdyn_salesassignmentsetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_salesassignmentsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_salesassignmentsetting_RelatedMany {
  msdyn_salesassignmentsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_salesassignmentsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_salesassignmentsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_salesassignmentsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_salesassignmentsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_salesassignmentsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_salesassignmentsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_salesassignmentsettings: WebMappingRetrieve<msdyn_salesassignmentsetting_Select,msdyn_salesassignmentsetting_Expand,msdyn_salesassignmentsetting_Filter,msdyn_salesassignmentsetting_Fixed,msdyn_salesassignmentsetting_Result,msdyn_salesassignmentsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_salesassignmentsettings: WebMappingRelated<msdyn_salesassignmentsetting_RelatedOne,msdyn_salesassignmentsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_salesassignmentsettings: WebMappingCUDA<msdyn_salesassignmentsetting_Create,msdyn_salesassignmentsetting_Update,msdyn_salesassignmentsetting_Select>;
}
