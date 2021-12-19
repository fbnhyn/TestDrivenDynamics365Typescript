interface flowmachine_Base extends WebEntity {
  agentversion?: string | null;
  connectivityconfiguration?: string | null;
  createdon?: Date | null;
  description?: string | null;
  flowmachineid?: string | null;
  importsequencenumber?: number | null;
  machinemetadata?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  sessioncapacity?: number | null;
  statecode?: flowmachine_statecode | null;
  statuscode?: flowmachine_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface flowmachine_Relationships {
  FlowMachineGroupId?: flowmachinegroup_Result | null;
  flowmachine_AsyncOperations?: AsyncOperation_Result[] | null;
  flowmachine_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  flowmachine_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  flowmachine_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  flowmachine_ProcessSession?: ProcessSession_Result[] | null;
  flowmachine_SyncErrors?: SyncError_Result[] | null;
  flowmachine_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  flowmachine_flowsession_MachineId?: flowsession_Result[] | null;
}
interface flowmachine extends flowmachine_Base, flowmachine_Relationships {
  FlowMachineGroupId_bind$flowmachinegroups?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface flowmachine_Create extends flowmachine {
}
interface flowmachine_Update extends flowmachine {
}
interface flowmachine_Select {
  agentversion: WebAttribute<flowmachine_Select, { agentversion: string | null }, {  }>;
  connectivityconfiguration: WebAttribute<flowmachine_Select, { connectivityconfiguration: string | null }, {  }>;
  createdby_guid: WebAttribute<flowmachine_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<flowmachine_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<flowmachine_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<flowmachine_Select, { description: string | null }, {  }>;
  flowmachinegroupid_guid: WebAttribute<flowmachine_Select, { flowmachinegroupid_guid: string | null }, { flowmachinegroupid_formatted?: string }>;
  flowmachineid: WebAttribute<flowmachine_Select, { flowmachineid: string | null }, {  }>;
  importsequencenumber: WebAttribute<flowmachine_Select, { importsequencenumber: number | null }, {  }>;
  machinemetadata: WebAttribute<flowmachine_Select, { machinemetadata: string | null }, {  }>;
  modifiedby_guid: WebAttribute<flowmachine_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<flowmachine_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<flowmachine_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<flowmachine_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<flowmachine_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<flowmachine_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<flowmachine_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<flowmachine_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<flowmachine_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  sessioncapacity: WebAttribute<flowmachine_Select, { sessioncapacity: number | null }, {  }>;
  statecode: WebAttribute<flowmachine_Select, { statecode: flowmachine_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<flowmachine_Select, { statuscode: flowmachine_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<flowmachine_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<flowmachine_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<flowmachine_Select, { versionnumber: number | null }, {  }>;
}
interface flowmachine_Filter {
  agentversion: string;
  connectivityconfiguration: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  flowmachinegroupid_guid: XQW.Guid;
  flowmachineid: XQW.Guid;
  importsequencenumber: number;
  machinemetadata: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  sessioncapacity: number;
  statecode: flowmachine_statecode;
  statuscode: flowmachine_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface flowmachine_Expand {
  FlowMachineGroupId: WebExpand<flowmachine_Expand, flowmachinegroup_Select, flowmachinegroup_Filter, { FlowMachineGroupId: flowmachinegroup_Result }>;
  createdby: WebExpand<flowmachine_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<flowmachine_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  flowmachine_AsyncOperations: WebExpand<flowmachine_Expand, AsyncOperation_Select, AsyncOperation_Filter, { flowmachine_AsyncOperations: AsyncOperation_Result[] }>;
  flowmachine_BulkDeleteFailures: WebExpand<flowmachine_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { flowmachine_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  flowmachine_MailboxTrackingFolders: WebExpand<flowmachine_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { flowmachine_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  flowmachine_PrincipalObjectAttributeAccesses: WebExpand<flowmachine_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { flowmachine_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  flowmachine_ProcessSession: WebExpand<flowmachine_Expand, ProcessSession_Select, ProcessSession_Filter, { flowmachine_ProcessSession: ProcessSession_Result[] }>;
  flowmachine_SyncErrors: WebExpand<flowmachine_Expand, SyncError_Select, SyncError_Filter, { flowmachine_SyncErrors: SyncError_Result[] }>;
  flowmachine_UserEntityInstanceDatas: WebExpand<flowmachine_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { flowmachine_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  flowmachine_flowsession_MachineId: WebExpand<flowmachine_Expand, flowsession_Select, flowsession_Filter, { flowmachine_flowsession_MachineId: flowsession_Result[] }>;
  modifiedby: WebExpand<flowmachine_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<flowmachine_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<flowmachine_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<flowmachine_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<flowmachine_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<flowmachine_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface flowmachine_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  flowmachinegroupid_formatted?: string;
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
interface flowmachine_Result extends flowmachine_Base, flowmachine_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  flowmachinegroupid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface flowmachine_RelatedOne {
  FlowMachineGroupId: WebMappingRetrieve<flowmachinegroup_Select,flowmachinegroup_Expand,flowmachinegroup_Filter,flowmachinegroup_Fixed,flowmachinegroup_Result,flowmachinegroup_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface flowmachine_RelatedMany {
  flowmachine_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  flowmachine_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  flowmachine_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  flowmachine_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  flowmachine_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  flowmachine_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  flowmachine_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  flowmachine_flowsession_MachineId: WebMappingRetrieve<flowsession_Select,flowsession_Expand,flowsession_Filter,flowsession_Fixed,flowsession_Result,flowsession_FormattedResult>;
}
interface WebEntitiesRetrieve {
  flowmachines: WebMappingRetrieve<flowmachine_Select,flowmachine_Expand,flowmachine_Filter,flowmachine_Fixed,flowmachine_Result,flowmachine_FormattedResult>;
}
interface WebEntitiesRelated {
  flowmachines: WebMappingRelated<flowmachine_RelatedOne,flowmachine_RelatedMany>;
}
interface WebEntitiesCUDA {
  flowmachines: WebMappingCUDA<flowmachine_Create,flowmachine_Update,flowmachine_Select>;
}
