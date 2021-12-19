interface msdyn_projecttaskstatususer_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_expectedcompletiondate?: Date | null;
  msdyn_expectedhourstocomplete?: number | null;
  msdyn_iscompleted?: boolean | null;
  msdyn_name?: string | null;
  msdyn_percentcomplete?: number | null;
  msdyn_projecttaskstatusindicator?: msdyn_projecttaskstatusindicators | null;
  msdyn_projecttaskstatususerid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_projecttaskstatususer_statecode | null;
  statuscode?: msdyn_projecttaskstatususer_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_projecttaskstatususer_Relationships {
  msdyn_BookableResource?: BookableResource_Result | null;
  msdyn_projecttaskId?: msdyn_projecttask_Result | null;
  msdyn_projecttaskstatususer_Annotations?: Annotation_Result[] | null;
  msdyn_projecttaskstatususer_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_projecttaskstatususer_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_projecttaskstatususer_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_projecttaskstatususer_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_projecttaskstatususer_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_projecttaskstatususer_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_projecttaskstatususer_SyncErrors?: SyncError_Result[] | null;
  msdyn_projecttaskstatususer_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_projecttaskstatususer extends msdyn_projecttaskstatususer_Base, msdyn_projecttaskstatususer_Relationships {
  msdyn_BookableResource_bind$bookableresources?: string | null;
  msdyn_projecttaskId_bind$msdyn_projecttasks?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_projecttaskstatususer_Create extends msdyn_projecttaskstatususer {
}
interface msdyn_projecttaskstatususer_Update extends msdyn_projecttaskstatususer {
}
interface msdyn_projecttaskstatususer_Select {
  createdby_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_projecttaskstatususer_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_projecttaskstatususer_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_projecttaskstatususer_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_description: string | null }, {  }>;
  msdyn_expectedcompletiondate: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_expectedcompletiondate: Date | null }, { msdyn_expectedcompletiondate_formatted?: string }>;
  msdyn_expectedhourstocomplete: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_expectedhourstocomplete: number | null }, {  }>;
  msdyn_iscompleted: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_iscompleted: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_name: string | null }, {  }>;
  msdyn_percentcomplete: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_percentcomplete: number | null }, {  }>;
  msdyn_projecttaskid_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_projecttaskid_guid: string | null }, { msdyn_projecttaskid_formatted?: string }>;
  msdyn_projecttaskstatusindicator: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_projecttaskstatusindicator: msdyn_projecttaskstatusindicators | null }, { msdyn_projecttaskstatusindicator_formatted?: string }>;
  msdyn_projecttaskstatususerid: WebAttribute<msdyn_projecttaskstatususer_Select, { msdyn_projecttaskstatususerid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_projecttaskstatususer_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_projecttaskstatususer_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_projecttaskstatususer_Select, { statecode: msdyn_projecttaskstatususer_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_projecttaskstatususer_Select, { statuscode: msdyn_projecttaskstatususer_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_projecttaskstatususer_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_projecttaskstatususer_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_projecttaskstatususer_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_projecttaskstatususer_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_expectedcompletiondate: Date;
  msdyn_expectedhourstocomplete: number;
  msdyn_iscompleted: boolean;
  msdyn_name: string;
  msdyn_percentcomplete: number;
  msdyn_projecttaskid_guid: XQW.Guid;
  msdyn_projecttaskstatusindicator: msdyn_projecttaskstatusindicators;
  msdyn_projecttaskstatususerid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_projecttaskstatususer_statecode;
  statuscode: msdyn_projecttaskstatususer_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_projecttaskstatususer_Expand {
  createdby: WebExpand<msdyn_projecttaskstatususer_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_projecttaskstatususer_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_projecttaskstatususer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_projecttaskstatususer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_BookableResource: WebExpand<msdyn_projecttaskstatususer_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_BookableResource: BookableResource_Result }>;
  msdyn_projecttaskId: WebExpand<msdyn_projecttaskstatususer_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_projecttaskId: msdyn_projecttask_Result }>;
  msdyn_projecttaskstatususer_Annotations: WebExpand<msdyn_projecttaskstatususer_Expand, Annotation_Select, Annotation_Filter, { msdyn_projecttaskstatususer_Annotations: Annotation_Result[] }>;
  msdyn_projecttaskstatususer_AsyncOperations: WebExpand<msdyn_projecttaskstatususer_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_projecttaskstatususer_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_projecttaskstatususer_BulkDeleteFailures: WebExpand<msdyn_projecttaskstatususer_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_projecttaskstatususer_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_projecttaskstatususer_DuplicateBaseRecord: WebExpand<msdyn_projecttaskstatususer_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projecttaskstatususer_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_projecttaskstatususer_DuplicateMatchingRecord: WebExpand<msdyn_projecttaskstatususer_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projecttaskstatususer_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_projecttaskstatususer_MailboxTrackingFolders: WebExpand<msdyn_projecttaskstatususer_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_projecttaskstatususer_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses: WebExpand<msdyn_projecttaskstatususer_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_projecttaskstatususer_ProcessSession: WebExpand<msdyn_projecttaskstatususer_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_projecttaskstatususer_ProcessSession: ProcessSession_Result[] }>;
  msdyn_projecttaskstatususer_SyncErrors: WebExpand<msdyn_projecttaskstatususer_Expand, SyncError_Select, SyncError_Filter, { msdyn_projecttaskstatususer_SyncErrors: SyncError_Result[] }>;
  msdyn_projecttaskstatususer_UserEntityInstanceDatas: WebExpand<msdyn_projecttaskstatususer_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_projecttaskstatususer_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_projecttaskstatususer_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_projecttaskstatususer_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_projecttaskstatususer_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_projecttaskstatususer_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_projecttaskstatususer_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_expectedcompletiondate_formatted?: string;
  msdyn_projecttaskid_formatted?: string;
  msdyn_projecttaskstatusindicator_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_projecttaskstatususer_Result extends msdyn_projecttaskstatususer_Base, msdyn_projecttaskstatususer_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_projecttaskid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_projecttaskstatususer_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_BookableResource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_projecttaskId: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_projecttaskstatususer_RelatedMany {
  msdyn_projecttaskstatususer_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_projecttaskstatususer_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_projecttaskstatususer_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_projecttaskstatususer_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projecttaskstatususer_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projecttaskstatususer_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_projecttaskstatususer_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_projecttaskstatususer_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_projecttaskstatususer_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_projecttaskstatususer_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_projecttaskstatususers: WebMappingRetrieve<msdyn_projecttaskstatususer_Select,msdyn_projecttaskstatususer_Expand,msdyn_projecttaskstatususer_Filter,msdyn_projecttaskstatususer_Fixed,msdyn_projecttaskstatususer_Result,msdyn_projecttaskstatususer_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_projecttaskstatususers: WebMappingRelated<msdyn_projecttaskstatususer_RelatedOne,msdyn_projecttaskstatususer_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_projecttaskstatususers: WebMappingCUDA<msdyn_projecttaskstatususer_Create,msdyn_projecttaskstatususer_Update,msdyn_projecttaskstatususer_Select>;
}
