interface msdyn_resourcecategorypricelevel_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_percent?: number | null;
  msdyn_price?: number | null;
  msdyn_price_base?: number | null;
  msdyn_pricecalculation?: msdyn_pricecalculation | null;
  msdyn_priceinprimaryunit?: number | null;
  msdyn_priceinprimaryunit_base?: number | null;
  msdyn_resourcecategorypricelevelid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_resourcecategorypricelevel_statecode | null;
  statuscode?: msdyn_resourcecategorypricelevel_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_resourcecategorypricelevel_Relationships {
  msdyn_PriceList?: PriceLevel_Result | null;
  msdyn_PrimaryUnit?: UoM_Result | null;
  msdyn_ResourceCategory?: BookableResourceCategory_Result | null;
  msdyn_Unit?: UoM_Result | null;
  msdyn_UnitSchedule?: UoMSchedule_Result | null;
  msdyn_resourcecategorypricelevel_Annotations?: Annotation_Result[] | null;
  msdyn_resourcecategorypricelevel_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_resourcecategorypricelevel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_resourcecategorypricelevel_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourcecategorypricelevel_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_resourcecategorypricelevel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_resourcecategorypricelevel_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_resourcecategorypricelevel_SyncErrors?: SyncError_Result[] | null;
  msdyn_resourcecategorypricelevel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_resourcecategorypricelevel extends msdyn_resourcecategorypricelevel_Base, msdyn_resourcecategorypricelevel_Relationships {
  msdyn_PriceList_bind$pricelevels?: string | null;
  msdyn_PrimaryUnit_bind$uoms?: string | null;
  msdyn_ResourceCategory_bind$bookableresourcecategories?: string | null;
  msdyn_UnitSchedule_bind$uomschedules?: string | null;
  msdyn_Unit_bind$uoms?: string | null;
  msdyn_bookableresource_bind$bookableresources?: string | null;
  msdyn_organizationalunit_bind$msdyn_organizationalunits?: string | null;
  msdyn_transactioncategory_bind$msdyn_transactioncategories?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_resourcecategorypricelevel_Create extends msdyn_resourcecategorypricelevel {
}
interface msdyn_resourcecategorypricelevel_Update extends msdyn_resourcecategorypricelevel {
}
interface msdyn_resourcecategorypricelevel_Select {
  createdby_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_resourcecategorypricelevel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_resourcecategorypricelevel_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_resourcecategorypricelevel_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_resourcecategorypricelevel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresource_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_bookableresource_guid: string | null }, { msdyn_bookableresource_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_description: string | null }, {  }>;
  msdyn_organizationalunit_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_organizationalunit_guid: string | null }, { msdyn_organizationalunit_formatted?: string }>;
  msdyn_percent: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_percent: number | null }, {  }>;
  msdyn_price: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_price: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_price_base: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_price_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_pricecalculation: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_pricecalculation: msdyn_pricecalculation | null }, { msdyn_pricecalculation_formatted?: string }>;
  msdyn_priceinprimaryunit: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_priceinprimaryunit: number | null; transactioncurrencyid_guid: string | null }, { msdyn_priceinprimaryunit_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_priceinprimaryunit_base: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_priceinprimaryunit_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_priceinprimaryunit_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_primaryunit_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_primaryunit_guid: string | null }, { msdyn_primaryunit_formatted?: string }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_resourcecategorypricelevelid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_resourcecategorypricelevelid: string | null }, {  }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  msdyn_unit_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitschedule_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { msdyn_unitschedule_guid: string | null }, { msdyn_unitschedule_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_resourcecategorypricelevel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_resourcecategorypricelevel_Select, { statecode: msdyn_resourcecategorypricelevel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_resourcecategorypricelevel_Select, { statuscode: msdyn_resourcecategorypricelevel_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_resourcecategorypricelevel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_resourcecategorypricelevel_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_resourcecategorypricelevel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_resourcecategorypricelevel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_resourcecategorypricelevel_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresource_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_organizationalunit_guid: XQW.Guid;
  msdyn_percent: any;
  msdyn_price: number;
  msdyn_price_base: number;
  msdyn_pricecalculation: msdyn_pricecalculation;
  msdyn_priceinprimaryunit: number;
  msdyn_priceinprimaryunit_base: number;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_primaryunit_guid: XQW.Guid;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_resourcecategorypricelevelid: XQW.Guid;
  msdyn_transactioncategory_guid: XQW.Guid;
  msdyn_unit_guid: XQW.Guid;
  msdyn_unitschedule_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_resourcecategorypricelevel_statecode;
  statuscode: msdyn_resourcecategorypricelevel_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_resourcecategorypricelevel_Expand {
  createdby: WebExpand<msdyn_resourcecategorypricelevel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_resourcecategorypricelevel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_resourcecategorypricelevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_resourcecategorypricelevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PriceList: WebExpand<msdyn_resourcecategorypricelevel_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_PriceList: PriceLevel_Result }>;
  msdyn_PrimaryUnit: WebExpand<msdyn_resourcecategorypricelevel_Expand, UoM_Select, UoM_Filter, { msdyn_PrimaryUnit: UoM_Result }>;
  msdyn_ResourceCategory: WebExpand<msdyn_resourcecategorypricelevel_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_ResourceCategory: BookableResourceCategory_Result }>;
  msdyn_Unit: WebExpand<msdyn_resourcecategorypricelevel_Expand, UoM_Select, UoM_Filter, { msdyn_Unit: UoM_Result }>;
  msdyn_UnitSchedule: WebExpand<msdyn_resourcecategorypricelevel_Expand, UoMSchedule_Select, UoMSchedule_Filter, { msdyn_UnitSchedule: UoMSchedule_Result }>;
  msdyn_bookableresource: WebExpand<msdyn_resourcecategorypricelevel_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresource: BookableResource_Result }>;
  msdyn_organizationalunit: WebExpand<msdyn_resourcecategorypricelevel_Expand, msdyn_organizationalunit_Select, msdyn_organizationalunit_Filter, { msdyn_organizationalunit: msdyn_organizationalunit_Result }>;
  msdyn_resourcecategorypricelevel_Annotations: WebExpand<msdyn_resourcecategorypricelevel_Expand, Annotation_Select, Annotation_Filter, { msdyn_resourcecategorypricelevel_Annotations: Annotation_Result[] }>;
  msdyn_resourcecategorypricelevel_AsyncOperations: WebExpand<msdyn_resourcecategorypricelevel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_resourcecategorypricelevel_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_resourcecategorypricelevel_BulkDeleteFailures: WebExpand<msdyn_resourcecategorypricelevel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_resourcecategorypricelevel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_resourcecategorypricelevel_DuplicateBaseRecord: WebExpand<msdyn_resourcecategorypricelevel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourcecategorypricelevel_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_resourcecategorypricelevel_DuplicateMatchingRecord: WebExpand<msdyn_resourcecategorypricelevel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_resourcecategorypricelevel_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_resourcecategorypricelevel_MailboxTrackingFolders: WebExpand<msdyn_resourcecategorypricelevel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_resourcecategorypricelevel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses: WebExpand<msdyn_resourcecategorypricelevel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_resourcecategorypricelevel_ProcessSession: WebExpand<msdyn_resourcecategorypricelevel_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_resourcecategorypricelevel_ProcessSession: ProcessSession_Result[] }>;
  msdyn_resourcecategorypricelevel_SyncErrors: WebExpand<msdyn_resourcecategorypricelevel_Expand, SyncError_Select, SyncError_Filter, { msdyn_resourcecategorypricelevel_SyncErrors: SyncError_Result[] }>;
  msdyn_resourcecategorypricelevel_UserEntityInstanceDatas: WebExpand<msdyn_resourcecategorypricelevel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_resourcecategorypricelevel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_transactioncategory: WebExpand<msdyn_resourcecategorypricelevel_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_transactioncategory: msdyn_transactioncategory_Result }>;
  organizationid: WebExpand<msdyn_resourcecategorypricelevel_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<msdyn_resourcecategorypricelevel_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_resourcecategorypricelevel_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresource_formatted?: string;
  msdyn_organizationalunit_formatted?: string;
  msdyn_price_base_formatted?: string;
  msdyn_price_formatted?: string;
  msdyn_pricecalculation_formatted?: string;
  msdyn_priceinprimaryunit_base_formatted?: string;
  msdyn_priceinprimaryunit_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_primaryunit_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_unitschedule_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_resourcecategorypricelevel_Result extends msdyn_resourcecategorypricelevel_Base, msdyn_resourcecategorypricelevel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresource_guid: string | null;
  msdyn_organizationalunit_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_primaryunit_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  msdyn_unit_guid: string | null;
  msdyn_unitschedule_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_resourcecategorypricelevel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PriceList: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_PrimaryUnit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_ResourceCategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  msdyn_Unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_UnitSchedule: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
  msdyn_bookableresource: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_organizationalunit: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
  msdyn_transactioncategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_resourcecategorypricelevel_RelatedMany {
  msdyn_resourcecategorypricelevel_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_resourcecategorypricelevel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_resourcecategorypricelevel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_resourcecategorypricelevel_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourcecategorypricelevel_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_resourcecategorypricelevel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_resourcecategorypricelevel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_resourcecategorypricelevel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_resourcecategorypricelevel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_resourcecategorypricelevel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_resourcecategorypricelevels: WebMappingRetrieve<msdyn_resourcecategorypricelevel_Select,msdyn_resourcecategorypricelevel_Expand,msdyn_resourcecategorypricelevel_Filter,msdyn_resourcecategorypricelevel_Fixed,msdyn_resourcecategorypricelevel_Result,msdyn_resourcecategorypricelevel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_resourcecategorypricelevels: WebMappingRelated<msdyn_resourcecategorypricelevel_RelatedOne,msdyn_resourcecategorypricelevel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_resourcecategorypricelevels: WebMappingCUDA<msdyn_resourcecategorypricelevel_Create,msdyn_resourcecategorypricelevel_Update,msdyn_resourcecategorypricelevel_Select>;
}
