interface msdyn_chatquestionnaireresponse_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_chatquestionnaireresponseid?: string | null;
  msdyn_mode?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_chatquestionnaireresponse_statecode | null;
  statuscode?: msdyn_chatquestionnaireresponse_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_chatquestionnaireresponse_Relationships {
  msdyn_chatquestionnaireresponse_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_chatquestionnaireresponse_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_chatquestionnaireresponse_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_chatquestionnaireresponse_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_chatquestionnaireresponse_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_chatquestionnaireresponse_SyncErrors?: SyncError_Result[] | null;
  msdyn_chatquestionnaireresponse_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_chatquestionnaireresponse_msdyn_chatquestionnaireresponseitem_nested?: msdyn_chatquestionnaireresponseitem_Result[] | null;
}
interface msdyn_chatquestionnaireresponse extends msdyn_chatquestionnaireresponse_Base, msdyn_chatquestionnaireresponse_Relationships {
  msdyn_livechatconfigid_bind$msdyn_livechatconfigs?: string | null;
  msdyn_ocliveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_chatquestionnaireresponse_Create extends msdyn_chatquestionnaireresponse {
}
interface msdyn_chatquestionnaireresponse_Update extends msdyn_chatquestionnaireresponse {
}
interface msdyn_chatquestionnaireresponse_Select {
  createdby_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_chatquestionnaireresponse_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_chatquestionnaireresponse_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_chatquestionnaireresponse_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_chatquestionnaireresponseid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { msdyn_chatquestionnaireresponseid: string | null }, {  }>;
  msdyn_livechatconfigid_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { msdyn_livechatconfigid_guid: string | null }, { msdyn_livechatconfigid_formatted?: string }>;
  msdyn_mode: WebAttribute<msdyn_chatquestionnaireresponse_Select, { msdyn_mode: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_chatquestionnaireresponse_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocliveworkitemid_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { msdyn_ocliveworkitemid_guid: string | null }, { msdyn_ocliveworkitemid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_chatquestionnaireresponse_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_chatquestionnaireresponse_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_chatquestionnaireresponse_Select, { statecode: msdyn_chatquestionnaireresponse_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_chatquestionnaireresponse_Select, { statuscode: msdyn_chatquestionnaireresponse_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_chatquestionnaireresponse_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_chatquestionnaireresponse_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_chatquestionnaireresponse_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_chatquestionnaireresponse_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_chatquestionnaireresponseid: XQW.Guid;
  msdyn_livechatconfigid_guid: XQW.Guid;
  msdyn_mode: string;
  msdyn_name: string;
  msdyn_ocliveworkitemid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_chatquestionnaireresponse_statecode;
  statuscode: msdyn_chatquestionnaireresponse_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_chatquestionnaireresponse_Expand {
  createdby: WebExpand<msdyn_chatquestionnaireresponse_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_chatquestionnaireresponse_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_chatquestionnaireresponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_chatquestionnaireresponse_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_chatquestionnaireresponse_AsyncOperations: WebExpand<msdyn_chatquestionnaireresponse_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_chatquestionnaireresponse_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_chatquestionnaireresponse_BulkDeleteFailures: WebExpand<msdyn_chatquestionnaireresponse_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_chatquestionnaireresponse_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_chatquestionnaireresponse_MailboxTrackingFolders: WebExpand<msdyn_chatquestionnaireresponse_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_chatquestionnaireresponse_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_chatquestionnaireresponse_PrincipalObjectAttributeAccesses: WebExpand<msdyn_chatquestionnaireresponse_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_chatquestionnaireresponse_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_chatquestionnaireresponse_ProcessSession: WebExpand<msdyn_chatquestionnaireresponse_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_chatquestionnaireresponse_ProcessSession: ProcessSession_Result[] }>;
  msdyn_chatquestionnaireresponse_SyncErrors: WebExpand<msdyn_chatquestionnaireresponse_Expand, SyncError_Select, SyncError_Filter, { msdyn_chatquestionnaireresponse_SyncErrors: SyncError_Result[] }>;
  msdyn_chatquestionnaireresponse_UserEntityInstanceDatas: WebExpand<msdyn_chatquestionnaireresponse_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_chatquestionnaireresponse_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_livechatconfigid: WebExpand<msdyn_chatquestionnaireresponse_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_livechatconfigid: msdyn_livechatconfig_Result }>;
  msdyn_msdyn_chatquestionnaireresponse_msdyn_chatquestionnaireresponseitem_nested: WebExpand<msdyn_chatquestionnaireresponse_Expand, msdyn_chatquestionnaireresponseitem_Select, msdyn_chatquestionnaireresponseitem_Filter, { msdyn_msdyn_chatquestionnaireresponse_msdyn_chatquestionnaireresponseitem_nested: msdyn_chatquestionnaireresponseitem_Result[] }>;
  msdyn_ocliveworkitemid: WebExpand<msdyn_chatquestionnaireresponse_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_ocliveworkitemid: msdyn_ocliveworkitem_Result }>;
  ownerid: WebExpand<msdyn_chatquestionnaireresponse_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_chatquestionnaireresponse_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_chatquestionnaireresponse_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_chatquestionnaireresponse_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_chatquestionnaireresponse_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_livechatconfigid_formatted?: string;
  msdyn_ocliveworkitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_chatquestionnaireresponse_Result extends msdyn_chatquestionnaireresponse_Base, msdyn_chatquestionnaireresponse_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_livechatconfigid_guid: string | null;
  msdyn_ocliveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_chatquestionnaireresponse_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_livechatconfigid: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  msdyn_ocliveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_chatquestionnaireresponse_RelatedMany {
  msdyn_chatquestionnaireresponse_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_chatquestionnaireresponse_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_chatquestionnaireresponse_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_chatquestionnaireresponse_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_chatquestionnaireresponse_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_chatquestionnaireresponse_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_chatquestionnaireresponse_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_chatquestionnaireresponse_msdyn_chatquestionnaireresponseitem_nested: WebMappingRetrieve<msdyn_chatquestionnaireresponseitem_Select,msdyn_chatquestionnaireresponseitem_Expand,msdyn_chatquestionnaireresponseitem_Filter,msdyn_chatquestionnaireresponseitem_Fixed,msdyn_chatquestionnaireresponseitem_Result,msdyn_chatquestionnaireresponseitem_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_chatquestionnaireresponses: WebMappingRetrieve<msdyn_chatquestionnaireresponse_Select,msdyn_chatquestionnaireresponse_Expand,msdyn_chatquestionnaireresponse_Filter,msdyn_chatquestionnaireresponse_Fixed,msdyn_chatquestionnaireresponse_Result,msdyn_chatquestionnaireresponse_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_chatquestionnaireresponses: WebMappingRelated<msdyn_chatquestionnaireresponse_RelatedOne,msdyn_chatquestionnaireresponse_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_chatquestionnaireresponses: WebMappingCUDA<msdyn_chatquestionnaireresponse_Create,msdyn_chatquestionnaireresponse_Update,msdyn_chatquestionnaireresponse_Select>;
}
