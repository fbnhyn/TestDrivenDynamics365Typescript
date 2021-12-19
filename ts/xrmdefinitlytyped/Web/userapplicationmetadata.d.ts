interface UserApplicationMetadata_Base extends WebEntity {
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
  userapplicationmetadataid?: string | null;
}
interface UserApplicationMetadata_Relationships {
}
interface UserApplicationMetadata extends UserApplicationMetadata_Base, UserApplicationMetadata_Relationships {
}
interface UserApplicationMetadata_Create extends UserApplicationMetadata {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface UserApplicationMetadata_Update extends UserApplicationMetadata {
}
interface UserApplicationMetadata_Select {
  associatedentitylogicalname: WebAttribute<UserApplicationMetadata_Select, { associatedentitylogicalname: string | null }, {  }>;
  createdby_guid: WebAttribute<UserApplicationMetadata_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<UserApplicationMetadata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<UserApplicationMetadata_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  data: WebAttribute<UserApplicationMetadata_Select, { data: string | null }, {  }>;
  dependency: WebAttribute<UserApplicationMetadata_Select, { dependency: string | null }, {  }>;
  displayname: WebAttribute<UserApplicationMetadata_Select, { displayname: string | null }, {  }>;
  formfactor: WebAttribute<UserApplicationMetadata_Select, { formfactor: number | null }, {  }>;
  isdefault: WebAttribute<UserApplicationMetadata_Select, { isdefault: boolean | null }, {  }>;
  lcid: WebAttribute<UserApplicationMetadata_Select, { lcid: number | null }, {  }>;
  metadatasubtype: WebAttribute<UserApplicationMetadata_Select, { metadatasubtype: number | null }, {  }>;
  metadatatype: WebAttribute<UserApplicationMetadata_Select, { metadatatype: number | null }, {  }>;
  modifiedby_guid: WebAttribute<UserApplicationMetadata_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<UserApplicationMetadata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<UserApplicationMetadata_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  ownerid_guid: WebAttribute<UserApplicationMetadata_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<UserApplicationMetadata_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<UserApplicationMetadata_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  sourceid: WebAttribute<UserApplicationMetadata_Select, { sourceid: string | null }, {  }>;
  state: WebAttribute<UserApplicationMetadata_Select, { state: number | null }, {  }>;
  userapplicationmetadataid: WebAttribute<UserApplicationMetadata_Select, { userapplicationmetadataid: string | null }, {  }>;
}
interface UserApplicationMetadata_Filter {
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
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  sourceid: string;
  state: number;
  userapplicationmetadataid: XQW.Guid;
}
interface UserApplicationMetadata_Expand {
  createdby: WebExpand<UserApplicationMetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<UserApplicationMetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<UserApplicationMetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<UserApplicationMetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<UserApplicationMetadata_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<UserApplicationMetadata_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owninguser: WebExpand<UserApplicationMetadata_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface UserApplicationMetadata_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
}
interface UserApplicationMetadata_Result extends UserApplicationMetadata_Base, UserApplicationMetadata_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
}
interface UserApplicationMetadata_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface UserApplicationMetadata_RelatedMany {
}
interface WebEntitiesRetrieve {
  userapplicationmetadatacollection: WebMappingRetrieve<UserApplicationMetadata_Select,UserApplicationMetadata_Expand,UserApplicationMetadata_Filter,UserApplicationMetadata_Fixed,UserApplicationMetadata_Result,UserApplicationMetadata_FormattedResult>;
}
interface WebEntitiesRelated {
  userapplicationmetadatacollection: WebMappingRelated<UserApplicationMetadata_RelatedOne,UserApplicationMetadata_RelatedMany>;
}
interface WebEntitiesCUDA {
  userapplicationmetadatacollection: WebMappingCUDA<UserApplicationMetadata_Create,UserApplicationMetadata_Update,UserApplicationMetadata_Select>;
}
