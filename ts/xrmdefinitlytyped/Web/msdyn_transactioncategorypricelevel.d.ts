interface msdyn_transactioncategorypricelevel_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_percent?: number | null;
  msdyn_price?: number | null;
  msdyn_price_base?: number | null;
  msdyn_pricecalculation?: msdyn_pricecalculation | null;
  msdyn_transactioncategorypricelevelid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_transactioncategorypricelevel_statecode | null;
  statuscode?: msdyn_transactioncategorypricelevel_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_transactioncategorypricelevel_Relationships {
  msdyn_PriceList?: PriceLevel_Result | null;
  msdyn_TransactionCategory?: msdyn_transactioncategory_Result | null;
  msdyn_Unit?: UoM_Result | null;
  msdyn_UnitSchedule?: UoMSchedule_Result | null;
  msdyn_transactioncategorypricelevel_Annotations?: Annotation_Result[] | null;
  msdyn_transactioncategorypricelevel_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_transactioncategorypricelevel_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_transactioncategorypricelevel_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactioncategorypricelevel_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactioncategorypricelevel_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_transactioncategorypricelevel_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_transactioncategorypricelevel_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_transactioncategorypricelevel_SyncErrors?: SyncError_Result[] | null;
  msdyn_transactioncategorypricelevel_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_transactioncategorypricelevel extends msdyn_transactioncategorypricelevel_Base, msdyn_transactioncategorypricelevel_Relationships {
  msdyn_PriceList_bind$pricelevels?: string | null;
  msdyn_TransactionCategory_bind$msdyn_transactioncategories?: string | null;
  msdyn_UnitSchedule_bind$uomschedules?: string | null;
  msdyn_Unit_bind$uoms?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_transactioncategorypricelevel_Create extends msdyn_transactioncategorypricelevel {
}
interface msdyn_transactioncategorypricelevel_Update extends msdyn_transactioncategorypricelevel {
}
interface msdyn_transactioncategorypricelevel_Select {
  createdby_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_transactioncategorypricelevel_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_transactioncategorypricelevel_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_transactioncategorypricelevel_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_transactioncategorypricelevel_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_description: string | null }, {  }>;
  msdyn_percent: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_percent: number | null }, {  }>;
  msdyn_price: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_price: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_price_base: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_price_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_price_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_pricecalculation: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_pricecalculation: msdyn_pricecalculation | null }, { msdyn_pricecalculation_formatted?: string }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_transactioncategory_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_transactioncategory_guid: string | null }, { msdyn_transactioncategory_formatted?: string }>;
  msdyn_transactioncategorypricelevelid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_transactioncategorypricelevelid: string | null }, {  }>;
  msdyn_unit_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitschedule_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { msdyn_unitschedule_guid: string | null }, { msdyn_unitschedule_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_transactioncategorypricelevel_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_transactioncategorypricelevel_Select, { statecode: msdyn_transactioncategorypricelevel_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_transactioncategorypricelevel_Select, { statuscode: msdyn_transactioncategorypricelevel_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_transactioncategorypricelevel_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_transactioncategorypricelevel_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_transactioncategorypricelevel_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_transactioncategorypricelevel_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_transactioncategorypricelevel_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_percent: any;
  msdyn_price: number;
  msdyn_price_base: number;
  msdyn_pricecalculation: msdyn_pricecalculation;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_transactioncategory_guid: XQW.Guid;
  msdyn_transactioncategorypricelevelid: XQW.Guid;
  msdyn_unit_guid: XQW.Guid;
  msdyn_unitschedule_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_transactioncategorypricelevel_statecode;
  statuscode: msdyn_transactioncategorypricelevel_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_transactioncategorypricelevel_Expand {
  createdby: WebExpand<msdyn_transactioncategorypricelevel_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_transactioncategorypricelevel_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_transactioncategorypricelevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_transactioncategorypricelevel_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_PriceList: WebExpand<msdyn_transactioncategorypricelevel_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_PriceList: PriceLevel_Result }>;
  msdyn_TransactionCategory: WebExpand<msdyn_transactioncategorypricelevel_Expand, msdyn_transactioncategory_Select, msdyn_transactioncategory_Filter, { msdyn_TransactionCategory: msdyn_transactioncategory_Result }>;
  msdyn_Unit: WebExpand<msdyn_transactioncategorypricelevel_Expand, UoM_Select, UoM_Filter, { msdyn_Unit: UoM_Result }>;
  msdyn_UnitSchedule: WebExpand<msdyn_transactioncategorypricelevel_Expand, UoMSchedule_Select, UoMSchedule_Filter, { msdyn_UnitSchedule: UoMSchedule_Result }>;
  msdyn_transactioncategorypricelevel_Annotations: WebExpand<msdyn_transactioncategorypricelevel_Expand, Annotation_Select, Annotation_Filter, { msdyn_transactioncategorypricelevel_Annotations: Annotation_Result[] }>;
  msdyn_transactioncategorypricelevel_AsyncOperations: WebExpand<msdyn_transactioncategorypricelevel_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_transactioncategorypricelevel_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_transactioncategorypricelevel_BulkDeleteFailures: WebExpand<msdyn_transactioncategorypricelevel_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_transactioncategorypricelevel_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_transactioncategorypricelevel_DuplicateBaseRecord: WebExpand<msdyn_transactioncategorypricelevel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactioncategorypricelevel_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_transactioncategorypricelevel_DuplicateMatchingRecord: WebExpand<msdyn_transactioncategorypricelevel_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactioncategorypricelevel_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_transactioncategorypricelevel_MailboxTrackingFolders: WebExpand<msdyn_transactioncategorypricelevel_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_transactioncategorypricelevel_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_transactioncategorypricelevel_PrincipalObjectAttributeAccesses: WebExpand<msdyn_transactioncategorypricelevel_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_transactioncategorypricelevel_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_transactioncategorypricelevel_ProcessSession: WebExpand<msdyn_transactioncategorypricelevel_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_transactioncategorypricelevel_ProcessSession: ProcessSession_Result[] }>;
  msdyn_transactioncategorypricelevel_SyncErrors: WebExpand<msdyn_transactioncategorypricelevel_Expand, SyncError_Select, SyncError_Filter, { msdyn_transactioncategorypricelevel_SyncErrors: SyncError_Result[] }>;
  msdyn_transactioncategorypricelevel_UserEntityInstanceDatas: WebExpand<msdyn_transactioncategorypricelevel_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_transactioncategorypricelevel_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_transactioncategorypricelevel_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<msdyn_transactioncategorypricelevel_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_transactioncategorypricelevel_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_price_base_formatted?: string;
  msdyn_price_formatted?: string;
  msdyn_pricecalculation_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_transactioncategory_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_unitschedule_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_transactioncategorypricelevel_Result extends msdyn_transactioncategorypricelevel_Base, msdyn_transactioncategorypricelevel_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_transactioncategory_guid: string | null;
  msdyn_unit_guid: string | null;
  msdyn_unitschedule_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_transactioncategorypricelevel_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_PriceList: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_TransactionCategory: WebMappingRetrieve<msdyn_transactioncategory_Select,msdyn_transactioncategory_Expand,msdyn_transactioncategory_Filter,msdyn_transactioncategory_Fixed,msdyn_transactioncategory_Result,msdyn_transactioncategory_FormattedResult>;
  msdyn_Unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  msdyn_UnitSchedule: WebMappingRetrieve<UoMSchedule_Select,UoMSchedule_Expand,UoMSchedule_Filter,UoMSchedule_Fixed,UoMSchedule_Result,UoMSchedule_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_transactioncategorypricelevel_RelatedMany {
  msdyn_transactioncategorypricelevel_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_transactioncategorypricelevel_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_transactioncategorypricelevel_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_transactioncategorypricelevel_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactioncategorypricelevel_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactioncategorypricelevel_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_transactioncategorypricelevel_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_transactioncategorypricelevel_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_transactioncategorypricelevel_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_transactioncategorypricelevel_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_transactioncategorypricelevels: WebMappingRetrieve<msdyn_transactioncategorypricelevel_Select,msdyn_transactioncategorypricelevel_Expand,msdyn_transactioncategorypricelevel_Filter,msdyn_transactioncategorypricelevel_Fixed,msdyn_transactioncategorypricelevel_Result,msdyn_transactioncategorypricelevel_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_transactioncategorypricelevels: WebMappingRelated<msdyn_transactioncategorypricelevel_RelatedOne,msdyn_transactioncategorypricelevel_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_transactioncategorypricelevels: WebMappingCUDA<msdyn_transactioncategorypricelevel_Create,msdyn_transactioncategorypricelevel_Update,msdyn_transactioncategorypricelevel_Select>;
}
