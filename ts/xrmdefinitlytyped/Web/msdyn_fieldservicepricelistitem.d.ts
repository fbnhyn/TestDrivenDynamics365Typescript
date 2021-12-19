interface msdyn_fieldservicepricelistitem_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_durationroundingpolicy?: msdyn_durationroundingpolicy | null;
  msdyn_durationroundto?: number | null;
  msdyn_fieldservicepricelistitemid?: string | null;
  msdyn_flatfee?: boolean | null;
  msdyn_minimumchargeamount?: number | null;
  msdyn_minimumchargeamount_base?: number | null;
  msdyn_minimumchargeduration?: number | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_fieldservicepricelistitem_statecode | null;
  statuscode?: msdyn_fieldservicepricelistitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_fieldservicepricelistitem_Relationships {
  msdyn_fieldservicepricelistitem_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_fieldservicepricelistitem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_fieldservicepricelistitem_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_fieldservicepricelistitem_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_fieldservicepricelistitem_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_fieldservicepricelistitem_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_fieldservicepricelistitem_SyncErrors?: SyncError_Result[] | null;
  msdyn_fieldservicepricelistitem_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_fieldservicepricelistitem extends msdyn_fieldservicepricelistitem_Base, msdyn_fieldservicepricelistitem_Relationships {
  msdyn_pricelist_bind$pricelevels?: string | null;
  msdyn_productservice_bind$products?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_fieldservicepricelistitem_Create extends msdyn_fieldservicepricelistitem {
}
interface msdyn_fieldservicepricelistitem_Update extends msdyn_fieldservicepricelistitem {
}
interface msdyn_fieldservicepricelistitem_Select {
  createdby_guid: WebAttribute<msdyn_fieldservicepricelistitem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_fieldservicepricelistitem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_fieldservicepricelistitem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_fieldservicepricelistitem_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_fieldservicepricelistitem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_fieldservicepricelistitem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_fieldservicepricelistitem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_fieldservicepricelistitem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_durationroundingpolicy: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_durationroundingpolicy: msdyn_durationroundingpolicy | null }, { msdyn_durationroundingpolicy_formatted?: string }>;
  msdyn_durationroundto: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_durationroundto: number | null }, {  }>;
  msdyn_fieldservicepricelistitemid: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_fieldservicepricelistitemid: string | null }, {  }>;
  msdyn_flatfee: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_flatfee: boolean | null }, {  }>;
  msdyn_minimumchargeamount: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_minimumchargeamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_minimumchargeamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_minimumchargeamount_base: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_minimumchargeamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_minimumchargeamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_minimumchargeduration: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_minimumchargeduration: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_productservice_guid: WebAttribute<msdyn_fieldservicepricelistitem_Select, { msdyn_productservice_guid: string | null }, { msdyn_productservice_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_fieldservicepricelistitem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_fieldservicepricelistitem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_fieldservicepricelistitem_Select, { statecode: msdyn_fieldservicepricelistitem_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_fieldservicepricelistitem_Select, { statuscode: msdyn_fieldservicepricelistitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_fieldservicepricelistitem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_fieldservicepricelistitem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_fieldservicepricelistitem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_fieldservicepricelistitem_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_fieldservicepricelistitem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_durationroundingpolicy: msdyn_durationroundingpolicy;
  msdyn_durationroundto: number;
  msdyn_fieldservicepricelistitemid: XQW.Guid;
  msdyn_flatfee: boolean;
  msdyn_minimumchargeamount: number;
  msdyn_minimumchargeamount_base: number;
  msdyn_minimumchargeduration: number;
  msdyn_name: string;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_productservice_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_fieldservicepricelistitem_statecode;
  statuscode: msdyn_fieldservicepricelistitem_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_fieldservicepricelistitem_Expand {
  createdby: WebExpand<msdyn_fieldservicepricelistitem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_fieldservicepricelistitem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_fieldservicepricelistitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_fieldservicepricelistitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_fieldservicepricelistitem_AsyncOperations: WebExpand<msdyn_fieldservicepricelistitem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_fieldservicepricelistitem_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_fieldservicepricelistitem_BulkDeleteFailures: WebExpand<msdyn_fieldservicepricelistitem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_fieldservicepricelistitem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_fieldservicepricelistitem_DuplicateBaseRecord: WebExpand<msdyn_fieldservicepricelistitem_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_fieldservicepricelistitem_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_fieldservicepricelistitem_DuplicateMatchingRecord: WebExpand<msdyn_fieldservicepricelistitem_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_fieldservicepricelistitem_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_fieldservicepricelistitem_MailboxTrackingFolders: WebExpand<msdyn_fieldservicepricelistitem_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_fieldservicepricelistitem_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses: WebExpand<msdyn_fieldservicepricelistitem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_fieldservicepricelistitem_ProcessSession: WebExpand<msdyn_fieldservicepricelistitem_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_fieldservicepricelistitem_ProcessSession: ProcessSession_Result[] }>;
  msdyn_fieldservicepricelistitem_SyncErrors: WebExpand<msdyn_fieldservicepricelistitem_Expand, SyncError_Select, SyncError_Filter, { msdyn_fieldservicepricelistitem_SyncErrors: SyncError_Result[] }>;
  msdyn_fieldservicepricelistitem_UserEntityInstanceDatas: WebExpand<msdyn_fieldservicepricelistitem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_fieldservicepricelistitem_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_pricelist: WebExpand<msdyn_fieldservicepricelistitem_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_pricelist: PriceLevel_Result }>;
  msdyn_productservice: WebExpand<msdyn_fieldservicepricelistitem_Expand, Product_Select, Product_Filter, { msdyn_productservice: Product_Result }>;
  organizationid: WebExpand<msdyn_fieldservicepricelistitem_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<msdyn_fieldservicepricelistitem_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_fieldservicepricelistitem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_durationroundingpolicy_formatted?: string;
  msdyn_minimumchargeamount_base_formatted?: string;
  msdyn_minimumchargeamount_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_productservice_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_fieldservicepricelistitem_Result extends msdyn_fieldservicepricelistitem_Base, msdyn_fieldservicepricelistitem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_productservice_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_fieldservicepricelistitem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_pricelist: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_productservice: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_fieldservicepricelistitem_RelatedMany {
  msdyn_fieldservicepricelistitem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_fieldservicepricelistitem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_fieldservicepricelistitem_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_fieldservicepricelistitem_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_fieldservicepricelistitem_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_fieldservicepricelistitem_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_fieldservicepricelistitem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_fieldservicepricelistitem_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_fieldservicepricelistitems: WebMappingRetrieve<msdyn_fieldservicepricelistitem_Select,msdyn_fieldservicepricelistitem_Expand,msdyn_fieldservicepricelistitem_Filter,msdyn_fieldservicepricelistitem_Fixed,msdyn_fieldservicepricelistitem_Result,msdyn_fieldservicepricelistitem_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_fieldservicepricelistitems: WebMappingRelated<msdyn_fieldservicepricelistitem_RelatedOne,msdyn_fieldservicepricelistitem_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_fieldservicepricelistitems: WebMappingCUDA<msdyn_fieldservicepricelistitem_Create,msdyn_fieldservicepricelistitem_Update,msdyn_fieldservicepricelistitem_Select>;
}
