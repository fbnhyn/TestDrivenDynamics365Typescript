interface PluginType_Base extends WebEntity {
  assemblyname?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  culture?: string | null;
  customizationlevel?: number | null;
  customworkflowactivityinfo?: string | null;
  description?: string | null;
  friendlyname?: string | null;
  ismanaged?: boolean | null;
  isworkflowactivity?: boolean | null;
  major?: number | null;
  minor?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  plugintypeid?: string | null;
  plugintypeidunique?: string | null;
  publickeytoken?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  typename?: string | null;
  version?: string | null;
  versionnumber?: number | null;
  workflowactivitygroupname?: string | null;
}
interface PluginType_Relationships {
  CustomAPIId?: CustomAPI_Result[] | null;
  plugin_type_service?: Service_Result[] | null;
  plugintype_plugintypestatistic?: PluginTypeStatistic_Result[] | null;
  plugintype_sdkmessageprocessingstep?: SdkMessageProcessingStep_Result[] | null;
  plugintypeid_sdkmessageprocessingstep?: SdkMessageProcessingStep_Result[] | null;
  userentityinstancedata_plugintype?: UserEntityInstanceData_Result[] | null;
}
interface PluginType extends PluginType_Base, PluginType_Relationships {
  pluginassemblyid_bind$pluginassemblies?: string | null;
}
interface PluginType_Create extends PluginType {
}
interface PluginType_Update extends PluginType {
}
interface PluginType_Select {
  assemblyname: WebAttribute<PluginType_Select, { assemblyname: string | null }, {  }>;
  componentstate: WebAttribute<PluginType_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<PluginType_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PluginType_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PluginType_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  culture: WebAttribute<PluginType_Select, { culture: string | null }, {  }>;
  customizationlevel: WebAttribute<PluginType_Select, { customizationlevel: number | null }, {  }>;
  customworkflowactivityinfo: WebAttribute<PluginType_Select, { customworkflowactivityinfo: string | null }, {  }>;
  description: WebAttribute<PluginType_Select, { description: string | null }, {  }>;
  friendlyname: WebAttribute<PluginType_Select, { friendlyname: string | null }, {  }>;
  ismanaged: WebAttribute<PluginType_Select, { ismanaged: boolean | null }, {  }>;
  isworkflowactivity: WebAttribute<PluginType_Select, { isworkflowactivity: boolean | null }, {  }>;
  major: WebAttribute<PluginType_Select, { major: number | null }, {  }>;
  minor: WebAttribute<PluginType_Select, { minor: number | null }, {  }>;
  modifiedby_guid: WebAttribute<PluginType_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PluginType_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PluginType_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<PluginType_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<PluginType_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<PluginType_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  pluginassemblyid_guid: WebAttribute<PluginType_Select, { pluginassemblyid_guid: string | null }, { pluginassemblyid_formatted?: string }>;
  plugintypeid: WebAttribute<PluginType_Select, { plugintypeid: string | null }, {  }>;
  plugintypeidunique: WebAttribute<PluginType_Select, { plugintypeidunique: string | null }, {  }>;
  publickeytoken: WebAttribute<PluginType_Select, { publickeytoken: string | null }, {  }>;
  solutionid: WebAttribute<PluginType_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<PluginType_Select, { supportingsolutionid: string | null }, {  }>;
  typename: WebAttribute<PluginType_Select, { typename: string | null }, {  }>;
  version: WebAttribute<PluginType_Select, { version: string | null }, {  }>;
  versionnumber: WebAttribute<PluginType_Select, { versionnumber: number | null }, {  }>;
  workflowactivitygroupname: WebAttribute<PluginType_Select, { workflowactivitygroupname: string | null }, {  }>;
}
interface PluginType_Filter {
  assemblyname: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  culture: string;
  customizationlevel: number;
  customworkflowactivityinfo: string;
  description: string;
  friendlyname: string;
  ismanaged: boolean;
  isworkflowactivity: boolean;
  major: number;
  minor: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  pluginassemblyid_guid: XQW.Guid;
  plugintypeid: XQW.Guid;
  plugintypeidunique: XQW.Guid;
  publickeytoken: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  typename: string;
  version: string;
  versionnumber: number;
  workflowactivitygroupname: string;
}
interface PluginType_Expand {
  CustomAPIId: WebExpand<PluginType_Expand, CustomAPI_Select, CustomAPI_Filter, { CustomAPIId: CustomAPI_Result[] }>;
  createdby: WebExpand<PluginType_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PluginType_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<PluginType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<PluginType_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<PluginType_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  plugin_type_service: WebExpand<PluginType_Expand, Service_Select, Service_Filter, { plugin_type_service: Service_Result[] }>;
  pluginassemblyid: WebExpand<PluginType_Expand, PluginAssembly_Select, PluginAssembly_Filter, { pluginassemblyid: PluginAssembly_Result }>;
  plugintype_plugintypestatistic: WebExpand<PluginType_Expand, PluginTypeStatistic_Select, PluginTypeStatistic_Filter, { plugintype_plugintypestatistic: PluginTypeStatistic_Result[] }>;
  plugintype_sdkmessageprocessingstep: WebExpand<PluginType_Expand, SdkMessageProcessingStep_Select, SdkMessageProcessingStep_Filter, { plugintype_sdkmessageprocessingstep: SdkMessageProcessingStep_Result[] }>;
  plugintypeid_sdkmessageprocessingstep: WebExpand<PluginType_Expand, SdkMessageProcessingStep_Select, SdkMessageProcessingStep_Filter, { plugintypeid_sdkmessageprocessingstep: SdkMessageProcessingStep_Result[] }>;
  userentityinstancedata_plugintype: WebExpand<PluginType_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_plugintype: UserEntityInstanceData_Result[] }>;
}
interface PluginType_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  pluginassemblyid_formatted?: string;
}
interface PluginType_Result extends PluginType_Base, PluginType_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  pluginassemblyid_guid: string | null;
}
interface PluginType_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  pluginassemblyid: WebMappingRetrieve<PluginAssembly_Select,PluginAssembly_Expand,PluginAssembly_Filter,PluginAssembly_Fixed,PluginAssembly_Result,PluginAssembly_FormattedResult>;
}
interface PluginType_RelatedMany {
  CustomAPIId: WebMappingRetrieve<CustomAPI_Select,CustomAPI_Expand,CustomAPI_Filter,CustomAPI_Fixed,CustomAPI_Result,CustomAPI_FormattedResult>;
  plugin_type_service: WebMappingRetrieve<Service_Select,Service_Expand,Service_Filter,Service_Fixed,Service_Result,Service_FormattedResult>;
  plugintype_plugintypestatistic: WebMappingRetrieve<PluginTypeStatistic_Select,PluginTypeStatistic_Expand,PluginTypeStatistic_Filter,PluginTypeStatistic_Fixed,PluginTypeStatistic_Result,PluginTypeStatistic_FormattedResult>;
  plugintype_sdkmessageprocessingstep: WebMappingRetrieve<SdkMessageProcessingStep_Select,SdkMessageProcessingStep_Expand,SdkMessageProcessingStep_Filter,SdkMessageProcessingStep_Fixed,SdkMessageProcessingStep_Result,SdkMessageProcessingStep_FormattedResult>;
  plugintypeid_sdkmessageprocessingstep: WebMappingRetrieve<SdkMessageProcessingStep_Select,SdkMessageProcessingStep_Expand,SdkMessageProcessingStep_Filter,SdkMessageProcessingStep_Fixed,SdkMessageProcessingStep_Result,SdkMessageProcessingStep_FormattedResult>;
  userentityinstancedata_plugintype: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  plugintypes: WebMappingRetrieve<PluginType_Select,PluginType_Expand,PluginType_Filter,PluginType_Fixed,PluginType_Result,PluginType_FormattedResult>;
}
interface WebEntitiesRelated {
  plugintypes: WebMappingRelated<PluginType_RelatedOne,PluginType_RelatedMany>;
}
interface WebEntitiesCUDA {
  plugintypes: WebMappingCUDA<PluginType_Create,PluginType_Update,PluginType_Select>;
}
