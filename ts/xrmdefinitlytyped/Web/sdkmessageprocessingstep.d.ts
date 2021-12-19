interface SdkMessageProcessingStep_Base extends WebEntity {
  asyncautodelete?: boolean | null;
  canusereadonlyconnection?: boolean | null;
  category?: string | null;
  componentstate?: componentstate | null;
  configuration?: string | null;
  createdon?: Date | null;
  customizationlevel?: number | null;
  description?: string | null;
  eventexpander?: string | null;
  filteringattributes?: string | null;
  introducedversion?: string | null;
  invocationsource?: sdkmessageprocessingstep_invocationsource | null;
  iscustomizable?: any | null;
  ishidden?: any | null;
  ismanaged?: boolean | null;
  mode?: sdkmessageprocessingstep_mode | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  rank?: number | null;
  runtimeintegrationproperties?: string | null;
  sdkmessageprocessingstepid?: string | null;
  sdkmessageprocessingstepidunique?: string | null;
  solutionid?: string | null;
  stage?: sdkmessageprocessingstep_stage | null;
  statecode?: sdkmessageprocessingstep_statecode | null;
  statuscode?: sdkmessageprocessingstep_statuscode | null;
  supporteddeployment?: sdkmessageprocessingstep_supporteddeployment | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface SdkMessageProcessingStep_Relationships {
  SdkMessageProcessingStep_AsyncOperations?: AsyncOperation_Result[] | null;
  eventhandler_plugintype?: PluginType_Result | null;
  eventhandler_serviceendpoint?: ServiceEndpoint_Result | null;
  sdkmessageprocessingstepid_sdkmessageprocessingstepimage?: SdkMessageProcessingStepImage_Result[] | null;
  userentityinstancedata_sdkmessageprocessingstep?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessageProcessingStep extends SdkMessageProcessingStep_Base, SdkMessageProcessingStep_Relationships {
  eventhandler_plugintype_bind$plugintypes?: string | null;
  eventhandler_serviceendpoint_bind$serviceendpoints?: string | null;
  impersonatinguserid_bind$systemusers?: string | null;
  plugintypeid_bind$plugintypes?: string | null;
  sdkmessagefilterid_bind$sdkmessagefilters?: string | null;
  sdkmessageid_bind$sdkmessages?: string | null;
  sdkmessageprocessingstepsecureconfigid_bind$sdkmessageprocessingstepsecureconfigs?: string | null;
}
interface SdkMessageProcessingStep_Create extends SdkMessageProcessingStep {
}
interface SdkMessageProcessingStep_Update extends SdkMessageProcessingStep {
}
interface SdkMessageProcessingStep_Select {
  asyncautodelete: WebAttribute<SdkMessageProcessingStep_Select, { asyncautodelete: boolean | null }, {  }>;
  canusereadonlyconnection: WebAttribute<SdkMessageProcessingStep_Select, { canusereadonlyconnection: boolean | null }, {  }>;
  category: WebAttribute<SdkMessageProcessingStep_Select, { category: string | null }, {  }>;
  componentstate: WebAttribute<SdkMessageProcessingStep_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  configuration: WebAttribute<SdkMessageProcessingStep_Select, { configuration: string | null }, {  }>;
  createdby_guid: WebAttribute<SdkMessageProcessingStep_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessageProcessingStep_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessageProcessingStep_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessageProcessingStep_Select, { customizationlevel: number | null }, {  }>;
  description: WebAttribute<SdkMessageProcessingStep_Select, { description: string | null }, {  }>;
  eventexpander: WebAttribute<SdkMessageProcessingStep_Select, { eventexpander: string | null }, {  }>;
  eventhandler_guid: WebAttribute<SdkMessageProcessingStep_Select, { eventhandler_guid: string | null }, { eventhandler_formatted?: string }>;
  filteringattributes: WebAttribute<SdkMessageProcessingStep_Select, { filteringattributes: string | null }, {  }>;
  impersonatinguserid_guid: WebAttribute<SdkMessageProcessingStep_Select, { impersonatinguserid_guid: string | null }, { impersonatinguserid_formatted?: string }>;
  introducedversion: WebAttribute<SdkMessageProcessingStep_Select, { introducedversion: string | null }, {  }>;
  invocationsource: WebAttribute<SdkMessageProcessingStep_Select, { invocationsource: sdkmessageprocessingstep_invocationsource | null }, { invocationsource_formatted?: string }>;
  iscustomizable: WebAttribute<SdkMessageProcessingStep_Select, { iscustomizable: any | null }, {  }>;
  ishidden: WebAttribute<SdkMessageProcessingStep_Select, { ishidden: any | null }, {  }>;
  ismanaged: WebAttribute<SdkMessageProcessingStep_Select, { ismanaged: boolean | null }, {  }>;
  mode: WebAttribute<SdkMessageProcessingStep_Select, { mode: sdkmessageprocessingstep_mode | null }, { mode_formatted?: string }>;
  modifiedby_guid: WebAttribute<SdkMessageProcessingStep_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessageProcessingStep_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessageProcessingStep_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SdkMessageProcessingStep_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SdkMessageProcessingStep_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SdkMessageProcessingStep_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  plugintypeid_guid: WebAttribute<SdkMessageProcessingStep_Select, { plugintypeid_guid: string | null }, { plugintypeid_formatted?: string }>;
  rank: WebAttribute<SdkMessageProcessingStep_Select, { rank: number | null }, {  }>;
  runtimeintegrationproperties: WebAttribute<SdkMessageProcessingStep_Select, { runtimeintegrationproperties: string | null }, {  }>;
  sdkmessagefilterid_guid: WebAttribute<SdkMessageProcessingStep_Select, { sdkmessagefilterid_guid: string | null }, { sdkmessagefilterid_formatted?: string }>;
  sdkmessageid_guid: WebAttribute<SdkMessageProcessingStep_Select, { sdkmessageid_guid: string | null }, { sdkmessageid_formatted?: string }>;
  sdkmessageprocessingstepid: WebAttribute<SdkMessageProcessingStep_Select, { sdkmessageprocessingstepid: string | null }, {  }>;
  sdkmessageprocessingstepidunique: WebAttribute<SdkMessageProcessingStep_Select, { sdkmessageprocessingstepidunique: string | null }, {  }>;
  sdkmessageprocessingstepsecureconfigid_guid: WebAttribute<SdkMessageProcessingStep_Select, { sdkmessageprocessingstepsecureconfigid_guid: string | null }, { sdkmessageprocessingstepsecureconfigid_formatted?: string }>;
  solutionid: WebAttribute<SdkMessageProcessingStep_Select, { solutionid: string | null }, {  }>;
  stage: WebAttribute<SdkMessageProcessingStep_Select, { stage: sdkmessageprocessingstep_stage | null }, { stage_formatted?: string }>;
  statecode: WebAttribute<SdkMessageProcessingStep_Select, { statecode: sdkmessageprocessingstep_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<SdkMessageProcessingStep_Select, { statuscode: sdkmessageprocessingstep_statuscode | null }, { statuscode_formatted?: string }>;
  supporteddeployment: WebAttribute<SdkMessageProcessingStep_Select, { supporteddeployment: sdkmessageprocessingstep_supporteddeployment | null }, { supporteddeployment_formatted?: string }>;
  supportingsolutionid: WebAttribute<SdkMessageProcessingStep_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<SdkMessageProcessingStep_Select, { versionnumber: number | null }, {  }>;
}
interface SdkMessageProcessingStep_Filter {
  asyncautodelete: boolean;
  canusereadonlyconnection: boolean;
  category: string;
  componentstate: componentstate;
  configuration: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationlevel: number;
  description: string;
  eventexpander: string;
  eventhandler_guid: XQW.Guid;
  filteringattributes: string;
  impersonatinguserid_guid: XQW.Guid;
  introducedversion: string;
  invocationsource: sdkmessageprocessingstep_invocationsource;
  iscustomizable: any;
  ishidden: any;
  ismanaged: boolean;
  mode: sdkmessageprocessingstep_mode;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  plugintypeid_guid: XQW.Guid;
  rank: number;
  runtimeintegrationproperties: string;
  sdkmessagefilterid_guid: XQW.Guid;
  sdkmessageid_guid: XQW.Guid;
  sdkmessageprocessingstepid: XQW.Guid;
  sdkmessageprocessingstepidunique: XQW.Guid;
  sdkmessageprocessingstepsecureconfigid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  stage: sdkmessageprocessingstep_stage;
  statecode: sdkmessageprocessingstep_statecode;
  statuscode: sdkmessageprocessingstep_statuscode;
  supporteddeployment: sdkmessageprocessingstep_supporteddeployment;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface SdkMessageProcessingStep_Expand {
  SdkMessageProcessingStep_AsyncOperations: WebExpand<SdkMessageProcessingStep_Expand, AsyncOperation_Select, AsyncOperation_Filter, { SdkMessageProcessingStep_AsyncOperations: AsyncOperation_Result[] }>;
  createdby: WebExpand<SdkMessageProcessingStep_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessageProcessingStep_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  eventhandler_plugintype: WebExpand<SdkMessageProcessingStep_Expand, PluginType_Select, PluginType_Filter, { eventhandler_plugintype: PluginType_Result }>;
  eventhandler_serviceendpoint: WebExpand<SdkMessageProcessingStep_Expand, ServiceEndpoint_Select, ServiceEndpoint_Filter, { eventhandler_serviceendpoint: ServiceEndpoint_Result }>;
  impersonatinguserid: WebExpand<SdkMessageProcessingStep_Expand, SystemUser_Select, SystemUser_Filter, { impersonatinguserid: SystemUser_Result }>;
  modifiedby: WebExpand<SdkMessageProcessingStep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessageProcessingStep_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessageProcessingStep_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  plugintypeid: WebExpand<SdkMessageProcessingStep_Expand, PluginType_Select, PluginType_Filter, { plugintypeid: PluginType_Result }>;
  sdkmessagefilterid: WebExpand<SdkMessageProcessingStep_Expand, SdkMessageFilter_Select, SdkMessageFilter_Filter, { sdkmessagefilterid: SdkMessageFilter_Result }>;
  sdkmessageid: WebExpand<SdkMessageProcessingStep_Expand, SdkMessage_Select, SdkMessage_Filter, { sdkmessageid: SdkMessage_Result }>;
  sdkmessageprocessingstepid_sdkmessageprocessingstepimage: WebExpand<SdkMessageProcessingStep_Expand, SdkMessageProcessingStepImage_Select, SdkMessageProcessingStepImage_Filter, { sdkmessageprocessingstepid_sdkmessageprocessingstepimage: SdkMessageProcessingStepImage_Result[] }>;
  sdkmessageprocessingstepsecureconfigid: WebExpand<SdkMessageProcessingStep_Expand, SdkMessageProcessingStepSecureConfig_Select, SdkMessageProcessingStepSecureConfig_Filter, { sdkmessageprocessingstepsecureconfigid: SdkMessageProcessingStepSecureConfig_Result }>;
  userentityinstancedata_sdkmessageprocessingstep: WebExpand<SdkMessageProcessingStep_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessageprocessingstep: UserEntityInstanceData_Result[] }>;
}
interface SdkMessageProcessingStep_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  eventhandler_formatted?: string;
  impersonatinguserid_formatted?: string;
  invocationsource_formatted?: string;
  mode_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  plugintypeid_formatted?: string;
  sdkmessagefilterid_formatted?: string;
  sdkmessageid_formatted?: string;
  sdkmessageprocessingstepsecureconfigid_formatted?: string;
  stage_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  supporteddeployment_formatted?: string;
}
interface SdkMessageProcessingStep_Result extends SdkMessageProcessingStep_Base, SdkMessageProcessingStep_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  eventhandler_guid: string | null;
  impersonatinguserid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  plugintypeid_guid: string | null;
  sdkmessagefilterid_guid: string | null;
  sdkmessageid_guid: string | null;
  sdkmessageprocessingstepsecureconfigid_guid: string | null;
}
interface SdkMessageProcessingStep_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  eventhandler_plugintype: WebMappingRetrieve<PluginType_Select,PluginType_Expand,PluginType_Filter,PluginType_Fixed,PluginType_Result,PluginType_FormattedResult>;
  eventhandler_serviceendpoint: WebMappingRetrieve<ServiceEndpoint_Select,ServiceEndpoint_Expand,ServiceEndpoint_Filter,ServiceEndpoint_Fixed,ServiceEndpoint_Result,ServiceEndpoint_FormattedResult>;
  impersonatinguserid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  plugintypeid: WebMappingRetrieve<PluginType_Select,PluginType_Expand,PluginType_Filter,PluginType_Fixed,PluginType_Result,PluginType_FormattedResult>;
  sdkmessagefilterid: WebMappingRetrieve<SdkMessageFilter_Select,SdkMessageFilter_Expand,SdkMessageFilter_Filter,SdkMessageFilter_Fixed,SdkMessageFilter_Result,SdkMessageFilter_FormattedResult>;
  sdkmessageid: WebMappingRetrieve<SdkMessage_Select,SdkMessage_Expand,SdkMessage_Filter,SdkMessage_Fixed,SdkMessage_Result,SdkMessage_FormattedResult>;
  sdkmessageprocessingstepsecureconfigid: WebMappingRetrieve<SdkMessageProcessingStepSecureConfig_Select,SdkMessageProcessingStepSecureConfig_Expand,SdkMessageProcessingStepSecureConfig_Filter,SdkMessageProcessingStepSecureConfig_Fixed,SdkMessageProcessingStepSecureConfig_Result,SdkMessageProcessingStepSecureConfig_FormattedResult>;
}
interface SdkMessageProcessingStep_RelatedMany {
  SdkMessageProcessingStep_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  sdkmessageprocessingstepid_sdkmessageprocessingstepimage: WebMappingRetrieve<SdkMessageProcessingStepImage_Select,SdkMessageProcessingStepImage_Expand,SdkMessageProcessingStepImage_Filter,SdkMessageProcessingStepImage_Fixed,SdkMessageProcessingStepImage_Result,SdkMessageProcessingStepImage_FormattedResult>;
  userentityinstancedata_sdkmessageprocessingstep: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessageprocessingsteps: WebMappingRetrieve<SdkMessageProcessingStep_Select,SdkMessageProcessingStep_Expand,SdkMessageProcessingStep_Filter,SdkMessageProcessingStep_Fixed,SdkMessageProcessingStep_Result,SdkMessageProcessingStep_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessageprocessingsteps: WebMappingRelated<SdkMessageProcessingStep_RelatedOne,SdkMessageProcessingStep_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessageprocessingsteps: WebMappingCUDA<SdkMessageProcessingStep_Create,SdkMessageProcessingStep_Update,SdkMessageProcessingStep_Select>;
}
