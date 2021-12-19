interface LeadAddress_Base extends WebEntity {
  addressnumber?: number | null;
  addresstypecode?: leadaddress_addresstypecode | null;
  city?: string | null;
  composite?: string | null;
  country?: string | null;
  county?: string | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  fax?: string | null;
  importsequencenumber?: number | null;
  latitude?: number | null;
  leadaddressid?: string | null;
  line1?: string | null;
  line2?: string | null;
  line3?: string | null;
  longitude?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  ownerid?: string | null;
  owningbusinessunit?: string | null;
  postalcode?: string | null;
  postofficebox?: string | null;
  shippingmethodcode?: leadaddress_shippingmethodcode | null;
  stateorprovince?: string | null;
  telephone1?: string | null;
  telephone2?: string | null;
  telephone3?: string | null;
  timezoneruleversionnumber?: number | null;
  upszone?: string | null;
  utcconversiontimezonecode?: number | null;
  utcoffset?: number | null;
  versionnumber?: number | null;
}
interface LeadAddress_Relationships {
  LeadAddress_SyncErrors?: SyncError_Result[] | null;
  leadaddress_AsyncOperations?: AsyncOperation_Result[] | null;
  leadaddress_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  leadaddress_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  leadaddress_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_leadaddress?: UserEntityInstanceData_Result[] | null;
}
interface LeadAddress extends LeadAddress_Base, LeadAddress_Relationships {
  parentid_bind$leads?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface LeadAddress_Create extends LeadAddress {
}
interface LeadAddress_Update extends LeadAddress {
}
interface LeadAddress_Select {
  addressnumber: WebAttribute<LeadAddress_Select, { addressnumber: number | null }, {  }>;
  addresstypecode: WebAttribute<LeadAddress_Select, { addresstypecode: leadaddress_addresstypecode | null }, { addresstypecode_formatted?: string }>;
  city: WebAttribute<LeadAddress_Select, { city: string | null }, {  }>;
  composite: WebAttribute<LeadAddress_Select, { composite: string | null }, {  }>;
  country: WebAttribute<LeadAddress_Select, { country: string | null }, {  }>;
  county: WebAttribute<LeadAddress_Select, { county: string | null }, {  }>;
  createdby_guid: WebAttribute<LeadAddress_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<LeadAddress_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<LeadAddress_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<LeadAddress_Select, { exchangerate: number | null }, {  }>;
  fax: WebAttribute<LeadAddress_Select, { fax: string | null }, {  }>;
  importsequencenumber: WebAttribute<LeadAddress_Select, { importsequencenumber: number | null }, {  }>;
  latitude: WebAttribute<LeadAddress_Select, { latitude: number | null }, {  }>;
  leadaddressid: WebAttribute<LeadAddress_Select, { leadaddressid: string | null }, {  }>;
  line1: WebAttribute<LeadAddress_Select, { line1: string | null }, {  }>;
  line2: WebAttribute<LeadAddress_Select, { line2: string | null }, {  }>;
  line3: WebAttribute<LeadAddress_Select, { line3: string | null }, {  }>;
  longitude: WebAttribute<LeadAddress_Select, { longitude: number | null }, {  }>;
  modifiedby_guid: WebAttribute<LeadAddress_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<LeadAddress_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<LeadAddress_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<LeadAddress_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<LeadAddress_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid: WebAttribute<LeadAddress_Select, { ownerid: string | null }, {  }>;
  owningbusinessunit: WebAttribute<LeadAddress_Select, { owningbusinessunit: string | null }, {  }>;
  parentid_guid: WebAttribute<LeadAddress_Select, { parentid_guid: string | null }, { parentid_formatted?: string }>;
  postalcode: WebAttribute<LeadAddress_Select, { postalcode: string | null }, {  }>;
  postofficebox: WebAttribute<LeadAddress_Select, { postofficebox: string | null }, {  }>;
  shippingmethodcode: WebAttribute<LeadAddress_Select, { shippingmethodcode: leadaddress_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  stateorprovince: WebAttribute<LeadAddress_Select, { stateorprovince: string | null }, {  }>;
  telephone1: WebAttribute<LeadAddress_Select, { telephone1: string | null }, {  }>;
  telephone2: WebAttribute<LeadAddress_Select, { telephone2: string | null }, {  }>;
  telephone3: WebAttribute<LeadAddress_Select, { telephone3: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<LeadAddress_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<LeadAddress_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  upszone: WebAttribute<LeadAddress_Select, { upszone: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<LeadAddress_Select, { utcconversiontimezonecode: number | null }, {  }>;
  utcoffset: WebAttribute<LeadAddress_Select, { utcoffset: number | null }, {  }>;
  versionnumber: WebAttribute<LeadAddress_Select, { versionnumber: number | null }, {  }>;
}
interface LeadAddress_Filter {
  addressnumber: number;
  addresstypecode: leadaddress_addresstypecode;
  city: string;
  composite: string;
  country: string;
  county: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  fax: string;
  importsequencenumber: number;
  latitude: number;
  leadaddressid: XQW.Guid;
  line1: string;
  line2: string;
  line3: string;
  longitude: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  parentid_guid: XQW.Guid;
  postalcode: string;
  postofficebox: string;
  shippingmethodcode: leadaddress_shippingmethodcode;
  stateorprovince: string;
  telephone1: string;
  telephone2: string;
  telephone3: string;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  upszone: string;
  utcconversiontimezonecode: number;
  utcoffset: number;
  versionnumber: number;
}
interface LeadAddress_Expand {
  LeadAddress_SyncErrors: WebExpand<LeadAddress_Expand, SyncError_Select, SyncError_Filter, { LeadAddress_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<LeadAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<LeadAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  leadaddress_AsyncOperations: WebExpand<LeadAddress_Expand, AsyncOperation_Select, AsyncOperation_Filter, { leadaddress_AsyncOperations: AsyncOperation_Result[] }>;
  leadaddress_BulkDeleteFailures: WebExpand<LeadAddress_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { leadaddress_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  leadaddress_MailboxTrackingFolders: WebExpand<LeadAddress_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { leadaddress_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  leadaddress_PrincipalObjectAttributeAccesses: WebExpand<LeadAddress_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { leadaddress_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<LeadAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<LeadAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  parentid: WebExpand<LeadAddress_Expand, Lead_Select, Lead_Filter, { parentid: Lead_Result }>;
  transactioncurrencyid: WebExpand<LeadAddress_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_leadaddress: WebExpand<LeadAddress_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_leadaddress: UserEntityInstanceData_Result[] }>;
}
interface LeadAddress_FormattedResult {
  addresstypecode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  parentid_formatted?: string;
  shippingmethodcode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface LeadAddress_Result extends LeadAddress_Base, LeadAddress_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  parentid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface LeadAddress_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentid: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface LeadAddress_RelatedMany {
  LeadAddress_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  leadaddress_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  leadaddress_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  leadaddress_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  leadaddress_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_leadaddress: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  leadaddresses: WebMappingRetrieve<LeadAddress_Select,LeadAddress_Expand,LeadAddress_Filter,LeadAddress_Fixed,LeadAddress_Result,LeadAddress_FormattedResult>;
}
interface WebEntitiesRelated {
  leadaddresses: WebMappingRelated<LeadAddress_RelatedOne,LeadAddress_RelatedMany>;
}
interface WebEntitiesCUDA {
  leadaddresses: WebMappingCUDA<LeadAddress_Create,LeadAddress_Update,LeadAddress_Select>;
}
