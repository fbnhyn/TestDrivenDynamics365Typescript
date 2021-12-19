interface workflowbinary_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  metadata?: string | null;
  mimetype?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  referencename?: string | null;
  statecode?: workflowbinary_statecode | null;
  statuscode?: workflowbinary_statuscode | null;
  timezoneruleversionnumber?: number | null;
  type?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
  workflowbinaryid?: string | null;
}
interface workflowbinary_Relationships {
  FlowSessionId?: flowsession_Result | null;
  Process?: Workflow_Result | null;
  data?: FileAttachment_Result | null;
  workflowbinary_AsyncOperations?: AsyncOperation_Result[] | null;
  workflowbinary_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  workflowbinary_FileAttachments?: FileAttachment_Result[] | null;
  workflowbinary_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  workflowbinary_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  workflowbinary_ProcessSession?: ProcessSession_Result[] | null;
  workflowbinary_SyncErrors?: SyncError_Result[] | null;
  workflowbinary_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface workflowbinary extends workflowbinary_Base, workflowbinary_Relationships {
  FlowSessionId_bind$flowsessions?: string | null;
  Process_bind$workflows?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface workflowbinary_Create extends workflowbinary {
}
interface workflowbinary_Update extends workflowbinary {
}
interface workflowbinary_Select {
  createdby_guid: WebAttribute<workflowbinary_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<workflowbinary_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<workflowbinary_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  flowsessionid_guid: WebAttribute<workflowbinary_Select, { flowsessionid_guid: string | null }, { flowsessionid_formatted?: string }>;
  importsequencenumber: WebAttribute<workflowbinary_Select, { importsequencenumber: number | null }, {  }>;
  metadata: WebAttribute<workflowbinary_Select, { metadata: string | null }, {  }>;
  mimetype: WebAttribute<workflowbinary_Select, { mimetype: string | null }, {  }>;
  modifiedby_guid: WebAttribute<workflowbinary_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<workflowbinary_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<workflowbinary_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<workflowbinary_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<workflowbinary_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<workflowbinary_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<workflowbinary_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<workflowbinary_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<workflowbinary_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  process_guid: WebAttribute<workflowbinary_Select, { process_guid: string | null }, { process_formatted?: string }>;
  referencename: WebAttribute<workflowbinary_Select, { referencename: string | null }, {  }>;
  statecode: WebAttribute<workflowbinary_Select, { statecode: workflowbinary_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<workflowbinary_Select, { statuscode: workflowbinary_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<workflowbinary_Select, { timezoneruleversionnumber: number | null }, {  }>;
  type: WebAttribute<workflowbinary_Select, { type: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<workflowbinary_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<workflowbinary_Select, { versionnumber: number | null }, {  }>;
  workflowbinaryid: WebAttribute<workflowbinary_Select, { workflowbinaryid: string | null }, {  }>;
}
interface workflowbinary_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  flowsessionid_guid: XQW.Guid;
  importsequencenumber: number;
  metadata: string;
  mimetype: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  process_guid: XQW.Guid;
  referencename: string;
  statecode: workflowbinary_statecode;
  statuscode: workflowbinary_statuscode;
  timezoneruleversionnumber: number;
  type: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
  workflowbinaryid: XQW.Guid;
}
interface workflowbinary_Expand {
  FlowSessionId: WebExpand<workflowbinary_Expand, flowsession_Select, flowsession_Filter, { FlowSessionId: flowsession_Result }>;
  Process: WebExpand<workflowbinary_Expand, Workflow_Select, Workflow_Filter, { Process: Workflow_Result }>;
  createdby: WebExpand<workflowbinary_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<workflowbinary_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  data: WebExpand<workflowbinary_Expand, FileAttachment_Select, FileAttachment_Filter, { data: FileAttachment_Result }>;
  modifiedby: WebExpand<workflowbinary_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<workflowbinary_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<workflowbinary_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<workflowbinary_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<workflowbinary_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<workflowbinary_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  workflowbinary_AsyncOperations: WebExpand<workflowbinary_Expand, AsyncOperation_Select, AsyncOperation_Filter, { workflowbinary_AsyncOperations: AsyncOperation_Result[] }>;
  workflowbinary_BulkDeleteFailures: WebExpand<workflowbinary_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { workflowbinary_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  workflowbinary_FileAttachments: WebExpand<workflowbinary_Expand, FileAttachment_Select, FileAttachment_Filter, { workflowbinary_FileAttachments: FileAttachment_Result[] }>;
  workflowbinary_MailboxTrackingFolders: WebExpand<workflowbinary_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { workflowbinary_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  workflowbinary_PrincipalObjectAttributeAccesses: WebExpand<workflowbinary_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { workflowbinary_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  workflowbinary_ProcessSession: WebExpand<workflowbinary_Expand, ProcessSession_Select, ProcessSession_Filter, { workflowbinary_ProcessSession: ProcessSession_Result[] }>;
  workflowbinary_SyncErrors: WebExpand<workflowbinary_Expand, SyncError_Select, SyncError_Filter, { workflowbinary_SyncErrors: SyncError_Result[] }>;
  workflowbinary_UserEntityInstanceDatas: WebExpand<workflowbinary_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { workflowbinary_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface workflowbinary_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  flowsessionid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  process_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface workflowbinary_Result extends workflowbinary_Base, workflowbinary_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  flowsessionid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  process_guid: string | null;
}
interface workflowbinary_RelatedOne {
  FlowSessionId: WebMappingRetrieve<flowsession_Select,flowsession_Expand,flowsession_Filter,flowsession_Fixed,flowsession_Result,flowsession_FormattedResult>;
  Process: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  data: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface workflowbinary_RelatedMany {
  workflowbinary_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  workflowbinary_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  workflowbinary_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  workflowbinary_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  workflowbinary_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  workflowbinary_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  workflowbinary_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  workflowbinary_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  workflowbinaries: WebMappingRetrieve<workflowbinary_Select,workflowbinary_Expand,workflowbinary_Filter,workflowbinary_Fixed,workflowbinary_Result,workflowbinary_FormattedResult>;
}
interface WebEntitiesRelated {
  workflowbinaries: WebMappingRelated<workflowbinary_RelatedOne,workflowbinary_RelatedMany>;
}
interface WebEntitiesCUDA {
  workflowbinaries: WebMappingCUDA<workflowbinary_Create,workflowbinary_Update,workflowbinary_Select>;
}
