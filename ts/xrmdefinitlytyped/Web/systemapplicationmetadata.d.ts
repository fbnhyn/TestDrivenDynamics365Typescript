interface SystemApplicationMetadata_Base extends WebEntity {
  associatedentitylogicalname?: string | null;
  createdon?: Date | null;
  data?: string | null;
  dependency?: string | null;
  displayname?: string | null;
  formfactor?: number | null;
  isdefault?: boolean | null;
  lcid?: number | null;
  metadatasubtype?: number | null;
  metadatatype?: number | null;
  modifiedon?: Date | null;
  sourceid?: string | null;
  state?: number | null;
  systemapplicationmetadataid?: string | null;
  version?: string | null;
}
interface SystemApplicationMetadata_Relationships {
}
interface SystemApplicationMetadata extends SystemApplicationMetadata_Base, SystemApplicationMetadata_Relationships {
}
interface SystemApplicationMetadata_Create extends SystemApplicationMetadata {
}
interface SystemApplicationMetadata_Update extends SystemApplicationMetadata {
}
interface SystemApplicationMetadata_Select {
  associatedentitylogicalname: WebAttribute<SystemApplicationMetadata_Select, { associatedentitylogicalname: string | null }, {  }>;
  createdby_guid: WebAttribute<SystemApplicationMetadata_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SystemApplicationMetadata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SystemApplicationMetadata_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  data: WebAttribute<SystemApplicationMetadata_Select, { data: string | null }, {  }>;
  dependency: WebAttribute<SystemApplicationMetadata_Select, { dependency: string | null }, {  }>;
  displayname: WebAttribute<SystemApplicationMetadata_Select, { displayname: string | null }, {  }>;
  formfactor: WebAttribute<SystemApplicationMetadata_Select, { formfactor: number | null }, {  }>;
  isdefault: WebAttribute<SystemApplicationMetadata_Select, { isdefault: boolean | null }, {  }>;
  lcid: WebAttribute<SystemApplicationMetadata_Select, { lcid: number | null }, {  }>;
  metadatasubtype: WebAttribute<SystemApplicationMetadata_Select, { metadatasubtype: number | null }, {  }>;
  metadatatype: WebAttribute<SystemApplicationMetadata_Select, { metadatatype: number | null }, {  }>;
  modifiedby_guid: WebAttribute<SystemApplicationMetadata_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SystemApplicationMetadata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SystemApplicationMetadata_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<SystemApplicationMetadata_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  sourceid: WebAttribute<SystemApplicationMetadata_Select, { sourceid: string | null }, {  }>;
  state: WebAttribute<SystemApplicationMetadata_Select, { state: number | null }, {  }>;
  systemapplicationmetadataid: WebAttribute<SystemApplicationMetadata_Select, { systemapplicationmetadataid: string | null }, {  }>;
  version: WebAttribute<SystemApplicationMetadata_Select, { version: string | null }, {  }>;
}
interface SystemApplicationMetadata_Filter {
  associatedentitylogicalname: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  data: string;
  dependency: string;
  displayname: string;
  formfactor: number;
  isdefault: boolean;
  lcid: number;
  metadatasubtype: number;
  metadatatype: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  sourceid: string;
  state: number;
  systemapplicationmetadataid: XQW.Guid;
  version: string;
}
interface SystemApplicationMetadata_Expand {
  createdby: WebExpand<SystemApplicationMetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SystemApplicationMetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SystemApplicationMetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SystemApplicationMetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SystemApplicationMetadata_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface SystemApplicationMetadata_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
}
interface SystemApplicationMetadata_Result extends SystemApplicationMetadata_Base, SystemApplicationMetadata_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface SystemApplicationMetadata_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SystemApplicationMetadata_RelatedMany {
}
interface WebEntitiesRetrieve {
  systemapplicationmetadatacollection: WebMappingRetrieve<SystemApplicationMetadata_Select,SystemApplicationMetadata_Expand,SystemApplicationMetadata_Filter,SystemApplicationMetadata_Fixed,SystemApplicationMetadata_Result,SystemApplicationMetadata_FormattedResult>;
}
interface WebEntitiesRelated {
  systemapplicationmetadatacollection: WebMappingRelated<SystemApplicationMetadata_RelatedOne,SystemApplicationMetadata_RelatedMany>;
}
interface WebEntitiesCUDA {
  systemapplicationmetadatacollection: WebMappingCUDA<SystemApplicationMetadata_Create,SystemApplicationMetadata_Update,SystemApplicationMetadata_Select>;
}
