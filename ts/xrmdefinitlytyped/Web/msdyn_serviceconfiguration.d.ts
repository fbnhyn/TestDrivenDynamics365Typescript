interface msdyn_serviceconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_entitylogicalname?: string | null;
  msdyn_lookupattributeforsla?: string | null;
  msdyn_name?: string | null;
  msdyn_organizationid?: string | null;
  msdyn_pausestate?: string | null;
  msdyn_serviceconfigurationid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_serviceconfiguration_statecode | null;
  statuscode?: msdyn_serviceconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_serviceconfiguration_Relationships {
  msdyn_serviceconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_serviceconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_serviceconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_serviceconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_serviceconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_serviceconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_serviceconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_serviceconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_serviceconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_serviceconfiguration extends msdyn_serviceconfiguration_Base, msdyn_serviceconfiguration_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_serviceconfiguration_Create extends msdyn_serviceconfiguration {
}
interface msdyn_serviceconfiguration_Update extends msdyn_serviceconfiguration {
}
interface msdyn_serviceconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_serviceconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_serviceconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_serviceconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_serviceconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_serviceconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_serviceconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_serviceconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_entitylogicalname: WebAttribute<msdyn_serviceconfiguration_Select, { msdyn_entitylogicalname: string | null }, {  }>;
  msdyn_lookupattributeforsla: WebAttribute<msdyn_serviceconfiguration_Select, { msdyn_lookupattributeforsla: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_serviceconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_organizationid: WebAttribute<msdyn_serviceconfiguration_Select, { msdyn_organizationid: string | null }, {  }>;
  msdyn_pausestate: WebAttribute<msdyn_serviceconfiguration_Select, { msdyn_pausestate: string | null }, {  }>;
  msdyn_serviceconfigurationid: WebAttribute<msdyn_serviceconfiguration_Select, { msdyn_serviceconfigurationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_serviceconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_serviceconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_serviceconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_serviceconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_serviceconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_serviceconfiguration_Select, { statecode: msdyn_serviceconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_serviceconfiguration_Select, { statuscode: msdyn_serviceconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_serviceconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_serviceconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_serviceconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_serviceconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_entitylogicalname: string;
  msdyn_lookupattributeforsla: string;
  msdyn_name: string;
  msdyn_organizationid: string;
  msdyn_pausestate: string;
  msdyn_serviceconfigurationid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_serviceconfiguration_statecode;
  statuscode: msdyn_serviceconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_serviceconfiguration_Expand {
  createdby: WebExpand<msdyn_serviceconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_serviceconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_serviceconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_serviceconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_serviceconfiguration_AsyncOperations: WebExpand<msdyn_serviceconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_serviceconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_serviceconfiguration_BulkDeleteFailures: WebExpand<msdyn_serviceconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_serviceconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_serviceconfiguration_DuplicateBaseRecord: WebExpand<msdyn_serviceconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_serviceconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_serviceconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_serviceconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_serviceconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_serviceconfiguration_MailboxTrackingFolders: WebExpand<msdyn_serviceconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_serviceconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_serviceconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_serviceconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_serviceconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_serviceconfiguration_ProcessSession: WebExpand<msdyn_serviceconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_serviceconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_serviceconfiguration_SyncErrors: WebExpand<msdyn_serviceconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_serviceconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_serviceconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_serviceconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_serviceconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_serviceconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_serviceconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_serviceconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_serviceconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_serviceconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_serviceconfiguration_Result extends msdyn_serviceconfiguration_Base, msdyn_serviceconfiguration_Relationships {
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
interface msdyn_serviceconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_serviceconfiguration_RelatedMany {
  msdyn_serviceconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_serviceconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_serviceconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_serviceconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_serviceconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_serviceconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_serviceconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_serviceconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_serviceconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_serviceconfigurations: WebMappingRetrieve<msdyn_serviceconfiguration_Select,msdyn_serviceconfiguration_Expand,msdyn_serviceconfiguration_Filter,msdyn_serviceconfiguration_Fixed,msdyn_serviceconfiguration_Result,msdyn_serviceconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_serviceconfigurations: WebMappingRelated<msdyn_serviceconfiguration_RelatedOne,msdyn_serviceconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_serviceconfigurations: WebMappingCUDA<msdyn_serviceconfiguration_Create,msdyn_serviceconfiguration_Update,msdyn_serviceconfiguration_Select>;
}
