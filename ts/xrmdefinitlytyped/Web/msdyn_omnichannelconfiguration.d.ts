interface msdyn_omnichannelconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_defaultagentinputlanguage?: msdyn_agentinputlanguage | null;
  msdyn_enable_advance_entity_routing?: boolean | null;
  msdyn_enable_agent_reject_notifications?: boolean | null;
  msdyn_enable_missed_notifications?: boolean | null;
  msdyn_enable_new_consult_exp?: boolean | null;
  msdyn_enable_supervisor_assign?: boolean | null;
  msdyn_enable_supervisor_monitor?: boolean | null;
  msdyn_enable_supervisor_transfer?: boolean | null;
  msdyn_enable_unified_routing_diagnostic?: boolean | null;
  msdyn_enable_visitorjourney?: boolean | null;
  msdyn_enablemarkdown?: boolean | null;
  msdyn_enablenewconversationform?: boolean | null;
  msdyn_enablerealtimetranslation?: boolean | null;
  msdyn_enablesoundnotifications?: boolean | null;
  msdyn_isdefaultpersonamapped?: boolean | null;
  msdyn_ispersonalizationofsoundenabled?: boolean | null;
  msdyn_ispersonalmessagesenabled?: boolean | null;
  msdyn_ispersonasecurityrolemappingenabled?: boolean | null;
  msdyn_isskillbasedroutingenabled?: boolean | null;
  msdyn_isupdateskillsenabled?: boolean | null;
  msdyn_maskforagent?: boolean | null;
  msdyn_maskforcustomer?: boolean | null;
  msdyn_name?: string | null;
  msdyn_omnichannelconfigurationid?: string | null;
  msdyn_soundformcontrol?: string | null;
  msdyn_translationwebresourceurl?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_omnichannelconfiguration_statecode | null;
  statuscode?: msdyn_omnichannelconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_omnichannelconfiguration_Relationships {
  msdyn_omnichannelconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_omnichannelconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_omnichannelconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_omnichannelconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_omnichannelconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_omnichannelconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_omnichannelconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_omnichannelconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_omnichannelconfiguration extends msdyn_omnichannelconfiguration_Base, msdyn_omnichannelconfiguration_Relationships {
  msdyn_dnd_presence_lookup_bind$msdyn_presences?: string | null;
  msdyn_inactive_presence_lookup_bind$msdyn_presences?: string | null;
}
interface msdyn_omnichannelconfiguration_Create extends msdyn_omnichannelconfiguration {
}
interface msdyn_omnichannelconfiguration_Update extends msdyn_omnichannelconfiguration {
}
interface msdyn_omnichannelconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_omnichannelconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_omnichannelconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_omnichannelconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_omnichannelconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_omnichannelconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_omnichannelconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_omnichannelconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_defaultagentinputlanguage: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_defaultagentinputlanguage: msdyn_agentinputlanguage | null }, { msdyn_defaultagentinputlanguage_formatted?: string }>;
  msdyn_dnd_presence_lookup_guid: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_dnd_presence_lookup_guid: string | null }, { msdyn_dnd_presence_lookup_formatted?: string }>;
  msdyn_enable_advance_entity_routing: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enable_advance_entity_routing: boolean | null }, {  }>;
  msdyn_enable_agent_reject_notifications: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enable_agent_reject_notifications: boolean | null }, {  }>;
  msdyn_enable_missed_notifications: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enable_missed_notifications: boolean | null }, {  }>;
  msdyn_enable_new_consult_exp: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enable_new_consult_exp: boolean | null }, {  }>;
  msdyn_enable_supervisor_assign: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enable_supervisor_assign: boolean | null }, {  }>;
  msdyn_enable_supervisor_monitor: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enable_supervisor_monitor: boolean | null }, {  }>;
  msdyn_enable_supervisor_transfer: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enable_supervisor_transfer: boolean | null }, {  }>;
  msdyn_enable_unified_routing_diagnostic: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enable_unified_routing_diagnostic: boolean | null }, {  }>;
  msdyn_enable_visitorjourney: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enable_visitorjourney: boolean | null }, {  }>;
  msdyn_enablemarkdown: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enablemarkdown: boolean | null }, {  }>;
  msdyn_enablenewconversationform: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enablenewconversationform: boolean | null }, {  }>;
  msdyn_enablerealtimetranslation: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enablerealtimetranslation: boolean | null }, {  }>;
  msdyn_enablesoundnotifications: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_enablesoundnotifications: boolean | null }, {  }>;
  msdyn_inactive_presence_lookup_guid: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_inactive_presence_lookup_guid: string | null }, { msdyn_inactive_presence_lookup_formatted?: string }>;
  msdyn_isdefaultpersonamapped: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_isdefaultpersonamapped: boolean | null }, {  }>;
  msdyn_ispersonalizationofsoundenabled: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_ispersonalizationofsoundenabled: boolean | null }, {  }>;
  msdyn_ispersonalmessagesenabled: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_ispersonalmessagesenabled: boolean | null }, {  }>;
  msdyn_ispersonasecurityrolemappingenabled: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_ispersonasecurityrolemappingenabled: boolean | null }, {  }>;
  msdyn_isskillbasedroutingenabled: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_isskillbasedroutingenabled: boolean | null }, {  }>;
  msdyn_isupdateskillsenabled: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_isupdateskillsenabled: boolean | null }, {  }>;
  msdyn_maskforagent: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_maskforagent: boolean | null }, {  }>;
  msdyn_maskforcustomer: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_maskforcustomer: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_omnichannelconfigurationid: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_omnichannelconfigurationid: string | null }, {  }>;
  msdyn_soundformcontrol: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_soundformcontrol: string | null }, {  }>;
  msdyn_translationwebresourceurl: WebAttribute<msdyn_omnichannelconfiguration_Select, { msdyn_translationwebresourceurl: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_omnichannelconfiguration_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_omnichannelconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_omnichannelconfiguration_Select, { statecode: msdyn_omnichannelconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_omnichannelconfiguration_Select, { statuscode: msdyn_omnichannelconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_omnichannelconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_omnichannelconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_omnichannelconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_omnichannelconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_defaultagentinputlanguage: msdyn_agentinputlanguage;
  msdyn_dnd_presence_lookup_guid: XQW.Guid;
  msdyn_enable_advance_entity_routing: boolean;
  msdyn_enable_agent_reject_notifications: boolean;
  msdyn_enable_missed_notifications: boolean;
  msdyn_enable_new_consult_exp: boolean;
  msdyn_enable_supervisor_assign: boolean;
  msdyn_enable_supervisor_monitor: boolean;
  msdyn_enable_supervisor_transfer: boolean;
  msdyn_enable_unified_routing_diagnostic: boolean;
  msdyn_enable_visitorjourney: boolean;
  msdyn_enablemarkdown: boolean;
  msdyn_enablenewconversationform: boolean;
  msdyn_enablerealtimetranslation: boolean;
  msdyn_enablesoundnotifications: boolean;
  msdyn_inactive_presence_lookup_guid: XQW.Guid;
  msdyn_isdefaultpersonamapped: boolean;
  msdyn_ispersonalizationofsoundenabled: boolean;
  msdyn_ispersonalmessagesenabled: boolean;
  msdyn_ispersonasecurityrolemappingenabled: boolean;
  msdyn_isskillbasedroutingenabled: boolean;
  msdyn_isupdateskillsenabled: boolean;
  msdyn_maskforagent: boolean;
  msdyn_maskforcustomer: boolean;
  msdyn_name: string;
  msdyn_omnichannelconfigurationid: XQW.Guid;
  msdyn_soundformcontrol: string;
  msdyn_translationwebresourceurl: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_omnichannelconfiguration_statecode;
  statuscode: msdyn_omnichannelconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_omnichannelconfiguration_Expand {
  createdby: WebExpand<msdyn_omnichannelconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_omnichannelconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_omnichannelconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_omnichannelconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_dnd_presence_lookup: WebExpand<msdyn_omnichannelconfiguration_Expand, msdyn_presence_Select, msdyn_presence_Filter, { msdyn_dnd_presence_lookup: msdyn_presence_Result }>;
  msdyn_inactive_presence_lookup: WebExpand<msdyn_omnichannelconfiguration_Expand, msdyn_presence_Select, msdyn_presence_Filter, { msdyn_inactive_presence_lookup: msdyn_presence_Result }>;
  msdyn_omnichannelconfiguration_AsyncOperations: WebExpand<msdyn_omnichannelconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_omnichannelconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_omnichannelconfiguration_BulkDeleteFailures: WebExpand<msdyn_omnichannelconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_omnichannelconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_omnichannelconfiguration_DuplicateBaseRecord: WebExpand<msdyn_omnichannelconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_omnichannelconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_omnichannelconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_omnichannelconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_omnichannelconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_omnichannelconfiguration_MailboxTrackingFolders: WebExpand<msdyn_omnichannelconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_omnichannelconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_omnichannelconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_omnichannelconfiguration_ProcessSession: WebExpand<msdyn_omnichannelconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_omnichannelconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_omnichannelconfiguration_SyncErrors: WebExpand<msdyn_omnichannelconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_omnichannelconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_omnichannelconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_omnichannelconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_omnichannelconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_omnichannelconfiguration_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_omnichannelconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_defaultagentinputlanguage_formatted?: string;
  msdyn_dnd_presence_lookup_formatted?: string;
  msdyn_inactive_presence_lookup_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_omnichannelconfiguration_Result extends msdyn_omnichannelconfiguration_Base, msdyn_omnichannelconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_dnd_presence_lookup_guid: string | null;
  msdyn_inactive_presence_lookup_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_omnichannelconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_dnd_presence_lookup: WebMappingRetrieve<msdyn_presence_Select,msdyn_presence_Expand,msdyn_presence_Filter,msdyn_presence_Fixed,msdyn_presence_Result,msdyn_presence_FormattedResult>;
  msdyn_inactive_presence_lookup: WebMappingRetrieve<msdyn_presence_Select,msdyn_presence_Expand,msdyn_presence_Filter,msdyn_presence_Fixed,msdyn_presence_Result,msdyn_presence_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_omnichannelconfiguration_RelatedMany {
  msdyn_omnichannelconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_omnichannelconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_omnichannelconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_omnichannelconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_omnichannelconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_omnichannelconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_omnichannelconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_omnichannelconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_omnichannelconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_omnichannelconfigurations: WebMappingRetrieve<msdyn_omnichannelconfiguration_Select,msdyn_omnichannelconfiguration_Expand,msdyn_omnichannelconfiguration_Filter,msdyn_omnichannelconfiguration_Fixed,msdyn_omnichannelconfiguration_Result,msdyn_omnichannelconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_omnichannelconfigurations: WebMappingRelated<msdyn_omnichannelconfiguration_RelatedOne,msdyn_omnichannelconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_omnichannelconfigurations: WebMappingCUDA<msdyn_omnichannelconfiguration_Create,msdyn_omnichannelconfiguration_Update,msdyn_omnichannelconfiguration_Select>;
}
