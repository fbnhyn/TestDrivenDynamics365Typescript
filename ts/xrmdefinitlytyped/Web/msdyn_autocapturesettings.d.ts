interface msdyn_autocapturesettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_DontShowSettingStatus?: string | null;
  msdyn_autocapture?: boolean | null;
  msdyn_autocapturesettingsid?: string | null;
  msdyn_autocapturev1?: boolean | null;
  msdyn_automaticactivityupdate?: boolean | null;
  msdyn_calendar?: boolean | null;
  msdyn_contacts?: boolean | null;
  msdyn_defaultassociation?: string | null;
  msdyn_emails?: boolean | null;
  msdyn_meetings?: boolean | null;
  msdyn_name?: string | null;
  msdyn_organizationid?: string | null;
  msdyn_settingsuiaction?: string | null;
  msdyn_userid?: string | null;
  msdyn_v1termsandconditionscount?: string | null;
  msdyn_v2termsandconditionscount?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_autocapturesettings_statecode | null;
  statuscode?: msdyn_autocapturesettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_autocapturesettings_Relationships {
  msdyn_autocapturesettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_autocapturesettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_autocapturesettings_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_autocapturesettings_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_autocapturesettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_autocapturesettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_autocapturesettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_autocapturesettings_SyncErrors?: SyncError_Result[] | null;
  msdyn_autocapturesettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_autocapturesettings extends msdyn_autocapturesettings_Base, msdyn_autocapturesettings_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_autocapturesettings_Create extends msdyn_autocapturesettings {
}
interface msdyn_autocapturesettings_Update extends msdyn_autocapturesettings {
}
interface msdyn_autocapturesettings_Select {
  createdby_guid: WebAttribute<msdyn_autocapturesettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_autocapturesettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_autocapturesettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_autocapturesettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_autocapturesettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_autocapturesettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_autocapturesettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_DontShowSettingStatus: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_DontShowSettingStatus: string | null }, {  }>;
  msdyn_autocapture: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_autocapture: boolean | null }, {  }>;
  msdyn_autocapturesettingsid: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_autocapturesettingsid: string | null }, {  }>;
  msdyn_autocapturev1: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_autocapturev1: boolean | null }, {  }>;
  msdyn_automaticactivityupdate: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_automaticactivityupdate: boolean | null }, {  }>;
  msdyn_calendar: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_calendar: boolean | null }, {  }>;
  msdyn_contacts: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_contacts: boolean | null }, {  }>;
  msdyn_defaultassociation: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_defaultassociation: string | null }, {  }>;
  msdyn_emails: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_emails: boolean | null }, {  }>;
  msdyn_meetings: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_meetings: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_name: string | null }, {  }>;
  msdyn_organizationid: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_organizationid: string | null }, {  }>;
  msdyn_settingsuiaction: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_settingsuiaction: string | null }, {  }>;
  msdyn_userid: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_userid: string | null }, {  }>;
  msdyn_v1termsandconditionscount: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_v1termsandconditionscount: string | null }, {  }>;
  msdyn_v2termsandconditionscount: WebAttribute<msdyn_autocapturesettings_Select, { msdyn_v2termsandconditionscount: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_autocapturesettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_autocapturesettings_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_autocapturesettings_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_autocapturesettings_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_autocapturesettings_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_autocapturesettings_Select, { statecode: msdyn_autocapturesettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_autocapturesettings_Select, { statuscode: msdyn_autocapturesettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_autocapturesettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_autocapturesettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_autocapturesettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_autocapturesettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_DontShowSettingStatus: string;
  msdyn_autocapture: boolean;
  msdyn_autocapturesettingsid: XQW.Guid;
  msdyn_autocapturev1: boolean;
  msdyn_automaticactivityupdate: boolean;
  msdyn_calendar: boolean;
  msdyn_contacts: boolean;
  msdyn_defaultassociation: string;
  msdyn_emails: boolean;
  msdyn_meetings: boolean;
  msdyn_name: string;
  msdyn_organizationid: string;
  msdyn_settingsuiaction: string;
  msdyn_userid: string;
  msdyn_v1termsandconditionscount: string;
  msdyn_v2termsandconditionscount: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_autocapturesettings_statecode;
  statuscode: msdyn_autocapturesettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_autocapturesettings_Expand {
  createdby: WebExpand<msdyn_autocapturesettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_autocapturesettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_autocapturesettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_autocapturesettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_autocapturesettings_AsyncOperations: WebExpand<msdyn_autocapturesettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_autocapturesettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_autocapturesettings_BulkDeleteFailures: WebExpand<msdyn_autocapturesettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_autocapturesettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_autocapturesettings_DuplicateBaseRecord: WebExpand<msdyn_autocapturesettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_autocapturesettings_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_autocapturesettings_DuplicateMatchingRecord: WebExpand<msdyn_autocapturesettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_autocapturesettings_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_autocapturesettings_MailboxTrackingFolders: WebExpand<msdyn_autocapturesettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_autocapturesettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_autocapturesettings_PrincipalObjectAttributeAccesses: WebExpand<msdyn_autocapturesettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_autocapturesettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_autocapturesettings_ProcessSession: WebExpand<msdyn_autocapturesettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_autocapturesettings_ProcessSession: ProcessSession_Result[] }>;
  msdyn_autocapturesettings_SyncErrors: WebExpand<msdyn_autocapturesettings_Expand, SyncError_Select, SyncError_Filter, { msdyn_autocapturesettings_SyncErrors: SyncError_Result[] }>;
  msdyn_autocapturesettings_UserEntityInstanceDatas: WebExpand<msdyn_autocapturesettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_autocapturesettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_autocapturesettings_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_autocapturesettings_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_autocapturesettings_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_autocapturesettings_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_autocapturesettings_FormattedResult {
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
interface msdyn_autocapturesettings_Result extends msdyn_autocapturesettings_Base, msdyn_autocapturesettings_Relationships {
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
interface msdyn_autocapturesettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_autocapturesettings_RelatedMany {
  msdyn_autocapturesettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_autocapturesettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_autocapturesettings_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_autocapturesettings_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_autocapturesettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_autocapturesettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_autocapturesettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_autocapturesettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_autocapturesettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_autocapturesettingses: WebMappingRetrieve<msdyn_autocapturesettings_Select,msdyn_autocapturesettings_Expand,msdyn_autocapturesettings_Filter,msdyn_autocapturesettings_Fixed,msdyn_autocapturesettings_Result,msdyn_autocapturesettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_autocapturesettingses: WebMappingRelated<msdyn_autocapturesettings_RelatedOne,msdyn_autocapturesettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_autocapturesettingses: WebMappingCUDA<msdyn_autocapturesettings_Create,msdyn_autocapturesettings_Update,msdyn_autocapturesettings_Select>;
}
