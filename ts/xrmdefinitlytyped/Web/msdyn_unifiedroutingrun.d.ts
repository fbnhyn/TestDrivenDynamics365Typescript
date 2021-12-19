interface msdyn_unifiedroutingrun_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_endtime?: Date | null;
  msdyn_name?: string | null;
  msdyn_routingduration?: number | null;
  msdyn_routingdurationinseconds?: number | null;
  msdyn_routingstatus?: msdyn_msdyn_unifiedroutingrun_msdyn_routingstatus | null;
  msdyn_runnumber?: number | null;
  msdyn_starttime?: Date | null;
  msdyn_unifiedroutingrunid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_unifiedroutingrun_statecode | null;
  statuscode?: msdyn_unifiedroutingrun_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_unifiedroutingrun_Relationships {
  msdyn_targetobject_msdyn_ocliveworkitem?: msdyn_ocliveworkitem_Result | null;
  msdyn_targetobject_queueitem?: QueueItem_Result | null;
  msdyn_unifiedroutingrun_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_unifiedroutingrun_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_unifiedroutingrun_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_unifiedroutingrun_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_unifiedroutingrun_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_unifiedroutingrun_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_unifiedroutingrun_SyncErrors?: SyncError_Result[] | null;
  msdyn_unifiedroutingrun_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic?: msdyn_unifiedroutingdiagnostic_Result[] | null;
}
interface msdyn_unifiedroutingrun extends msdyn_unifiedroutingrun_Base, msdyn_unifiedroutingrun_Relationships {
  msdyn_assignedagent_bind$systemusers?: string | null;
  msdyn_liveworkitem_bind$msdyn_ocliveworkitems?: string | null;
  msdyn_queue_bind$queues?: string | null;
  msdyn_targetobject_msdyn_ocliveworkitem_bind$msdyn_ocliveworkitems?: string | null;
  msdyn_targetobject_queueitem_bind$queueitems?: string | null;
  msdyn_workstream_bind$msdyn_liveworkstreams?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_unifiedroutingrun_Create extends msdyn_unifiedroutingrun {
}
interface msdyn_unifiedroutingrun_Update extends msdyn_unifiedroutingrun {
}
interface msdyn_unifiedroutingrun_Select {
  createdby_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_unifiedroutingrun_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_unifiedroutingrun_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_unifiedroutingrun_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_assignedagent_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_assignedagent_guid: string | null }, { msdyn_assignedagent_formatted?: string }>;
  msdyn_endtime: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_liveworkitem_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_liveworkitem_guid: string | null }, { msdyn_liveworkitem_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_name: string | null }, {  }>;
  msdyn_queue_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_queue_guid: string | null }, { msdyn_queue_formatted?: string }>;
  msdyn_routingduration: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_routingduration: number | null }, {  }>;
  msdyn_routingdurationinseconds: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_routingdurationinseconds: number | null }, {  }>;
  msdyn_routingstatus: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_routingstatus: msdyn_msdyn_unifiedroutingrun_msdyn_routingstatus | null }, { msdyn_routingstatus_formatted?: string }>;
  msdyn_runnumber: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_runnumber: number | null }, {  }>;
  msdyn_starttime: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  msdyn_targetobject_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_targetobject_guid: string | null }, { msdyn_targetobject_formatted?: string }>;
  msdyn_unifiedroutingrunid: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_unifiedroutingrunid: string | null }, {  }>;
  msdyn_workstream_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { msdyn_workstream_guid: string | null }, { msdyn_workstream_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_unifiedroutingrun_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_unifiedroutingrun_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_unifiedroutingrun_Select, { statecode: msdyn_unifiedroutingrun_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_unifiedroutingrun_Select, { statuscode: msdyn_unifiedroutingrun_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_unifiedroutingrun_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_unifiedroutingrun_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_unifiedroutingrun_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_unifiedroutingrun_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_assignedagent_guid: XQW.Guid;
  msdyn_endtime: Date;
  msdyn_liveworkitem_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_queue_guid: XQW.Guid;
  msdyn_routingduration: number;
  msdyn_routingdurationinseconds: number;
  msdyn_routingstatus: msdyn_msdyn_unifiedroutingrun_msdyn_routingstatus;
  msdyn_runnumber: number;
  msdyn_starttime: Date;
  msdyn_targetobject_guid: XQW.Guid;
  msdyn_unifiedroutingrunid: XQW.Guid;
  msdyn_workstream_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_unifiedroutingrun_statecode;
  statuscode: msdyn_unifiedroutingrun_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_unifiedroutingrun_Expand {
  createdby: WebExpand<msdyn_unifiedroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_unifiedroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_unifiedroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_unifiedroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_assignedagent: WebExpand<msdyn_unifiedroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_assignedagent: SystemUser_Result }>;
  msdyn_liveworkitem: WebExpand<msdyn_unifiedroutingrun_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitem: msdyn_ocliveworkitem_Result }>;
  msdyn_queue: WebExpand<msdyn_unifiedroutingrun_Expand, Queue_Select, Queue_Filter, { msdyn_queue: Queue_Result }>;
  msdyn_targetobject_msdyn_ocliveworkitem: WebExpand<msdyn_unifiedroutingrun_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_targetobject_msdyn_ocliveworkitem: msdyn_ocliveworkitem_Result }>;
  msdyn_targetobject_queueitem: WebExpand<msdyn_unifiedroutingrun_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_targetobject_queueitem: QueueItem_Result }>;
  msdyn_unifiedroutingrun_AsyncOperations: WebExpand<msdyn_unifiedroutingrun_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_unifiedroutingrun_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_unifiedroutingrun_BulkDeleteFailures: WebExpand<msdyn_unifiedroutingrun_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_unifiedroutingrun_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_unifiedroutingrun_DuplicateBaseRecord: WebExpand<msdyn_unifiedroutingrun_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_unifiedroutingrun_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_unifiedroutingrun_DuplicateMatchingRecord: WebExpand<msdyn_unifiedroutingrun_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_unifiedroutingrun_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_unifiedroutingrun_MailboxTrackingFolders: WebExpand<msdyn_unifiedroutingrun_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_unifiedroutingrun_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses: WebExpand<msdyn_unifiedroutingrun_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_unifiedroutingrun_ProcessSession: WebExpand<msdyn_unifiedroutingrun_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_unifiedroutingrun_ProcessSession: ProcessSession_Result[] }>;
  msdyn_unifiedroutingrun_SyncErrors: WebExpand<msdyn_unifiedroutingrun_Expand, SyncError_Select, SyncError_Filter, { msdyn_unifiedroutingrun_SyncErrors: SyncError_Result[] }>;
  msdyn_unifiedroutingrun_UserEntityInstanceDatas: WebExpand<msdyn_unifiedroutingrun_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_unifiedroutingrun_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic: WebExpand<msdyn_unifiedroutingrun_Expand, msdyn_unifiedroutingdiagnostic_Select, msdyn_unifiedroutingdiagnostic_Filter, { msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic: msdyn_unifiedroutingdiagnostic_Result[] }>;
  msdyn_workstream: WebExpand<msdyn_unifiedroutingrun_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_workstream: msdyn_liveworkstream_Result }>;
  ownerid: WebExpand<msdyn_unifiedroutingrun_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_unifiedroutingrun_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_unifiedroutingrun_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_unifiedroutingrun_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_unifiedroutingrun_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_assignedagent_formatted?: string;
  msdyn_endtime_formatted?: string;
  msdyn_liveworkitem_formatted?: string;
  msdyn_queue_formatted?: string;
  msdyn_routingstatus_formatted?: string;
  msdyn_starttime_formatted?: string;
  msdyn_targetobject_formatted?: string;
  msdyn_workstream_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_unifiedroutingrun_Result extends msdyn_unifiedroutingrun_Base, msdyn_unifiedroutingrun_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_assignedagent_guid: string | null;
  msdyn_liveworkitem_guid: string | null;
  msdyn_queue_guid: string | null;
  msdyn_targetobject_guid: string | null;
  msdyn_workstream_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_unifiedroutingrun_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_assignedagent: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_liveworkitem: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_queue: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  msdyn_targetobject_msdyn_ocliveworkitem: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_targetobject_queueitem: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_workstream: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_unifiedroutingrun_RelatedMany {
  msdyn_unifiedroutingrun_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_unifiedroutingrun_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_unifiedroutingrun_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_unifiedroutingrun_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_unifiedroutingrun_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_unifiedroutingrun_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_unifiedroutingrun_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_unifiedroutingrun_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_unifiedroutingrun_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_unifiedroutingrun_msdyn_unifiedroutingdiagnostic: WebMappingRetrieve<msdyn_unifiedroutingdiagnostic_Select,msdyn_unifiedroutingdiagnostic_Expand,msdyn_unifiedroutingdiagnostic_Filter,msdyn_unifiedroutingdiagnostic_Fixed,msdyn_unifiedroutingdiagnostic_Result,msdyn_unifiedroutingdiagnostic_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_unifiedroutingruns: WebMappingRetrieve<msdyn_unifiedroutingrun_Select,msdyn_unifiedroutingrun_Expand,msdyn_unifiedroutingrun_Filter,msdyn_unifiedroutingrun_Fixed,msdyn_unifiedroutingrun_Result,msdyn_unifiedroutingrun_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_unifiedroutingruns: WebMappingRelated<msdyn_unifiedroutingrun_RelatedOne,msdyn_unifiedroutingrun_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_unifiedroutingruns: WebMappingCUDA<msdyn_unifiedroutingrun_Create,msdyn_unifiedroutingrun_Update,msdyn_unifiedroutingrun_Select>;
}
