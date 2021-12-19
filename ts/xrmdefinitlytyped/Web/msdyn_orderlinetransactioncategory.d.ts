interface msdyn_orderlinetransactioncategory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_contractline?: string | null;
  msdyn_description?: string | null;
  msdyn_orderlinetransactioncategoryid?: string | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_orderlinetransactioncategory_statecode | null;
  statuscode?: msdyn_orderlinetransactioncategory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_orderlinetransactioncategory_Relationships {
  msdyn_ContractLineId?: SalesOrderDetail_Result | null;
  msdyn_ContractLineTransactionClassification?: msdyn_orderlinetransactionclassification_Result | null;
  msdyn_TransactionCategory?: msdyn_transactioncategory_Result | null;
  msdyn_orderlinetransactioncategory_Annotations?: Annotation_Result[] | null;
  msdyn_orderlinetransactioncategory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_orderlinetransactioncategory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_orderlinetransactioncategory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderlinetransactioncategory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderlinetransactioncategory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_orderlinetransactioncategory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_orderlinetransactioncategory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_orderlinetransactioncategory_SyncErrors?: SyncError_Result[] | null;
  msdyn_orderlinetransactioncategory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_orderlinetransactioncategory extends msdyn_orderlinetransactioncategory_Base, msdyn_orderlinetransactioncategory_Relationships {
  msdyn_ContractLineId_bind$salesorderdetails?: string | null;
  msdyn_ContractLineTransactionClassification_bind$msdyn_orderlinetransactionclassifications?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_orderlinetransactioncategory_Create extends msdyn_orderlinetransactioncategory {
  msdyn_TransactionCategory_bind$msdyn_transactioncategories?: string | null;
}
interface msdyn_orderlinetransactioncategory_Update extends msdyn_orderlinetransactioncategory {
}
interface msdyn_orderlinetransactioncategory_Select {
  createdby_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_orderlinetransactioncategory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_orderlinetransactioncategory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_orderlinetransactioncategory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_orderlinetransactioncategory_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_contractline: WebAttribute<msdyn_orderlinetransactioncategory_Select, { msdyn_contractline: string | null }, {  }>;
  msdyn_contractlineid_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { msdyn_contractlineid_guid: string | null }, { msdyn_contractlineid_formatted?: string }>;
  msdyn_contractlinetransactionclassification_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { msdyn_contractlinetransactionclassification_guid: string | null }, { msdyn_contractlinetransactionclassification_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_orderlinetransactioncategory_Select, { msdyn_description: string | null }, {  }>;
  msdyn_orderlinetransactioncategoryid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { msdyn_orderlinetransactioncategoryid: string | null }, {  }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  msdyn_transactionclassification: WebAttribute<msdyn_orderlinetransactioncategory_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_orderlinetransactioncategory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_orderlinetransactioncategory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_orderlinetransactioncategory_Select, { statecode: msdyn_orderlinetransactioncategory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_orderlinetransactioncategory_Select, { statuscode: msdyn_orderlinetransactioncategory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_orderlinetransactioncategory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_orderlinetransactioncategory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_orderlinetransactioncategory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_orderlinetransactioncategory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_billingtype: msdyn_billingtype;
  msdyn_contractline: string;
  msdyn_contractlineid_guid: XQW.Guid;
  msdyn_contractlinetransactionclassification_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_orderlinetransactioncategoryid: XQW.Guid;
  msdyn_transactioncategory_guid: XQW.Guid;
  msdyn_transactionclassification: msdyn_transactionclassification;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_orderlinetransactioncategory_statecode;
  statuscode: msdyn_orderlinetransactioncategory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_orderlinetransactioncategory_Expand {
  createdby: WebExpand<msdyn_orderlinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_orderlinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_orderlinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_orderlinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ContractLineId: WebExpand<msdyn_orderlinetransactioncategory_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { msdyn_ContractLineId: SalesOrderDetail_Result }>;
  msdyn_ContractLineTransactionClassification: WebExpand<msdyn_orderlinetransactioncategory_Expand, msdyn_orderlinetransactionclassification_Select, msdyn_orderlinetransactionclassification_Filter, { msdyn_ContractLineTransactionClassification: msdyn_orderlinetransactionclassification_Result }>;
  msdyn_TransactionCategory: WebExpand<msdyn_orderlinetransactioncategory_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_TransactionCategory: msdyn_transactioncategory_Result }>;
  msdyn_orderlinetransactioncategory_Annotations: WebExpand<msdyn_orderlinetransactioncategory_Expand, Annotation_Select, Annotation_Filter, { msdyn_orderlinetransactioncategory_Annotations: Annotation_Result[] }>;
  msdyn_orderlinetransactioncategory_AsyncOperations: WebExpand<msdyn_orderlinetransactioncategory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_orderlinetransactioncategory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_orderlinetransactioncategory_BulkDeleteFailures: WebExpand<msdyn_orderlinetransactioncategory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_orderlinetransactioncategory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_orderlinetransactioncategory_DuplicateBaseRecord: WebExpand<msdyn_orderlinetransactioncategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderlinetransactioncategory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_orderlinetransactioncategory_DuplicateMatchingRecord: WebExpand<msdyn_orderlinetransactioncategory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderlinetransactioncategory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_orderlinetransactioncategory_MailboxTrackingFolders: WebExpand<msdyn_orderlinetransactioncategory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_orderlinetransactioncategory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_orderlinetransactioncategory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_orderlinetransactioncategory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_orderlinetransactioncategory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_orderlinetransactioncategory_ProcessSession: WebExpand<msdyn_orderlinetransactioncategory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_orderlinetransactioncategory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_orderlinetransactioncategory_SyncErrors: WebExpand<msdyn_orderlinetransactioncategory_Expand, SyncError_Select, SyncError_Filter, { msdyn_orderlinetransactioncategory_SyncErrors: SyncError_Result[] }>;
  msdyn_orderlinetransactioncategory_UserEntityInstanceDatas: WebExpand<msdyn_orderlinetransactioncategory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_orderlinetransactioncategory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_orderlinetransactioncategory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_orderlinetransactioncategory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_orderlinetransactioncategory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_orderlinetransactioncategory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_orderlinetransactioncategory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_contractlineid_formatted?: string;
  msdyn_contractlinetransactionclassification_formatted?: string;
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
interface msdyn_orderlinetransactioncategory_Result extends msdyn_orderlinetransactioncategory_Base, msdyn_orderlinetransactioncategory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_contractlineid_guid: string | null;
  msdyn_contractlinetransactionclassification_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_orderlinetransactioncategory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ContractLineId: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  msdyn_ContractLineTransactionClassification: WebMappingRetrieve<msdyn_orderlinetransactionclassification_Select,msdyn_orderlinetransactionclassification_Expand,msdyn_orderlinetransactionclassification_Filter,msdyn_orderlinetransactionclassification_Fixed,msdyn_orderlinetransactionclassification_Result,msdyn_orderlinetransactionclassification_FormattedResult>;
  msdyn_TransactionCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_orderlinetransactioncategory_RelatedMany {
  msdyn_orderlinetransactioncategory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_orderlinetransactioncategory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_orderlinetransactioncategory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_orderlinetransactioncategory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderlinetransactioncategory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderlinetransactioncategory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_orderlinetransactioncategory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_orderlinetransactioncategory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_orderlinetransactioncategory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_orderlinetransactioncategory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_orderlinetransactioncategories: WebMappingRetrieve<msdyn_orderlinetransactioncategory_Select,msdyn_orderlinetransactioncategory_Expand,msdyn_orderlinetransactioncategory_Filter,msdyn_orderlinetransactioncategory_Fixed,msdyn_orderlinetransactioncategory_Result,msdyn_orderlinetransactioncategory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_orderlinetransactioncategories: WebMappingRelated<msdyn_orderlinetransactioncategory_RelatedOne,msdyn_orderlinetransactioncategory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_orderlinetransactioncategories: WebMappingCUDA<msdyn_orderlinetransactioncategory_Create,msdyn_orderlinetransactioncategory_Update,msdyn_orderlinetransactioncategory_Select>;
}
