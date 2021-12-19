interface ServicePlanMapping_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  featurecontrol?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  serviceplanmappingid?: string | null;
  solutionid?: string | null;
  statecode?: serviceplanmapping_statecode | null;
  statuscode?: serviceplanmapping_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ServicePlanMapping_Relationships {
  Entity?: Entity_Result | null;
  SdkMessage?: SdkMessage_Result | null;
  ServicePlan?: ServicePlan_Result | null;
  serviceplanmapping_AsyncOperations?: AsyncOperation_Result[] | null;
  serviceplanmapping_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  serviceplanmapping_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  serviceplanmapping_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  serviceplanmapping_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  serviceplanmapping_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  serviceplanmapping_ProcessSession?: ProcessSession_Result[] | null;
  serviceplanmapping_SyncErrors?: SyncError_Result[] | null;
  serviceplanmapping_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface ServicePlanMapping extends ServicePlanMapping_Base, ServicePlanMapping_Relationships {
  Entity_bind$entities?: string | null;
  SdkMessage_bind$sdkmessages?: string | null;
  ServicePlan_bind$serviceplans?: string | null;
}
interface ServicePlanMapping_Create extends ServicePlanMapping {
}
interface ServicePlanMapping_Update extends ServicePlanMapping {
}
interface ServicePlanMapping_Select {
  componentidunique: WebAttribute<ServicePlanMapping_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<ServicePlanMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ServicePlanMapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ServicePlanMapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ServicePlanMapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entity_guid: WebAttribute<ServicePlanMapping_Select, { entity_guid: string | null }, { entity_formatted?: string }>;
  featurecontrol: WebAttribute<ServicePlanMapping_Select, { featurecontrol: string | null }, {  }>;
  importsequencenumber: WebAttribute<ServicePlanMapping_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<ServicePlanMapping_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ServicePlanMapping_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ServicePlanMapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ServicePlanMapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ServicePlanMapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ServicePlanMapping_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ServicePlanMapping_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<ServicePlanMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  sdkmessage_guid: WebAttribute<ServicePlanMapping_Select, { sdkmessage_guid: string | null }, { sdkmessage_formatted?: string }>;
  serviceplan_guid: WebAttribute<ServicePlanMapping_Select, { serviceplan_guid: string | null }, { serviceplan_formatted?: string }>;
  serviceplanmappingid: WebAttribute<ServicePlanMapping_Select, { serviceplanmappingid: string | null }, {  }>;
  solutionid: WebAttribute<ServicePlanMapping_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<ServicePlanMapping_Select, { statecode: serviceplanmapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ServicePlanMapping_Select, { statuscode: serviceplanmapping_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ServicePlanMapping_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ServicePlanMapping_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ServicePlanMapping_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ServicePlanMapping_Select, { versionnumber: number | null }, {  }>;
}
interface ServicePlanMapping_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entity_guid: XQW.Guid;
  featurecontrol: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  sdkmessage_guid: XQW.Guid;
  serviceplan_guid: XQW.Guid;
  serviceplanmappingid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: serviceplanmapping_statecode;
  statuscode: serviceplanmapping_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ServicePlanMapping_Expand {
  Entity: WebExpand<ServicePlanMapping_Expand, Entity_Select, Entity_Filter, { Entity: Entity_Result }>;
  SdkMessage: WebExpand<ServicePlanMapping_Expand, SdkMessage_Select, SdkMessage_Filter, { SdkMessage: SdkMessage_Result }>;
  ServicePlan: WebExpand<ServicePlanMapping_Expand, ServicePlan_Select, ServicePlan_Filter, { ServicePlan: ServicePlan_Result }>;
  createdby: WebExpand<ServicePlanMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ServicePlanMapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ServicePlanMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ServicePlanMapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  serviceplanmapping_AsyncOperations: WebExpand<ServicePlanMapping_Expand, AsyncOperation_Select, AsyncOperation_Filter, { serviceplanmapping_AsyncOperations: AsyncOperation_Result[] }>;
  serviceplanmapping_BulkDeleteFailures: WebExpand<ServicePlanMapping_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { serviceplanmapping_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  serviceplanmapping_DuplicateBaseRecord: WebExpand<ServicePlanMapping_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { serviceplanmapping_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  serviceplanmapping_DuplicateMatchingRecord: WebExpand<ServicePlanMapping_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { serviceplanmapping_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  serviceplanmapping_MailboxTrackingFolders: WebExpand<ServicePlanMapping_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { serviceplanmapping_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  serviceplanmapping_PrincipalObjectAttributeAccesses: WebExpand<ServicePlanMapping_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { serviceplanmapping_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  serviceplanmapping_ProcessSession: WebExpand<ServicePlanMapping_Expand, ProcessSession_Select, ProcessSession_Filter, { serviceplanmapping_ProcessSession: ProcessSession_Result[] }>;
  serviceplanmapping_SyncErrors: WebExpand<ServicePlanMapping_Expand, SyncError_Select, SyncError_Filter, { serviceplanmapping_SyncErrors: SyncError_Result[] }>;
  serviceplanmapping_UserEntityInstanceDatas: WebExpand<ServicePlanMapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { serviceplanmapping_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface ServicePlanMapping_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  entity_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  sdkmessage_formatted?: string;
  serviceplan_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ServicePlanMapping_Result extends ServicePlanMapping_Base, ServicePlanMapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  entity_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  sdkmessage_guid: string | null;
  serviceplan_guid: string | null;
}
interface ServicePlanMapping_RelatedOne {
  Entity: WebMappingRetrieve<Entity_Select,Entity_Expand,Entity_Filter,Entity_Fixed,Entity_Result,Entity_FormattedResult>;
  SdkMessage: WebMappingRetrieve<SdkMessage_Select,SdkMessage_Expand,SdkMessage_Filter,SdkMessage_Fixed,SdkMessage_Result,SdkMessage_FormattedResult>;
  ServicePlan: WebMappingRetrieve<ServicePlan_Select,ServicePlan_Expand,ServicePlan_Filter,ServicePlan_Fixed,ServicePlan_Result,ServicePlan_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ServicePlanMapping_RelatedMany {
  serviceplanmapping_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  serviceplanmapping_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  serviceplanmapping_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  serviceplanmapping_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  serviceplanmapping_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  serviceplanmapping_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  serviceplanmapping_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  serviceplanmapping_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  serviceplanmapping_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  serviceplanmappings: WebMappingRetrieve<ServicePlanMapping_Select,ServicePlanMapping_Expand,ServicePlanMapping_Filter,ServicePlanMapping_Fixed,ServicePlanMapping_Result,ServicePlanMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  serviceplanmappings: WebMappingRelated<ServicePlanMapping_RelatedOne,ServicePlanMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  serviceplanmappings: WebMappingCUDA<ServicePlanMapping_Create,ServicePlanMapping_Update,ServicePlanMapping_Select>;
}
