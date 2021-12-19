interface msdyn_quotelinetransactionclassification_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_description?: string | null;
  msdyn_include?: boolean | null;
  msdyn_quoteline?: string | null;
  msdyn_quotelinetransactionclassificationid?: string | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_quotelinetransactionclassification_statecode | null;
  statuscode?: msdyn_quotelinetransactionclassification_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_quotelinetransactionclassification_Relationships {
  msdyn_QuoteLineId?: QuoteDetail_Result | null;
  msdyn_quotelinetransactionclassification_Annotations?: Annotation_Result[] | null;
  msdyn_quotelinetransactionclassification_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_quotelinetransactionclassification_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_quotelinetransactionclassification_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelinetransactionclassification_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_quotelinetransactionclassification_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_quotelinetransactionclassification_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_quotelinetransactionclassification_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_quotelinetransactionclassification_SyncErrors?: SyncError_Result[] | null;
  msdyn_quotelinetransactionclassification_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_quotelinetransactionclassification_msdyn_quotelineresourcecategory_QuoteLineTransactionClass?: msdyn_quotelineresourcecategory_Result[] | null;
  msdyn_quotelinetransactionclassification_msdyn_quotelinetransactioncategory_QuoteLineTransactionCla?: msdyn_quotelinetransactioncategory_Result[] | null;
}
interface msdyn_quotelinetransactionclassification extends msdyn_quotelinetransactionclassification_Base, msdyn_quotelinetransactionclassification_Relationships {
  msdyn_QuoteLineId_bind$quotedetails?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_quotelinetransactionclassification_Create extends msdyn_quotelinetransactionclassification {
}
interface msdyn_quotelinetransactionclassification_Update extends msdyn_quotelinetransactionclassification {
}
interface msdyn_quotelinetransactionclassification_Select {
  createdby_guid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_quotelinetransactionclassification_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_quotelinetransactionclassification_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_quotelinetransactionclassification_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_quotelinetransactionclassification_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_quotelinetransactionclassification_Select, { msdyn_description: string | null }, {  }>;
  msdyn_include: WebAttribute<msdyn_quotelinetransactionclassification_Select, { msdyn_include: boolean | null }, {  }>;
  msdyn_quoteline: WebAttribute<msdyn_quotelinetransactionclassification_Select, { msdyn_quoteline: string | null }, {  }>;
  msdyn_quotelineid_guid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { msdyn_quotelineid_guid: string | null }, { msdyn_quotelineid_formatted?: string }>;
  msdyn_quotelinetransactionclassificationid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { msdyn_quotelinetransactionclassificationid: string | null }, {  }>;
  msdyn_transactionclassification: WebAttribute<msdyn_quotelinetransactionclassification_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_quotelinetransactionclassification_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_quotelinetransactionclassification_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_quotelinetransactionclassification_Select, { statecode: msdyn_quotelinetransactionclassification_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_quotelinetransactionclassification_Select, { statuscode: msdyn_quotelinetransactionclassification_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_quotelinetransactionclassification_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_quotelinetransactionclassification_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_quotelinetransactionclassification_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_quotelinetransactionclassification_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_description: string;
  msdyn_include: boolean;
  msdyn_quoteline: string;
  msdyn_quotelineid_guid: XQW.Guid;
  msdyn_quotelinetransactionclassificationid: XQW.Guid;
  msdyn_transactionclassification: msdyn_transactionclassification;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_quotelinetransactionclassification_statecode;
  statuscode: msdyn_quotelinetransactionclassification_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_quotelinetransactionclassification_Expand {
  createdby: WebExpand<msdyn_quotelinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_quotelinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_quotelinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_quotelinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_QuoteLineId: WebExpand<msdyn_quotelinetransactionclassification_Expand, QuoteDetail_Select, QuoteDetail_Filter, { msdyn_QuoteLineId: QuoteDetail_Result }>;
  msdyn_quotelinetransactionclassification_Annotations: WebExpand<msdyn_quotelinetransactionclassification_Expand, Annotation_Select, Annotation_Filter, { msdyn_quotelinetransactionclassification_Annotations: Annotation_Result[] }>;
  msdyn_quotelinetransactionclassification_AsyncOperations: WebExpand<msdyn_quotelinetransactionclassification_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_quotelinetransactionclassification_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_quotelinetransactionclassification_BulkDeleteFailures: WebExpand<msdyn_quotelinetransactionclassification_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_quotelinetransactionclassification_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_quotelinetransactionclassification_DuplicateBaseRecord: WebExpand<msdyn_quotelinetransactionclassification_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelinetransactionclassification_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelinetransactionclassification_DuplicateMatchingRecord: WebExpand<msdyn_quotelinetransactionclassification_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_quotelinetransactionclassification_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_quotelinetransactionclassification_MailboxTrackingFolders: WebExpand<msdyn_quotelinetransactionclassification_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_quotelinetransactionclassification_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_quotelinetransactionclassification_PrincipalObjectAttributeAccesses: WebExpand<msdyn_quotelinetransactionclassification_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_quotelinetransactionclassification_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_quotelinetransactionclassification_ProcessSession: WebExpand<msdyn_quotelinetransactionclassification_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_quotelinetransactionclassification_ProcessSession: ProcessSession_Result[] }>;
  msdyn_quotelinetransactionclassification_SyncErrors: WebExpand<msdyn_quotelinetransactionclassification_Expand, SyncError_Select, SyncError_Filter, { msdyn_quotelinetransactionclassification_SyncErrors: SyncError_Result[] }>;
  msdyn_quotelinetransactionclassification_UserEntityInstanceDatas: WebExpand<msdyn_quotelinetransactionclassification_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_quotelinetransactionclassification_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_quotelinetransactionclassification_msdyn_quotelineresourcecategory_QuoteLineTransactionClass: WebExpand<msdyn_quotelinetransactionclassification_Expand, msdyn_quotelineresourcecategory_Select, msdyn_quotelineresourcecategory_Filter, { msdyn_quotelinetransactionclassification_msdyn_quotelineresourcecategory_QuoteLineTransactionClass: msdyn_quotelineresourcecategory_Result[] }>;
  msdyn_quotelinetransactionclassification_msdyn_quotelinetransactioncategory_QuoteLineTransactionCla: WebExpand<msdyn_quotelinetransactionclassification_Expand, msdyn_quotelinetransactioncategory_Select, msdyn_quotelinetransactioncategory_Filter, { msdyn_quotelinetransactionclassification_msdyn_quotelinetransactioncategory_QuoteLineTransactionCla: msdyn_quotelinetransactioncategory_Result[] }>;
  ownerid: WebExpand<msdyn_quotelinetransactionclassification_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_quotelinetransactionclassification_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_quotelinetransactionclassification_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_quotelinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_quotelinetransactionclassification_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_quotelineid_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_quotelinetransactionclassification_Result extends msdyn_quotelinetransactionclassification_Base, msdyn_quotelinetransactionclassification_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_quotelineid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_quotelinetransactionclassification_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_QuoteLineId: WebMappingRetrieve<QuoteDetail_Select,QuoteDetail_Expand,QuoteDetail_Filter,QuoteDetail_Fixed,QuoteDetail_Result,QuoteDetail_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_quotelinetransactionclassification_RelatedMany {
  msdyn_quotelinetransactionclassification_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_quotelinetransactionclassification_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_quotelinetransactionclassification_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_quotelinetransactionclassification_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelinetransactionclassification_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_quotelinetransactionclassification_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_quotelinetransactionclassification_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_quotelinetransactionclassification_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_quotelinetransactionclassification_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_quotelinetransactionclassification_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_quotelinetransactionclassification_msdyn_quotelineresourcecategory_QuoteLineTransactionClass: WebMappingRetrieve<msdyn_quotelineresourcecategory_Select,msdyn_quotelineresourcecategory_Expand,msdyn_quotelineresourcecategory_Filter,msdyn_quotelineresourcecategory_Fixed,msdyn_quotelineresourcecategory_Result,msdyn_quotelineresourcecategory_FormattedResult>;
  msdyn_quotelinetransactionclassification_msdyn_quotelinetransactioncategory_QuoteLineTransactionCla: WebMappingRetrieve<msdyn_quotelinetransactioncategory_Select,msdyn_quotelinetransactioncategory_Expand,msdyn_quotelinetransactioncategory_Filter,msdyn_quotelinetransactioncategory_Fixed,msdyn_quotelinetransactioncategory_Result,msdyn_quotelinetransactioncategory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_quotelinetransactionclassifications: WebMappingRetrieve<msdyn_quotelinetransactionclassification_Select,msdyn_quotelinetransactionclassification_Expand,msdyn_quotelinetransactionclassification_Filter,msdyn_quotelinetransactionclassification_Fixed,msdyn_quotelinetransactionclassification_Result,msdyn_quotelinetransactionclassification_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_quotelinetransactionclassifications: WebMappingRelated<msdyn_quotelinetransactionclassification_RelatedOne,msdyn_quotelinetransactionclassification_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_quotelinetransactionclassifications: WebMappingCUDA<msdyn_quotelinetransactionclassification_Create,msdyn_quotelinetransactionclassification_Update,msdyn_quotelinetransactionclassification_Select>;
}
