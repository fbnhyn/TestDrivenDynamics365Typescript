interface msdyn_oc_geolocationprovider_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_oc_geolocationproviderid?: string | null;
  msdyn_providerapikey?: string | null;
  msdyn_providerapikeyversion?: number | null;
  msdyn_providername?: msdyn_oc_geolocationprovider_msdyn_providername | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_oc_geolocationprovider_statecode | null;
  statuscode?: msdyn_oc_geolocationprovider_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_oc_geolocationprovider_Relationships {
  msdyn_msdyn_oc_geolocationprovider_msdyn_livechatconfig?: msdyn_livechatconfig_Result[] | null;
  msdyn_oc_geolocationprovider_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_oc_geolocationprovider_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_oc_geolocationprovider_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_oc_geolocationprovider_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_oc_geolocationprovider_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_oc_geolocationprovider_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_oc_geolocationprovider_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_oc_geolocationprovider_SyncErrors?: SyncError_Result[] | null;
  msdyn_oc_geolocationprovider_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_oc_geolocationprovider extends msdyn_oc_geolocationprovider_Base, msdyn_oc_geolocationprovider_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_oc_geolocationprovider_Create extends msdyn_oc_geolocationprovider {
}
interface msdyn_oc_geolocationprovider_Update extends msdyn_oc_geolocationprovider {
}
interface msdyn_oc_geolocationprovider_Select {
  createdby_guid: WebAttribute<msdyn_oc_geolocationprovider_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_oc_geolocationprovider_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_oc_geolocationprovider_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_oc_geolocationprovider_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_oc_geolocationprovider_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_oc_geolocationprovider_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_oc_geolocationprovider_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_oc_geolocationprovider_Select, { msdyn_name: string | null }, {  }>;
  msdyn_oc_geolocationproviderid: WebAttribute<msdyn_oc_geolocationprovider_Select, { msdyn_oc_geolocationproviderid: string | null }, {  }>;
  msdyn_providerapikey: WebAttribute<msdyn_oc_geolocationprovider_Select, { msdyn_providerapikey: string | null }, {  }>;
  msdyn_providerapikeyversion: WebAttribute<msdyn_oc_geolocationprovider_Select, { msdyn_providerapikeyversion: number | null }, {  }>;
  msdyn_providername: WebAttribute<msdyn_oc_geolocationprovider_Select, { msdyn_providername: msdyn_oc_geolocationprovider_msdyn_providername | null }, { msdyn_providername_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_oc_geolocationprovider_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_oc_geolocationprovider_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_oc_geolocationprovider_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_oc_geolocationprovider_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_oc_geolocationprovider_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_oc_geolocationprovider_Select, { statecode: msdyn_oc_geolocationprovider_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_oc_geolocationprovider_Select, { statuscode: msdyn_oc_geolocationprovider_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_oc_geolocationprovider_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_oc_geolocationprovider_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_oc_geolocationprovider_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_oc_geolocationprovider_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_oc_geolocationproviderid: XQW.Guid;
  msdyn_providerapikey: string;
  msdyn_providerapikeyversion: number;
  msdyn_providername: msdyn_oc_geolocationprovider_msdyn_providername;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_oc_geolocationprovider_statecode;
  statuscode: msdyn_oc_geolocationprovider_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_oc_geolocationprovider_Expand {
  createdby: WebExpand<msdyn_oc_geolocationprovider_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_oc_geolocationprovider_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_oc_geolocationprovider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_oc_geolocationprovider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_oc_geolocationprovider_msdyn_livechatconfig: WebExpand<msdyn_oc_geolocationprovider_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_msdyn_oc_geolocationprovider_msdyn_livechatconfig: msdyn_livechatconfig_Result[] }>;
  msdyn_oc_geolocationprovider_AsyncOperations: WebExpand<msdyn_oc_geolocationprovider_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_oc_geolocationprovider_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_oc_geolocationprovider_BulkDeleteFailures: WebExpand<msdyn_oc_geolocationprovider_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_oc_geolocationprovider_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_oc_geolocationprovider_DuplicateBaseRecord: WebExpand<msdyn_oc_geolocationprovider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_oc_geolocationprovider_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_oc_geolocationprovider_DuplicateMatchingRecord: WebExpand<msdyn_oc_geolocationprovider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_oc_geolocationprovider_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_oc_geolocationprovider_MailboxTrackingFolders: WebExpand<msdyn_oc_geolocationprovider_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_oc_geolocationprovider_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_oc_geolocationprovider_PrincipalObjectAttributeAccesses: WebExpand<msdyn_oc_geolocationprovider_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_oc_geolocationprovider_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_oc_geolocationprovider_ProcessSession: WebExpand<msdyn_oc_geolocationprovider_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_oc_geolocationprovider_ProcessSession: ProcessSession_Result[] }>;
  msdyn_oc_geolocationprovider_SyncErrors: WebExpand<msdyn_oc_geolocationprovider_Expand, SyncError_Select, SyncError_Filter, { msdyn_oc_geolocationprovider_SyncErrors: SyncError_Result[] }>;
  msdyn_oc_geolocationprovider_UserEntityInstanceDatas: WebExpand<msdyn_oc_geolocationprovider_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_oc_geolocationprovider_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_oc_geolocationprovider_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_oc_geolocationprovider_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_oc_geolocationprovider_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_oc_geolocationprovider_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_oc_geolocationprovider_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_providername_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_oc_geolocationprovider_Result extends msdyn_oc_geolocationprovider_Base, msdyn_oc_geolocationprovider_Relationships {
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
interface msdyn_oc_geolocationprovider_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_oc_geolocationprovider_RelatedMany {
  msdyn_msdyn_oc_geolocationprovider_msdyn_livechatconfig: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  msdyn_oc_geolocationprovider_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_oc_geolocationprovider_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_oc_geolocationprovider_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_oc_geolocationprovider_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_oc_geolocationprovider_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_oc_geolocationprovider_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_oc_geolocationprovider_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_oc_geolocationprovider_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_oc_geolocationprovider_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_oc_geolocationproviders: WebMappingRetrieve<msdyn_oc_geolocationprovider_Select,msdyn_oc_geolocationprovider_Expand,msdyn_oc_geolocationprovider_Filter,msdyn_oc_geolocationprovider_Fixed,msdyn_oc_geolocationprovider_Result,msdyn_oc_geolocationprovider_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_oc_geolocationproviders: WebMappingRelated<msdyn_oc_geolocationprovider_RelatedOne,msdyn_oc_geolocationprovider_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_oc_geolocationproviders: WebMappingCUDA<msdyn_oc_geolocationprovider_Create,msdyn_oc_geolocationprovider_Update,msdyn_oc_geolocationprovider_Select>;
}
