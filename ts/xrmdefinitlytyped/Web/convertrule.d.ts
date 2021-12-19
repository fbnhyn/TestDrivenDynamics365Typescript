interface ConvertRule_Base extends WebEntity {
  allowunknownsender?: boolean | null;
  checkactiveentitlement?: boolean | null;
  checkblockedsocialprofile?: boolean | null;
  checkdirectmessages?: boolean | null;
  checkifresolved?: boolean | null;
  componentstate?: componentstate | null;
  convertruleid?: string | null;
  convertruleidunique?: string | null;
  convertruletype?: boolean | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  recordversion?: string | null;
  resolvedsince?: number | null;
  sendautomaticresponse?: boolean | null;
  senderresolutionoption?: convertrule_senderresolutionoptions | null;
  solutionid?: string | null;
  sourcechanneltypecode?: string | null;
  sourcetypecode?: converttorule_sourcetype | null;
  statecode?: convertrule_statecode | null;
  statuscode?: convertrule_statuscode | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ConvertRule_Relationships {
  ConvertRule_Annotation?: Annotation_Result[] | null;
  ConvertRule_ProcessSessions?: ProcessSession_Result[] | null;
  ConvertRule_userentityinstancedatas?: UserEntityInstanceData_Result[] | null;
  Convertrule_AsyncOperations?: AsyncOperation_Result[] | null;
  convertrule_activitymonitor?: activitymonitor_Result[] | null;
  convertrule_convertruleitem?: ConvertRuleItem_Result[] | null;
  msdyn_migrationtracker_LegacyConvertRule_convertrule?: msdyn_migrationtracker_Result[] | null;
  msdyn_migrationtracker_ModernConvertRule_convertrule?: msdyn_migrationtracker_Result[] | null;
  propetybagid?: ChannelPropertyGroup_Result | null;
}
interface ConvertRule extends ConvertRule_Base, ConvertRule_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  owningteam_bind$teams?: string | null;
  owninguser_bind$systemusers?: string | null;
  propetybagid_bind$channelpropertygroups?: string | null;
  queueid_bind$queues?: string | null;
  responsetemplateid_bind$templates?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
  workflowid_bind$workflows?: string | null;
}
interface ConvertRule_Create extends ConvertRule {
}
interface ConvertRule_Update extends ConvertRule {
}
interface ConvertRule_Select {
  allowunknownsender: WebAttribute<ConvertRule_Select, { allowunknownsender: boolean | null }, {  }>;
  channelpropertygroupid_guid: WebAttribute<ConvertRule_Select, { channelpropertygroupid_guid: string | null }, { channelpropertygroupid_formatted?: string }>;
  checkactiveentitlement: WebAttribute<ConvertRule_Select, { checkactiveentitlement: boolean | null }, {  }>;
  checkblockedsocialprofile: WebAttribute<ConvertRule_Select, { checkblockedsocialprofile: boolean | null }, {  }>;
  checkdirectmessages: WebAttribute<ConvertRule_Select, { checkdirectmessages: boolean | null }, {  }>;
  checkifresolved: WebAttribute<ConvertRule_Select, { checkifresolved: boolean | null }, {  }>;
  componentstate: WebAttribute<ConvertRule_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  convertruleid: WebAttribute<ConvertRule_Select, { convertruleid: string | null }, {  }>;
  convertruleidunique: WebAttribute<ConvertRule_Select, { convertruleidunique: string | null }, {  }>;
  convertruletype: WebAttribute<ConvertRule_Select, { convertruletype: boolean | null }, {  }>;
  createdby_guid: WebAttribute<ConvertRule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ConvertRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ConvertRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ConvertRule_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<ConvertRule_Select, { exchangerate: number | null }, {  }>;
  ismanaged: WebAttribute<ConvertRule_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ConvertRule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ConvertRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ConvertRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ConvertRule_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<ConvertRule_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ConvertRule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ConvertRule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ConvertRule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ConvertRule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  queueid_guid: WebAttribute<ConvertRule_Select, { queueid_guid: string | null }, { queueid_formatted?: string }>;
  recordversion: WebAttribute<ConvertRule_Select, { recordversion: string | null }, {  }>;
  resolvedsince: WebAttribute<ConvertRule_Select, { resolvedsince: number | null }, {  }>;
  responsetemplateid_guid: WebAttribute<ConvertRule_Select, { responsetemplateid_guid: string | null }, { responsetemplateid_formatted?: string }>;
  sendautomaticresponse: WebAttribute<ConvertRule_Select, { sendautomaticresponse: boolean | null }, {  }>;
  senderresolutionoption: WebAttribute<ConvertRule_Select, { senderresolutionoption: convertrule_senderresolutionoptions | null }, { senderresolutionoption_formatted?: string }>;
  solutionid: WebAttribute<ConvertRule_Select, { solutionid: string | null }, {  }>;
  sourcechanneltypecode: WebAttribute<ConvertRule_Select, { sourcechanneltypecode: string | null }, {  }>;
  sourcetypecode: WebAttribute<ConvertRule_Select, { sourcetypecode: converttorule_sourcetype | null }, { sourcetypecode_formatted?: string }>;
  statecode: WebAttribute<ConvertRule_Select, { statecode: convertrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ConvertRule_Select, { statuscode: convertrule_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ConvertRule_Select, { supportingsolutionid: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ConvertRule_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<ConvertRule_Select, { versionnumber: number | null }, {  }>;
  workflowid_guid: WebAttribute<ConvertRule_Select, { workflowid_guid: string | null }, { workflowid_formatted?: string }>;
}
interface ConvertRule_Filter {
  allowunknownsender: boolean;
  channelpropertygroupid_guid: XQW.Guid;
  checkactiveentitlement: boolean;
  checkblockedsocialprofile: boolean;
  checkdirectmessages: boolean;
  checkifresolved: boolean;
  componentstate: componentstate;
  convertruleid: XQW.Guid;
  convertruleidunique: XQW.Guid;
  convertruletype: boolean;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  queueid_guid: XQW.Guid;
  recordversion: string;
  resolvedsince: number;
  responsetemplateid_guid: XQW.Guid;
  sendautomaticresponse: boolean;
  senderresolutionoption: convertrule_senderresolutionoptions;
  solutionid: XQW.Guid;
  sourcechanneltypecode: string;
  sourcetypecode: converttorule_sourcetype;
  statecode: convertrule_statecode;
  statuscode: convertrule_statuscode;
  supportingsolutionid: XQW.Guid;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
  workflowid_guid: XQW.Guid;
}
interface ConvertRule_Expand {
  ConvertRule_Annotation: WebExpand<ConvertRule_Expand, Annotation_Select, Annotation_Filter, { ConvertRule_Annotation: Annotation_Result[] }>;
  ConvertRule_ProcessSessions: WebExpand<ConvertRule_Expand, ProcessSession_Select, ProcessSession_Filter, { ConvertRule_ProcessSessions: ProcessSession_Result[] }>;
  ConvertRule_userentityinstancedatas: WebExpand<ConvertRule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { ConvertRule_userentityinstancedatas: UserEntityInstanceData_Result[] }>;
  Convertrule_AsyncOperations: WebExpand<ConvertRule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Convertrule_AsyncOperations: AsyncOperation_Result[] }>;
  convertrule_activitymonitor: WebExpand<ConvertRule_Expand, activitymonitor_Select, activitymonitor_Filter, { convertrule_activitymonitor: activitymonitor_Result[] }>;
  convertrule_convertruleitem: WebExpand<ConvertRule_Expand, ConvertRuleItem_Select, ConvertRuleItem_Filter, { convertrule_convertruleitem: ConvertRuleItem_Result[] }>;
  createdby: WebExpand<ConvertRule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ConvertRule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ConvertRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ConvertRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_migrationtracker_LegacyConvertRule_convertrule: WebExpand<ConvertRule_Expand, msdyn_migrationtracker_Select, msdyn_migrationtracker_Filter, { msdyn_migrationtracker_LegacyConvertRule_convertrule: msdyn_migrationtracker_Result[] }>;
  msdyn_migrationtracker_ModernConvertRule_convertrule: WebExpand<ConvertRule_Expand, msdyn_migrationtracker_Select, msdyn_migrationtracker_Filter, { msdyn_migrationtracker_ModernConvertRule_convertrule: msdyn_migrationtracker_Result[] }>;
  ownerid: WebExpand<ConvertRule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ConvertRule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<ConvertRule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ConvertRule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  propetybagid: WebExpand<ConvertRule_Expand, ChannelPropertyGroup_Select, ChannelPropertyGroup_Filter, { propetybagid: ChannelPropertyGroup_Result }>;
  queueid: WebExpand<ConvertRule_Expand, Queue_Select, Queue_Filter, { queueid: Queue_Result }>;
  responsetemplateid: WebExpand<ConvertRule_Expand, Template_Select, Template_Filter, { responsetemplateid: Template_Result }>;
  transactioncurrencyid: WebExpand<ConvertRule_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowid: WebExpand<ConvertRule_Expand, Workflow_Select, Workflow_Filter, { workflowid: Workflow_Result }>;
}
interface ConvertRule_FormattedResult {
  channelpropertygroupid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  queueid_formatted?: string;
  responsetemplateid_formatted?: string;
  senderresolutionoption_formatted?: string;
  sourcetypecode_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  workflowid_formatted?: string;
}
interface ConvertRule_Result extends ConvertRule_Base, ConvertRule_Relationships {
  "@odata.etag": string;
  channelpropertygroupid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  queueid_guid: string | null;
  responsetemplateid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  workflowid_guid: string | null;
}
interface ConvertRule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  propetybagid: WebMappingRetrieve<ChannelPropertyGroup_Select,ChannelPropertyGroup_Expand,ChannelPropertyGroup_Filter,ChannelPropertyGroup_Fixed,ChannelPropertyGroup_Result,ChannelPropertyGroup_FormattedResult>;
  queueid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  responsetemplateid: WebMappingRetrieve<Template_Select,Template_Expand,Template_Filter,Template_Fixed,Template_Result,Template_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  workflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface ConvertRule_RelatedMany {
  ConvertRule_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  ConvertRule_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  ConvertRule_userentityinstancedatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  Convertrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  convertrule_activitymonitor: WebMappingRetrieve<activitymonitor_Select,activitymonitor_Expand,activitymonitor_Filter,activitymonitor_Fixed,activitymonitor_Result,activitymonitor_FormattedResult>;
  convertrule_convertruleitem: WebMappingRetrieve<ConvertRuleItem_Select,ConvertRuleItem_Expand,ConvertRuleItem_Filter,ConvertRuleItem_Fixed,ConvertRuleItem_Result,ConvertRuleItem_FormattedResult>;
  msdyn_migrationtracker_LegacyConvertRule_convertrule: WebMappingRetrieve<msdyn_migrationtracker_Select,msdyn_migrationtracker_Expand,msdyn_migrationtracker_Filter,msdyn_migrationtracker_Fixed,msdyn_migrationtracker_Result,msdyn_migrationtracker_FormattedResult>;
  msdyn_migrationtracker_ModernConvertRule_convertrule: WebMappingRetrieve<msdyn_migrationtracker_Select,msdyn_migrationtracker_Expand,msdyn_migrationtracker_Filter,msdyn_migrationtracker_Fixed,msdyn_migrationtracker_Result,msdyn_migrationtracker_FormattedResult>;
}
interface WebEntitiesRetrieve {
  convertrules: WebMappingRetrieve<ConvertRule_Select,ConvertRule_Expand,ConvertRule_Filter,ConvertRule_Fixed,ConvertRule_Result,ConvertRule_FormattedResult>;
}
interface WebEntitiesRelated {
  convertrules: WebMappingRelated<ConvertRule_RelatedOne,ConvertRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  convertrules: WebMappingCUDA<ConvertRule_Create,ConvertRule_Update,ConvertRule_Select>;
}
