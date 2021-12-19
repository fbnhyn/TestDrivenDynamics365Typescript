interface Publisher_Base extends WebEntity {
  address1_addressid?: string | null;
  address1_addresstypecode?: publisher_address1_addresstypecode | null;
  address1_city?: string | null;
  address1_country?: string | null;
  address1_county?: string | null;
  address1_fax?: string | null;
  address1_latitude?: number | null;
  address1_line1?: string | null;
  address1_line2?: string | null;
  address1_line3?: string | null;
  address1_longitude?: number | null;
  address1_name?: string | null;
  address1_postalcode?: string | null;
  address1_postofficebox?: string | null;
  address1_shippingmethodcode?: publisher_address1_shippingmethodcode | null;
  address1_stateorprovince?: string | null;
  address1_telephone1?: string | null;
  address1_telephone2?: string | null;
  address1_telephone3?: string | null;
  address1_upszone?: string | null;
  address1_utcoffset?: number | null;
  address2_addressid?: string | null;
  address2_addresstypecode?: publisher_address2_addresstypecode | null;
  address2_city?: string | null;
  address2_country?: string | null;
  address2_county?: string | null;
  address2_fax?: string | null;
  address2_latitude?: number | null;
  address2_line1?: string | null;
  address2_line2?: string | null;
  address2_line3?: string | null;
  address2_longitude?: number | null;
  address2_name?: string | null;
  address2_postalcode?: string | null;
  address2_postofficebox?: string | null;
  address2_shippingmethodcode?: publisher_address2_shippingmethodcode | null;
  address2_stateorprovince?: string | null;
  address2_telephone1?: string | null;
  address2_telephone2?: string | null;
  address2_telephone3?: string | null;
  address2_upszone?: string | null;
  address2_utcoffset?: number | null;
  createdon?: Date | null;
  customizationoptionvalueprefix?: number | null;
  customizationprefix?: string | null;
  description?: string | null;
  emailaddress?: string | null;
  entityimageid?: string | null;
  friendlyname?: string | null;
  isreadonly?: boolean | null;
  modifiedon?: Date | null;
  pinpointpublisherdefaultlocale?: string | null;
  pinpointpublisherid?: number | null;
  publisherid?: string | null;
  supportingwebsiteurl?: string | null;
  uniquename?: string | null;
  versionnumber?: number | null;
}
interface Publisher_Relationships {
  Publisher_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  Publisher_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  Publisher_PublisherAddress?: PublisherAddress_Result[] | null;
  Publisher_SyncErrors?: SyncError_Result[] | null;
  entityimageid_imagedescriptor?: ImageDescriptor_Result | null;
  publisher_appmodule?: AppModule_Result[] | null;
  publisher_solution?: Solution_Result[] | null;
  userentityinstancedata_publisher?: UserEntityInstanceData_Result[] | null;
}
interface Publisher extends Publisher_Base, Publisher_Relationships {
}
interface Publisher_Create extends Publisher {
}
interface Publisher_Update extends Publisher {
}
interface Publisher_Select {
  address1_addressid: WebAttribute<Publisher_Select, { address1_addressid: string | null }, {  }>;
  address1_addresstypecode: WebAttribute<Publisher_Select, { address1_addresstypecode: publisher_address1_addresstypecode | null }, { address1_addresstypecode_formatted?: string }>;
  address1_city: WebAttribute<Publisher_Select, { address1_city: string | null }, {  }>;
  address1_country: WebAttribute<Publisher_Select, { address1_country: string | null }, {  }>;
  address1_county: WebAttribute<Publisher_Select, { address1_county: string | null }, {  }>;
  address1_fax: WebAttribute<Publisher_Select, { address1_fax: string | null }, {  }>;
  address1_latitude: WebAttribute<Publisher_Select, { address1_latitude: number | null }, {  }>;
  address1_line1: WebAttribute<Publisher_Select, { address1_line1: string | null }, {  }>;
  address1_line2: WebAttribute<Publisher_Select, { address1_line2: string | null }, {  }>;
  address1_line3: WebAttribute<Publisher_Select, { address1_line3: string | null }, {  }>;
  address1_longitude: WebAttribute<Publisher_Select, { address1_longitude: number | null }, {  }>;
  address1_name: WebAttribute<Publisher_Select, { address1_name: string | null }, {  }>;
  address1_postalcode: WebAttribute<Publisher_Select, { address1_postalcode: string | null }, {  }>;
  address1_postofficebox: WebAttribute<Publisher_Select, { address1_postofficebox: string | null }, {  }>;
  address1_shippingmethodcode: WebAttribute<Publisher_Select, { address1_shippingmethodcode: publisher_address1_shippingmethodcode | null }, { address1_shippingmethodcode_formatted?: string }>;
  address1_stateorprovince: WebAttribute<Publisher_Select, { address1_stateorprovince: string | null }, {  }>;
  address1_telephone1: WebAttribute<Publisher_Select, { address1_telephone1: string | null }, {  }>;
  address1_telephone2: WebAttribute<Publisher_Select, { address1_telephone2: string | null }, {  }>;
  address1_telephone3: WebAttribute<Publisher_Select, { address1_telephone3: string | null }, {  }>;
  address1_upszone: WebAttribute<Publisher_Select, { address1_upszone: string | null }, {  }>;
  address1_utcoffset: WebAttribute<Publisher_Select, { address1_utcoffset: number | null }, {  }>;
  address2_addressid: WebAttribute<Publisher_Select, { address2_addressid: string | null }, {  }>;
  address2_addresstypecode: WebAttribute<Publisher_Select, { address2_addresstypecode: publisher_address2_addresstypecode | null }, { address2_addresstypecode_formatted?: string }>;
  address2_city: WebAttribute<Publisher_Select, { address2_city: string | null }, {  }>;
  address2_country: WebAttribute<Publisher_Select, { address2_country: string | null }, {  }>;
  address2_county: WebAttribute<Publisher_Select, { address2_county: string | null }, {  }>;
  address2_fax: WebAttribute<Publisher_Select, { address2_fax: string | null }, {  }>;
  address2_latitude: WebAttribute<Publisher_Select, { address2_latitude: number | null }, {  }>;
  address2_line1: WebAttribute<Publisher_Select, { address2_line1: string | null }, {  }>;
  address2_line2: WebAttribute<Publisher_Select, { address2_line2: string | null }, {  }>;
  address2_line3: WebAttribute<Publisher_Select, { address2_line3: string | null }, {  }>;
  address2_longitude: WebAttribute<Publisher_Select, { address2_longitude: number | null }, {  }>;
  address2_name: WebAttribute<Publisher_Select, { address2_name: string | null }, {  }>;
  address2_postalcode: WebAttribute<Publisher_Select, { address2_postalcode: string | null }, {  }>;
  address2_postofficebox: WebAttribute<Publisher_Select, { address2_postofficebox: string | null }, {  }>;
  address2_shippingmethodcode: WebAttribute<Publisher_Select, { address2_shippingmethodcode: publisher_address2_shippingmethodcode | null }, { address2_shippingmethodcode_formatted?: string }>;
  address2_stateorprovince: WebAttribute<Publisher_Select, { address2_stateorprovince: string | null }, {  }>;
  address2_telephone1: WebAttribute<Publisher_Select, { address2_telephone1: string | null }, {  }>;
  address2_telephone2: WebAttribute<Publisher_Select, { address2_telephone2: string | null }, {  }>;
  address2_telephone3: WebAttribute<Publisher_Select, { address2_telephone3: string | null }, {  }>;
  address2_upszone: WebAttribute<Publisher_Select, { address2_upszone: string | null }, {  }>;
  address2_utcoffset: WebAttribute<Publisher_Select, { address2_utcoffset: number | null }, {  }>;
  createdby_guid: WebAttribute<Publisher_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Publisher_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Publisher_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationoptionvalueprefix: WebAttribute<Publisher_Select, { customizationoptionvalueprefix: number | null }, {  }>;
  customizationprefix: WebAttribute<Publisher_Select, { customizationprefix: string | null }, {  }>;
  description: WebAttribute<Publisher_Select, { description: string | null }, {  }>;
  emailaddress: WebAttribute<Publisher_Select, { emailaddress: string | null }, {  }>;
  entityimageid: WebAttribute<Publisher_Select, { entityimageid: string | null }, {  }>;
  friendlyname: WebAttribute<Publisher_Select, { friendlyname: string | null }, {  }>;
  isreadonly: WebAttribute<Publisher_Select, { isreadonly: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<Publisher_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Publisher_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Publisher_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<Publisher_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  pinpointpublisherdefaultlocale: WebAttribute<Publisher_Select, { pinpointpublisherdefaultlocale: string | null }, {  }>;
  pinpointpublisherid: WebAttribute<Publisher_Select, { pinpointpublisherid: number | null }, {  }>;
  publisherid: WebAttribute<Publisher_Select, { publisherid: string | null }, {  }>;
  supportingwebsiteurl: WebAttribute<Publisher_Select, { supportingwebsiteurl: string | null }, {  }>;
  uniquename: WebAttribute<Publisher_Select, { uniquename: string | null }, {  }>;
  versionnumber: WebAttribute<Publisher_Select, { versionnumber: number | null }, {  }>;
}
interface Publisher_Filter {
  address1_addressid: XQW.Guid;
  address1_addresstypecode: publisher_address1_addresstypecode;
  address1_city: string;
  address1_country: string;
  address1_county: string;
  address1_fax: string;
  address1_latitude: number;
  address1_line1: string;
  address1_line2: string;
  address1_line3: string;
  address1_longitude: number;
  address1_name: string;
  address1_postalcode: string;
  address1_postofficebox: string;
  address1_shippingmethodcode: publisher_address1_shippingmethodcode;
  address1_stateorprovince: string;
  address1_telephone1: string;
  address1_telephone2: string;
  address1_telephone3: string;
  address1_upszone: string;
  address1_utcoffset: number;
  address2_addressid: XQW.Guid;
  address2_addresstypecode: publisher_address2_addresstypecode;
  address2_city: string;
  address2_country: string;
  address2_county: string;
  address2_fax: string;
  address2_latitude: number;
  address2_line1: string;
  address2_line2: string;
  address2_line3: string;
  address2_longitude: number;
  address2_name: string;
  address2_postalcode: string;
  address2_postofficebox: string;
  address2_shippingmethodcode: publisher_address2_shippingmethodcode;
  address2_stateorprovince: string;
  address2_telephone1: string;
  address2_telephone2: string;
  address2_telephone3: string;
  address2_upszone: string;
  address2_utcoffset: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationoptionvalueprefix: number;
  customizationprefix: string;
  description: string;
  emailaddress: string;
  entityimageid: XQW.Guid;
  friendlyname: string;
  isreadonly: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  pinpointpublisherdefaultlocale: string;
  pinpointpublisherid: number;
  publisherid: XQW.Guid;
  supportingwebsiteurl: string;
  uniquename: string;
  versionnumber: number;
}
interface Publisher_Expand {
  Publisher_DuplicateBaseRecord: WebExpand<Publisher_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Publisher_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  Publisher_DuplicateMatchingRecord: WebExpand<Publisher_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { Publisher_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  Publisher_PublisherAddress: WebExpand<Publisher_Expand, PublisherAddress_Select, PublisherAddress_Filter, { Publisher_PublisherAddress: PublisherAddress_Result[] }>;
  Publisher_SyncErrors: WebExpand<Publisher_Expand, SyncError_Select, SyncError_Filter, { Publisher_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<Publisher_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Publisher_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  entityimageid_imagedescriptor: WebExpand<Publisher_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { entityimageid_imagedescriptor: ImageDescriptor_Result }>;
  modifiedby: WebExpand<Publisher_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Publisher_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<Publisher_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  publisher_appmodule: WebExpand<Publisher_Expand, AppModule_Select, AppModule_Filter, { publisher_appmodule: AppModule_Result[] }>;
  publisher_solution: WebExpand<Publisher_Expand, Solution_Select, Solution_Filter, { publisher_solution: Solution_Result[] }>;
  userentityinstancedata_publisher: WebExpand<Publisher_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_publisher: UserEntityInstanceData_Result[] }>;
}
interface Publisher_FormattedResult {
  address1_addresstypecode_formatted?: string;
  address1_shippingmethodcode_formatted?: string;
  address2_addresstypecode_formatted?: string;
  address2_shippingmethodcode_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
}
interface Publisher_Result extends Publisher_Base, Publisher_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface Publisher_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  entityimageid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface Publisher_RelatedMany {
  Publisher_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Publisher_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  Publisher_PublisherAddress: WebMappingRetrieve<PublisherAddress_Select,PublisherAddress_Expand,PublisherAddress_Filter,PublisherAddress_Fixed,PublisherAddress_Result,PublisherAddress_FormattedResult>;
  Publisher_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  publisher_appmodule: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  publisher_solution: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
  userentityinstancedata_publisher: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  publishers: WebMappingRetrieve<Publisher_Select,Publisher_Expand,Publisher_Filter,Publisher_Fixed,Publisher_Result,Publisher_FormattedResult>;
}
interface WebEntitiesRelated {
  publishers: WebMappingRelated<Publisher_RelatedOne,Publisher_RelatedMany>;
}
interface WebEntitiesCUDA {
  publishers: WebMappingCUDA<Publisher_Create,Publisher_Update,Publisher_Select>;
}
