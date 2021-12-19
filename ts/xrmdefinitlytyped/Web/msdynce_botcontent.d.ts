interface msdynce_botcontent_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdynce_autonumber?: string | null;
  msdynce_botcontentid?: string | null;
  msdynce_botid?: string | null;
  msdynce_state?: msdynce_contentstate | null;
  overriddencreatedon?: Date | null;
  statecode?: msdynce_botcontent_statecode | null;
  statuscode?: msdynce_botcontent_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdynce_botcontent_Relationships {
  msdynce_botcontent_AsyncOperations?: AsyncOperation_Result[] | null;
  msdynce_botcontent_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdynce_botcontent_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdynce_botcontent_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdynce_botcontent_ProcessSession?: ProcessSession_Result[] | null;
  msdynce_botcontent_SyncErrors?: SyncError_Result[] | null;
  msdynce_botcontent_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdynce_botcontent extends msdynce_botcontent_Base, msdynce_botcontent_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdynce_botcontent_Create extends msdynce_botcontent {
}
interface msdynce_botcontent_Update extends msdynce_botcontent {
}
interface msdynce_botcontent_Select {
  createdby_guid: WebAttribute<msdynce_botcontent_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdynce_botcontent_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdynce_botcontent_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdynce_botcontent_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdynce_botcontent_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdynce_botcontent_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdynce_botcontent_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdynce_autonumber: WebAttribute<msdynce_botcontent_Select, { msdynce_autonumber: string | null }, {  }>;
  msdynce_botcontentid: WebAttribute<msdynce_botcontent_Select, { msdynce_botcontentid: string | null }, {  }>;
  msdynce_botid: WebAttribute<msdynce_botcontent_Select, { msdynce_botid: string | null }, {  }>;
  msdynce_state: WebAttribute<msdynce_botcontent_Select, { msdynce_state: msdynce_contentstate | null }, { msdynce_state_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdynce_botcontent_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdynce_botcontent_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdynce_botcontent_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdynce_botcontent_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdynce_botcontent_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdynce_botcontent_Select, { statecode: msdynce_botcontent_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdynce_botcontent_Select, { statuscode: msdynce_botcontent_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdynce_botcontent_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdynce_botcontent_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdynce_botcontent_Select, { versionnumber: number | null }, {  }>;
}
interface msdynce_botcontent_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdynce_autonumber: string;
  msdynce_botcontentid: XQW.Guid;
  msdynce_botid: string;
  msdynce_state: msdynce_contentstate;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdynce_botcontent_statecode;
  statuscode: msdynce_botcontent_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdynce_botcontent_Expand {
  createdby: WebExpand<msdynce_botcontent_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdynce_botcontent_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdynce_botcontent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdynce_botcontent_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdynce_botcontent_AsyncOperations: WebExpand<msdynce_botcontent_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdynce_botcontent_AsyncOperations: AsyncOperation_Result[] }>;
  msdynce_botcontent_BulkDeleteFailures: WebExpand<msdynce_botcontent_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdynce_botcontent_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdynce_botcontent_MailboxTrackingFolders: WebExpand<msdynce_botcontent_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdynce_botcontent_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdynce_botcontent_PrincipalObjectAttributeAccesses: WebExpand<msdynce_botcontent_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdynce_botcontent_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdynce_botcontent_ProcessSession: WebExpand<msdynce_botcontent_Expand, ProcessSession_Select, ProcessSession_Filter, { msdynce_botcontent_ProcessSession: ProcessSession_Result[] }>;
  msdynce_botcontent_SyncErrors: WebExpand<msdynce_botcontent_Expand, SyncError_Select, SyncError_Filter, { msdynce_botcontent_SyncErrors: SyncError_Result[] }>;
  msdynce_botcontent_UserEntityInstanceDatas: WebExpand<msdynce_botcontent_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdynce_botcontent_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdynce_botcontent_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdynce_botcontent_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdynce_botcontent_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdynce_botcontent_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdynce_botcontent_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdynce_state_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdynce_botcontent_Result extends msdynce_botcontent_Base, msdynce_botcontent_Relationships {
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
interface msdynce_botcontent_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdynce_botcontent_RelatedMany {
  msdynce_botcontent_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdynce_botcontent_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdynce_botcontent_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdynce_botcontent_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdynce_botcontent_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdynce_botcontent_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdynce_botcontent_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdynce_botcontents: WebMappingRetrieve<msdynce_botcontent_Select,msdynce_botcontent_Expand,msdynce_botcontent_Filter,msdynce_botcontent_Fixed,msdynce_botcontent_Result,msdynce_botcontent_FormattedResult>;
}
interface WebEntitiesRelated {
  msdynce_botcontents: WebMappingRelated<msdynce_botcontent_RelatedOne,msdynce_botcontent_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdynce_botcontents: WebMappingCUDA<msdynce_botcontent_Create,msdynce_botcontent_Update,msdynce_botcontent_Select>;
}
