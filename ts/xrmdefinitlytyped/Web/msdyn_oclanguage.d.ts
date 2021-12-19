interface msdyn_oclanguage_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_languagename?: string | null;
  msdyn_localecode?: string | null;
  msdyn_localeid?: number | null;
  msdyn_oclanguageid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_oclanguage_statecode | null;
  statuscode?: msdyn_oclanguage_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_oclanguage_Relationships {
  msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage?: msdyn_livechatconfig_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage?: msdyn_occustommessagingchannel_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage?: msdyn_ocfbpage_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage?: msdyn_oclinechannelconfig_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale?: msdyn_ocoutboundconfiguration_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage?: msdyn_ocrecording_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage?: msdyn_ocsmschannelsetting_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage?: msdyn_ocsystemmessage_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage?: msdyn_octeamschannelconfig_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage?: msdyn_octwitterhandle_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage?: msdyn_ocwechatchannelconfig_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage?: msdyn_ocwhatsappchannelnumber_Result[] | null;
  msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage?: msdyn_smsnumber_Result[] | null;
  msdyn_oclanguage_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_oclanguage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_oclanguage_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_oclanguage_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_oclanguage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_oclanguage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_oclanguage_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_oclanguage_SyncErrors?: SyncError_Result[] | null;
  msdyn_oclanguage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_oclanguage_msdyn_oclocalizationdata?: msdyn_oclocalizationdata_Result[] | null;
  msdyn_ocoutboundmessage_occustomerlocale?: msdyn_ocoutboundmessage_Result[] | null;
}
interface msdyn_oclanguage extends msdyn_oclanguage_Base, msdyn_oclanguage_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_oclanguage_Create extends msdyn_oclanguage {
}
interface msdyn_oclanguage_Update extends msdyn_oclanguage {
}
interface msdyn_oclanguage_Select {
  createdby_guid: WebAttribute<msdyn_oclanguage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_oclanguage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_oclanguage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_oclanguage_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_oclanguage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_oclanguage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_oclanguage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_languagename: WebAttribute<msdyn_oclanguage_Select, { msdyn_languagename: string | null }, {  }>;
  msdyn_localecode: WebAttribute<msdyn_oclanguage_Select, { msdyn_localecode: string | null }, {  }>;
  msdyn_localeid: WebAttribute<msdyn_oclanguage_Select, { msdyn_localeid: number | null }, {  }>;
  msdyn_oclanguageid: WebAttribute<msdyn_oclanguage_Select, { msdyn_oclanguageid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_oclanguage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_oclanguage_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_oclanguage_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_oclanguage_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_oclanguage_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_oclanguage_Select, { statecode: msdyn_oclanguage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_oclanguage_Select, { statuscode: msdyn_oclanguage_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_oclanguage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_oclanguage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_oclanguage_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_oclanguage_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_languagename: string;
  msdyn_localecode: string;
  msdyn_localeid: number;
  msdyn_oclanguageid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_oclanguage_statecode;
  statuscode: msdyn_oclanguage_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_oclanguage_Expand {
  createdby: WebExpand<msdyn_oclanguage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_oclanguage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_oclanguage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_oclanguage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage: msdyn_livechatconfig_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_occustommessagingchannel_Select, msdyn_occustommessagingchannel_Filter, { msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage: msdyn_occustommessagingchannel_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_ocfbpage_Select, msdyn_ocfbpage_Filter, { msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage: msdyn_ocfbpage_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_oclinechannelconfig_Select, msdyn_oclinechannelconfig_Filter, { msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage: msdyn_oclinechannelconfig_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid: WebExpand<msdyn_oclanguage_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid: msdyn_ocliveworkitem_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale: WebExpand<msdyn_oclanguage_Expand, msdyn_ocoutboundconfiguration_Select, msdyn_ocoutboundconfiguration_Filter, { msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale: msdyn_ocoutboundconfiguration_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_ocrecording_Select, msdyn_ocrecording_Filter, { msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage: msdyn_ocrecording_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_ocsmschannelsetting_Select, msdyn_ocsmschannelsetting_Filter, { msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage: msdyn_ocsmschannelsetting_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_ocsystemmessage_Select, msdyn_ocsystemmessage_Filter, { msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage: msdyn_ocsystemmessage_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_octeamschannelconfig_Select, msdyn_octeamschannelconfig_Filter, { msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage: msdyn_octeamschannelconfig_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_octwitterhandle_Select, msdyn_octwitterhandle_Filter, { msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage: msdyn_octwitterhandle_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_ocwechatchannelconfig_Select, msdyn_ocwechatchannelconfig_Filter, { msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage: msdyn_ocwechatchannelconfig_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_ocwhatsappchannelnumber_Select, msdyn_ocwhatsappchannelnumber_Filter, { msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage: msdyn_ocwhatsappchannelnumber_Result[] }>;
  msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage: WebExpand<msdyn_oclanguage_Expand, msdyn_smsnumber_Select, msdyn_smsnumber_Filter, { msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage: msdyn_smsnumber_Result[] }>;
  msdyn_oclanguage_AsyncOperations: WebExpand<msdyn_oclanguage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_oclanguage_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_oclanguage_BulkDeleteFailures: WebExpand<msdyn_oclanguage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_oclanguage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_oclanguage_DuplicateBaseRecord: WebExpand<msdyn_oclanguage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_oclanguage_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_oclanguage_DuplicateMatchingRecord: WebExpand<msdyn_oclanguage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_oclanguage_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_oclanguage_MailboxTrackingFolders: WebExpand<msdyn_oclanguage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_oclanguage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_oclanguage_PrincipalObjectAttributeAccesses: WebExpand<msdyn_oclanguage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_oclanguage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_oclanguage_ProcessSession: WebExpand<msdyn_oclanguage_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_oclanguage_ProcessSession: ProcessSession_Result[] }>;
  msdyn_oclanguage_SyncErrors: WebExpand<msdyn_oclanguage_Expand, SyncError_Select, SyncError_Filter, { msdyn_oclanguage_SyncErrors: SyncError_Result[] }>;
  msdyn_oclanguage_UserEntityInstanceDatas: WebExpand<msdyn_oclanguage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_oclanguage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_oclanguage_msdyn_oclocalizationdata: WebExpand<msdyn_oclanguage_Expand, msdyn_oclocalizationdata_Select, msdyn_oclocalizationdata_Filter, { msdyn_oclanguage_msdyn_oclocalizationdata: msdyn_oclocalizationdata_Result[] }>;
  msdyn_ocoutboundmessage_occustomerlocale: WebExpand<msdyn_oclanguage_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_ocoutboundmessage_occustomerlocale: msdyn_ocoutboundmessage_Result[] }>;
  ownerid: WebExpand<msdyn_oclanguage_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_oclanguage_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_oclanguage_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_oclanguage_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_oclanguage_FormattedResult {
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
interface msdyn_oclanguage_Result extends msdyn_oclanguage_Base, msdyn_oclanguage_Relationships {
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
interface msdyn_oclanguage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_oclanguage_RelatedMany {
  msdyn_msdyn_oclanguage_msdyn_livechatconfig_ocWidgetLanguage: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_occustommessagingchannel_custommessagingchannellanguage: WebMappingRetrieve<msdyn_occustommessagingchannel_Select,msdyn_occustommessagingchannel_Expand,msdyn_occustommessagingchannel_Filter,msdyn_occustommessagingchannel_Fixed,msdyn_occustommessagingchannel_Result,msdyn_occustommessagingchannel_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_ocfbpage_facebookpagelanguage: WebMappingRetrieve<msdyn_ocfbpage_Select,msdyn_ocfbpage_Expand,msdyn_ocfbpage_Filter,msdyn_ocfbpage_Fixed,msdyn_ocfbpage_Result,msdyn_ocfbpage_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_oclinechannelconfig_lineaccountlanguage: WebMappingRetrieve<msdyn_oclinechannelconfig_Select,msdyn_oclinechannelconfig_Expand,msdyn_oclinechannelconfig_Filter,msdyn_oclinechannelconfig_Fixed,msdyn_oclinechannelconfig_Result,msdyn_oclinechannelconfig_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_ocliveworkitem_customerlanguageid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_ocoutboundconfiguration_defaultlocale: WebMappingRetrieve<msdyn_ocoutboundconfiguration_Select,msdyn_ocoutboundconfiguration_Expand,msdyn_ocoutboundconfiguration_Filter,msdyn_ocoutboundconfiguration_Fixed,msdyn_ocoutboundconfiguration_Result,msdyn_ocoutboundconfiguration_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_ocrecording_sourcelanguage: WebMappingRetrieve<msdyn_ocrecording_Select,msdyn_ocrecording_Expand,msdyn_ocrecording_Filter,msdyn_ocrecording_Fixed,msdyn_ocrecording_Result,msdyn_ocrecording_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_ocsmschannelsetting_ocsmschannelsettinglanguage: WebMappingRetrieve<msdyn_ocsmschannelsetting_Select,msdyn_ocsmschannelsetting_Expand,msdyn_ocsmschannelsetting_Filter,msdyn_ocsmschannelsetting_Fixed,msdyn_ocsmschannelsetting_Result,msdyn_ocsmschannelsetting_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_ocsystemmessage_defaultlanguage: WebMappingRetrieve<msdyn_ocsystemmessage_Select,msdyn_ocsystemmessage_Expand,msdyn_ocsystemmessage_Filter,msdyn_ocsystemmessage_Fixed,msdyn_ocsystemmessage_Result,msdyn_ocsystemmessage_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_octeamschannelconfig_teamsaccountlanguage: WebMappingRetrieve<msdyn_octeamschannelconfig_Select,msdyn_octeamschannelconfig_Expand,msdyn_octeamschannelconfig_Filter,msdyn_octeamschannelconfig_Fixed,msdyn_octeamschannelconfig_Result,msdyn_octeamschannelconfig_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_octwitterhandle_twitterhandlelanguage: WebMappingRetrieve<msdyn_octwitterhandle_Select,msdyn_octwitterhandle_Expand,msdyn_octwitterhandle_Filter,msdyn_octwitterhandle_Fixed,msdyn_octwitterhandle_Result,msdyn_octwitterhandle_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_ocwechatchannelconfig_wechataccountlanguage: WebMappingRetrieve<msdyn_ocwechatchannelconfig_Select,msdyn_ocwechatchannelconfig_Expand,msdyn_ocwechatchannelconfig_Filter,msdyn_ocwechatchannelconfig_Fixed,msdyn_ocwechatchannelconfig_Result,msdyn_ocwechatchannelconfig_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_ocwhatsappchannelnumber_whatsappnumberlanguage: WebMappingRetrieve<msdyn_ocwhatsappchannelnumber_Select,msdyn_ocwhatsappchannelnumber_Expand,msdyn_ocwhatsappchannelnumber_Filter,msdyn_ocwhatsappchannelnumber_Fixed,msdyn_ocwhatsappchannelnumber_Result,msdyn_ocwhatsappchannelnumber_FormattedResult>;
  msdyn_msdyn_oclanguage_msdyn_smsnumber_SMSnumberlanguage: WebMappingRetrieve<msdyn_smsnumber_Select,msdyn_smsnumber_Expand,msdyn_smsnumber_Filter,msdyn_smsnumber_Fixed,msdyn_smsnumber_Result,msdyn_smsnumber_FormattedResult>;
  msdyn_oclanguage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_oclanguage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_oclanguage_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_oclanguage_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_oclanguage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_oclanguage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_oclanguage_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_oclanguage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_oclanguage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_oclanguage_msdyn_oclocalizationdata: WebMappingRetrieve<msdyn_oclocalizationdata_Select,msdyn_oclocalizationdata_Expand,msdyn_oclocalizationdata_Filter,msdyn_oclocalizationdata_Fixed,msdyn_oclocalizationdata_Result,msdyn_oclocalizationdata_FormattedResult>;
  msdyn_ocoutboundmessage_occustomerlocale: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_oclanguages: WebMappingRetrieve<msdyn_oclanguage_Select,msdyn_oclanguage_Expand,msdyn_oclanguage_Filter,msdyn_oclanguage_Fixed,msdyn_oclanguage_Result,msdyn_oclanguage_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_oclanguages: WebMappingRelated<msdyn_oclanguage_RelatedOne,msdyn_oclanguage_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_oclanguages: WebMappingCUDA<msdyn_oclanguage_Create,msdyn_oclanguage_Update,msdyn_oclanguage_Select>;
}
