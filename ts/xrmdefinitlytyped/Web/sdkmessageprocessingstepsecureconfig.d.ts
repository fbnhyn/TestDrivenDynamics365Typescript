interface SdkMessageProcessingStepSecureConfig_Base extends WebEntity {
  createdon?: Date | null;
  customizationlevel?: number | null;
  modifiedon?: Date | null;
  sdkmessageprocessingstepsecureconfigid?: string | null;
  sdkmessageprocessingstepsecureconfigidunique?: string | null;
  secureconfig?: string | null;
}
interface SdkMessageProcessingStepSecureConfig_Relationships {
  sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep?: SdkMessageProcessingStep_Result[] | null;
  userentityinstancedata_sdkmessageprocessingstepsecureconfig?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessageProcessingStepSecureConfig extends SdkMessageProcessingStepSecureConfig_Base, SdkMessageProcessingStepSecureConfig_Relationships {
}
interface SdkMessageProcessingStepSecureConfig_Create extends SdkMessageProcessingStepSecureConfig {
}
interface SdkMessageProcessingStepSecureConfig_Update extends SdkMessageProcessingStepSecureConfig {
}
interface SdkMessageProcessingStepSecureConfig_Select {
  createdby_guid: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { customizationlevel: number | null }, {  }>;
  modifiedby_guid: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  sdkmessageprocessingstepsecureconfigid: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { sdkmessageprocessingstepsecureconfigid: string | null }, {  }>;
  sdkmessageprocessingstepsecureconfigidunique: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { sdkmessageprocessingstepsecureconfigidunique: string | null }, {  }>;
  secureconfig: WebAttribute<SdkMessageProcessingStepSecureConfig_Select, { secureconfig: string | null }, {  }>;
}
interface SdkMessageProcessingStepSecureConfig_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationlevel: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  sdkmessageprocessingstepsecureconfigid: XQW.Guid;
  sdkmessageprocessingstepsecureconfigidunique: XQW.Guid;
  secureconfig: string;
}
interface SdkMessageProcessingStepSecureConfig_Expand {
  createdby: WebExpand<SdkMessageProcessingStepSecureConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessageProcessingStepSecureConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SdkMessageProcessingStepSecureConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessageProcessingStepSecureConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessageProcessingStepSecureConfig_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep: WebExpand<SdkMessageProcessingStepSecureConfig_Expand, SdkMessageProcessingStep_Select, SdkMessageProcessingStep_Filter, { sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep: SdkMessageProcessingStep_Result[] }>;
  userentityinstancedata_sdkmessageprocessingstepsecureconfig: WebExpand<SdkMessageProcessingStepSecureConfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessageprocessingstepsecureconfig: UserEntityInstanceData_Result[] }>;
}
interface SdkMessageProcessingStepSecureConfig_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
}
interface SdkMessageProcessingStepSecureConfig_Result extends SdkMessageProcessingStepSecureConfig_Base, SdkMessageProcessingStepSecureConfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface SdkMessageProcessingStepSecureConfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SdkMessageProcessingStepSecureConfig_RelatedMany {
  sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep: WebMappingRetrieve<SdkMessageProcessingStep_Select,SdkMessageProcessingStep_Expand,SdkMessageProcessingStep_Filter,SdkMessageProcessingStep_Fixed,SdkMessageProcessingStep_Result,SdkMessageProcessingStep_FormattedResult>;
  userentityinstancedata_sdkmessageprocessingstepsecureconfig: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessageprocessingstepsecureconfigs: WebMappingRetrieve<SdkMessageProcessingStepSecureConfig_Select,SdkMessageProcessingStepSecureConfig_Expand,SdkMessageProcessingStepSecureConfig_Filter,SdkMessageProcessingStepSecureConfig_Fixed,SdkMessageProcessingStepSecureConfig_Result,SdkMessageProcessingStepSecureConfig_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessageprocessingstepsecureconfigs: WebMappingRelated<SdkMessageProcessingStepSecureConfig_RelatedOne,SdkMessageProcessingStepSecureConfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessageprocessingstepsecureconfigs: WebMappingCUDA<SdkMessageProcessingStepSecureConfig_Create,SdkMessageProcessingStepSecureConfig_Update,SdkMessageProcessingStepSecureConfig_Select>;
}
