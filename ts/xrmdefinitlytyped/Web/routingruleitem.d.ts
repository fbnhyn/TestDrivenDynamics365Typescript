interface RoutingRuleItem_Base extends WebEntity {
  assignobjectidmodifiedon?: Date | null;
  componentstate?: componentstate | null;
  conditionxml?: string | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_routeto?: msdynce_routingrule_msdyn_routeto | null;
  name?: string | null;
  overwritetime?: Date | null;
  routingruleitemid?: string | null;
  routingruleitemidunique?: string | null;
  sequencenumber?: number | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface RoutingRuleItem_Relationships {
  assignobjectid_systemuser?: SystemUser_Result | null;
  assignobjectid_team?: Team_Result | null;
  routingruleitem_Annotation?: Annotation_Result[] | null;
  routingruleitem_AsyncOperations?: AsyncOperation_Result[] | null;
  routingruleitem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  routingruleitem_ProcessSessions?: ProcessSession_Result[] | null;
  routingruleitem_userentityinstancedatas?: UserEntityInstanceData_Result[] | null;
}
interface RoutingRuleItem extends RoutingRuleItem_Base, RoutingRuleItem_Relationships {
  assignobjectid_systemuser_bind$systemusers?: string | null;
  assignobjectid_team_bind$teams?: string | null;
  routedqueueid_bind$queues?: string | null;
  routingruleid_bind$routingrules?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface RoutingRuleItem_Create extends RoutingRuleItem {
}
interface RoutingRuleItem_Update extends RoutingRuleItem {
}
interface RoutingRuleItem_Select {
  assignobjectid_guid: WebAttribute<RoutingRuleItem_Select, { assignobjectid_guid: string | null }, { assignobjectid_formatted?: string }>;
  assignobjectidmodifiedon: WebAttribute<RoutingRuleItem_Select, { assignobjectidmodifiedon: Date | null }, { assignobjectidmodifiedon_formatted?: string }>;
  componentstate: WebAttribute<RoutingRuleItem_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  conditionxml: WebAttribute<RoutingRuleItem_Select, { conditionxml: string | null }, {  }>;
  createdby_guid: WebAttribute<RoutingRuleItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RoutingRuleItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RoutingRuleItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<RoutingRuleItem_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<RoutingRuleItem_Select, { exchangerate: number | null }, {  }>;
  ismanaged: WebAttribute<RoutingRuleItem_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<RoutingRuleItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RoutingRuleItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RoutingRuleItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_routeto: WebAttribute<RoutingRuleItem_Select, { msdyn_routeto: msdynce_routingrule_msdyn_routeto | null }, { msdyn_routeto_formatted?: string }>;
  name: WebAttribute<RoutingRuleItem_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<RoutingRuleItem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<RoutingRuleItem_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<RoutingRuleItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<RoutingRuleItem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<RoutingRuleItem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  routedqueueid_guid: WebAttribute<RoutingRuleItem_Select, { routedqueueid_guid: string | null }, { routedqueueid_formatted?: string }>;
  routingruleid_guid: WebAttribute<RoutingRuleItem_Select, { routingruleid_guid: string | null }, { routingruleid_formatted?: string }>;
  routingruleitemid: WebAttribute<RoutingRuleItem_Select, { routingruleitemid: string | null }, {  }>;
  routingruleitemidunique: WebAttribute<RoutingRuleItem_Select, { routingruleitemidunique: string | null }, {  }>;
  sequencenumber: WebAttribute<RoutingRuleItem_Select, { sequencenumber: number | null }, {  }>;
  solutionid: WebAttribute<RoutingRuleItem_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<RoutingRuleItem_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<RoutingRuleItem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<RoutingRuleItem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<RoutingRuleItem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<RoutingRuleItem_Select, { versionnumber: number | null }, {  }>;
}
interface RoutingRuleItem_Filter {
  assignobjectid_guid: XQW.Guid;
  assignobjectidmodifiedon: Date;
  componentstate: componentstate;
  conditionxml: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_routeto: msdynce_routingrule_msdyn_routeto;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  routedqueueid_guid: XQW.Guid;
  routingruleid_guid: XQW.Guid;
  routingruleitemid: XQW.Guid;
  routingruleitemidunique: XQW.Guid;
  sequencenumber: number;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface RoutingRuleItem_Expand {
  assignobjectid_systemuser: WebExpand<RoutingRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { assignobjectid_systemuser: SystemUser_Result }>;
  assignobjectid_team: WebExpand<RoutingRuleItem_Expand, Team_Select, Team_Filter, { assignobjectid_team: Team_Result }>;
  createdby: WebExpand<RoutingRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<RoutingRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<RoutingRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<RoutingRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<RoutingRuleItem_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  routedqueueid: WebExpand<RoutingRuleItem_Expand, Queue_Select, Queue_Filter, { routedqueueid: Queue_Result }>;
  routingruleid: WebExpand<RoutingRuleItem_Expand, RoutingRule_Select, RoutingRule_Filter, { routingruleid: RoutingRule_Result }>;
  routingruleitem_Annotation: WebExpand<RoutingRuleItem_Expand, Annotation_Select, Annotation_Filter, { routingruleitem_Annotation: Annotation_Result[] }>;
  routingruleitem_AsyncOperations: WebExpand<RoutingRuleItem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { routingruleitem_AsyncOperations: AsyncOperation_Result[] }>;
  routingruleitem_BulkDeleteFailures: WebExpand<RoutingRuleItem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { routingruleitem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  routingruleitem_ProcessSessions: WebExpand<RoutingRuleItem_Expand, ProcessSession_Select, ProcessSession_Filter, { routingruleitem_ProcessSessions: ProcessSession_Result[] }>;
  routingruleitem_userentityinstancedatas: WebExpand<RoutingRuleItem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { routingruleitem_userentityinstancedatas: UserEntityInstanceData_Result[] }>;
  transactioncurrencyid: WebExpand<RoutingRuleItem_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface RoutingRuleItem_FormattedResult {
  assignobjectid_formatted?: string;
  assignobjectidmodifiedon_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_routeto_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  routedqueueid_formatted?: string;
  routingruleid_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface RoutingRuleItem_Result extends RoutingRuleItem_Base, RoutingRuleItem_Relationships {
  "@odata.etag": string;
  assignobjectid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
  routedqueueid_guid: string | null;
  routingruleid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface RoutingRuleItem_RelatedOne {
  assignobjectid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  assignobjectid_team: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  routedqueueid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  routingruleid: WebMappingRetrieve<RoutingRule_Select,RoutingRule_Expand,RoutingRule_Filter,RoutingRule_Fixed,RoutingRule_Result,RoutingRule_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface RoutingRuleItem_RelatedMany {
  routingruleitem_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  routingruleitem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  routingruleitem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  routingruleitem_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  routingruleitem_userentityinstancedatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  routingruleitems: WebMappingRetrieve<RoutingRuleItem_Select,RoutingRuleItem_Expand,RoutingRuleItem_Filter,RoutingRuleItem_Fixed,RoutingRuleItem_Result,RoutingRuleItem_FormattedResult>;
}
interface WebEntitiesRelated {
  routingruleitems: WebMappingRelated<RoutingRuleItem_RelatedOne,RoutingRuleItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  routingruleitems: WebMappingCUDA<RoutingRuleItem_Create,RoutingRuleItem_Update,RoutingRuleItem_Select>;
}
