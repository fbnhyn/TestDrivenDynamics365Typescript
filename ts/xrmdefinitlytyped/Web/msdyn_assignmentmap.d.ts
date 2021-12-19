interface msdyn_assignmentmap_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_applicableforrouting?: boolean | null;
  msdyn_assignedticks?: string | null;
  msdyn_assignmentmapid?: string | null;
  msdyn_availablecapacity?: number | null;
  msdyn_maxcapacity?: number | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_assignmentmap_statecode | null;
  statuscode?: msdyn_assignmentmap_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_assignmentmap_Relationships {
  msdyn_assignmentmap_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_assignmentmap_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_assignmentmap_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_assignmentmap_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_assignmentmap_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_assignmentmap_SyncErrors?: SyncError_Result[] | null;
  msdyn_assignmentmap_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_assignmentmap_connections1?: Connection_Result[] | null;
  msdyn_assignmentmap_connections2?: Connection_Result[] | null;
}
interface msdyn_assignmentmap extends msdyn_assignmentmap_Base, msdyn_assignmentmap_Relationships {
  msdyn_systemuserid_bind$systemusers?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_assignmentmap_Create extends msdyn_assignmentmap {
}
interface msdyn_assignmentmap_Update extends msdyn_assignmentmap {
}
interface msdyn_assignmentmap_Select {
  createdby_guid: WebAttribute<msdyn_assignmentmap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_assignmentmap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_assignmentmap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_assignmentmap_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_assignmentmap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_assignmentmap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_assignmentmap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_applicableforrouting: WebAttribute<msdyn_assignmentmap_Select, { msdyn_applicableforrouting: boolean | null }, {  }>;
  msdyn_assignedticks: WebAttribute<msdyn_assignmentmap_Select, { msdyn_assignedticks: string | null }, {  }>;
  msdyn_assignmentmapid: WebAttribute<msdyn_assignmentmap_Select, { msdyn_assignmentmapid: string | null }, {  }>;
  msdyn_availablecapacity: WebAttribute<msdyn_assignmentmap_Select, { msdyn_availablecapacity: number | null }, {  }>;
  msdyn_maxcapacity: WebAttribute<msdyn_assignmentmap_Select, { msdyn_maxcapacity: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_assignmentmap_Select, { msdyn_name: string | null }, {  }>;
  msdyn_systemuserid_guid: WebAttribute<msdyn_assignmentmap_Select, { msdyn_systemuserid_guid: string | null }, { msdyn_systemuserid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_assignmentmap_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_assignmentmap_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_assignmentmap_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_assignmentmap_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_assignmentmap_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_assignmentmap_Select, { statecode: msdyn_assignmentmap_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_assignmentmap_Select, { statuscode: msdyn_assignmentmap_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_assignmentmap_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_assignmentmap_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_assignmentmap_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_assignmentmap_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_applicableforrouting: boolean;
  msdyn_assignedticks: string;
  msdyn_assignmentmapid: XQW.Guid;
  msdyn_availablecapacity: number;
  msdyn_maxcapacity: number;
  msdyn_name: string;
  msdyn_systemuserid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_assignmentmap_statecode;
  statuscode: msdyn_assignmentmap_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_assignmentmap_Expand {
  createdby: WebExpand<msdyn_assignmentmap_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_assignmentmap_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_assignmentmap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_assignmentmap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_assignmentmap_AsyncOperations: WebExpand<msdyn_assignmentmap_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_assignmentmap_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_assignmentmap_BulkDeleteFailures: WebExpand<msdyn_assignmentmap_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_assignmentmap_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_assignmentmap_MailboxTrackingFolders: WebExpand<msdyn_assignmentmap_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_assignmentmap_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_assignmentmap_PrincipalObjectAttributeAccesses: WebExpand<msdyn_assignmentmap_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_assignmentmap_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_assignmentmap_ProcessSession: WebExpand<msdyn_assignmentmap_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_assignmentmap_ProcessSession: ProcessSession_Result[] }>;
  msdyn_assignmentmap_SyncErrors: WebExpand<msdyn_assignmentmap_Expand, SyncError_Select, SyncError_Filter, { msdyn_assignmentmap_SyncErrors: SyncError_Result[] }>;
  msdyn_assignmentmap_UserEntityInstanceDatas: WebExpand<msdyn_assignmentmap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_assignmentmap_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_assignmentmap_connections1: WebExpand<msdyn_assignmentmap_Expand, Connection_Select, Connection_Filter, { msdyn_assignmentmap_connections1: Connection_Result[] }>;
  msdyn_assignmentmap_connections2: WebExpand<msdyn_assignmentmap_Expand, Connection_Select, Connection_Filter, { msdyn_assignmentmap_connections2: Connection_Result[] }>;
  msdyn_systemuserid: WebExpand<msdyn_assignmentmap_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_systemuserid: SystemUser_Result }>;
  ownerid: WebExpand<msdyn_assignmentmap_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_assignmentmap_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_assignmentmap_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_assignmentmap_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_assignmentmap_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_systemuserid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_assignmentmap_Result extends msdyn_assignmentmap_Base, msdyn_assignmentmap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_systemuserid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_assignmentmap_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_systemuserid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_assignmentmap_RelatedMany {
  msdyn_assignmentmap_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_assignmentmap_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_assignmentmap_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_assignmentmap_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_assignmentmap_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_assignmentmap_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_assignmentmap_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_assignmentmap_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_assignmentmap_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_assignmentmaps: WebMappingRetrieve<msdyn_assignmentmap_Select,msdyn_assignmentmap_Expand,msdyn_assignmentmap_Filter,msdyn_assignmentmap_Fixed,msdyn_assignmentmap_Result,msdyn_assignmentmap_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_assignmentmaps: WebMappingRelated<msdyn_assignmentmap_RelatedOne,msdyn_assignmentmap_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_assignmentmaps: WebMappingCUDA<msdyn_assignmentmap_Create,msdyn_assignmentmap_Update,msdyn_assignmentmap_Select>;
}
