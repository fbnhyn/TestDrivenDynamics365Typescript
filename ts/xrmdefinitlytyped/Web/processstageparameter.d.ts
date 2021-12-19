interface processstageparameter_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  processstageparameterid?: string | null;
  statecode?: processstageparameter_statecode | null;
  statuscode?: processstageparameter_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  value?: string | null;
  versionnumber?: number | null;
}
interface processstageparameter_Relationships {
  ProcessStageId?: ProcessStage_Result | null;
  processstageparameter_AsyncOperations?: AsyncOperation_Result[] | null;
  processstageparameter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  processstageparameter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  processstageparameter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  processstageparameter_ProcessSession?: ProcessSession_Result[] | null;
  processstageparameter_SyncErrors?: SyncError_Result[] | null;
  processstageparameter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface processstageparameter extends processstageparameter_Base, processstageparameter_Relationships {
  ProcessStageId_bind$processstages?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface processstageparameter_Create extends processstageparameter {
}
interface processstageparameter_Update extends processstageparameter {
}
interface processstageparameter_Select {
  createdby_guid: WebAttribute<processstageparameter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<processstageparameter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<processstageparameter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<processstageparameter_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<processstageparameter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<processstageparameter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<processstageparameter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<processstageparameter_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<processstageparameter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<processstageparameter_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<processstageparameter_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<processstageparameter_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<processstageparameter_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processstageid_guid: WebAttribute<processstageparameter_Select, { processstageid_guid: string | null }, { processstageid_formatted?: string }>;
  processstageparameterid: WebAttribute<processstageparameter_Select, { processstageparameterid: string | null }, {  }>;
  statecode: WebAttribute<processstageparameter_Select, { statecode: processstageparameter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<processstageparameter_Select, { statuscode: processstageparameter_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<processstageparameter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<processstageparameter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  value: WebAttribute<processstageparameter_Select, { value: string | null }, {  }>;
  versionnumber: WebAttribute<processstageparameter_Select, { versionnumber: number | null }, {  }>;
}
interface processstageparameter_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processstageid_guid: XQW.Guid;
  processstageparameterid: XQW.Guid;
  statecode: processstageparameter_statecode;
  statuscode: processstageparameter_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  value: string;
  versionnumber: number;
}
interface processstageparameter_Expand {
  ProcessStageId: WebExpand<processstageparameter_Expand, ProcessStage_Select, ProcessStage_Filter, { ProcessStageId: ProcessStage_Result }>;
  createdby: WebExpand<processstageparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<processstageparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<processstageparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<processstageparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<processstageparameter_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<processstageparameter_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<processstageparameter_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<processstageparameter_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  processstageparameter_AsyncOperations: WebExpand<processstageparameter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { processstageparameter_AsyncOperations: AsyncOperation_Result[] }>;
  processstageparameter_BulkDeleteFailures: WebExpand<processstageparameter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { processstageparameter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  processstageparameter_MailboxTrackingFolders: WebExpand<processstageparameter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { processstageparameter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  processstageparameter_PrincipalObjectAttributeAccesses: WebExpand<processstageparameter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { processstageparameter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  processstageparameter_ProcessSession: WebExpand<processstageparameter_Expand, ProcessSession_Select, ProcessSession_Filter, { processstageparameter_ProcessSession: ProcessSession_Result[] }>;
  processstageparameter_SyncErrors: WebExpand<processstageparameter_Expand, SyncError_Select, SyncError_Filter, { processstageparameter_SyncErrors: SyncError_Result[] }>;
  processstageparameter_UserEntityInstanceDatas: WebExpand<processstageparameter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { processstageparameter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface processstageparameter_FormattedResult {
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
  processstageid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface processstageparameter_Result extends processstageparameter_Base, processstageparameter_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  processstageid_guid: string | null;
}
interface processstageparameter_RelatedOne {
  ProcessStageId: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface processstageparameter_RelatedMany {
  processstageparameter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  processstageparameter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  processstageparameter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  processstageparameter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  processstageparameter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  processstageparameter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  processstageparameter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  processstageparameters: WebMappingRetrieve<processstageparameter_Select,processstageparameter_Expand,processstageparameter_Filter,processstageparameter_Fixed,processstageparameter_Result,processstageparameter_FormattedResult>;
}
interface WebEntitiesRelated {
  processstageparameters: WebMappingRelated<processstageparameter_RelatedOne,processstageparameter_RelatedMany>;
}
interface WebEntitiesCUDA {
  processstageparameters: WebMappingCUDA<processstageparameter_Create,processstageparameter_Update,processstageparameter_Select>;
}
