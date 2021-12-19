interface SdkMessageRequestField_Base extends WebEntity {
  clrparser?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customizationlevel?: number | null;
  fieldmask?: number | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  optional?: boolean | null;
  overwritetime?: Date | null;
  parameterbindinginformation?: string | null;
  parser?: string | null;
  position?: number | null;
  publicname?: string | null;
  sdkmessagerequestfieldid?: string | null;
  sdkmessagerequestfieldidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface SdkMessageRequestField_Relationships {
  userentityinstancedata_sdkmessagerequestfield?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessageRequestField extends SdkMessageRequestField_Base, SdkMessageRequestField_Relationships {
}
interface SdkMessageRequestField_Create extends SdkMessageRequestField {
}
interface SdkMessageRequestField_Update extends SdkMessageRequestField {
}
interface SdkMessageRequestField_Select {
  clrparser: WebAttribute<SdkMessageRequestField_Select, { clrparser: string | null }, {  }>;
  componentstate: WebAttribute<SdkMessageRequestField_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SdkMessageRequestField_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessageRequestField_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessageRequestField_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessageRequestField_Select, { customizationlevel: number | null }, {  }>;
  fieldmask: WebAttribute<SdkMessageRequestField_Select, { fieldmask: number | null }, {  }>;
  introducedversion: WebAttribute<SdkMessageRequestField_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<SdkMessageRequestField_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SdkMessageRequestField_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessageRequestField_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessageRequestField_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SdkMessageRequestField_Select, { name: string | null }, {  }>;
  optional: WebAttribute<SdkMessageRequestField_Select, { optional: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<SdkMessageRequestField_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SdkMessageRequestField_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parameterbindinginformation: WebAttribute<SdkMessageRequestField_Select, { parameterbindinginformation: string | null }, {  }>;
  parser: WebAttribute<SdkMessageRequestField_Select, { parser: string | null }, {  }>;
  position: WebAttribute<SdkMessageRequestField_Select, { position: number | null }, {  }>;
  publicname: WebAttribute<SdkMessageRequestField_Select, { publicname: string | null }, {  }>;
  sdkmessagerequestfieldid: WebAttribute<SdkMessageRequestField_Select, { sdkmessagerequestfieldid: string | null }, {  }>;
  sdkmessagerequestfieldidunique: WebAttribute<SdkMessageRequestField_Select, { sdkmessagerequestfieldidunique: string | null }, {  }>;
  sdkmessagerequestid_guid: WebAttribute<SdkMessageRequestField_Select, { sdkmessagerequestid_guid: string | null }, { sdkmessagerequestid_formatted?: string }>;
  solutionid: WebAttribute<SdkMessageRequestField_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SdkMessageRequestField_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<SdkMessageRequestField_Select, { versionnumber: number | null }, {  }>;
}
interface SdkMessageRequestField_Filter {
  clrparser: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationlevel: number;
  fieldmask: number;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  optional: boolean;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  parameterbindinginformation: string;
  parser: string;
  position: number;
  publicname: string;
  sdkmessagerequestfieldid: XQW.Guid;
  sdkmessagerequestfieldidunique: XQW.Guid;
  sdkmessagerequestid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface SdkMessageRequestField_Expand {
  createdby: WebExpand<SdkMessageRequestField_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessageRequestField_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SdkMessageRequestField_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessageRequestField_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessageRequestField_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  sdkmessagerequestid: WebExpand<SdkMessageRequestField_Expand, SdkMessageRequest_Select, SdkMessageRequest_Filter, { sdkmessagerequestid: SdkMessageRequest_Result }>;
  userentityinstancedata_sdkmessagerequestfield: WebExpand<SdkMessageRequestField_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessagerequestfield: UserEntityInstanceData_Result[] }>;
}
interface SdkMessageRequestField_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  sdkmessagerequestid_formatted?: string;
}
interface SdkMessageRequestField_Result extends SdkMessageRequestField_Base, SdkMessageRequestField_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  sdkmessagerequestid_guid: string | null;
}
interface SdkMessageRequestField_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  sdkmessagerequestid: WebMappingRetrieve<SdkMessageRequest_Select,SdkMessageRequest_Expand,SdkMessageRequest_Filter,SdkMessageRequest_Fixed,SdkMessageRequest_Result,SdkMessageRequest_FormattedResult>;
}
interface SdkMessageRequestField_RelatedMany {
  userentityinstancedata_sdkmessagerequestfield: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessagerequestfields: WebMappingRetrieve<SdkMessageRequestField_Select,SdkMessageRequestField_Expand,SdkMessageRequestField_Filter,SdkMessageRequestField_Fixed,SdkMessageRequestField_Result,SdkMessageRequestField_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessagerequestfields: WebMappingRelated<SdkMessageRequestField_RelatedOne,SdkMessageRequestField_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessagerequestfields: WebMappingCUDA<SdkMessageRequestField_Create,SdkMessageRequestField_Update,SdkMessageRequestField_Select>;
}
