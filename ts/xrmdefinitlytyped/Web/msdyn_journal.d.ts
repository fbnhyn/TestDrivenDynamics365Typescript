interface msdyn_journal_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_date?: Date | null;
  msdyn_description?: string | null;
  msdyn_isposted?: boolean | null;
  msdyn_journalid?: string | null;
  msdyn_journaltype?: msdyn_journal_msdyn_journaltype | null;
  msdyn_transactiondate?: Date | null;
  overriddencreatedon?: Date | null;
  processid?: string | null;
  stageid?: string | null;
  statecode?: msdyn_journal_statecode | null;
  statuscode?: msdyn_journal_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_journal_Relationships {
  msdyn_BookableResource?: BookableResource_Result | null;
  msdyn_DefaultProject?: msdyn_project_Result | null;
  msdyn_ExpenseCategory?: msdyn_expensecategory_Result | null;
  msdyn_Project?: msdyn_project_Result | null;
  msdyn_ProjectTask?: msdyn_projecttask_Result | null;
  msdyn_ResourceCategory?: BookableResourceCategory_Result | null;
  msdyn_journal_Annotations?: Annotation_Result[] | null;
  msdyn_journal_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_journal_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_journal_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_journal_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_journal_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_journal_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_journal_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_journal_SyncErrors?: SyncError_Result[] | null;
  msdyn_journal_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_journal_msdyn_expense?: msdyn_expense_Result[] | null;
  msdyn_msdyn_journal_msdyn_journalline_Journal?: msdyn_journalline_Result[] | null;
  msdyn_msdyn_journal_msdyn_timeentry?: msdyn_timeentry_Result[] | null;
}
interface msdyn_journal extends msdyn_journal_Base, msdyn_journal_Relationships {
  msdyn_BookableResource_bind$bookableresources?: string | null;
  msdyn_DefaultProject_bind$msdyn_projects?: string | null;
  msdyn_ExpenseCategory_bind$msdyn_expensecategories?: string | null;
  msdyn_ProjectTask_bind$msdyn_projecttasks?: string | null;
  msdyn_Project_bind$msdyn_projects?: string | null;
  msdyn_ResourceCategory_bind$bookableresourcecategories?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  stageid_bind$processstages?: string | null;
}
interface msdyn_journal_Create extends msdyn_journal {
}
interface msdyn_journal_Update extends msdyn_journal {
}
interface msdyn_journal_Select {
  createdby_guid: WebAttribute<msdyn_journal_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_journal_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_journal_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_journal_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_journal_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_journal_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_journal_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_journal_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_date: WebAttribute<msdyn_journal_Select, { msdyn_date: Date | null }, { msdyn_date_formatted?: string }>;
  msdyn_defaultproject_guid: WebAttribute<msdyn_journal_Select, { msdyn_defaultproject_guid: string | null }, { msdyn_defaultproject_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_journal_Select, { msdyn_description: string | null }, {  }>;
  msdyn_expensecategory_guid: WebAttribute<msdyn_journal_Select, { msdyn_expensecategory_guid: string | null }, { msdyn_expensecategory_formatted?: string }>;
  msdyn_isposted: WebAttribute<msdyn_journal_Select, { msdyn_isposted: boolean | null }, {  }>;
  msdyn_journalid: WebAttribute<msdyn_journal_Select, { msdyn_journalid: string | null }, {  }>;
  msdyn_journaltype: WebAttribute<msdyn_journal_Select, { msdyn_journaltype: msdyn_journal_msdyn_journaltype | null }, { msdyn_journaltype_formatted?: string }>;
  msdyn_project_guid: WebAttribute<msdyn_journal_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_projecttask_guid: WebAttribute<msdyn_journal_Select, { msdyn_projecttask_guid: string | null }, { msdyn_projecttask_formatted?: string }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_journal_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_transactiondate: WebAttribute<msdyn_journal_Select, { msdyn_transactiondate: Date | null }, { msdyn_transactiondate_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_journal_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_journal_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_journal_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_journal_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_journal_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processid: WebAttribute<msdyn_journal_Select, { processid: string | null }, {  }>;
  stageid: WebAttribute<msdyn_journal_Select, { stageid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_journal_Select, { statecode: msdyn_journal_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_journal_Select, { statuscode: msdyn_journal_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_journal_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyn_journal_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_journal_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_journal_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_journal_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_date: Date;
  msdyn_defaultproject_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_expensecategory_guid: XQW.Guid;
  msdyn_isposted: boolean;
  msdyn_journalid: XQW.Guid;
  msdyn_journaltype: msdyn_journal_msdyn_journaltype;
  msdyn_project_guid: XQW.Guid;
  msdyn_projecttask_guid: XQW.Guid;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_transactiondate: Date;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processid: XQW.Guid;
  stageid: XQW.Guid;
  statecode: msdyn_journal_statecode;
  statuscode: msdyn_journal_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_journal_Expand {
  createdby: WebExpand<msdyn_journal_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_journal_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_journal_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_journal_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_BookableResource: WebExpand<msdyn_journal_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_BookableResource: BookableResource_Result }>;
  msdyn_DefaultProject: WebExpand<msdyn_journal_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_DefaultProject: msdyn_project_Result }>;
  msdyn_ExpenseCategory: WebExpand<msdyn_journal_Expand, msdyn_expensecategory_Select, msdyn_expensecategory_Filter, { msdyn_ExpenseCategory: msdyn_expensecategory_Result }>;
  msdyn_Project: WebExpand<msdyn_journal_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_Project: msdyn_project_Result }>;
  msdyn_ProjectTask: WebExpand<msdyn_journal_Expand, msdyn_projecttask_Select, msdyn_projecttask_Filter, { msdyn_ProjectTask: msdyn_projecttask_Result }>;
  msdyn_ResourceCategory: WebExpand<msdyn_journal_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_ResourceCategory: BookableResourceCategory_Result }>;
  msdyn_journal_Annotations: WebExpand<msdyn_journal_Expand, Annotation_Select, Annotation_Filter, { msdyn_journal_Annotations: Annotation_Result[] }>;
  msdyn_journal_AsyncOperations: WebExpand<msdyn_journal_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_journal_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_journal_BulkDeleteFailures: WebExpand<msdyn_journal_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_journal_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_journal_DuplicateBaseRecord: WebExpand<msdyn_journal_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_journal_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_journal_DuplicateMatchingRecord: WebExpand<msdyn_journal_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_journal_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_journal_MailboxTrackingFolders: WebExpand<msdyn_journal_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_journal_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_journal_PrincipalObjectAttributeAccesses: WebExpand<msdyn_journal_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_journal_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_journal_ProcessSession: WebExpand<msdyn_journal_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_journal_ProcessSession: ProcessSession_Result[] }>;
  msdyn_journal_SyncErrors: WebExpand<msdyn_journal_Expand, SyncError_Select, SyncError_Filter, { msdyn_journal_SyncErrors: SyncError_Result[] }>;
  msdyn_journal_UserEntityInstanceDatas: WebExpand<msdyn_journal_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_journal_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_journal_msdyn_expense: WebExpand<msdyn_journal_Expand, msdyn_expense_Select, msdyn_expense_Filter, { msdyn_msdyn_journal_msdyn_expense: msdyn_expense_Result[] }>;
  msdyn_msdyn_journal_msdyn_journalline_Journal: WebExpand<msdyn_journal_Expand, msdyn_journalline_Select, msdyn_journalline_Filter, { msdyn_msdyn_journal_msdyn_journalline_Journal: msdyn_journalline_Result[] }>;
  msdyn_msdyn_journal_msdyn_timeentry: WebExpand<msdyn_journal_Expand, msdyn_timeentry_Select, msdyn_timeentry_Filter, { msdyn_msdyn_journal_msdyn_timeentry: msdyn_timeentry_Result[] }>;
  ownerid: WebExpand<msdyn_journal_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_journal_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_journal_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_journal_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  stageid: WebExpand<msdyn_journal_Expand, ProcessStage_Select, ProcessStage_Filter, { stageid: ProcessStage_Result }>;
}
interface msdyn_journal_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_date_formatted?: string;
  msdyn_defaultproject_formatted?: string;
  msdyn_expensecategory_formatted?: string;
  msdyn_journaltype_formatted?: string;
  msdyn_project_formatted?: string;
  msdyn_projecttask_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  msdyn_transactiondate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_journal_Result extends msdyn_journal_Base, msdyn_journal_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_defaultproject_guid: string | null;
  msdyn_expensecategory_guid: string | null;
  msdyn_project_guid: string | null;
  msdyn_projecttask_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_journal_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_BookableResource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_DefaultProject: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_ExpenseCategory: WebMappingRetrieve<msdyn_expensecategory_Select,msdyn_expensecategory_Expand,msdyn_expensecategory_Filter,msdyn_expensecategory_Fixed,msdyn_expensecategory_Result,msdyn_expensecategory_FormattedResult>;
  msdyn_Project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_ProjectTask: WebMappingRetrieve<msdyn_projecttask_Select,msdyn_projecttask_Expand,msdyn_projecttask_Filter,msdyn_projecttask_Fixed,msdyn_projecttask_Result,msdyn_projecttask_FormattedResult>;
  msdyn_ResourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  stageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
}
interface msdyn_journal_RelatedMany {
  msdyn_journal_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_journal_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_journal_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_journal_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_journal_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_journal_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_journal_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_journal_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_journal_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_journal_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_journal_msdyn_expense: WebMappingRetrieve<msdyn_expense_Select,msdyn_expense_Expand,msdyn_expense_Filter,msdyn_expense_Fixed,msdyn_expense_Result,msdyn_expense_FormattedResult>;
  msdyn_msdyn_journal_msdyn_journalline_Journal: WebMappingRetrieve<msdyn_journalline_Select,msdyn_journalline_Expand,msdyn_journalline_Filter,msdyn_journalline_Fixed,msdyn_journalline_Result,msdyn_journalline_FormattedResult>;
  msdyn_msdyn_journal_msdyn_timeentry: WebMappingRetrieve<msdyn_timeentry_Select,msdyn_timeentry_Expand,msdyn_timeentry_Filter,msdyn_timeentry_Fixed,msdyn_timeentry_Result,msdyn_timeentry_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_journals: WebMappingRetrieve<msdyn_journal_Select,msdyn_journal_Expand,msdyn_journal_Filter,msdyn_journal_Fixed,msdyn_journal_Result,msdyn_journal_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_journals: WebMappingRelated<msdyn_journal_RelatedOne,msdyn_journal_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_journals: WebMappingCUDA<msdyn_journal_Create,msdyn_journal_Update,msdyn_journal_Select>;
}
