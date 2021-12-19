interface SdkMessage_Base extends WebEntity {
  autotransact?: boolean | null;
  availability?: number | null;
  categoryname?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customizationlevel?: number | null;
  executeprivilegename?: string | null;
  expand?: boolean | null;
  introducedversion?: string | null;
  isactive?: boolean | null;
  ismanaged?: boolean | null;
  isprivate?: boolean | null;
  isreadonly?: boolean | null;
  isvalidforexecuteasync?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  sdkmessageid?: string | null;
  sdkmessageidunique?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  template?: boolean | null;
  throttlesettings?: string | null;
  versionnumber?: number | null;
  workflowsdkstepenabled?: boolean | null;
}
interface SdkMessage_Relationships {
  CustomAPIId?: CustomAPI_Result[] | null;
  message_sdkmessagepair?: SdkMessagePair_Result[] | null;
  sdkmessage_serviceplanmapping?: ServicePlanMapping_Result[] | null;
  sdkmessageid_sdkmessagefilter?: SdkMessageFilter_Result[] | null;
  sdkmessageid_sdkmessageprocessingstep?: SdkMessageProcessingStep_Result[] | null;
  sdkmessageid_workflow_dependency?: WorkflowDependency_Result[] | null;
  userentityinstancedata_sdkmessage?: UserEntityInstanceData_Result[] | null;
}
interface SdkMessage extends SdkMessage_Base, SdkMessage_Relationships {
}
interface SdkMessage_Create extends SdkMessage {
}
interface SdkMessage_Update extends SdkMessage {
}
interface SdkMessage_Select {
  autotransact: WebAttribute<SdkMessage_Select, { autotransact: boolean | null }, {  }>;
  availability: WebAttribute<SdkMessage_Select, { availability: number | null }, {  }>;
  categoryname: WebAttribute<SdkMessage_Select, { categoryname: string | null }, {  }>;
  componentstate: WebAttribute<SdkMessage_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SdkMessage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SdkMessage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SdkMessage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customizationlevel: WebAttribute<SdkMessage_Select, { customizationlevel: number | null }, {  }>;
  executeprivilegename: WebAttribute<SdkMessage_Select, { executeprivilegename: string | null }, {  }>;
  expand: WebAttribute<SdkMessage_Select, { expand: boolean | null }, {  }>;
  introducedversion: WebAttribute<SdkMessage_Select, { introducedversion: string | null }, {  }>;
  isactive: WebAttribute<SdkMessage_Select, { isactive: boolean | null }, {  }>;
  ismanaged: WebAttribute<SdkMessage_Select, { ismanaged: boolean | null }, {  }>;
  isprivate: WebAttribute<SdkMessage_Select, { isprivate: boolean | null }, {  }>;
  isreadonly: WebAttribute<SdkMessage_Select, { isreadonly: boolean | null }, {  }>;
  isvalidforexecuteasync: WebAttribute<SdkMessage_Select, { isvalidforexecuteasync: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SdkMessage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SdkMessage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SdkMessage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SdkMessage_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<SdkMessage_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SdkMessage_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  sdkmessageid: WebAttribute<SdkMessage_Select, { sdkmessageid: string | null }, {  }>;
  sdkmessageidunique: WebAttribute<SdkMessage_Select, { sdkmessageidunique: string | null }, {  }>;
  solutionid: WebAttribute<SdkMessage_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SdkMessage_Select, { supportingsolutionid: string | null }, {  }>;
  template: WebAttribute<SdkMessage_Select, { template: boolean | null }, {  }>;
  throttlesettings: WebAttribute<SdkMessage_Select, { throttlesettings: string | null }, {  }>;
  versionnumber: WebAttribute<SdkMessage_Select, { versionnumber: number | null }, {  }>;
  workflowsdkstepenabled: WebAttribute<SdkMessage_Select, { workflowsdkstepenabled: boolean | null }, {  }>;
}
interface SdkMessage_Filter {
  autotransact: boolean;
  availability: number;
  categoryname: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customizationlevel: number;
  executeprivilegename: string;
  expand: boolean;
  introducedversion: string;
  isactive: boolean;
  ismanaged: boolean;
  isprivate: boolean;
  isreadonly: boolean;
  isvalidforexecuteasync: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  sdkmessageid: XQW.Guid;
  sdkmessageidunique: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  template: boolean;
  throttlesettings: string;
  versionnumber: number;
  workflowsdkstepenabled: boolean;
}
interface SdkMessage_Expand {
  CustomAPIId: WebExpand<SdkMessage_Expand, CustomAPI_Select, CustomAPI_Filter, { CustomAPIId: CustomAPI_Result[] }>;
  createdby: WebExpand<SdkMessage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SdkMessage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  message_sdkmessagepair: WebExpand<SdkMessage_Expand, SdkMessagePair_Select, SdkMessagePair_Filter, { message_sdkmessagepair: SdkMessagePair_Result[] }>;
  modifiedby: WebExpand<SdkMessage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SdkMessage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SdkMessage_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  sdkmessage_serviceplanmapping: WebExpand<SdkMessage_Expand, ServicePlanMapping_Select, ServicePlanMapping_Filter, { sdkmessage_serviceplanmapping: ServicePlanMapping_Result[] }>;
  sdkmessageid_sdkmessagefilter: WebExpand<SdkMessage_Expand, SdkMessageFilter_Select, SdkMessageFilter_Filter, { sdkmessageid_sdkmessagefilter: SdkMessageFilter_Result[] }>;
  sdkmessageid_sdkmessageprocessingstep: WebExpand<SdkMessage_Expand, SdkMessageProcessingStep_Select, SdkMessageProcessingStep_Filter, { sdkmessageid_sdkmessageprocessingstep: SdkMessageProcessingStep_Result[] }>;
  sdkmessageid_workflow_dependency: WebExpand<SdkMessage_Expand, WorkflowDependency_Select, WorkflowDependency_Filter, { sdkmessageid_workflow_dependency: WorkflowDependency_Result[] }>;
  userentityinstancedata_sdkmessage: WebExpand<SdkMessage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sdkmessage: UserEntityInstanceData_Result[] }>;
}
interface SdkMessage_FormattedResult {
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
interface SdkMessage_Result extends SdkMessage_Base, SdkMessage_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface SdkMessage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SdkMessage_RelatedMany {
  CustomAPIId: WebMappingRetrieve<CustomAPI_Select,CustomAPI_Expand,CustomAPI_Filter,CustomAPI_Fixed,CustomAPI_Result,CustomAPI_FormattedResult>;
  message_sdkmessagepair: WebMappingRetrieve<SdkMessagePair_Select,SdkMessagePair_Expand,SdkMessagePair_Filter,SdkMessagePair_Fixed,SdkMessagePair_Result,SdkMessagePair_FormattedResult>;
  sdkmessage_serviceplanmapping: WebMappingRetrieve<ServicePlanMapping_Select,ServicePlanMapping_Expand,ServicePlanMapping_Filter,ServicePlanMapping_Fixed,ServicePlanMapping_Result,ServicePlanMapping_FormattedResult>;
  sdkmessageid_sdkmessagefilter: WebMappingRetrieve<SdkMessageFilter_Select,SdkMessageFilter_Expand,SdkMessageFilter_Filter,SdkMessageFilter_Fixed,SdkMessageFilter_Result,SdkMessageFilter_FormattedResult>;
  sdkmessageid_sdkmessageprocessingstep: WebMappingRetrieve<SdkMessageProcessingStep_Select,SdkMessageProcessingStep_Expand,SdkMessageProcessingStep_Filter,SdkMessageProcessingStep_Fixed,SdkMessageProcessingStep_Result,SdkMessageProcessingStep_FormattedResult>;
  sdkmessageid_workflow_dependency: WebMappingRetrieve<WorkflowDependency_Select,WorkflowDependency_Expand,WorkflowDependency_Filter,WorkflowDependency_Fixed,WorkflowDependency_Result,WorkflowDependency_FormattedResult>;
  userentityinstancedata_sdkmessage: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sdkmessages: WebMappingRetrieve<SdkMessage_Select,SdkMessage_Expand,SdkMessage_Filter,SdkMessage_Fixed,SdkMessage_Result,SdkMessage_FormattedResult>;
}
interface WebEntitiesRelated {
  sdkmessages: WebMappingRelated<SdkMessage_RelatedOne,SdkMessage_RelatedMany>;
}
interface WebEntitiesCUDA {
  sdkmessages: WebMappingCUDA<SdkMessage_Create,SdkMessage_Update,SdkMessage_Select>;
}
