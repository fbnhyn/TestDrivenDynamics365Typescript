interface msdyn_bookableresourceassociation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_bookableresourceassociationid?: string | null;
  msdyn_fromdate?: Date | null;
  msdyn_name?: string | null;
  msdyn_todate?: Date | null;
  msdyn_type?: msdyn_bookableresourceassociation_msdyn_type | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_bookableresourceassociation_statecode | null;
  statuscode?: msdyn_bookableresourceassociation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_bookableresourceassociation_Relationships {
  msdyn_Resource1?: BookableResource_Result | null;
  msdyn_Resource2?: BookableResource_Result | null;
  msdyn_bookableresourceassociation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_bookableresourceassociation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_bookableresourceassociation_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_bookableresourceassociation_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_bookableresourceassociation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_bookableresourceassociation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_bookableresourceassociation_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_bookableresourceassociation_SyncErrors?: SyncError_Result[] | null;
  msdyn_bookableresourceassociation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_bookableresourceassociation extends msdyn_bookableresourceassociation_Base, msdyn_bookableresourceassociation_Relationships {
  msdyn_Resource1_bind$bookableresources?: string | null;
  msdyn_Resource2_bind$bookableresources?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_bookableresourceassociation_Create extends msdyn_bookableresourceassociation {
}
interface msdyn_bookableresourceassociation_Update extends msdyn_bookableresourceassociation {
}
interface msdyn_bookableresourceassociation_Select {
  createdby_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_bookableresourceassociation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_bookableresourceassociation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_bookableresourceassociation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_bookableresourceassociationid: WebAttribute<msdyn_bookableresourceassociation_Select, { msdyn_bookableresourceassociationid: string | null }, {  }>;
  msdyn_fromdate: WebAttribute<msdyn_bookableresourceassociation_Select, { msdyn_fromdate: Date | null }, { msdyn_fromdate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_bookableresourceassociation_Select, { msdyn_name: string | null }, {  }>;
  msdyn_resource1_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { msdyn_resource1_guid: string | null }, { msdyn_resource1_formatted?: string }>;
  msdyn_resource2_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { msdyn_resource2_guid: string | null }, { msdyn_resource2_formatted?: string }>;
  msdyn_todate: WebAttribute<msdyn_bookableresourceassociation_Select, { msdyn_todate: Date | null }, { msdyn_todate_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_bookableresourceassociation_Select, { msdyn_type: msdyn_bookableresourceassociation_msdyn_type | null }, { msdyn_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_bookableresourceassociation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_bookableresourceassociation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_bookableresourceassociation_Select, { statecode: msdyn_bookableresourceassociation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_bookableresourceassociation_Select, { statuscode: msdyn_bookableresourceassociation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_bookableresourceassociation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_bookableresourceassociation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_bookableresourceassociation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_bookableresourceassociation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_bookableresourceassociationid: XQW.Guid;
  msdyn_fromdate: Date;
  msdyn_name: string;
  msdyn_resource1_guid: XQW.Guid;
  msdyn_resource2_guid: XQW.Guid;
  msdyn_todate: Date;
  msdyn_type: msdyn_bookableresourceassociation_msdyn_type;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_bookableresourceassociation_statecode;
  statuscode: msdyn_bookableresourceassociation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_bookableresourceassociation_Expand {
  createdby: WebExpand<msdyn_bookableresourceassociation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_bookableresourceassociation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_bookableresourceassociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_bookableresourceassociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Resource1: WebExpand<msdyn_bookableresourceassociation_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_Resource1: BookableResource_Result }>;
  msdyn_Resource2: WebExpand<msdyn_bookableresourceassociation_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_Resource2: BookableResource_Result }>;
  msdyn_bookableresourceassociation_AsyncOperations: WebExpand<msdyn_bookableresourceassociation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_bookableresourceassociation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_bookableresourceassociation_BulkDeleteFailures: WebExpand<msdyn_bookableresourceassociation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_bookableresourceassociation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_bookableresourceassociation_DuplicateBaseRecord: WebExpand<msdyn_bookableresourceassociation_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_bookableresourceassociation_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_bookableresourceassociation_DuplicateMatchingRecord: WebExpand<msdyn_bookableresourceassociation_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_bookableresourceassociation_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_bookableresourceassociation_MailboxTrackingFolders: WebExpand<msdyn_bookableresourceassociation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_bookableresourceassociation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_bookableresourceassociation_PrincipalObjectAttributeAccesses: WebExpand<msdyn_bookableresourceassociation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_bookableresourceassociation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_bookableresourceassociation_ProcessSession: WebExpand<msdyn_bookableresourceassociation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_bookableresourceassociation_ProcessSession: ProcessSession_Result[] }>;
  msdyn_bookableresourceassociation_SyncErrors: WebExpand<msdyn_bookableresourceassociation_Expand, SyncError_Select, SyncError_Filter, { msdyn_bookableresourceassociation_SyncErrors: SyncError_Result[] }>;
  msdyn_bookableresourceassociation_UserEntityInstanceDatas: WebExpand<msdyn_bookableresourceassociation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_bookableresourceassociation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_bookableresourceassociation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_bookableresourceassociation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_bookableresourceassociation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_bookableresourceassociation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_bookableresourceassociation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_fromdate_formatted?: string;
  msdyn_resource1_formatted?: string;
  msdyn_resource2_formatted?: string;
  msdyn_todate_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_bookableresourceassociation_Result extends msdyn_bookableresourceassociation_Base, msdyn_bookableresourceassociation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_resource1_guid: string | null;
  msdyn_resource2_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_bookableresourceassociation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Resource1: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_Resource2: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_bookableresourceassociation_RelatedMany {
  msdyn_bookableresourceassociation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_bookableresourceassociation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_bookableresourceassociation_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_bookableresourceassociation_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_bookableresourceassociation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_bookableresourceassociation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_bookableresourceassociation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_bookableresourceassociation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_bookableresourceassociation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_bookableresourceassociations: WebMappingRetrieve<msdyn_bookableresourceassociation_Select,msdyn_bookableresourceassociation_Expand,msdyn_bookableresourceassociation_Filter,msdyn_bookableresourceassociation_Fixed,msdyn_bookableresourceassociation_Result,msdyn_bookableresourceassociation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_bookableresourceassociations: WebMappingRelated<msdyn_bookableresourceassociation_RelatedOne,msdyn_bookableresourceassociation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_bookableresourceassociations: WebMappingCUDA<msdyn_bookableresourceassociation_Create,msdyn_bookableresourceassociation_Update,msdyn_bookableresourceassociation_Select>;
}
