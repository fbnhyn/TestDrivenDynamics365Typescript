interface msdyusd_scripttasktrigger_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyusd_name?: string | null;
  msdyusd_scripttasktriggerdata?: string | null;
  msdyusd_scripttasktriggerid?: string | null;
  msdyusd_scripttasktriggertype?: msdyusd_scripttasktrigger_msdyusd_scripttasktriggertype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyusd_scripttasktrigger_statecode | null;
  statuscode?: msdyusd_scripttasktrigger_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyusd_scripttasktrigger_Relationships {
  msdyusd_TriggerId?: msdyusd_task_Result | null;
  msdyusd_scripttasktrigger_Annotations?: Annotation_Result[] | null;
  msdyusd_scripttasktrigger_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyusd_scripttasktrigger_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyusd_scripttasktrigger_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyusd_scripttasktrigger_ProcessSession?: ProcessSession_Result[] | null;
  msdyusd_scripttasktrigger_SyncErrors?: SyncError_Result[] | null;
  msdyusd_scripttasktrigger_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyusd_scripttasktrigger extends msdyusd_scripttasktrigger_Base, msdyusd_scripttasktrigger_Relationships {
  msdyusd_TriggerId_bind$msdyusd_tasks?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyusd_scripttasktrigger_Create extends msdyusd_scripttasktrigger {
}
interface msdyusd_scripttasktrigger_Update extends msdyusd_scripttasktrigger {
}
interface msdyusd_scripttasktrigger_Select {
  createdby_guid: WebAttribute<msdyusd_scripttasktrigger_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyusd_scripttasktrigger_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyusd_scripttasktrigger_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyusd_scripttasktrigger_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyusd_scripttasktrigger_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyusd_scripttasktrigger_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyusd_scripttasktrigger_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyusd_name: WebAttribute<msdyusd_scripttasktrigger_Select, { msdyusd_name: string | null }, {  }>;
  msdyusd_scripttasktriggerdata: WebAttribute<msdyusd_scripttasktrigger_Select, { msdyusd_scripttasktriggerdata: string | null }, {  }>;
  msdyusd_scripttasktriggerid: WebAttribute<msdyusd_scripttasktrigger_Select, { msdyusd_scripttasktriggerid: string | null }, {  }>;
  msdyusd_scripttasktriggertype: WebAttribute<msdyusd_scripttasktrigger_Select, { msdyusd_scripttasktriggertype: msdyusd_scripttasktrigger_msdyusd_scripttasktriggertype | null }, { msdyusd_scripttasktriggertype_formatted?: string }>;
  msdyusd_triggerid_guid: WebAttribute<msdyusd_scripttasktrigger_Select, { msdyusd_triggerid_guid: string | null }, { msdyusd_triggerid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyusd_scripttasktrigger_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyusd_scripttasktrigger_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyusd_scripttasktrigger_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyusd_scripttasktrigger_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyusd_scripttasktrigger_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyusd_scripttasktrigger_Select, { statecode: msdyusd_scripttasktrigger_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyusd_scripttasktrigger_Select, { statuscode: msdyusd_scripttasktrigger_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyusd_scripttasktrigger_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyusd_scripttasktrigger_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyusd_scripttasktrigger_Select, { versionnumber: number | null }, {  }>;
}
interface msdyusd_scripttasktrigger_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyusd_name: string;
  msdyusd_scripttasktriggerdata: string;
  msdyusd_scripttasktriggerid: XQW.Guid;
  msdyusd_scripttasktriggertype: msdyusd_scripttasktrigger_msdyusd_scripttasktriggertype;
  msdyusd_triggerid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyusd_scripttasktrigger_statecode;
  statuscode: msdyusd_scripttasktrigger_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyusd_scripttasktrigger_Expand {
  createdby: WebExpand<msdyusd_scripttasktrigger_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyusd_scripttasktrigger_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyusd_scripttasktrigger_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyusd_scripttasktrigger_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyusd_TriggerId: WebExpand<msdyusd_scripttasktrigger_Expand, msdyusd_task_Select, msdyusd_task_Filter, { msdyusd_TriggerId: msdyusd_task_Result }>;
  msdyusd_scripttasktrigger_Annotations: WebExpand<msdyusd_scripttasktrigger_Expand, Annotation_Select, Annotation_Filter, { msdyusd_scripttasktrigger_Annotations: Annotation_Result[] }>;
  msdyusd_scripttasktrigger_AsyncOperations: WebExpand<msdyusd_scripttasktrigger_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyusd_scripttasktrigger_AsyncOperations: AsyncOperation_Result[] }>;
  msdyusd_scripttasktrigger_BulkDeleteFailures: WebExpand<msdyusd_scripttasktrigger_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyusd_scripttasktrigger_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyusd_scripttasktrigger_MailboxTrackingFolders: WebExpand<msdyusd_scripttasktrigger_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyusd_scripttasktrigger_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses: WebExpand<msdyusd_scripttasktrigger_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyusd_scripttasktrigger_ProcessSession: WebExpand<msdyusd_scripttasktrigger_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyusd_scripttasktrigger_ProcessSession: ProcessSession_Result[] }>;
  msdyusd_scripttasktrigger_SyncErrors: WebExpand<msdyusd_scripttasktrigger_Expand, SyncError_Select, SyncError_Filter, { msdyusd_scripttasktrigger_SyncErrors: SyncError_Result[] }>;
  msdyusd_scripttasktrigger_UserEntityInstanceDatas: WebExpand<msdyusd_scripttasktrigger_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyusd_scripttasktrigger_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyusd_scripttasktrigger_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyusd_scripttasktrigger_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyusd_scripttasktrigger_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyusd_scripttasktrigger_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyusd_scripttasktrigger_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyusd_scripttasktriggertype_formatted?: string;
  msdyusd_triggerid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyusd_scripttasktrigger_Result extends msdyusd_scripttasktrigger_Base, msdyusd_scripttasktrigger_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyusd_triggerid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyusd_scripttasktrigger_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyusd_TriggerId: WebMappingRetrieve<msdyusd_task_Select,msdyusd_task_Expand,msdyusd_task_Filter,msdyusd_task_Fixed,msdyusd_task_Result,msdyusd_task_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyusd_scripttasktrigger_RelatedMany {
  msdyusd_scripttasktrigger_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyusd_scripttasktrigger_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyusd_scripttasktrigger_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyusd_scripttasktrigger_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyusd_scripttasktrigger_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyusd_scripttasktrigger_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyusd_scripttasktrigger_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyusd_scripttasktrigger_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyusd_scripttasktriggers: WebMappingRetrieve<msdyusd_scripttasktrigger_Select,msdyusd_scripttasktrigger_Expand,msdyusd_scripttasktrigger_Filter,msdyusd_scripttasktrigger_Fixed,msdyusd_scripttasktrigger_Result,msdyusd_scripttasktrigger_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyusd_scripttasktriggers: WebMappingRelated<msdyusd_scripttasktrigger_RelatedOne,msdyusd_scripttasktrigger_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyusd_scripttasktriggers: WebMappingCUDA<msdyusd_scripttasktrigger_Create,msdyusd_scripttasktrigger_Update,msdyusd_scripttasktrigger_Select>;
}
