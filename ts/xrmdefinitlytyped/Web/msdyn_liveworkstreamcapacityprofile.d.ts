interface msdyn_liveworkstreamcapacityprofile_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_liveworkstreamcapacityprofileid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_liveworkstreamcapacityprofile_statecode | null;
  statuscode?: msdyn_liveworkstreamcapacityprofile_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_liveworkstreamcapacityprofile_Relationships {
  msdyn_capacityProfile_id?: msdyn_capacityprofile_Result | null;
  msdyn_liveworkstreamcapacityprofile_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_liveworkstreamcapacityprofile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_liveworkstreamcapacityprofile_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_liveworkstreamcapacityprofile_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_liveworkstreamcapacityprofile_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_liveworkstreamcapacityprofile_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_liveworkstreamcapacityprofile_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_liveworkstreamcapacityprofile_SyncErrors?: SyncError_Result[] | null;
  msdyn_liveworkstreamcapacityprofile_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_liveworkstreamcapacityprofile extends msdyn_liveworkstreamcapacityprofile_Base, msdyn_liveworkstreamcapacityprofile_Relationships {
  msdyn_capacityProfile_id_bind$msdyn_capacityprofiles?: string | null;
  msdyn_workstream_id_bind$msdyn_liveworkstreams?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_liveworkstreamcapacityprofile_Create extends msdyn_liveworkstreamcapacityprofile {
}
interface msdyn_liveworkstreamcapacityprofile_Update extends msdyn_liveworkstreamcapacityprofile {
}
interface msdyn_liveworkstreamcapacityprofile_Select {
  createdby_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_capacityprofile_id_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { msdyn_capacityprofile_id_guid: string | null }, { msdyn_capacityprofile_id_formatted?: string }>;
  msdyn_liveworkstreamcapacityprofileid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { msdyn_liveworkstreamcapacityprofileid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { msdyn_name: string | null }, {  }>;
  msdyn_workstream_id_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { msdyn_workstream_id_guid: string | null }, { msdyn_workstream_id_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { statecode: msdyn_liveworkstreamcapacityprofile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { statuscode: msdyn_liveworkstreamcapacityprofile_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_liveworkstreamcapacityprofile_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_liveworkstreamcapacityprofile_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_capacityprofile_id_guid: XQW.Guid;
  msdyn_liveworkstreamcapacityprofileid: XQW.Guid;
  msdyn_name: string;
  msdyn_workstream_id_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_liveworkstreamcapacityprofile_statecode;
  statuscode: msdyn_liveworkstreamcapacityprofile_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_liveworkstreamcapacityprofile_Expand {
  createdby: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_capacityProfile_id: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, msdyn_capacityprofile_Select, msdyn_capacityprofile_Filter, { msdyn_capacityProfile_id: msdyn_capacityprofile_Result }>;
  msdyn_liveworkstreamcapacityprofile_AsyncOperations: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_liveworkstreamcapacityprofile_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_liveworkstreamcapacityprofile_BulkDeleteFailures: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_liveworkstreamcapacityprofile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_liveworkstreamcapacityprofile_DuplicateBaseRecord: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_liveworkstreamcapacityprofile_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_liveworkstreamcapacityprofile_DuplicateMatchingRecord: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_liveworkstreamcapacityprofile_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_liveworkstreamcapacityprofile_MailboxTrackingFolders: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_liveworkstreamcapacityprofile_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_liveworkstreamcapacityprofile_PrincipalObjectAttributeAccesses: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_liveworkstreamcapacityprofile_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_liveworkstreamcapacityprofile_ProcessSession: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_liveworkstreamcapacityprofile_ProcessSession: ProcessSession_Result[] }>;
  msdyn_liveworkstreamcapacityprofile_SyncErrors: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, SyncError_Select, SyncError_Filter, { msdyn_liveworkstreamcapacityprofile_SyncErrors: SyncError_Result[] }>;
  msdyn_liveworkstreamcapacityprofile_UserEntityInstanceDatas: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_liveworkstreamcapacityprofile_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_workstream_id: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_workstream_id: msdyn_liveworkstream_Result }>;
  ownerid: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_liveworkstreamcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_liveworkstreamcapacityprofile_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_capacityprofile_id_formatted?: string;
  msdyn_workstream_id_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_liveworkstreamcapacityprofile_Result extends msdyn_liveworkstreamcapacityprofile_Base, msdyn_liveworkstreamcapacityprofile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_capacityprofile_id_guid: string | null;
  msdyn_workstream_id_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_liveworkstreamcapacityprofile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_capacityProfile_id: WebMappingRetrieve<msdyn_capacityprofile_Select,msdyn_capacityprofile_Expand,msdyn_capacityprofile_Filter,msdyn_capacityprofile_Fixed,msdyn_capacityprofile_Result,msdyn_capacityprofile_FormattedResult>;
  msdyn_workstream_id: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_liveworkstreamcapacityprofile_RelatedMany {
  msdyn_liveworkstreamcapacityprofile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_liveworkstreamcapacityprofile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_liveworkstreamcapacityprofile_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_liveworkstreamcapacityprofile_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_liveworkstreamcapacityprofile_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_liveworkstreamcapacityprofile_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_liveworkstreamcapacityprofile_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_liveworkstreamcapacityprofile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_liveworkstreamcapacityprofile_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_liveworkstreamcapacityprofiles: WebMappingRetrieve<msdyn_liveworkstreamcapacityprofile_Select,msdyn_liveworkstreamcapacityprofile_Expand,msdyn_liveworkstreamcapacityprofile_Filter,msdyn_liveworkstreamcapacityprofile_Fixed,msdyn_liveworkstreamcapacityprofile_Result,msdyn_liveworkstreamcapacityprofile_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_liveworkstreamcapacityprofiles: WebMappingRelated<msdyn_liveworkstreamcapacityprofile_RelatedOne,msdyn_liveworkstreamcapacityprofile_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_liveworkstreamcapacityprofiles: WebMappingCUDA<msdyn_liveworkstreamcapacityprofile_Create,msdyn_liveworkstreamcapacityprofile_Update,msdyn_liveworkstreamcapacityprofile_Select>;
}
