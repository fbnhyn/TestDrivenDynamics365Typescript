interface msdyn_projecttransactioncategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_name?: string | null;
  msdyn_projecttransactioncategoryid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_projecttransactioncategory_statecode | null;
  statuscode?: msdyn_projecttransactioncategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_projecttransactioncategory_Relationships {
  msdyn_Project?: msdyn_project_Result | null;
  msdyn_TransactionCategory?: msdyn_transactioncategory_Result | null;
  msdyn_projecttransactioncategory_Annotations?: Annotation_Result[] | null;
  msdyn_projecttransactioncategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_projecttransactioncategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_projecttransactioncategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_projecttransactioncategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_projecttransactioncategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_projecttransactioncategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_projecttransactioncategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_projecttransactioncategory_SyncErrors?: SyncError_Result[] | null;
  msdyn_projecttransactioncategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_projecttransactioncategory extends msdyn_projecttransactioncategory_Base, msdyn_projecttransactioncategory_Relationships {
  msdyn_Project_bind$msdyn_projects?: string | null;
  msdyn_TransactionCategory_bind$msdyn_transactioncategories?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_projecttransactioncategory_Create extends msdyn_projecttransactioncategory {
}
interface msdyn_projecttransactioncategory_Update extends msdyn_projecttransactioncategory {
}
interface msdyn_projecttransactioncategory_Select {
  createdby_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_projecttransactioncategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_projecttransactioncategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_projecttransactioncategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_projecttransactioncategory_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_projecttransactioncategory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_project_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { msdyn_project_guid: string | null }, { msdyn_project_formatted?: string }>;
  msdyn_projecttransactioncategoryid: WebAttribute<msdyn_projecttransactioncategory_Select, { msdyn_projecttransactioncategoryid: string | null }, {  }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_projecttransactioncategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_projecttransactioncategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_projecttransactioncategory_Select, { statecode: msdyn_projecttransactioncategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_projecttransactioncategory_Select, { statuscode: msdyn_projecttransactioncategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_projecttransactioncategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_projecttransactioncategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_projecttransactioncategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_projecttransactioncategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_name: string;
  msdyn_project_guid: XQW.Guid;
  msdyn_projecttransactioncategoryid: XQW.Guid;
  msdyn_transactioncategory_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_projecttransactioncategory_statecode;
  statuscode: msdyn_projecttransactioncategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_projecttransactioncategory_Expand {
  createdby: WebExpand<msdyn_projecttransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_projecttransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_projecttransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_projecttransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Project: WebExpand<msdyn_projecttransactioncategory_Expand, msdyn_project_Select, msdyn_project_Filter, { msdyn_Project: msdyn_project_Result }>;
  msdyn_TransactionCategory: WebExpand<msdyn_projecttransactioncategory_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_TransactionCategory: msdyn_transactioncategory_Result }>;
  msdyn_projecttransactioncategory_Annotations: WebExpand<msdyn_projecttransactioncategory_Expand, Annotation_Select, Annotation_Filter, { msdyn_projecttransactioncategory_Annotations: Annotation_Result[] }>;
  msdyn_projecttransactioncategory_AsyncOperations: WebExpand<msdyn_projecttransactioncategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_projecttransactioncategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_projecttransactioncategory_BulkDeleteFailures: WebExpand<msdyn_projecttransactioncategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_projecttransactioncategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_projecttransactioncategory_DuplicateBaseRecord: WebExpand<msdyn_projecttransactioncategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projecttransactioncategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_projecttransactioncategory_DuplicateMatchingRecord: WebExpand<msdyn_projecttransactioncategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projecttransactioncategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_projecttransactioncategory_MailboxTrackingFolders: WebExpand<msdyn_projecttransactioncategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_projecttransactioncategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_projecttransactioncategory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_projecttransactioncategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_projecttransactioncategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_projecttransactioncategory_ProcessSession: WebExpand<msdyn_projecttransactioncategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_projecttransactioncategory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_projecttransactioncategory_SyncErrors: WebExpand<msdyn_projecttransactioncategory_Expand, SyncError_Select, SyncError_Filter, { msdyn_projecttransactioncategory_SyncErrors: SyncError_Result[] }>;
  msdyn_projecttransactioncategory_UserEntityInstanceDatas: WebExpand<msdyn_projecttransactioncategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_projecttransactioncategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_projecttransactioncategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_projecttransactioncategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_projecttransactioncategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_projecttransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_projecttransactioncategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_project_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_projecttransactioncategory_Result extends msdyn_projecttransactioncategory_Base, msdyn_projecttransactioncategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_project_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_projecttransactioncategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Project: WebMappingRetrieve<msdyn_project_Select,msdyn_project_Expand,msdyn_project_Filter,msdyn_project_Fixed,msdyn_project_Result,msdyn_project_FormattedResult>;
  msdyn_TransactionCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_projecttransactioncategory_RelatedMany {
  msdyn_projecttransactioncategory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_projecttransactioncategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_projecttransactioncategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_projecttransactioncategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projecttransactioncategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projecttransactioncategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_projecttransactioncategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_projecttransactioncategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_projecttransactioncategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_projecttransactioncategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_projecttransactioncategories: WebMappingRetrieve<msdyn_projecttransactioncategory_Select,msdyn_projecttransactioncategory_Expand,msdyn_projecttransactioncategory_Filter,msdyn_projecttransactioncategory_Fixed,msdyn_projecttransactioncategory_Result,msdyn_projecttransactioncategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_projecttransactioncategories: WebMappingRelated<msdyn_projecttransactioncategory_RelatedOne,msdyn_projecttransactioncategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_projecttransactioncategories: WebMappingCUDA<msdyn_projecttransactioncategory_Create,msdyn_projecttransactioncategory_Update,msdyn_projecttransactioncategory_Select>;
}
