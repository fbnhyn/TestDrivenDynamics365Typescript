interface msdyn_presence_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_basepresencestatus?: msdyn_basepresencestatus | null;
  msdyn_canuserset?: boolean | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_presenceid?: string | null;
  msdyn_presencestatustext?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_presence_statecode | null;
  statuscode?: msdyn_presence_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_presence_Relationships {
  msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid?: msdyn_agentstatushistory_Result[] | null;
  msdyn_msdyn_presence_systemuser?: SystemUser_Result[] | null;
  msdyn_presence_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_presence_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_presence_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_presence_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_presence_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_presence_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_presence_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_presence_SyncErrors?: SyncError_Result[] | null;
  msdyn_presence_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup?: msdyn_omnichannelconfiguration_Result[] | null;
  msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup?: msdyn_omnichannelconfiguration_Result[] | null;
}
interface msdyn_presence extends msdyn_presence_Base, msdyn_presence_Relationships {
}
interface msdyn_presence_Create extends msdyn_presence {
}
interface msdyn_presence_Update extends msdyn_presence {
}
interface msdyn_presence_Select {
  createdby_guid: WebAttribute<msdyn_presence_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_presence_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_presence_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_presence_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_presence_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_presence_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_presence_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_basepresencestatus: WebAttribute<msdyn_presence_Select, { msdyn_basepresencestatus: msdyn_basepresencestatus | null }, { msdyn_basepresencestatus_formatted?: string }>;
  msdyn_canuserset: WebAttribute<msdyn_presence_Select, { msdyn_canuserset: boolean | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_presence_Select, { msdyn_description: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_presence_Select, { msdyn_name: string | null }, {  }>;
  msdyn_presenceid: WebAttribute<msdyn_presence_Select, { msdyn_presenceid: string | null }, {  }>;
  msdyn_presencestatustext: WebAttribute<msdyn_presence_Select, { msdyn_presencestatustext: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_presence_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_presence_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_presence_Select, { statecode: msdyn_presence_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_presence_Select, { statuscode: msdyn_presence_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_presence_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_presence_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_presence_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_presence_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_basepresencestatus: msdyn_basepresencestatus;
  msdyn_canuserset: boolean;
  msdyn_description: string;
  msdyn_name: string;
  msdyn_presenceid: XQW.Guid;
  msdyn_presencestatustext: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_presence_statecode;
  statuscode: msdyn_presence_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_presence_Expand {
  createdby: WebExpand<msdyn_presence_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_presence_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_presence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_presence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid: WebExpand<msdyn_presence_Expand, msdyn_agentstatushistory_Select, msdyn_agentstatushistory_Filter, { msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid: msdyn_agentstatushistory_Result[] }>;
  msdyn_msdyn_presence_systemuser: WebExpand<msdyn_presence_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_msdyn_presence_systemuser: SystemUser_Result[] }>;
  msdyn_presence_AsyncOperations: WebExpand<msdyn_presence_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_presence_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_presence_BulkDeleteFailures: WebExpand<msdyn_presence_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_presence_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_presence_DuplicateBaseRecord: WebExpand<msdyn_presence_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_presence_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_presence_DuplicateMatchingRecord: WebExpand<msdyn_presence_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_presence_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_presence_MailboxTrackingFolders: WebExpand<msdyn_presence_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_presence_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_presence_PrincipalObjectAttributeAccesses: WebExpand<msdyn_presence_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_presence_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_presence_ProcessSession: WebExpand<msdyn_presence_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_presence_ProcessSession: ProcessSession_Result[] }>;
  msdyn_presence_SyncErrors: WebExpand<msdyn_presence_Expand, SyncError_Select, SyncError_Filter, { msdyn_presence_SyncErrors: SyncError_Result[] }>;
  msdyn_presence_UserEntityInstanceDatas: WebExpand<msdyn_presence_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_presence_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup: WebExpand<msdyn_presence_Expand, msdyn_omnichannelconfiguration_Select, msdyn_omnichannelconfiguration_Filter, { msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup: msdyn_omnichannelconfiguration_Result[] }>;
  msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup: WebExpand<msdyn_presence_Expand, msdyn_omnichannelconfiguration_Select, msdyn_omnichannelconfiguration_Filter, { msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup: msdyn_omnichannelconfiguration_Result[] }>;
  organizationid: WebExpand<msdyn_presence_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_presence_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_basepresencestatus_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_presence_Result extends msdyn_presence_Base, msdyn_presence_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_presence_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_presence_RelatedMany {
  msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid: WebMappingRetrieve<msdyn_agentstatushistory_Select,msdyn_agentstatushistory_Expand,msdyn_agentstatushistory_Filter,msdyn_agentstatushistory_Fixed,msdyn_agentstatushistory_Result,msdyn_agentstatushistory_FormattedResult>;
  msdyn_msdyn_presence_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_presence_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_presence_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_presence_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_presence_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_presence_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_presence_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_presence_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_presence_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_presence_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup: WebMappingRetrieve<msdyn_omnichannelconfiguration_Select,msdyn_omnichannelconfiguration_Expand,msdyn_omnichannelconfiguration_Filter,msdyn_omnichannelconfiguration_Fixed,msdyn_omnichannelconfiguration_Result,msdyn_omnichannelconfiguration_FormattedResult>;
  msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup: WebMappingRetrieve<msdyn_omnichannelconfiguration_Select,msdyn_omnichannelconfiguration_Expand,msdyn_omnichannelconfiguration_Filter,msdyn_omnichannelconfiguration_Fixed,msdyn_omnichannelconfiguration_Result,msdyn_omnichannelconfiguration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_presences: WebMappingRetrieve<msdyn_presence_Select,msdyn_presence_Expand,msdyn_presence_Filter,msdyn_presence_Fixed,msdyn_presence_Result,msdyn_presence_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_presences: WebMappingRelated<msdyn_presence_RelatedOne,msdyn_presence_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_presences: WebMappingCUDA<msdyn_presence_Create,msdyn_presence_Update,msdyn_presence_Select>;
}
