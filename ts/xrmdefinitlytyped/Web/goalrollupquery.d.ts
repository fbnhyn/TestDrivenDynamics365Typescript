interface GoalRollupQuery_Base extends WebEntity {
  createdon?: Date | null;
  fetchxml?: string | null;
  goalrollupqueryid?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  queryentitytype?: string | null;
  statecode?: goalrollupquery_statecode | null;
  statuscode?: goalrollupquery_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface GoalRollupQuery_Relationships {
  GoalRollupQuery_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  GoalRollupQuery_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  GoalRollupQuery_SyncErrors?: SyncError_Result[] | null;
  goal_rollupquery_actualdecimal?: Goal_Result[] | null;
  goal_rollupquery_actualmoney?: Goal_Result[] | null;
  goal_rollupquery_customdecimal?: Goal_Result[] | null;
  goal_rollupquery_customint?: Goal_Result[] | null;
  goal_rollupquery_custommoney?: Goal_Result[] | null;
  goal_rollupquery_inprogressdecimal?: Goal_Result[] | null;
  goal_rollupquery_inprogressint?: Goal_Result[] | null;
  goal_rollupquery_inprogressmoney?: Goal_Result[] | null;
  goalrollupquery_AsyncOperations?: AsyncOperation_Result[] | null;
  goalrollupquery_ProcessSessions?: ProcessSession_Result[] | null;
  goalrollupquery_actualint?: Goal_Result[] | null;
  msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery?: msdyn_forecastdefinition_Result[] | null;
  userentityinstancedata_goalrollupquery?: UserEntityInstanceData_Result[] | null;
}
interface GoalRollupQuery extends GoalRollupQuery_Base, GoalRollupQuery_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface GoalRollupQuery_Create extends GoalRollupQuery {
}
interface GoalRollupQuery_Update extends GoalRollupQuery {
}
interface GoalRollupQuery_Select {
  createdby_guid: WebAttribute<GoalRollupQuery_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<GoalRollupQuery_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<GoalRollupQuery_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  fetchxml: WebAttribute<GoalRollupQuery_Select, { fetchxml: string | null }, {  }>;
  goalrollupqueryid: WebAttribute<GoalRollupQuery_Select, { goalrollupqueryid: string | null }, {  }>;
  importsequencenumber: WebAttribute<GoalRollupQuery_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<GoalRollupQuery_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<GoalRollupQuery_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<GoalRollupQuery_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<GoalRollupQuery_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<GoalRollupQuery_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<GoalRollupQuery_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<GoalRollupQuery_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<GoalRollupQuery_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<GoalRollupQuery_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  queryentitytype: WebAttribute<GoalRollupQuery_Select, { queryentitytype: string | null }, {  }>;
  statecode: WebAttribute<GoalRollupQuery_Select, { statecode: goalrollupquery_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<GoalRollupQuery_Select, { statuscode: goalrollupquery_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<GoalRollupQuery_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<GoalRollupQuery_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<GoalRollupQuery_Select, { versionnumber: number | null }, {  }>;
}
interface GoalRollupQuery_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  fetchxml: string;
  goalrollupqueryid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  queryentitytype: string;
  statecode: goalrollupquery_statecode;
  statuscode: goalrollupquery_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface GoalRollupQuery_Expand {
  GoalRollupQuery_DuplicateBaseRecord: WebExpand<GoalRollupQuery_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { GoalRollupQuery_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  GoalRollupQuery_DuplicateMatchingRecord: WebExpand<GoalRollupQuery_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { GoalRollupQuery_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  GoalRollupQuery_SyncErrors: WebExpand<GoalRollupQuery_Expand, SyncError_Select, SyncError_Filter, { GoalRollupQuery_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<GoalRollupQuery_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<GoalRollupQuery_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  goal_rollupquery_actualdecimal: WebExpand<GoalRollupQuery_Expand, Goal_Select, Goal_Filter, { goal_rollupquery_actualdecimal: Goal_Result[] }>;
  goal_rollupquery_actualmoney: WebExpand<GoalRollupQuery_Expand, Goal_Select, Goal_Filter, { goal_rollupquery_actualmoney: Goal_Result[] }>;
  goal_rollupquery_customdecimal: WebExpand<GoalRollupQuery_Expand, Goal_Select, Goal_Filter, { goal_rollupquery_customdecimal: Goal_Result[] }>;
  goal_rollupquery_customint: WebExpand<GoalRollupQuery_Expand, Goal_Select, Goal_Filter, { goal_rollupquery_customint: Goal_Result[] }>;
  goal_rollupquery_custommoney: WebExpand<GoalRollupQuery_Expand, Goal_Select, Goal_Filter, { goal_rollupquery_custommoney: Goal_Result[] }>;
  goal_rollupquery_inprogressdecimal: WebExpand<GoalRollupQuery_Expand, Goal_Select, Goal_Filter, { goal_rollupquery_inprogressdecimal: Goal_Result[] }>;
  goal_rollupquery_inprogressint: WebExpand<GoalRollupQuery_Expand, Goal_Select, Goal_Filter, { goal_rollupquery_inprogressint: Goal_Result[] }>;
  goal_rollupquery_inprogressmoney: WebExpand<GoalRollupQuery_Expand, Goal_Select, Goal_Filter, { goal_rollupquery_inprogressmoney: Goal_Result[] }>;
  goalrollupquery_AsyncOperations: WebExpand<GoalRollupQuery_Expand, AsyncOperation_Select, AsyncOperation_Filter, { goalrollupquery_AsyncOperations: AsyncOperation_Result[] }>;
  goalrollupquery_ProcessSessions: WebExpand<GoalRollupQuery_Expand, ProcessSession_Select, ProcessSession_Filter, { goalrollupquery_ProcessSessions: ProcessSession_Result[] }>;
  goalrollupquery_actualint: WebExpand<GoalRollupQuery_Expand, Goal_Select, Goal_Filter, { goalrollupquery_actualint: Goal_Result[] }>;
  modifiedby: WebExpand<GoalRollupQuery_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<GoalRollupQuery_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery: WebExpand<GoalRollupQuery_Expand, msdyn_forecastdefinition_Select, msdyn_forecastdefinition_Filter, { msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery: msdyn_forecastdefinition_Result[] }>;
  ownerid: WebExpand<GoalRollupQuery_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<GoalRollupQuery_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<GoalRollupQuery_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  userentityinstancedata_goalrollupquery: WebExpand<GoalRollupQuery_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_goalrollupquery: UserEntityInstanceData_Result[] }>;
}
interface GoalRollupQuery_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface GoalRollupQuery_Result extends GoalRollupQuery_Base, GoalRollupQuery_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface GoalRollupQuery_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
}
interface GoalRollupQuery_RelatedMany {
  GoalRollupQuery_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  GoalRollupQuery_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  GoalRollupQuery_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  goal_rollupquery_actualdecimal: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  goal_rollupquery_actualmoney: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  goal_rollupquery_customdecimal: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  goal_rollupquery_customint: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  goal_rollupquery_custommoney: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  goal_rollupquery_inprogressdecimal: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  goal_rollupquery_inprogressint: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  goal_rollupquery_inprogressmoney: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  goalrollupquery_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  goalrollupquery_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  goalrollupquery_actualint: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery: WebMappingRetrieve<msdyn_forecastdefinition_Select,msdyn_forecastdefinition_Expand,msdyn_forecastdefinition_Filter,msdyn_forecastdefinition_Fixed,msdyn_forecastdefinition_Result,msdyn_forecastdefinition_FormattedResult>;
  userentityinstancedata_goalrollupquery: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  goalrollupqueries: WebMappingRetrieve<GoalRollupQuery_Select,GoalRollupQuery_Expand,GoalRollupQuery_Filter,GoalRollupQuery_Fixed,GoalRollupQuery_Result,GoalRollupQuery_FormattedResult>;
}
interface WebEntitiesRelated {
  goalrollupqueries: WebMappingRelated<GoalRollupQuery_RelatedOne,GoalRollupQuery_RelatedMany>;
}
interface WebEntitiesCUDA {
  goalrollupqueries: WebMappingCUDA<GoalRollupQuery_Create,GoalRollupQuery_Update,GoalRollupQuery_Select>;
}
