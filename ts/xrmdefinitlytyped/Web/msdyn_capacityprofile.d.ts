interface msdyn_capacityprofile_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_blockassignment?: boolean | null;
  msdyn_capacityprofileid?: string | null;
  msdyn_defaultmaxunits?: number | null;
  msdyn_name?: string | null;
  msdyn_resetduration?: msdyn_capacityprofile_msdyn_resetduration | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_capacityprofile_statecode | null;
  statuscode?: msdyn_capacityprofile_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_capacityprofile_Relationships {
  msdyn_capacityprofile_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_capacityprofile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_capacityprofile_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_capacityprofile_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_capacityprofile_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_capacityprofile_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_capacityprofile_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_capacityprofile_SyncErrors?: SyncError_Result[] | null;
  msdyn_capacityprofile_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_capacityprofile_msdyn_bookableresourcecapacityprofile?: msdyn_bookableresourcecapacityprofile_Result[] | null;
  msdyn_capacityprofile_msdyn_liveworkstreamcapacityprofileid?: msdyn_liveworkstreamcapacityprofile_Result[] | null;
  msdyn_capacityprofile_msdyn_ocliveworkitemcapacityprofile?: msdyn_ocliveworkitemcapacityprofile_Result[] | null;
  msdyn_capacityprofile_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid?: msdyn_rulesetdependencymapping_Result[] | null;
}
interface msdyn_capacityprofile extends msdyn_capacityprofile_Base, msdyn_capacityprofile_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_capacityprofile_Create extends msdyn_capacityprofile {
}
interface msdyn_capacityprofile_Update extends msdyn_capacityprofile {
}
interface msdyn_capacityprofile_Select {
  componentidunique: WebAttribute<msdyn_capacityprofile_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_capacityprofile_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_capacityprofile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_capacityprofile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_capacityprofile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_capacityprofile_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_capacityprofile_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_capacityprofile_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_capacityprofile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_capacityprofile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_capacityprofile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_blockassignment: WebAttribute<msdyn_capacityprofile_Select, { msdyn_blockassignment: boolean | null }, {  }>;
  msdyn_capacityprofileid: WebAttribute<msdyn_capacityprofile_Select, { msdyn_capacityprofileid: string | null }, {  }>;
  msdyn_defaultmaxunits: WebAttribute<msdyn_capacityprofile_Select, { msdyn_defaultmaxunits: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_capacityprofile_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resetduration: WebAttribute<msdyn_capacityprofile_Select, { msdyn_resetduration: msdyn_capacityprofile_msdyn_resetduration | null }, { msdyn_resetduration_formatted?: string }>;
  msdyn_uniquename: WebAttribute<msdyn_capacityprofile_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_capacityprofile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_capacityprofile_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_capacityprofile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_capacityprofile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_capacityprofile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_capacityprofile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_capacityprofile_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_capacityprofile_Select, { statecode: msdyn_capacityprofile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_capacityprofile_Select, { statuscode: msdyn_capacityprofile_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_capacityprofile_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_capacityprofile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_capacityprofile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_capacityprofile_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_capacityprofile_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_blockassignment: boolean;
  msdyn_capacityprofileid: XQW.Guid;
  msdyn_defaultmaxunits: number;
  msdyn_name: string;
  msdyn_resetduration: msdyn_capacityprofile_msdyn_resetduration;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_capacityprofile_statecode;
  statuscode: msdyn_capacityprofile_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_capacityprofile_Expand {
  createdby: WebExpand<msdyn_capacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_capacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_capacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_capacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_capacityprofile_AsyncOperations: WebExpand<msdyn_capacityprofile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_capacityprofile_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_capacityprofile_BulkDeleteFailures: WebExpand<msdyn_capacityprofile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_capacityprofile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_capacityprofile_DuplicateBaseRecord: WebExpand<msdyn_capacityprofile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_capacityprofile_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_capacityprofile_DuplicateMatchingRecord: WebExpand<msdyn_capacityprofile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_capacityprofile_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_capacityprofile_MailboxTrackingFolders: WebExpand<msdyn_capacityprofile_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_capacityprofile_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_capacityprofile_PrincipalObjectAttributeAccesses: WebExpand<msdyn_capacityprofile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_capacityprofile_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_capacityprofile_ProcessSession: WebExpand<msdyn_capacityprofile_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_capacityprofile_ProcessSession: ProcessSession_Result[] }>;
  msdyn_capacityprofile_SyncErrors: WebExpand<msdyn_capacityprofile_Expand, SyncError_Select, SyncError_Filter, { msdyn_capacityprofile_SyncErrors: SyncError_Result[] }>;
  msdyn_capacityprofile_UserEntityInstanceDatas: WebExpand<msdyn_capacityprofile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_capacityprofile_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_capacityprofile_msdyn_bookableresourcecapacityprofile: WebExpand<msdyn_capacityprofile_Expand, msdyn_bookableresourcecapacityprofile_Select, msdyn_bookableresourcecapacityprofile_Filter, { msdyn_capacityprofile_msdyn_bookableresourcecapacityprofile: msdyn_bookableresourcecapacityprofile_Result[] }>;
  msdyn_capacityprofile_msdyn_liveworkstreamcapacityprofileid: WebExpand<msdyn_capacityprofile_Expand, msdyn_liveworkstreamcapacityprofile_Select, msdyn_liveworkstreamcapacityprofile_Filter, { msdyn_capacityprofile_msdyn_liveworkstreamcapacityprofileid: msdyn_liveworkstreamcapacityprofile_Result[] }>;
  msdyn_capacityprofile_msdyn_ocliveworkitemcapacityprofile: WebExpand<msdyn_capacityprofile_Expand, msdyn_ocliveworkitemcapacityprofile_Select, msdyn_ocliveworkitemcapacityprofile_Filter, { msdyn_capacityprofile_msdyn_ocliveworkitemcapacityprofile: msdyn_ocliveworkitemcapacityprofile_Result[] }>;
  msdyn_capacityprofile_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebExpand<msdyn_capacityprofile_Expand, msdyn_rulesetdependencymapping_Select, msdyn_rulesetdependencymapping_Filter, { msdyn_capacityprofile_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: msdyn_rulesetdependencymapping_Result[] }>;
  ownerid: WebExpand<msdyn_capacityprofile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_capacityprofile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_capacityprofile_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_capacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_capacityprofile_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_resetduration_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_capacityprofile_Result extends msdyn_capacityprofile_Base, msdyn_capacityprofile_Relationships {
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
interface msdyn_capacityprofile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_capacityprofile_RelatedMany {
  msdyn_capacityprofile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_capacityprofile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_capacityprofile_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_capacityprofile_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_capacityprofile_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_capacityprofile_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_capacityprofile_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_capacityprofile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_capacityprofile_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_capacityprofile_msdyn_bookableresourcecapacityprofile: WebMappingRetrieve<msdyn_bookableresourcecapacityprofile_Select,msdyn_bookableresourcecapacityprofile_Expand,msdyn_bookableresourcecapacityprofile_Filter,msdyn_bookableresourcecapacityprofile_Fixed,msdyn_bookableresourcecapacityprofile_Result,msdyn_bookableresourcecapacityprofile_FormattedResult>;
  msdyn_capacityprofile_msdyn_liveworkstreamcapacityprofileid: WebMappingRetrieve<msdyn_liveworkstreamcapacityprofile_Select,msdyn_liveworkstreamcapacityprofile_Expand,msdyn_liveworkstreamcapacityprofile_Filter,msdyn_liveworkstreamcapacityprofile_Fixed,msdyn_liveworkstreamcapacityprofile_Result,msdyn_liveworkstreamcapacityprofile_FormattedResult>;
  msdyn_capacityprofile_msdyn_ocliveworkitemcapacityprofile: WebMappingRetrieve<msdyn_ocliveworkitemcapacityprofile_Select,msdyn_ocliveworkitemcapacityprofile_Expand,msdyn_ocliveworkitemcapacityprofile_Filter,msdyn_ocliveworkitemcapacityprofile_Fixed,msdyn_ocliveworkitemcapacityprofile_Result,msdyn_ocliveworkitemcapacityprofile_FormattedResult>;
  msdyn_capacityprofile_msdyn_rulesetdependencymapping_msdyn_referencedpolymorphicentityid: WebMappingRetrieve<msdyn_rulesetdependencymapping_Select,msdyn_rulesetdependencymapping_Expand,msdyn_rulesetdependencymapping_Filter,msdyn_rulesetdependencymapping_Fixed,msdyn_rulesetdependencymapping_Result,msdyn_rulesetdependencymapping_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_capacityprofiles: WebMappingRetrieve<msdyn_capacityprofile_Select,msdyn_capacityprofile_Expand,msdyn_capacityprofile_Filter,msdyn_capacityprofile_Fixed,msdyn_capacityprofile_Result,msdyn_capacityprofile_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_capacityprofiles: WebMappingRelated<msdyn_capacityprofile_RelatedOne,msdyn_capacityprofile_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_capacityprofiles: WebMappingCUDA<msdyn_capacityprofile_Create,msdyn_capacityprofile_Update,msdyn_capacityprofile_Select>;
}
