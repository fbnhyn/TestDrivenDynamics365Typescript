interface flowsession_Base extends WebEntity {
  completedon?: Date | null;
  context?: string | null;
  correlationid?: string | null;
  createdon?: Date | null;
  errorcode?: string | null;
  errormessage?: string | null;
  flowsessionid?: string | null;
  gateway?: string | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  processversion?: string | null;
  startedon?: Date | null;
  statecode?: flowsession_statecode | null;
  statuscode?: flowsession_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface flowsession_Relationships {
  MachineGroupId?: flowmachinegroup_Result | null;
  MachineId?: flowmachine_Result | null;
  additionalcontext?: FileAttachment_Result | null;
  flowsession_AsyncOperations?: AsyncOperation_Result[] | null;
  flowsession_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  flowsession_FileAttachments?: FileAttachment_Result[] | null;
  flowsession_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  flowsession_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  flowsession_SyncErrors?: SyncError_Result[] | null;
  flowsession_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  flowsession_workflowbinary_FlowSessionId?: workflowbinary_Result[] | null;
  outputs?: FileAttachment_Result | null;
  regardingobjectid_process?: Workflow_Result | null;
}
interface flowsession extends flowsession_Base, flowsession_Relationships {
  MachineGroupId_bind$flowmachinegroups?: string | null;
  MachineId_bind$flowmachines?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface flowsession_Create extends flowsession {
  regardingobjectid_process_bind$workflows?: string | null;
}
interface flowsession_Update extends flowsession {
}
interface flowsession_Select {
  completedon: WebAttribute<flowsession_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  context: WebAttribute<flowsession_Select, { context: string | null }, {  }>;
  correlationid: WebAttribute<flowsession_Select, { correlationid: string | null }, {  }>;
  createdby_guid: WebAttribute<flowsession_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<flowsession_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<flowsession_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  errorcode: WebAttribute<flowsession_Select, { errorcode: string | null }, {  }>;
  errormessage: WebAttribute<flowsession_Select, { errormessage: string | null }, {  }>;
  flowsessionid: WebAttribute<flowsession_Select, { flowsessionid: string | null }, {  }>;
  gateway: WebAttribute<flowsession_Select, { gateway: string | null }, {  }>;
  importsequencenumber: WebAttribute<flowsession_Select, { importsequencenumber: number | null }, {  }>;
  machinegroupid_guid: WebAttribute<flowsession_Select, { machinegroupid_guid: string | null }, { machinegroupid_formatted?: string }>;
  machineid_guid: WebAttribute<flowsession_Select, { machineid_guid: string | null }, { machineid_formatted?: string }>;
  modifiedby_guid: WebAttribute<flowsession_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<flowsession_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<flowsession_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<flowsession_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<flowsession_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<flowsession_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<flowsession_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<flowsession_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<flowsession_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processversion: WebAttribute<flowsession_Select, { processversion: string | null }, {  }>;
  regardingobjectid_guid: WebAttribute<flowsession_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  startedon: WebAttribute<flowsession_Select, { startedon: Date | null }, { startedon_formatted?: string }>;
  statecode: WebAttribute<flowsession_Select, { statecode: flowsession_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<flowsession_Select, { statuscode: flowsession_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<flowsession_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<flowsession_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<flowsession_Select, { versionnumber: number | null }, {  }>;
}
interface flowsession_Filter {
  completedon: Date;
  context: string;
  correlationid: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  errorcode: string;
  errormessage: string;
  flowsessionid: XQW.Guid;
  gateway: string;
  importsequencenumber: number;
  machinegroupid_guid: XQW.Guid;
  machineid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processversion: string;
  regardingobjectid_guid: XQW.Guid;
  startedon: Date;
  statecode: flowsession_statecode;
  statuscode: flowsession_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface flowsession_Expand {
  MachineGroupId: WebExpand<flowsession_Expand, flowmachinegroup_Select, flowmachinegroup_Filter, { MachineGroupId: flowmachinegroup_Result }>;
  MachineId: WebExpand<flowsession_Expand, flowmachine_Select, flowmachine_Filter, { MachineId: flowmachine_Result }>;
  additionalcontext: WebExpand<flowsession_Expand, FileAttachment_Select, FileAttachment_Filter, { additionalcontext: FileAttachment_Result }>;
  createdby: WebExpand<flowsession_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<flowsession_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  flowsession_AsyncOperations: WebExpand<flowsession_Expand, AsyncOperation_Select, AsyncOperation_Filter, { flowsession_AsyncOperations: AsyncOperation_Result[] }>;
  flowsession_BulkDeleteFailures: WebExpand<flowsession_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { flowsession_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  flowsession_FileAttachments: WebExpand<flowsession_Expand, FileAttachment_Select, FileAttachment_Filter, { flowsession_FileAttachments: FileAttachment_Result[] }>;
  flowsession_MailboxTrackingFolders: WebExpand<flowsession_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { flowsession_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  flowsession_PrincipalObjectAttributeAccesses: WebExpand<flowsession_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { flowsession_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  flowsession_SyncErrors: WebExpand<flowsession_Expand, SyncError_Select, SyncError_Filter, { flowsession_SyncErrors: SyncError_Result[] }>;
  flowsession_UserEntityInstanceDatas: WebExpand<flowsession_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { flowsession_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  flowsession_workflowbinary_FlowSessionId: WebExpand<flowsession_Expand, workflowbinary_Select, workflowbinary_Filter, { flowsession_workflowbinary_FlowSessionId: workflowbinary_Result[] }>;
  modifiedby: WebExpand<flowsession_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<flowsession_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  outputs: WebExpand<flowsession_Expand, FileAttachment_Select, FileAttachment_Filter, { outputs: FileAttachment_Result }>;
  ownerid: WebExpand<flowsession_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<flowsession_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<flowsession_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<flowsession_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  regardingobjectid_process: WebExpand<flowsession_Expand, Workflow_Select, Workflow_Filter, { regardingobjectid_process: Workflow_Result }>;
}
interface flowsession_FormattedResult {
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  machinegroupid_formatted?: string;
  machineid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
  startedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface flowsession_Result extends flowsession_Base, flowsession_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  machinegroupid_guid: string | null;
  machineid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface flowsession_RelatedOne {
  MachineGroupId: WebMappingRetrieve<flowmachinegroup_Select,flowmachinegroup_Expand,flowmachinegroup_Filter,flowmachinegroup_Fixed,flowmachinegroup_Result,flowmachinegroup_FormattedResult>;
  MachineId: WebMappingRetrieve<flowmachine_Select,flowmachine_Expand,flowmachine_Filter,flowmachine_Fixed,flowmachine_Result,flowmachine_FormattedResult>;
  additionalcontext: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  outputs: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  regardingobjectid_process: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface flowsession_RelatedMany {
  flowsession_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  flowsession_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  flowsession_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  flowsession_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  flowsession_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  flowsession_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  flowsession_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  flowsession_workflowbinary_FlowSessionId: WebMappingRetrieve<workflowbinary_Select,workflowbinary_Expand,workflowbinary_Filter,workflowbinary_Fixed,workflowbinary_Result,workflowbinary_FormattedResult>;
}
interface WebEntitiesRetrieve {
  flowsessions: WebMappingRetrieve<flowsession_Select,flowsession_Expand,flowsession_Filter,flowsession_Fixed,flowsession_Result,flowsession_FormattedResult>;
}
interface WebEntitiesRelated {
  flowsessions: WebMappingRelated<flowsession_RelatedOne,flowsession_RelatedMany>;
}
interface WebEntitiesCUDA {
  flowsessions: WebMappingCUDA<flowsession_Create,flowsession_Update,flowsession_Select>;
}
