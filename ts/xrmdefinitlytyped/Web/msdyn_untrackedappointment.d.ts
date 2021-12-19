interface msdyn_untrackedappointment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_untrackedappointmentid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_untrackedappointment_statecode | null;
  statuscode?: msdyn_untrackedappointment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_untrackedappointment_Relationships {
  msdyn_untrackedappointment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_untrackedappointment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_untrackedappointment_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_untrackedappointment_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_untrackedappointment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_untrackedappointment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_untrackedappointment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_untrackedappointment_SyncErrors?: SyncError_Result[] | null;
  msdyn_untrackedappointment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_untrackedappointment extends msdyn_untrackedappointment_Base, msdyn_untrackedappointment_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_untrackedappointment_Create extends msdyn_untrackedappointment {
}
interface msdyn_untrackedappointment_Update extends msdyn_untrackedappointment {
}
interface msdyn_untrackedappointment_Select {
  createdby_guid: WebAttribute<msdyn_untrackedappointment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_untrackedappointment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_untrackedappointment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_untrackedappointment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_untrackedappointment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_untrackedappointment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_untrackedappointment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_untrackedappointment_Select, { msdyn_name: string | null }, {  }>;
  msdyn_untrackedappointmentid: WebAttribute<msdyn_untrackedappointment_Select, { msdyn_untrackedappointmentid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_untrackedappointment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_untrackedappointment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_untrackedappointment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_untrackedappointment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_untrackedappointment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_untrackedappointment_Select, { statecode: msdyn_untrackedappointment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_untrackedappointment_Select, { statuscode: msdyn_untrackedappointment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_untrackedappointment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_untrackedappointment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_untrackedappointment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_untrackedappointment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_untrackedappointmentid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_untrackedappointment_statecode;
  statuscode: msdyn_untrackedappointment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_untrackedappointment_Expand {
  createdby: WebExpand<msdyn_untrackedappointment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_untrackedappointment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_untrackedappointment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_untrackedappointment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_untrackedappointment_AsyncOperations: WebExpand<msdyn_untrackedappointment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_untrackedappointment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_untrackedappointment_BulkDeleteFailures: WebExpand<msdyn_untrackedappointment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_untrackedappointment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_untrackedappointment_DuplicateBaseRecord: WebExpand<msdyn_untrackedappointment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_untrackedappointment_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_untrackedappointment_DuplicateMatchingRecord: WebExpand<msdyn_untrackedappointment_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_untrackedappointment_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_untrackedappointment_MailboxTrackingFolders: WebExpand<msdyn_untrackedappointment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_untrackedappointment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_untrackedappointment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_untrackedappointment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_untrackedappointment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_untrackedappointment_ProcessSession: WebExpand<msdyn_untrackedappointment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_untrackedappointment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_untrackedappointment_SyncErrors: WebExpand<msdyn_untrackedappointment_Expand, SyncError_Select, SyncError_Filter, { msdyn_untrackedappointment_SyncErrors: SyncError_Result[] }>;
  msdyn_untrackedappointment_UserEntityInstanceDatas: WebExpand<msdyn_untrackedappointment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_untrackedappointment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_untrackedappointment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_untrackedappointment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_untrackedappointment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_untrackedappointment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_untrackedappointment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
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
interface msdyn_untrackedappointment_Result extends msdyn_untrackedappointment_Base, msdyn_untrackedappointment_Relationships {
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
interface msdyn_untrackedappointment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_untrackedappointment_RelatedMany {
  msdyn_untrackedappointment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_untrackedappointment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_untrackedappointment_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_untrackedappointment_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_untrackedappointment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_untrackedappointment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_untrackedappointment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_untrackedappointment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_untrackedappointment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_untrackedappointments: WebMappingRetrieve<msdyn_untrackedappointment_Select,msdyn_untrackedappointment_Expand,msdyn_untrackedappointment_Filter,msdyn_untrackedappointment_Fixed,msdyn_untrackedappointment_Result,msdyn_untrackedappointment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_untrackedappointments: WebMappingRelated<msdyn_untrackedappointment_RelatedOne,msdyn_untrackedappointment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_untrackedappointments: WebMappingCUDA<msdyn_untrackedappointment_Create,msdyn_untrackedappointment_Update,msdyn_untrackedappointment_Select>;
}
