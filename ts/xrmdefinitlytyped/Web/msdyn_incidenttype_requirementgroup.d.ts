interface msdyn_incidenttype_requirementgroup_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_incidenttype_requirementgroupid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_incidenttype_requirementgroup_statecode | null;
  statuscode?: msdyn_incidenttype_requirementgroup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_incidenttype_requirementgroup_Relationships {
  msdyn_IncidenttypeId?: msdyn_incidenttype_Result | null;
  msdyn_RequirementGroupId?: msdyn_requirementgroup_Result | null;
  msdyn_incidenttype_requirementgroup_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_incidenttype_requirementgroup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_incidenttype_requirementgroup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttype_requirementgroup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttype_requirementgroup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_incidenttype_requirementgroup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_incidenttype_requirementgroup_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_incidenttype_requirementgroup_SyncErrors?: SyncError_Result[] | null;
  msdyn_incidenttype_requirementgroup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_incidenttype_requirementgroup extends msdyn_incidenttype_requirementgroup_Base, msdyn_incidenttype_requirementgroup_Relationships {
  msdyn_IncidenttypeId_bind$msdyn_incidenttypes?: string | null;
  msdyn_RequirementGroupId_bind$msdyn_requirementgroups?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_incidenttype_requirementgroup_Create extends msdyn_incidenttype_requirementgroup {
}
interface msdyn_incidenttype_requirementgroup_Update extends msdyn_incidenttype_requirementgroup {
}
interface msdyn_incidenttype_requirementgroup_Select {
  createdby_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_incidenttype_requirementgroupid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { msdyn_incidenttype_requirementgroupid: string | null }, {  }>;
  msdyn_incidenttypeid_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { msdyn_incidenttypeid_guid: string | null }, { msdyn_incidenttypeid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { msdyn_name: string | null }, {  }>;
  msdyn_requirementgroupid_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { msdyn_requirementgroupid_guid: string | null }, { msdyn_requirementgroupid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { statecode: msdyn_incidenttype_requirementgroup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { statuscode: msdyn_incidenttype_requirementgroup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_incidenttype_requirementgroup_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_incidenttype_requirementgroup_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_incidenttype_requirementgroupid: XQW.Guid;
  msdyn_incidenttypeid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_requirementgroupid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_incidenttype_requirementgroup_statecode;
  statuscode: msdyn_incidenttype_requirementgroup_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_incidenttype_requirementgroup_Expand {
  createdby: WebExpand<msdyn_incidenttype_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_incidenttype_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_incidenttype_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_incidenttype_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_IncidenttypeId: WebExpand<msdyn_incidenttype_requirementgroup_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { msdyn_IncidenttypeId: msdyn_incidenttype_Result }>;
  msdyn_RequirementGroupId: WebExpand<msdyn_incidenttype_requirementgroup_Expand, msdyn_requirementgroup_Select, msdyn_requirementgroup_Filter, { msdyn_RequirementGroupId: msdyn_requirementgroup_Result }>;
  msdyn_incidenttype_requirementgroup_AsyncOperations: WebExpand<msdyn_incidenttype_requirementgroup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_incidenttype_requirementgroup_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_incidenttype_requirementgroup_BulkDeleteFailures: WebExpand<msdyn_incidenttype_requirementgroup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_incidenttype_requirementgroup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_incidenttype_requirementgroup_DuplicateBaseRecord: WebExpand<msdyn_incidenttype_requirementgroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttype_requirementgroup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttype_requirementgroup_DuplicateMatchingRecord: WebExpand<msdyn_incidenttype_requirementgroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttype_requirementgroup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttype_requirementgroup_MailboxTrackingFolders: WebExpand<msdyn_incidenttype_requirementgroup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_incidenttype_requirementgroup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_incidenttype_requirementgroup_PrincipalObjectAttributeAccesses: WebExpand<msdyn_incidenttype_requirementgroup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_incidenttype_requirementgroup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_incidenttype_requirementgroup_ProcessSession: WebExpand<msdyn_incidenttype_requirementgroup_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_incidenttype_requirementgroup_ProcessSession: ProcessSession_Result[] }>;
  msdyn_incidenttype_requirementgroup_SyncErrors: WebExpand<msdyn_incidenttype_requirementgroup_Expand, SyncError_Select, SyncError_Filter, { msdyn_incidenttype_requirementgroup_SyncErrors: SyncError_Result[] }>;
  msdyn_incidenttype_requirementgroup_UserEntityInstanceDatas: WebExpand<msdyn_incidenttype_requirementgroup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_incidenttype_requirementgroup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_incidenttype_requirementgroup_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_incidenttype_requirementgroup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_incidenttype_requirementgroup_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_incidenttype_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_incidenttype_requirementgroup_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_incidenttypeid_formatted?: string;
  msdyn_requirementgroupid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_incidenttype_requirementgroup_Result extends msdyn_incidenttype_requirementgroup_Base, msdyn_incidenttype_requirementgroup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_incidenttypeid_guid: string | null;
  msdyn_requirementgroupid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_incidenttype_requirementgroup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_IncidenttypeId: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  msdyn_RequirementGroupId: WebMappingRetrieve<msdyn_requirementgroup_Select,msdyn_requirementgroup_Expand,msdyn_requirementgroup_Filter,msdyn_requirementgroup_Fixed,msdyn_requirementgroup_Result,msdyn_requirementgroup_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_incidenttype_requirementgroup_RelatedMany {
  msdyn_incidenttype_requirementgroup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_incidenttype_requirementgroup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_incidenttype_requirementgroup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttype_requirementgroup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttype_requirementgroup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_incidenttype_requirementgroup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_incidenttype_requirementgroup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_incidenttype_requirementgroup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_incidenttype_requirementgroup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_incidenttype_requirementgroups: WebMappingRetrieve<msdyn_incidenttype_requirementgroup_Select,msdyn_incidenttype_requirementgroup_Expand,msdyn_incidenttype_requirementgroup_Filter,msdyn_incidenttype_requirementgroup_Fixed,msdyn_incidenttype_requirementgroup_Result,msdyn_incidenttype_requirementgroup_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_incidenttype_requirementgroups: WebMappingRelated<msdyn_incidenttype_requirementgroup_RelatedOne,msdyn_incidenttype_requirementgroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_incidenttype_requirementgroups: WebMappingCUDA<msdyn_incidenttype_requirementgroup_Create,msdyn_incidenttype_requirementgroup_Update,msdyn_incidenttype_requirementgroup_Select>;
}
