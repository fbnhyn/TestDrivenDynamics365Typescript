interface msdyn_workhourtemplate_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_calendarid?: string | null;
  msdyn_description?: string | null;
  msdyn_name?: string | null;
  msdyn_workhourtemplateid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_workhourtemplate_statecode | null;
  statuscode?: msdyn_workhourtemplate_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_workhourtemplate_Relationships {
  msdyn_msdyn_workhourtemplate_account_workhourtemplate?: Account_Result[] | null;
  msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate?: msdyn_project_Result[] | null;
  msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate?: msdyn_projectparameter_Result[] | null;
  msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate?: msdyn_projectteam_Result[] | null;
  msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate?: msdyn_workorder_Result[] | null;
  msdyn_workhourtemplate_Annotations?: Annotation_Result[] | null;
  msdyn_workhourtemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_workhourtemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_workhourtemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_workhourtemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_workhourtemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_workhourtemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_workhourtemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_workhourtemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_workhourtemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate?: msdyn_resourcerequirement_Result[] | null;
}
interface msdyn_workhourtemplate extends msdyn_workhourtemplate_Base, msdyn_workhourtemplate_Relationships {
  msdyn_bookableresourceid_bind$bookableresources?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_workhourtemplate_Create extends msdyn_workhourtemplate {
}
interface msdyn_workhourtemplate_Update extends msdyn_workhourtemplate {
}
interface msdyn_workhourtemplate_Select {
  createdby_guid: WebAttribute<msdyn_workhourtemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_workhourtemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_workhourtemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_workhourtemplate_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_workhourtemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_workhourtemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_workhourtemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresourceid_guid: WebAttribute<msdyn_workhourtemplate_Select, { msdyn_bookableresourceid_guid: string | null }, { msdyn_bookableresourceid_formatted?: string }>;
  msdyn_calendarid: WebAttribute<msdyn_workhourtemplate_Select, { msdyn_calendarid: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_workhourtemplate_Select, { msdyn_description: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_workhourtemplate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_workhourtemplateid: WebAttribute<msdyn_workhourtemplate_Select, { msdyn_workhourtemplateid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_workhourtemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_workhourtemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_workhourtemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_workhourtemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_workhourtemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_workhourtemplate_Select, { statecode: msdyn_workhourtemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_workhourtemplate_Select, { statuscode: msdyn_workhourtemplate_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_workhourtemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_workhourtemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_workhourtemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_workhourtemplate_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresourceid_guid: XQW.Guid;
  msdyn_calendarid: string;
  msdyn_description: string;
  msdyn_name: string;
  msdyn_workhourtemplateid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_workhourtemplate_statecode;
  statuscode: msdyn_workhourtemplate_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_workhourtemplate_Expand {
  createdby: WebExpand<msdyn_workhourtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_workhourtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_workhourtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_workhourtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_bookableresourceid: WebExpand<msdyn_workhourtemplate_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresourceid: BookableResource_Result }>;
  msdyn_msdyn_workhourtemplate_account_workhourtemplate: WebExpand<msdyn_workhourtemplate_Expand, Account_Select, Account_Filter, { msdyn_msdyn_workhourtemplate_account_workhourtemplate: Account_Result[] }>;
  msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate: WebExpand<msdyn_workhourtemplate_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate: msdyn_project_Result[] }>;
  msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate: WebExpand<msdyn_workhourtemplate_Expand, msdyn_projectparameter_Select, msdyn_projectparameter_Filter, { msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate: msdyn_projectparameter_Result[] }>;
  msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate: WebExpand<msdyn_workhourtemplate_Expand, msdyn_projectteam_Select, msdyn_projectteam_Filter, { msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate: msdyn_projectteam_Result[] }>;
  msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate: WebExpand<msdyn_workhourtemplate_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate: msdyn_workorder_Result[] }>;
  msdyn_workhourtemplate_Annotations: WebExpand<msdyn_workhourtemplate_Expand, Annotation_Select, Annotation_Filter, { msdyn_workhourtemplate_Annotations: Annotation_Result[] }>;
  msdyn_workhourtemplate_AsyncOperations: WebExpand<msdyn_workhourtemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_workhourtemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_workhourtemplate_BulkDeleteFailures: WebExpand<msdyn_workhourtemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_workhourtemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_workhourtemplate_DuplicateBaseRecord: WebExpand<msdyn_workhourtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workhourtemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_workhourtemplate_DuplicateMatchingRecord: WebExpand<msdyn_workhourtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workhourtemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_workhourtemplate_MailboxTrackingFolders: WebExpand<msdyn_workhourtemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_workhourtemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_workhourtemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_workhourtemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_workhourtemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_workhourtemplate_ProcessSession: WebExpand<msdyn_workhourtemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_workhourtemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_workhourtemplate_SyncErrors: WebExpand<msdyn_workhourtemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_workhourtemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_workhourtemplate_UserEntityInstanceDatas: WebExpand<msdyn_workhourtemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_workhourtemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate: WebExpand<msdyn_workhourtemplate_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate: msdyn_resourcerequirement_Result[] }>;
  ownerid: WebExpand<msdyn_workhourtemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_workhourtemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_workhourtemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_workhourtemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_workhourtemplate_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresourceid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_workhourtemplate_Result extends msdyn_workhourtemplate_Base, msdyn_workhourtemplate_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresourceid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_workhourtemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_bookableresourceid: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_workhourtemplate_RelatedMany {
  msdyn_msdyn_workhourtemplate_account_workhourtemplate: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_msdyn_workhourtemplate_msdyn_project_workhourtemplate: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_msdyn_workhourtemplate_msdyn_projectparameter_defaultWorkTemplate: WebMappingRetrieve<msdyn_projectparameter_Select,msdyn_projectparameter_Expand,msdyn_projectparameter_Filter,msdyn_projectparameter_Fixed,msdyn_projectparameter_Result,msdyn_projectparameter_FormattedResult>;
  msdyn_msdyn_workhourtemplate_msdyn_projectteam_worktemplate: WebMappingRetrieve<msdyn_projectteam_Select,msdyn_projectteam_Expand,msdyn_projectteam_Filter,msdyn_projectteam_Fixed,msdyn_projectteam_Result,msdyn_projectteam_FormattedResult>;
  msdyn_msdyn_workhourtemplate_msdyn_workorder_workhourtemplate: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_workhourtemplate_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_workhourtemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_workhourtemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_workhourtemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workhourtemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workhourtemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_workhourtemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_workhourtemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_workhourtemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_workhourtemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_workhourtemplate_msdyn_resourcerequirement_workhourtemplate: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_workhourtemplates: WebMappingRetrieve<msdyn_workhourtemplate_Select,msdyn_workhourtemplate_Expand,msdyn_workhourtemplate_Filter,msdyn_workhourtemplate_Fixed,msdyn_workhourtemplate_Result,msdyn_workhourtemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_workhourtemplates: WebMappingRelated<msdyn_workhourtemplate_RelatedOne,msdyn_workhourtemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_workhourtemplates: WebMappingCUDA<msdyn_workhourtemplate_Create,msdyn_workhourtemplate_Update,msdyn_workhourtemplate_Select>;
}
