interface msdyn_skillattachmentruleitem_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_condition?: string | null;
  msdyn_description?: string | null;
  msdyn_expression?: string | null;
  msdyn_name?: string | null;
  msdyn_rulejson?: string | null;
  msdyn_skillattachmentruleitemid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_skillattachmentruleitem_statecode | null;
  statuscode?: msdyn_skillattachmentruleitem_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_skillattachmentruleitem_Relationships {
  msdyn_skillattachmentruleitem_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_skillattachmentruleitem_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_skillattachmentruleitem_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_skillattachmentruleitem_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_skillattachmentruleitem_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_skillattachmentruleitem_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_skillattachmentruleitem_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_skillattachmentruleitem_SyncErrors?: SyncError_Result[] | null;
  msdyn_skillattachmentruleitem_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_skillattachmentruleitem_target?: msdyn_skillattachmenttarget_Result[] | null;
}
interface msdyn_skillattachmentruleitem extends msdyn_skillattachmentruleitem_Base, msdyn_skillattachmentruleitem_Relationships {
  msdyn_liveworkstream_bind$msdyn_liveworkstreams?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_skillattachmentruleitem_Create extends msdyn_skillattachmentruleitem {
}
interface msdyn_skillattachmentruleitem_Update extends msdyn_skillattachmentruleitem {
}
interface msdyn_skillattachmentruleitem_Select {
  createdby_guid: WebAttribute<msdyn_skillattachmentruleitem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_skillattachmentruleitem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_skillattachmentruleitem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_skillattachmentruleitem_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_skillattachmentruleitem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_skillattachmentruleitem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_skillattachmentruleitem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_condition: WebAttribute<msdyn_skillattachmentruleitem_Select, { msdyn_condition: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_skillattachmentruleitem_Select, { msdyn_description: string | null }, {  }>;
  msdyn_expression: WebAttribute<msdyn_skillattachmentruleitem_Select, { msdyn_expression: string | null }, {  }>;
  msdyn_liveworkstream_guid: WebAttribute<msdyn_skillattachmentruleitem_Select, { msdyn_liveworkstream_guid: string | null }, { msdyn_liveworkstream_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_skillattachmentruleitem_Select, { msdyn_name: string | null }, {  }>;
  msdyn_rulejson: WebAttribute<msdyn_skillattachmentruleitem_Select, { msdyn_rulejson: string | null }, {  }>;
  msdyn_skillattachmentruleitemid: WebAttribute<msdyn_skillattachmentruleitem_Select, { msdyn_skillattachmentruleitemid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_skillattachmentruleitem_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_skillattachmentruleitem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_skillattachmentruleitem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_skillattachmentruleitem_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_skillattachmentruleitem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_skillattachmentruleitem_Select, { statecode: msdyn_skillattachmentruleitem_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_skillattachmentruleitem_Select, { statuscode: msdyn_skillattachmentruleitem_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_skillattachmentruleitem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_skillattachmentruleitem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_skillattachmentruleitem_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_skillattachmentruleitem_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_condition: string;
  msdyn_description: string;
  msdyn_expression: string;
  msdyn_liveworkstream_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_rulejson: string;
  msdyn_skillattachmentruleitemid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_skillattachmentruleitem_statecode;
  statuscode: msdyn_skillattachmentruleitem_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_skillattachmentruleitem_Expand {
  createdby: WebExpand<msdyn_skillattachmentruleitem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_skillattachmentruleitem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_skillattachmentruleitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_skillattachmentruleitem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_liveworkstream: WebExpand<msdyn_skillattachmentruleitem_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstream: msdyn_liveworkstream_Result }>;
  msdyn_skillattachmentruleitem_AsyncOperations: WebExpand<msdyn_skillattachmentruleitem_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_skillattachmentruleitem_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_skillattachmentruleitem_BulkDeleteFailures: WebExpand<msdyn_skillattachmentruleitem_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_skillattachmentruleitem_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_skillattachmentruleitem_DuplicateBaseRecord: WebExpand<msdyn_skillattachmentruleitem_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_skillattachmentruleitem_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_skillattachmentruleitem_DuplicateMatchingRecord: WebExpand<msdyn_skillattachmentruleitem_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_skillattachmentruleitem_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_skillattachmentruleitem_MailboxTrackingFolders: WebExpand<msdyn_skillattachmentruleitem_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_skillattachmentruleitem_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_skillattachmentruleitem_PrincipalObjectAttributeAccesses: WebExpand<msdyn_skillattachmentruleitem_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_skillattachmentruleitem_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_skillattachmentruleitem_ProcessSession: WebExpand<msdyn_skillattachmentruleitem_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_skillattachmentruleitem_ProcessSession: ProcessSession_Result[] }>;
  msdyn_skillattachmentruleitem_SyncErrors: WebExpand<msdyn_skillattachmentruleitem_Expand, SyncError_Select, SyncError_Filter, { msdyn_skillattachmentruleitem_SyncErrors: SyncError_Result[] }>;
  msdyn_skillattachmentruleitem_UserEntityInstanceDatas: WebExpand<msdyn_skillattachmentruleitem_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_skillattachmentruleitem_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_skillattachmentruleitem_target: WebExpand<msdyn_skillattachmentruleitem_Expand, msdyn_skillattachmenttarget_Select, msdyn_skillattachmenttarget_Filter, { msdyn_skillattachmentruleitem_target: msdyn_skillattachmenttarget_Result[] }>;
  ownerid: WebExpand<msdyn_skillattachmentruleitem_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_skillattachmentruleitem_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_skillattachmentruleitem_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_skillattachmentruleitem_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_skillattachmentruleitem_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_liveworkstream_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_skillattachmentruleitem_Result extends msdyn_skillattachmentruleitem_Base, msdyn_skillattachmentruleitem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_liveworkstream_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_skillattachmentruleitem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_liveworkstream: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_skillattachmentruleitem_RelatedMany {
  msdyn_skillattachmentruleitem_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_skillattachmentruleitem_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_skillattachmentruleitem_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_skillattachmentruleitem_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_skillattachmentruleitem_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_skillattachmentruleitem_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_skillattachmentruleitem_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_skillattachmentruleitem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_skillattachmentruleitem_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_skillattachmentruleitem_target: WebMappingRetrieve<msdyn_skillattachmenttarget_Select,msdyn_skillattachmenttarget_Expand,msdyn_skillattachmenttarget_Filter,msdyn_skillattachmenttarget_Fixed,msdyn_skillattachmenttarget_Result,msdyn_skillattachmenttarget_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_skillattachmentruleitems: WebMappingRetrieve<msdyn_skillattachmentruleitem_Select,msdyn_skillattachmentruleitem_Expand,msdyn_skillattachmentruleitem_Filter,msdyn_skillattachmentruleitem_Fixed,msdyn_skillattachmentruleitem_Result,msdyn_skillattachmentruleitem_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_skillattachmentruleitems: WebMappingRelated<msdyn_skillattachmentruleitem_RelatedOne,msdyn_skillattachmentruleitem_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_skillattachmentruleitems: WebMappingCUDA<msdyn_skillattachmentruleitem_Create,msdyn_skillattachmentruleitem_Update,msdyn_skillattachmentruleitem_Select>;
}
