interface OfficeGraphDocument_Base extends WebEntity {
  authornames?: string | null;
  createdby?: string | null;
  createdtime?: Date | null;
  documentid?: string | null;
  documentlastmodifiedby?: string | null;
  documentlastmodifiedon?: Date | null;
  documentpreviewmetadata?: string | null;
  exchangerate?: number | null;
  fileextension?: string | null;
  filetype?: string | null;
  modifiedby?: string | null;
  modifiedtime?: Date | null;
  officegraphdocumentid?: string | null;
  previewimageurl?: string | null;
  querytype?: number | null;
  rank?: number | null;
  readurl?: string | null;
  secondaryfileextension?: string | null;
  sitetitle?: string | null;
  siteurl?: string | null;
  timezoneruleversionnumber?: number | null;
  title?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  viewcount?: number | null;
  weblocationurl?: string | null;
}
interface OfficeGraphDocument_Relationships {
}
interface OfficeGraphDocument extends OfficeGraphDocument_Base, OfficeGraphDocument_Relationships {
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface OfficeGraphDocument_Create extends OfficeGraphDocument {
}
interface OfficeGraphDocument_Update extends OfficeGraphDocument {
}
interface OfficeGraphDocument_Select {
  authornames: WebAttribute<OfficeGraphDocument_Select, { authornames: string | null }, {  }>;
  createdby: WebAttribute<OfficeGraphDocument_Select, { createdby: string | null }, {  }>;
  createdonbehalfby_guid: WebAttribute<OfficeGraphDocument_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  createdtime: WebAttribute<OfficeGraphDocument_Select, { createdtime: Date | null }, { createdtime_formatted?: string }>;
  documentid: WebAttribute<OfficeGraphDocument_Select, { documentid: string | null }, {  }>;
  documentlastmodifiedby: WebAttribute<OfficeGraphDocument_Select, { documentlastmodifiedby: string | null }, {  }>;
  documentlastmodifiedon: WebAttribute<OfficeGraphDocument_Select, { documentlastmodifiedon: Date | null }, { documentlastmodifiedon_formatted?: string }>;
  documentpreviewmetadata: WebAttribute<OfficeGraphDocument_Select, { documentpreviewmetadata: string | null }, {  }>;
  exchangerate: WebAttribute<OfficeGraphDocument_Select, { exchangerate: number | null }, {  }>;
  fileextension: WebAttribute<OfficeGraphDocument_Select, { fileextension: string | null }, {  }>;
  filetype: WebAttribute<OfficeGraphDocument_Select, { filetype: string | null }, {  }>;
  modifiedby: WebAttribute<OfficeGraphDocument_Select, { modifiedby: string | null }, {  }>;
  modifiedonbehalfby_guid: WebAttribute<OfficeGraphDocument_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  modifiedtime: WebAttribute<OfficeGraphDocument_Select, { modifiedtime: Date | null }, { modifiedtime_formatted?: string }>;
  officegraphdocumentid: WebAttribute<OfficeGraphDocument_Select, { officegraphdocumentid: string | null }, {  }>;
  organizationid_guid: WebAttribute<OfficeGraphDocument_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  previewimageurl: WebAttribute<OfficeGraphDocument_Select, { previewimageurl: string | null }, {  }>;
  querytype: WebAttribute<OfficeGraphDocument_Select, { querytype: number | null }, {  }>;
  rank: WebAttribute<OfficeGraphDocument_Select, { rank: number | null }, {  }>;
  readurl: WebAttribute<OfficeGraphDocument_Select, { readurl: string | null }, {  }>;
  secondaryfileextension: WebAttribute<OfficeGraphDocument_Select, { secondaryfileextension: string | null }, {  }>;
  sitetitle: WebAttribute<OfficeGraphDocument_Select, { sitetitle: string | null }, {  }>;
  siteurl: WebAttribute<OfficeGraphDocument_Select, { siteurl: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<OfficeGraphDocument_Select, { timezoneruleversionnumber: number | null }, {  }>;
  title: WebAttribute<OfficeGraphDocument_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<OfficeGraphDocument_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<OfficeGraphDocument_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<OfficeGraphDocument_Select, { versionnumber: number | null }, {  }>;
  viewcount: WebAttribute<OfficeGraphDocument_Select, { viewcount: number | null }, {  }>;
  weblocationurl: WebAttribute<OfficeGraphDocument_Select, { weblocationurl: string | null }, {  }>;
}
interface OfficeGraphDocument_Filter {
  authornames: string;
  createdby: string;
  createdonbehalfby_guid: XQW.Guid;
  createdtime: Date;
  documentid: string;
  documentlastmodifiedby: string;
  documentlastmodifiedon: Date;
  documentpreviewmetadata: string;
  exchangerate: any;
  fileextension: string;
  filetype: string;
  modifiedby: string;
  modifiedonbehalfby_guid: XQW.Guid;
  modifiedtime: Date;
  officegraphdocumentid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  previewimageurl: string;
  querytype: number;
  rank: number;
  readurl: string;
  secondaryfileextension: string;
  sitetitle: string;
  siteurl: string;
  timezoneruleversionnumber: number;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
  viewcount: number;
  weblocationurl: string;
}
interface OfficeGraphDocument_Expand {
  createdonbehalfby: WebExpand<OfficeGraphDocument_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<OfficeGraphDocument_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<OfficeGraphDocument_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  transactioncurrencyid: WebExpand<OfficeGraphDocument_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface OfficeGraphDocument_FormattedResult {
  createdonbehalfby_formatted?: string;
  createdtime_formatted?: string;
  documentlastmodifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  modifiedtime_formatted?: string;
  organizationid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface OfficeGraphDocument_Result extends OfficeGraphDocument_Base, OfficeGraphDocument_Relationships {
  "@odata.etag": string;
  createdonbehalfby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface OfficeGraphDocument_RelatedOne {
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface OfficeGraphDocument_RelatedMany {
}
interface WebEntitiesRetrieve {
  officegraphdocuments: WebMappingRetrieve<OfficeGraphDocument_Select,OfficeGraphDocument_Expand,OfficeGraphDocument_Filter,OfficeGraphDocument_Fixed,OfficeGraphDocument_Result,OfficeGraphDocument_FormattedResult>;
}
interface WebEntitiesRelated {
  officegraphdocuments: WebMappingRelated<OfficeGraphDocument_RelatedOne,OfficeGraphDocument_RelatedMany>;
}
interface WebEntitiesCUDA {
  officegraphdocuments: WebMappingCUDA<OfficeGraphDocument_Create,OfficeGraphDocument_Update,OfficeGraphDocument_Select>;
}
