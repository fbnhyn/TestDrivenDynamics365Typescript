interface AuthorizationServer_Base extends WebEntity {
  authorizationserverid?: string | null;
  authorizationservertype?: authorizationserver_authorizationservertype | null;
  createdon?: Date | null;
  metadata?: string | null;
  metadatarefreshedon?: Date | null;
  metadataurl?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  principalid?: string | null;
  realm?: string | null;
  statecode?: authorizationserver_statecode | null;
  statuscode?: authorizationserver_statuscode | null;
  tenantid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface AuthorizationServer_Relationships {
}
interface AuthorizationServer extends AuthorizationServer_Base, AuthorizationServer_Relationships {
}
interface AuthorizationServer_Create extends AuthorizationServer {
}
interface AuthorizationServer_Update extends AuthorizationServer {
}
interface AuthorizationServer_Select {
  authorizationserverid: WebAttribute<AuthorizationServer_Select, { authorizationserverid: string | null }, {  }>;
  authorizationservertype: WebAttribute<AuthorizationServer_Select, { authorizationservertype: authorizationserver_authorizationservertype | null }, { authorizationservertype_formatted?: string }>;
  createdby_guid: WebAttribute<AuthorizationServer_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<AuthorizationServer_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<AuthorizationServer_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  metadata: WebAttribute<AuthorizationServer_Select, { metadata: string | null }, {  }>;
  metadatarefreshedon: WebAttribute<AuthorizationServer_Select, { metadatarefreshedon: Date | null }, { metadatarefreshedon_formatted?: string }>;
  metadataurl: WebAttribute<AuthorizationServer_Select, { metadataurl: string | null }, {  }>;
  modifiedby_guid: WebAttribute<AuthorizationServer_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<AuthorizationServer_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<AuthorizationServer_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<AuthorizationServer_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<AuthorizationServer_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  principalid: WebAttribute<AuthorizationServer_Select, { principalid: string | null }, {  }>;
  realm: WebAttribute<AuthorizationServer_Select, { realm: string | null }, {  }>;
  statecode: WebAttribute<AuthorizationServer_Select, { statecode: authorizationserver_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<AuthorizationServer_Select, { statuscode: authorizationserver_statuscode | null }, { statuscode_formatted?: string }>;
  tenantid: WebAttribute<AuthorizationServer_Select, { tenantid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<AuthorizationServer_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<AuthorizationServer_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<AuthorizationServer_Select, { versionnumber: number | null }, {  }>;
}
interface AuthorizationServer_Filter {
  authorizationserverid: XQW.Guid;
  authorizationservertype: authorizationserver_authorizationservertype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  metadata: string;
  metadatarefreshedon: Date;
  metadataurl: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  principalid: string;
  realm: string;
  statecode: authorizationserver_statecode;
  statuscode: authorizationserver_statuscode;
  tenantid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface AuthorizationServer_Expand {
  createdby: WebExpand<AuthorizationServer_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<AuthorizationServer_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<AuthorizationServer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<AuthorizationServer_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<AuthorizationServer_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface AuthorizationServer_FormattedResult {
  authorizationservertype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  metadatarefreshedon_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface AuthorizationServer_Result extends AuthorizationServer_Base, AuthorizationServer_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface AuthorizationServer_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface AuthorizationServer_RelatedMany {
}
interface WebEntitiesRetrieve {
  authorizationservers: WebMappingRetrieve<AuthorizationServer_Select,AuthorizationServer_Expand,AuthorizationServer_Filter,AuthorizationServer_Fixed,AuthorizationServer_Result,AuthorizationServer_FormattedResult>;
}
interface WebEntitiesRelated {
  authorizationservers: WebMappingRelated<AuthorizationServer_RelatedOne,AuthorizationServer_RelatedMany>;
}
interface WebEntitiesCUDA {
  authorizationservers: WebMappingCUDA<AuthorizationServer_Create,AuthorizationServer_Update,AuthorizationServer_Select>;
}
