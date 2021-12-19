interface msdyn_occommunicationprovidersetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_accountsid?: string | null;
  msdyn_appmodule?: msdyn_appmodule | null;
  msdyn_istrial?: boolean | null;
  msdyn_name?: string | null;
  msdyn_occommunicationprovider?: msdyn_occommunicationprovider | null;
  msdyn_occommunicationprovidersettingid?: string | null;
  msdyn_secret?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_occommunicationprovidersetting_statecode | null;
  statuscode?: msdyn_occommunicationprovidersetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_occommunicationprovidersetting_Relationships {
  msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider?: msdyn_ocbotchannelregistration_Result[] | null;
  msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid?: msdyn_ocphonenumber_Result[] | null;
  msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid?: msdyn_ocprovisioningstate_Result[] | null;
  msdyn_occommunicationprovidersetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_occommunicationprovidersetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_occommunicationprovidersetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_occommunicationprovidersetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_occommunicationprovidersetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_occommunicationprovidersetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_occommunicationprovidersetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_occommunicationprovidersetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_occommunicationprovidersetting_msdyn_entr?: msdyn_occommunicationprovidersettingentry_Result[] | null;
}
interface msdyn_occommunicationprovidersetting extends msdyn_occommunicationprovidersetting_Base, msdyn_occommunicationprovidersetting_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_occommunicationprovidersetting_Create extends msdyn_occommunicationprovidersetting {
}
interface msdyn_occommunicationprovidersetting_Update extends msdyn_occommunicationprovidersetting {
}
interface msdyn_occommunicationprovidersetting_Select {
  createdby_guid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_occommunicationprovidersetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_occommunicationprovidersetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_occommunicationprovidersetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_accountsid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { msdyn_accountsid: string | null }, {  }>;
  msdyn_appmodule: WebAttribute<msdyn_occommunicationprovidersetting_Select, { msdyn_appmodule: msdyn_appmodule | null }, { msdyn_appmodule_formatted?: string }>;
  msdyn_istrial: WebAttribute<msdyn_occommunicationprovidersetting_Select, { msdyn_istrial: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_occommunicationprovidersetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_occommunicationprovider: WebAttribute<msdyn_occommunicationprovidersetting_Select, { msdyn_occommunicationprovider: msdyn_occommunicationprovider | null }, { msdyn_occommunicationprovider_formatted?: string }>;
  msdyn_occommunicationprovidersettingid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { msdyn_occommunicationprovidersettingid: string | null }, {  }>;
  msdyn_secret: WebAttribute<msdyn_occommunicationprovidersetting_Select, { msdyn_secret: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_occommunicationprovidersetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_occommunicationprovidersetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_occommunicationprovidersetting_Select, { statecode: msdyn_occommunicationprovidersetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_occommunicationprovidersetting_Select, { statuscode: msdyn_occommunicationprovidersetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_occommunicationprovidersetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_occommunicationprovidersetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_occommunicationprovidersetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_occommunicationprovidersetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_accountsid: string;
  msdyn_appmodule: msdyn_appmodule;
  msdyn_istrial: boolean;
  msdyn_name: string;
  msdyn_occommunicationprovider: msdyn_occommunicationprovider;
  msdyn_occommunicationprovidersettingid: XQW.Guid;
  msdyn_secret: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_occommunicationprovidersetting_statecode;
  statuscode: msdyn_occommunicationprovidersetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_occommunicationprovidersetting_Expand {
  createdby: WebExpand<msdyn_occommunicationprovidersetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_occommunicationprovidersetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_occommunicationprovidersetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_occommunicationprovidersetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider: WebExpand<msdyn_occommunicationprovidersetting_Expand, msdyn_ocbotchannelregistration_Select, msdyn_ocbotchannelregistration_Filter, { msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider: msdyn_ocbotchannelregistration_Result[] }>;
  msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid: WebExpand<msdyn_occommunicationprovidersetting_Expand, msdyn_ocphonenumber_Select, msdyn_ocphonenumber_Filter, { msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid: msdyn_ocphonenumber_Result[] }>;
  msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid: WebExpand<msdyn_occommunicationprovidersetting_Expand, msdyn_ocprovisioningstate_Select, msdyn_ocprovisioningstate_Filter, { msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid: msdyn_ocprovisioningstate_Result[] }>;
  msdyn_occommunicationprovidersetting_AsyncOperations: WebExpand<msdyn_occommunicationprovidersetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_occommunicationprovidersetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_occommunicationprovidersetting_BulkDeleteFailures: WebExpand<msdyn_occommunicationprovidersetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_occommunicationprovidersetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_occommunicationprovidersetting_DuplicateBaseRecord: WebExpand<msdyn_occommunicationprovidersetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_occommunicationprovidersetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_occommunicationprovidersetting_DuplicateMatchingRecord: WebExpand<msdyn_occommunicationprovidersetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_occommunicationprovidersetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_occommunicationprovidersetting_MailboxTrackingFolders: WebExpand<msdyn_occommunicationprovidersetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_occommunicationprovidersetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_occommunicationprovidersetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_occommunicationprovidersetting_ProcessSession: WebExpand<msdyn_occommunicationprovidersetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_occommunicationprovidersetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_occommunicationprovidersetting_SyncErrors: WebExpand<msdyn_occommunicationprovidersetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_occommunicationprovidersetting_SyncErrors: SyncError_Result[] }>;
  msdyn_occommunicationprovidersetting_UserEntityInstanceDatas: WebExpand<msdyn_occommunicationprovidersetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_occommunicationprovidersetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_occommunicationprovidersetting_msdyn_entr: WebExpand<msdyn_occommunicationprovidersetting_Expand, msdyn_occommunicationprovidersettingentry_Select, msdyn_occommunicationprovidersettingentry_Filter, { msdyn_occommunicationprovidersetting_msdyn_entr: msdyn_occommunicationprovidersettingentry_Result[] }>;
  ownerid: WebExpand<msdyn_occommunicationprovidersetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_occommunicationprovidersetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_occommunicationprovidersetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_occommunicationprovidersetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_occommunicationprovidersetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_appmodule_formatted?: string;
  msdyn_occommunicationprovider_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_occommunicationprovidersetting_Result extends msdyn_occommunicationprovidersetting_Base, msdyn_occommunicationprovidersetting_Relationships {
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
interface msdyn_occommunicationprovidersetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_occommunicationprovidersetting_RelatedMany {
  msdyn_msdyn_occommunicationprovidersetting_msdyn_ocbotchannelregistration_communicationprovider: WebMappingRetrieve<msdyn_ocbotchannelregistration_Select,msdyn_ocbotchannelregistration_Expand,msdyn_ocbotchannelregistration_Filter,msdyn_ocbotchannelregistration_Fixed,msdyn_ocbotchannelregistration_Result,msdyn_ocbotchannelregistration_FormattedResult>;
  msdyn_msdyn_occommunicationprovidersetting_msdyn_ocphonenumber_communicationprovidersettingid: WebMappingRetrieve<msdyn_ocphonenumber_Select,msdyn_ocphonenumber_Expand,msdyn_ocphonenumber_Filter,msdyn_ocphonenumber_Fixed,msdyn_ocphonenumber_Result,msdyn_ocphonenumber_FormattedResult>;
  msdyn_msdyn_occommunicationprovidersetting_msdyn_ocprovisioningstate_communicationprovidersettingid: WebMappingRetrieve<msdyn_ocprovisioningstate_Select,msdyn_ocprovisioningstate_Expand,msdyn_ocprovisioningstate_Filter,msdyn_ocprovisioningstate_Fixed,msdyn_ocprovisioningstate_Result,msdyn_ocprovisioningstate_FormattedResult>;
  msdyn_occommunicationprovidersetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_occommunicationprovidersetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_occommunicationprovidersetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_occommunicationprovidersetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_occommunicationprovidersetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_occommunicationprovidersetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_occommunicationprovidersetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_occommunicationprovidersetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_occommunicationprovidersetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_occommunicationprovidersetting_msdyn_entr: WebMappingRetrieve<msdyn_occommunicationprovidersettingentry_Select,msdyn_occommunicationprovidersettingentry_Expand,msdyn_occommunicationprovidersettingentry_Filter,msdyn_occommunicationprovidersettingentry_Fixed,msdyn_occommunicationprovidersettingentry_Result,msdyn_occommunicationprovidersettingentry_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_occommunicationprovidersettings: WebMappingRetrieve<msdyn_occommunicationprovidersetting_Select,msdyn_occommunicationprovidersetting_Expand,msdyn_occommunicationprovidersetting_Filter,msdyn_occommunicationprovidersetting_Fixed,msdyn_occommunicationprovidersetting_Result,msdyn_occommunicationprovidersetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_occommunicationprovidersettings: WebMappingRelated<msdyn_occommunicationprovidersetting_RelatedOne,msdyn_occommunicationprovidersetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_occommunicationprovidersettings: WebMappingCUDA<msdyn_occommunicationprovidersetting_Create,msdyn_occommunicationprovidersetting_Update,msdyn_occommunicationprovidersetting_Select>;
}
