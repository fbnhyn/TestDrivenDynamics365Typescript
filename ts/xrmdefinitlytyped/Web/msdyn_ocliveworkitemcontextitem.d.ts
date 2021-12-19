interface msdyn_ocliveworkitemcontextitem_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_isdisplayable?: boolean | null;
  msdyn_name?: string | null;
  msdyn_ocliveworkitemcontextitemid?: string | null;
  msdyn_value?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocliveworkitemcontextitem_statecode | null;
  statuscode?: msdyn_ocliveworkitemcontextitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocliveworkitemcontextitem_Relationships {
  msdyn_ocliveworkitemcontextitem_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocliveworkitemcontextitem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocliveworkitemcontextitem_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocliveworkitemcontextitem_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocliveworkitemcontextitem_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocliveworkitemcontextitem_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocliveworkitemcontextitem_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocliveworkitemcontextitem_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocliveworkitemcontextitem_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocliveworkitemcontextitem extends msdyn_ocliveworkitemcontextitem_Base, msdyn_ocliveworkitemcontextitem_Relationships {
  msdyn_ocliveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  msdyn_ocliveworkstreamcontextvariableid_bind$msdyn_ocliveworkstreamcontextvariables?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocliveworkitemcontextitem_Create extends msdyn_ocliveworkitemcontextitem {
}
interface msdyn_ocliveworkitemcontextitem_Update extends msdyn_ocliveworkitemcontextitem {
}
interface msdyn_ocliveworkitemcontextitem_Select {
  createdby_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_isdisplayable: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { msdyn_isdisplayable: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocliveworkitemcontextitemid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { msdyn_ocliveworkitemcontextitemid: string | null }, {  }>;
  msdyn_ocliveworkitemid_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { msdyn_ocliveworkitemid_guid: string | null }, { msdyn_ocliveworkitemid_formatted?: string }>;
  msdyn_ocliveworkstreamcontextvariableid_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { msdyn_ocliveworkstreamcontextvariableid_guid: string | null }, { msdyn_ocliveworkstreamcontextvariableid_formatted?: string }>;
  msdyn_value: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { msdyn_value: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { statecode: msdyn_ocliveworkitemcontextitem_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { statuscode: msdyn_ocliveworkitemcontextitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocliveworkitemcontextitem_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocliveworkitemcontextitem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_isdisplayable: boolean;
  msdyn_name: string;
  msdyn_ocliveworkitemcontextitemid: XQW.Guid;
  msdyn_ocliveworkitemid_guid: XQW.Guid;
  msdyn_ocliveworkstreamcontextvariableid_guid: XQW.Guid;
  msdyn_value: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocliveworkitemcontextitem_statecode;
  statuscode: msdyn_ocliveworkitemcontextitem_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocliveworkitemcontextitem_Expand {
  createdby: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocliveworkitemcontextitem_AsyncOperations: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocliveworkitemcontextitem_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocliveworkitemcontextitem_BulkDeleteFailures: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocliveworkitemcontextitem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocliveworkitemcontextitem_DuplicateBaseRecord: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocliveworkitemcontextitem_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocliveworkitemcontextitem_DuplicateMatchingRecord: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocliveworkitemcontextitem_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocliveworkitemcontextitem_MailboxTrackingFolders: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocliveworkitemcontextitem_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocliveworkitemcontextitem_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocliveworkitemcontextitem_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocliveworkitemcontextitem_ProcessSession: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocliveworkitemcontextitem_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocliveworkitemcontextitem_SyncErrors: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocliveworkitemcontextitem_SyncErrors: SyncError_Result[] }>;
  msdyn_ocliveworkitemcontextitem_UserEntityInstanceDatas: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocliveworkitemcontextitem_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocliveworkitemid: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_ocliveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_ocliveworkstreamcontextvariableid: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, msdyn_ocliveworkstreamcontextvariable_Select, msdyn_ocliveworkstreamcontextvariable_Filter, { msdyn_ocliveworkstreamcontextvariableid: msdyn_ocliveworkstreamcontextvariable_Result }>;
  ownerid: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocliveworkitemcontextitem_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocliveworkitemcontextitem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_ocliveworkitemid_formatted?: string;
  msdyn_ocliveworkstreamcontextvariableid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocliveworkitemcontextitem_Result extends msdyn_ocliveworkitemcontextitem_Base, msdyn_ocliveworkitemcontextitem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_ocliveworkitemid_guid: string | null;
  msdyn_ocliveworkstreamcontextvariableid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocliveworkitemcontextitem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ocliveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_ocliveworkstreamcontextvariableid: WebMappingRetrieve<msdyn_ocliveworkstreamcontextvariable_Select,msdyn_ocliveworkstreamcontextvariable_Expand,msdyn_ocliveworkstreamcontextvariable_Filter,msdyn_ocliveworkstreamcontextvariable_Fixed,msdyn_ocliveworkstreamcontextvariable_Result,msdyn_ocliveworkstreamcontextvariable_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocliveworkitemcontextitem_RelatedMany {
  msdyn_ocliveworkitemcontextitem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocliveworkitemcontextitem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocliveworkitemcontextitem_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocliveworkitemcontextitem_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocliveworkitemcontextitem_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocliveworkitemcontextitem_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocliveworkitemcontextitem_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocliveworkitemcontextitem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocliveworkitemcontextitem_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocliveworkitemcontextitems: WebMappingRetrieve<msdyn_ocliveworkitemcontextitem_Select,msdyn_ocliveworkitemcontextitem_Expand,msdyn_ocliveworkitemcontextitem_Filter,msdyn_ocliveworkitemcontextitem_Fixed,msdyn_ocliveworkitemcontextitem_Result,msdyn_ocliveworkitemcontextitem_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocliveworkitemcontextitems: WebMappingRelated<msdyn_ocliveworkitemcontextitem_RelatedOne,msdyn_ocliveworkitemcontextitem_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocliveworkitemcontextitems: WebMappingCUDA<msdyn_ocliveworkitemcontextitem_Create,msdyn_ocliveworkitemcontextitem_Update,msdyn_ocliveworkitemcontextitem_Select>;
}
