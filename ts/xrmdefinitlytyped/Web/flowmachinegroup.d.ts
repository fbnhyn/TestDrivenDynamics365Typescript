interface flowmachinegroup_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  flowgrouptype?: flowmachinegroup_flowgrouptype | null;
  flowmachinegroupid?: string | null;
  groupmetadata?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  primarykeypackage?: string | null;
  primarypublickey?: string | null;
  secondarykeypackage?: string | null;
  secondarypublickey?: string | null;
  solutionid?: string | null;
  statecode?: flowmachinegroup_statecode | null;
  statuscode?: flowmachinegroup_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface flowmachinegroup_Relationships {
  flowmachinegroup_AsyncOperations?: AsyncOperation_Result[] | null;
  flowmachinegroup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  flowmachinegroup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  flowmachinegroup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  flowmachinegroup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  flowmachinegroup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  flowmachinegroup_ProcessSession?: ProcessSession_Result[] | null;
  flowmachinegroup_SyncErrors?: SyncError_Result[] | null;
  flowmachinegroup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  flowmachinegroup_flowmachine?: flowmachine_Result[] | null;
  flowmachinegroup_flowsession_MachineGroupId?: flowsession_Result[] | null;
}
interface flowmachinegroup extends flowmachinegroup_Base, flowmachinegroup_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface flowmachinegroup_Create extends flowmachinegroup {
}
interface flowmachinegroup_Update extends flowmachinegroup {
}
interface flowmachinegroup_Select {
  componentidunique: WebAttribute<flowmachinegroup_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<flowmachinegroup_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<flowmachinegroup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<flowmachinegroup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<flowmachinegroup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<flowmachinegroup_Select, { description: string | null }, {  }>;
  flowgrouptype: WebAttribute<flowmachinegroup_Select, { flowgrouptype: flowmachinegroup_flowgrouptype | null }, { flowgrouptype_formatted?: string }>;
  flowmachinegroupid: WebAttribute<flowmachinegroup_Select, { flowmachinegroupid: string | null }, {  }>;
  groupmetadata: WebAttribute<flowmachinegroup_Select, { groupmetadata: string | null }, {  }>;
  importsequencenumber: WebAttribute<flowmachinegroup_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<flowmachinegroup_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<flowmachinegroup_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<flowmachinegroup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<flowmachinegroup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<flowmachinegroup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<flowmachinegroup_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<flowmachinegroup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<flowmachinegroup_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<flowmachinegroup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<flowmachinegroup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<flowmachinegroup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<flowmachinegroup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  primarykeypackage: WebAttribute<flowmachinegroup_Select, { primarykeypackage: string | null }, {  }>;
  primarypublickey: WebAttribute<flowmachinegroup_Select, { primarypublickey: string | null }, {  }>;
  secondarykeypackage: WebAttribute<flowmachinegroup_Select, { secondarykeypackage: string | null }, {  }>;
  secondarypublickey: WebAttribute<flowmachinegroup_Select, { secondarypublickey: string | null }, {  }>;
  solutionid: WebAttribute<flowmachinegroup_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<flowmachinegroup_Select, { statecode: flowmachinegroup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<flowmachinegroup_Select, { statuscode: flowmachinegroup_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<flowmachinegroup_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<flowmachinegroup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<flowmachinegroup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<flowmachinegroup_Select, { versionnumber: number | null }, {  }>;
}
interface flowmachinegroup_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  flowgrouptype: flowmachinegroup_flowgrouptype;
  flowmachinegroupid: XQW.Guid;
  groupmetadata: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  primarykeypackage: string;
  primarypublickey: string;
  secondarykeypackage: string;
  secondarypublickey: string;
  solutionid: XQW.Guid;
  statecode: flowmachinegroup_statecode;
  statuscode: flowmachinegroup_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface flowmachinegroup_Expand {
  createdby: WebExpand<flowmachinegroup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<flowmachinegroup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  flowmachinegroup_AsyncOperations: WebExpand<flowmachinegroup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { flowmachinegroup_AsyncOperations: AsyncOperation_Result[] }>;
  flowmachinegroup_BulkDeleteFailures: WebExpand<flowmachinegroup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { flowmachinegroup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  flowmachinegroup_DuplicateBaseRecord: WebExpand<flowmachinegroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { flowmachinegroup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  flowmachinegroup_DuplicateMatchingRecord: WebExpand<flowmachinegroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { flowmachinegroup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  flowmachinegroup_MailboxTrackingFolders: WebExpand<flowmachinegroup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { flowmachinegroup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  flowmachinegroup_PrincipalObjectAttributeAccesses: WebExpand<flowmachinegroup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { flowmachinegroup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  flowmachinegroup_ProcessSession: WebExpand<flowmachinegroup_Expand, ProcessSession_Select, ProcessSession_Filter, { flowmachinegroup_ProcessSession: ProcessSession_Result[] }>;
  flowmachinegroup_SyncErrors: WebExpand<flowmachinegroup_Expand, SyncError_Select, SyncError_Filter, { flowmachinegroup_SyncErrors: SyncError_Result[] }>;
  flowmachinegroup_UserEntityInstanceDatas: WebExpand<flowmachinegroup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { flowmachinegroup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  flowmachinegroup_flowmachine: WebExpand<flowmachinegroup_Expand, flowmachine_Select, flowmachine_Filter, { flowmachinegroup_flowmachine: flowmachine_Result[] }>;
  flowmachinegroup_flowsession_MachineGroupId: WebExpand<flowmachinegroup_Expand, flowsession_Select, flowsession_Filter, { flowmachinegroup_flowsession_MachineGroupId: flowsession_Result[] }>;
  modifiedby: WebExpand<flowmachinegroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<flowmachinegroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<flowmachinegroup_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<flowmachinegroup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<flowmachinegroup_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<flowmachinegroup_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface flowmachinegroup_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  flowgrouptype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface flowmachinegroup_Result extends flowmachinegroup_Base, flowmachinegroup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface flowmachinegroup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface flowmachinegroup_RelatedMany {
  flowmachinegroup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  flowmachinegroup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  flowmachinegroup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  flowmachinegroup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  flowmachinegroup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  flowmachinegroup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  flowmachinegroup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  flowmachinegroup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  flowmachinegroup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  flowmachinegroup_flowmachine: WebMappingRetrieve<flowmachine_Select,flowmachine_Expand,flowmachine_Filter,flowmachine_Fixed,flowmachine_Result,flowmachine_FormattedResult>;
  flowmachinegroup_flowsession_MachineGroupId: WebMappingRetrieve<flowsession_Select,flowsession_Expand,flowsession_Filter,flowsession_Fixed,flowsession_Result,flowsession_FormattedResult>;
}
interface WebEntitiesRetrieve {
  flowmachinegroups: WebMappingRetrieve<flowmachinegroup_Select,flowmachinegroup_Expand,flowmachinegroup_Filter,flowmachinegroup_Fixed,flowmachinegroup_Result,flowmachinegroup_FormattedResult>;
}
interface WebEntitiesRelated {
  flowmachinegroups: WebMappingRelated<flowmachinegroup_RelatedOne,flowmachinegroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  flowmachinegroups: WebMappingCUDA<flowmachinegroup_Create,flowmachinegroup_Update,flowmachinegroup_Select>;
}
