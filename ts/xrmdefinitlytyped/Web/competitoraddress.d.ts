interface CompetitorAddress_Base extends WebEntity {
  addressnumber?: number | null;
  addresstypecode?: competitoraddress_addresstypecode | null;
  city?: string | null;
  competitoraddressid?: string | null;
  composite?: string | null;
  country?: string | null;
  county?: string | null;
  createdon?: Date | null;
  fax?: string | null;
  importsequencenumber?: number | null;
  latitude?: number | null;
  line1?: string | null;
  line2?: string | null;
  line3?: string | null;
  longitude?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  postalcode?: string | null;
  postofficebox?: string | null;
  shippingmethodcode?: competitoraddress_shippingmethodcode | null;
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
interface CompetitorAddress_Relationships {
  CompetitorAddress_SyncErrors?: SyncError_Result[] | null;
  competitoraddress_AsyncOperations?: AsyncOperation_Result[] | null;
  competitoraddress_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  competitoraddress_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  competitoraddress_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_competitoraddress?: UserEntityInstanceData_Result[] | null;
}
interface CompetitorAddress extends CompetitorAddress_Base, CompetitorAddress_Relationships {
  parentid_bind$competitors?: string | null;
}
interface CompetitorAddress_Create extends CompetitorAddress {
}
interface CompetitorAddress_Update extends CompetitorAddress {
}
interface CompetitorAddress_Select {
  addressnumber: WebAttribute<CompetitorAddress_Select, { addressnumber: number | null }, {  }>;
  addresstypecode: WebAttribute<CompetitorAddress_Select, { addresstypecode: competitoraddress_addresstypecode | null }, { addresstypecode_formatted?: string }>;
  city: WebAttribute<CompetitorAddress_Select, { city: string | null }, {  }>;
  competitoraddressid: WebAttribute<CompetitorAddress_Select, { competitoraddressid: string | null }, {  }>;
  composite: WebAttribute<CompetitorAddress_Select, { composite: string | null }, {  }>;
  country: WebAttribute<CompetitorAddress_Select, { country: string | null }, {  }>;
  county: WebAttribute<CompetitorAddress_Select, { county: string | null }, {  }>;
  createdby_guid: WebAttribute<CompetitorAddress_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CompetitorAddress_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CompetitorAddress_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  fax: WebAttribute<CompetitorAddress_Select, { fax: string | null }, {  }>;
  importsequencenumber: WebAttribute<CompetitorAddress_Select, { importsequencenumber: number | null }, {  }>;
  latitude: WebAttribute<CompetitorAddress_Select, { latitude: number | null }, {  }>;
  line1: WebAttribute<CompetitorAddress_Select, { line1: string | null }, {  }>;
  line2: WebAttribute<CompetitorAddress_Select, { line2: string | null }, {  }>;
  line3: WebAttribute<CompetitorAddress_Select, { line3: string | null }, {  }>;
  longitude: WebAttribute<CompetitorAddress_Select, { longitude: number | null }, {  }>;
  modifiedby_guid: WebAttribute<CompetitorAddress_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CompetitorAddress_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CompetitorAddress_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CompetitorAddress_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<CompetitorAddress_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  parentid_guid: WebAttribute<CompetitorAddress_Select, { parentid_guid: string | null }, { parentid_formatted?: string }>;
  postalcode: WebAttribute<CompetitorAddress_Select, { postalcode: string | null }, {  }>;
  postofficebox: WebAttribute<CompetitorAddress_Select, { postofficebox: string | null }, {  }>;
  shippingmethodcode: WebAttribute<CompetitorAddress_Select, { shippingmethodcode: competitoraddress_shippingmethodcode | null }, { shippingmethodcode_formatted?: string }>;
  stateorprovince: WebAttribute<CompetitorAddress_Select, { stateorprovince: string | null }, {  }>;
  telephone1: WebAttribute<CompetitorAddress_Select, { telephone1: string | null }, {  }>;
  telephone2: WebAttribute<CompetitorAddress_Select, { telephone2: string | null }, {  }>;
  telephone3: WebAttribute<CompetitorAddress_Select, { telephone3: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<CompetitorAddress_Select, { timezoneruleversionnumber: number | null }, {  }>;
  upszone: WebAttribute<CompetitorAddress_Select, { upszone: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<CompetitorAddress_Select, { utcconversiontimezonecode: number | null }, {  }>;
  utcoffset: WebAttribute<CompetitorAddress_Select, { utcoffset: number | null }, {  }>;
  versionnumber: WebAttribute<CompetitorAddress_Select, { versionnumber: number | null }, {  }>;
}
interface CompetitorAddress_Filter {
  addressnumber: number;
  addresstypecode: competitoraddress_addresstypecode;
  city: string;
  competitoraddressid: XQW.Guid;
  composite: string;
  country: string;
  county: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  fax: string;
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
  overriddencreatedon: Date;
  parentid_guid: XQW.Guid;
  postalcode: string;
  postofficebox: string;
  shippingmethodcode: competitoraddress_shippingmethodcode;
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
interface CompetitorAddress_Expand {
  CompetitorAddress_SyncErrors: WebExpand<CompetitorAddress_Expand, SyncError_Select, SyncError_Filter, { CompetitorAddress_SyncErrors: SyncError_Result[] }>;
  competitoraddress_AsyncOperations: WebExpand<CompetitorAddress_Expand, AsyncOperation_Select, AsyncOperation_Filter, { competitoraddress_AsyncOperations: AsyncOperation_Result[] }>;
  competitoraddress_BulkDeleteFailures: WebExpand<CompetitorAddress_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { competitoraddress_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  competitoraddress_MailboxTrackingFolders: WebExpand<CompetitorAddress_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { competitoraddress_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  competitoraddress_PrincipalObjectAttributeAccesses: WebExpand<CompetitorAddress_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { competitoraddress_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  createdby: WebExpand<CompetitorAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CompetitorAddress_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<CompetitorAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CompetitorAddress_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  parentid: WebExpand<CompetitorAddress_Expand, Competitor_Select, Competitor_Filter, { parentid: Competitor_Result }>;
  userentityinstancedata_competitoraddress: WebExpand<CompetitorAddress_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_competitoraddress: UserEntityInstanceData_Result[] }>;
}
interface CompetitorAddress_FormattedResult {
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
}
interface CompetitorAddress_Result extends CompetitorAddress_Base, CompetitorAddress_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  parentid_guid: string | null;
}
interface CompetitorAddress_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentid: WebMappingRetrieve<Competitor_Select,Competitor_Expand,Competitor_Filter,Competitor_Fixed,Competitor_Result,Competitor_FormattedResult>;
}
interface CompetitorAddress_RelatedMany {
  CompetitorAddress_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  competitoraddress_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  competitoraddress_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  competitoraddress_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  competitoraddress_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_competitoraddress: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  competitoraddresses: WebMappingRetrieve<CompetitorAddress_Select,CompetitorAddress_Expand,CompetitorAddress_Filter,CompetitorAddress_Fixed,CompetitorAddress_Result,CompetitorAddress_FormattedResult>;
}
interface WebEntitiesRelated {
  competitoraddresses: WebMappingRelated<CompetitorAddress_RelatedOne,CompetitorAddress_RelatedMany>;
}
interface WebEntitiesCUDA {
  competitoraddresses: WebMappingCUDA<CompetitorAddress_Create,CompetitorAddress_Update,CompetitorAddress_Select>;
}
