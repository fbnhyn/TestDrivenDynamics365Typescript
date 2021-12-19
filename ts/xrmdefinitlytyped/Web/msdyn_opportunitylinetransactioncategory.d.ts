interface msdyn_opportunitylinetransactioncategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_description?: string | null;
  msdyn_opportunitylinetransactioncategoryid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_opportunitylinetransactioncategory_statecode | null;
  statuscode?: msdyn_opportunitylinetransactioncategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_opportunitylinetransactioncategory_Relationships {
  msdyn_OpportunityLineTransactionClassification?: msdyn_opportunitylinetransactionclassificatio_Result | null;
  msdyn_TransactionCategory?: msdyn_transactioncategory_Result | null;
  msdyn_opportunitylinetransactioncategory_Annotations?: Annotation_Result[] | null;
  msdyn_opportunitylinetransactioncategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_opportunitylinetransactioncategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_opportunitylinetransactioncategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_opportunitylinetransactioncategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_opportunitylinetransactioncategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_opportunitylinetransactioncategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_opportunitylinetransactioncategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_opportunitylinetransactioncategory_SyncErrors?: SyncError_Result[] | null;
  msdyn_opportunitylinetransactioncategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_opportunitylinetransactioncategory extends msdyn_opportunitylinetransactioncategory_Base, msdyn_opportunitylinetransactioncategory_Relationships {
  msdyn_OpportunityLineTransactionClassification_bind$msdyn_opportunitylinetransactionclassificatios?: string | null;
  msdyn_TransactionCategory_bind$msdyn_transactioncategories?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_opportunitylinetransactioncategory_Create extends msdyn_opportunitylinetransactioncategory {
}
interface msdyn_opportunitylinetransactioncategory_Update extends msdyn_opportunitylinetransactioncategory {
}
interface msdyn_opportunitylinetransactioncategory_Select {
  createdby_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { msdyn_description: string | null }, {  }>;
  msdyn_opportunitylinetransactioncategoryid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { msdyn_opportunitylinetransactioncategoryid: string | null }, {  }>;
  msdyn_opportunitylinetransactionclassification_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { msdyn_opportunitylinetransactionclassification_guid: string | null }, { msdyn_opportunitylinetransactionclassification_formatted?: string }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { statecode: msdyn_opportunitylinetransactioncategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { statuscode: msdyn_opportunitylinetransactioncategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_opportunitylinetransactioncategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_opportunitylinetransactioncategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_description: string;
  msdyn_opportunitylinetransactioncategoryid: XQW.Guid;
  msdyn_opportunitylinetransactionclassification_guid: XQW.Guid;
  msdyn_transactioncategory_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_opportunitylinetransactioncategory_statecode;
  statuscode: msdyn_opportunitylinetransactioncategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_opportunitylinetransactioncategory_Expand {
  createdby: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_OpportunityLineTransactionClassification: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, msdyn_opportunitylinetransactionclassificatio_Select, msdyn_opportunitylinetransactionclassificatio_Filter, { msdyn_OpportunityLineTransactionClassification: msdyn_opportunitylinetransactionclassificatio_Result }>;
  msdyn_TransactionCategory: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_TransactionCategory: msdyn_transactioncategory_Result }>;
  msdyn_opportunitylinetransactioncategory_Annotations: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, Annotation_Select, Annotation_Filter, { msdyn_opportunitylinetransactioncategory_Annotations: Annotation_Result[] }>;
  msdyn_opportunitylinetransactioncategory_AsyncOperations: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_opportunitylinetransactioncategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_opportunitylinetransactioncategory_BulkDeleteFailures: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_opportunitylinetransactioncategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_opportunitylinetransactioncategory_DuplicateBaseRecord: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_opportunitylinetransactioncategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_opportunitylinetransactioncategory_DuplicateMatchingRecord: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_opportunitylinetransactioncategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_opportunitylinetransactioncategory_MailboxTrackingFolders: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_opportunitylinetransactioncategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_opportunitylinetransactioncategory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_opportunitylinetransactioncategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_opportunitylinetransactioncategory_ProcessSession: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_opportunitylinetransactioncategory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_opportunitylinetransactioncategory_SyncErrors: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, SyncError_Select, SyncError_Filter, { msdyn_opportunitylinetransactioncategory_SyncErrors: SyncError_Result[] }>;
  msdyn_opportunitylinetransactioncategory_UserEntityInstanceDatas: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_opportunitylinetransactioncategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_opportunitylinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_opportunitylinetransactioncategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_opportunitylinetransactionclassification_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_opportunitylinetransactioncategory_Result extends msdyn_opportunitylinetransactioncategory_Base, msdyn_opportunitylinetransactioncategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_opportunitylinetransactionclassification_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_opportunitylinetransactioncategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_OpportunityLineTransactionClassification: WebMappingRetrieve<msdyn_opportunitylinetransactionclassificatio_Select,msdyn_opportunitylinetransactionclassificatio_Expand,msdyn_opportunitylinetransactionclassificatio_Filter,msdyn_opportunitylinetransactionclassificatio_Fixed,msdyn_opportunitylinetransactionclassificatio_Result,msdyn_opportunitylinetransactionclassificatio_FormattedResult>;
  msdyn_TransactionCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_opportunitylinetransactioncategory_RelatedMany {
  msdyn_opportunitylinetransactioncategory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_opportunitylinetransactioncategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_opportunitylinetransactioncategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_opportunitylinetransactioncategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_opportunitylinetransactioncategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_opportunitylinetransactioncategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_opportunitylinetransactioncategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_opportunitylinetransactioncategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_opportunitylinetransactioncategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_opportunitylinetransactioncategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_opportunitylinetransactioncategories: WebMappingRetrieve<msdyn_opportunitylinetransactioncategory_Select,msdyn_opportunitylinetransactioncategory_Expand,msdyn_opportunitylinetransactioncategory_Filter,msdyn_opportunitylinetransactioncategory_Fixed,msdyn_opportunitylinetransactioncategory_Result,msdyn_opportunitylinetransactioncategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_opportunitylinetransactioncategories: WebMappingRelated<msdyn_opportunitylinetransactioncategory_RelatedOne,msdyn_opportunitylinetransactioncategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_opportunitylinetransactioncategories: WebMappingCUDA<msdyn_opportunitylinetransactioncategory_Create,msdyn_opportunitylinetransactioncategory_Update,msdyn_opportunitylinetransactioncategory_Select>;
}
