interface CustomerAddress_Base extends WebEntity {
  addressnumber?: number | null;
  addresstypecode?: customeraddress_addresstypecode | null;
  city?: string | null;
  composite?: string | null;
  country?: string | null;
  county?: string | null;
  createdon?: Date | null;
  customeraddressid?: string | null;
  exchangerate?: number | null;
  fax?: string | null;
  freighttermscode?: customeraddress_freighttermscode | null;
  importsequencenumber?: number | null;
  latitude?: number | null;
  line1?: string | null;
  line2?: string | null;
  line3?: string | null;
  longitude?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  objecttypecode?: string | null;
  overriddencreatedon?: Date | null;
  postalcode?: string | null;
  postofficebox?: string | null;
  primarycontactname?: string | null;
  shippingmethodcode?: customeraddress_shippingmethodcode | null;
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
interface CustomerAddress_Relationships {
  CustomerAddress_AsyncOperations?: AsyncOperation_Result[] | null;
  CustomerAddress_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  CustomerAddress_ProcessSessions?: ProcessSession_Result[] | null;
  CustomerAddress_SyncErrors?: SyncError_Result[] | null;
  customer_address_contract_line_items?: ContractDetail_Result[] | null;
  customer_address_contracts_as_billing_address?: Contract_Result[] | null;
  customer_address_contracts_as_service_address?: Contract_Result[] | null;
  customeraddress_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  parentid_account?: Account_Result | null;
  parentid_contact?: Contact_Result | null;
  userentityinstancedata_customeraddress?: UserEntityInstanceData_Result[] | null;
}
interface CustomerAddress extends CustomerAddress_Base, CustomerAddress_Relationships {
  parentid_account_bind$accounts?: string | null;
  parentid_contact_bind$contacts?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface CustomerAddress_Create extends CustomerAddress {
}
interface CustomerAddress_Update extends CustomerAddress {
}
interface CustomerAddress_Select {
  addressnumber: WebAttribute<CustomerAddress_Select, { addressnumber: number | null }, {  }>;
  addresstypecode: WebAttribute<CustomerAddress_Select, { addresstypecode: customeraddress_addresstypecode | null }, { addresstypecode_formatted?: string }>;
  city: WebAttribute<CustomerAddress_Select, { city: string | null }, {  }>;
  composite: WebAttribute<CustomerAddress_Select, { composite: string | null }, {  }>;
  country: WebAttribute<CustomerAddress_Select, { country: string | null }, {  }>;
  county: WebAttribute<CustomerAddress_Select, { county: string | null }, {  }>;
  createdby_guid: WebAttribute<CustomerAddress_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CustomerAddress_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CustomerAddress_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customeraddressid: WebAttribute<CustomerAddress_Select, { customeraddressid: string | null }, {  }>;
  exchangerate: WebAttribute<CustomerAddress_Select, { exchangerate: number | null }, {  }>;
  fax: WebAttribute<CustomerAddress_Select, { fax: string | null }, {  }>;
  freighttermscode: WebAttribute<CustomerAddress_Select, { freighttermscode: customeraddress_freighttermscode | null }, { freighttermscode_formatted?: string }>;
  importsequencenumber: WebAttribute<CustomerAddress_Select, { importsequencenumber: number | null }, {  }>;
  latitude: WebAttribute<CustomerAddress_Select, { latitude: number | null }, {  }>;
  line1: WebAttribute<CustomerAddress_Select, { line1: string | null }, {  }>;
  line2: WebAttribute<CustomerAddress_Select, { line2: string | null }, {  }>;
  line3: WebAttribute<CustomerAddress_Select, { line3: string | null }, {  }>;
  longitude: WebAttribute<CustomerAddress_Select, { longitude: number | null }, {  }>;
  modifiedby_guid: WebAttribute<CustomerAddress_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CustomerAddress_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CustomerAddress_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CustomerAddress_Select, { name: string | null }, {  }>;
  objecttypecode: WebAttribute<CustomerAddress_Select, { objecttypecode: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CustomerAddress_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<CustomerAddress_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<CustomerAddress_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<CustomerAddress_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentid_guid: WebAttribute<CustomerAddress_Select, { parentid_guid: string | null }, { parentid_formatted?: string }>;
  postalcode: WebAttribute<CustomerAddress_Select, { postalcode: string | null }, {  }>;
  postofficebox: WebAttribute<CustomerAddress_Select, { postofficebox: string | null }, {  }>;
  primarycontactname: WebAttribute<CustomerAddress_Select, { primarycontactname: string | null }, {  }>;
  shippingmethodcode: WebAttribute<CustomerAddress_Select, { shippingmethodcode: customeraddress_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  stateorprovince: WebAttribute<CustomerAddress_Select, { stateorprovince: string | null }, {  }>;
  telephone1: WebAttribute<CustomerAddress_Select, { telephone1: string | null }, {  }>;
  telephone2: WebAttribute<CustomerAddress_Select, { telephone2: string | null }, {  }>;
  telephone3: WebAttribute<CustomerAddress_Select, { telephone3: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CustomerAddress_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<CustomerAddress_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  upszone: WebAttribute<CustomerAddress_Select, { upszone: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CustomerAddress_Select, { utcconversiontimezonecode: number | null }, {  }>;
  utcoffset: WebAttribute<CustomerAddress_Select, { utcoffset: number | null }, {  }>;
  versionnumber: WebAttribute<CustomerAddress_Select, { versionnumber: number | null }, {  }>;
}
interface CustomerAddress_Filter {
  addressnumber: number;
  addresstypecode: customeraddress_addresstypecode;
  city: string;
  composite: string;
  country: string;
  county: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customeraddressid: XQW.Guid;
  exchangerate: any;
  fax: string;
  freighttermscode: customeraddress_freighttermscode;
  importsequencenumber: number;
  latitude: number;
  line1: string;
  line2: string;
  line3: string;
  longitude: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  objecttypecode: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentid_guid: XQW.Guid;
  postalcode: string;
  postofficebox: string;
  primarycontactname: string;
  shippingmethodcode: customeraddress_shippingmethodcode;
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
interface CustomerAddress_Expand {
  CustomerAddress_AsyncOperations: WebExpand<CustomerAddress_Expand, AsyncOperation_Select, AsyncOperation_Filter, { CustomerAddress_AsyncOperations: AsyncOperation_Result[] }>;
  CustomerAddress_BulkDeleteFailures: WebExpand<CustomerAddress_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { CustomerAddress_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  CustomerAddress_ProcessSessions: WebExpand<CustomerAddress_Expand, ProcessSession_Select, ProcessSession_Filter, { CustomerAddress_ProcessSessions: ProcessSession_Result[] }>;
  CustomerAddress_SyncErrors: WebExpand<CustomerAddress_Expand, SyncError_Select, SyncError_Filter, { CustomerAddress_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<CustomerAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CustomerAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customer_address_contract_line_items: WebExpand<CustomerAddress_Expand, ContractDetail_Select, ContractDetail_Filter, { customer_address_contract_line_items: ContractDetail_Result[] }>;
  customer_address_contracts_as_billing_address: WebExpand<CustomerAddress_Expand, Contract_Select, Contract_Filter, { customer_address_contracts_as_billing_address: Contract_Result[] }>;
  customer_address_contracts_as_service_address: WebExpand<CustomerAddress_Expand, Contract_Select, Contract_Filter, { customer_address_contracts_as_service_address: Contract_Result[] }>;
  customeraddress_principalobjectattributeaccess: WebExpand<CustomerAddress_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { customeraddress_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<CustomerAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CustomerAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  parentid_account: WebExpand<CustomerAddress_Expand, Account_Select, Account_Filter, { parentid_account: Account_Result }>;
  parentid_contact: WebExpand<CustomerAddress_Expand, Contact_Select, Contact_Filter, { parentid_contact: Contact_Result }>;
  transactioncurrencyid: WebExpand<CustomerAddress_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_customeraddress: WebExpand<CustomerAddress_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_customeraddress: UserEntityInstanceData_Result[] }>;
}
interface CustomerAddress_FormattedResult {
  addresstypecode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  freighttermscode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  parentid_formatted?: string;
  shippingmethodcode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface CustomerAddress_Result extends CustomerAddress_Base, CustomerAddress_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
  parentid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface CustomerAddress_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentid_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  parentid_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface CustomerAddress_RelatedMany {
  CustomerAddress_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  CustomerAddress_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  CustomerAddress_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  CustomerAddress_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  customer_address_contract_line_items: WebMappingRetrieve<ContractDetail_Select,ContractDetail_Expand,ContractDetail_Filter,ContractDetail_Fixed,ContractDetail_Result,ContractDetail_FormattedResult>;
  customer_address_contracts_as_billing_address: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
  customer_address_contracts_as_service_address: WebMappingRetrieve<Contract_Select,Contract_Expand,Contract_Filter,Contract_Fixed,Contract_Result,Contract_FormattedResult>;
  customeraddress_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_customeraddress: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  customeraddresses: WebMappingRetrieve<CustomerAddress_Select,CustomerAddress_Expand,CustomerAddress_Filter,CustomerAddress_Fixed,CustomerAddress_Result,CustomerAddress_FormattedResult>;
}
interface WebEntitiesRelated {
  customeraddresses: WebMappingRelated<CustomerAddress_RelatedOne,CustomerAddress_RelatedMany>;
}
interface WebEntitiesCUDA {
  customeraddresses: WebMappingCUDA<CustomerAddress_Create,CustomerAddress_Update,CustomerAddress_Select>;
}
