interface msdyn_orderlinetransactionclassification_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_billingtype?: msdyn_billingtype | null;
  msdyn_contractline?: string | null;
  msdyn_description?: string | null;
  msdyn_include?: boolean | null;
  msdyn_orderlinetransactionclassificationid?: string | null;
  msdyn_transactionclassification?: msdyn_transactionclassification | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_orderlinetransactionclassification_statecode | null;
  statuscode?: msdyn_orderlinetransactionclassification_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_orderlinetransactionclassification_Relationships {
  msdyn_ContractLineId?: SalesOrderDetail_Result | null;
  msdyn_orderlinetransactionclassification_Annotations?: Annotation_Result[] | null;
  msdyn_orderlinetransactionclassification_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_orderlinetransactionclassification_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_orderlinetransactionclassification_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderlinetransactionclassification_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_orderlinetransactionclassification_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_orderlinetransactionclassification_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_orderlinetransactionclassification_SyncErrors?: SyncError_Result[] | null;
  msdyn_orderlinetransactionclassification_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla?: msdyn_orderlineresourcecategory_Result[] | null;
  msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction?: msdyn_orderlinetransactioncategory_Result[] | null;
}
interface msdyn_orderlinetransactionclassification extends msdyn_orderlinetransactionclassification_Base, msdyn_orderlinetransactionclassification_Relationships {
  msdyn_ContractLineId_bind$salesorderdetails?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_orderlinetransactionclassification_Create extends msdyn_orderlinetransactionclassification {
}
interface msdyn_orderlinetransactionclassification_Update extends msdyn_orderlinetransactionclassification {
}
interface msdyn_orderlinetransactionclassification_Select {
  createdby_guid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_orderlinetransactionclassification_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_orderlinetransactionclassification_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_orderlinetransactionclassification_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_billingtype: WebAttribute<msdyn_orderlinetransactionclassification_Select, { msdyn_billingtype: msdyn_billingtype | null }, { msdyn_billingtype_formatted?: string }>;
  msdyn_contractline: WebAttribute<msdyn_orderlinetransactionclassification_Select, { msdyn_contractline: string | null }, {  }>;
  msdyn_contractlineid_guid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { msdyn_contractlineid_guid: string | null }, { msdyn_contractlineid_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_orderlinetransactionclassification_Select, { msdyn_description: string | null }, {  }>;
  msdyn_include: WebAttribute<msdyn_orderlinetransactionclassification_Select, { msdyn_include: boolean | null }, {  }>;
  msdyn_orderlinetransactionclassificationid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { msdyn_orderlinetransactionclassificationid: string | null }, {  }>;
  msdyn_transactionclassification: WebAttribute<msdyn_orderlinetransactionclassification_Select, { msdyn_transactionclassification: msdyn_transactionclassification | null }, { msdyn_transactionclassification_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_orderlinetransactionclassification_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_orderlinetransactionclassification_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_orderlinetransactionclassification_Select, { statecode: msdyn_orderlinetransactionclassification_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_orderlinetransactionclassification_Select, { statuscode: msdyn_orderlinetransactionclassification_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_orderlinetransactionclassification_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_orderlinetransactionclassification_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_orderlinetransactionclassification_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_orderlinetransactionclassification_Filter {
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
  msdyn_description: string;
  msdyn_include: boolean;
  msdyn_orderlinetransactionclassificationid: XQW.Guid;
  msdyn_transactionclassification: msdyn_transactionclassification;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_orderlinetransactionclassification_statecode;
  statuscode: msdyn_orderlinetransactionclassification_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_orderlinetransactionclassification_Expand {
  createdby: WebExpand<msdyn_orderlinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_orderlinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_orderlinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_orderlinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ContractLineId: WebExpand<msdyn_orderlinetransactionclassification_Expand, SalesOrderDetail_Select, SalesOrderDetail_Filter, { msdyn_ContractLineId: SalesOrderDetail_Result }>;
  msdyn_orderlinetransactionclassification_Annotations: WebExpand<msdyn_orderlinetransactionclassification_Expand, Annotation_Select, Annotation_Filter, { msdyn_orderlinetransactionclassification_Annotations: Annotation_Result[] }>;
  msdyn_orderlinetransactionclassification_AsyncOperations: WebExpand<msdyn_orderlinetransactionclassification_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_orderlinetransactionclassification_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_orderlinetransactionclassification_BulkDeleteFailures: WebExpand<msdyn_orderlinetransactionclassification_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_orderlinetransactionclassification_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_orderlinetransactionclassification_DuplicateBaseRecord: WebExpand<msdyn_orderlinetransactionclassification_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderlinetransactionclassification_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_orderlinetransactionclassification_DuplicateMatchingRecord: WebExpand<msdyn_orderlinetransactionclassification_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_orderlinetransactionclassification_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_orderlinetransactionclassification_MailboxTrackingFolders: WebExpand<msdyn_orderlinetransactionclassification_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_orderlinetransactionclassification_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses: WebExpand<msdyn_orderlinetransactionclassification_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_orderlinetransactionclassification_ProcessSession: WebExpand<msdyn_orderlinetransactionclassification_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_orderlinetransactionclassification_ProcessSession: ProcessSession_Result[] }>;
  msdyn_orderlinetransactionclassification_SyncErrors: WebExpand<msdyn_orderlinetransactionclassification_Expand, SyncError_Select, SyncError_Filter, { msdyn_orderlinetransactionclassification_SyncErrors: SyncError_Result[] }>;
  msdyn_orderlinetransactionclassification_UserEntityInstanceDatas: WebExpand<msdyn_orderlinetransactionclassification_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_orderlinetransactionclassification_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla: WebExpand<msdyn_orderlinetransactionclassification_Expand, msdyn_orderlineresourcecategory_Select, msdyn_orderlineresourcecategory_Filter, { msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla: msdyn_orderlineresourcecategory_Result[] }>;
  msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction: WebExpand<msdyn_orderlinetransactionclassification_Expand, msdyn_orderlinetransactioncategory_Select, msdyn_orderlinetransactioncategory_Filter, { msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction: msdyn_orderlinetransactioncategory_Result[] }>;
  ownerid: WebExpand<msdyn_orderlinetransactionclassification_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_orderlinetransactionclassification_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_orderlinetransactionclassification_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_orderlinetransactionclassification_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_orderlinetransactionclassification_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_billingtype_formatted?: string;
  msdyn_contractlineid_formatted?: string;
  msdyn_transactionclassification_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_orderlinetransactionclassification_Result extends msdyn_orderlinetransactionclassification_Base, msdyn_orderlinetransactionclassification_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_contractlineid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_orderlinetransactionclassification_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ContractLineId: WebMappingRetrieve<SalesOrderDetail_Select,SalesOrderDetail_Expand,SalesOrderDetail_Filter,SalesOrderDetail_Fixed,SalesOrderDetail_Result,SalesOrderDetail_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_orderlinetransactionclassification_RelatedMany {
  msdyn_orderlinetransactionclassification_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_orderlinetransactionclassification_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_orderlinetransactionclassification_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_orderlinetransactionclassification_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderlinetransactionclassification_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_orderlinetransactionclassification_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_orderlinetransactionclassification_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_orderlinetransactionclassification_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_orderlinetransactionclassification_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla: WebMappingRetrieve<msdyn_orderlineresourcecategory_Select,msdyn_orderlineresourcecategory_Expand,msdyn_orderlineresourcecategory_Filter,msdyn_orderlineresourcecategory_Fixed,msdyn_orderlineresourcecategory_Result,msdyn_orderlineresourcecategory_FormattedResult>;
  msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction: WebMappingRetrieve<msdyn_orderlinetransactioncategory_Select,msdyn_orderlinetransactioncategory_Expand,msdyn_orderlinetransactioncategory_Filter,msdyn_orderlinetransactioncategory_Fixed,msdyn_orderlinetransactioncategory_Result,msdyn_orderlinetransactioncategory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_orderlinetransactionclassifications: WebMappingRetrieve<msdyn_orderlinetransactionclassification_Select,msdyn_orderlinetransactionclassification_Expand,msdyn_orderlinetransactionclassification_Filter,msdyn_orderlinetransactionclassification_Fixed,msdyn_orderlinetransactionclassification_Result,msdyn_orderlinetransactionclassification_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_orderlinetransactionclassifications: WebMappingRelated<msdyn_orderlinetransactionclassification_RelatedOne,msdyn_orderlinetransactionclassification_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_orderlinetransactionclassifications: WebMappingCUDA<msdyn_orderlinetransactionclassification_Create,msdyn_orderlinetransactionclassification_Update,msdyn_orderlinetransactionclassification_Select>;
}
