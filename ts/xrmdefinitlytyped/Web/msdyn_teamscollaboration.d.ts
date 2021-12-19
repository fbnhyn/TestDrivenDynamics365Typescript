interface msdyn_TeamsCollaboration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_appid?: string | null;
  msdyn_channelfolderrelativeurl?: string | null;
  msdyn_channelid?: string | null;
  msdyn_channelname?: string | null;
  msdyn_channeltype?: string | null;
  msdyn_contenturl?: string | null;
  msdyn_groupid?: string | null;
  msdyn_pipedentityid?: string | null;
  msdyn_teamid?: string | null;
  msdyn_teamname?: string | null;
  msdyn_teamscollaborationid?: string | null;
  msdyn_teamsiteurl?: string | null;
  msdyn_tenantid?: string | null;
  msdyn_weburl?: string | null;
  overriddencreatedon?: Date | null;
  regardingobjectid?: string | null;
  regardingobjecttypecode?: number | null;
  regardingobjecttypename?: string | null;
  statecode?: msdyn_teamscollaboration_statecode | null;
  statuscode?: msdyn_teamscollaboration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_TeamsCollaboration_Relationships {
  msdyn_teamscollaboration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_teamscollaboration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_teamscollaboration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_teamscollaboration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_teamscollaboration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_teamscollaboration_SyncErrors?: SyncError_Result[] | null;
  msdyn_teamscollaboration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_TeamsCollaboration extends msdyn_TeamsCollaboration_Base, msdyn_TeamsCollaboration_Relationships {
}
interface msdyn_TeamsCollaboration_Create extends msdyn_TeamsCollaboration {
}
interface msdyn_TeamsCollaboration_Update extends msdyn_TeamsCollaboration {
}
interface msdyn_TeamsCollaboration_Select {
  createdby_guid: WebAttribute<msdyn_TeamsCollaboration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_TeamsCollaboration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_TeamsCollaboration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_TeamsCollaboration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_TeamsCollaboration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_TeamsCollaboration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_TeamsCollaboration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_appid: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_appid: string | null }, {  }>;
  msdyn_channelfolderrelativeurl: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_channelfolderrelativeurl: string | null }, {  }>;
  msdyn_channelid: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_channelid: string | null }, {  }>;
  msdyn_channelname: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_channelname: string | null }, {  }>;
  msdyn_channeltype: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_channeltype: string | null }, {  }>;
  msdyn_contenturl: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_contenturl: string | null }, {  }>;
  msdyn_groupid: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_groupid: string | null }, {  }>;
  msdyn_pipedentityid: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_pipedentityid: string | null }, {  }>;
  msdyn_teamid: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_teamid: string | null }, {  }>;
  msdyn_teamname: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_teamname: string | null }, {  }>;
  msdyn_teamscollaborationid: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_teamscollaborationid: string | null }, {  }>;
  msdyn_teamsiteurl: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_teamsiteurl: string | null }, {  }>;
  msdyn_tenantid: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_tenantid: string | null }, {  }>;
  msdyn_weburl: WebAttribute<msdyn_TeamsCollaboration_Select, { msdyn_weburl: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_TeamsCollaboration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_TeamsCollaboration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  regardingobjectid: WebAttribute<msdyn_TeamsCollaboration_Select, { regardingobjectid: string | null }, {  }>;
  regardingobjecttypecode: WebAttribute<msdyn_TeamsCollaboration_Select, { regardingobjecttypecode: number | null }, {  }>;
  regardingobjecttypename: WebAttribute<msdyn_TeamsCollaboration_Select, { regardingobjecttypename: string | null }, {  }>;
  statecode: WebAttribute<msdyn_TeamsCollaboration_Select, { statecode: msdyn_teamscollaboration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_TeamsCollaboration_Select, { statuscode: msdyn_teamscollaboration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_TeamsCollaboration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_TeamsCollaboration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_TeamsCollaboration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_TeamsCollaboration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_appid: string;
  msdyn_channelfolderrelativeurl: string;
  msdyn_channelid: string;
  msdyn_channelname: string;
  msdyn_channeltype: string;
  msdyn_contenturl: string;
  msdyn_groupid: XQW.Guid;
  msdyn_pipedentityid: string;
  msdyn_teamid: string;
  msdyn_teamname: string;
  msdyn_teamscollaborationid: XQW.Guid;
  msdyn_teamsiteurl: string;
  msdyn_tenantid: XQW.Guid;
  msdyn_weburl: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  regardingobjectid: XQW.Guid;
  regardingobjecttypecode: number;
  regardingobjecttypename: string;
  statecode: msdyn_teamscollaboration_statecode;
  statuscode: msdyn_teamscollaboration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_TeamsCollaboration_Expand {
  createdby: WebExpand<msdyn_TeamsCollaboration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_TeamsCollaboration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_TeamsCollaboration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_TeamsCollaboration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_teamscollaboration_AsyncOperations: WebExpand<msdyn_TeamsCollaboration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_teamscollaboration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_teamscollaboration_BulkDeleteFailures: WebExpand<msdyn_TeamsCollaboration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_teamscollaboration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_teamscollaboration_MailboxTrackingFolders: WebExpand<msdyn_TeamsCollaboration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_teamscollaboration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_teamscollaboration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_TeamsCollaboration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_teamscollaboration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_teamscollaboration_ProcessSession: WebExpand<msdyn_TeamsCollaboration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_teamscollaboration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_teamscollaboration_SyncErrors: WebExpand<msdyn_TeamsCollaboration_Expand, SyncError_Select, SyncError_Filter, { msdyn_teamscollaboration_SyncErrors: SyncError_Result[] }>;
  msdyn_teamscollaboration_UserEntityInstanceDatas: WebExpand<msdyn_TeamsCollaboration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_teamscollaboration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface msdyn_TeamsCollaboration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_TeamsCollaboration_Result extends msdyn_TeamsCollaboration_Base, msdyn_TeamsCollaboration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_TeamsCollaboration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_TeamsCollaboration_RelatedMany {
  msdyn_teamscollaboration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_teamscollaboration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_teamscollaboration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_teamscollaboration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_teamscollaboration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_teamscollaboration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_teamscollaboration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_teamscollaborations: WebMappingRetrieve<msdyn_TeamsCollaboration_Select,msdyn_TeamsCollaboration_Expand,msdyn_TeamsCollaboration_Filter,msdyn_TeamsCollaboration_Fixed,msdyn_TeamsCollaboration_Result,msdyn_TeamsCollaboration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_teamscollaborations: WebMappingRelated<msdyn_TeamsCollaboration_RelatedOne,msdyn_TeamsCollaboration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_teamscollaborations: WebMappingCUDA<msdyn_TeamsCollaboration_Create,msdyn_TeamsCollaboration_Update,msdyn_TeamsCollaboration_Select>;
}
