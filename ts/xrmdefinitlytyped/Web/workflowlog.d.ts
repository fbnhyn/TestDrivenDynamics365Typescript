interface WorkflowLog_Base extends WebEntity {
  activityname?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  description?: string | null;
  duration?: number | null;
  errorcode?: number | null;
  errortext?: string | null;
  interactionactivityresult?: string | null;
  iterationcount?: number | null;
  message?: string | null;
  modifiedon?: Date | null;
  repetitioncount?: number | null;
  repetitionid?: string | null;
  stagename?: string | null;
  startedon?: Date | null;
  status?: workflowlog_status | null;
  stepname?: string | null;
  workflowlogid?: string | null;
}
interface WorkflowLog_Relationships {
  ExpiredProcess_asyncoperationid?: ExpiredProcess_Result | null;
  LeadToOpportunitySalesProcess_asyncoperationid?: LeadToOpportunitySalesProcess_Result | null;
  NewProcess_asyncoperationid?: NewProcess_Result | null;
  OpportunitySalesProcess_asyncoperationid?: OpportunitySalesProcess_Result | null;
  PhoneToCaseProcess_asyncoperationid?: PhoneToCaseProcess_Result | null;
  TranslationProcess_asyncoperationid?: TranslationProcess_Result | null;
  asyncoperationid_asyncoperation?: AsyncOperation_Result | null;
  asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799?: msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result | null;
  asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b?: msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Result | null;
  asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82?: msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Result | null;
  asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b?: msdyn_bpf_989e9b1857e24af18787d5143b67523b_Result | null;
  asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3?: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result | null;
  asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39?: msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Result | null;
  asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d?: msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Result | null;
  asyncoperationid_msdyn_iottocaseprocess?: msdyn_iottocaseprocess_Result | null;
  asyncoperationid_processsession?: ProcessSession_Result | null;
  childworkflowinstanceid_asyncoperation?: AsyncOperation_Result | null;
  childworkflowinstanceid_processsession?: ProcessSession_Result | null;
  inputs?: FileAttachment_Result | null;
  outputs?: FileAttachment_Result | null;
  userentityinstancedata_workflowlog?: UserEntityInstanceData_Result[] | null;
  workflowlog_FileAttachments?: FileAttachment_Result[] | null;
}
interface WorkflowLog extends WorkflowLog_Base, WorkflowLog_Relationships {
  childworkflowinstanceid_asyncoperation_bind$asyncoperations?: string | null;
  childworkflowinstanceid_processsession_bind$processsessions?: string | null;
}
interface WorkflowLog_Create extends WorkflowLog {
  ExpiredProcess_asyncoperationid_bind$expiredprocesses?: string | null;
  LeadToOpportunitySalesProcess_asyncoperationid_bind$leadtoopportunitysalesprocesses?: string | null;
  NewProcess_asyncoperationid_bind$newprocesses?: string | null;
  OpportunitySalesProcess_asyncoperationid_bind$opportunitysalesprocesses?: string | null;
  PhoneToCaseProcess_asyncoperationid_bind$phonetocaseprocesses?: string | null;
  TranslationProcess_asyncoperationid_bind$translationprocesses?: string | null;
  asyncoperationid_asyncoperation_bind$asyncoperations?: string | null;
  asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_bind$msdyn_bpf_2c5fe86acc8b414b8322ae571000c799s?: string | null;
  asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_bind$msdyn_bpf_477c16f59170487b8b4dc895c5dcd09bs?: string | null;
  asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_bind$msdyn_bpf_665e73aa18c247d886bfc50499c73b82s?: string | null;
  asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b_bind$msdyn_bpf_989e9b1857e24af18787d5143b67523bs?: string | null;
  asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_bind$msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3s?: string | null;
  asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_bind$msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39s?: string | null;
  asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_bind$msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470ds?: string | null;
  asyncoperationid_msdyn_iottocaseprocess_bind$msdyn_iottocaseprocesses?: string | null;
  asyncoperationid_processsession_bind$processsessions?: string | null;
}
interface WorkflowLog_Update extends WorkflowLog {
}
interface WorkflowLog_Select {
  activityname: WebAttribute<WorkflowLog_Select, { activityname: string | null }, {  }>;
  asyncoperationid_guid: WebAttribute<WorkflowLog_Select, { asyncoperationid_guid: string | null }, { asyncoperationid_formatted?: string }>;
  childworkflowinstanceid_guid: WebAttribute<WorkflowLog_Select, { childworkflowinstanceid_guid: string | null }, { childworkflowinstanceid_formatted?: string }>;
  completedon: WebAttribute<WorkflowLog_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<WorkflowLog_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<WorkflowLog_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<WorkflowLog_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<WorkflowLog_Select, { description: string | null }, {  }>;
  duration: WebAttribute<WorkflowLog_Select, { duration: number | null }, {  }>;
  errorcode: WebAttribute<WorkflowLog_Select, { errorcode: number | null }, {  }>;
  errortext: WebAttribute<WorkflowLog_Select, { errortext: string | null }, {  }>;
  interactionactivityresult: WebAttribute<WorkflowLog_Select, { interactionactivityresult: string | null }, {  }>;
  iterationcount: WebAttribute<WorkflowLog_Select, { iterationcount: number | null }, {  }>;
  message: WebAttribute<WorkflowLog_Select, { message: string | null }, {  }>;
  modifiedby_guid: WebAttribute<WorkflowLog_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<WorkflowLog_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<WorkflowLog_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  ownerid_guid: WebAttribute<WorkflowLog_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<WorkflowLog_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<WorkflowLog_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<WorkflowLog_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<WorkflowLog_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  repetitioncount: WebAttribute<WorkflowLog_Select, { repetitioncount: number | null }, {  }>;
  repetitionid: WebAttribute<WorkflowLog_Select, { repetitionid: string | null }, {  }>;
  stagename: WebAttribute<WorkflowLog_Select, { stagename: string | null }, {  }>;
  startedon: WebAttribute<WorkflowLog_Select, { startedon: Date | null }, { startedon_formatted?: string }>;
  status: WebAttribute<WorkflowLog_Select, { status: workflowlog_status | null }, { status_formatted?: string }>;
  stepname: WebAttribute<WorkflowLog_Select, { stepname: string | null }, {  }>;
  workflowlogid: WebAttribute<WorkflowLog_Select, { workflowlogid: string | null }, {  }>;
}
interface WorkflowLog_Filter {
  activityname: string;
  asyncoperationid_guid: XQW.Guid;
  childworkflowinstanceid_guid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  duration: number;
  errorcode: number;
  errortext: string;
  interactionactivityresult: string;
  iterationcount: number;
  message: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  regardingobjectid_guid: XQW.Guid;
  repetitioncount: number;
  repetitionid: string;
  stagename: string;
  startedon: Date;
  status: workflowlog_status;
  stepname: string;
  workflowlogid: XQW.Guid;
}
interface WorkflowLog_Expand {
  ExpiredProcess_asyncoperationid: WebExpand<WorkflowLog_Expand, ExpiredProcess_Select, ExpiredProcess_Filter, { ExpiredProcess_asyncoperationid: ExpiredProcess_Result }>;
  LeadToOpportunitySalesProcess_asyncoperationid: WebExpand<WorkflowLog_Expand, LeadToOpportunitySalesProcess_Select, LeadToOpportunitySalesProcess_Filter, { LeadToOpportunitySalesProcess_asyncoperationid: LeadToOpportunitySalesProcess_Result }>;
  NewProcess_asyncoperationid: WebExpand<WorkflowLog_Expand, NewProcess_Select, NewProcess_Filter, { NewProcess_asyncoperationid: NewProcess_Result }>;
  OpportunitySalesProcess_asyncoperationid: WebExpand<WorkflowLog_Expand, OpportunitySalesProcess_Select, OpportunitySalesProcess_Filter, { OpportunitySalesProcess_asyncoperationid: OpportunitySalesProcess_Result }>;
  PhoneToCaseProcess_asyncoperationid: WebExpand<WorkflowLog_Expand, PhoneToCaseProcess_Select, PhoneToCaseProcess_Filter, { PhoneToCaseProcess_asyncoperationid: PhoneToCaseProcess_Result }>;
  TranslationProcess_asyncoperationid: WebExpand<WorkflowLog_Expand, TranslationProcess_Select, TranslationProcess_Filter, { TranslationProcess_asyncoperationid: TranslationProcess_Result }>;
  asyncoperationid_asyncoperation: WebExpand<WorkflowLog_Expand, AsyncOperation_Select, AsyncOperation_Filter, { asyncoperationid_asyncoperation: AsyncOperation_Result }>;
  asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: WebExpand<WorkflowLog_Expand, msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Select, msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Filter, { asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result }>;
  asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: WebExpand<WorkflowLog_Expand, msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select, msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Filter, { asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Result }>;
  asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: WebExpand<WorkflowLog_Expand, msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select, msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Filter, { asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Result }>;
  asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: WebExpand<WorkflowLog_Expand, msdyn_bpf_989e9b1857e24af18787d5143b67523b_Select, msdyn_bpf_989e9b1857e24af18787d5143b67523b_Filter, { asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: msdyn_bpf_989e9b1857e24af18787d5143b67523b_Result }>;
  asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: WebExpand<WorkflowLog_Expand, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Filter, { asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result }>;
  asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: WebExpand<WorkflowLog_Expand, msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Select, msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Filter, { asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Result }>;
  asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: WebExpand<WorkflowLog_Expand, msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Select, msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Filter, { asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Result }>;
  asyncoperationid_msdyn_iottocaseprocess: WebExpand<WorkflowLog_Expand, msdyn_iottocaseprocess_Select, msdyn_iottocaseprocess_Filter, { asyncoperationid_msdyn_iottocaseprocess: msdyn_iottocaseprocess_Result }>;
  asyncoperationid_processsession: WebExpand<WorkflowLog_Expand, ProcessSession_Select, ProcessSession_Filter, { asyncoperationid_processsession: ProcessSession_Result }>;
  childworkflowinstanceid_asyncoperation: WebExpand<WorkflowLog_Expand, AsyncOperation_Select, AsyncOperation_Filter, { childworkflowinstanceid_asyncoperation: AsyncOperation_Result }>;
  childworkflowinstanceid_processsession: WebExpand<WorkflowLog_Expand, ProcessSession_Select, ProcessSession_Filter, { childworkflowinstanceid_processsession: ProcessSession_Result }>;
  createdby: WebExpand<WorkflowLog_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<WorkflowLog_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  inputs: WebExpand<WorkflowLog_Expand, FileAttachment_Select, FileAttachment_Filter, { inputs: FileAttachment_Result }>;
  modifiedby: WebExpand<WorkflowLog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<WorkflowLog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  outputs: WebExpand<WorkflowLog_Expand, FileAttachment_Select, FileAttachment_Filter, { outputs: FileAttachment_Result }>;
  owningbusinessunit: WebExpand<WorkflowLog_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<WorkflowLog_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  userentityinstancedata_workflowlog: WebExpand<WorkflowLog_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_workflowlog: UserEntityInstanceData_Result[] }>;
  workflowlog_FileAttachments: WebExpand<WorkflowLog_Expand, FileAttachment_Select, FileAttachment_Filter, { workflowlog_FileAttachments: FileAttachment_Result[] }>;
}
interface WorkflowLog_FormattedResult {
  asyncoperationid_formatted?: string;
  childworkflowinstanceid_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
  startedon_formatted?: string;
  status_formatted?: string;
}
interface WorkflowLog_Result extends WorkflowLog_Base, WorkflowLog_Relationships {
  "@odata.etag": string;
  asyncoperationid_guid: string | null;
  childworkflowinstanceid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface WorkflowLog_RelatedOne {
  ExpiredProcess_asyncoperationid: WebMappingRetrieve<ExpiredProcess_Select,ExpiredProcess_Expand,ExpiredProcess_Filter,ExpiredProcess_Fixed,ExpiredProcess_Result,ExpiredProcess_FormattedResult>;
  LeadToOpportunitySalesProcess_asyncoperationid: WebMappingRetrieve<LeadToOpportunitySalesProcess_Select,LeadToOpportunitySalesProcess_Expand,LeadToOpportunitySalesProcess_Filter,LeadToOpportunitySalesProcess_Fixed,LeadToOpportunitySalesProcess_Result,LeadToOpportunitySalesProcess_FormattedResult>;
  NewProcess_asyncoperationid: WebMappingRetrieve<NewProcess_Select,NewProcess_Expand,NewProcess_Filter,NewProcess_Fixed,NewProcess_Result,NewProcess_FormattedResult>;
  OpportunitySalesProcess_asyncoperationid: WebMappingRetrieve<OpportunitySalesProcess_Select,OpportunitySalesProcess_Expand,OpportunitySalesProcess_Filter,OpportunitySalesProcess_Fixed,OpportunitySalesProcess_Result,OpportunitySalesProcess_FormattedResult>;
  PhoneToCaseProcess_asyncoperationid: WebMappingRetrieve<PhoneToCaseProcess_Select,PhoneToCaseProcess_Expand,PhoneToCaseProcess_Filter,PhoneToCaseProcess_Fixed,PhoneToCaseProcess_Result,PhoneToCaseProcess_FormattedResult>;
  TranslationProcess_asyncoperationid: WebMappingRetrieve<TranslationProcess_Select,TranslationProcess_Expand,TranslationProcess_Filter,TranslationProcess_Fixed,TranslationProcess_Result,TranslationProcess_FormattedResult>;
  asyncoperationid_asyncoperation: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  asyncoperationid_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799: WebMappingRetrieve<msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Select,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Expand,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Filter,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Fixed,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result,msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_FormattedResult>;
  asyncoperationid_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: WebMappingRetrieve<msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Filter,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Fixed,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Result,msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_FormattedResult>;
  asyncoperationid_msdyn_bpf_665e73aa18c247d886bfc50499c73b82: WebMappingRetrieve<msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Filter,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Fixed,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Result,msdyn_bpf_665e73aa18c247d886bfc50499c73b82_FormattedResult>;
  asyncoperationid_msdyn_bpf_989e9b1857e24af18787d5143b67523b: WebMappingRetrieve<msdyn_bpf_989e9b1857e24af18787d5143b67523b_Select,msdyn_bpf_989e9b1857e24af18787d5143b67523b_Expand,msdyn_bpf_989e9b1857e24af18787d5143b67523b_Filter,msdyn_bpf_989e9b1857e24af18787d5143b67523b_Fixed,msdyn_bpf_989e9b1857e24af18787d5143b67523b_Result,msdyn_bpf_989e9b1857e24af18787d5143b67523b_FormattedResult>;
  asyncoperationid_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3: WebMappingRetrieve<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Filter,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Fixed,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_FormattedResult>;
  asyncoperationid_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: WebMappingRetrieve<msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Select,msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Expand,msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Filter,msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Fixed,msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Result,msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_FormattedResult>;
  asyncoperationid_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d: WebMappingRetrieve<msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Select,msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Expand,msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Filter,msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Fixed,msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Result,msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_FormattedResult>;
  asyncoperationid_msdyn_iottocaseprocess: WebMappingRetrieve<msdyn_iottocaseprocess_Select,msdyn_iottocaseprocess_Expand,msdyn_iottocaseprocess_Filter,msdyn_iottocaseprocess_Fixed,msdyn_iottocaseprocess_Result,msdyn_iottocaseprocess_FormattedResult>;
  asyncoperationid_processsession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  childworkflowinstanceid_asyncoperation: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  childworkflowinstanceid_processsession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  inputs: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  outputs: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface WorkflowLog_RelatedMany {
  userentityinstancedata_workflowlog: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  workflowlog_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
}
interface WebEntitiesRetrieve {
  workflowlogs: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRelated {
  workflowlogs: WebMappingRelated<WorkflowLog_RelatedOne,WorkflowLog_RelatedMany>;
}
interface WebEntitiesCUDA {
  workflowlogs: WebMappingCUDA<WorkflowLog_Create,WorkflowLog_Update,WorkflowLog_Select>;
}
