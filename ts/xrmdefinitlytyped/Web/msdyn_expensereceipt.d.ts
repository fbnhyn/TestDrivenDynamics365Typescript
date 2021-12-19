interface msdyn_expensereceipt_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_expensereceiptid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_expensereceipt_statecode | null;
  statuscode?: msdyn_expensereceipt_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_expensereceipt_Relationships {
  msdyn_ExpenseId?: msdyn_expense_Result | null;
  msdyn_expensereceipt_Annotations?: Annotation_Result[] | null;
  msdyn_expensereceipt_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_expensereceipt_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_expensereceipt_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_expensereceipt_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_expensereceipt_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_expensereceipt_SyncErrors?: SyncError_Result[] | null;
  msdyn_expensereceipt_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_expensereceipt extends msdyn_expensereceipt_Base, msdyn_expensereceipt_Relationships {
  msdyn_ExpenseId_bind$msdyn_expenses?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_expensereceipt_Create extends msdyn_expensereceipt {
}
interface msdyn_expensereceipt_Update extends msdyn_expensereceipt {
}
interface msdyn_expensereceipt_Select {
  createdby_guid: WebAttribute<msdyn_expensereceipt_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_expensereceipt_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_expensereceipt_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_expensereceipt_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_expensereceipt_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_expensereceipt_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_expensereceipt_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_expensereceipt_Select, { msdyn_description: string | null }, {  }>;
  msdyn_expenseid_guid: WebAttribute<msdyn_expensereceipt_Select, { msdyn_expenseid_guid: string | null }, { msdyn_expenseid_formatted?: string }>;
  msdyn_expensereceiptid: WebAttribute<msdyn_expensereceipt_Select, { msdyn_expensereceiptid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_expensereceipt_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_expensereceipt_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_expensereceipt_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_expensereceipt_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_expensereceipt_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_expensereceipt_Select, { statecode: msdyn_expensereceipt_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_expensereceipt_Select, { statuscode: msdyn_expensereceipt_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_expensereceipt_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_expensereceipt_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_expensereceipt_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_expensereceipt_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_expenseid_guid: XQW.Guid;
  msdyn_expensereceiptid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_expensereceipt_statecode;
  statuscode: msdyn_expensereceipt_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_expensereceipt_Expand {
  createdby: WebExpand<msdyn_expensereceipt_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_expensereceipt_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_expensereceipt_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_expensereceipt_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ExpenseId: WebExpand<msdyn_expensereceipt_Expand, msdyn_expense_Select, msdyn_expense_Filter, { msdyn_ExpenseId: msdyn_expense_Result }>;
  msdyn_expensereceipt_Annotations: WebExpand<msdyn_expensereceipt_Expand, Annotation_Select, Annotation_Filter, { msdyn_expensereceipt_Annotations: Annotation_Result[] }>;
  msdyn_expensereceipt_AsyncOperations: WebExpand<msdyn_expensereceipt_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_expensereceipt_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_expensereceipt_BulkDeleteFailures: WebExpand<msdyn_expensereceipt_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_expensereceipt_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_expensereceipt_MailboxTrackingFolders: WebExpand<msdyn_expensereceipt_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_expensereceipt_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_expensereceipt_PrincipalObjectAttributeAccesses: WebExpand<msdyn_expensereceipt_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_expensereceipt_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_expensereceipt_ProcessSession: WebExpand<msdyn_expensereceipt_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_expensereceipt_ProcessSession: ProcessSession_Result[] }>;
  msdyn_expensereceipt_SyncErrors: WebExpand<msdyn_expensereceipt_Expand, SyncError_Select, SyncError_Filter, { msdyn_expensereceipt_SyncErrors: SyncError_Result[] }>;
  msdyn_expensereceipt_UserEntityInstanceDatas: WebExpand<msdyn_expensereceipt_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_expensereceipt_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_expensereceipt_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_expensereceipt_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_expensereceipt_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_expensereceipt_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_expensereceipt_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_expenseid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_expensereceipt_Result extends msdyn_expensereceipt_Base, msdyn_expensereceipt_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_expenseid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_expensereceipt_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ExpenseId: WebMappingRetrieve<msdyn_expense_Select,msdyn_expense_Expand,msdyn_expense_Filter,msdyn_expense_Fixed,msdyn_expense_Result,msdyn_expense_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_expensereceipt_RelatedMany {
  msdyn_expensereceipt_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_expensereceipt_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_expensereceipt_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_expensereceipt_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_expensereceipt_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_expensereceipt_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_expensereceipt_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_expensereceipt_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_expensereceipts: WebMappingRetrieve<msdyn_expensereceipt_Select,msdyn_expensereceipt_Expand,msdyn_expensereceipt_Filter,msdyn_expensereceipt_Fixed,msdyn_expensereceipt_Result,msdyn_expensereceipt_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_expensereceipts: WebMappingRelated<msdyn_expensereceipt_RelatedOne,msdyn_expensereceipt_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_expensereceipts: WebMappingCUDA<msdyn_expensereceipt_Create,msdyn_expensereceipt_Update,msdyn_expensereceipt_Select>;
}
