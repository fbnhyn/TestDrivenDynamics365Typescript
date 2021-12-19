interface msdyn_entityroutingconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_entity?: string | null;
  msdyn_entityroutingconfigurationid?: string | null;
  msdyn_entitysetname?: string | null;
  msdyn_name?: string | null;
  msdyn_relationshipname?: string | null;
  msdyn_routingrulesubgrid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_entityroutingconfiguration_statecode | null;
  statuscode?: msdyn_entityroutingconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_entityroutingconfiguration_Relationships {
  msdyn_DeroutingProcess?: Workflow_Result | null;
  msdyn_RoutingProcess?: Workflow_Result | null;
  msdyn_entityroutingconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_entityroutingconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_entityroutingconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_entityroutingconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_entityroutingconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_entityroutingconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_entityroutingconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_entityroutingconfiguration_msdyn_liveworkstream?: msdyn_liveworkstream_Result[] | null;
}
interface msdyn_entityroutingconfiguration extends msdyn_entityroutingconfiguration_Base, msdyn_entityroutingconfiguration_Relationships {
  msdyn_DeroutingProcess_bind$workflows?: string | null;
  msdyn_RoutingProcess_bind$workflows?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_entityroutingconfiguration_Create extends msdyn_entityroutingconfiguration {
}
interface msdyn_entityroutingconfiguration_Update extends msdyn_entityroutingconfiguration {
}
interface msdyn_entityroutingconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_entityroutingconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_entityroutingconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_entityroutingconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_deroutingprocess_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { msdyn_deroutingprocess_guid: string | null }, { msdyn_deroutingprocess_formatted?: string }>;
  msdyn_entity: WebAttribute<msdyn_entityroutingconfiguration_Select, { msdyn_entity: string | null }, {  }>;
  msdyn_entityroutingconfigurationid: WebAttribute<msdyn_entityroutingconfiguration_Select, { msdyn_entityroutingconfigurationid: string | null }, {  }>;
  msdyn_entitysetname: WebAttribute<msdyn_entityroutingconfiguration_Select, { msdyn_entitysetname: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_entityroutingconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_relationshipname: WebAttribute<msdyn_entityroutingconfiguration_Select, { msdyn_relationshipname: string | null }, {  }>;
  msdyn_routingprocess_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { msdyn_routingprocess_guid: string | null }, { msdyn_routingprocess_formatted?: string }>;
  msdyn_routingrulesubgrid: WebAttribute<msdyn_entityroutingconfiguration_Select, { msdyn_routingrulesubgrid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_entityroutingconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_entityroutingconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_entityroutingconfiguration_Select, { statecode: msdyn_entityroutingconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_entityroutingconfiguration_Select, { statuscode: msdyn_entityroutingconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_entityroutingconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_entityroutingconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_entityroutingconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_entityroutingconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_deroutingprocess_guid: XQW.Guid;
  msdyn_entity: string;
  msdyn_entityroutingconfigurationid: XQW.Guid;
  msdyn_entitysetname: string;
  msdyn_name: string;
  msdyn_relationshipname: string;
  msdyn_routingprocess_guid: XQW.Guid;
  msdyn_routingrulesubgrid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_entityroutingconfiguration_statecode;
  statuscode: msdyn_entityroutingconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_entityroutingconfiguration_Expand {
  createdby: WebExpand<msdyn_entityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_entityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_entityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_entityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_DeroutingProcess: WebExpand<msdyn_entityroutingconfiguration_Expand, Workflow_Select, Workflow_Filter, { msdyn_DeroutingProcess: Workflow_Result }>;
  msdyn_RoutingProcess: WebExpand<msdyn_entityroutingconfiguration_Expand, Workflow_Select, Workflow_Filter, { msdyn_RoutingProcess: Workflow_Result }>;
  msdyn_entityroutingconfiguration_AsyncOperations: WebExpand<msdyn_entityroutingconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_entityroutingconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_entityroutingconfiguration_BulkDeleteFailures: WebExpand<msdyn_entityroutingconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_entityroutingconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_entityroutingconfiguration_MailboxTrackingFolders: WebExpand<msdyn_entityroutingconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_entityroutingconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_entityroutingconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_entityroutingconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_entityroutingconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_entityroutingconfiguration_ProcessSession: WebExpand<msdyn_entityroutingconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_entityroutingconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_entityroutingconfiguration_SyncErrors: WebExpand<msdyn_entityroutingconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_entityroutingconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_entityroutingconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_entityroutingconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_entityroutingconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_entityroutingconfiguration_msdyn_liveworkstream: WebExpand<msdyn_entityroutingconfiguration_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_entityroutingconfiguration_msdyn_liveworkstream: msdyn_liveworkstream_Result[] }>;
  ownerid: WebExpand<msdyn_entityroutingconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_entityroutingconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_entityroutingconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_entityroutingconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_entityroutingconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_deroutingprocess_formatted?: string;
  msdyn_routingprocess_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_entityroutingconfiguration_Result extends msdyn_entityroutingconfiguration_Base, msdyn_entityroutingconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_deroutingprocess_guid: string | null;
  msdyn_routingprocess_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_entityroutingconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_DeroutingProcess: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  msdyn_RoutingProcess: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_entityroutingconfiguration_RelatedMany {
  msdyn_entityroutingconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_entityroutingconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_entityroutingconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_entityroutingconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_entityroutingconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_entityroutingconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_entityroutingconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_entityroutingconfiguration_msdyn_liveworkstream: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_entityroutingconfigurations: WebMappingRetrieve<msdyn_entityroutingconfiguration_Select,msdyn_entityroutingconfiguration_Expand,msdyn_entityroutingconfiguration_Filter,msdyn_entityroutingconfiguration_Fixed,msdyn_entityroutingconfiguration_Result,msdyn_entityroutingconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_entityroutingconfigurations: WebMappingRelated<msdyn_entityroutingconfiguration_RelatedOne,msdyn_entityroutingconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_entityroutingconfigurations: WebMappingCUDA<msdyn_entityroutingconfiguration_Create,msdyn_entityroutingconfiguration_Update,msdyn_entityroutingconfiguration_Select>;
}
