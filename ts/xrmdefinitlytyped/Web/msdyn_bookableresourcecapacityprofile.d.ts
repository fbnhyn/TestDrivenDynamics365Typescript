interface msdyn_bookableresourcecapacityprofile_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_bookableresourcecapacityprofileid?: string | null;
  msdyn_maxunits?: number | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_bookableresourcecapacityprofile_statecode | null;
  statuscode?: msdyn_bookableresourcecapacityprofile_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_bookableresourcecapacityprofile_Relationships {
  msdyn_bookableresourcecapacityprofile_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_bookableresourcecapacityprofile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_bookableresourcecapacityprofile_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_bookableresourcecapacityprofile_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_bookableresourcecapacityprofile_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_bookableresourcecapacityprofile_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_bookableresourcecapacityprofile_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_bookableresourcecapacityprofile_SyncErrors?: SyncError_Result[] | null;
  msdyn_bookableresourcecapacityprofile_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_bookableresourcecapacityprofile extends msdyn_bookableresourcecapacityprofile_Base, msdyn_bookableresourcecapacityprofile_Relationships {
  msdyn_bookableresourceid_bind$bookableresources?: string | null;
  msdyn_capacityprofileid_bind$msdyn_capacityprofiles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_bookableresourcecapacityprofile_Create extends msdyn_bookableresourcecapacityprofile {
}
interface msdyn_bookableresourcecapacityprofile_Update extends msdyn_bookableresourcecapacityprofile {
}
interface msdyn_bookableresourcecapacityprofile_Select {
  createdby_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresourcecapacityprofileid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { msdyn_bookableresourcecapacityprofileid: string | null }, {  }>;
  msdyn_bookableresourceid_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { msdyn_bookableresourceid_guid: string | null }, { msdyn_bookableresourceid_formatted?: string }>;
  msdyn_capacityprofileid_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { msdyn_capacityprofileid_guid: string | null }, { msdyn_capacityprofileid_formatted?: string }>;
  msdyn_maxunits: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { msdyn_maxunits: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { statecode: msdyn_bookableresourcecapacityprofile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { statuscode: msdyn_bookableresourcecapacityprofile_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_bookableresourcecapacityprofile_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_bookableresourcecapacityprofile_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresourcecapacityprofileid: XQW.Guid;
  msdyn_bookableresourceid_guid: XQW.Guid;
  msdyn_capacityprofileid_guid: XQW.Guid;
  msdyn_maxunits: number;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_bookableresourcecapacityprofile_statecode;
  statuscode: msdyn_bookableresourcecapacityprofile_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_bookableresourcecapacityprofile_Expand {
  createdby: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_bookableresourcecapacityprofile_AsyncOperations: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_bookableresourcecapacityprofile_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_bookableresourcecapacityprofile_BulkDeleteFailures: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_bookableresourcecapacityprofile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_bookableresourcecapacityprofile_DuplicateBaseRecord: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_bookableresourcecapacityprofile_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_bookableresourcecapacityprofile_DuplicateMatchingRecord: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_bookableresourcecapacityprofile_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_bookableresourcecapacityprofile_MailboxTrackingFolders: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_bookableresourcecapacityprofile_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_bookableresourcecapacityprofile_PrincipalObjectAttributeAccesses: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_bookableresourcecapacityprofile_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_bookableresourcecapacityprofile_ProcessSession: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_bookableresourcecapacityprofile_ProcessSession: ProcessSession_Result[] }>;
  msdyn_bookableresourcecapacityprofile_SyncErrors: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, SyncError_Select, SyncError_Filter, { msdyn_bookableresourcecapacityprofile_SyncErrors: SyncError_Result[] }>;
  msdyn_bookableresourcecapacityprofile_UserEntityInstanceDatas: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_bookableresourcecapacityprofile_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_bookableresourceid: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_bookableresourceid: BookableResource_Result }>;
  msdyn_capacityprofileid: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, msdyn_capacityprofile_Select, msdyn_capacityprofile_Filter, { msdyn_capacityprofileid: msdyn_capacityprofile_Result }>;
  ownerid: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_bookableresourcecapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_bookableresourcecapacityprofile_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_bookableresourceid_formatted?: string;
  msdyn_capacityprofileid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_bookableresourcecapacityprofile_Result extends msdyn_bookableresourcecapacityprofile_Base, msdyn_bookableresourcecapacityprofile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_bookableresourceid_guid: string | null;
  msdyn_capacityprofileid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_bookableresourcecapacityprofile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_bookableresourceid: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_capacityprofileid: WebMappingRetrieve<msdyn_capacityprofile_Select,msdyn_capacityprofile_Expand,msdyn_capacityprofile_Filter,msdyn_capacityprofile_Fixed,msdyn_capacityprofile_Result,msdyn_capacityprofile_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_bookableresourcecapacityprofile_RelatedMany {
  msdyn_bookableresourcecapacityprofile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_bookableresourcecapacityprofile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_bookableresourcecapacityprofile_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_bookableresourcecapacityprofile_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_bookableresourcecapacityprofile_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_bookableresourcecapacityprofile_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_bookableresourcecapacityprofile_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_bookableresourcecapacityprofile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_bookableresourcecapacityprofile_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_bookableresourcecapacityprofiles: WebMappingRetrieve<msdyn_bookableresourcecapacityprofile_Select,msdyn_bookableresourcecapacityprofile_Expand,msdyn_bookableresourcecapacityprofile_Filter,msdyn_bookableresourcecapacityprofile_Fixed,msdyn_bookableresourcecapacityprofile_Result,msdyn_bookableresourcecapacityprofile_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_bookableresourcecapacityprofiles: WebMappingRelated<msdyn_bookableresourcecapacityprofile_RelatedOne,msdyn_bookableresourcecapacityprofile_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_bookableresourcecapacityprofiles: WebMappingCUDA<msdyn_bookableresourcecapacityprofile_Create,msdyn_bookableresourcecapacityprofile_Update,msdyn_bookableresourcecapacityprofile_Select>;
}
