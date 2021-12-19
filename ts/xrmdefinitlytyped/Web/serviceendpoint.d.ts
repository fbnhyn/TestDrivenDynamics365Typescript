interface ServiceEndpoint_Base extends WebEntity {
  authtype?: serviceendpoint_authtype | null;
  authvalue?: string | null;
  componentstate?: componentstate | null;
  connectionmode?: serviceendpoint_connectionmode | null;
  contract?: serviceendpoint_contract | null;
  createdon?: Date | null;
  description?: string | null;
  introducedversion?: string | null;
  isauthvalueset?: boolean | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  issaskeyset?: boolean | null;
  issastokenset?: boolean | null;
  messagecharset?: serviceendpoint_messagecharset | null;
  messageformat?: serviceendpoint_messageformat | null;
  modifiedon?: Date | null;
  name?: string | null;
  namespaceaddress?: string | null;
  namespaceformat?: serviceendpoint_namespaceformat | null;
  overwritetime?: Date | null;
  path?: string | null;
  runtimeintegrationproperties?: string | null;
  saskey?: string | null;
  saskeyname?: string | null;
  sastoken?: string | null;
  schematype?: serviceendpoint_schematype | null;
  serviceendpointid?: string | null;
  serviceendpointidunique?: string | null;
  solutionid?: string | null;
  solutionnamespace?: string | null;
  supportingsolutionid?: string | null;
  url?: string | null;
  usekeyvaultconfiguration?: boolean | null;
  userclaim?: serviceendpoint_userclaim | null;
}
interface ServiceEndpoint_Relationships {
  serviceendpoint_sdkmessageprocessingstep?: SdkMessageProcessingStep_Result[] | null;
  userentityinstancedata_serviceendpoint?: UserEntityInstanceData_Result[] | null;
}
interface ServiceEndpoint extends ServiceEndpoint_Base, ServiceEndpoint_Relationships {
  keyvaultreferenceid_bind$keyvaultreferences?: string | null;
}
interface ServiceEndpoint_Create extends ServiceEndpoint {
}
interface ServiceEndpoint_Update extends ServiceEndpoint {
}
interface ServiceEndpoint_Select {
  authtype: WebAttribute<ServiceEndpoint_Select, { authtype: serviceendpoint_authtype | null }, { authtype_formatted?: string }>;
  authvalue: WebAttribute<ServiceEndpoint_Select, { authvalue: string | null }, {  }>;
  componentstate: WebAttribute<ServiceEndpoint_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  connectionmode: WebAttribute<ServiceEndpoint_Select, { connectionmode: serviceendpoint_connectionmode | null }, { connectionmode_formatted?: string }>;
  contract: WebAttribute<ServiceEndpoint_Select, { contract: serviceendpoint_contract | null }, { contract_formatted?: string }>;
  createdby_guid: WebAttribute<ServiceEndpoint_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ServiceEndpoint_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ServiceEndpoint_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ServiceEndpoint_Select, { description: string | null }, {  }>;
  introducedversion: WebAttribute<ServiceEndpoint_Select, { introducedversion: string | null }, {  }>;
  isauthvalueset: WebAttribute<ServiceEndpoint_Select, { isauthvalueset: boolean | null }, {  }>;
  iscustomizable: WebAttribute<ServiceEndpoint_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ServiceEndpoint_Select, { ismanaged: boolean | null }, {  }>;
  issaskeyset: WebAttribute<ServiceEndpoint_Select, { issaskeyset: boolean | null }, {  }>;
  issastokenset: WebAttribute<ServiceEndpoint_Select, { issastokenset: boolean | null }, {  }>;
  keyvaultreferenceid_guid: WebAttribute<ServiceEndpoint_Select, { keyvaultreferenceid_guid: string | null }, { keyvaultreferenceid_formatted?: string }>;
  messagecharset: WebAttribute<ServiceEndpoint_Select, { messagecharset: serviceendpoint_messagecharset | null }, { messagecharset_formatted?: string }>;
  messageformat: WebAttribute<ServiceEndpoint_Select, { messageformat: serviceendpoint_messageformat | null }, { messageformat_formatted?: string }>;
  modifiedby_guid: WebAttribute<ServiceEndpoint_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ServiceEndpoint_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ServiceEndpoint_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ServiceEndpoint_Select, { name: string | null }, {  }>;
  namespaceaddress: WebAttribute<ServiceEndpoint_Select, { namespaceaddress: string | null }, {  }>;
  namespaceformat: WebAttribute<ServiceEndpoint_Select, { namespaceformat: serviceendpoint_namespaceformat | null }, { namespaceformat_formatted?: string }>;
  organizationid_guid: WebAttribute<ServiceEndpoint_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<ServiceEndpoint_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  path: WebAttribute<ServiceEndpoint_Select, { path: string | null }, {  }>;
  runtimeintegrationproperties: WebAttribute<ServiceEndpoint_Select, { runtimeintegrationproperties: string | null }, {  }>;
  saskey: WebAttribute<ServiceEndpoint_Select, { saskey: string | null }, {  }>;
  saskeyname: WebAttribute<ServiceEndpoint_Select, { saskeyname: string | null }, {  }>;
  sastoken: WebAttribute<ServiceEndpoint_Select, { sastoken: string | null }, {  }>;
  schematype: WebAttribute<ServiceEndpoint_Select, { schematype: serviceendpoint_schematype | null }, { schematype_formatted?: string }>;
  serviceendpointid: WebAttribute<ServiceEndpoint_Select, { serviceendpointid: string | null }, {  }>;
  serviceendpointidunique: WebAttribute<ServiceEndpoint_Select, { serviceendpointidunique: string | null }, {  }>;
  solutionid: WebAttribute<ServiceEndpoint_Select, { solutionid: string | null }, {  }>;
  solutionnamespace: WebAttribute<ServiceEndpoint_Select, { solutionnamespace: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ServiceEndpoint_Select, { supportingsolutionid: string | null }, {  }>;
  url: WebAttribute<ServiceEndpoint_Select, { url: string | null }, {  }>;
  usekeyvaultconfiguration: WebAttribute<ServiceEndpoint_Select, { usekeyvaultconfiguration: boolean | null }, {  }>;
  userclaim: WebAttribute<ServiceEndpoint_Select, { userclaim: serviceendpoint_userclaim | null }, { userclaim_formatted?: string }>;
}
interface ServiceEndpoint_Filter {
  authtype: serviceendpoint_authtype;
  authvalue: string;
  componentstate: componentstate;
  connectionmode: serviceendpoint_connectionmode;
  contract: serviceendpoint_contract;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  introducedversion: string;
  isauthvalueset: boolean;
  iscustomizable: any;
  ismanaged: boolean;
  issaskeyset: boolean;
  issastokenset: boolean;
  keyvaultreferenceid_guid: XQW.Guid;
  messagecharset: serviceendpoint_messagecharset;
  messageformat: serviceendpoint_messageformat;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  namespaceaddress: string;
  namespaceformat: serviceendpoint_namespaceformat;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  path: string;
  runtimeintegrationproperties: string;
  saskey: string;
  saskeyname: string;
  sastoken: string;
  schematype: serviceendpoint_schematype;
  serviceendpointid: XQW.Guid;
  serviceendpointidunique: XQW.Guid;
  solutionid: XQW.Guid;
  solutionnamespace: string;
  supportingsolutionid: XQW.Guid;
  url: string;
  usekeyvaultconfiguration: boolean;
  userclaim: serviceendpoint_userclaim;
}
interface ServiceEndpoint_Expand {
  createdby: WebExpand<ServiceEndpoint_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ServiceEndpoint_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  keyvaultreferenceid: WebExpand<ServiceEndpoint_Expand, KeyVaultReference_Select, KeyVaultReference_Filter, { keyvaultreferenceid: KeyVaultReference_Result }>;
  modifiedby: WebExpand<ServiceEndpoint_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ServiceEndpoint_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ServiceEndpoint_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  serviceendpoint_sdkmessageprocessingstep: WebExpand<ServiceEndpoint_Expand, SdkMessageProcessingStep_Select, SdkMessageProcessingStep_Filter, { serviceendpoint_sdkmessageprocessingstep: SdkMessageProcessingStep_Result[] }>;
  userentityinstancedata_serviceendpoint: WebExpand<ServiceEndpoint_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_serviceendpoint: UserEntityInstanceData_Result[] }>;
}
interface ServiceEndpoint_FormattedResult {
  authtype_formatted?: string;
  componentstate_formatted?: string;
  connectionmode_formatted?: string;
  contract_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  keyvaultreferenceid_formatted?: string;
  messagecharset_formatted?: string;
  messageformat_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  namespaceformat_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  schematype_formatted?: string;
  userclaim_formatted?: string;
}
interface ServiceEndpoint_Result extends ServiceEndpoint_Base, ServiceEndpoint_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  keyvaultreferenceid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ServiceEndpoint_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  keyvaultreferenceid: WebMappingRetrieve<KeyVaultReference_Select,KeyVaultReference_Expand,KeyVaultReference_Filter,KeyVaultReference_Fixed,KeyVaultReference_Result,KeyVaultReference_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ServiceEndpoint_RelatedMany {
  serviceendpoint_sdkmessageprocessingstep: WebMappingRetrieve<SdkMessageProcessingStep_Select,SdkMessageProcessingStep_Expand,SdkMessageProcessingStep_Filter,SdkMessageProcessingStep_Fixed,SdkMessageProcessingStep_Result,SdkMessageProcessingStep_FormattedResult>;
  userentityinstancedata_serviceendpoint: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  serviceendpoints: WebMappingRetrieve<ServiceEndpoint_Select,ServiceEndpoint_Expand,ServiceEndpoint_Filter,ServiceEndpoint_Fixed,ServiceEndpoint_Result,ServiceEndpoint_FormattedResult>;
}
interface WebEntitiesRelated {
  serviceendpoints: WebMappingRelated<ServiceEndpoint_RelatedOne,ServiceEndpoint_RelatedMany>;
}
interface WebEntitiesCUDA {
  serviceendpoints: WebMappingCUDA<ServiceEndpoint_Create,ServiceEndpoint_Update,ServiceEndpoint_Select>;
}
