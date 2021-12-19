interface InternalAddress_Base extends WebEntity {
  addressnumber?: number | null;
  addresstypecode?: internaladdress_addresstypecode | null;
  businessunitid?: string | null;
  city?: string | null;
  composite?: string | null;
  country?: string | null;
  county?: string | null;
  createdon?: Date | null;
  fax?: string | null;
  internaladdressid?: string | null;
  latitude?: number | null;
  line1?: string | null;
  line2?: string | null;
  line3?: string | null;
  longitude?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  objecttypecode?: string | null;
  organizationid?: string | null;
  parentid?: string | null;
  postalcode?: string | null;
  postofficebox?: string | null;
  shippingmethodcode?: internaladdress_shippingmethodcode | null;
  stateorprovince?: string | null;
  telephone1?: string | null;
  telephone2?: string | null;
  telephone3?: string | null;
  upszone?: string | null;
  utcoffset?: number | null;
  versionnumber?: number | null;
}
interface InternalAddress_Relationships {
  InternalAddress_SyncErrors?: SyncError_Result[] | null;
  parentid_businessunit?: BusinessUnit_Result | null;
  parentid_site?: Site_Result | null;
  parentid_systemuser?: SystemUser_Result | null;
  userentityinstancedata_internaladdress?: UserEntityInstanceData_Result[] | null;
}
interface InternalAddress extends InternalAddress_Base, InternalAddress_Relationships {
  parentid_businessunit_bind$businessunits?: string | null;
  parentid_site_bind$sites?: string | null;
  parentid_systemuser_bind$systemusers?: string | null;
}
interface InternalAddress_Create extends InternalAddress {
}
interface InternalAddress_Update extends InternalAddress {
}
interface InternalAddress_Select {
  addressnumber: WebAttribute<InternalAddress_Select, { addressnumber: number | null }, {  }>;
  addresstypecode: WebAttribute<InternalAddress_Select, { addresstypecode: internaladdress_addresstypecode | null }, { addresstypecode_formatted?: string }>;
  businessunitid: WebAttribute<InternalAddress_Select, { businessunitid: string | null }, {  }>;
  city: WebAttribute<InternalAddress_Select, { city: string | null }, {  }>;
  composite: WebAttribute<InternalAddress_Select, { composite: string | null }, {  }>;
  country: WebAttribute<InternalAddress_Select, { country: string | null }, {  }>;
  county: WebAttribute<InternalAddress_Select, { county: string | null }, {  }>;
  createdby_guid: WebAttribute<InternalAddress_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<InternalAddress_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<InternalAddress_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  fax: WebAttribute<InternalAddress_Select, { fax: string | null }, {  }>;
  internaladdressid: WebAttribute<InternalAddress_Select, { internaladdressid: string | null }, {  }>;
  latitude: WebAttribute<InternalAddress_Select, { latitude: number | null }, {  }>;
  line1: WebAttribute<InternalAddress_Select, { line1: string | null }, {  }>;
  line2: WebAttribute<InternalAddress_Select, { line2: string | null }, {  }>;
  line3: WebAttribute<InternalAddress_Select, { line3: string | null }, {  }>;
  longitude: WebAttribute<InternalAddress_Select, { longitude: number | null }, {  }>;
  modifiedby_guid: WebAttribute<InternalAddress_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<InternalAddress_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<InternalAddress_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<InternalAddress_Select, { name: string | null }, {  }>;
  objecttypecode: WebAttribute<InternalAddress_Select, { objecttypecode: string | null }, {  }>;
  organizationid: WebAttribute<InternalAddress_Select, { organizationid: string | null }, {  }>;
  parentid: WebAttribute<InternalAddress_Select, { parentid: string | null }, {  }>;
  postalcode: WebAttribute<InternalAddress_Select, { postalcode: string | null }, {  }>;
  postofficebox: WebAttribute<InternalAddress_Select, { postofficebox: string | null }, {  }>;
  shippingmethodcode: WebAttribute<InternalAddress_Select, { shippingmethodcode: internaladdress_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  stateorprovince: WebAttribute<InternalAddress_Select, { stateorprovince: string | null }, {  }>;
  telephone1: WebAttribute<InternalAddress_Select, { telephone1: string | null }, {  }>;
  telephone2: WebAttribute<InternalAddress_Select, { telephone2: string | null }, {  }>;
  telephone3: WebAttribute<InternalAddress_Select, { telephone3: string | null }, {  }>;
  upszone: WebAttribute<InternalAddress_Select, { upszone: string | null }, {  }>;
  utcoffset: WebAttribute<InternalAddress_Select, { utcoffset: number | null }, {  }>;
  versionnumber: WebAttribute<InternalAddress_Select, { versionnumber: number | null }, {  }>;
}
interface InternalAddress_Filter {
  addressnumber: number;
  addresstypecode: internaladdress_addresstypecode;
  businessunitid: XQW.Guid;
  city: string;
  composite: string;
  country: string;
  county: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  fax: string;
  internaladdressid: XQW.Guid;
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
  organizationid: XQW.Guid;
  parentid: XQW.Guid;
  postalcode: string;
  postofficebox: string;
  shippingmethodcode: internaladdress_shippingmethodcode;
  stateorprovince: string;
  telephone1: string;
  telephone2: string;
  telephone3: string;
  upszone: string;
  utcoffset: number;
  versionnumber: number;
}
interface InternalAddress_Expand {
  InternalAddress_SyncErrors: WebExpand<InternalAddress_Expand, SyncError_Select, SyncError_Filter, { InternalAddress_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<InternalAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<InternalAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<InternalAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<InternalAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  parentid_businessunit: WebExpand<InternalAddress_Expand, BusinessUnit_Select, BusinessUnit_Filter, { parentid_businessunit: BusinessUnit_Result }>;
  parentid_site: WebExpand<InternalAddress_Expand, Site_Select, Site_Filter, { parentid_site: Site_Result }>;
  parentid_systemuser: WebExpand<InternalAddress_Expand, SystemUser_Select, SystemUser_Filter, { parentid_systemuser: SystemUser_Result }>;
  userentityinstancedata_internaladdress: WebExpand<InternalAddress_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_internaladdress: UserEntityInstanceData_Result[] }>;
}
interface InternalAddress_FormattedResult {
  addresstypecode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  shippingmethodcode_formatted?: string;
}
interface InternalAddress_Result extends InternalAddress_Base, InternalAddress_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface InternalAddress_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentid_businessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  parentid_site: WebMappingRetrieve<Site_Select,Site_Expand,Site_Filter,Site_Fixed,Site_Result,Site_FormattedResult>;
  parentid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface InternalAddress_RelatedMany {
  InternalAddress_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_internaladdress: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  internaladdresses: WebMappingRetrieve<InternalAddress_Select,InternalAddress_Expand,InternalAddress_Filter,InternalAddress_Fixed,InternalAddress_Result,InternalAddress_FormattedResult>;
}
interface WebEntitiesRelated {
  internaladdresses: WebMappingRelated<InternalAddress_RelatedOne,InternalAddress_RelatedMany>;
}
interface WebEntitiesCUDA {
  internaladdresses: WebMappingCUDA<InternalAddress_Create,InternalAddress_Update,InternalAddress_Select>;
}
