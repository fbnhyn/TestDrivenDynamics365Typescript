interface BookableResourceCategoryAssn_Base extends WebEntity {
  bookableresourcecategoryassnid?: string | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_isdefault?: boolean | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: bookableresourcecategoryassn_statecode | null;
  statuscode?: bookableresourcecategoryassn_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface BookableResourceCategoryAssn_Relationships {
  BookableResourceCategoryAssn_SyncErrors?: SyncError_Result[] | null;
  Resource?: BookableResource_Result | null;
  ResourceCategory?: BookableResourceCategory_Result | null;
  bookableresourcecategoryassn_Annotations?: Annotation_Result[] | null;
  bookableresourcecategoryassn_AsyncOperations?: AsyncOperation_Result[] | null;
  bookableresourcecategoryassn_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  bookableresourcecategoryassn_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  bookableresourcecategoryassn_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  bookableresourcecategoryassn_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  bookableresourcecategoryassn_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  bookableresourcecategoryassn_ProcessSession?: ProcessSession_Result[] | null;
  bookableresourcecategoryassn_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
}
interface BookableResourceCategoryAssn extends BookableResourceCategoryAssn_Base, BookableResourceCategoryAssn_Relationships {
  ResourceCategory_bind$bookableresourcecategories?: string | null;
  Resource_bind$bookableresources?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface BookableResourceCategoryAssn_Create extends BookableResourceCategoryAssn {
}
interface BookableResourceCategoryAssn_Update extends BookableResourceCategoryAssn {
}
interface BookableResourceCategoryAssn_Select {
  bookableresourcecategoryassnid: WebAttribute<BookableResourceCategoryAssn_Select, { bookableresourcecategoryassnid: string | null }, {  }>;
  createdby_guid: WebAttribute<BookableResourceCategoryAssn_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BookableResourceCategoryAssn_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BookableResourceCategoryAssn_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<BookableResourceCategoryAssn_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<BookableResourceCategoryAssn_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<BookableResourceCategoryAssn_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BookableResourceCategoryAssn_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BookableResourceCategoryAssn_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_isdefault: WebAttribute<BookableResourceCategoryAssn_Select, { msdyn_isdefault: boolean | null }, {  }>;
  name: WebAttribute<BookableResourceCategoryAssn_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<BookableResourceCategoryAssn_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<BookableResourceCategoryAssn_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BookableResourceCategoryAssn_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<BookableResourceCategoryAssn_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<BookableResourceCategoryAssn_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  resource_guid: WebAttribute<BookableResourceCategoryAssn_Select, { resource_guid: string | null }, { resource_formatted?: string }>;
  resourcecategory_guid: WebAttribute<BookableResourceCategoryAssn_Select, { resourcecategory_guid: string | null }, { resourcecategory_formatted?: string }>;
  statecode: WebAttribute<BookableResourceCategoryAssn_Select, { statecode: bookableresourcecategoryassn_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BookableResourceCategoryAssn_Select, { statuscode: bookableresourcecategoryassn_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<BookableResourceCategoryAssn_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<BookableResourceCategoryAssn_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<BookableResourceCategoryAssn_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<BookableResourceCategoryAssn_Select, { versionnumber: number | null }, {  }>;
}
interface BookableResourceCategoryAssn_Filter {
  bookableresourcecategoryassnid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_isdefault: boolean;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  resource_guid: XQW.Guid;
  resourcecategory_guid: XQW.Guid;
  statecode: bookableresourcecategoryassn_statecode;
  statuscode: bookableresourcecategoryassn_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface BookableResourceCategoryAssn_Expand {
  BookableResourceCategoryAssn_SyncErrors: WebExpand<BookableResourceCategoryAssn_Expand, SyncError_Select, SyncError_Filter, { BookableResourceCategoryAssn_SyncErrors: SyncError_Result[] }>;
  Resource: WebExpand<BookableResourceCategoryAssn_Expand, BookableResource_Select, BookableResource_Filter, { Resource: BookableResource_Result }>;
  ResourceCategory: WebExpand<BookableResourceCategoryAssn_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { ResourceCategory: BookableResourceCategory_Result }>;
  bookableresourcecategoryassn_Annotations: WebExpand<BookableResourceCategoryAssn_Expand, Annotation_Select, Annotation_Filter, { bookableresourcecategoryassn_Annotations: Annotation_Result[] }>;
  bookableresourcecategoryassn_AsyncOperations: WebExpand<BookableResourceCategoryAssn_Expand, AsyncOperation_Select, AsyncOperation_Filter, { bookableresourcecategoryassn_AsyncOperations: AsyncOperation_Result[] }>;
  bookableresourcecategoryassn_BulkDeleteFailures: WebExpand<BookableResourceCategoryAssn_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { bookableresourcecategoryassn_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  bookableresourcecategoryassn_DuplicateBaseRecord: WebExpand<BookableResourceCategoryAssn_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcecategoryassn_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  bookableresourcecategoryassn_DuplicateMatchingRecord: WebExpand<BookableResourceCategoryAssn_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { bookableresourcecategoryassn_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  bookableresourcecategoryassn_MailboxTrackingFolders: WebExpand<BookableResourceCategoryAssn_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { bookableresourcecategoryassn_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  bookableresourcecategoryassn_PrincipalObjectAttributeAccesses: WebExpand<BookableResourceCategoryAssn_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { bookableresourcecategoryassn_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  bookableresourcecategoryassn_ProcessSession: WebExpand<BookableResourceCategoryAssn_Expand, ProcessSession_Select, ProcessSession_Filter, { bookableresourcecategoryassn_ProcessSession: ProcessSession_Result[] }>;
  bookableresourcecategoryassn_UserEntityInstanceDatas: WebExpand<BookableResourceCategoryAssn_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { bookableresourcecategoryassn_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdbyname: WebExpand<BookableResourceCategoryAssn_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<BookableResourceCategoryAssn_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<BookableResourceCategoryAssn_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<BookableResourceCategoryAssn_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  ownerid: WebExpand<BookableResourceCategoryAssn_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<BookableResourceCategoryAssn_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<BookableResourceCategoryAssn_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<BookableResourceCategoryAssn_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<BookableResourceCategoryAssn_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface BookableResourceCategoryAssn_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  resource_formatted?: string;
  resourcecategory_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface BookableResourceCategoryAssn_Result extends BookableResourceCategoryAssn_Base, BookableResourceCategoryAssn_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  resource_guid: string | null;
  resourcecategory_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface BookableResourceCategoryAssn_RelatedOne {
  Resource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  ResourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface BookableResourceCategoryAssn_RelatedMany {
  BookableResourceCategoryAssn_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  bookableresourcecategoryassn_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  bookableresourcecategoryassn_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  bookableresourcecategoryassn_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  bookableresourcecategoryassn_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcecategoryassn_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  bookableresourcecategoryassn_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  bookableresourcecategoryassn_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  bookableresourcecategoryassn_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  bookableresourcecategoryassn_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bookableresourcecategoryassns: WebMappingRetrieve<BookableResourceCategoryAssn_Select,BookableResourceCategoryAssn_Expand,BookableResourceCategoryAssn_Filter,BookableResourceCategoryAssn_Fixed,BookableResourceCategoryAssn_Result,BookableResourceCategoryAssn_FormattedResult>;
}
interface WebEntitiesRelated {
  bookableresourcecategoryassns: WebMappingRelated<BookableResourceCategoryAssn_RelatedOne,BookableResourceCategoryAssn_RelatedMany>;
}
interface WebEntitiesCUDA {
  bookableresourcecategoryassns: WebMappingCUDA<BookableResourceCategoryAssn_Create,BookableResourceCategoryAssn_Update,BookableResourceCategoryAssn_Select>;
}
