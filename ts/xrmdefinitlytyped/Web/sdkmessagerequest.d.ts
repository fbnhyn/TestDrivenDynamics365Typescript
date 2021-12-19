interface SdkMessageRequest_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customizationlevel?: number | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  primaryobjecttypecode?: string | null;
  sdkmessagerequestid?: string | null;
  sdkmessagerequestidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface SdkMessageRequest_Relationships {
  messagerequest_sdkmessagerequestfield?: SdkMessageRequestField_Result[] | null;
  messagerequest_sdkmessageresponse?: SdkMessageResponse_Result[] | null;
  userentityinstancedata_sdkmessagerequest?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessageRequest extends SdkMessageRequest_Base, SdkMessageRequest_Relationships {
}
interface SdkMessageRequest_Create extends SdkMessageRequest {
}
interface SdkMessageRequest_Update extends SdkMessageRequest {
}
interface SdkMessageRequest_Select {
  componentstate: WebAttribute<SdkMessageRequest_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SdkMessageRequest_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessageRequest_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessageRequest_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessageRequest_Select, { customizationlevel: number | null }, {  }>;
  introducedversion: WebAttribute<SdkMessageRequest_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<SdkMessageRequest_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SdkMessageRequest_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessageRequest_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessageRequest_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SdkMessageRequest_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SdkMessageRequest_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SdkMessageRequest_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  primaryobjecttypecode: WebAttribute<SdkMessageRequest_Select, { primaryobjecttypecode: string | null }, {  }>;
  sdkmessagepairid_guid: WebAttribute<SdkMessageRequest_Select, { sdkmessagepairid_guid: string | null }, { sdkmessagepairid_formatted?: string }>;
  sdkmessagerequestid: WebAttribute<SdkMessageRequest_Select, { sdkmessagerequestid: string | null }, {  }>;
  sdkmessagerequestidunique: WebAttribute<SdkMessageRequest_Select, { sdkmessagerequestidunique: string | null }, {  }>;
  solutionid: WebAttribute<SdkMessageRequest_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SdkMessageRequest_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<SdkMessageRequest_Select, { versionnumber: number | null }, {  }>;
}
interface SdkMessageRequest_Filter {
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
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  primaryobjecttypecode: string;
  sdkmessagepairid_guid: XQW.Guid;
  sdkmessagerequestid: XQW.Guid;
  sdkmessagerequestidunique: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface SdkMessageRequest_Expand {
  createdby: WebExpand<SdkMessageRequest_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessageRequest_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  messagerequest_sdkmessagerequestfield: WebExpand<SdkMessageRequest_Expand, SdkMessageRequestField_Select, SdkMessageRequestField_Filter, { messagerequest_sdkmessagerequestfield: SdkMessageRequestField_Result[] }>;
  messagerequest_sdkmessageresponse: WebExpand<SdkMessageRequest_Expand, SdkMessageResponse_Select, SdkMessageResponse_Filter, { messagerequest_sdkmessageresponse: SdkMessageResponse_Result[] }>;
  modifiedby: WebExpand<SdkMessageRequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessageRequest_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessageRequest_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  sdkmessagepairid: WebExpand<SdkMessageRequest_Expand, SdkMessagePair_Select, SdkMessagePair_Filter, { sdkmessagepairid: SdkMessagePair_Result }>;
  userentityinstancedata_sdkmessagerequest: WebExpand<SdkMessageRequest_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessagerequest: UserEntityInstanceData_Result[] }>;
}
interface SdkMessageRequest_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  sdkmessagepairid_formatted?: string;
}
interface SdkMessageRequest_Result extends SdkMessageRequest_Base, SdkMessageRequest_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  sdkmessagepairid_guid: string | null;
}
interface SdkMessageRequest_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  sdkmessagepairid: WebMappingRetrieve<SdkMessagePair_Select,SdkMessagePair_Expand,SdkMessagePair_Filter,SdkMessagePair_Fixed,SdkMessagePair_Result,SdkMessagePair_FormattedResult>;
}
interface SdkMessageRequest_RelatedMany {
  messagerequest_sdkmessagerequestfield: WebMappingRetrieve<SdkMessageRequestField_Select,SdkMessageRequestField_Expand,SdkMessageRequestField_Filter,SdkMessageRequestField_Fixed,SdkMessageRequestField_Result,SdkMessageRequestField_FormattedResult>;
  messagerequest_sdkmessageresponse: WebMappingRetrieve<SdkMessageResponse_Select,SdkMessageResponse_Expand,SdkMessageResponse_Filter,SdkMessageResponse_Fixed,SdkMessageResponse_Result,SdkMessageResponse_FormattedResult>;
  userentityinstancedata_sdkmessagerequest: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessagerequests: WebMappingRetrieve<SdkMessageRequest_Select,SdkMessageRequest_Expand,SdkMessageRequest_Filter,SdkMessageRequest_Fixed,SdkMessageRequest_Result,SdkMessageRequest_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessagerequests: WebMappingRelated<SdkMessageRequest_RelatedOne,SdkMessageRequest_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessagerequests: WebMappingCUDA<SdkMessageRequest_Create,SdkMessageRequest_Update,SdkMessageRequest_Select>;
}
