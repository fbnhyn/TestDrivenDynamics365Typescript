interface msdyn_requirementresourcepreference_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_cascade?: boolean | null;
  msdyn_expirationdate?: Date | null;
  msdyn_name?: string | null;
  msdyn_preferencetype?: msdyn_requirementresourcepreference_msdyn_preferencetype | null;
  msdyn_requirementresourcepreferenceid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_requirementresourcepreference_statecode | null;
  statuscode?: msdyn_requirementresourcepreference_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_requirementresourcepreference_Relationships {
  msdyn_Account?: Account_Result | null;
  msdyn_BookableResource?: BookableResource_Result | null;
  msdyn_ResourceRequirement?: msdyn_resourcerequirement_Result | null;
  msdyn_WorkOrder?: msdyn_workorder_Result | null;
  msdyn_requirementresourcepreference_Annotations?: Annotation_Result[] | null;
  msdyn_requirementresourcepreference_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_requirementresourcepreference_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_requirementresourcepreference_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementresourcepreference_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementresourcepreference_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_requirementresourcepreference_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_requirementresourcepreference_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_requirementresourcepreference_SyncErrors?: SyncError_Result[] | null;
  msdyn_requirementresourcepreference_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_requirementresourcepreference extends msdyn_requirementresourcepreference_Base, msdyn_requirementresourcepreference_Relationships {
  msdyn_Account_bind$accounts?: string | null;
  msdyn_BookableResource_bind$bookableresources?: string | null;
  msdyn_ResourceRequirement_bind$msdyn_resourcerequirements?: string | null;
  msdyn_WorkOrder_bind$msdyn_workorders?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_requirementresourcepreference_Create extends msdyn_requirementresourcepreference {
}
interface msdyn_requirementresourcepreference_Update extends msdyn_requirementresourcepreference {
}
interface msdyn_requirementresourcepreference_Select {
  createdby_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_requirementresourcepreference_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_requirementresourcepreference_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_requirementresourcepreference_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_account_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { msdyn_account_guid: string | null }, { msdyn_account_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_cascade: WebAttribute<msdyn_requirementresourcepreference_Select, { msdyn_cascade: boolean | null }, {  }>;
  msdyn_expirationdate: WebAttribute<msdyn_requirementresourcepreference_Select, { msdyn_expirationdate: Date | null }, { msdyn_expirationdate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_requirementresourcepreference_Select, { msdyn_name: string | null }, {  }>;
  msdyn_preferencetype: WebAttribute<msdyn_requirementresourcepreference_Select, { msdyn_preferencetype: msdyn_requirementresourcepreference_msdyn_preferencetype | null }, { msdyn_preferencetype_formatted?: string }>;
  msdyn_requirementresourcepreferenceid: WebAttribute<msdyn_requirementresourcepreference_Select, { msdyn_requirementresourcepreferenceid: string | null }, {  }>;
  msdyn_resourcerequirement_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { msdyn_resourcerequirement_guid: string | null }, { msdyn_resourcerequirement_formatted?: string }>;
  msdyn_workorder_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { msdyn_workorder_guid: string | null }, { msdyn_workorder_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_requirementresourcepreference_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_requirementresourcepreference_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_requirementresourcepreference_Select, { statecode: msdyn_requirementresourcepreference_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_requirementresourcepreference_Select, { statuscode: msdyn_requirementresourcepreference_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_requirementresourcepreference_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_requirementresourcepreference_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_requirementresourcepreference_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_requirementresourcepreference_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_account_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_cascade: boolean;
  msdyn_expirationdate: Date;
  msdyn_name: string;
  msdyn_preferencetype: msdyn_requirementresourcepreference_msdyn_preferencetype;
  msdyn_requirementresourcepreferenceid: XQW.Guid;
  msdyn_resourcerequirement_guid: XQW.Guid;
  msdyn_workorder_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_requirementresourcepreference_statecode;
  statuscode: msdyn_requirementresourcepreference_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_requirementresourcepreference_Expand {
  createdby: WebExpand<msdyn_requirementresourcepreference_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_requirementresourcepreference_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_requirementresourcepreference_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_requirementresourcepreference_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Account: WebExpand<msdyn_requirementresourcepreference_Expand, Account_Select, Account_Filter, { msdyn_Account: Account_Result }>;
  msdyn_BookableResource: WebExpand<msdyn_requirementresourcepreference_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_BookableResource: BookableResource_Result }>;
  msdyn_ResourceRequirement: WebExpand<msdyn_requirementresourcepreference_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_ResourceRequirement: msdyn_resourcerequirement_Result }>;
  msdyn_WorkOrder: WebExpand<msdyn_requirementresourcepreference_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_WorkOrder: msdyn_workorder_Result }>;
  msdyn_requirementresourcepreference_Annotations: WebExpand<msdyn_requirementresourcepreference_Expand, Annotation_Select, Annotation_Filter, { msdyn_requirementresourcepreference_Annotations: Annotation_Result[] }>;
  msdyn_requirementresourcepreference_AsyncOperations: WebExpand<msdyn_requirementresourcepreference_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_requirementresourcepreference_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_requirementresourcepreference_BulkDeleteFailures: WebExpand<msdyn_requirementresourcepreference_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_requirementresourcepreference_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_requirementresourcepreference_DuplicateBaseRecord: WebExpand<msdyn_requirementresourcepreference_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementresourcepreference_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementresourcepreference_DuplicateMatchingRecord: WebExpand<msdyn_requirementresourcepreference_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementresourcepreference_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementresourcepreference_MailboxTrackingFolders: WebExpand<msdyn_requirementresourcepreference_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_requirementresourcepreference_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_requirementresourcepreference_PrincipalObjectAttributeAccesses: WebExpand<msdyn_requirementresourcepreference_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_requirementresourcepreference_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_requirementresourcepreference_ProcessSession: WebExpand<msdyn_requirementresourcepreference_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_requirementresourcepreference_ProcessSession: ProcessSession_Result[] }>;
  msdyn_requirementresourcepreference_SyncErrors: WebExpand<msdyn_requirementresourcepreference_Expand, SyncError_Select, SyncError_Filter, { msdyn_requirementresourcepreference_SyncErrors: SyncError_Result[] }>;
  msdyn_requirementresourcepreference_UserEntityInstanceDatas: WebExpand<msdyn_requirementresourcepreference_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_requirementresourcepreference_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_requirementresourcepreference_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_requirementresourcepreference_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_requirementresourcepreference_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_requirementresourcepreference_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_requirementresourcepreference_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_account_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_expirationdate_formatted?: string;
  msdyn_preferencetype_formatted?: string;
  msdyn_resourcerequirement_formatted?: string;
  msdyn_workorder_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_requirementresourcepreference_Result extends msdyn_requirementresourcepreference_Base, msdyn_requirementresourcepreference_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_account_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_resourcerequirement_guid: string | null;
  msdyn_workorder_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_requirementresourcepreference_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_BookableResource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_ResourceRequirement: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  msdyn_WorkOrder: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_requirementresourcepreference_RelatedMany {
  msdyn_requirementresourcepreference_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_requirementresourcepreference_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_requirementresourcepreference_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_requirementresourcepreference_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementresourcepreference_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementresourcepreference_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_requirementresourcepreference_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_requirementresourcepreference_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_requirementresourcepreference_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_requirementresourcepreference_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_requirementresourcepreferences: WebMappingRetrieve<msdyn_requirementresourcepreference_Select,msdyn_requirementresourcepreference_Expand,msdyn_requirementresourcepreference_Filter,msdyn_requirementresourcepreference_Fixed,msdyn_requirementresourcepreference_Result,msdyn_requirementresourcepreference_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_requirementresourcepreferences: WebMappingRelated<msdyn_requirementresourcepreference_RelatedOne,msdyn_requirementresourcepreference_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_requirementresourcepreferences: WebMappingCUDA<msdyn_requirementresourcepreference_Create,msdyn_requirementresourcepreference_Update,msdyn_requirementresourcepreference_Select>;
}
