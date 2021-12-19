interface CustomControlResource_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customcontrolid?: string | null;
  customcontrolresourceid?: string | null;
  customcontrolresourceidunique?: string | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  version?: string | null;
  versionnumber?: number | null;
  versionrequirement?: string | null;
  webresourceid?: string | null;
}
interface CustomControlResource_Relationships {
  customcontrolid_customcontrol?: CustomControl_Result | null;
}
interface CustomControlResource extends CustomControlResource_Base, CustomControlResource_Relationships {
}
interface CustomControlResource_Create extends CustomControlResource {
  customcontrolid_customcontrol_bind$customcontrols?: string | null;
}
interface CustomControlResource_Update extends CustomControlResource {
}
interface CustomControlResource_Select {
  componentstate: WebAttribute<CustomControlResource_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<CustomControlResource_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CustomControlResource_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CustomControlResource_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customcontrolid: WebAttribute<CustomControlResource_Select, { customcontrolid: string | null }, {  }>;
  customcontrolresourceid: WebAttribute<CustomControlResource_Select, { customcontrolresourceid: string | null }, {  }>;
  customcontrolresourceidunique: WebAttribute<CustomControlResource_Select, { customcontrolresourceidunique: string | null }, {  }>;
  introducedversion: WebAttribute<CustomControlResource_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<CustomControlResource_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<CustomControlResource_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CustomControlResource_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CustomControlResource_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CustomControlResource_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<CustomControlResource_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<CustomControlResource_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<CustomControlResource_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<CustomControlResource_Select, { supportingsolutionid: string | null }, {  }>;
  version: WebAttribute<CustomControlResource_Select, { version: string | null }, {  }>;
  versionnumber: WebAttribute<CustomControlResource_Select, { versionnumber: number | null }, {  }>;
  versionrequirement: WebAttribute<CustomControlResource_Select, { versionrequirement: string | null }, {  }>;
  webresourceid: WebAttribute<CustomControlResource_Select, { webresourceid: string | null }, {  }>;
}
interface CustomControlResource_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customcontrolid: XQW.Guid;
  customcontrolresourceid: XQW.Guid;
  customcontrolresourceidunique: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  version: string;
  versionnumber: number;
  versionrequirement: string;
  webresourceid: XQW.Guid;
}
interface CustomControlResource_Expand {
  createdby: WebExpand<CustomControlResource_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CustomControlResource_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customcontrolid_customcontrol: WebExpand<CustomControlResource_Expand, CustomControl_Select, CustomControl_Filter, { customcontrolid_customcontrol: CustomControl_Result }>;
  modifiedby: WebExpand<CustomControlResource_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CustomControlResource_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<CustomControlResource_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface CustomControlResource_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
}
interface CustomControlResource_Result extends CustomControlResource_Base, CustomControlResource_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface CustomControlResource_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  customcontrolid_customcontrol: WebMappingRetrieve<CustomControl_Select,CustomControl_Expand,CustomControl_Filter,CustomControl_Fixed,CustomControl_Result,CustomControl_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface CustomControlResource_RelatedMany {
}
interface WebEntitiesRetrieve {
  customcontrolresources: WebMappingRetrieve<CustomControlResource_Select,CustomControlResource_Expand,CustomControlResource_Filter,CustomControlResource_Fixed,CustomControlResource_Result,CustomControlResource_FormattedResult>;
}
interface WebEntitiesRelated {
  customcontrolresources: WebMappingRelated<CustomControlResource_RelatedOne,CustomControlResource_RelatedMany>;
}
interface WebEntitiesCUDA {
  customcontrolresources: WebMappingCUDA<CustomControlResource_Create,CustomControlResource_Update,CustomControlResource_Select>;
}
