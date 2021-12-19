interface msdyn_callablecontext_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_EntityLogicalName?: string | null;
  msdyn_EntityOTC?: msdyn_callablecontext_relatedentity | null;
  msdyn_callablecontextid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_callablecontext_statecode | null;
  statuscode?: msdyn_callablecontext_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_callablecontext_Relationships {
  msdyn_callablecontext_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_callablecontext_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_callablecontext_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_callablecontext_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_callablecontext_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_callablecontext_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_callablecontext_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_callablecontext_SyncErrors?: SyncError_Result[] | null;
  msdyn_callablecontext_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_callablecontext_msdyn_playbooktemplate?: msdyn_playbooktemplate_Result[] | null;
}
interface msdyn_callablecontext extends msdyn_callablecontext_Base, msdyn_callablecontext_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_callablecontext_Create extends msdyn_callablecontext {
}
interface msdyn_callablecontext_Update extends msdyn_callablecontext {
}
interface msdyn_callablecontext_Select {
  createdby_guid: WebAttribute<msdyn_callablecontext_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_callablecontext_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_callablecontext_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_callablecontext_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_callablecontext_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_callablecontext_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_callablecontext_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_EntityLogicalName: WebAttribute<msdyn_callablecontext_Select, { msdyn_EntityLogicalName: string | null }, {  }>;
  msdyn_EntityOTC: WebAttribute<msdyn_callablecontext_Select, { msdyn_EntityOTC: msdyn_callablecontext_relatedentity | null }, { msdyn_EntityOTC_formatted?: string }>;
  msdyn_callablecontextid: WebAttribute<msdyn_callablecontext_Select, { msdyn_callablecontextid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_callablecontext_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_callablecontext_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_callablecontext_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_callablecontext_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_callablecontext_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_callablecontext_Select, { statecode: msdyn_callablecontext_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_callablecontext_Select, { statuscode: msdyn_callablecontext_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_callablecontext_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_callablecontext_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_callablecontext_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_callablecontext_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_EntityLogicalName: string;
  msdyn_EntityOTC: msdyn_callablecontext_relatedentity;
  msdyn_callablecontextid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_callablecontext_statecode;
  statuscode: msdyn_callablecontext_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_callablecontext_Expand {
  createdby: WebExpand<msdyn_callablecontext_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_callablecontext_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_callablecontext_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_callablecontext_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_callablecontext_AsyncOperations: WebExpand<msdyn_callablecontext_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_callablecontext_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_callablecontext_BulkDeleteFailures: WebExpand<msdyn_callablecontext_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_callablecontext_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_callablecontext_DuplicateBaseRecord: WebExpand<msdyn_callablecontext_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_callablecontext_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_callablecontext_DuplicateMatchingRecord: WebExpand<msdyn_callablecontext_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_callablecontext_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_callablecontext_MailboxTrackingFolders: WebExpand<msdyn_callablecontext_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_callablecontext_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_callablecontext_PrincipalObjectAttributeAccesses: WebExpand<msdyn_callablecontext_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_callablecontext_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_callablecontext_ProcessSession: WebExpand<msdyn_callablecontext_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_callablecontext_ProcessSession: ProcessSession_Result[] }>;
  msdyn_callablecontext_SyncErrors: WebExpand<msdyn_callablecontext_Expand, SyncError_Select, SyncError_Filter, { msdyn_callablecontext_SyncErrors: SyncError_Result[] }>;
  msdyn_callablecontext_UserEntityInstanceDatas: WebExpand<msdyn_callablecontext_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_callablecontext_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_callablecontext_msdyn_playbooktemplate: WebExpand<msdyn_callablecontext_Expand, msdyn_playbooktemplate_Select, msdyn_playbooktemplate_Filter, { msdyn_callablecontext_msdyn_playbooktemplate: msdyn_playbooktemplate_Result[] }>;
  ownerid: WebExpand<msdyn_callablecontext_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_callablecontext_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_callablecontext_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_callablecontext_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_callablecontext_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_EntityOTC_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_callablecontext_Result extends msdyn_callablecontext_Base, msdyn_callablecontext_Relationships {
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
interface msdyn_callablecontext_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_callablecontext_RelatedMany {
  msdyn_callablecontext_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_callablecontext_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_callablecontext_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_callablecontext_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_callablecontext_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_callablecontext_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_callablecontext_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_callablecontext_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_callablecontext_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_callablecontext_msdyn_playbooktemplate: WebMappingRetrieve<msdyn_playbooktemplate_Select,msdyn_playbooktemplate_Expand,msdyn_playbooktemplate_Filter,msdyn_playbooktemplate_Fixed,msdyn_playbooktemplate_Result,msdyn_playbooktemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_callablecontexts: WebMappingRetrieve<msdyn_callablecontext_Select,msdyn_callablecontext_Expand,msdyn_callablecontext_Filter,msdyn_callablecontext_Fixed,msdyn_callablecontext_Result,msdyn_callablecontext_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_callablecontexts: WebMappingRelated<msdyn_callablecontext_RelatedOne,msdyn_callablecontext_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_callablecontexts: WebMappingCUDA<msdyn_callablecontext_Create,msdyn_callablecontext_Update,msdyn_callablecontext_Select>;
}
