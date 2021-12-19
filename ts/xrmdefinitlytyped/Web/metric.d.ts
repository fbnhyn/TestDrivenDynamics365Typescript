interface Metric_Base extends WebEntity {
  amountdatatype?: metric_goaltype | null;
  createdon?: Date | null;
  description?: string | null;
  importsequencenumber?: number | null;
  isamount?: boolean | null;
  isstretchtracked?: boolean | null;
  metricid?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: metric_statecode | null;
  statuscode?: metric_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface Metric_Relationships {
  Metric_SyncErrors?: SyncError_Result[] | null;
  metric_AsyncOperations?: AsyncOperation_Result[] | null;
  metric_ProcessSessions?: ProcessSession_Result[] | null;
  metric_goal?: Goal_Result[] | null;
  metric_rollupfield?: RollupField_Result[] | null;
  msdyn_metric_msdyn_forecastdefinition_metricid?: msdyn_forecastdefinition_Result[] | null;
  userentityinstancedata_metric?: UserEntityInstanceData_Result[] | null;
}
interface Metric extends Metric_Base, Metric_Relationships {
}
interface Metric_Create extends Metric {
}
interface Metric_Update extends Metric {
}
interface Metric_Select {
  amountdatatype: WebAttribute<Metric_Select, { amountdatatype: metric_goaltype | null }, { amountdatatype_formatted?: string }>;
  createdby_guid: WebAttribute<Metric_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<Metric_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Metric_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<Metric_Select, { description: string | null }, {  }>;
  importsequencenumber: WebAttribute<Metric_Select, { importsequencenumber: number | null }, {  }>;
  isamount: WebAttribute<Metric_Select, { isamount: boolean | null }, {  }>;
  isstretchtracked: WebAttribute<Metric_Select, { isstretchtracked: boolean | null }, {  }>;
  metricid: WebAttribute<Metric_Select, { metricid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<Metric_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Metric_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Metric_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<Metric_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<Metric_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<Metric_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<Metric_Select, { statecode: metric_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Metric_Select, { statuscode: metric_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<Metric_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<Metric_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<Metric_Select, { versionnumber: number | null }, {  }>;
}
interface Metric_Filter {
  amountdatatype: metric_goaltype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  importsequencenumber: number;
  isamount: boolean;
  isstretchtracked: boolean;
  metricid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: metric_statecode;
  statuscode: metric_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface Metric_Expand {
  Metric_SyncErrors: WebExpand<Metric_Expand, SyncError_Select, SyncError_Filter, { Metric_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<Metric_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Metric_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  metric_AsyncOperations: WebExpand<Metric_Expand, AsyncOperation_Select, AsyncOperation_Filter, { metric_AsyncOperations: AsyncOperation_Result[] }>;
  metric_ProcessSessions: WebExpand<Metric_Expand, ProcessSession_Select, ProcessSession_Filter, { metric_ProcessSessions: ProcessSession_Result[] }>;
  metric_goal: WebExpand<Metric_Expand, Goal_Select, Goal_Filter, { metric_goal: Goal_Result[] }>;
  metric_rollupfield: WebExpand<Metric_Expand, RollupField_Select, RollupField_Filter, { metric_rollupfield: RollupField_Result[] }>;
  modifiedby: WebExpand<Metric_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<Metric_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_metric_msdyn_forecastdefinition_metricid: WebExpand<Metric_Expand, msdyn_forecastdefinition_Select, msdyn_forecastdefinition_Filter, { msdyn_metric_msdyn_forecastdefinition_metricid: msdyn_forecastdefinition_Result[] }>;
  organizationid: WebExpand<Metric_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_metric: WebExpand<Metric_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_metric: UserEntityInstanceData_Result[] }>;
}
interface Metric_FormattedResult {
  amountdatatype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface Metric_Result extends Metric_Base, Metric_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface Metric_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface Metric_RelatedMany {
  Metric_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  metric_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  metric_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  metric_goal: WebMappingRetrieve<Goal_Select,Goal_Expand,Goal_Filter,Goal_Fixed,Goal_Result,Goal_FormattedResult>;
  metric_rollupfield: WebMappingRetrieve<RollupField_Select,RollupField_Expand,RollupField_Filter,RollupField_Fixed,RollupField_Result,RollupField_FormattedResult>;
  msdyn_metric_msdyn_forecastdefinition_metricid: WebMappingRetrieve<msdyn_forecastdefinition_Select,msdyn_forecastdefinition_Expand,msdyn_forecastdefinition_Filter,msdyn_forecastdefinition_Fixed,msdyn_forecastdefinition_Result,msdyn_forecastdefinition_FormattedResult>;
  userentityinstancedata_metric: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  metrics: WebMappingRetrieve<Metric_Select,Metric_Expand,Metric_Filter,Metric_Fixed,Metric_Result,Metric_FormattedResult>;
}
interface WebEntitiesRelated {
  metrics: WebMappingRelated<Metric_RelatedOne,Metric_RelatedMany>;
}
interface WebEntitiesCUDA {
  metrics: WebMappingCUDA<Metric_Create,Metric_Update,Metric_Select>;
}
