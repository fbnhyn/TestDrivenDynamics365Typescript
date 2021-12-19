interface CustomControl_Base extends WebEntity {
  authoringmanifest?: string | null;
  clientjson?: string | null;
  compatibledatatypes?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customcontrolid?: string | null;
  customcontrolidunique?: string | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  manifest?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  version?: string | null;
  versionnumber?: number | null;
}
interface CustomControl_Relationships {
  customcontrol_resource_id?: CustomControlResource_Result[] | null;
}
interface CustomControl extends CustomControl_Base, CustomControl_Relationships {
}
interface CustomControl_Create extends CustomControl {
}
interface CustomControl_Update extends CustomControl {
}
interface CustomControl_Select {
  authoringmanifest: WebAttribute<CustomControl_Select, { authoringmanifest: string | null }, {  }>;
  clientjson: WebAttribute<CustomControl_Select, { clientjson: string | null }, {  }>;
  compatibledatatypes: WebAttribute<CustomControl_Select, { compatibledatatypes: string | null }, {  }>;
  componentstate: WebAttribute<CustomControl_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<CustomControl_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<CustomControl_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<CustomControl_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customcontrolid: WebAttribute<CustomControl_Select, { customcontrolid: string | null }, {  }>;
  customcontrolidunique: WebAttribute<CustomControl_Select, { customcontrolidunique: string | null }, {  }>;
  introducedversion: WebAttribute<CustomControl_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<CustomControl_Select, { ismanaged: boolean | null }, {  }>;
  manifest: WebAttribute<CustomControl_Select, { manifest: string | null }, {  }>;
  modifiedby_guid: WebAttribute<CustomControl_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<CustomControl_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<CustomControl_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<CustomControl_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<CustomControl_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<CustomControl_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<CustomControl_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<CustomControl_Select, { supportingsolutionid: string | null }, {  }>;
  version: WebAttribute<CustomControl_Select, { version: string | null }, {  }>;
  versionnumber: WebAttribute<CustomControl_Select, { versionnumber: number | null }, {  }>;
}
interface CustomControl_Filter {
  authoringmanifest: string;
  clientjson: string;
  compatibledatatypes: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customcontrolid: XQW.Guid;
  customcontrolidunique: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  manifest: string;
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
}
interface CustomControl_Expand {
  createdby: WebExpand<CustomControl_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<CustomControl_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  customcontrol_resource_id: WebExpand<CustomControl_Expand, CustomControlResource_Select, CustomControlResource_Filter, { customcontrol_resource_id: CustomControlResource_Result[] }>;
  modifiedby: WebExpand<CustomControl_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<CustomControl_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<CustomControl_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface CustomControl_FormattedResult {
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
interface CustomControl_Result extends CustomControl_Base, CustomControl_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface CustomControl_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface CustomControl_RelatedMany {
  customcontrol_resource_id: WebMappingRetrieve<CustomControlResource_Select,CustomControlResource_Expand,CustomControlResource_Filter,CustomControlResource_Fixed,CustomControlResource_Result,CustomControlResource_FormattedResult>;
}
interface WebEntitiesRetrieve {
  customcontrols: WebMappingRetrieve<CustomControl_Select,CustomControl_Expand,CustomControl_Filter,CustomControl_Fixed,CustomControl_Result,CustomControl_FormattedResult>;
}
interface WebEntitiesRelated {
  customcontrols: WebMappingRelated<CustomControl_RelatedOne,CustomControl_RelatedMany>;
}
interface WebEntitiesCUDA {
  customcontrols: WebMappingCUDA<CustomControl_Create,CustomControl_Update,CustomControl_Select>;
}
