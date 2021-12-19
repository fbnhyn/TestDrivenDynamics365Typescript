interface msdyn_integrationjobdetail_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_changesjson?: string | null;
  msdyn_fulljson?: string | null;
  msdyn_integrationjobdetailid?: string | null;
  msdyn_name?: string | null;
  msdyn_sequencenumber?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_integrationjobdetail_statecode | null;
  statuscode?: msdyn_integrationjobdetail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_integrationjobdetail_Relationships {
  msdyn_IntegrationJobHeader?: msdyn_integrationjob_Result | null;
  msdyn_integrationjobdetail_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_integrationjobdetail_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_integrationjobdetail_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_integrationjobdetail_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_integrationjobdetail_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_integrationjobdetail_SyncErrors?: SyncError_Result[] | null;
  msdyn_integrationjobdetail_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_integrationjobdetail extends msdyn_integrationjobdetail_Base, msdyn_integrationjobdetail_Relationships {
  msdyn_IntegrationJobHeader_bind$msdyn_integrationjobs?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_integrationjobdetail_Create extends msdyn_integrationjobdetail {
}
interface msdyn_integrationjobdetail_Update extends msdyn_integrationjobdetail {
}
interface msdyn_integrationjobdetail_Select {
  createdby_guid: WebAttribute<msdyn_integrationjobdetail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_integrationjobdetail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_integrationjobdetail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_integrationjobdetail_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_integrationjobdetail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_integrationjobdetail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_integrationjobdetail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_changesjson: WebAttribute<msdyn_integrationjobdetail_Select, { msdyn_changesjson: string | null }, {  }>;
  msdyn_fulljson: WebAttribute<msdyn_integrationjobdetail_Select, { msdyn_fulljson: string | null }, {  }>;
  msdyn_integrationjobdetailid: WebAttribute<msdyn_integrationjobdetail_Select, { msdyn_integrationjobdetailid: string | null }, {  }>;
  msdyn_integrationjobheader_guid: WebAttribute<msdyn_integrationjobdetail_Select, { msdyn_integrationjobheader_guid: string | null }, { msdyn_integrationjobheader_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_integrationjobdetail_Select, { msdyn_name: string | null }, {  }>;
  msdyn_sequencenumber: WebAttribute<msdyn_integrationjobdetail_Select, { msdyn_sequencenumber: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_integrationjobdetail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_integrationjobdetail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_integrationjobdetail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_integrationjobdetail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_integrationjobdetail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_integrationjobdetail_Select, { statecode: msdyn_integrationjobdetail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_integrationjobdetail_Select, { statuscode: msdyn_integrationjobdetail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_integrationjobdetail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_integrationjobdetail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_integrationjobdetail_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_integrationjobdetail_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_changesjson: string;
  msdyn_fulljson: string;
  msdyn_integrationjobdetailid: XQW.Guid;
  msdyn_integrationjobheader_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_sequencenumber: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_integrationjobdetail_statecode;
  statuscode: msdyn_integrationjobdetail_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_integrationjobdetail_Expand {
  createdby: WebExpand<msdyn_integrationjobdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_integrationjobdetail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_integrationjobdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_integrationjobdetail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_IntegrationJobHeader: WebExpand<msdyn_integrationjobdetail_Expand, msdyn_integrationjob_Select, msdyn_integrationjob_Filter, { msdyn_IntegrationJobHeader: msdyn_integrationjob_Result }>;
  msdyn_integrationjobdetail_AsyncOperations: WebExpand<msdyn_integrationjobdetail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_integrationjobdetail_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_integrationjobdetail_BulkDeleteFailures: WebExpand<msdyn_integrationjobdetail_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_integrationjobdetail_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_integrationjobdetail_MailboxTrackingFolders: WebExpand<msdyn_integrationjobdetail_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_integrationjobdetail_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_integrationjobdetail_PrincipalObjectAttributeAccesses: WebExpand<msdyn_integrationjobdetail_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_integrationjobdetail_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_integrationjobdetail_ProcessSession: WebExpand<msdyn_integrationjobdetail_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_integrationjobdetail_ProcessSession: ProcessSession_Result[] }>;
  msdyn_integrationjobdetail_SyncErrors: WebExpand<msdyn_integrationjobdetail_Expand, SyncError_Select, SyncError_Filter, { msdyn_integrationjobdetail_SyncErrors: SyncError_Result[] }>;
  msdyn_integrationjobdetail_UserEntityInstanceDatas: WebExpand<msdyn_integrationjobdetail_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_integrationjobdetail_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_integrationjobdetail_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_integrationjobdetail_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_integrationjobdetail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_integrationjobdetail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_integrationjobdetail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_integrationjobheader_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_integrationjobdetail_Result extends msdyn_integrationjobdetail_Base, msdyn_integrationjobdetail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_integrationjobheader_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_integrationjobdetail_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_IntegrationJobHeader: WebMappingRetrieve<msdyn_integrationjob_Select,msdyn_integrationjob_Expand,msdyn_integrationjob_Filter,msdyn_integrationjob_Fixed,msdyn_integrationjob_Result,msdyn_integrationjob_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_integrationjobdetail_RelatedMany {
  msdyn_integrationjobdetail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_integrationjobdetail_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_integrationjobdetail_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_integrationjobdetail_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_integrationjobdetail_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_integrationjobdetail_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_integrationjobdetail_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_integrationjobdetails: WebMappingRetrieve<msdyn_integrationjobdetail_Select,msdyn_integrationjobdetail_Expand,msdyn_integrationjobdetail_Filter,msdyn_integrationjobdetail_Fixed,msdyn_integrationjobdetail_Result,msdyn_integrationjobdetail_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_integrationjobdetails: WebMappingRelated<msdyn_integrationjobdetail_RelatedOne,msdyn_integrationjobdetail_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_integrationjobdetails: WebMappingCUDA<msdyn_integrationjobdetail_Create,msdyn_integrationjobdetail_Update,msdyn_integrationjobdetail_Select>;
}
