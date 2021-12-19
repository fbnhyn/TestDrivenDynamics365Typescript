interface RoutingRule_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_entitylogicalname?: string | null;
  name?: string | null;
  overwritetime?: Date | null;
  routingruleid?: string | null;
  routingruleidunique?: string | null;
  solutionid?: string | null;
  statecode?: routingrule_statecode | null;
  statuscode?: routingrule_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface RoutingRule_Relationships {
  routingrule_Annotation?: Annotation_Result[] | null;
  routingrule_AsyncOperations?: AsyncOperation_Result[] | null;
  routingrule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  routingrule_ProcessSessions?: ProcessSession_Result[] | null;
  routingrule_entries?: RoutingRuleItem_Result[] | null;
  routingrule_userentityinstancedatas?: UserEntityInstanceData_Result[] | null;
}
interface RoutingRule extends RoutingRule_Base, RoutingRule_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  owningbusinessunit_bind$businessunits?: string | null;
  owningteam_bind$teams?: string | null;
  owninguser_bind$systemusers?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
  workflowid_bind$workflows?: string | null;
}
interface RoutingRule_Create extends RoutingRule {
}
interface RoutingRule_Update extends RoutingRule {
}
interface RoutingRule_Select {
  componentstate: WebAttribute<RoutingRule_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<RoutingRule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RoutingRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RoutingRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<RoutingRule_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<RoutingRule_Select, { exchangerate: number | null }, {  }>;
  ismanaged: WebAttribute<RoutingRule_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<RoutingRule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RoutingRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RoutingRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_entitylogicalname: WebAttribute<RoutingRule_Select, { msdyn_entitylogicalname: string | null }, {  }>;
  name: WebAttribute<RoutingRule_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<RoutingRule_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<RoutingRule_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<RoutingRule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<RoutingRule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<RoutingRule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<RoutingRule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  routingruleid: WebAttribute<RoutingRule_Select, { routingruleid: string | null }, {  }>;
  routingruleidunique: WebAttribute<RoutingRule_Select, { routingruleidunique: string | null }, {  }>;
  solutionid: WebAttribute<RoutingRule_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<RoutingRule_Select, { statecode: routingrule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<RoutingRule_Select, { statuscode: routingrule_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<RoutingRule_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<RoutingRule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<RoutingRule_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<RoutingRule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<RoutingRule_Select, { versionnumber: number | null }, {  }>;
  workflowid_guid: WebAttribute<RoutingRule_Select, { workflowid_guid: string | null }, { workflowid_formatted?: string }>;
}
interface RoutingRule_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_entitylogicalname: string;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  routingruleid: XQW.Guid;
  routingruleidunique: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: routingrule_statecode;
  statuscode: routingrule_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
  workflowid_guid: XQW.Guid;
}
interface RoutingRule_Expand {
  createdby: WebExpand<RoutingRule_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<RoutingRule_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<RoutingRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<RoutingRule_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<RoutingRule_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  ownerid: WebExpand<RoutingRule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<RoutingRule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<RoutingRule_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<RoutingRule_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  routingrule_Annotation: WebExpand<RoutingRule_Expand, Annotation_Select, Annotation_Filter, { routingrule_Annotation: Annotation_Result[] }>;
  routingrule_AsyncOperations: WebExpand<RoutingRule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { routingrule_AsyncOperations: AsyncOperation_Result[] }>;
  routingrule_BulkDeleteFailures: WebExpand<RoutingRule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { routingrule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  routingrule_ProcessSessions: WebExpand<RoutingRule_Expand, ProcessSession_Select, ProcessSession_Filter, { routingrule_ProcessSessions: ProcessSession_Result[] }>;
  routingrule_entries: WebExpand<RoutingRule_Expand, RoutingRuleItem_Select, RoutingRuleItem_Filter, { routingrule_entries: RoutingRuleItem_Result[] }>;
  routingrule_userentityinstancedatas: WebExpand<RoutingRule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { routingrule_userentityinstancedatas: UserEntityInstanceData_Result[] }>;
  transactioncurrencyid: WebExpand<RoutingRule_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowid: WebExpand<RoutingRule_Expand, Workflow_Select, Workflow_Filter, { workflowid: Workflow_Result }>;
}
interface RoutingRule_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  workflowid_formatted?: string;
}
interface RoutingRule_Result extends RoutingRule_Base, RoutingRule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
  workflowid_guid: string | null;
}
interface RoutingRule_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  workflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface RoutingRule_RelatedMany {
  routingrule_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  routingrule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  routingrule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  routingrule_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  routingrule_entries: WebMappingRetrieve<RoutingRuleItem_Select,RoutingRuleItem_Expand,RoutingRuleItem_Filter,RoutingRuleItem_Fixed,RoutingRuleItem_Result,RoutingRuleItem_FormattedResult>;
  routingrule_userentityinstancedatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  routingrules: WebMappingRetrieve<RoutingRule_Select,RoutingRule_Expand,RoutingRule_Filter,RoutingRule_Fixed,RoutingRule_Result,RoutingRule_FormattedResult>;
}
interface WebEntitiesRelated {
  routingrules: WebMappingRelated<RoutingRule_RelatedOne,RoutingRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  routingrules: WebMappingCUDA<RoutingRule_Create,RoutingRule_Update,RoutingRule_Select>;
}
