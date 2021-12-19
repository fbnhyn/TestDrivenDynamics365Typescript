interface msdyn_expensecategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_expensecategoryid?: string | null;
  msdyn_expensetype?: msdyn_expensetypes | null;
  msdyn_name?: string | null;
  msdyn_receiptrequired?: msdyn_expensecategorybehavior | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_expensecategory_statecode | null;
  statuscode?: msdyn_expensecategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_expensecategory_Relationships {
  msdyn_ExpenseCategoryuId?: msdyn_transactioncategory_Result | null;
  msdyn_expensecategory_Annotations?: Annotation_Result[] | null;
  msdyn_expensecategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_expensecategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_expensecategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_expensecategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_expensecategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_expensecategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_expensecategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_expensecategory_SyncErrors?: SyncError_Result[] | null;
  msdyn_expensecategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_expensecategory_msdyn_expense_ExpenseCategory?: msdyn_expense_Result[] | null;
  msdyn_msdyn_expensecategory_msdyn_journal_ExpenseCategory?: msdyn_journal_Result[] | null;
  msdyn_msdyn_expensecategory_msdyn_projectapproval_ExpenseCategory?: msdyn_projectapproval_Result[] | null;
}
interface msdyn_expensecategory extends msdyn_expensecategory_Base, msdyn_expensecategory_Relationships {
  msdyn_ExpenseCategoryuId_bind$msdyn_transactioncategories?: string | null;
}
interface msdyn_expensecategory_Create extends msdyn_expensecategory {
}
interface msdyn_expensecategory_Update extends msdyn_expensecategory {
}
interface msdyn_expensecategory_Select {
  createdby_guid: WebAttribute<msdyn_expensecategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_expensecategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_expensecategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_expensecategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_expensecategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_expensecategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_expensecategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_expensecategoryid: WebAttribute<msdyn_expensecategory_Select, { msdyn_expensecategoryid: string | null }, {  }>;
  msdyn_expensecategoryuid_guid: WebAttribute<msdyn_expensecategory_Select, { msdyn_expensecategoryuid_guid: string | null }, { msdyn_expensecategoryuid_formatted?: string }>;
  msdyn_expensetype: WebAttribute<msdyn_expensecategory_Select, { msdyn_expensetype: msdyn_expensetypes | null }, { msdyn_expensetype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_expensecategory_Select, { msdyn_name: string | null }, {  }>;
  msdyn_receiptrequired: WebAttribute<msdyn_expensecategory_Select, { msdyn_receiptrequired: msdyn_expensecategorybehavior | null }, { msdyn_receiptrequired_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_expensecategory_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_expensecategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_expensecategory_Select, { statecode: msdyn_expensecategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_expensecategory_Select, { statuscode: msdyn_expensecategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_expensecategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_expensecategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_expensecategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_expensecategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_expensecategoryid: XQW.Guid;
  msdyn_expensecategoryuid_guid: XQW.Guid;
  msdyn_expensetype: msdyn_expensetypes;
  msdyn_name: string;
  msdyn_receiptrequired: msdyn_expensecategorybehavior;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_expensecategory_statecode;
  statuscode: msdyn_expensecategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_expensecategory_Expand {
  createdby: WebExpand<msdyn_expensecategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_expensecategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_expensecategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_expensecategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ExpenseCategoryuId: WebExpand<msdyn_expensecategory_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_ExpenseCategoryuId: msdyn_transactioncategory_Result }>;
  msdyn_expensecategory_Annotations: WebExpand<msdyn_expensecategory_Expand, Annotation_Select, Annotation_Filter, { msdyn_expensecategory_Annotations: Annotation_Result[] }>;
  msdyn_expensecategory_AsyncOperations: WebExpand<msdyn_expensecategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_expensecategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_expensecategory_BulkDeleteFailures: WebExpand<msdyn_expensecategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_expensecategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_expensecategory_DuplicateBaseRecord: WebExpand<msdyn_expensecategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_expensecategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_expensecategory_DuplicateMatchingRecord: WebExpand<msdyn_expensecategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_expensecategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_expensecategory_MailboxTrackingFolders: WebExpand<msdyn_expensecategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_expensecategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_expensecategory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_expensecategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_expensecategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_expensecategory_ProcessSession: WebExpand<msdyn_expensecategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_expensecategory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_expensecategory_SyncErrors: WebExpand<msdyn_expensecategory_Expand, SyncError_Select, SyncError_Filter, { msdyn_expensecategory_SyncErrors: SyncError_Result[] }>;
  msdyn_expensecategory_UserEntityInstanceDatas: WebExpand<msdyn_expensecategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_expensecategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_expensecategory_msdyn_expense_ExpenseCategory: WebExpand<msdyn_expensecategory_Expand, msdyn_expense_Select, msdyn_expense_Filter, { msdyn_msdyn_expensecategory_msdyn_expense_ExpenseCategory: msdyn_expense_Result[] }>;
  msdyn_msdyn_expensecategory_msdyn_journal_ExpenseCategory: WebExpand<msdyn_expensecategory_Expand, msdyn_journal_Select, msdyn_journal_Filter, { msdyn_msdyn_expensecategory_msdyn_journal_ExpenseCategory: msdyn_journal_Result[] }>;
  msdyn_msdyn_expensecategory_msdyn_projectapproval_ExpenseCategory: WebExpand<msdyn_expensecategory_Expand, msdyn_projectapproval_Select, msdyn_projectapproval_Filter, { msdyn_msdyn_expensecategory_msdyn_projectapproval_ExpenseCategory: msdyn_projectapproval_Result[] }>;
  organizationid: WebExpand<msdyn_expensecategory_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_expensecategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_expensecategoryuid_formatted?: string;
  msdyn_expensetype_formatted?: string;
  msdyn_receiptrequired_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_expensecategory_Result extends msdyn_expensecategory_Base, msdyn_expensecategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_expensecategoryuid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_expensecategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ExpenseCategoryuId: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_expensecategory_RelatedMany {
  msdyn_expensecategory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_expensecategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_expensecategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_expensecategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_expensecategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_expensecategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_expensecategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_expensecategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_expensecategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_expensecategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_expensecategory_msdyn_expense_ExpenseCategory: WebMappingRetrieve<msdyn_expense_Select,msdyn_expense_Expand,msdyn_expense_Filter,msdyn_expense_Fixed,msdyn_expense_Result,msdyn_expense_FormattedResult>;
  msdyn_msdyn_expensecategory_msdyn_journal_ExpenseCategory: WebMappingRetrieve<msdyn_journal_Select,msdyn_journal_Expand,msdyn_journal_Filter,msdyn_journal_Fixed,msdyn_journal_Result,msdyn_journal_FormattedResult>;
  msdyn_msdyn_expensecategory_msdyn_projectapproval_ExpenseCategory: WebMappingRetrieve<msdyn_projectapproval_Select,msdyn_projectapproval_Expand,msdyn_projectapproval_Filter,msdyn_projectapproval_Fixed,msdyn_projectapproval_Result,msdyn_projectapproval_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_expensecategories: WebMappingRetrieve<msdyn_expensecategory_Select,msdyn_expensecategory_Expand,msdyn_expensecategory_Filter,msdyn_expensecategory_Fixed,msdyn_expensecategory_Result,msdyn_expensecategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_expensecategories: WebMappingRelated<msdyn_expensecategory_RelatedOne,msdyn_expensecategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_expensecategories: WebMappingCUDA<msdyn_expensecategory_Create,msdyn_expensecategory_Update,msdyn_expensecategory_Select>;
}
