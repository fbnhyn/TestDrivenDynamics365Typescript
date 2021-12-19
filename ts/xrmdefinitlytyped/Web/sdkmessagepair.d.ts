interface SdkMessagePair_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customizationlevel?: number | null;
  deprecatedversion?: string | null;
  endpoint?: string | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  namespace?: string | null;
  overwritetime?: Date | null;
  sdkmessagebindinginformation?: string | null;
  sdkmessagepairid?: string | null;
  sdkmessagepairidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface SdkMessagePair_Relationships {
  messagepair_sdkmessagerequest?: SdkMessageRequest_Result[] | null;
  userentityinstancedata_sdkmessagepair?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessagePair extends SdkMessagePair_Base, SdkMessagePair_Relationships {
}
interface SdkMessagePair_Create extends SdkMessagePair {
}
interface SdkMessagePair_Update extends SdkMessagePair {
}
interface SdkMessagePair_Select {
  componentstate: WebAttribute<SdkMessagePair_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SdkMessagePair_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessagePair_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessagePair_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessagePair_Select, { customizationlevel: number | null }, {  }>;
  deprecatedversion: WebAttribute<SdkMessagePair_Select, { deprecatedversion: string | null }, {  }>;
  endpoint: WebAttribute<SdkMessagePair_Select, { endpoint: string | null }, {  }>;
  introducedversion: WebAttribute<SdkMessagePair_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<SdkMessagePair_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SdkMessagePair_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessagePair_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessagePair_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  namespace: WebAttribute<SdkMessagePair_Select, { namespace: string | null }, {  }>;
  organizationid_guid: WebAttribute<SdkMessagePair_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SdkMessagePair_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  sdkmessagebindinginformation: WebAttribute<SdkMessagePair_Select, { sdkmessagebindinginformation: string | null }, {  }>;
  sdkmessageid_guid: WebAttribute<SdkMessagePair_Select, { sdkmessageid_guid: string | null }, { sdkmessageid_formatted?: string }>;
  sdkmessagepairid: WebAttribute<SdkMessagePair_Select, { sdkmessagepairid: string | null }, {  }>;
  sdkmessagepairidunique: WebAttribute<SdkMessagePair_Select, { sdkmessagepairidunique: string | null }, {  }>;
  solutionid: WebAttribute<SdkMessagePair_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SdkMessagePair_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<SdkMessagePair_Select, { versionnumber: number | null }, {  }>;
}
interface SdkMessagePair_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationlevel: number;
  deprecatedversion: string;
  endpoint: string;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  namespace: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  sdkmessagebindinginformation: string;
  sdkmessageid_guid: XQW.Guid;
  sdkmessagepairid: XQW.Guid;
  sdkmessagepairidunique: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface SdkMessagePair_Expand {
  createdby: WebExpand<SdkMessagePair_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessagePair_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  messagepair_sdkmessagerequest: WebExpand<SdkMessagePair_Expand, SdkMessageRequest_Select, SdkMessageRequest_Filter, { messagepair_sdkmessagerequest: SdkMessageRequest_Result[] }>;
  modifiedby: WebExpand<SdkMessagePair_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessagePair_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessagePair_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  sdkmessageid: WebExpand<SdkMessagePair_Expand, SdkMessage_Select, SdkMessage_Filter, { sdkmessageid: SdkMessage_Result }>;
  userentityinstancedata_sdkmessagepair: WebExpand<SdkMessagePair_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessagepair: UserEntityInstanceData_Result[] }>;
}
interface SdkMessagePair_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  sdkmessageid_formatted?: string;
}
interface SdkMessagePair_Result extends SdkMessagePair_Base, SdkMessagePair_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  sdkmessageid_guid: string | null;
}
interface SdkMessagePair_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  sdkmessageid: WebMappingRetrieve<SdkMessage_Select,SdkMessage_Expand,SdkMessage_Filter,SdkMessage_Fixed,SdkMessage_Result,SdkMessage_FormattedResult>;
}
interface SdkMessagePair_RelatedMany {
  messagepair_sdkmessagerequest: WebMappingRetrieve<SdkMessageRequest_Select,SdkMessageRequest_Expand,SdkMessageRequest_Filter,SdkMessageRequest_Fixed,SdkMessageRequest_Result,SdkMessageRequest_FormattedResult>;
  userentityinstancedata_sdkmessagepair: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessagepairs: WebMappingRetrieve<SdkMessagePair_Select,SdkMessagePair_Expand,SdkMessagePair_Filter,SdkMessagePair_Fixed,SdkMessagePair_Result,SdkMessagePair_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessagepairs: WebMappingRelated<SdkMessagePair_RelatedOne,SdkMessagePair_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessagepairs: WebMappingCUDA<SdkMessagePair_Create,SdkMessagePair_Update,SdkMessagePair_Select>;
}
