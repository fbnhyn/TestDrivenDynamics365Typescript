interface msdyn_workordersubstatus_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_defaultsubstatus?: boolean | null;
  msdyn_name?: string | null;
  msdyn_systemstatus?: msdyn_wosystemstatus | null;
  msdyn_workordersubstatusid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_workordersubstatus_statecode | null;
  statuscode?: msdyn_workordersubstatus_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_workordersubstatus_Relationships {
  msdyn_msdyn_workordersubstatus_msdyn_workorder_Status?: msdyn_workorder_Result[] | null;
  msdyn_workordersubstatus_Annotations?: Annotation_Result[] | null;
  msdyn_workordersubstatus_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_workordersubstatus_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_workordersubstatus_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_workordersubstatus_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_workordersubstatus_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_workordersubstatus_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_workordersubstatus_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_workordersubstatus_SyncErrors?: SyncError_Result[] | null;
  msdyn_workordersubstatus_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_workordersubstatus extends msdyn_workordersubstatus_Base, msdyn_workordersubstatus_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_workordersubstatus_Create extends msdyn_workordersubstatus {
}
interface msdyn_workordersubstatus_Update extends msdyn_workordersubstatus {
}
interface msdyn_workordersubstatus_Select {
  createdby_guid: WebAttribute<msdyn_workordersubstatus_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_workordersubstatus_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_workordersubstatus_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_workordersubstatus_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_workordersubstatus_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_workordersubstatus_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_workordersubstatus_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_defaultsubstatus: WebAttribute<msdyn_workordersubstatus_Select, { msdyn_defaultsubstatus: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_workordersubstatus_Select, { msdyn_name: string | null }, {  }>;
  msdyn_systemstatus: WebAttribute<msdyn_workordersubstatus_Select, { msdyn_systemstatus: msdyn_wosystemstatus | null }, { msdyn_systemstatus_formatted?: string }>;
  msdyn_workordersubstatusid: WebAttribute<msdyn_workordersubstatus_Select, { msdyn_workordersubstatusid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_workordersubstatus_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_workordersubstatus_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_workordersubstatus_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_workordersubstatus_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_workordersubstatus_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_workordersubstatus_Select, { statecode: msdyn_workordersubstatus_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_workordersubstatus_Select, { statuscode: msdyn_workordersubstatus_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_workordersubstatus_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_workordersubstatus_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_workordersubstatus_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_workordersubstatus_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_defaultsubstatus: boolean;
  msdyn_name: string;
  msdyn_systemstatus: msdyn_wosystemstatus;
  msdyn_workordersubstatusid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_workordersubstatus_statecode;
  statuscode: msdyn_workordersubstatus_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_workordersubstatus_Expand {
  createdby: WebExpand<msdyn_workordersubstatus_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_workordersubstatus_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_workordersubstatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_workordersubstatus_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_workordersubstatus_msdyn_workorder_Status: WebExpand<msdyn_workordersubstatus_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_msdyn_workordersubstatus_msdyn_workorder_Status: msdyn_workorder_Result[] }>;
  msdyn_workordersubstatus_Annotations: WebExpand<msdyn_workordersubstatus_Expand, Annotation_Select, Annotation_Filter, { msdyn_workordersubstatus_Annotations: Annotation_Result[] }>;
  msdyn_workordersubstatus_AsyncOperations: WebExpand<msdyn_workordersubstatus_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_workordersubstatus_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_workordersubstatus_BulkDeleteFailures: WebExpand<msdyn_workordersubstatus_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_workordersubstatus_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_workordersubstatus_DuplicateBaseRecord: WebExpand<msdyn_workordersubstatus_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workordersubstatus_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_workordersubstatus_DuplicateMatchingRecord: WebExpand<msdyn_workordersubstatus_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workordersubstatus_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_workordersubstatus_MailboxTrackingFolders: WebExpand<msdyn_workordersubstatus_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_workordersubstatus_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_workordersubstatus_PrincipalObjectAttributeAccesses: WebExpand<msdyn_workordersubstatus_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_workordersubstatus_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_workordersubstatus_ProcessSession: WebExpand<msdyn_workordersubstatus_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_workordersubstatus_ProcessSession: ProcessSession_Result[] }>;
  msdyn_workordersubstatus_SyncErrors: WebExpand<msdyn_workordersubstatus_Expand, SyncError_Select, SyncError_Filter, { msdyn_workordersubstatus_SyncErrors: SyncError_Result[] }>;
  msdyn_workordersubstatus_UserEntityInstanceDatas: WebExpand<msdyn_workordersubstatus_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_workordersubstatus_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_workordersubstatus_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_workordersubstatus_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_workordersubstatus_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_workordersubstatus_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_workordersubstatus_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_systemstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_workordersubstatus_Result extends msdyn_workordersubstatus_Base, msdyn_workordersubstatus_Relationships {
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
interface msdyn_workordersubstatus_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_workordersubstatus_RelatedMany {
  msdyn_msdyn_workordersubstatus_msdyn_workorder_Status: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_workordersubstatus_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_workordersubstatus_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_workordersubstatus_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_workordersubstatus_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workordersubstatus_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workordersubstatus_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_workordersubstatus_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_workordersubstatus_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_workordersubstatus_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_workordersubstatus_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_workordersubstatuses: WebMappingRetrieve<msdyn_workordersubstatus_Select,msdyn_workordersubstatus_Expand,msdyn_workordersubstatus_Filter,msdyn_workordersubstatus_Fixed,msdyn_workordersubstatus_Result,msdyn_workordersubstatus_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_workordersubstatuses: WebMappingRelated<msdyn_workordersubstatus_RelatedOne,msdyn_workordersubstatus_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_workordersubstatuses: WebMappingCUDA<msdyn_workordersubstatus_Create,msdyn_workordersubstatus_Update,msdyn_workordersubstatus_Select>;
}
