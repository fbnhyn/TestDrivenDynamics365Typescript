interface msdyn_ocliveworkitemcapacityprofile_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_ocliveworkitemcapacityprofileid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocliveworkitemcapacityprofile_statecode | null;
  statuscode?: msdyn_ocliveworkitemcapacityprofile_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocliveworkitemcapacityprofile_Relationships {
  msdyn_ocliveworkitemcapacityprofile_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocliveworkitemcapacityprofile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocliveworkitemcapacityprofile_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocliveworkitemcapacityprofile_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocliveworkitemcapacityprofile_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocliveworkitemcapacityprofile_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocliveworkitemcapacityprofile_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocliveworkitemcapacityprofile_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocliveworkitemcapacityprofile_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocliveworkitemcapacityprofile extends msdyn_ocliveworkitemcapacityprofile_Base, msdyn_ocliveworkitemcapacityprofile_Relationships {
  msdyn_capacityprofileid_bind$msdyn_capacityprofiles?: string | null;
  msdyn_ocliveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocliveworkitemcapacityprofile_Create extends msdyn_ocliveworkitemcapacityprofile {
}
interface msdyn_ocliveworkitemcapacityprofile_Update extends msdyn_ocliveworkitemcapacityprofile {
}
interface msdyn_ocliveworkitemcapacityprofile_Select {
  createdby_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_capacityprofileid_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { msdyn_capacityprofileid_guid: string | null }, { msdyn_capacityprofileid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocliveworkitemcapacityprofileid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { msdyn_ocliveworkitemcapacityprofileid: string | null }, {  }>;
  msdyn_ocliveworkitemid_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { msdyn_ocliveworkitemid_guid: string | null }, { msdyn_ocliveworkitemid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { statecode: msdyn_ocliveworkitemcapacityprofile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { statuscode: msdyn_ocliveworkitemcapacityprofile_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocliveworkitemcapacityprofile_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocliveworkitemcapacityprofile_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_capacityprofileid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocliveworkitemcapacityprofileid: XQW.Guid;
  msdyn_ocliveworkitemid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocliveworkitemcapacityprofile_statecode;
  statuscode: msdyn_ocliveworkitemcapacityprofile_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocliveworkitemcapacityprofile_Expand {
  createdby: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_capacityprofileid: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, msdyn_capacityprofile_Select, msdyn_capacityprofile_Filter, { msdyn_capacityprofileid: msdyn_capacityprofile_Result }>;
  msdyn_ocliveworkitemcapacityprofile_AsyncOperations: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocliveworkitemcapacityprofile_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocliveworkitemcapacityprofile_BulkDeleteFailures: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocliveworkitemcapacityprofile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocliveworkitemcapacityprofile_DuplicateBaseRecord: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocliveworkitemcapacityprofile_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocliveworkitemcapacityprofile_DuplicateMatchingRecord: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocliveworkitemcapacityprofile_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocliveworkitemcapacityprofile_MailboxTrackingFolders: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocliveworkitemcapacityprofile_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocliveworkitemcapacityprofile_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocliveworkitemcapacityprofile_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocliveworkitemcapacityprofile_ProcessSession: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocliveworkitemcapacityprofile_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocliveworkitemcapacityprofile_SyncErrors: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocliveworkitemcapacityprofile_SyncErrors: SyncError_Result[] }>;
  msdyn_ocliveworkitemcapacityprofile_UserEntityInstanceDatas: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocliveworkitemcapacityprofile_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocliveworkitemid: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_ocliveworkitemid: msdyn_ocliveworkitem_Result }>;
  ownerid: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocliveworkitemcapacityprofile_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocliveworkitemcapacityprofile_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_capacityprofileid_formatted?: string;
  msdyn_ocliveworkitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocliveworkitemcapacityprofile_Result extends msdyn_ocliveworkitemcapacityprofile_Base, msdyn_ocliveworkitemcapacityprofile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_capacityprofileid_guid: string | null;
  msdyn_ocliveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocliveworkitemcapacityprofile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_capacityprofileid: WebMappingRetrieve<msdyn_capacityprofile_Select,msdyn_capacityprofile_Expand,msdyn_capacityprofile_Filter,msdyn_capacityprofile_Fixed,msdyn_capacityprofile_Result,msdyn_capacityprofile_FormattedResult>;
  msdyn_ocliveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocliveworkitemcapacityprofile_RelatedMany {
  msdyn_ocliveworkitemcapacityprofile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocliveworkitemcapacityprofile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocliveworkitemcapacityprofile_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocliveworkitemcapacityprofile_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocliveworkitemcapacityprofile_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocliveworkitemcapacityprofile_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocliveworkitemcapacityprofile_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocliveworkitemcapacityprofile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocliveworkitemcapacityprofile_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocliveworkitemcapacityprofiles: WebMappingRetrieve<msdyn_ocliveworkitemcapacityprofile_Select,msdyn_ocliveworkitemcapacityprofile_Expand,msdyn_ocliveworkitemcapacityprofile_Filter,msdyn_ocliveworkitemcapacityprofile_Fixed,msdyn_ocliveworkitemcapacityprofile_Result,msdyn_ocliveworkitemcapacityprofile_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocliveworkitemcapacityprofiles: WebMappingRelated<msdyn_ocliveworkitemcapacityprofile_RelatedOne,msdyn_ocliveworkitemcapacityprofile_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocliveworkitemcapacityprofiles: WebMappingCUDA<msdyn_ocliveworkitemcapacityprofile_Create,msdyn_ocliveworkitemcapacityprofile_Update,msdyn_ocliveworkitemcapacityprofile_Select>;
}
