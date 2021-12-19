interface ChannelAccessProfileRule_Base extends WebEntity {
  channelaccessprofileruleid?: string | null;
  channelaccessprofileruleidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: profilerule_statecode | null;
  statuscode?: profilerule_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ChannelAccessProfileRule_Relationships {
  ChannelAccessProfileRule_SyncErrors?: SyncError_Result[] | null;
  channelaccessprofileruleid_systemuser?: SystemUser_Result | null;
  profilerule_Annotations?: Annotation_Result[] | null;
  profilerule_AsyncOperations?: AsyncOperation_Result[] | null;
  profilerule_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  profilerule_ProcessSession?: ProcessSession_Result[] | null;
  profilerule_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  profilerule_connections1?: Connection_Result[] | null;
  profilerule_connections2?: Connection_Result[] | null;
  profilerule_entries?: ChannelAccessProfileRuleItem_Result[] | null;
  profileruleid2?: SystemUser_Result | null;
  profileruleid3?: SystemUser_Result | null;
  profileruleid4?: SystemUser_Result | null;
  profileruleid5?: BusinessUnit_Result | null;
  teamid?: Team_Result | null;
  userid?: SystemUser_Result | null;
}
interface ChannelAccessProfileRule extends ChannelAccessProfileRule_Base, ChannelAccessProfileRule_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
  workflowid_bind$workflows?: string | null;
}
interface ChannelAccessProfileRule_Create extends ChannelAccessProfileRule {
}
interface ChannelAccessProfileRule_Update extends ChannelAccessProfileRule {
}
interface ChannelAccessProfileRule_Select {
  channelaccessprofileruleid: WebAttribute<ChannelAccessProfileRule_Select, { channelaccessprofileruleid: string | null }, {  }>;
  channelaccessprofileruleidunique: WebAttribute<ChannelAccessProfileRule_Select, { channelaccessprofileruleidunique: string | null }, {  }>;
  componentstate: WebAttribute<ChannelAccessProfileRule_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ChannelAccessProfileRule_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ChannelAccessProfileRule_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ChannelAccessProfileRule_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ChannelAccessProfileRule_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<ChannelAccessProfileRule_Select, { exchangerate: number | null }, {  }>;
  introducedversion: WebAttribute<ChannelAccessProfileRule_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<ChannelAccessProfileRule_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ChannelAccessProfileRule_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ChannelAccessProfileRule_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ChannelAccessProfileRule_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ChannelAccessProfileRule_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<ChannelAccessProfileRule_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ChannelAccessProfileRule_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ChannelAccessProfileRule_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ChannelAccessProfileRule_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ChannelAccessProfileRule_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<ChannelAccessProfileRule_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<ChannelAccessProfileRule_Select, { statecode: profilerule_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ChannelAccessProfileRule_Select, { statuscode: profilerule_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ChannelAccessProfileRule_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ChannelAccessProfileRule_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ChannelAccessProfileRule_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ChannelAccessProfileRule_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ChannelAccessProfileRule_Select, { versionnumber: number | null }, {  }>;
  workflowid_guid: WebAttribute<ChannelAccessProfileRule_Select, { workflowid_guid: string | null }, { workflowid_formatted?: string }>;
}
interface ChannelAccessProfileRule_Filter {
  channelaccessprofileruleid: XQW.Guid;
  channelaccessprofileruleidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  introducedversion: string;
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
  solutionid: XQW.Guid;
  statecode: profilerule_statecode;
  statuscode: profilerule_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
  workflowid_guid: XQW.Guid;
}
interface ChannelAccessProfileRule_Expand {
  ChannelAccessProfileRule_SyncErrors: WebExpand<ChannelAccessProfileRule_Expand, SyncError_Select, SyncError_Filter, { ChannelAccessProfileRule_SyncErrors: SyncError_Result[] }>;
  channelaccessprofileruleid_systemuser: WebExpand<ChannelAccessProfileRule_Expand, SystemUser_Select, SystemUser_Filter, { channelaccessprofileruleid_systemuser: SystemUser_Result }>;
  ownerid: WebExpand<ChannelAccessProfileRule_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  profilerule_Annotations: WebExpand<ChannelAccessProfileRule_Expand, Annotation_Select, Annotation_Filter, { profilerule_Annotations: Annotation_Result[] }>;
  profilerule_AsyncOperations: WebExpand<ChannelAccessProfileRule_Expand, AsyncOperation_Select, AsyncOperation_Filter, { profilerule_AsyncOperations: AsyncOperation_Result[] }>;
  profilerule_BulkDeleteFailures: WebExpand<ChannelAccessProfileRule_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { profilerule_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  profilerule_ProcessSession: WebExpand<ChannelAccessProfileRule_Expand, ProcessSession_Select, ProcessSession_Filter, { profilerule_ProcessSession: ProcessSession_Result[] }>;
  profilerule_UserEntityInstanceDatas: WebExpand<ChannelAccessProfileRule_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { profilerule_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  profilerule_connections1: WebExpand<ChannelAccessProfileRule_Expand, Connection_Select, Connection_Filter, { profilerule_connections1: Connection_Result[] }>;
  profilerule_connections2: WebExpand<ChannelAccessProfileRule_Expand, Connection_Select, Connection_Filter, { profilerule_connections2: Connection_Result[] }>;
  profilerule_entries: WebExpand<ChannelAccessProfileRule_Expand, ChannelAccessProfileRuleItem_Select, ChannelAccessProfileRuleItem_Filter, { profilerule_entries: ChannelAccessProfileRuleItem_Result[] }>;
  profileruleid2: WebExpand<ChannelAccessProfileRule_Expand, SystemUser_Select, SystemUser_Filter, { profileruleid2: SystemUser_Result }>;
  profileruleid3: WebExpand<ChannelAccessProfileRule_Expand, SystemUser_Select, SystemUser_Filter, { profileruleid3: SystemUser_Result }>;
  profileruleid4: WebExpand<ChannelAccessProfileRule_Expand, SystemUser_Select, SystemUser_Filter, { profileruleid4: SystemUser_Result }>;
  profileruleid5: WebExpand<ChannelAccessProfileRule_Expand, BusinessUnit_Select, BusinessUnit_Filter, { profileruleid5: BusinessUnit_Result }>;
  teamid: WebExpand<ChannelAccessProfileRule_Expand, Team_Select, Team_Filter, { teamid: Team_Result }>;
  transactioncurrencyid: WebExpand<ChannelAccessProfileRule_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userid: WebExpand<ChannelAccessProfileRule_Expand, SystemUser_Select, SystemUser_Filter, { userid: SystemUser_Result }>;
  workflowid: WebExpand<ChannelAccessProfileRule_Expand, Workflow_Select, Workflow_Filter, { workflowid: Workflow_Result }>;
}
interface ChannelAccessProfileRule_FormattedResult {
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
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  workflowid_formatted?: string;
}
interface ChannelAccessProfileRule_Result extends ChannelAccessProfileRule_Base, ChannelAccessProfileRule_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
  workflowid_guid: string | null;
}
interface ChannelAccessProfileRule_RelatedOne {
  channelaccessprofileruleid_systemuser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  profileruleid2: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  profileruleid3: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  profileruleid4: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  profileruleid5: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  teamid: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  userid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  workflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface ChannelAccessProfileRule_RelatedMany {
  ChannelAccessProfileRule_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  profilerule_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  profilerule_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  profilerule_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  profilerule_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  profilerule_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  profilerule_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  profilerule_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  profilerule_entries: WebMappingRetrieve<ChannelAccessProfileRuleItem_Select,ChannelAccessProfileRuleItem_Expand,ChannelAccessProfileRuleItem_Filter,ChannelAccessProfileRuleItem_Fixed,ChannelAccessProfileRuleItem_Result,ChannelAccessProfileRuleItem_FormattedResult>;
}
interface WebEntitiesRetrieve {
  channelaccessprofilerules: WebMappingRetrieve<ChannelAccessProfileRule_Select,ChannelAccessProfileRule_Expand,ChannelAccessProfileRule_Filter,ChannelAccessProfileRule_Fixed,ChannelAccessProfileRule_Result,ChannelAccessProfileRule_FormattedResult>;
}
interface WebEntitiesRelated {
  channelaccessprofilerules: WebMappingRelated<ChannelAccessProfileRule_RelatedOne,ChannelAccessProfileRule_RelatedMany>;
}
interface WebEntitiesCUDA {
  channelaccessprofilerules: WebMappingCUDA<ChannelAccessProfileRule_Create,ChannelAccessProfileRule_Update,ChannelAccessProfileRule_Select>;
}
