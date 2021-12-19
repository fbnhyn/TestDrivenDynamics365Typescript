interface msdyn_sequencestat_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_avgtimefortargetcompletion?: number | null;
  msdyn_name?: string | null;
  msdyn_range?: number | null;
  msdyn_sequencestatid?: string | null;
  msdyn_successrate?: number | null;
  msdyn_targetscompleted?: number | null;
  msdyn_targetscreated?: number | null;
  msdyn_targetsdisconnected?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sequencestat_statecode | null;
  statuscode?: msdyn_sequencestat_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_sequencestat_Relationships {
  msdyn_sequencestat_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sequencestat_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sequencestat_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sequencestat_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sequencestat_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sequencestat_SyncErrors?: SyncError_Result[] | null;
  msdyn_sequencestat_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_sequencestat extends msdyn_sequencestat_Base, msdyn_sequencestat_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_sequencestat_Create extends msdyn_sequencestat {
  msdyn_sequence_bind$msdyn_sequences?: string | null;
}
interface msdyn_sequencestat_Update extends msdyn_sequencestat {
}
interface msdyn_sequencestat_Select {
  createdby_guid: WebAttribute<msdyn_sequencestat_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_sequencestat_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_sequencestat_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_sequencestat_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_sequencestat_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_sequencestat_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_sequencestat_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_avgtimefortargetcompletion: WebAttribute<msdyn_sequencestat_Select, { msdyn_avgtimefortargetcompletion: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_sequencestat_Select, { msdyn_name: string | null }, {  }>;
  msdyn_range: WebAttribute<msdyn_sequencestat_Select, { msdyn_range: number | null }, {  }>;
  msdyn_sequence_guid: WebAttribute<msdyn_sequencestat_Select, { msdyn_sequence_guid: string | null }, { msdyn_sequence_formatted?: string }>;
  msdyn_sequencestatid: WebAttribute<msdyn_sequencestat_Select, { msdyn_sequencestatid: string | null }, {  }>;
  msdyn_successrate: WebAttribute<msdyn_sequencestat_Select, { msdyn_successrate: number | null }, {  }>;
  msdyn_targetscompleted: WebAttribute<msdyn_sequencestat_Select, { msdyn_targetscompleted: number | null }, {  }>;
  msdyn_targetscreated: WebAttribute<msdyn_sequencestat_Select, { msdyn_targetscreated: number | null }, {  }>;
  msdyn_targetsdisconnected: WebAttribute<msdyn_sequencestat_Select, { msdyn_targetsdisconnected: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_sequencestat_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_sequencestat_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_sequencestat_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_sequencestat_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_sequencestat_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_sequencestat_Select, { statecode: msdyn_sequencestat_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_sequencestat_Select, { statuscode: msdyn_sequencestat_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_sequencestat_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_sequencestat_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sequencestat_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sequencestat_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_avgtimefortargetcompletion: number;
  msdyn_name: string;
  msdyn_range: number;
  msdyn_sequence_guid: XQW.Guid;
  msdyn_sequencestatid: XQW.Guid;
  msdyn_successrate: number;
  msdyn_targetscompleted: number;
  msdyn_targetscreated: number;
  msdyn_targetsdisconnected: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_sequencestat_statecode;
  statuscode: msdyn_sequencestat_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_sequencestat_Expand {
  createdby: WebExpand<msdyn_sequencestat_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_sequencestat_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_sequencestat_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_sequencestat_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_sequence: WebExpand<msdyn_sequencestat_Expand, msdyn_sequence_Select, msdyn_sequence_Filter, { msdyn_sequence: msdyn_sequence_Result }>;
  msdyn_sequencestat_AsyncOperations: WebExpand<msdyn_sequencestat_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sequencestat_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sequencestat_BulkDeleteFailures: WebExpand<msdyn_sequencestat_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sequencestat_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sequencestat_MailboxTrackingFolders: WebExpand<msdyn_sequencestat_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sequencestat_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sequencestat_PrincipalObjectAttributeAccesses: WebExpand<msdyn_sequencestat_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sequencestat_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sequencestat_ProcessSession: WebExpand<msdyn_sequencestat_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sequencestat_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sequencestat_SyncErrors: WebExpand<msdyn_sequencestat_Expand, SyncError_Select, SyncError_Filter, { msdyn_sequencestat_SyncErrors: SyncError_Result[] }>;
  msdyn_sequencestat_UserEntityInstanceDatas: WebExpand<msdyn_sequencestat_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sequencestat_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_sequencestat_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_sequencestat_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_sequencestat_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_sequencestat_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_sequencestat_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_sequence_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_sequencestat_Result extends msdyn_sequencestat_Base, msdyn_sequencestat_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_sequence_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_sequencestat_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_sequence: WebMappingRetrieve<msdyn_sequence_Select,msdyn_sequence_Expand,msdyn_sequence_Filter,msdyn_sequence_Fixed,msdyn_sequence_Result,msdyn_sequence_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_sequencestat_RelatedMany {
  msdyn_sequencestat_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sequencestat_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sequencestat_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sequencestat_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sequencestat_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sequencestat_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sequencestat_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sequencestats: WebMappingRetrieve<msdyn_sequencestat_Select,msdyn_sequencestat_Expand,msdyn_sequencestat_Filter,msdyn_sequencestat_Fixed,msdyn_sequencestat_Result,msdyn_sequencestat_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sequencestats: WebMappingRelated<msdyn_sequencestat_RelatedOne,msdyn_sequencestat_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sequencestats: WebMappingCUDA<msdyn_sequencestat_Create,msdyn_sequencestat_Update,msdyn_sequencestat_Select>;
}
