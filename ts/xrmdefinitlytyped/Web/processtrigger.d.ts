interface ProcessTrigger_Base extends WebEntity {
  componentstate?: componentstate | null;
  controlname?: string | null;
  controltype?: processtrigger_controltype | null;
  createdon?: Date | null;
  event?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  methodid?: string | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  owningbusinessunit?: string | null;
  owninguser?: string | null;
  pipelinestage?: processtrigger_pipelinestage | null;
  primaryentitytypecode?: string | null;
  processtriggerid?: string | null;
  processtriggeridunique?: string | null;
  scope?: pbl_scope | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ProcessTrigger_Relationships {
  ProcessTrigger_SyncErrors?: SyncError_Result[] | null;
}
interface ProcessTrigger extends ProcessTrigger_Base, ProcessTrigger_Relationships {
  formid_bind$systemforms?: string | null;
}
interface ProcessTrigger_Create extends ProcessTrigger {
  processid_bind$workflows?: string | null;
}
interface ProcessTrigger_Update extends ProcessTrigger {
}
interface ProcessTrigger_Select {
  componentstate: WebAttribute<ProcessTrigger_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  controlname: WebAttribute<ProcessTrigger_Select, { controlname: string | null }, {  }>;
  controltype: WebAttribute<ProcessTrigger_Select, { controltype: processtrigger_controltype | null }, { controltype_formatted?: string }>;
  createdby_guid: WebAttribute<ProcessTrigger_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ProcessTrigger_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ProcessTrigger_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  event: WebAttribute<ProcessTrigger_Select, { event: string | null }, {  }>;
  formid_guid: WebAttribute<ProcessTrigger_Select, { formid_guid: string | null }, { formid_formatted?: string }>;
  iscustomizable: WebAttribute<ProcessTrigger_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ProcessTrigger_Select, { ismanaged: boolean | null }, {  }>;
  methodid: WebAttribute<ProcessTrigger_Select, { methodid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<ProcessTrigger_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ProcessTrigger_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ProcessTrigger_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overwritetime: WebAttribute<ProcessTrigger_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ProcessTrigger_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit: WebAttribute<ProcessTrigger_Select, { owningbusinessunit: string | null }, {  }>;
  owninguser: WebAttribute<ProcessTrigger_Select, { owninguser: string | null }, {  }>;
  pipelinestage: WebAttribute<ProcessTrigger_Select, { pipelinestage: processtrigger_pipelinestage | null }, { pipelinestage_formatted?: string }>;
  primaryentitytypecode: WebAttribute<ProcessTrigger_Select, { primaryentitytypecode: string | null }, {  }>;
  processid_guid: WebAttribute<ProcessTrigger_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  processtriggerid: WebAttribute<ProcessTrigger_Select, { processtriggerid: string | null }, {  }>;
  processtriggeridunique: WebAttribute<ProcessTrigger_Select, { processtriggeridunique: string | null }, {  }>;
  scope: WebAttribute<ProcessTrigger_Select, { scope: pbl_scope | null }, { scope_formatted?: string }>;
  solutionid: WebAttribute<ProcessTrigger_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ProcessTrigger_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<ProcessTrigger_Select, { versionnumber: number | null }, {  }>;
}
interface ProcessTrigger_Filter {
  componentstate: componentstate;
  controlname: string;
  controltype: processtrigger_controltype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  event: string;
  formid_guid: XQW.Guid;
  iscustomizable: any;
  ismanaged: boolean;
  methodid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit: XQW.Guid;
  owninguser: XQW.Guid;
  pipelinestage: processtrigger_pipelinestage;
  primaryentitytypecode: string;
  processid_guid: XQW.Guid;
  processtriggerid: XQW.Guid;
  processtriggeridunique: XQW.Guid;
  scope: pbl_scope;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface ProcessTrigger_Expand {
  ProcessTrigger_SyncErrors: WebExpand<ProcessTrigger_Expand, SyncError_Select, SyncError_Filter, { ProcessTrigger_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<ProcessTrigger_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ProcessTrigger_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  formid: WebExpand<ProcessTrigger_Expand, SystemForm_Select, SystemForm_Filter, { formid: SystemForm_Result }>;
  modifiedby: WebExpand<ProcessTrigger_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ProcessTrigger_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  processid: WebExpand<ProcessTrigger_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
}
interface ProcessTrigger_FormattedResult {
  componentstate_formatted?: string;
  controltype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  formid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  pipelinestage_formatted?: string;
  processid_formatted?: string;
  scope_formatted?: string;
}
interface ProcessTrigger_Result extends ProcessTrigger_Base, ProcessTrigger_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  formid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  processid_guid: string | null;
}
interface ProcessTrigger_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  formid: WebMappingRetrieve<SystemForm_Select,SystemForm_Expand,SystemForm_Filter,SystemForm_Fixed,SystemForm_Result,SystemForm_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  processid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface ProcessTrigger_RelatedMany {
  ProcessTrigger_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
}
interface WebEntitiesRetrieve {
  processtriggers: WebMappingRetrieve<ProcessTrigger_Select,ProcessTrigger_Expand,ProcessTrigger_Filter,ProcessTrigger_Fixed,ProcessTrigger_Result,ProcessTrigger_FormattedResult>;
}
interface WebEntitiesRelated {
  processtriggers: WebMappingRelated<ProcessTrigger_RelatedOne,ProcessTrigger_RelatedMany>;
}
interface WebEntitiesCUDA {
  processtriggers: WebMappingCUDA<ProcessTrigger_Create,ProcessTrigger_Update,ProcessTrigger_Select>;
}
