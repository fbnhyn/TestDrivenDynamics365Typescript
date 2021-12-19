interface msdyn_entityconfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_entity?: string | null;
  msdyn_entityconfigid?: string | null;
  msdyn_entitysetname?: string | null;
  msdyn_relationshipname?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_entityconfig_statecode | null;
  statuscode?: msdyn_entityconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_entityconfig_Relationships {
  msdyn_LiveWorkStreamId?: msdyn_liveworkstream_Result | null;
  msdyn_entityconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_entityconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_entityconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_entityconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_entityconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_entityconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_entityconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_entityconfig extends msdyn_entityconfig_Base, msdyn_entityconfig_Relationships {
  msdyn_LiveWorkStreamId_bind$msdyn_liveworkstreams?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_entityconfig_Create extends msdyn_entityconfig {
}
interface msdyn_entityconfig_Update extends msdyn_entityconfig {
}
interface msdyn_entityconfig_Select {
  createdby_guid: WebAttribute<msdyn_entityconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_entityconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_entityconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_entityconfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_entityconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_entityconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_entityconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_entity: WebAttribute<msdyn_entityconfig_Select, { msdyn_entity: string | null }, {  }>;
  msdyn_entityconfigid: WebAttribute<msdyn_entityconfig_Select, { msdyn_entityconfigid: string | null }, {  }>;
  msdyn_entitysetname: WebAttribute<msdyn_entityconfig_Select, { msdyn_entitysetname: string | null }, {  }>;
  msdyn_liveworkstreamid_guid: WebAttribute<msdyn_entityconfig_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  msdyn_relationshipname: WebAttribute<msdyn_entityconfig_Select, { msdyn_relationshipname: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_entityconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_entityconfig_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_entityconfig_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_entityconfig_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_entityconfig_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_entityconfig_Select, { statecode: msdyn_entityconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_entityconfig_Select, { statuscode: msdyn_entityconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_entityconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_entityconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_entityconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_entityconfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_entity: string;
  msdyn_entityconfigid: XQW.Guid;
  msdyn_entitysetname: string;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  msdyn_relationshipname: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_entityconfig_statecode;
  statuscode: msdyn_entityconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_entityconfig_Expand {
  createdby: WebExpand<msdyn_entityconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_entityconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_entityconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_entityconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_LiveWorkStreamId: WebExpand<msdyn_entityconfig_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_LiveWorkStreamId: msdyn_liveworkstream_Result }>;
  msdyn_entityconfig_AsyncOperations: WebExpand<msdyn_entityconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_entityconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_entityconfig_BulkDeleteFailures: WebExpand<msdyn_entityconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_entityconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_entityconfig_MailboxTrackingFolders: WebExpand<msdyn_entityconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_entityconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_entityconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_entityconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_entityconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_entityconfig_ProcessSession: WebExpand<msdyn_entityconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_entityconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_entityconfig_SyncErrors: WebExpand<msdyn_entityconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_entityconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_entityconfig_UserEntityInstanceDatas: WebExpand<msdyn_entityconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_entityconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_entityconfig_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_entityconfig_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_entityconfig_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_entityconfig_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_entityconfig_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkstreamid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_entityconfig_Result extends msdyn_entityconfig_Base, msdyn_entityconfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkstreamid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_entityconfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_LiveWorkStreamId: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_entityconfig_RelatedMany {
  msdyn_entityconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_entityconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_entityconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_entityconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_entityconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_entityconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_entityconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_entityconfigs: WebMappingRetrieve<msdyn_entityconfig_Select,msdyn_entityconfig_Expand,msdyn_entityconfig_Filter,msdyn_entityconfig_Fixed,msdyn_entityconfig_Result,msdyn_entityconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_entityconfigs: WebMappingRelated<msdyn_entityconfig_RelatedOne,msdyn_entityconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_entityconfigs: WebMappingCUDA<msdyn_entityconfig_Create,msdyn_entityconfig_Update,msdyn_entityconfig_Select>;
}
