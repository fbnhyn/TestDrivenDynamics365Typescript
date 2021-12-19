interface msdyn_ocsystemmessage_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_instanceid?: string | null;
  msdyn_messagedescription?: string | null;
  msdyn_messagereceiver?: msdyn_ocmessagereceiver | null;
  msdyn_messagetemplatetrigger?: msdyn_ocmessagetemplatetrigger | null;
  msdyn_messagetext?: string | null;
  msdyn_messagetype?: msdyn_ocsystemmessagetype | null;
  msdyn_name?: string | null;
  msdyn_ocsystemmessageid?: string | null;
  msdyn_streamsource?: msdyn_streamsource | null;
  msdyn_systemmessageeventtype?: msdyn_ocsystemmessageeventtype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsystemmessage_statecode | null;
  statuscode?: msdyn_ocsystemmessage_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsystemmessage_Relationships {
  msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate?: msdyn_ocoutboundconfiguration_Result[] | null;
  msdyn_ocsystemmessage_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsystemmessage_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsystemmessage_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsystemmessage_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsystemmessage_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsystemmessage_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsystemmessage_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsystemmessage_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_ocsystemmessage_msdyn_oclocalizationdata?: msdyn_oclocalizationdata_Result[] | null;
}
interface msdyn_ocsystemmessage extends msdyn_ocsystemmessage_Base, msdyn_ocsystemmessage_Relationships {
  msdyn_defaultlanguage_bind$msdyn_oclanguages?: string | null;
  msdyn_widgetid_bind$msdyn_livechatconfigs?: string | null;
}
interface msdyn_ocsystemmessage_Create extends msdyn_ocsystemmessage {
}
interface msdyn_ocsystemmessage_Update extends msdyn_ocsystemmessage {
}
interface msdyn_ocsystemmessage_Select {
  createdby_guid: WebAttribute<msdyn_ocsystemmessage_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsystemmessage_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsystemmessage_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsystemmessage_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsystemmessage_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsystemmessage_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsystemmessage_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_defaultlanguage_guid: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_defaultlanguage_guid: string | null }, { msdyn_defaultlanguage_formatted?: string }>;
  msdyn_instanceid: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_instanceid: string | null }, {  }>;
  msdyn_messagedescription: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_messagedescription: string | null }, {  }>;
  msdyn_messagereceiver: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_messagereceiver: msdyn_ocmessagereceiver | null }, { msdyn_messagereceiver_formatted?: string }>;
  msdyn_messagetemplatetrigger: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_messagetemplatetrigger: msdyn_ocmessagetemplatetrigger | null }, { msdyn_messagetemplatetrigger_formatted?: string }>;
  msdyn_messagetext: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_messagetext: string | null }, {  }>;
  msdyn_messagetype: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_messagetype: msdyn_ocsystemmessagetype | null }, { msdyn_messagetype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsystemmessageid: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_ocsystemmessageid: string | null }, {  }>;
  msdyn_streamsource: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_streamsource: msdyn_streamsource | null }, { msdyn_streamsource_formatted?: string }>;
  msdyn_systemmessageeventtype: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_systemmessageeventtype: msdyn_ocsystemmessageeventtype | null }, { msdyn_systemmessageeventtype_formatted?: string }>;
  msdyn_widgetid_guid: WebAttribute<msdyn_ocsystemmessage_Select, { msdyn_widgetid_guid: string | null }, { msdyn_widgetid_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_ocsystemmessage_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_ocsystemmessage_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsystemmessage_Select, { statecode: msdyn_ocsystemmessage_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsystemmessage_Select, { statuscode: msdyn_ocsystemmessage_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsystemmessage_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsystemmessage_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsystemmessage_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsystemmessage_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_defaultlanguage_guid: XQW.Guid;
  msdyn_instanceid: string;
  msdyn_messagedescription: string;
  msdyn_messagereceiver: msdyn_ocmessagereceiver;
  msdyn_messagetemplatetrigger: msdyn_ocmessagetemplatetrigger;
  msdyn_messagetext: string;
  msdyn_messagetype: msdyn_ocsystemmessagetype;
  msdyn_name: string;
  msdyn_ocsystemmessageid: XQW.Guid;
  msdyn_streamsource: msdyn_streamsource;
  msdyn_systemmessageeventtype: msdyn_ocsystemmessageeventtype;
  msdyn_widgetid_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_ocsystemmessage_statecode;
  statuscode: msdyn_ocsystemmessage_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsystemmessage_Expand {
  createdby: WebExpand<msdyn_ocsystemmessage_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsystemmessage_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsystemmessage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsystemmessage_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_defaultlanguage: WebExpand<msdyn_ocsystemmessage_Expand, msdyn_oclanguage_Select, msdyn_oclanguage_Filter, { msdyn_defaultlanguage: msdyn_oclanguage_Result }>;
  msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate: WebExpand<msdyn_ocsystemmessage_Expand, msdyn_ocoutboundconfiguration_Select, msdyn_ocoutboundconfiguration_Filter, { msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate: msdyn_ocoutboundconfiguration_Result[] }>;
  msdyn_ocsystemmessage_AsyncOperations: WebExpand<msdyn_ocsystemmessage_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsystemmessage_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsystemmessage_BulkDeleteFailures: WebExpand<msdyn_ocsystemmessage_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsystemmessage_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsystemmessage_DuplicateBaseRecord: WebExpand<msdyn_ocsystemmessage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsystemmessage_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsystemmessage_DuplicateMatchingRecord: WebExpand<msdyn_ocsystemmessage_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsystemmessage_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsystemmessage_MailboxTrackingFolders: WebExpand<msdyn_ocsystemmessage_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsystemmessage_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsystemmessage_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsystemmessage_ProcessSession: WebExpand<msdyn_ocsystemmessage_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsystemmessage_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsystemmessage_SyncErrors: WebExpand<msdyn_ocsystemmessage_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsystemmessage_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsystemmessage_UserEntityInstanceDatas: WebExpand<msdyn_ocsystemmessage_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsystemmessage_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocsystemmessage_msdyn_oclocalizationdata: WebExpand<msdyn_ocsystemmessage_Expand, msdyn_oclocalizationdata_Select, msdyn_oclocalizationdata_Filter, { msdyn_ocsystemmessage_msdyn_oclocalizationdata: msdyn_oclocalizationdata_Result[] }>;
  msdyn_widgetid: WebExpand<msdyn_ocsystemmessage_Expand, msdyn_livechatconfig_Select, msdyn_livechatconfig_Filter, { msdyn_widgetid: msdyn_livechatconfig_Result }>;
  organizationid: WebExpand<msdyn_ocsystemmessage_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_ocsystemmessage_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_defaultlanguage_formatted?: string;
  msdyn_messagereceiver_formatted?: string;
  msdyn_messagetemplatetrigger_formatted?: string;
  msdyn_messagetype_formatted?: string;
  msdyn_streamsource_formatted?: string;
  msdyn_systemmessageeventtype_formatted?: string;
  msdyn_widgetid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsystemmessage_Result extends msdyn_ocsystemmessage_Base, msdyn_ocsystemmessage_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_defaultlanguage_guid: string | null;
  msdyn_widgetid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_ocsystemmessage_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_defaultlanguage: WebMappingRetrieve<msdyn_oclanguage_Select,msdyn_oclanguage_Expand,msdyn_oclanguage_Filter,msdyn_oclanguage_Fixed,msdyn_oclanguage_Result,msdyn_oclanguage_FormattedResult>;
  msdyn_widgetid: WebMappingRetrieve<msdyn_livechatconfig_Select,msdyn_livechatconfig_Expand,msdyn_livechatconfig_Filter,msdyn_livechatconfig_Fixed,msdyn_livechatconfig_Result,msdyn_livechatconfig_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_ocsystemmessage_RelatedMany {
  msdyn_msdyn_ocsystemmessage_msdyn_ocoutboundconfiguration_messagetemplate: WebMappingRetrieve<msdyn_ocoutboundconfiguration_Select,msdyn_ocoutboundconfiguration_Expand,msdyn_ocoutboundconfiguration_Filter,msdyn_ocoutboundconfiguration_Fixed,msdyn_ocoutboundconfiguration_Result,msdyn_ocoutboundconfiguration_FormattedResult>;
  msdyn_ocsystemmessage_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsystemmessage_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsystemmessage_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsystemmessage_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsystemmessage_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsystemmessage_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsystemmessage_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsystemmessage_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsystemmessage_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_ocsystemmessage_msdyn_oclocalizationdata: WebMappingRetrieve<msdyn_oclocalizationdata_Select,msdyn_oclocalizationdata_Expand,msdyn_oclocalizationdata_Filter,msdyn_oclocalizationdata_Fixed,msdyn_oclocalizationdata_Result,msdyn_oclocalizationdata_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsystemmessages: WebMappingRetrieve<msdyn_ocsystemmessage_Select,msdyn_ocsystemmessage_Expand,msdyn_ocsystemmessage_Filter,msdyn_ocsystemmessage_Fixed,msdyn_ocsystemmessage_Result,msdyn_ocsystemmessage_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsystemmessages: WebMappingRelated<msdyn_ocsystemmessage_RelatedOne,msdyn_ocsystemmessage_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsystemmessages: WebMappingCUDA<msdyn_ocsystemmessage_Create,msdyn_ocsystemmessage_Update,msdyn_ocsystemmessage_Select>;
}
