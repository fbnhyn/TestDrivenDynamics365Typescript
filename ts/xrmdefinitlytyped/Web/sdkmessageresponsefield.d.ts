interface SdkMessageResponseField_Base extends WebEntity {
  clrformatter?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customizationlevel?: number | null;
  formatter?: string | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  parameterbindinginformation?: string | null;
  position?: number | null;
  publicname?: string | null;
  sdkmessageresponsefieldid?: string | null;
  sdkmessageresponsefieldidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  value?: string | null;
  versionnumber?: number | null;
}
interface SdkMessageResponseField_Relationships {
  userentityinstancedata_sdkmessageresponsefield?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessageResponseField extends SdkMessageResponseField_Base, SdkMessageResponseField_Relationships {
}
interface SdkMessageResponseField_Create extends SdkMessageResponseField {
}
interface SdkMessageResponseField_Update extends SdkMessageResponseField {
}
interface SdkMessageResponseField_Select {
  clrformatter: WebAttribute<SdkMessageResponseField_Select, { clrformatter: string | null }, {  }>;
  componentstate: WebAttribute<SdkMessageResponseField_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SdkMessageResponseField_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessageResponseField_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessageResponseField_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessageResponseField_Select, { customizationlevel: number | null }, {  }>;
  formatter: WebAttribute<SdkMessageResponseField_Select, { formatter: string | null }, {  }>;
  introducedversion: WebAttribute<SdkMessageResponseField_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<SdkMessageResponseField_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SdkMessageResponseField_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessageResponseField_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessageResponseField_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SdkMessageResponseField_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SdkMessageResponseField_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SdkMessageResponseField_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parameterbindinginformation: WebAttribute<SdkMessageResponseField_Select, { parameterbindinginformation: string | null }, {  }>;
  position: WebAttribute<SdkMessageResponseField_Select, { position: number | null }, {  }>;
  publicname: WebAttribute<SdkMessageResponseField_Select, { publicname: string | null }, {  }>;
  sdkmessageresponsefieldid: WebAttribute<SdkMessageResponseField_Select, { sdkmessageresponsefieldid: string | null }, {  }>;
  sdkmessageresponsefieldidunique: WebAttribute<SdkMessageResponseField_Select, { sdkmessageresponsefieldidunique: string | null }, {  }>;
  sdkmessageresponseid_guid: WebAttribute<SdkMessageResponseField_Select, { sdkmessageresponseid_guid: string | null }, { sdkmessageresponseid_formatted?: string }>;
  solutionid: WebAttribute<SdkMessageResponseField_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SdkMessageResponseField_Select, { supportingsolutionid: string | null }, {  }>;
  value: WebAttribute<SdkMessageResponseField_Select, { value: string | null }, {  }>;
  versionnumber: WebAttribute<SdkMessageResponseField_Select, { versionnumber: number | null }, {  }>;
}
interface SdkMessageResponseField_Filter {
  clrformatter: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationlevel: number;
  formatter: string;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  parameterbindinginformation: string;
  position: number;
  publicname: string;
  sdkmessageresponsefieldid: XQW.Guid;
  sdkmessageresponsefieldidunique: XQW.Guid;
  sdkmessageresponseid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  value: string;
  versionnumber: number;
}
interface SdkMessageResponseField_Expand {
  createdby: WebExpand<SdkMessageResponseField_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessageResponseField_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SdkMessageResponseField_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessageResponseField_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessageResponseField_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  sdkmessageresponseid: WebExpand<SdkMessageResponseField_Expand, SdkMessageResponse_Select, SdkMessageResponse_Filter, { sdkmessageresponseid: SdkMessageResponse_Result }>;
  userentityinstancedata_sdkmessageresponsefield: WebExpand<SdkMessageResponseField_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessageresponsefield: UserEntityInstanceData_Result[] }>;
}
interface SdkMessageResponseField_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  sdkmessageresponseid_formatted?: string;
}
interface SdkMessageResponseField_Result extends SdkMessageResponseField_Base, SdkMessageResponseField_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  sdkmessageresponseid_guid: string | null;
}
interface SdkMessageResponseField_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  sdkmessageresponseid: WebMappingRetrieve<SdkMessageResponse_Select,SdkMessageResponse_Expand,SdkMessageResponse_Filter,SdkMessageResponse_Fixed,SdkMessageResponse_Result,SdkMessageResponse_FormattedResult>;
}
interface SdkMessageResponseField_RelatedMany {
  userentityinstancedata_sdkmessageresponsefield: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessageresponsefields: WebMappingRetrieve<SdkMessageResponseField_Select,SdkMessageResponseField_Expand,SdkMessageResponseField_Filter,SdkMessageResponseField_Fixed,SdkMessageResponseField_Result,SdkMessageResponseField_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessageresponsefields: WebMappingRelated<SdkMessageResponseField_RelatedOne,SdkMessageResponseField_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessageresponsefields: WebMappingCUDA<SdkMessageResponseField_Create,SdkMessageResponseField_Update,SdkMessageResponseField_Select>;
}
