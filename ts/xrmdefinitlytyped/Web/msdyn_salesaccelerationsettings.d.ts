interface msdyn_salesaccelerationsettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_calendartype?: msdyn_calendartype_options | null;
  msdyn_disablewqautorefreshonmarkcomplete?: boolean | null;
  msdyn_entityconfiguration?: string | null;
  msdyn_isautocreatephonecallenabled?: boolean | null;
  msdyn_issignalrnotificationenabled?: boolean | null;
  msdyn_isworkscheduleenabled?: boolean | null;
  msdyn_linksequencesteptoactivity?: boolean | null;
  msdyn_migrationstatus?: string | null;
  msdyn_name?: string | null;
  msdyn_salesaccelerationsettingsid?: string | null;
  msdyn_securityroles?: string | null;
  msdyn_securityrolesassignmentrules?: string | null;
  msdyn_securityrolesnew?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_salesaccelerationsettings_statecode | null;
  statuscode?: msdyn_salesaccelerationsettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_salesaccelerationsettings_Relationships {
  msdyn_salesaccelerationsettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_salesaccelerationsettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_salesaccelerationsettings_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_salesaccelerationsettings_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_salesaccelerationsettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_salesaccelerationsettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_salesaccelerationsettings_SyncErrors?: SyncError_Result[] | null;
  msdyn_salesaccelerationsettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_salesaccelerationsettings extends msdyn_salesaccelerationsettings_Base, msdyn_salesaccelerationsettings_Relationships {
}
interface msdyn_salesaccelerationsettings_Create extends msdyn_salesaccelerationsettings {
}
interface msdyn_salesaccelerationsettings_Update extends msdyn_salesaccelerationsettings {
}
interface msdyn_salesaccelerationsettings_Select {
  createdby_guid: WebAttribute<msdyn_salesaccelerationsettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_salesaccelerationsettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_salesaccelerationsettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_salesaccelerationsettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_salesaccelerationsettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_salesaccelerationsettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_salesaccelerationsettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_calendartype: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_calendartype: msdyn_calendartype_options | null }, { msdyn_calendartype_formatted?: string }>;
  msdyn_disablewqautorefreshonmarkcomplete: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_disablewqautorefreshonmarkcomplete: boolean | null }, {  }>;
  msdyn_entityconfiguration: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_entityconfiguration: string | null }, {  }>;
  msdyn_isautocreatephonecallenabled: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_isautocreatephonecallenabled: boolean | null }, {  }>;
  msdyn_issignalrnotificationenabled: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_issignalrnotificationenabled: boolean | null }, {  }>;
  msdyn_isworkscheduleenabled: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_isworkscheduleenabled: boolean | null }, {  }>;
  msdyn_linksequencesteptoactivity: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_linksequencesteptoactivity: boolean | null }, {  }>;
  msdyn_migrationstatus: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_migrationstatus: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_name: string | null }, {  }>;
  msdyn_salesaccelerationsettingsid: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_salesaccelerationsettingsid: string | null }, {  }>;
  msdyn_securityroles: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_securityroles: string | null }, {  }>;
  msdyn_securityrolesassignmentrules: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_securityrolesassignmentrules: string | null }, {  }>;
  msdyn_securityrolesnew: WebAttribute<msdyn_salesaccelerationsettings_Select, { msdyn_securityrolesnew: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_salesaccelerationsettings_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_salesaccelerationsettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_salesaccelerationsettings_Select, { statecode: msdyn_salesaccelerationsettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_salesaccelerationsettings_Select, { statuscode: msdyn_salesaccelerationsettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_salesaccelerationsettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_salesaccelerationsettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_salesaccelerationsettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_salesaccelerationsettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_calendartype: msdyn_calendartype_options;
  msdyn_disablewqautorefreshonmarkcomplete: boolean;
  msdyn_entityconfiguration: string;
  msdyn_isautocreatephonecallenabled: boolean;
  msdyn_issignalrnotificationenabled: boolean;
  msdyn_isworkscheduleenabled: boolean;
  msdyn_linksequencesteptoactivity: boolean;
  msdyn_migrationstatus: string;
  msdyn_name: string;
  msdyn_salesaccelerationsettingsid: XQW.Guid;
  msdyn_securityroles: string;
  msdyn_securityrolesassignmentrules: string;
  msdyn_securityrolesnew: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_salesaccelerationsettings_statecode;
  statuscode: msdyn_salesaccelerationsettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_salesaccelerationsettings_Expand {
  createdby: WebExpand<msdyn_salesaccelerationsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_salesaccelerationsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_salesaccelerationsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_salesaccelerationsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_salesaccelerationsettings_AsyncOperations: WebExpand<msdyn_salesaccelerationsettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_salesaccelerationsettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_salesaccelerationsettings_BulkDeleteFailures: WebExpand<msdyn_salesaccelerationsettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_salesaccelerationsettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_salesaccelerationsettings_DuplicateBaseRecord: WebExpand<msdyn_salesaccelerationsettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_salesaccelerationsettings_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_salesaccelerationsettings_DuplicateMatchingRecord: WebExpand<msdyn_salesaccelerationsettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_salesaccelerationsettings_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_salesaccelerationsettings_MailboxTrackingFolders: WebExpand<msdyn_salesaccelerationsettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_salesaccelerationsettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses: WebExpand<msdyn_salesaccelerationsettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_salesaccelerationsettings_ProcessSession: WebExpand<msdyn_salesaccelerationsettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_salesaccelerationsettings_ProcessSession: ProcessSession_Result[] }>;
  msdyn_salesaccelerationsettings_SyncErrors: WebExpand<msdyn_salesaccelerationsettings_Expand, SyncError_Select, SyncError_Filter, { msdyn_salesaccelerationsettings_SyncErrors: SyncError_Result[] }>;
  msdyn_salesaccelerationsettings_UserEntityInstanceDatas: WebExpand<msdyn_salesaccelerationsettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_salesaccelerationsettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_salesaccelerationsettings_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_salesaccelerationsettings_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_calendartype_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_salesaccelerationsettings_Result extends msdyn_salesaccelerationsettings_Base, msdyn_salesaccelerationsettings_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_salesaccelerationsettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_salesaccelerationsettings_RelatedMany {
  msdyn_salesaccelerationsettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_salesaccelerationsettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_salesaccelerationsettings_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_salesaccelerationsettings_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_salesaccelerationsettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_salesaccelerationsettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_salesaccelerationsettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_salesaccelerationsettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_salesaccelerationsettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_salesaccelerationsettingset: WebMappingRetrieve<msdyn_salesaccelerationsettings_Select,msdyn_salesaccelerationsettings_Expand,msdyn_salesaccelerationsettings_Filter,msdyn_salesaccelerationsettings_Fixed,msdyn_salesaccelerationsettings_Result,msdyn_salesaccelerationsettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_salesaccelerationsettingset: WebMappingRelated<msdyn_salesaccelerationsettings_RelatedOne,msdyn_salesaccelerationsettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_salesaccelerationsettingset: WebMappingCUDA<msdyn_salesaccelerationsettings_Create,msdyn_salesaccelerationsettings_Update,msdyn_salesaccelerationsettings_Select>;
}
