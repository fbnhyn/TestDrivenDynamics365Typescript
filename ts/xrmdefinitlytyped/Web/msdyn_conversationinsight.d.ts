interface msdyn_conversationinsight_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_callaveragepause?: number | null;
  msdyn_callinsightduration?: number | null;
  msdyn_calllongestcustomermonologue?: number | null;
  msdyn_callswitchesperconversation?: number | null;
  msdyn_calltalkingspeed?: number | null;
  msdyn_calltalktolistenratio?: number | null;
  msdyn_conversationinsightid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_conversationinsight_statecode | null;
  statuscode?: msdyn_conversationinsight_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_conversationinsight_Relationships {
  msdyn_ConversationId?: msdyn_ocliveworkitem_Result | null;
  msdyn_conversationinsight_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_conversationinsight_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_conversationinsight_FileAttachments?: FileAttachment_Result[] | null;
  msdyn_conversationinsight_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_conversationinsight_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_conversationinsight_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_conversationinsight_SyncErrors?: SyncError_Result[] | null;
  msdyn_conversationinsight_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_insights?: FileAttachment_Result | null;
  msdyn_transcriptwithinsights?: FileAttachment_Result | null;
}
interface msdyn_conversationinsight extends msdyn_conversationinsight_Base, msdyn_conversationinsight_Relationships {
  msdyn_ConversationId_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_conversationinsight_Create extends msdyn_conversationinsight {
}
interface msdyn_conversationinsight_Update extends msdyn_conversationinsight {
}
interface msdyn_conversationinsight_Select {
  createdby_guid: WebAttribute<msdyn_conversationinsight_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_conversationinsight_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_conversationinsight_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_conversationinsight_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_conversationinsight_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_conversationinsight_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_conversationinsight_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_callaveragepause: WebAttribute<msdyn_conversationinsight_Select, { msdyn_callaveragepause: number | null }, {  }>;
  msdyn_callinsightduration: WebAttribute<msdyn_conversationinsight_Select, { msdyn_callinsightduration: number | null }, {  }>;
  msdyn_calllongestcustomermonologue: WebAttribute<msdyn_conversationinsight_Select, { msdyn_calllongestcustomermonologue: number | null }, {  }>;
  msdyn_callswitchesperconversation: WebAttribute<msdyn_conversationinsight_Select, { msdyn_callswitchesperconversation: number | null }, {  }>;
  msdyn_calltalkingspeed: WebAttribute<msdyn_conversationinsight_Select, { msdyn_calltalkingspeed: number | null }, {  }>;
  msdyn_calltalktolistenratio: WebAttribute<msdyn_conversationinsight_Select, { msdyn_calltalktolistenratio: number | null }, {  }>;
  msdyn_conversationid_guid: WebAttribute<msdyn_conversationinsight_Select, { msdyn_conversationid_guid: string | null }, { msdyn_conversationid_formatted?: string }>;
  msdyn_conversationinsightid: WebAttribute<msdyn_conversationinsight_Select, { msdyn_conversationinsightid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_conversationinsight_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_conversationinsight_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_conversationinsight_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_conversationinsight_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_conversationinsight_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_conversationinsight_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_conversationinsight_Select, { statecode: msdyn_conversationinsight_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_conversationinsight_Select, { statuscode: msdyn_conversationinsight_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_conversationinsight_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_conversationinsight_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_conversationinsight_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_conversationinsight_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_callaveragepause: any;
  msdyn_callinsightduration: any;
  msdyn_calllongestcustomermonologue: any;
  msdyn_callswitchesperconversation: any;
  msdyn_calltalkingspeed: any;
  msdyn_calltalktolistenratio: any;
  msdyn_conversationid_guid: XQW.Guid;
  msdyn_conversationinsightid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_conversationinsight_statecode;
  statuscode: msdyn_conversationinsight_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_conversationinsight_Expand {
  createdby: WebExpand<msdyn_conversationinsight_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_conversationinsight_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_conversationinsight_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_conversationinsight_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ConversationId: WebExpand<msdyn_conversationinsight_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_ConversationId: msdyn_ocliveworkitem_Result }>;
  msdyn_conversationinsight_AsyncOperations: WebExpand<msdyn_conversationinsight_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_conversationinsight_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_conversationinsight_BulkDeleteFailures: WebExpand<msdyn_conversationinsight_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_conversationinsight_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_conversationinsight_FileAttachments: WebExpand<msdyn_conversationinsight_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_conversationinsight_FileAttachments: FileAttachment_Result[] }>;
  msdyn_conversationinsight_MailboxTrackingFolders: WebExpand<msdyn_conversationinsight_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_conversationinsight_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_conversationinsight_PrincipalObjectAttributeAccesses: WebExpand<msdyn_conversationinsight_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_conversationinsight_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_conversationinsight_ProcessSession: WebExpand<msdyn_conversationinsight_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_conversationinsight_ProcessSession: ProcessSession_Result[] }>;
  msdyn_conversationinsight_SyncErrors: WebExpand<msdyn_conversationinsight_Expand, SyncError_Select, SyncError_Filter, { msdyn_conversationinsight_SyncErrors: SyncError_Result[] }>;
  msdyn_conversationinsight_UserEntityInstanceDatas: WebExpand<msdyn_conversationinsight_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_conversationinsight_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_insights: WebExpand<msdyn_conversationinsight_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_insights: FileAttachment_Result }>;
  msdyn_transcriptwithinsights: WebExpand<msdyn_conversationinsight_Expand, FileAttachment_Select, FileAttachment_Filter, { msdyn_transcriptwithinsights: FileAttachment_Result }>;
  ownerid: WebExpand<msdyn_conversationinsight_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_conversationinsight_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_conversationinsight_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_conversationinsight_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_conversationinsight_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_conversationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_conversationinsight_Result extends msdyn_conversationinsight_Base, msdyn_conversationinsight_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_conversationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_conversationinsight_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ConversationId: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_insights: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_transcriptwithinsights: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_conversationinsight_RelatedMany {
  msdyn_conversationinsight_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_conversationinsight_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_conversationinsight_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  msdyn_conversationinsight_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_conversationinsight_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_conversationinsight_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_conversationinsight_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_conversationinsight_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_conversationinsights: WebMappingRetrieve<msdyn_conversationinsight_Select,msdyn_conversationinsight_Expand,msdyn_conversationinsight_Filter,msdyn_conversationinsight_Fixed,msdyn_conversationinsight_Result,msdyn_conversationinsight_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_conversationinsights: WebMappingRelated<msdyn_conversationinsight_RelatedOne,msdyn_conversationinsight_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_conversationinsights: WebMappingCUDA<msdyn_conversationinsight_Create,msdyn_conversationinsight_Update,msdyn_conversationinsight_Select>;
}
