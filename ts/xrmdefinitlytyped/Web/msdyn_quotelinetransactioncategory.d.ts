interface msdyn_quotelinetransactioncategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_description?: string | null;
  msdyn_quoteline?: string | null;
  msdyn_quotelinetransactioncategoryid?: string | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_quotelinetransactioncategory_statecode | null;
  statuscode?: msdyn_quotelinetransactioncategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_quotelinetransactioncategory_Relationships {
  msdyn_QuoteLineId?: QuoteDetail_Result | null;
  msdyn_QuoteLineTransactionClassification?: msdyn_quotelinetransactionclassification_Result | null;
  msdyn_TransactionCategory?: msdyn_transactioncategory_Result | null;
  msdyn_quotelinetransactioncategory_Annotations?: Annotation_Result[] | null;
  msdyn_quotelinetransactioncategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_quotelinetransactioncategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_quotelinetransactioncategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelinetransactioncategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelinetransactioncategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_quotelinetransactioncategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_quotelinetransactioncategory_SyncErrors?: SyncError_Result[] | null;
  msdyn_quotelinetransactioncategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_quotelinetransactioncategory extends msdyn_quotelinetransactioncategory_Base, msdyn_quotelinetransactioncategory_Relationships {
  msdyn_QuoteLineId_bind$quotedetails?: string | null;
  msdyn_QuoteLineTransactionClassification_bind$msdyn_quotelinetransactionclassifications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_quotelinetransactioncategory_Create extends msdyn_quotelinetransactioncategory {
  msdyn_TransactionCategory_bind$msdyn_transactioncategories?: string | null;
}
interface msdyn_quotelinetransactioncategory_Update extends msdyn_quotelinetransactioncategory {
}
interface msdyn_quotelinetransactioncategory_Select {
  createdby_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_quotelinetransactioncategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_quotelinetransactioncategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_quotelinetransactioncategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_quotelinetransactioncategory_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_quotelinetransactioncategory_Select, { msdyn_description: string | null }, {  }>;
  msdyn_quoteline: WebAttribute<msdyn_quotelinetransactioncategory_Select, { msdyn_quoteline: string | null }, {  }>;
  msdyn_quotelineid_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { msdyn_quotelineid_guid: string | null }, { msdyn_quotelineid_formatted?: string }>;
  msdyn_quotelinetransactioncategoryid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { msdyn_quotelinetransactioncategoryid: string | null }, {  }>;
  msdyn_quotelinetransactionclassification_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { msdyn_quotelinetransactionclassification_guid: string | null }, { msdyn_quotelinetransactionclassification_formatted?: string }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  msdyn_transactionclassification: WebAttribute<msdyn_quotelinetransactioncategory_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_quotelinetransactioncategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_quotelinetransactioncategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_quotelinetransactioncategory_Select, { statecode: msdyn_quotelinetransactioncategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_quotelinetransactioncategory_Select, { statuscode: msdyn_quotelinetransactioncategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_quotelinetransactioncategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_quotelinetransactioncategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_quotelinetransactioncategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_quotelinetransactioncategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_description: string;
  msdyn_quoteline: string;
  msdyn_quotelineid_guid: XQW.Guid;
  msdyn_quotelinetransactioncategoryid: XQW.Guid;
  msdyn_quotelinetransactionclassification_guid: XQW.Guid;
  msdyn_transactioncategory_guid: XQW.Guid;
  msdyn_transactionclassification: msdyn_transactionclassification;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_quotelinetransactioncategory_statecode;
  statuscode: msdyn_quotelinetransactioncategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_quotelinetransactioncategory_Expand {
  createdby: WebExpand<msdyn_quotelinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_quotelinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_quotelinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_quotelinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_QuoteLineId: WebExpand<msdyn_quotelinetransactioncategory_Expand, QuoteDetail_Select, QuoteDetail_Filter, { msdyn_QuoteLineId: QuoteDetail_Result }>;
  msdyn_QuoteLineTransactionClassification: WebExpand<msdyn_quotelinetransactioncategory_Expand, msdyn_quotelinetransactionclassification_Select, msdyn_quotelinetransactionclassification_Filter, { msdyn_QuoteLineTransactionClassification: msdyn_quotelinetransactionclassification_Result }>;
  msdyn_TransactionCategory: WebExpand<msdyn_quotelinetransactioncategory_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_TransactionCategory: msdyn_transactioncategory_Result }>;
  msdyn_quotelinetransactioncategory_Annotations: WebExpand<msdyn_quotelinetransactioncategory_Expand, Annotation_Select, Annotation_Filter, { msdyn_quotelinetransactioncategory_Annotations: Annotation_Result[] }>;
  msdyn_quotelinetransactioncategory_AsyncOperations: WebExpand<msdyn_quotelinetransactioncategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_quotelinetransactioncategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_quotelinetransactioncategory_BulkDeleteFailures: WebExpand<msdyn_quotelinetransactioncategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_quotelinetransactioncategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_quotelinetransactioncategory_DuplicateBaseRecord: WebExpand<msdyn_quotelinetransactioncategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelinetransactioncategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelinetransactioncategory_DuplicateMatchingRecord: WebExpand<msdyn_quotelinetransactioncategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelinetransactioncategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelinetransactioncategory_MailboxTrackingFolders: WebExpand<msdyn_quotelinetransactioncategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_quotelinetransactioncategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_quotelinetransactioncategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_quotelinetransactioncategory_ProcessSession: WebExpand<msdyn_quotelinetransactioncategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_quotelinetransactioncategory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_quotelinetransactioncategory_SyncErrors: WebExpand<msdyn_quotelinetransactioncategory_Expand, SyncError_Select, SyncError_Filter, { msdyn_quotelinetransactioncategory_SyncErrors: SyncError_Result[] }>;
  msdyn_quotelinetransactioncategory_UserEntityInstanceDatas: WebExpand<msdyn_quotelinetransactioncategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_quotelinetransactioncategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_quotelinetransactioncategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_quotelinetransactioncategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_quotelinetransactioncategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_quotelinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_quotelinetransactioncategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_quotelineid_formatted?: string;
  msdyn_quotelinetransactionclassification_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_quotelinetransactioncategory_Result extends msdyn_quotelinetransactioncategory_Base, msdyn_quotelinetransactioncategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_quotelineid_guid: string | null;
  msdyn_quotelinetransactionclassification_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_quotelinetransactioncategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_QuoteLineId: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  msdyn_QuoteLineTransactionClassification: WebMappingRetrieve<msdyn_quotelinetransactionclassification_Select,msdyn_quotelinetransactionclassification_Expand,msdyn_quotelinetransactionclassification_Filter,msdyn_quotelinetransactionclassification_Fixed,msdyn_quotelinetransactionclassification_Result,msdyn_quotelinetransactionclassification_FormattedResult>;
  msdyn_TransactionCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_quotelinetransactioncategory_RelatedMany {
  msdyn_quotelinetransactioncategory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_quotelinetransactioncategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_quotelinetransactioncategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_quotelinetransactioncategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelinetransactioncategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelinetransactioncategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_quotelinetransactioncategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_quotelinetransactioncategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_quotelinetransactioncategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_quotelinetransactioncategories: WebMappingRetrieve<msdyn_quotelinetransactioncategory_Select,msdyn_quotelinetransactioncategory_Expand,msdyn_quotelinetransactioncategory_Filter,msdyn_quotelinetransactioncategory_Fixed,msdyn_quotelinetransactioncategory_Result,msdyn_quotelinetransactioncategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_quotelinetransactioncategories: WebMappingRelated<msdyn_quotelinetransactioncategory_RelatedOne,msdyn_quotelinetransactioncategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_quotelinetransactioncategories: WebMappingCUDA<msdyn_quotelinetransactioncategory_Create,msdyn_quotelinetransactioncategory_Update,msdyn_quotelinetransactioncategory_Select>;
}
