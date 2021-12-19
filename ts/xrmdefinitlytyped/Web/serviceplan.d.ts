interface ServicePlan_Base extends WebEntity {
  accessmode?: serviceplan_accessmode | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  displayname?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  moreinfourl?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  serviceplanid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ServicePlan_Relationships {
  serviceplan_AsyncOperations?: AsyncOperation_Result[] | null;
  serviceplan_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  serviceplan_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  serviceplan_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  serviceplan_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  serviceplan_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  serviceplan_ProcessSession?: ProcessSession_Result[] | null;
  serviceplan_SyncErrors?: SyncError_Result[] | null;
  serviceplan_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  serviceplan_appmodule_association?: AppModule_Result[] | null;
  serviceplan_serviceplanmapping?: ServicePlanMapping_Result[] | null;
}
interface ServicePlan extends ServicePlan_Base, ServicePlan_Relationships {
}
interface ServicePlan_Create extends ServicePlan {
}
interface ServicePlan_Update extends ServicePlan {
}
interface ServicePlan_Select {
  accessmode: WebAttribute<ServicePlan_Select, { accessmode: serviceplan_accessmode | null }, { accessmode_formatted?: string }>;
  componentidunique: WebAttribute<ServicePlan_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<ServicePlan_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ServicePlan_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ServicePlan_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ServicePlan_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  displayname: WebAttribute<ServicePlan_Select, { displayname: string | null }, {  }>;
  importsequencenumber: WebAttribute<ServicePlan_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<ServicePlan_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<ServicePlan_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ServicePlan_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ServicePlan_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ServicePlan_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  moreinfourl: WebAttribute<ServicePlan_Select, { moreinfourl: string | null }, {  }>;
  name: WebAttribute<ServicePlan_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<ServicePlan_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<ServicePlan_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  serviceplanid: WebAttribute<ServicePlan_Select, { serviceplanid: string | null }, {  }>;
  solutionid: WebAttribute<ServicePlan_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ServicePlan_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ServicePlan_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<ServicePlan_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ServicePlan_Select, { versionnumber: number | null }, {  }>;
}
interface ServicePlan_Filter {
  accessmode: serviceplan_accessmode;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  displayname: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  moreinfourl: string;
  name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  serviceplanid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ServicePlan_Expand {
  createdby: WebExpand<ServicePlan_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ServicePlan_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ServicePlan_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ServicePlan_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  serviceplan_AsyncOperations: WebExpand<ServicePlan_Expand, AsyncOperation_Select, AsyncOperation_Filter, { serviceplan_AsyncOperations: AsyncOperation_Result[] }>;
  serviceplan_BulkDeleteFailures: WebExpand<ServicePlan_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { serviceplan_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  serviceplan_DuplicateBaseRecord: WebExpand<ServicePlan_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { serviceplan_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  serviceplan_DuplicateMatchingRecord: WebExpand<ServicePlan_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { serviceplan_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  serviceplan_MailboxTrackingFolders: WebExpand<ServicePlan_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { serviceplan_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  serviceplan_PrincipalObjectAttributeAccesses: WebExpand<ServicePlan_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { serviceplan_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  serviceplan_ProcessSession: WebExpand<ServicePlan_Expand, ProcessSession_Select, ProcessSession_Filter, { serviceplan_ProcessSession: ProcessSession_Result[] }>;
  serviceplan_SyncErrors: WebExpand<ServicePlan_Expand, SyncError_Select, SyncError_Filter, { serviceplan_SyncErrors: SyncError_Result[] }>;
  serviceplan_UserEntityInstanceDatas: WebExpand<ServicePlan_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { serviceplan_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  serviceplan_appmodule_association: WebExpand<ServicePlan_Expand, AppModule_Select, AppModule_Filter, { serviceplan_appmodule_association: AppModule_Result[] }>;
  serviceplan_serviceplanmapping: WebExpand<ServicePlan_Expand, ServicePlanMapping_Select, ServicePlanMapping_Filter, { serviceplan_serviceplanmapping: ServicePlanMapping_Result[] }>;
}
interface ServicePlan_FormattedResult {
  accessmode_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
}
interface ServicePlan_Result extends ServicePlan_Base, ServicePlan_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface ServicePlan_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ServicePlan_RelatedMany {
  serviceplan_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  serviceplan_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  serviceplan_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  serviceplan_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  serviceplan_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  serviceplan_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  serviceplan_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  serviceplan_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  serviceplan_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  serviceplan_appmodule_association: WebMappingRetrieve<AppModule_Select,AppModule_Expand,AppModule_Filter,AppModule_Fixed,AppModule_Result,AppModule_FormattedResult>;
  serviceplan_serviceplanmapping: WebMappingRetrieve<ServicePlanMapping_Select,ServicePlanMapping_Expand,ServicePlanMapping_Filter,ServicePlanMapping_Fixed,ServicePlanMapping_Result,ServicePlanMapping_FormattedResult>;
}
interface WebEntitiesRetrieve {
  serviceplans: WebMappingRetrieve<ServicePlan_Select,ServicePlan_Expand,ServicePlan_Filter,ServicePlan_Fixed,ServicePlan_Result,ServicePlan_FormattedResult>;
}
interface WebEntitiesRelated {
  serviceplans: WebMappingRelated<ServicePlan_RelatedOne,ServicePlan_RelatedMany>;
}
interface WebEntitiesCUDA {
  serviceplans: WebMappingCUDA<ServicePlan_Create,ServicePlan_Update,ServicePlan_Select>;
}
