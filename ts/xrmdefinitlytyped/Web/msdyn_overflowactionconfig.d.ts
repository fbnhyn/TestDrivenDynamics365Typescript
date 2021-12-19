interface msdyn_overflowactionconfig_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_overflowactionconfigid?: string | null;
  msdyn_overflowactiondata?: string | null;
  msdyn_overflowactiontype?: msdyn_overflowactiontype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_overflowactionconfig_statecode | null;
  statuscode?: msdyn_overflowactionconfig_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_overflowactionconfig_Relationships {
  msdyn_overflowactionconfig_Annotations?: Annotation_Result[] | null;
  msdyn_overflowactionconfig_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_overflowactionconfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_overflowactionconfig_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_overflowactionconfig_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_overflowactionconfig_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_overflowactionconfig_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_overflowactionconfig_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_overflowactionconfig_QueueItems?: QueueItem_Result[] | null;
  msdyn_overflowactionconfig_SyncErrors?: SyncError_Result[] | null;
  msdyn_overflowactionconfig_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_overflowactionconfig extends msdyn_overflowactionconfig_Base, msdyn_overflowactionconfig_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_overflowactionconfig_Create extends msdyn_overflowactionconfig {
}
interface msdyn_overflowactionconfig_Update extends msdyn_overflowactionconfig {
}
interface msdyn_overflowactionconfig_Select {
  createdby_guid: WebAttribute<msdyn_overflowactionconfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_overflowactionconfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_overflowactionconfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_overflowactionconfig_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_overflowactionconfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_overflowactionconfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_overflowactionconfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_overflowactionconfig_Select, { msdyn_name: string | null }, {  }>;
  msdyn_overflowactionconfigid: WebAttribute<msdyn_overflowactionconfig_Select, { msdyn_overflowactionconfigid: string | null }, {  }>;
  msdyn_overflowactiondata: WebAttribute<msdyn_overflowactionconfig_Select, { msdyn_overflowactiondata: string | null }, {  }>;
  msdyn_overflowactiontype: WebAttribute<msdyn_overflowactionconfig_Select, { msdyn_overflowactiontype: msdyn_overflowactiontype | null }, { msdyn_overflowactiontype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_overflowactionconfig_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_overflowactionconfig_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_overflowactionconfig_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_overflowactionconfig_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_overflowactionconfig_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_overflowactionconfig_Select, { statecode: msdyn_overflowactionconfig_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_overflowactionconfig_Select, { statuscode: msdyn_overflowactionconfig_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_overflowactionconfig_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_overflowactionconfig_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_overflowactionconfig_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_overflowactionconfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_overflowactionconfigid: XQW.Guid;
  msdyn_overflowactiondata: string;
  msdyn_overflowactiontype: msdyn_overflowactiontype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_overflowactionconfig_statecode;
  statuscode: msdyn_overflowactionconfig_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_overflowactionconfig_Expand {
  createdby: WebExpand<msdyn_overflowactionconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_overflowactionconfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_overflowactionconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_overflowactionconfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_overflowactionconfig_Annotations: WebExpand<msdyn_overflowactionconfig_Expand, Annotation_Select, Annotation_Filter, { msdyn_overflowactionconfig_Annotations: Annotation_Result[] }>;
  msdyn_overflowactionconfig_AsyncOperations: WebExpand<msdyn_overflowactionconfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_overflowactionconfig_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_overflowactionconfig_BulkDeleteFailures: WebExpand<msdyn_overflowactionconfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_overflowactionconfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_overflowactionconfig_DuplicateBaseRecord: WebExpand<msdyn_overflowactionconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_overflowactionconfig_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_overflowactionconfig_DuplicateMatchingRecord: WebExpand<msdyn_overflowactionconfig_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_overflowactionconfig_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_overflowactionconfig_MailboxTrackingFolders: WebExpand<msdyn_overflowactionconfig_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_overflowactionconfig_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_overflowactionconfig_PrincipalObjectAttributeAccesses: WebExpand<msdyn_overflowactionconfig_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_overflowactionconfig_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_overflowactionconfig_ProcessSession: WebExpand<msdyn_overflowactionconfig_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_overflowactionconfig_ProcessSession: ProcessSession_Result[] }>;
  msdyn_overflowactionconfig_QueueItems: WebExpand<msdyn_overflowactionconfig_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_overflowactionconfig_QueueItems: QueueItem_Result[] }>;
  msdyn_overflowactionconfig_SyncErrors: WebExpand<msdyn_overflowactionconfig_Expand, SyncError_Select, SyncError_Filter, { msdyn_overflowactionconfig_SyncErrors: SyncError_Result[] }>;
  msdyn_overflowactionconfig_UserEntityInstanceDatas: WebExpand<msdyn_overflowactionconfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_overflowactionconfig_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_overflowactionconfig_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_overflowactionconfig_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_overflowactionconfig_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_overflowactionconfig_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_overflowactionconfig_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_overflowactiontype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_overflowactionconfig_Result extends msdyn_overflowactionconfig_Base, msdyn_overflowactionconfig_Relationships {
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
interface msdyn_overflowactionconfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_overflowactionconfig_RelatedMany {
  msdyn_overflowactionconfig_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_overflowactionconfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_overflowactionconfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_overflowactionconfig_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_overflowactionconfig_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_overflowactionconfig_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_overflowactionconfig_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_overflowactionconfig_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_overflowactionconfig_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_overflowactionconfig_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_overflowactionconfig_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_overflowactionconfigs: WebMappingRetrieve<msdyn_overflowactionconfig_Select,msdyn_overflowactionconfig_Expand,msdyn_overflowactionconfig_Filter,msdyn_overflowactionconfig_Fixed,msdyn_overflowactionconfig_Result,msdyn_overflowactionconfig_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_overflowactionconfigs: WebMappingRelated<msdyn_overflowactionconfig_RelatedOne,msdyn_overflowactionconfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_overflowactionconfigs: WebMappingCUDA<msdyn_overflowactionconfig_Create,msdyn_overflowactionconfig_Update,msdyn_overflowactionconfig_Select>;
}
