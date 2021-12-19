interface msdyn_ocoutboundconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_channel?: msdyn_streamsource | null;
  msdyn_channeldisplayname?: string | null;
  msdyn_channelid?: string | null;
  msdyn_displayoutboundconfigurationid?: string | null;
  msdyn_enablemessagelogging?: boolean | null;
  msdyn_name?: string | null;
  msdyn_ocoutboundconfigurationid?: string | null;
  msdyn_ocscope?: msdyn_scope | null;
  msdyn_secondarychanneldisplayname?: string | null;
  msdyn_secondarychannelid?: string | null;
  msdyn_showinactivities?: boolean | null;
  msdyn_type?: msdyn_messagetype | null;
  msdyn_usecustomerpreference?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocoutboundconfiguration_statecode | null;
  statuscode?: msdyn_ocoutboundconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocoutboundconfiguration_Relationships {
  msdyn_ocoutboundconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocoutboundconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocoutboundconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocoutboundconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocoutboundconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocoutboundconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocoutboundconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocoutboundconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_ocoutboundmessage_msdyn_ocoutbound?: msdyn_ocoutboundmessage_Result[] | null;
}
interface msdyn_ocoutboundconfiguration extends msdyn_ocoutboundconfiguration_Base, msdyn_ocoutboundconfiguration_Relationships {
  msdyn_defaultlocale_bind$msdyn_oclanguages?: string | null;
  msdyn_liveworkstreamid_bind$msdyn_liveworkstreams?: string | null;
  msdyn_messagetemplate_bind$msdyn_ocsystemmessages?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocoutboundconfiguration_Create extends msdyn_ocoutboundconfiguration {
}
interface msdyn_ocoutboundconfiguration_Update extends msdyn_ocoutboundconfiguration {
}
interface msdyn_ocoutboundconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocoutboundconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocoutboundconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocoutboundconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_channel: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_channel: msdyn_streamsource | null }, { msdyn_channel_formatted?: string }>;
  msdyn_channeldisplayname: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_channeldisplayname: string | null }, {  }>;
  msdyn_channelid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_channelid: string | null }, {  }>;
  msdyn_defaultlocale_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_defaultlocale_guid: string | null }, { msdyn_defaultlocale_formatted?: string }>;
  msdyn_displayoutboundconfigurationid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_displayoutboundconfigurationid: string | null }, {  }>;
  msdyn_enablemessagelogging: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_enablemessagelogging: boolean | null }, {  }>;
  msdyn_liveworkstreamid_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  msdyn_messagetemplate_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_messagetemplate_guid: string | null }, { msdyn_messagetemplate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocoutboundconfigurationid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_ocoutboundconfigurationid: string | null }, {  }>;
  msdyn_ocscope: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_ocscope: msdyn_scope | null }, { msdyn_ocscope_formatted?: string }>;
  msdyn_secondarychanneldisplayname: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_secondarychanneldisplayname: string | null }, {  }>;
  msdyn_secondarychannelid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_secondarychannelid: string | null }, {  }>;
  msdyn_showinactivities: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_showinactivities: boolean | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_type: msdyn_messagetype | null }, { msdyn_type_formatted?: string }>;
  msdyn_usecustomerpreference: WebAttribute<msdyn_ocoutboundconfiguration_Select, { msdyn_usecustomerpreference: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocoutboundconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocoutboundconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocoutboundconfiguration_Select, { statecode: msdyn_ocoutboundconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocoutboundconfiguration_Select, { statuscode: msdyn_ocoutboundconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocoutboundconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocoutboundconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocoutboundconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocoutboundconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_channel: msdyn_streamsource;
  msdyn_channeldisplayname: string;
  msdyn_channelid: string;
  msdyn_defaultlocale_guid: XQW.Guid;
  msdyn_displayoutboundconfigurationid: string;
  msdyn_enablemessagelogging: boolean;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  msdyn_messagetemplate_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocoutboundconfigurationid: XQW.Guid;
  msdyn_ocscope: msdyn_scope;
  msdyn_secondarychanneldisplayname: string;
  msdyn_secondarychannelid: string;
  msdyn_showinactivities: boolean;
  msdyn_type: msdyn_messagetype;
  msdyn_usecustomerpreference: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocoutboundconfiguration_statecode;
  statuscode: msdyn_ocoutboundconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocoutboundconfiguration_Expand {
  createdby: WebExpand<msdyn_ocoutboundconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocoutboundconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocoutboundconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocoutboundconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_defaultlocale: WebExpand<msdyn_ocoutboundconfiguration_Expand, msdyn_oclanguage_Select, msdyn_oclanguage_Filter, { msdyn_defaultlocale: msdyn_oclanguage_Result }>;
  msdyn_liveworkstreamid: WebExpand<msdyn_ocoutboundconfiguration_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstreamid: msdyn_liveworkstream_Result }>;
  msdyn_messagetemplate: WebExpand<msdyn_ocoutboundconfiguration_Expand, msdyn_ocsystemmessage_Select, msdyn_ocsystemmessage_Filter, { msdyn_messagetemplate: msdyn_ocsystemmessage_Result }>;
  msdyn_ocoutboundconfiguration_AsyncOperations: WebExpand<msdyn_ocoutboundconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocoutboundconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocoutboundconfiguration_BulkDeleteFailures: WebExpand<msdyn_ocoutboundconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocoutboundconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocoutboundconfiguration_DuplicateBaseRecord: WebExpand<msdyn_ocoutboundconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocoutboundconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocoutboundconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_ocoutboundconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocoutboundconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocoutboundconfiguration_MailboxTrackingFolders: WebExpand<msdyn_ocoutboundconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocoutboundconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocoutboundconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocoutboundconfiguration_ProcessSession: WebExpand<msdyn_ocoutboundconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocoutboundconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocoutboundconfiguration_SyncErrors: WebExpand<msdyn_ocoutboundconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocoutboundconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_ocoutboundconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_ocoutboundconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocoutboundconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ocoutboundmessage_msdyn_ocoutbound: WebExpand<msdyn_ocoutboundconfiguration_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_ocoutboundmessage_msdyn_ocoutbound: msdyn_ocoutboundmessage_Result[] }>;
  ownerid: WebExpand<msdyn_ocoutboundconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocoutboundconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocoutboundconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocoutboundconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocoutboundconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_channel_formatted?: string;
  msdyn_defaultlocale_formatted?: string;
  msdyn_liveworkstreamid_formatted?: string;
  msdyn_messagetemplate_formatted?: string;
  msdyn_ocscope_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocoutboundconfiguration_Result extends msdyn_ocoutboundconfiguration_Base, msdyn_ocoutboundconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_defaultlocale_guid: string | null;
  msdyn_liveworkstreamid_guid: string | null;
  msdyn_messagetemplate_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocoutboundconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_defaultlocale: WebMappingRetrieve<msdyn_oclanguage_Select,msdyn_oclanguage_Expand,msdyn_oclanguage_Filter,msdyn_oclanguage_Fixed,msdyn_oclanguage_Result,msdyn_oclanguage_FormattedResult>;
  msdyn_liveworkstreamid: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  msdyn_messagetemplate: WebMappingRetrieve<msdyn_ocsystemmessage_Select,msdyn_ocsystemmessage_Expand,msdyn_ocsystemmessage_Filter,msdyn_ocsystemmessage_Fixed,msdyn_ocsystemmessage_Result,msdyn_ocsystemmessage_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocoutboundconfiguration_RelatedMany {
  msdyn_ocoutboundconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocoutboundconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocoutboundconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocoutboundconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocoutboundconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocoutboundconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocoutboundconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocoutboundconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocoutboundconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_ocoutboundmessage_msdyn_ocoutbound: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocoutboundconfigurationes: WebMappingRetrieve<msdyn_ocoutboundconfiguration_Select,msdyn_ocoutboundconfiguration_Expand,msdyn_ocoutboundconfiguration_Filter,msdyn_ocoutboundconfiguration_Fixed,msdyn_ocoutboundconfiguration_Result,msdyn_ocoutboundconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocoutboundconfigurationes: WebMappingRelated<msdyn_ocoutboundconfiguration_RelatedOne,msdyn_ocoutboundconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocoutboundconfigurationes: WebMappingCUDA<msdyn_ocoutboundconfiguration_Create,msdyn_ocoutboundconfiguration_Update,msdyn_ocoutboundconfiguration_Select>;
}
