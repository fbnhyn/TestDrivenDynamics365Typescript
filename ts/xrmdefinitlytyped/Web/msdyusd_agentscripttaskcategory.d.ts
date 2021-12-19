interface msdyusd_agentscripttaskcategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_agentscripttaskcategoryid?: string | null;
  msdyusd_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_agentscripttaskcategory_statecode | null;
  statuscode?: msdyusd_agentscripttaskcategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_agentscripttaskcategory_Relationships {
  msdyusd_agentscripttaskcategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_agentscripttaskcategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_agentscripttaskcategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyusd_agentscripttaskcategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyusd_agentscripttaskcategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_agentscripttaskcategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_agentscripttaskcategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_agentscripttaskcategory_SyncErrors?: SyncError_Result[] | null;
  msdyusd_agentscripttaskcategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyusd_agentscripttaskcategory_task_Category?: msdyusd_task_Result[] | null;
}
interface msdyusd_agentscripttaskcategory extends msdyusd_agentscripttaskcategory_Base, msdyusd_agentscripttaskcategory_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_agentscripttaskcategory_Create extends msdyusd_agentscripttaskcategory {
}
interface msdyusd_agentscripttaskcategory_Update extends msdyusd_agentscripttaskcategory {
}
interface msdyusd_agentscripttaskcategory_Select {
  createdby_guid: WebAttribute<msdyusd_agentscripttaskcategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_agentscripttaskcategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_agentscripttaskcategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_agentscripttaskcategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_agentscripttaskcategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_agentscripttaskcategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_agentscripttaskcategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_agentscripttaskcategoryid: WebAttribute<msdyusd_agentscripttaskcategory_Select, { msdyusd_agentscripttaskcategoryid: string | null }, {  }>;
  msdyusd_name: WebAttribute<msdyusd_agentscripttaskcategory_Select, { msdyusd_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyusd_agentscripttaskcategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_agentscripttaskcategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_agentscripttaskcategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_agentscripttaskcategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_agentscripttaskcategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_agentscripttaskcategory_Select, { statecode: msdyusd_agentscripttaskcategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_agentscripttaskcategory_Select, { statuscode: msdyusd_agentscripttaskcategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_agentscripttaskcategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_agentscripttaskcategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_agentscripttaskcategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_agentscripttaskcategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_agentscripttaskcategoryid: XQW.Guid;
  msdyusd_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_agentscripttaskcategory_statecode;
  statuscode: msdyusd_agentscripttaskcategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_agentscripttaskcategory_Expand {
  createdby: WebExpand<msdyusd_agentscripttaskcategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_agentscripttaskcategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_agentscripttaskcategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_agentscripttaskcategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_agentscripttaskcategory_AsyncOperations: WebExpand<msdyusd_agentscripttaskcategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_agentscripttaskcategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_agentscripttaskcategory_BulkDeleteFailures: WebExpand<msdyusd_agentscripttaskcategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_agentscripttaskcategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_agentscripttaskcategory_DuplicateBaseRecord: WebExpand<msdyusd_agentscripttaskcategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_agentscripttaskcategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyusd_agentscripttaskcategory_DuplicateMatchingRecord: WebExpand<msdyusd_agentscripttaskcategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyusd_agentscripttaskcategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyusd_agentscripttaskcategory_MailboxTrackingFolders: WebExpand<msdyusd_agentscripttaskcategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_agentscripttaskcategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_agentscripttaskcategory_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_agentscripttaskcategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_agentscripttaskcategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_agentscripttaskcategory_ProcessSession: WebExpand<msdyusd_agentscripttaskcategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_agentscripttaskcategory_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_agentscripttaskcategory_SyncErrors: WebExpand<msdyusd_agentscripttaskcategory_Expand, SyncError_Select, SyncError_Filter, { msdyusd_agentscripttaskcategory_SyncErrors: SyncError_Result[] }>;
  msdyusd_agentscripttaskcategory_UserEntityInstanceDatas: WebExpand<msdyusd_agentscripttaskcategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_agentscripttaskcategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyusd_agentscripttaskcategory_task_Category: WebExpand<msdyusd_agentscripttaskcategory_Expand, msdyusd_task_Select, msdyusd_task_Filter, { msdyusd_agentscripttaskcategory_task_Category: msdyusd_task_Result[] }>;
  ownerid: WebExpand<msdyusd_agentscripttaskcategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_agentscripttaskcategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_agentscripttaskcategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_agentscripttaskcategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_agentscripttaskcategory_FormattedResult {
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
interface msdyusd_agentscripttaskcategory_Result extends msdyusd_agentscripttaskcategory_Base, msdyusd_agentscripttaskcategory_Relationships {
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
interface msdyusd_agentscripttaskcategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_agentscripttaskcategory_RelatedMany {
  msdyusd_agentscripttaskcategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_agentscripttaskcategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_agentscripttaskcategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_agentscripttaskcategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyusd_agentscripttaskcategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_agentscripttaskcategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_agentscripttaskcategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_agentscripttaskcategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_agentscripttaskcategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyusd_agentscripttaskcategory_task_Category: WebMappingRetrieve<msdyusd_task_Select,msdyusd_task_Expand,msdyusd_task_Filter,msdyusd_task_Fixed,msdyusd_task_Result,msdyusd_task_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_agentscripttaskcategories: WebMappingRetrieve<msdyusd_agentscripttaskcategory_Select,msdyusd_agentscripttaskcategory_Expand,msdyusd_agentscripttaskcategory_Filter,msdyusd_agentscripttaskcategory_Fixed,msdyusd_agentscripttaskcategory_Result,msdyusd_agentscripttaskcategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_agentscripttaskcategories: WebMappingRelated<msdyusd_agentscripttaskcategory_RelatedOne,msdyusd_agentscripttaskcategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_agentscripttaskcategories: WebMappingCUDA<msdyusd_agentscripttaskcategory_Create,msdyusd_agentscripttaskcategory_Update,msdyusd_agentscripttaskcategory_Select>;
}
