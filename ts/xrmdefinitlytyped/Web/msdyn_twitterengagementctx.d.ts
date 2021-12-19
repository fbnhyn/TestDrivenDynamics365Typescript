interface msdyn_twitterengagementctx_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_customername?: string | null;
  msdyn_followerscount?: string | null;
  msdyn_friendscount?: string | null;
  msdyn_handleid?: string | null;
  msdyn_name?: string | null;
  msdyn_ocfollowercount?: number | null;
  msdyn_ocfriendcount?: number | null;
  msdyn_screenname?: string | null;
  msdyn_twitterengagementctxid?: string | null;
  msdyn_twitterengagementid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_twitterengagementctx_statecode | null;
  statuscode?: msdyn_twitterengagementctx_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_twitterengagementctx_Relationships {
  msdyn_twitterengagementctx_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_twitterengagementctx_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_twitterengagementctx_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_twitterengagementctx_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_twitterengagementctx_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_twitterengagementctx_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_twitterengagementctx_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_twitterengagementctx_SyncErrors?: SyncError_Result[] | null;
  msdyn_twitterengagementctx_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_twitterengagementctx extends msdyn_twitterengagementctx_Base, msdyn_twitterengagementctx_Relationships {
  msdyn_liveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_twitterengagementctx_Create extends msdyn_twitterengagementctx {
}
interface msdyn_twitterengagementctx_Update extends msdyn_twitterengagementctx {
}
interface msdyn_twitterengagementctx_Select {
  createdby_guid: WebAttribute<msdyn_twitterengagementctx_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_twitterengagementctx_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_twitterengagementctx_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_twitterengagementctx_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_twitterengagementctx_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_twitterengagementctx_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_twitterengagementctx_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_customername: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_customername: string | null }, {  }>;
  msdyn_followerscount: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_followerscount: string | null }, {  }>;
  msdyn_friendscount: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_friendscount: string | null }, {  }>;
  msdyn_handleid: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_handleid: string | null }, {  }>;
  msdyn_liveworkitemid_guid: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_liveworkitemid_guid: string | null }, { msdyn_liveworkitemid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocfollowercount: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_ocfollowercount: number | null }, {  }>;
  msdyn_ocfriendcount: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_ocfriendcount: number | null }, {  }>;
  msdyn_screenname: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_screenname: string | null }, {  }>;
  msdyn_twitterengagementctxid: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_twitterengagementctxid: string | null }, {  }>;
  msdyn_twitterengagementid: WebAttribute<msdyn_twitterengagementctx_Select, { msdyn_twitterengagementid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_twitterengagementctx_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_twitterengagementctx_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_twitterengagementctx_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_twitterengagementctx_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_twitterengagementctx_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_twitterengagementctx_Select, { statecode: msdyn_twitterengagementctx_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_twitterengagementctx_Select, { statuscode: msdyn_twitterengagementctx_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_twitterengagementctx_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_twitterengagementctx_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_twitterengagementctx_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_twitterengagementctx_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_customername: string;
  msdyn_followerscount: string;
  msdyn_friendscount: string;
  msdyn_handleid: string;
  msdyn_liveworkitemid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocfollowercount: number;
  msdyn_ocfriendcount: number;
  msdyn_screenname: string;
  msdyn_twitterengagementctxid: XQW.Guid;
  msdyn_twitterengagementid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_twitterengagementctx_statecode;
  statuscode: msdyn_twitterengagementctx_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_twitterengagementctx_Expand {
  createdby: WebExpand<msdyn_twitterengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_twitterengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_twitterengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_twitterengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkitemid: WebExpand<msdyn_twitterengagementctx_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_liveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_twitterengagementctx_AsyncOperations: WebExpand<msdyn_twitterengagementctx_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_twitterengagementctx_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_twitterengagementctx_BulkDeleteFailures: WebExpand<msdyn_twitterengagementctx_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_twitterengagementctx_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_twitterengagementctx_DuplicateBaseRecord: WebExpand<msdyn_twitterengagementctx_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_twitterengagementctx_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_twitterengagementctx_DuplicateMatchingRecord: WebExpand<msdyn_twitterengagementctx_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_twitterengagementctx_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_twitterengagementctx_MailboxTrackingFolders: WebExpand<msdyn_twitterengagementctx_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_twitterengagementctx_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_twitterengagementctx_PrincipalObjectAttributeAccesses: WebExpand<msdyn_twitterengagementctx_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_twitterengagementctx_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_twitterengagementctx_ProcessSession: WebExpand<msdyn_twitterengagementctx_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_twitterengagementctx_ProcessSession: ProcessSession_Result[] }>;
  msdyn_twitterengagementctx_SyncErrors: WebExpand<msdyn_twitterengagementctx_Expand, SyncError_Select, SyncError_Filter, { msdyn_twitterengagementctx_SyncErrors: SyncError_Result[] }>;
  msdyn_twitterengagementctx_UserEntityInstanceDatas: WebExpand<msdyn_twitterengagementctx_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_twitterengagementctx_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_twitterengagementctx_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_twitterengagementctx_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_twitterengagementctx_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_twitterengagementctx_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_twitterengagementctx_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_twitterengagementctx_Result extends msdyn_twitterengagementctx_Base, msdyn_twitterengagementctx_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_twitterengagementctx_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_liveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_twitterengagementctx_RelatedMany {
  msdyn_twitterengagementctx_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_twitterengagementctx_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_twitterengagementctx_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_twitterengagementctx_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_twitterengagementctx_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_twitterengagementctx_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_twitterengagementctx_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_twitterengagementctx_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_twitterengagementctx_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_twitterengagementctxes: WebMappingRetrieve<msdyn_twitterengagementctx_Select,msdyn_twitterengagementctx_Expand,msdyn_twitterengagementctx_Filter,msdyn_twitterengagementctx_Fixed,msdyn_twitterengagementctx_Result,msdyn_twitterengagementctx_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_twitterengagementctxes: WebMappingRelated<msdyn_twitterengagementctx_RelatedOne,msdyn_twitterengagementctx_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_twitterengagementctxes: WebMappingCUDA<msdyn_twitterengagementctx_Create,msdyn_twitterengagementctx_Update,msdyn_twitterengagementctx_Select>;
}
