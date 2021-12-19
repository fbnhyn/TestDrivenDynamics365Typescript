interface msdyn_ocruleitem_Base extends WebEntity {
  createdon?: Date | null;
  description?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_action?: string | null;
  msdyn_assignedto?: msdyn_ocruleitem_msdyn_assignedto | null;
  msdyn_condition?: string | null;
  msdyn_expression?: string | null;
  msdyn_name?: string | null;
  msdyn_ocruleitemid?: string | null;
  msdyn_priority?: string | null;
  msdyn_rulejson?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocruleitem_statecode | null;
  statuscode?: msdyn_ocruleitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocruleitem_Relationships {
  msdyn_QueueAssignId?: msdyn_omnichannelqueue_Result | null;
  msdyn_UserAssignId?: SystemUser_Result | null;
  msdyn_ocruleitem_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocruleitem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocruleitem_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocruleitem_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocruleitem_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocruleitem_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocruleitem_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocruleitem extends msdyn_ocruleitem_Base, msdyn_ocruleitem_Relationships {
  msdyn_QueueAssignId_bind$msdyn_omnichannelqueues?: string | null;
  msdyn_UserAssignId_bind$systemusers?: string | null;
  msdyn_cdsqueueassignid_bind$queues?: string | null;
  msdyn_liveworkstream_bind$msdyn_liveworkstreams?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocruleitem_Create extends msdyn_ocruleitem {
}
interface msdyn_ocruleitem_Update extends msdyn_ocruleitem {
}
interface msdyn_ocruleitem_Select {
  createdby_guid: WebAttribute<msdyn_ocruleitem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocruleitem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocruleitem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<msdyn_ocruleitem_Select, { description: string | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_ocruleitem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocruleitem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocruleitem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocruleitem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_action: WebAttribute<msdyn_ocruleitem_Select, { msdyn_action: string | null }, {  }>;
  msdyn_assignedto: WebAttribute<msdyn_ocruleitem_Select, { msdyn_assignedto: msdyn_ocruleitem_msdyn_assignedto | null }, { msdyn_assignedto_formatted?: string }>;
  msdyn_cdsqueueassignid_guid: WebAttribute<msdyn_ocruleitem_Select, { msdyn_cdsqueueassignid_guid: string | null }, { msdyn_cdsqueueassignid_formatted?: string }>;
  msdyn_condition: WebAttribute<msdyn_ocruleitem_Select, { msdyn_condition: string | null }, {  }>;
  msdyn_expression: WebAttribute<msdyn_ocruleitem_Select, { msdyn_expression: string | null }, {  }>;
  msdyn_liveworkstream_guid: WebAttribute<msdyn_ocruleitem_Select, { msdyn_liveworkstream_guid: string | null }, { msdyn_liveworkstream_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocruleitem_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocruleitemid: WebAttribute<msdyn_ocruleitem_Select, { msdyn_ocruleitemid: string | null }, {  }>;
  msdyn_priority: WebAttribute<msdyn_ocruleitem_Select, { msdyn_priority: string | null }, {  }>;
  msdyn_queueassignid_guid: WebAttribute<msdyn_ocruleitem_Select, { msdyn_queueassignid_guid: string | null }, { msdyn_queueassignid_formatted?: string }>;
  msdyn_rulejson: WebAttribute<msdyn_ocruleitem_Select, { msdyn_rulejson: string | null }, {  }>;
  msdyn_userassignid_guid: WebAttribute<msdyn_ocruleitem_Select, { msdyn_userassignid_guid: string | null }, { msdyn_userassignid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocruleitem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocruleitem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocruleitem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocruleitem_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocruleitem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocruleitem_Select, { statecode: msdyn_ocruleitem_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocruleitem_Select, { statuscode: msdyn_ocruleitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocruleitem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocruleitem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocruleitem_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocruleitem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_action: string;
  msdyn_assignedto: msdyn_ocruleitem_msdyn_assignedto;
  msdyn_cdsqueueassignid_guid: XQW.Guid;
  msdyn_condition: string;
  msdyn_expression: string;
  msdyn_liveworkstream_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocruleitemid: XQW.Guid;
  msdyn_priority: string;
  msdyn_queueassignid_guid: XQW.Guid;
  msdyn_rulejson: string;
  msdyn_userassignid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocruleitem_statecode;
  statuscode: msdyn_ocruleitem_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocruleitem_Expand {
  createdby: WebExpand<msdyn_ocruleitem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocruleitem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocruleitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocruleitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_QueueAssignId: WebExpand<msdyn_ocruleitem_Expand, msdyn_omnichannelqueue_Select, msdyn_omnichannelqueue_Filter, { msdyn_QueueAssignId: msdyn_omnichannelqueue_Result }>;
  msdyn_UserAssignId: WebExpand<msdyn_ocruleitem_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_UserAssignId: SystemUser_Result }>;
  msdyn_cdsqueueassignid: WebExpand<msdyn_ocruleitem_Expand, Queue_Select, Queue_Filter, { msdyn_cdsqueueassignid: Queue_Result }>;
  msdyn_liveworkstream: WebExpand<msdyn_ocruleitem_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstream: msdyn_liveworkstream_Result }>;
  msdyn_ocruleitem_AsyncOperations: WebExpand<msdyn_ocruleitem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocruleitem_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocruleitem_BulkDeleteFailures: WebExpand<msdyn_ocruleitem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocruleitem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocruleitem_MailboxTrackingFolders: WebExpand<msdyn_ocruleitem_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocruleitem_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocruleitem_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocruleitem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocruleitem_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocruleitem_ProcessSession: WebExpand<msdyn_ocruleitem_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocruleitem_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocruleitem_SyncErrors: WebExpand<msdyn_ocruleitem_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocruleitem_SyncErrors: SyncError_Result[] }>;
  msdyn_ocruleitem_UserEntityInstanceDatas: WebExpand<msdyn_ocruleitem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocruleitem_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocruleitem_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocruleitem_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocruleitem_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocruleitem_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocruleitem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_assignedto_formatted?: string;
  msdyn_cdsqueueassignid_formatted?: string;
  msdyn_liveworkstream_formatted?: string;
  msdyn_queueassignid_formatted?: string;
  msdyn_userassignid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocruleitem_Result extends msdyn_ocruleitem_Base, msdyn_ocruleitem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_cdsqueueassignid_guid: string | null;
  msdyn_liveworkstream_guid: string | null;
  msdyn_queueassignid_guid: string | null;
  msdyn_userassignid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocruleitem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_QueueAssignId: WebMappingRetrieve<msdyn_omnichannelqueue_Select,msdyn_omnichannelqueue_Expand,msdyn_omnichannelqueue_Filter,msdyn_omnichannelqueue_Fixed,msdyn_omnichannelqueue_Result,msdyn_omnichannelqueue_FormattedResult>;
  msdyn_UserAssignId: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_cdsqueueassignid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  msdyn_liveworkstream: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocruleitem_RelatedMany {
  msdyn_ocruleitem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocruleitem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocruleitem_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocruleitem_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocruleitem_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocruleitem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocruleitem_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocruleitems: WebMappingRetrieve<msdyn_ocruleitem_Select,msdyn_ocruleitem_Expand,msdyn_ocruleitem_Filter,msdyn_ocruleitem_Fixed,msdyn_ocruleitem_Result,msdyn_ocruleitem_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocruleitems: WebMappingRelated<msdyn_ocruleitem_RelatedOne,msdyn_ocruleitem_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocruleitems: WebMappingCUDA<msdyn_ocruleitem_Create,msdyn_ocruleitem_Update,msdyn_ocruleitem_Select>;
}
