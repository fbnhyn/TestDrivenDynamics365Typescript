interface SdkMessageResponse_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customizationlevel?: number | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  sdkmessageresponseid?: string | null;
  sdkmessageresponseidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface SdkMessageResponse_Relationships {
  messageresponse_sdkmessageresponsefield?: SdkMessageResponseField_Result[] | null;
  userentityinstancedata_sdkmessageresponse?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessageResponse extends SdkMessageResponse_Base, SdkMessageResponse_Relationships {
}
interface SdkMessageResponse_Create extends SdkMessageResponse {
}
interface SdkMessageResponse_Update extends SdkMessageResponse {
}
interface SdkMessageResponse_Select {
  componentstate: WebAttribute<SdkMessageResponse_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SdkMessageResponse_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessageResponse_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessageResponse_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessageResponse_Select, { customizationlevel: number | null }, {  }>;
  introducedversion: WebAttribute<SdkMessageResponse_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<SdkMessageResponse_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SdkMessageResponse_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessageResponse_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessageResponse_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<SdkMessageResponse_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SdkMessageResponse_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  sdkmessagerequestid_guid: WebAttribute<SdkMessageResponse_Select, { sdkmessagerequestid_guid: string | null }, { sdkmessagerequestid_formatted?: string }>;
  sdkmessageresponseid: WebAttribute<SdkMessageResponse_Select, { sdkmessageresponseid: string | null }, {  }>;
  sdkmessageresponseidunique: WebAttribute<SdkMessageResponse_Select, { sdkmessageresponseidunique: string | null }, {  }>;
  solutionid: WebAttribute<SdkMessageResponse_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SdkMessageResponse_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<SdkMessageResponse_Select, { versionnumber: number | null }, {  }>;
}
interface SdkMessageResponse_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationlevel: number;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  sdkmessagerequestid_guid: XQW.Guid;
  sdkmessageresponseid: XQW.Guid;
  sdkmessageresponseidunique: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface SdkMessageResponse_Expand {
  createdby: WebExpand<SdkMessageResponse_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessageResponse_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  messageresponse_sdkmessageresponsefield: WebExpand<SdkMessageResponse_Expand, SdkMessageResponseField_Select, SdkMessageResponseField_Filter, { messageresponse_sdkmessageresponsefield: SdkMessageResponseField_Result[] }>;
  modifiedby: WebExpand<SdkMessageResponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessageResponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessageResponse_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  sdkmessagerequestid: WebExpand<SdkMessageResponse_Expand, SdkMessageRequest_Select, SdkMessageRequest_Filter, { sdkmessagerequestid: SdkMessageRequest_Result }>;
  userentityinstancedata_sdkmessageresponse: WebExpand<SdkMessageResponse_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessageresponse: UserEntityInstanceData_Result[] }>;
}
interface SdkMessageResponse_FormattedResult {
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
interface SdkMessageResponse_Result extends SdkMessageResponse_Base, SdkMessageResponse_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  sdkmessagerequestid_guid: string | null;
}
interface SdkMessageResponse_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  sdkmessagerequestid: WebMappingRetrieve<SdkMessageRequest_Select,SdkMessageRequest_Expand,SdkMessageRequest_Filter,SdkMessageRequest_Fixed,SdkMessageRequest_Result,SdkMessageRequest_FormattedResult>;
}
interface SdkMessageResponse_RelatedMany {
  messageresponse_sdkmessageresponsefield: WebMappingRetrieve<SdkMessageResponseField_Select,SdkMessageResponseField_Expand,SdkMessageResponseField_Filter,SdkMessageResponseField_Fixed,SdkMessageResponseField_Result,SdkMessageResponseField_FormattedResult>;
  userentityinstancedata_sdkmessageresponse: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessageresponses: WebMappingRetrieve<SdkMessageResponse_Select,SdkMessageResponse_Expand,SdkMessageResponse_Filter,SdkMessageResponse_Fixed,SdkMessageResponse_Result,SdkMessageResponse_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessageresponses: WebMappingRelated<SdkMessageResponse_RelatedOne,SdkMessageResponse_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessageresponses: WebMappingCUDA<SdkMessageResponse_Create,SdkMessageResponse_Update,SdkMessageResponse_Select>;
}
