interface msdyn_knowledgeinteractioninsight_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_articlerank?: number | null;
  msdyn_articlerecordid?: string | null;
  msdyn_articlerelevance?: number | null;
  msdyn_interactioncontext?: string | null;
  msdyn_interactiontype?: string | null;
  msdyn_knowledgeinteractioninsightid?: string | null;
  msdyn_knowledgeoperationid?: string | null;
  msdyn_knowledgeoperationtype?: string | null;
  msdyn_timestamp?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_knowledgeinteractioninsight_statecode | null;
  statuscode?: msdyn_knowledgeinteractioninsight_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_knowledgeinteractioninsight_Relationships {
  msdyn_knowledgeinteractioninsight_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_knowledgeinteractioninsight_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_knowledgeinteractioninsight_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgeinteractioninsight_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_knowledgeinteractioninsight_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_knowledgeinteractioninsight_SyncErrors?: SyncError_Result[] | null;
  msdyn_knowledgeinteractioninsight_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_knowledgeinteractioninsight extends msdyn_knowledgeinteractioninsight_Base, msdyn_knowledgeinteractioninsight_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_knowledgeinteractioninsight_Create extends msdyn_knowledgeinteractioninsight {
}
interface msdyn_knowledgeinteractioninsight_Update extends msdyn_knowledgeinteractioninsight {
}
interface msdyn_knowledgeinteractioninsight_Select {
  createdby_guid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_articlerank: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { msdyn_articlerank: number | null }, {  }>;
  msdyn_articlerecordid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { msdyn_articlerecordid: string | null }, {  }>;
  msdyn_articlerelevance: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { msdyn_articlerelevance: number | null }, {  }>;
  msdyn_interactioncontext: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { msdyn_interactioncontext: string | null }, {  }>;
  msdyn_interactiontype: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { msdyn_interactiontype: string | null }, {  }>;
  msdyn_knowledgeinteractioninsightid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { msdyn_knowledgeinteractioninsightid: string | null }, {  }>;
  msdyn_knowledgeoperationid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { msdyn_knowledgeoperationid: string | null }, {  }>;
  msdyn_knowledgeoperationtype: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { msdyn_knowledgeoperationtype: string | null }, {  }>;
  msdyn_timestamp: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { msdyn_timestamp: Date | null }, { msdyn_timestamp_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { statecode: msdyn_knowledgeinteractioninsight_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { statuscode: msdyn_knowledgeinteractioninsight_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_knowledgeinteractioninsight_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_knowledgeinteractioninsight_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_articlerank: number;
  msdyn_articlerecordid: string;
  msdyn_articlerelevance: number;
  msdyn_interactioncontext: string;
  msdyn_interactiontype: string;
  msdyn_knowledgeinteractioninsightid: XQW.Guid;
  msdyn_knowledgeoperationid: string;
  msdyn_knowledgeoperationtype: string;
  msdyn_timestamp: Date;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_knowledgeinteractioninsight_statecode;
  statuscode: msdyn_knowledgeinteractioninsight_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_knowledgeinteractioninsight_Expand {
  createdby: WebExpand<msdyn_knowledgeinteractioninsight_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_knowledgeinteractioninsight_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_knowledgeinteractioninsight_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_knowledgeinteractioninsight_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_knowledgeinteractioninsight_AsyncOperations: WebExpand<msdyn_knowledgeinteractioninsight_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_knowledgeinteractioninsight_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_knowledgeinteractioninsight_BulkDeleteFailures: WebExpand<msdyn_knowledgeinteractioninsight_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_knowledgeinteractioninsight_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_knowledgeinteractioninsight_DuplicateBaseRecord: WebExpand<msdyn_knowledgeinteractioninsight_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgeinteractioninsight_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord: WebExpand<msdyn_knowledgeinteractioninsight_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgeinteractioninsight_MailboxTrackingFolders: WebExpand<msdyn_knowledgeinteractioninsight_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_knowledgeinteractioninsight_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses: WebExpand<msdyn_knowledgeinteractioninsight_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_knowledgeinteractioninsight_ProcessSession: WebExpand<msdyn_knowledgeinteractioninsight_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_knowledgeinteractioninsight_ProcessSession: ProcessSession_Result[] }>;
  msdyn_knowledgeinteractioninsight_SyncErrors: WebExpand<msdyn_knowledgeinteractioninsight_Expand, SyncError_Select, SyncError_Filter, { msdyn_knowledgeinteractioninsight_SyncErrors: SyncError_Result[] }>;
  msdyn_knowledgeinteractioninsight_UserEntityInstanceDatas: WebExpand<msdyn_knowledgeinteractioninsight_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_knowledgeinteractioninsight_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_knowledgeinteractioninsight_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_knowledgeinteractioninsight_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_knowledgeinteractioninsight_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_knowledgeinteractioninsight_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_knowledgeinteractioninsight_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_timestamp_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_knowledgeinteractioninsight_Result extends msdyn_knowledgeinteractioninsight_Base, msdyn_knowledgeinteractioninsight_Relationships {
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
interface msdyn_knowledgeinteractioninsight_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_knowledgeinteractioninsight_RelatedMany {
  msdyn_knowledgeinteractioninsight_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_knowledgeinteractioninsight_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_knowledgeinteractioninsight_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgeinteractioninsight_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgeinteractioninsight_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_knowledgeinteractioninsight_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_knowledgeinteractioninsight_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_knowledgeinteractioninsight_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_knowledgeinteractioninsight_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_knowledgeinteractioninsights: WebMappingRetrieve<msdyn_knowledgeinteractioninsight_Select,msdyn_knowledgeinteractioninsight_Expand,msdyn_knowledgeinteractioninsight_Filter,msdyn_knowledgeinteractioninsight_Fixed,msdyn_knowledgeinteractioninsight_Result,msdyn_knowledgeinteractioninsight_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_knowledgeinteractioninsights: WebMappingRelated<msdyn_knowledgeinteractioninsight_RelatedOne,msdyn_knowledgeinteractioninsight_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_knowledgeinteractioninsights: WebMappingCUDA<msdyn_knowledgeinteractioninsight_Create,msdyn_knowledgeinteractioninsight_Update,msdyn_knowledgeinteractioninsight_Select>;
}
