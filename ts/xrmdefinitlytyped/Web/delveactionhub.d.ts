interface DelveActionHub_Base extends WebEntity {
  cardtype?: delveactionshub_cardtype | null;
  createdon?: Date | null;
  createdtime?: Date | null;
  delveactionhubid?: string | null;
  description?: string | null;
  exchangerate?: number | null;
  iconclassname?: string | null;
  mailweblink?: string | null;
  messageid?: string | null;
  messagetime?: Date | null;
  modifiedon?: Date | null;
  modifiedtime?: Date | null;
  relatedmailids?: string | null;
  sender?: string | null;
  senderentityid?: string | null;
  senderentityobjecttypecode?: number | null;
  senderimageurl?: string | null;
  statecode?: delveactionhub_statecode | null;
  statuscode?: delveactionhub_statuscode | null;
  subject?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface DelveActionHub_Relationships {
  TransactionCurrency_delveactionhub?: TransactionCurrency_Result | null;
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
}
interface DelveActionHub extends DelveActionHub_Base, DelveActionHub_Relationships {
  TransactionCurrency_delveactionhub_bind$transactioncurrencies?: string | null;
}
interface DelveActionHub_Create extends DelveActionHub {
}
interface DelveActionHub_Update extends DelveActionHub {
}
interface DelveActionHub_Select {
  cardtype: WebAttribute<DelveActionHub_Select, { cardtype: delveactionshub_cardtype | null }, { cardtype_formatted?: string }>;
  createdby_guid: WebAttribute<DelveActionHub_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DelveActionHub_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DelveActionHub_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  createdtime: WebAttribute<DelveActionHub_Select, { createdtime: Date | null }, { createdtime_formatted?: string }>;
  delveactionhubid: WebAttribute<DelveActionHub_Select, { delveactionhubid: string | null }, {  }>;
  description: WebAttribute<DelveActionHub_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<DelveActionHub_Select, { exchangerate: number | null }, {  }>;
  iconclassname: WebAttribute<DelveActionHub_Select, { iconclassname: string | null }, {  }>;
  mailweblink: WebAttribute<DelveActionHub_Select, { mailweblink: string | null }, {  }>;
  messageid: WebAttribute<DelveActionHub_Select, { messageid: string | null }, {  }>;
  messagetime: WebAttribute<DelveActionHub_Select, { messagetime: Date | null }, { messagetime_formatted?: string }>;
  modifiedby_guid: WebAttribute<DelveActionHub_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DelveActionHub_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DelveActionHub_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  modifiedtime: WebAttribute<DelveActionHub_Select, { modifiedtime: Date | null }, { modifiedtime_formatted?: string }>;
  organizationid_guid: WebAttribute<DelveActionHub_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  recordid_guid: WebAttribute<DelveActionHub_Select, { recordid_guid: string | null }, { recordid_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<DelveActionHub_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  relatedmailids: WebAttribute<DelveActionHub_Select, { relatedmailids: string | null }, {  }>;
  sender: WebAttribute<DelveActionHub_Select, { sender: string | null }, {  }>;
  senderentityid: WebAttribute<DelveActionHub_Select, { senderentityid: string | null }, {  }>;
  senderentityobjecttypecode: WebAttribute<DelveActionHub_Select, { senderentityobjecttypecode: number | null }, {  }>;
  senderimageurl: WebAttribute<DelveActionHub_Select, { senderimageurl: string | null }, {  }>;
  statecode: WebAttribute<DelveActionHub_Select, { statecode: delveactionhub_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<DelveActionHub_Select, { statuscode: delveactionhub_statuscode | null }, { statuscode_formatted?: string }>;
  subject: WebAttribute<DelveActionHub_Select, { subject: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<DelveActionHub_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<DelveActionHub_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<DelveActionHub_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<DelveActionHub_Select, { versionnumber: number | null }, {  }>;
}
interface DelveActionHub_Filter {
  cardtype: delveactionshub_cardtype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  createdtime: Date;
  delveactionhubid: XQW.Guid;
  description: string;
  exchangerate: any;
  iconclassname: string;
  mailweblink: string;
  messageid: string;
  messagetime: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  modifiedtime: Date;
  organizationid_guid: XQW.Guid;
  recordid_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  relatedmailids: string;
  sender: string;
  senderentityid: XQW.Guid;
  senderentityobjecttypecode: number;
  senderimageurl: string;
  statecode: delveactionhub_statecode;
  statuscode: delveactionhub_statuscode;
  subject: string;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface DelveActionHub_Expand {
  TransactionCurrency_delveactionhub: WebExpand<DelveActionHub_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { TransactionCurrency_delveactionhub: TransactionCurrency_Result }>;
  createdbyname: WebExpand<DelveActionHub_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<DelveActionHub_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  modifiedbyname: WebExpand<DelveActionHub_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<DelveActionHub_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  organizationid: WebExpand<DelveActionHub_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface DelveActionHub_FormattedResult {
  cardtype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  createdtime_formatted?: string;
  messagetime_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  modifiedtime_formatted?: string;
  organizationid_formatted?: string;
  recordid_formatted?: string;
  regardingobjectid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface DelveActionHub_Result extends DelveActionHub_Base, DelveActionHub_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  recordid_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface DelveActionHub_RelatedOne {
  TransactionCurrency_delveactionhub: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface DelveActionHub_RelatedMany {
}
interface WebEntitiesRetrieve {
  delveactionhubs: WebMappingRetrieve<DelveActionHub_Select,DelveActionHub_Expand,DelveActionHub_Filter,DelveActionHub_Fixed,DelveActionHub_Result,DelveActionHub_FormattedResult>;
}
interface WebEntitiesRelated {
  delveactionhubs: WebMappingRelated<DelveActionHub_RelatedOne,DelveActionHub_RelatedMany>;
}
interface WebEntitiesCUDA {
  delveactionhubs: WebMappingCUDA<DelveActionHub_Create,DelveActionHub_Update,DelveActionHub_Select>;
}
