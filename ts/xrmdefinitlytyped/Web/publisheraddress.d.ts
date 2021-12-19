interface PublisherAddress_Base extends WebEntity {
  addressnumber?: number | null;
  addresstypecode?: publisheraddress_addresstypecode | null;
  city?: string | null;
  country?: string | null;
  county?: string | null;
  createdon?: Date | null;
  fax?: string | null;
  freighttermscode?: publisheraddress_freighttermscode | null;
  importsequencenumber?: number | null;
  latitude?: number | null;
  line1?: string | null;
  line2?: string | null;
  line3?: string | null;
  longitude?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  postalcode?: string | null;
  postofficebox?: string | null;
  primarycontactname?: string | null;
  publisheraddressid?: string | null;
  shippingmethodcode?: publisheraddress_shippingmethodcode | null;
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
interface PublisherAddress_Relationships {
  userentityinstancedata_publisheraddress?: UserEntityInstanceData_Result[] | null;
}
interface PublisherAddress extends PublisherAddress_Base, PublisherAddress_Relationships {
  parentid_bind$publishers?: string | null;
}
interface PublisherAddress_Create extends PublisherAddress {
}
interface PublisherAddress_Update extends PublisherAddress {
}
interface PublisherAddress_Select {
  addressnumber: WebAttribute<PublisherAddress_Select, { addressnumber: number | null }, {  }>;
  addresstypecode: WebAttribute<PublisherAddress_Select, { addresstypecode: publisheraddress_addresstypecode | null }, { addresstypecode_formatted?: string }>;
  city: WebAttribute<PublisherAddress_Select, { city: string | null }, {  }>;
  country: WebAttribute<PublisherAddress_Select, { country: string | null }, {  }>;
  county: WebAttribute<PublisherAddress_Select, { county: string | null }, {  }>;
  createdby_guid: WebAttribute<PublisherAddress_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PublisherAddress_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PublisherAddress_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  fax: WebAttribute<PublisherAddress_Select, { fax: string | null }, {  }>;
  freighttermscode: WebAttribute<PublisherAddress_Select, { freighttermscode: publisheraddress_freighttermscode | null }, { freighttermscode_formatted?: string }>;
  importsequencenumber: WebAttribute<PublisherAddress_Select, { importsequencenumber: number | null }, {  }>;
  latitude: WebAttribute<PublisherAddress_Select, { latitude: number | null }, {  }>;
  line1: WebAttribute<PublisherAddress_Select, { line1: string | null }, {  }>;
  line2: WebAttribute<PublisherAddress_Select, { line2: string | null }, {  }>;
  line3: WebAttribute<PublisherAddress_Select, { line3: string | null }, {  }>;
  longitude: WebAttribute<PublisherAddress_Select, { longitude: number | null }, {  }>;
  modifiedby_guid: WebAttribute<PublisherAddress_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PublisherAddress_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PublisherAddress_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<PublisherAddress_Select, { name: string | null }, {  }>;
  parentid_guid: WebAttribute<PublisherAddress_Select, { parentid_guid: string | null }, { parentid_formatted?: string }>;
  postalcode: WebAttribute<PublisherAddress_Select, { postalcode: string | null }, {  }>;
  postofficebox: WebAttribute<PublisherAddress_Select, { postofficebox: string | null }, {  }>;
  primarycontactname: WebAttribute<PublisherAddress_Select, { primarycontactname: string | null }, {  }>;
  publisheraddressid: WebAttribute<PublisherAddress_Select, { publisheraddressid: string | null }, {  }>;
  shippingmethodcode: WebAttribute<PublisherAddress_Select, { shippingmethodcode: publisheraddress_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  stateorprovince: WebAttribute<PublisherAddress_Select, { stateorprovince: string | null }, {  }>;
  telephone1: WebAttribute<PublisherAddress_Select, { telephone1: string | null }, {  }>;
  telephone2: WebAttribute<PublisherAddress_Select, { telephone2: string | null }, {  }>;
  telephone3: WebAttribute<PublisherAddress_Select, { telephone3: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<PublisherAddress_Select, { timezoneruleversionnumber: number | null }, {  }>;
  upszone: WebAttribute<PublisherAddress_Select, { upszone: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<PublisherAddress_Select, { utcconversiontimezonecode: number | null }, {  }>;
  utcoffset: WebAttribute<PublisherAddress_Select, { utcoffset: number | null }, {  }>;
  versionnumber: WebAttribute<PublisherAddress_Select, { versionnumber: number | null }, {  }>;
}
interface PublisherAddress_Filter {
  addressnumber: number;
  addresstypecode: publisheraddress_addresstypecode;
  city: string;
  country: string;
  county: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  fax: string;
  freighttermscode: publisheraddress_freighttermscode;
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
  parentid_guid: XQW.Guid;
  postalcode: string;
  postofficebox: string;
  primarycontactname: string;
  publisheraddressid: XQW.Guid;
  shippingmethodcode: publisheraddress_shippingmethodcode;
  stateorprovince: string;
  telephone1: string;
  telephone2: string;
  telephone3: string;
  timezoneruleversionnumber: number;
  upszone: string;
  utcconversiontimezonecode: number;
  utcoffset: number;
  versionnumber: number;
}
interface PublisherAddress_Expand {
  createdby: WebExpand<PublisherAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PublisherAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<PublisherAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<PublisherAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  parentid: WebExpand<PublisherAddress_Expand, Publisher_Select, Publisher_Filter, { parentid: Publisher_Result }>;
  userentityinstancedata_publisheraddress: WebExpand<PublisherAddress_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_publisheraddress: UserEntityInstanceData_Result[] }>;
}
interface PublisherAddress_FormattedResult {
  addresstypecode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  freighttermscode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  parentid_formatted?: string;
  shippingmethodcode_formatted?: string;
}
interface PublisherAddress_Result extends PublisherAddress_Base, PublisherAddress_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  parentid_guid: string | null;
}
interface PublisherAddress_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentid: WebMappingRetrieve<Publisher_Select,Publisher_Expand,Publisher_Filter,Publisher_Fixed,Publisher_Result,Publisher_FormattedResult>;
}
interface PublisherAddress_RelatedMany {
  userentityinstancedata_publisheraddress: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  publisheraddresses: WebMappingRetrieve<PublisherAddress_Select,PublisherAddress_Expand,PublisherAddress_Filter,PublisherAddress_Fixed,PublisherAddress_Result,PublisherAddress_FormattedResult>;
}
interface WebEntitiesRelated {
  publisheraddresses: WebMappingRelated<PublisherAddress_RelatedOne,PublisherAddress_RelatedMany>;
}
interface WebEntitiesCUDA {
  publisheraddresses: WebMappingCUDA<PublisherAddress_Create,PublisherAddress_Update,PublisherAddress_Select>;
}
