interface botcomponent_workflow_Base extends WebEntity {
  botcomponent_workflowid?: string | null;
  botcomponentid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
  workflowid?: string | null;
}
interface botcomponent_workflow_Relationships {
  botcomponent_workflow?: Workflow_Result[] | null;
}
interface botcomponent_workflow extends botcomponent_workflow_Base, botcomponent_workflow_Relationships {
}
interface botcomponent_workflow_Create extends botcomponent_workflow {
}
interface botcomponent_workflow_Update extends botcomponent_workflow {
}
interface botcomponent_workflow_Select {
  botcomponent_workflowid: WebAttribute<botcomponent_workflow_Select, { botcomponent_workflowid: string | null }, {  }>;
  botcomponentid: WebAttribute<botcomponent_workflow_Select, { botcomponentid: string | null }, {  }>;
  componentidunique: WebAttribute<botcomponent_workflow_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<botcomponent_workflow_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<botcomponent_workflow_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<botcomponent_workflow_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<botcomponent_workflow_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<botcomponent_workflow_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<botcomponent_workflow_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<botcomponent_workflow_Select, { versionnumber: number | null }, {  }>;
  workflowid: WebAttribute<botcomponent_workflow_Select, { workflowid: string | null }, {  }>;
}
interface botcomponent_workflow_Filter {
  botcomponent_workflowid: XQW.Guid;
  botcomponentid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
  workflowid: XQW.Guid;
}
interface botcomponent_workflow_Expand {
  botcomponent_workflow: WebExpand<botcomponent_workflow_Expand, Workflow_Select, Workflow_Filter, { botcomponent_workflow: Workflow_Result[] }>;
}
interface botcomponent_workflow_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface botcomponent_workflow_Result extends botcomponent_workflow_Base, botcomponent_workflow_Relationships {
  "@odata.etag": string;
}
interface botcomponent_workflow_RelatedOne {
}
interface botcomponent_workflow_RelatedMany {
  botcomponent_workflow: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface WebEntitiesRetrieve {
  botcomponent_workflowset: WebMappingRetrieve<botcomponent_workflow_Select,botcomponent_workflow_Expand,botcomponent_workflow_Filter,botcomponent_workflow_Fixed,botcomponent_workflow_Result,botcomponent_workflow_FormattedResult>;
}
interface WebEntitiesRelated {
  botcomponent_workflowset: WebMappingRelated<botcomponent_workflow_RelatedOne,botcomponent_workflow_RelatedMany>;
}
interface WebEntitiesCUDA {
  botcomponent_workflowset: WebMappingCUDA<botcomponent_workflow_Create,botcomponent_workflow_Update,botcomponent_workflow_Select>;
}
