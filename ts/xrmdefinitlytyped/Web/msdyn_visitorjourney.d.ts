interface msdyn_visitorjourney_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_displaytitle?: string | null;
  msdyn_endtime?: Date | null;
  msdyn_starttime?: Date | null;
  msdyn_type?: msdyn_visitorjourneytype | null;
  msdyn_url?: string | null;
  msdyn_visitorjourneyid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_visitorjourney_statecode | null;
  statuscode?: msdyn_visitorjourney_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_visitorjourney_Relationships {
  msdyn_visitorjourney_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_visitorjourney_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_visitorjourney_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_visitorjourney_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_visitorjourney_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_visitorjourney_SyncErrors?: SyncError_Result[] | null;
  msdyn_visitorjourney_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_visitorjourney extends msdyn_visitorjourney_Base, msdyn_visitorjourney_Relationships {
  msdyn_ocliveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_visitorjourney_Create extends msdyn_visitorjourney {
}
interface msdyn_visitorjourney_Update extends msdyn_visitorjourney {
}
interface msdyn_visitorjourney_Select {
  createdby_guid: WebAttribute<msdyn_visitorjourney_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_visitorjourney_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_visitorjourney_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_visitorjourney_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_visitorjourney_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_visitorjourney_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_visitorjourney_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_displaytitle: WebAttribute<msdyn_visitorjourney_Select, { msdyn_displaytitle: string | null }, {  }>;
  msdyn_endtime: WebAttribute<msdyn_visitorjourney_Select, { msdyn_endtime: Date | null }, { msdyn_endtime_formatted?: string }>;
  msdyn_ocliveworkitemid_guid: WebAttribute<msdyn_visitorjourney_Select, { msdyn_ocliveworkitemid_guid: string | null }, { msdyn_ocliveworkitemid_formatted?: string }>;
  msdyn_starttime: WebAttribute<msdyn_visitorjourney_Select, { msdyn_starttime: Date | null }, { msdyn_starttime_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_visitorjourney_Select, { msdyn_type: msdyn_visitorjourneytype | null }, { msdyn_type_formatted?: string }>;
  msdyn_url: WebAttribute<msdyn_visitorjourney_Select, { msdyn_url: string | null }, {  }>;
  msdyn_visitorjourneyid: WebAttribute<msdyn_visitorjourney_Select, { msdyn_visitorjourneyid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_visitorjourney_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_visitorjourney_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_visitorjourney_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_visitorjourney_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_visitorjourney_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_visitorjourney_Select, { statecode: msdyn_visitorjourney_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_visitorjourney_Select, { statuscode: msdyn_visitorjourney_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_visitorjourney_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_visitorjourney_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_visitorjourney_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_visitorjourney_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_displaytitle: string;
  msdyn_endtime: Date;
  msdyn_ocliveworkitemid_guid: XQW.Guid;
  msdyn_starttime: Date;
  msdyn_type: msdyn_visitorjourneytype;
  msdyn_url: string;
  msdyn_visitorjourneyid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_visitorjourney_statecode;
  statuscode: msdyn_visitorjourney_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_visitorjourney_Expand {
  createdby: WebExpand<msdyn_visitorjourney_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_visitorjourney_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_visitorjourney_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_visitorjourney_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocliveworkitemid: WebExpand<msdyn_visitorjourney_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_ocliveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_visitorjourney_AsyncOperations: WebExpand<msdyn_visitorjourney_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_visitorjourney_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_visitorjourney_BulkDeleteFailures: WebExpand<msdyn_visitorjourney_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_visitorjourney_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_visitorjourney_MailboxTrackingFolders: WebExpand<msdyn_visitorjourney_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_visitorjourney_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_visitorjourney_PrincipalObjectAttributeAccesses: WebExpand<msdyn_visitorjourney_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_visitorjourney_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_visitorjourney_ProcessSession: WebExpand<msdyn_visitorjourney_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_visitorjourney_ProcessSession: ProcessSession_Result[] }>;
  msdyn_visitorjourney_SyncErrors: WebExpand<msdyn_visitorjourney_Expand, SyncError_Select, SyncError_Filter, { msdyn_visitorjourney_SyncErrors: SyncError_Result[] }>;
  msdyn_visitorjourney_UserEntityInstanceDatas: WebExpand<msdyn_visitorjourney_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_visitorjourney_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_visitorjourney_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_visitorjourney_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_visitorjourney_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_visitorjourney_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_visitorjourney_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_endtime_formatted?: string;
  msdyn_ocliveworkitemid_formatted?: string;
  msdyn_starttime_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_visitorjourney_Result extends msdyn_visitorjourney_Base, msdyn_visitorjourney_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_ocliveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_visitorjourney_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ocliveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_visitorjourney_RelatedMany {
  msdyn_visitorjourney_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_visitorjourney_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_visitorjourney_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_visitorjourney_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_visitorjourney_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_visitorjourney_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_visitorjourney_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_visitorjourneies: WebMappingRetrieve<msdyn_visitorjourney_Select,msdyn_visitorjourney_Expand,msdyn_visitorjourney_Filter,msdyn_visitorjourney_Fixed,msdyn_visitorjourney_Result,msdyn_visitorjourney_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_visitorjourneies: WebMappingRelated<msdyn_visitorjourney_RelatedOne,msdyn_visitorjourney_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_visitorjourneies: WebMappingCUDA<msdyn_visitorjourney_Create,msdyn_visitorjourney_Update,msdyn_visitorjourney_Select>;
}
