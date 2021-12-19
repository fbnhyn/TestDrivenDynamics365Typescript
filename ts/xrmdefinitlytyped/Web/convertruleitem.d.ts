interface ConvertRuleItem_Base extends WebEntity {
  componentstate?: componentstate | null;
  conditionxml?: string | null;
  convertruleitemid?: string | null;
  convertruleitemidunique?: string | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  primarycreateentitylogicalname?: string | null;
  propertiesxml?: string | null;
  sequencenumber?: number | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ConvertRuleItem_Relationships {
  convertruleitem_activitymonitor?: activitymonitor_Result[] | null;
  msdyn_migrationtracker_LegacyConvertRuleItem_convertruleitem?: msdyn_migrationtracker_Result[] | null;
  msdyn_migrationtracker_ModernConvertRuleItem_convertruleitem?: msdyn_migrationtracker_Result[] | null;
}
interface ConvertRuleItem extends ConvertRuleItem_Base, ConvertRuleItem_Relationships {
  convertruleid_bind$convertrules?: string | null;
  workflowid_bind$workflows?: string | null;
}
interface ConvertRuleItem_Create extends ConvertRuleItem {
  queueid_bind$queues?: string | null;
}
interface ConvertRuleItem_Update extends ConvertRuleItem {
}
interface ConvertRuleItem_Select {
  componentstate: WebAttribute<ConvertRuleItem_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  conditionid_guid: WebAttribute<ConvertRuleItem_Select, { conditionid_guid: string | null }, { conditionid_formatted?: string }>;
  conditionxml: WebAttribute<ConvertRuleItem_Select, { conditionxml: string | null }, {  }>;
  convertruleid_guid: WebAttribute<ConvertRuleItem_Select, { convertruleid_guid: string | null }, { convertruleid_formatted?: string }>;
  convertruleitemid: WebAttribute<ConvertRuleItem_Select, { convertruleitemid: string | null }, {  }>;
  convertruleitemidunique: WebAttribute<ConvertRuleItem_Select, { convertruleitemidunique: string | null }, {  }>;
  createdby_guid: WebAttribute<ConvertRuleItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ConvertRuleItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ConvertRuleItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ConvertRuleItem_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<ConvertRuleItem_Select, { exchangerate: number | null }, {  }>;
  ismanaged: WebAttribute<ConvertRuleItem_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ConvertRuleItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ConvertRuleItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ConvertRuleItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ConvertRuleItem_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<ConvertRuleItem_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ConvertRuleItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ConvertRuleItem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<ConvertRuleItem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  primarycreateentitylogicalname: WebAttribute<ConvertRuleItem_Select, { primarycreateentitylogicalname: string | null }, {  }>;
  propertiesxml: WebAttribute<ConvertRuleItem_Select, { propertiesxml: string | null }, {  }>;
  queueid_guid: WebAttribute<ConvertRuleItem_Select, { queueid_guid: string | null }, { queueid_formatted?: string }>;
  sequencenumber: WebAttribute<ConvertRuleItem_Select, { sequencenumber: number | null }, {  }>;
  solutionid: WebAttribute<ConvertRuleItem_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ConvertRuleItem_Select, { supportingsolutionid: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ConvertRuleItem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<ConvertRuleItem_Select, { versionnumber: number | null }, {  }>;
  workflowid_guid: WebAttribute<ConvertRuleItem_Select, { workflowid_guid: string | null }, { workflowid_formatted?: string }>;
}
interface ConvertRuleItem_Filter {
  componentstate: componentstate;
  conditionid_guid: XQW.Guid;
  conditionxml: string;
  convertruleid_guid: XQW.Guid;
  convertruleitemid: XQW.Guid;
  convertruleitemidunique: XQW.Guid;
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
  owninguser_guid: XQW.Guid;
  primarycreateentitylogicalname: string;
  propertiesxml: string;
  queueid_guid: XQW.Guid;
  sequencenumber: number;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
  workflowid_guid: XQW.Guid;
}
interface ConvertRuleItem_Expand {
  convertruleid: WebExpand<ConvertRuleItem_Expand, ConvertRule_Select, ConvertRule_Filter, { convertruleid: ConvertRule_Result }>;
  convertruleitem_activitymonitor: WebExpand<ConvertRuleItem_Expand, activitymonitor_Select, activitymonitor_Filter, { convertruleitem_activitymonitor: activitymonitor_Result[] }>;
  createdby: WebExpand<ConvertRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ConvertRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ConvertRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ConvertRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_migrationtracker_LegacyConvertRuleItem_convertruleitem: WebExpand<ConvertRuleItem_Expand, msdyn_migrationtracker_Select, msdyn_migrationtracker_Filter, { msdyn_migrationtracker_LegacyConvertRuleItem_convertruleitem: msdyn_migrationtracker_Result[] }>;
  msdyn_migrationtracker_ModernConvertRuleItem_convertruleitem: WebExpand<ConvertRuleItem_Expand, msdyn_migrationtracker_Select, msdyn_migrationtracker_Filter, { msdyn_migrationtracker_ModernConvertRuleItem_convertruleitem: msdyn_migrationtracker_Result[] }>;
  queueid: WebExpand<ConvertRuleItem_Expand, Queue_Select, Queue_Filter, { queueid: Queue_Result }>;
  transactioncurrencyid: WebExpand<ConvertRuleItem_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowid: WebExpand<ConvertRuleItem_Expand, Workflow_Select, Workflow_Filter, { workflowid: Workflow_Result }>;
}
interface ConvertRuleItem_FormattedResult {
  componentstate_formatted?: string;
  conditionid_formatted?: string;
  convertruleid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  queueid_formatted?: string;
  transactioncurrencyid_formatted?: string;
  workflowid_formatted?: string;
}
interface ConvertRuleItem_Result extends ConvertRuleItem_Base, ConvertRuleItem_Relationships {
  "@odata.etag": string;
  conditionid_guid: string | null;
  convertruleid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
  queueid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  workflowid_guid: string | null;
}
interface ConvertRuleItem_RelatedOne {
  convertruleid: WebMappingRetrieve<ConvertRule_Select,ConvertRule_Expand,ConvertRule_Filter,ConvertRule_Fixed,ConvertRule_Result,ConvertRule_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  queueid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  workflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface ConvertRuleItem_RelatedMany {
  convertruleitem_activitymonitor: WebMappingRetrieve<activitymonitor_Select,activitymonitor_Expand,activitymonitor_Filter,activitymonitor_Fixed,activitymonitor_Result,activitymonitor_FormattedResult>;
  msdyn_migrationtracker_LegacyConvertRuleItem_convertruleitem: WebMappingRetrieve<msdyn_migrationtracker_Select,msdyn_migrationtracker_Expand,msdyn_migrationtracker_Filter,msdyn_migrationtracker_Fixed,msdyn_migrationtracker_Result,msdyn_migrationtracker_FormattedResult>;
  msdyn_migrationtracker_ModernConvertRuleItem_convertruleitem: WebMappingRetrieve<msdyn_migrationtracker_Select,msdyn_migrationtracker_Expand,msdyn_migrationtracker_Filter,msdyn_migrationtracker_Fixed,msdyn_migrationtracker_Result,msdyn_migrationtracker_FormattedResult>;
}
interface WebEntitiesRetrieve {
  convertruleitems: WebMappingRetrieve<ConvertRuleItem_Select,ConvertRuleItem_Expand,ConvertRuleItem_Filter,ConvertRuleItem_Fixed,ConvertRuleItem_Result,ConvertRuleItem_FormattedResult>;
}
interface WebEntitiesRelated {
  convertruleitems: WebMappingRelated<ConvertRuleItem_RelatedOne,ConvertRuleItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  convertruleitems: WebMappingCUDA<ConvertRuleItem_Create,ConvertRuleItem_Update,ConvertRuleItem_Select>;
}
