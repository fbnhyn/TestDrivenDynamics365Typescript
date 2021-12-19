interface msdyn_resourcecategorymarkuppricelevel_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_percent?: number | null;
  msdyn_pricecalculation?: msdyn_pricecalculation | null;
  msdyn_resourcecategorymarkuppricelevelid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_resourcecategorymarkuppricelevel_statecode | null;
  statuscode?: msdyn_resourcecategorymarkuppricelevel_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_resourcecategorymarkuppricelevel_Relationships {
  msdyn_resourcecategorymarkuppricelevel_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_resourcecategorymarkuppricelevel_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_resourcecategorymarkuppricelevel_SyncErrors?: SyncError_Result[] | null;
  msdyn_resourcecategorymarkuppricelevel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_resourcecategorymarkuppricelevel extends msdyn_resourcecategorymarkuppricelevel_Base, msdyn_resourcecategorymarkuppricelevel_Relationships {
  msdyn_bookableresource_bind$bookableresources?: string | null;
  msdyn_organizationalunit_bind$msdyn_organizationalunits?: string | null;
  msdyn_pricelist_bind$pricelevels?: string | null;
  msdyn_resourcecategory_bind$bookableresourcecategories?: string | null;
  msdyn_transactioncategory_bind$msdyn_transactioncategories?: string | null;
}
interface msdyn_resourcecategorymarkuppricelevel_Create extends msdyn_resourcecategorymarkuppricelevel {
}
interface msdyn_resourcecategorymarkuppricelevel_Update extends msdyn_resourcecategorymarkuppricelevel {
}
interface msdyn_resourcecategorymarkuppricelevel_Select {
  createdby_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { msdyn_description: string | null }, {  }>;
  msdyn_organizationalunit_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { msdyn_organizationalunit_guid: string | null }, { msdyn_organizationalunit_formatted?: string }>;
  msdyn_percent: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { msdyn_percent: number | null }, {  }>;
  msdyn_pricecalculation: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { msdyn_pricecalculation: msdyn_pricecalculation | null }, { msdyn_pricecalculation_formatted?: string }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_resourcecategorymarkuppricelevelid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { msdyn_resourcecategorymarkuppricelevelid: string | null }, {  }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { statecode: msdyn_resourcecategorymarkuppricelevel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { statuscode: msdyn_resourcecategorymarkuppricelevel_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourcecategorymarkuppricelevel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourcecategorymarkuppricelevel_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_organizationalunit_guid: XQW.Guid;
  msdyn_percent: any;
  msdyn_pricecalculation: msdyn_pricecalculation;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_resourcecategorymarkuppricelevelid: XQW.Guid;
  msdyn_transactioncategory_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_resourcecategorymarkuppricelevel_statecode;
  statuscode: msdyn_resourcecategorymarkuppricelevel_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_resourcecategorymarkuppricelevel_Expand {
  createdby: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_bookableresource: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresource: BookableResource_Result }>;
  msdyn_organizationalunit: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, msdyn_organizationalunit_Select, msdyn_organizationalunit_Filter, { msdyn_organizationalunit: msdyn_organizationalunit_Result }>;
  msdyn_pricelist: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_pricelist: PriceLevel_Result }>;
  msdyn_resourcecategory: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_resourcecategory: BookableResourceCategory_Result }>;
  msdyn_resourcecategorymarkuppricelevel_AsyncOperations: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_resourcecategorymarkuppricelevel_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_resourcecategorymarkuppricelevel_ProcessSession: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_resourcecategorymarkuppricelevel_ProcessSession: ProcessSession_Result[] }>;
  msdyn_resourcecategorymarkuppricelevel_SyncErrors: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, SyncError_Select, SyncError_Filter, { msdyn_resourcecategorymarkuppricelevel_SyncErrors: SyncError_Result[] }>;
  msdyn_resourcecategorymarkuppricelevel_UserEntityInstanceDatas: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_resourcecategorymarkuppricelevel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_transactioncategory: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_transactioncategory: msdyn_transactioncategory_Result }>;
  organizationid: WebExpand<msdyn_resourcecategorymarkuppricelevel_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_resourcecategorymarkuppricelevel_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_organizationalunit_formatted?: string;
  msdyn_pricecalculation_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_resourcecategorymarkuppricelevel_Result extends msdyn_resourcecategorymarkuppricelevel_Base, msdyn_resourcecategorymarkuppricelevel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_organizationalunit_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_resourcecategorymarkuppricelevel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_organizationalunit: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
  msdyn_pricelist: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_resourcecategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  msdyn_transactioncategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_resourcecategorymarkuppricelevel_RelatedMany {
  msdyn_resourcecategorymarkuppricelevel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_resourcecategorymarkuppricelevel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_resourcecategorymarkuppricelevel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_resourcecategorymarkuppricelevel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourcecategorymarkuppricelevels: WebMappingRetrieve<msdyn_resourcecategorymarkuppricelevel_Select,msdyn_resourcecategorymarkuppricelevel_Expand,msdyn_resourcecategorymarkuppricelevel_Filter,msdyn_resourcecategorymarkuppricelevel_Fixed,msdyn_resourcecategorymarkuppricelevel_Result,msdyn_resourcecategorymarkuppricelevel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourcecategorymarkuppricelevels: WebMappingRelated<msdyn_resourcecategorymarkuppricelevel_RelatedOne,msdyn_resourcecategorymarkuppricelevel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourcecategorymarkuppricelevels: WebMappingCUDA<msdyn_resourcecategorymarkuppricelevel_Create,msdyn_resourcecategorymarkuppricelevel_Update,msdyn_resourcecategorymarkuppricelevel_Select>;
}
