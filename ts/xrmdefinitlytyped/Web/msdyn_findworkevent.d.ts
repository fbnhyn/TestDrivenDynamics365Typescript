interface msdyn_findworkevent_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_findworkeventid?: string | null;
  msdyn_name?: string | null;
  msdyn_timestamp?: Date | null;
  msdyn_type?: msdyn_findworkeventtype | null;
  msdyn_value?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_findworkevent_statecode | null;
  statuscode?: msdyn_findworkevent_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_findworkevent_Relationships {
  msdyn_BookableResource?: BookableResource_Result | null;
  msdyn_Work?: msdyn_projectteam_Result | null;
  msdyn_findworkevent_Annotations?: Annotation_Result[] | null;
  msdyn_findworkevent_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_findworkevent_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_findworkevent_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_findworkevent_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_findworkevent_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_findworkevent_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_findworkevent_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_findworkevent_SyncErrors?: SyncError_Result[] | null;
  msdyn_findworkevent_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_findworkevent extends msdyn_findworkevent_Base, msdyn_findworkevent_Relationships {
  msdyn_BookableResource_bind$bookableresources?: string | null;
  msdyn_Work_bind$msdyn_projectteams?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_findworkevent_Create extends msdyn_findworkevent {
}
interface msdyn_findworkevent_Update extends msdyn_findworkevent {
}
interface msdyn_findworkevent_Select {
  createdby_guid: WebAttribute<msdyn_findworkevent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_findworkevent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_findworkevent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_findworkevent_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_findworkevent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_findworkevent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_findworkevent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_findworkevent_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_findworkeventid: WebAttribute<msdyn_findworkevent_Select, { msdyn_findworkeventid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_findworkevent_Select, { msdyn_name: string | null }, {  }>;
  msdyn_timestamp: WebAttribute<msdyn_findworkevent_Select, { msdyn_timestamp: Date | null }, { msdyn_timestamp_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_findworkevent_Select, { msdyn_type: msdyn_findworkeventtype | null }, { msdyn_type_formatted?: string }>;
  msdyn_value: WebAttribute<msdyn_findworkevent_Select, { msdyn_value: string | null }, {  }>;
  msdyn_work_guid: WebAttribute<msdyn_findworkevent_Select, { msdyn_work_guid: string | null }, { msdyn_work_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_findworkevent_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_findworkevent_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_findworkevent_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_findworkevent_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_findworkevent_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_findworkevent_Select, { statecode: msdyn_findworkevent_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_findworkevent_Select, { statuscode: msdyn_findworkevent_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_findworkevent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_findworkevent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_findworkevent_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_findworkevent_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_findworkeventid: XQW.Guid;
  msdyn_name: string;
  msdyn_timestamp: Date;
  msdyn_type: msdyn_findworkeventtype;
  msdyn_value: string;
  msdyn_work_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_findworkevent_statecode;
  statuscode: msdyn_findworkevent_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_findworkevent_Expand {
  createdby: WebExpand<msdyn_findworkevent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_findworkevent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_findworkevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_findworkevent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_BookableResource: WebExpand<msdyn_findworkevent_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_BookableResource: BookableResource_Result }>;
  msdyn_Work: WebExpand<msdyn_findworkevent_Expand, msdyn_projectteam_Select, msdyn_projectteam_Filter, { msdyn_Work: msdyn_projectteam_Result }>;
  msdyn_findworkevent_Annotations: WebExpand<msdyn_findworkevent_Expand, Annotation_Select, Annotation_Filter, { msdyn_findworkevent_Annotations: Annotation_Result[] }>;
  msdyn_findworkevent_AsyncOperations: WebExpand<msdyn_findworkevent_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_findworkevent_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_findworkevent_BulkDeleteFailures: WebExpand<msdyn_findworkevent_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_findworkevent_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_findworkevent_DuplicateBaseRecord: WebExpand<msdyn_findworkevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_findworkevent_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_findworkevent_DuplicateMatchingRecord: WebExpand<msdyn_findworkevent_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_findworkevent_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_findworkevent_MailboxTrackingFolders: WebExpand<msdyn_findworkevent_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_findworkevent_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_findworkevent_PrincipalObjectAttributeAccesses: WebExpand<msdyn_findworkevent_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_findworkevent_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_findworkevent_ProcessSession: WebExpand<msdyn_findworkevent_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_findworkevent_ProcessSession: ProcessSession_Result[] }>;
  msdyn_findworkevent_SyncErrors: WebExpand<msdyn_findworkevent_Expand, SyncError_Select, SyncError_Filter, { msdyn_findworkevent_SyncErrors: SyncError_Result[] }>;
  msdyn_findworkevent_UserEntityInstanceDatas: WebExpand<msdyn_findworkevent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_findworkevent_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_findworkevent_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_findworkevent_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_findworkevent_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_findworkevent_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_findworkevent_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_timestamp_formatted?: string;
  msdyn_type_formatted?: string;
  msdyn_work_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_findworkevent_Result extends msdyn_findworkevent_Base, msdyn_findworkevent_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_work_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_findworkevent_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_BookableResource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_Work: WebMappingRetrieve<msdyn_projectteam_Select,msdyn_projectteam_Expand,msdyn_projectteam_Filter,msdyn_projectteam_Fixed,msdyn_projectteam_Result,msdyn_projectteam_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_findworkevent_RelatedMany {
  msdyn_findworkevent_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_findworkevent_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_findworkevent_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_findworkevent_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_findworkevent_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_findworkevent_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_findworkevent_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_findworkevent_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_findworkevent_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_findworkevent_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_findworkevents: WebMappingRetrieve<msdyn_findworkevent_Select,msdyn_findworkevent_Expand,msdyn_findworkevent_Filter,msdyn_findworkevent_Fixed,msdyn_findworkevent_Result,msdyn_findworkevent_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_findworkevents: WebMappingRelated<msdyn_findworkevent_RelatedOne,msdyn_findworkevent_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_findworkevents: WebMappingCUDA<msdyn_findworkevent_Create,msdyn_findworkevent_Update,msdyn_findworkevent_Select>;
}
