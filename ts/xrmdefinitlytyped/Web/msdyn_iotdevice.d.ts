interface msdyn_iotdevice_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_connectionstate?: boolean | null;
  msdyn_deviceid?: string | null;
  msdyn_devicereportedproperties?: string | null;
  msdyn_devicesettings?: string | null;
  msdyn_iotdeviceid?: string | null;
  msdyn_issimulated?: msdyn_iotdevice_msdyn_issimulated | null;
  msdyn_lastactivitytime?: Date | null;
  msdyn_lastcommandsenttime?: Date | null;
  msdyn_name?: string | null;
  msdyn_registrationmessage?: string | null;
  msdyn_registrationstatus?: msdyn_iotdevice_msdyn_registrationstatus | null;
  msdyn_tags?: string | null;
  msdyn_timezone?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotdevice_statecode | null;
  statuscode?: msdyn_iotdevice_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotdevice_Relationships {
  msdyn_Account?: Account_Result | null;
  msdyn_Category?: msdyn_iotdevicecategory_Result | null;
  msdyn_IoTProviderInstance?: msdyn_iotproviderinstance_Result | null;
  msdyn_LastCommandSent?: msdyn_iotdevicecommand_Result | null;
  msdyn_iotdevice_Annotations?: Annotation_Result[] | null;
  msdyn_iotdevice_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotdevice_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotdevice_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevice_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevice_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotdevice_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotdevice_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotdevice_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotdevice_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_iotdevice_connections1?: Connection_Result[] | null;
  msdyn_iotdevice_connections2?: Connection_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_iotdevice?: msdyn_iotdevicevisualizationconfiguration_Result[] | null;
  msdyn_msdyn_iotdevice_msdyn_iotalert_Device?: msdyn_iotalert_Result[] | null;
  msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device?: msdyn_iotdevicecommand_Result[] | null;
  msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device?: msdyn_iotdevicedatahistory_Result[] | null;
  msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device?: msdyn_iotdeviceregistrationhistory_Result[] | null;
}
interface msdyn_iotdevice extends msdyn_iotdevice_Base, msdyn_iotdevice_Relationships {
  msdyn_Account_bind$accounts?: string | null;
  msdyn_Category_bind$msdyn_iotdevicecategories?: string | null;
  msdyn_IoTProviderInstance_bind$msdyn_iotproviderinstances?: string | null;
  msdyn_LastCommandSent_bind$msdyn_iotdevicecommands?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotdevice_Create extends msdyn_iotdevice {
}
interface msdyn_iotdevice_Update extends msdyn_iotdevice {
}
interface msdyn_iotdevice_Select {
  createdby_guid: WebAttribute<msdyn_iotdevice_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotdevice_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotdevice_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotdevice_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotdevice_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotdevice_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotdevice_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_account_guid: WebAttribute<msdyn_iotdevice_Select, { msdyn_account_guid: string | null }, { msdyn_account_formatted?: string }>;
  msdyn_category_guid: WebAttribute<msdyn_iotdevice_Select, { msdyn_category_guid: string | null }, { msdyn_category_formatted?: string }>;
  msdyn_connectionstate: WebAttribute<msdyn_iotdevice_Select, { msdyn_connectionstate: boolean | null }, {  }>;
  msdyn_deviceid: WebAttribute<msdyn_iotdevice_Select, { msdyn_deviceid: string | null }, {  }>;
  msdyn_devicereportedproperties: WebAttribute<msdyn_iotdevice_Select, { msdyn_devicereportedproperties: string | null }, {  }>;
  msdyn_devicesettings: WebAttribute<msdyn_iotdevice_Select, { msdyn_devicesettings: string | null }, {  }>;
  msdyn_iotdeviceid: WebAttribute<msdyn_iotdevice_Select, { msdyn_iotdeviceid: string | null }, {  }>;
  msdyn_iotproviderinstance_guid: WebAttribute<msdyn_iotdevice_Select, { msdyn_iotproviderinstance_guid: string | null }, { msdyn_iotproviderinstance_formatted?: string }>;
  msdyn_issimulated: WebAttribute<msdyn_iotdevice_Select, { msdyn_issimulated: msdyn_iotdevice_msdyn_issimulated | null }, { msdyn_issimulated_formatted?: string }>;
  msdyn_lastactivitytime: WebAttribute<msdyn_iotdevice_Select, { msdyn_lastactivitytime: Date | null }, { msdyn_lastactivitytime_formatted?: string }>;
  msdyn_lastcommandsent_guid: WebAttribute<msdyn_iotdevice_Select, { msdyn_lastcommandsent_guid: string | null }, { msdyn_lastcommandsent_formatted?: string }>;
  msdyn_lastcommandsenttime: WebAttribute<msdyn_iotdevice_Select, { msdyn_lastcommandsenttime: Date | null }, { msdyn_lastcommandsenttime_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_iotdevice_Select, { msdyn_name: string | null }, {  }>;
  msdyn_registrationmessage: WebAttribute<msdyn_iotdevice_Select, { msdyn_registrationmessage: string | null }, {  }>;
  msdyn_registrationstatus: WebAttribute<msdyn_iotdevice_Select, { msdyn_registrationstatus: msdyn_iotdevice_msdyn_registrationstatus | null }, { msdyn_registrationstatus_formatted?: string }>;
  msdyn_tags: WebAttribute<msdyn_iotdevice_Select, { msdyn_tags: string | null }, {  }>;
  msdyn_timezone: WebAttribute<msdyn_iotdevice_Select, { msdyn_timezone: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iotdevice_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotdevice_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotdevice_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotdevice_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotdevice_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotdevice_Select, { statecode: msdyn_iotdevice_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotdevice_Select, { statuscode: msdyn_iotdevice_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotdevice_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotdevice_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotdevice_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotdevice_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_account_guid: XQW.Guid;
  msdyn_category_guid: XQW.Guid;
  msdyn_connectionstate: boolean;
  msdyn_deviceid: string;
  msdyn_devicereportedproperties: string;
  msdyn_devicesettings: string;
  msdyn_iotdeviceid: XQW.Guid;
  msdyn_iotproviderinstance_guid: XQW.Guid;
  msdyn_issimulated: msdyn_iotdevice_msdyn_issimulated;
  msdyn_lastactivitytime: Date;
  msdyn_lastcommandsent_guid: XQW.Guid;
  msdyn_lastcommandsenttime: Date;
  msdyn_name: string;
  msdyn_registrationmessage: string;
  msdyn_registrationstatus: msdyn_iotdevice_msdyn_registrationstatus;
  msdyn_tags: string;
  msdyn_timezone: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotdevice_statecode;
  statuscode: msdyn_iotdevice_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotdevice_Expand {
  createdby: WebExpand<msdyn_iotdevice_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotdevice_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotdevice_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotdevice_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Account: WebExpand<msdyn_iotdevice_Expand, Account_Select, Account_Filter, { msdyn_Account: Account_Result }>;
  msdyn_Category: WebExpand<msdyn_iotdevice_Expand, msdyn_iotdevicecategory_Select, msdyn_iotdevicecategory_Filter, { msdyn_Category: msdyn_iotdevicecategory_Result }>;
  msdyn_IoTProviderInstance: WebExpand<msdyn_iotdevice_Expand, msdyn_iotproviderinstance_Select, msdyn_iotproviderinstance_Filter, { msdyn_IoTProviderInstance: msdyn_iotproviderinstance_Result }>;
  msdyn_LastCommandSent: WebExpand<msdyn_iotdevice_Expand, msdyn_iotdevicecommand_Select, msdyn_iotdevicecommand_Filter, { msdyn_LastCommandSent: msdyn_iotdevicecommand_Result }>;
  msdyn_iotdevice_Annotations: WebExpand<msdyn_iotdevice_Expand, Annotation_Select, Annotation_Filter, { msdyn_iotdevice_Annotations: Annotation_Result[] }>;
  msdyn_iotdevice_AsyncOperations: WebExpand<msdyn_iotdevice_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotdevice_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotdevice_BulkDeleteFailures: WebExpand<msdyn_iotdevice_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotdevice_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotdevice_DuplicateBaseRecord: WebExpand<msdyn_iotdevice_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevice_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevice_DuplicateMatchingRecord: WebExpand<msdyn_iotdevice_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevice_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevice_MailboxTrackingFolders: WebExpand<msdyn_iotdevice_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotdevice_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotdevice_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotdevice_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotdevice_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotdevice_ProcessSession: WebExpand<msdyn_iotdevice_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotdevice_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotdevice_SyncErrors: WebExpand<msdyn_iotdevice_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotdevice_SyncErrors: SyncError_Result[] }>;
  msdyn_iotdevice_UserEntityInstanceDatas: WebExpand<msdyn_iotdevice_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotdevice_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_iotdevice_connections1: WebExpand<msdyn_iotdevice_Expand, Connection_Select, Connection_Filter, { msdyn_iotdevice_connections1: Connection_Result[] }>;
  msdyn_iotdevice_connections2: WebExpand<msdyn_iotdevice_Expand, Connection_Select, Connection_Filter, { msdyn_iotdevice_connections2: Connection_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_iotdevice: WebExpand<msdyn_iotdevice_Expand, msdyn_iotdevicevisualizationconfiguration_Select, msdyn_iotdevicevisualizationconfiguration_Filter, { msdyn_iotdevicevisualizationconfiguration_iotdevice: msdyn_iotdevicevisualizationconfiguration_Result[] }>;
  msdyn_msdyn_iotdevice_msdyn_iotalert_Device: WebExpand<msdyn_iotdevice_Expand, msdyn_iotalert_Select, msdyn_iotalert_Filter, { msdyn_msdyn_iotdevice_msdyn_iotalert_Device: msdyn_iotalert_Result[] }>;
  msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device: WebExpand<msdyn_iotdevice_Expand, msdyn_iotdevicecommand_Select, msdyn_iotdevicecommand_Filter, { msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device: msdyn_iotdevicecommand_Result[] }>;
  msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device: WebExpand<msdyn_iotdevice_Expand, msdyn_iotdevicedatahistory_Select, msdyn_iotdevicedatahistory_Filter, { msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device: msdyn_iotdevicedatahistory_Result[] }>;
  msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device: WebExpand<msdyn_iotdevice_Expand, msdyn_iotdeviceregistrationhistory_Select, msdyn_iotdeviceregistrationhistory_Filter, { msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device: msdyn_iotdeviceregistrationhistory_Result[] }>;
  ownerid: WebExpand<msdyn_iotdevice_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotdevice_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotdevice_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotdevice_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotdevice_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_account_formatted?: string;
  msdyn_category_formatted?: string;
  msdyn_iotproviderinstance_formatted?: string;
  msdyn_issimulated_formatted?: string;
  msdyn_lastactivitytime_formatted?: string;
  msdyn_lastcommandsent_formatted?: string;
  msdyn_lastcommandsenttime_formatted?: string;
  msdyn_registrationstatus_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotdevice_Result extends msdyn_iotdevice_Base, msdyn_iotdevice_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_account_guid: string | null;
  msdyn_category_guid: string | null;
  msdyn_iotproviderinstance_guid: string | null;
  msdyn_lastcommandsent_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iotdevice_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_Category: WebMappingRetrieve<msdyn_iotdevicecategory_Select,msdyn_iotdevicecategory_Expand,msdyn_iotdevicecategory_Filter,msdyn_iotdevicecategory_Fixed,msdyn_iotdevicecategory_Result,msdyn_iotdevicecategory_FormattedResult>;
  msdyn_IoTProviderInstance: WebMappingRetrieve<msdyn_iotproviderinstance_Select,msdyn_iotproviderinstance_Expand,msdyn_iotproviderinstance_Filter,msdyn_iotproviderinstance_Fixed,msdyn_iotproviderinstance_Result,msdyn_iotproviderinstance_FormattedResult>;
  msdyn_LastCommandSent: WebMappingRetrieve<msdyn_iotdevicecommand_Select,msdyn_iotdevicecommand_Expand,msdyn_iotdevicecommand_Filter,msdyn_iotdevicecommand_Fixed,msdyn_iotdevicecommand_Result,msdyn_iotdevicecommand_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotdevice_RelatedMany {
  msdyn_iotdevice_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_iotdevice_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotdevice_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotdevice_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevice_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevice_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotdevice_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotdevice_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotdevice_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotdevice_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_iotdevice_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_iotdevice_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_iotdevice: WebMappingRetrieve<msdyn_iotdevicevisualizationconfiguration_Select,msdyn_iotdevicevisualizationconfiguration_Expand,msdyn_iotdevicevisualizationconfiguration_Filter,msdyn_iotdevicevisualizationconfiguration_Fixed,msdyn_iotdevicevisualizationconfiguration_Result,msdyn_iotdevicevisualizationconfiguration_FormattedResult>;
  msdyn_msdyn_iotdevice_msdyn_iotalert_Device: WebMappingRetrieve<msdyn_iotalert_Select,msdyn_iotalert_Expand,msdyn_iotalert_Filter,msdyn_iotalert_Fixed,msdyn_iotalert_Result,msdyn_iotalert_FormattedResult>;
  msdyn_msdyn_iotdevice_msdyn_iotdevicecommand_Device: WebMappingRetrieve<msdyn_iotdevicecommand_Select,msdyn_iotdevicecommand_Expand,msdyn_iotdevicecommand_Filter,msdyn_iotdevicecommand_Fixed,msdyn_iotdevicecommand_Result,msdyn_iotdevicecommand_FormattedResult>;
  msdyn_msdyn_iotdevice_msdyn_iotdevicedatahistory_Device: WebMappingRetrieve<msdyn_iotdevicedatahistory_Select,msdyn_iotdevicedatahistory_Expand,msdyn_iotdevicedatahistory_Filter,msdyn_iotdevicedatahistory_Fixed,msdyn_iotdevicedatahistory_Result,msdyn_iotdevicedatahistory_FormattedResult>;
  msdyn_msdyn_iotdevice_msdyn_iotdeviceregistrationhistory_Device: WebMappingRetrieve<msdyn_iotdeviceregistrationhistory_Select,msdyn_iotdeviceregistrationhistory_Expand,msdyn_iotdeviceregistrationhistory_Filter,msdyn_iotdeviceregistrationhistory_Fixed,msdyn_iotdeviceregistrationhistory_Result,msdyn_iotdeviceregistrationhistory_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotdevices: WebMappingRetrieve<msdyn_iotdevice_Select,msdyn_iotdevice_Expand,msdyn_iotdevice_Filter,msdyn_iotdevice_Fixed,msdyn_iotdevice_Result,msdyn_iotdevice_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotdevices: WebMappingRelated<msdyn_iotdevice_RelatedOne,msdyn_iotdevice_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotdevices: WebMappingCUDA<msdyn_iotdevice_Create,msdyn_iotdevice_Update,msdyn_iotdevice_Select>;
}
