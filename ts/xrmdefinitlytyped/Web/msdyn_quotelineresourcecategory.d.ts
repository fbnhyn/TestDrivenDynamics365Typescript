interface msdyn_quotelineresourcecategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_description?: string | null;
  msdyn_quoteline?: string | null;
  msdyn_quotelineresourcecategoryid?: string | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_quotelineresourcecategory_statecode | null;
  statuscode?: msdyn_quotelineresourcecategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_quotelineresourcecategory_Relationships {
  msdyn_QuoteLineId?: QuoteDetail_Result | null;
  msdyn_QuoteLineTransactionClassification?: msdyn_quotelinetransactionclassification_Result | null;
  msdyn_ResourceCategory?: BookableResourceCategory_Result | null;
  msdyn_quotelineresourcecategory_Annotations?: Annotation_Result[] | null;
  msdyn_quotelineresourcecategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_quotelineresourcecategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_quotelineresourcecategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelineresourcecategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelineresourcecategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_quotelineresourcecategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_quotelineresourcecategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_quotelineresourcecategory_SyncErrors?: SyncError_Result[] | null;
  msdyn_quotelineresourcecategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_quotelineresourcecategory extends msdyn_quotelineresourcecategory_Base, msdyn_quotelineresourcecategory_Relationships {
  msdyn_QuoteLineId_bind$quotedetails?: string | null;
  msdyn_QuoteLineTransactionClassification_bind$msdyn_quotelinetransactionclassifications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_quotelineresourcecategory_Create extends msdyn_quotelineresourcecategory {
  msdyn_ResourceCategory_bind$bookableresourcecategories?: string | null;
}
interface msdyn_quotelineresourcecategory_Update extends msdyn_quotelineresourcecategory {
}
interface msdyn_quotelineresourcecategory_Select {
  createdby_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_quotelineresourcecategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_quotelineresourcecategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_quotelineresourcecategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_quotelineresourcecategory_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_quotelineresourcecategory_Select, { msdyn_description: string | null }, {  }>;
  msdyn_quoteline: WebAttribute<msdyn_quotelineresourcecategory_Select, { msdyn_quoteline: string | null }, {  }>;
  msdyn_quotelineid_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { msdyn_quotelineid_guid: string | null }, { msdyn_quotelineid_formatted?: string }>;
  msdyn_quotelineresourcecategoryid: WebAttribute<msdyn_quotelineresourcecategory_Select, { msdyn_quotelineresourcecategoryid: string | null }, {  }>;
  msdyn_quotelinetransactionclassification_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { msdyn_quotelinetransactionclassification_guid: string | null }, { msdyn_quotelinetransactionclassification_formatted?: string }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_transactionclassification: WebAttribute<msdyn_quotelineresourcecategory_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_quotelineresourcecategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_quotelineresourcecategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_quotelineresourcecategory_Select, { statecode: msdyn_quotelineresourcecategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_quotelineresourcecategory_Select, { statuscode: msdyn_quotelineresourcecategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_quotelineresourcecategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_quotelineresourcecategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_quotelineresourcecategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_quotelineresourcecategory_Filter {
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
  msdyn_quotelineresourcecategoryid: XQW.Guid;
  msdyn_quotelinetransactionclassification_guid: XQW.Guid;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_transactionclassification: msdyn_transactionclassification;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_quotelineresourcecategory_statecode;
  statuscode: msdyn_quotelineresourcecategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_quotelineresourcecategory_Expand {
  createdby: WebExpand<msdyn_quotelineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_quotelineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_quotelineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_quotelineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_QuoteLineId: WebExpand<msdyn_quotelineresourcecategory_Expand, QuoteDetail_Select, QuoteDetail_Filter, { msdyn_QuoteLineId: QuoteDetail_Result }>;
  msdyn_QuoteLineTransactionClassification: WebExpand<msdyn_quotelineresourcecategory_Expand, msdyn_quotelinetransactionclassification_Select, msdyn_quotelinetransactionclassification_Filter, { msdyn_QuoteLineTransactionClassification: msdyn_quotelinetransactionclassification_Result }>;
  msdyn_ResourceCategory: WebExpand<msdyn_quotelineresourcecategory_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_ResourceCategory: BookableResourceCategory_Result }>;
  msdyn_quotelineresourcecategory_Annotations: WebExpand<msdyn_quotelineresourcecategory_Expand, Annotation_Select, Annotation_Filter, { msdyn_quotelineresourcecategory_Annotations: Annotation_Result[] }>;
  msdyn_quotelineresourcecategory_AsyncOperations: WebExpand<msdyn_quotelineresourcecategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_quotelineresourcecategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_quotelineresourcecategory_BulkDeleteFailures: WebExpand<msdyn_quotelineresourcecategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_quotelineresourcecategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_quotelineresourcecategory_DuplicateBaseRecord: WebExpand<msdyn_quotelineresourcecategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelineresourcecategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelineresourcecategory_DuplicateMatchingRecord: WebExpand<msdyn_quotelineresourcecategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelineresourcecategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelineresourcecategory_MailboxTrackingFolders: WebExpand<msdyn_quotelineresourcecategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_quotelineresourcecategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_quotelineresourcecategory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_quotelineresourcecategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_quotelineresourcecategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_quotelineresourcecategory_ProcessSession: WebExpand<msdyn_quotelineresourcecategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_quotelineresourcecategory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_quotelineresourcecategory_SyncErrors: WebExpand<msdyn_quotelineresourcecategory_Expand, SyncError_Select, SyncError_Filter, { msdyn_quotelineresourcecategory_SyncErrors: SyncError_Result[] }>;
  msdyn_quotelineresourcecategory_UserEntityInstanceDatas: WebExpand<msdyn_quotelineresourcecategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_quotelineresourcecategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_quotelineresourcecategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_quotelineresourcecategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_quotelineresourcecategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_quotelineresourcecategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_quotelineresourcecategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_quotelineid_formatted?: string;
  msdyn_quotelinetransactionclassification_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_quotelineresourcecategory_Result extends msdyn_quotelineresourcecategory_Base, msdyn_quotelineresourcecategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_quotelineid_guid: string | null;
  msdyn_quotelinetransactionclassification_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_quotelineresourcecategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_QuoteLineId: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  msdyn_QuoteLineTransactionClassification: WebMappingRetrieve<msdyn_quotelinetransactionclassification_Select,msdyn_quotelinetransactionclassification_Expand,msdyn_quotelinetransactionclassification_Filter,msdyn_quotelinetransactionclassification_Fixed,msdyn_quotelinetransactionclassification_Result,msdyn_quotelinetransactionclassification_FormattedResult>;
  msdyn_ResourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_quotelineresourcecategory_RelatedMany {
  msdyn_quotelineresourcecategory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_quotelineresourcecategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_quotelineresourcecategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_quotelineresourcecategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelineresourcecategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelineresourcecategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_quotelineresourcecategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_quotelineresourcecategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_quotelineresourcecategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_quotelineresourcecategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_quotelineresourcecategories: WebMappingRetrieve<msdyn_quotelineresourcecategory_Select,msdyn_quotelineresourcecategory_Expand,msdyn_quotelineresourcecategory_Filter,msdyn_quotelineresourcecategory_Fixed,msdyn_quotelineresourcecategory_Result,msdyn_quotelineresourcecategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_quotelineresourcecategories: WebMappingRelated<msdyn_quotelineresourcecategory_RelatedOne,msdyn_quotelineresourcecategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_quotelineresourcecategories: WebMappingCUDA<msdyn_quotelineresourcecategory_Create,msdyn_quotelineresourcecategory_Update,msdyn_quotelineresourcecategory_Select>;
}
