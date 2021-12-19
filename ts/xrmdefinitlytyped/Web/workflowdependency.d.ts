interface WorkflowDependency_Base extends WebEntity {
  createdon?: Date | null;
  customentityname?: string | null;
  dependentattributename?: string | null;
  dependententityname?: string | null;
  entityattributes?: string | null;
  modifiedon?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  parametername?: string | null;
  parametertype?: string | null;
  relatedattributename?: string | null;
  relatedentityname?: string | null;
  type?: workflowdependency_type | null;
  versionnumber?: number | null;
  workflowdependencyid?: string | null;
}
interface WorkflowDependency_Relationships {
  userentityinstancedata_workflowdependency?: UserEntityInstanceData_Result[] | null;
}
interface WorkflowDependency extends WorkflowDependency_Base, WorkflowDependency_Relationships {
  sdkmessageid_bind$sdkmessages?: string | null;
  workflowid_bind$workflows?: string | null;
}
interface WorkflowDependency_Create extends WorkflowDependency {
}
interface WorkflowDependency_Update extends WorkflowDependency {
}
interface WorkflowDependency_Select {
  createdby_guid: WebAttribute<WorkflowDependency_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<WorkflowDependency_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<WorkflowDependency_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customentityname: WebAttribute<WorkflowDependency_Select, { customentityname: string | null }, {  }>;
  dependentattributename: WebAttribute<WorkflowDependency_Select, { dependentattributename: string | null }, {  }>;
  dependententityname: WebAttribute<WorkflowDependency_Select, { dependententityname: string | null }, {  }>;
  entityattributes: WebAttribute<WorkflowDependency_Select, { entityattributes: string | null }, {  }>;
  modifiedby_guid: WebAttribute<WorkflowDependency_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<WorkflowDependency_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<WorkflowDependency_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  ownerid_guid: WebAttribute<WorkflowDependency_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<WorkflowDependency_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<WorkflowDependency_Select, { owninguser: string | null }, {  }>;
  parametername: WebAttribute<WorkflowDependency_Select, { parametername: string | null }, {  }>;
  parametertype: WebAttribute<WorkflowDependency_Select, { parametertype: string | null }, {  }>;
  relatedattributename: WebAttribute<WorkflowDependency_Select, { relatedattributename: string | null }, {  }>;
  relatedentityname: WebAttribute<WorkflowDependency_Select, { relatedentityname: string | null }, {  }>;
  sdkmessageid_guid: WebAttribute<WorkflowDependency_Select, { sdkmessageid_guid: string | null }, { sdkmessageid_formatted?: string }>;
  type: WebAttribute<WorkflowDependency_Select, { type: workflowdependency_type | null }, { type_formatted?: string }>;
  versionnumber: WebAttribute<WorkflowDependency_Select, { versionnumber: number | null }, {  }>;
  workflowdependencyid: WebAttribute<WorkflowDependency_Select, { workflowdependencyid: string | null }, {  }>;
  workflowid_guid: WebAttribute<WorkflowDependency_Select, { workflowid_guid: string | null }, { workflowid_formatted?: string }>;
}
interface WorkflowDependency_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customentityname: string;
  dependentattributename: string;
  dependententityname: string;
  entityattributes: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  parametername: string;
  parametertype: string;
  relatedattributename: string;
  relatedentityname: string;
  sdkmessageid_guid: XQW.Guid;
  type: workflowdependency_type;
  versionnumber: number;
  workflowdependencyid: XQW.Guid;
  workflowid_guid: XQW.Guid;
}
interface WorkflowDependency_Expand {
  createdby: WebExpand<WorkflowDependency_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<WorkflowDependency_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<WorkflowDependency_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<WorkflowDependency_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  sdkmessageid: WebExpand<WorkflowDependency_Expand, SdkMessage_Select, SdkMessage_Filter, { sdkmessageid: SdkMessage_Result }>;
  userentityinstancedata_workflowdependency: WebExpand<WorkflowDependency_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_workflowdependency: UserEntityInstanceData_Result[] }>;
  workflowid: WebExpand<WorkflowDependency_Expand, Workflow_Select, Workflow_Filter, { workflowid: Workflow_Result }>;
}
interface WorkflowDependency_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  sdkmessageid_formatted?: string;
  type_formatted?: string;
  workflowid_formatted?: string;
}
interface WorkflowDependency_Result extends WorkflowDependency_Base, WorkflowDependency_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  sdkmessageid_guid: string | null;
  workflowid_guid: string | null;
}
interface WorkflowDependency_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  sdkmessageid: WebMappingRetrieve<SdkMessage_Select,SdkMessage_Expand,SdkMessage_Filter,SdkMessage_Fixed,SdkMessage_Result,SdkMessage_FormattedResult>;
  workflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface WorkflowDependency_RelatedMany {
  userentityinstancedata_workflowdependency: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  workflowdependencies: WebMappingRetrieve<WorkflowDependency_Select,WorkflowDependency_Expand,WorkflowDependency_Filter,WorkflowDependency_Fixed,WorkflowDependency_Result,WorkflowDependency_FormattedResult>;
}
interface WebEntitiesRelated {
  workflowdependencies: WebMappingRelated<WorkflowDependency_RelatedOne,WorkflowDependency_RelatedMany>;
}
interface WebEntitiesCUDA {
  workflowdependencies: WebMappingCUDA<WorkflowDependency_Create,WorkflowDependency_Update,WorkflowDependency_Select>;
}
