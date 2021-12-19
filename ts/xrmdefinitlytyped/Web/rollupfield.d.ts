interface RollupField_Base extends WebEntity {
  createdon?: Date | null;
  dateattribute?: string | null;
  entityfordateattribute?: string | null;
  goalattribute?: string | null;
  importsequencenumber?: number | null;
  isstateparententityattribute?: boolean | null;
  modifiedon?: Date | null;
  rollupfieldid?: string | null;
  sourceattribute?: string | null;
  sourceentity?: string | null;
  sourcestate?: number | null;
  sourcestatus?: number | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface RollupField_Relationships {
  RollupField_SyncErrors?: SyncError_Result[] | null;
  rollupfield_AsyncOperations?: AsyncOperation_Result[] | null;
  rollupfield_ProcessSessions?: ProcessSession_Result[] | null;
  userentityinstancedata_rollupfield?: UserEntityInstanceData_Result[] | null;
}
interface RollupField extends RollupField_Base, RollupField_Relationships {
}
interface RollupField_Create extends RollupField {
  metricid_bind$metrics?: string | null;
}
interface RollupField_Update extends RollupField {
}
interface RollupField_Select {
  createdby_guid: WebAttribute<RollupField_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<RollupField_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<RollupField_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  dateattribute: WebAttribute<RollupField_Select, { dateattribute: string | null }, {  }>;
  entityfordateattribute: WebAttribute<RollupField_Select, { entityfordateattribute: string | null }, {  }>;
  goalattribute: WebAttribute<RollupField_Select, { goalattribute: string | null }, {  }>;
  importsequencenumber: WebAttribute<RollupField_Select, { importsequencenumber: number | null }, {  }>;
  isstateparententityattribute: WebAttribute<RollupField_Select, { isstateparententityattribute: boolean | null }, {  }>;
  metricid_guid: WebAttribute<RollupField_Select, { metricid_guid: string | null }, { metricid_formatted?: string }>;
  modifiedby_guid: WebAttribute<RollupField_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<RollupField_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<RollupField_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<RollupField_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  rollupfieldid: WebAttribute<RollupField_Select, { rollupfieldid: string | null }, {  }>;
  sourceattribute: WebAttribute<RollupField_Select, { sourceattribute: string | null }, {  }>;
  sourceentity: WebAttribute<RollupField_Select, { sourceentity: string | null }, {  }>;
  sourcestate: WebAttribute<RollupField_Select, { sourcestate: number | null }, {  }>;
  sourcestatus: WebAttribute<RollupField_Select, { sourcestatus: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<RollupField_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<RollupField_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<RollupField_Select, { versionnumber: number | null }, {  }>;
}
interface RollupField_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  dateattribute: string;
  entityfordateattribute: string;
  goalattribute: string;
  importsequencenumber: number;
  isstateparententityattribute: boolean;
  metricid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  rollupfieldid: XQW.Guid;
  sourceattribute: string;
  sourceentity: string;
  sourcestate: number;
  sourcestatus: number;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface RollupField_Expand {
  RollupField_SyncErrors: WebExpand<RollupField_Expand, SyncError_Select, SyncError_Filter, { RollupField_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<RollupField_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<RollupField_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  metricid: WebExpand<RollupField_Expand, Metric_Select, Metric_Filter, { metricid: Metric_Result }>;
  modifiedby: WebExpand<RollupField_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<RollupField_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  rollupfield_AsyncOperations: WebExpand<RollupField_Expand, AsyncOperation_Select, AsyncOperation_Filter, { rollupfield_AsyncOperations: AsyncOperation_Result[] }>;
  rollupfield_ProcessSessions: WebExpand<RollupField_Expand, ProcessSession_Select, ProcessSession_Filter, { rollupfield_ProcessSessions: ProcessSession_Result[] }>;
  userentityinstancedata_rollupfield: WebExpand<RollupField_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_rollupfield: UserEntityInstanceData_Result[] }>;
}
interface RollupField_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  metricid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
}
interface RollupField_Result extends RollupField_Base, RollupField_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  metricid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface RollupField_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  metricid: WebMappingRetrieve<Metric_Select,Metric_Expand,Metric_Filter,Metric_Fixed,Metric_Result,Metric_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface RollupField_RelatedMany {
  RollupField_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  rollupfield_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  rollupfield_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  userentityinstancedata_rollupfield: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  rollupfields: WebMappingRetrieve<RollupField_Select,RollupField_Expand,RollupField_Filter,RollupField_Fixed,RollupField_Result,RollupField_FormattedResult>;
}
interface WebEntitiesRelated {
  rollupfields: WebMappingRelated<RollupField_RelatedOne,RollupField_RelatedMany>;
}
interface WebEntitiesCUDA {
  rollupfields: WebMappingCUDA<RollupField_Create,RollupField_Update,RollupField_Select>;
}
