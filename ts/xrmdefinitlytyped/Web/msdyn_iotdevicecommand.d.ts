interface msdyn_iotdevicecommand_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_commandstatus?: msdyn_iotdevicecommand_msdyn_commandstatus | null;
  msdyn_commandstatusreason?: string | null;
  msdyn_deviceid?: string | null;
  msdyn_iotdevicecommandid?: string | null;
  msdyn_message?: string | null;
  msdyn_name?: string | null;
  msdyn_sendtoallconnecteddevices?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotdevicecommand_statecode | null;
  statuscode?: msdyn_iotdevicecommand_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotdevicecommand_Relationships {
  msdyn_Command?: msdyn_iotdevicecommanddefinition_Result | null;
  msdyn_CustomerAsset?: msdyn_customerasset_Result | null;
  msdyn_Device?: msdyn_iotdevice_Result | null;
  msdyn_ParentAlert?: msdyn_iotalert_Result | null;
  msdyn_iotdevicecommand_Annotations?: Annotation_Result[] | null;
  msdyn_iotdevicecommand_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotdevicecommand_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotdevicecommand_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevicecommand_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevicecommand_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotdevicecommand_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotdevicecommand_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotdevicecommand_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_iotdevicecommand_connections1?: Connection_Result[] | null;
  msdyn_iotdevicecommand_connections2?: Connection_Result[] | null;
  msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent?: msdyn_customerasset_Result[] | null;
  msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent?: msdyn_iotalert_Result[] | null;
  msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent?: msdyn_iotdevice_Result[] | null;
}
interface msdyn_iotdevicecommand extends msdyn_iotdevicecommand_Base, msdyn_iotdevicecommand_Relationships {
  msdyn_Command_bind$msdyn_iotdevicecommanddefinitions?: string | null;
  msdyn_CustomerAsset_bind$msdyn_customerassets?: string | null;
  msdyn_Device_bind$msdyn_iotdevices?: string | null;
  msdyn_ParentAlert_bind$msdyn_iotalerts?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotdevicecommand_Create extends msdyn_iotdevicecommand {
}
interface msdyn_iotdevicecommand_Update extends msdyn_iotdevicecommand {
}
interface msdyn_iotdevicecommand_Select {
  createdby_guid: WebAttribute<msdyn_iotdevicecommand_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotdevicecommand_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotdevicecommand_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotdevicecommand_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotdevicecommand_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotdevicecommand_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotdevicecommand_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_command_guid: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_command_guid: string | null }, { msdyn_command_formatted?: string }>;
  msdyn_commandstatus: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_commandstatus: msdyn_iotdevicecommand_msdyn_commandstatus | null }, { msdyn_commandstatus_formatted?: string }>;
  msdyn_commandstatusreason: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_commandstatusreason: string | null }, {  }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_device_guid: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_device_guid: string | null }, { msdyn_device_formatted?: string }>;
  msdyn_deviceid: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_deviceid: string | null }, {  }>;
  msdyn_iotdevicecommandid: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_iotdevicecommandid: string | null }, {  }>;
  msdyn_message: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_message: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parentalert_guid: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_parentalert_guid: string | null }, { msdyn_parentalert_formatted?: string }>;
  msdyn_sendtoallconnecteddevices: WebAttribute<msdyn_iotdevicecommand_Select, { msdyn_sendtoallconnecteddevices: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iotdevicecommand_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotdevicecommand_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotdevicecommand_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotdevicecommand_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotdevicecommand_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotdevicecommand_Select, { statecode: msdyn_iotdevicecommand_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotdevicecommand_Select, { statuscode: msdyn_iotdevicecommand_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotdevicecommand_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotdevicecommand_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotdevicecommand_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotdevicecommand_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_command_guid: XQW.Guid;
  msdyn_commandstatus: msdyn_iotdevicecommand_msdyn_commandstatus;
  msdyn_commandstatusreason: string;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_device_guid: XQW.Guid;
  msdyn_deviceid: string;
  msdyn_iotdevicecommandid: XQW.Guid;
  msdyn_message: string;
  msdyn_name: string;
  msdyn_parentalert_guid: XQW.Guid;
  msdyn_sendtoallconnecteddevices: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotdevicecommand_statecode;
  statuscode: msdyn_iotdevicecommand_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotdevicecommand_Expand {
  createdby: WebExpand<msdyn_iotdevicecommand_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotdevicecommand_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotdevicecommand_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotdevicecommand_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Command: WebExpand<msdyn_iotdevicecommand_Expand, msdyn_iotdevicecommanddefinition_Select, msdyn_iotdevicecommanddefinition_Filter, { msdyn_Command: msdyn_iotdevicecommanddefinition_Result }>;
  msdyn_CustomerAsset: WebExpand<msdyn_iotdevicecommand_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_CustomerAsset: msdyn_customerasset_Result }>;
  msdyn_Device: WebExpand<msdyn_iotdevicecommand_Expand, msdyn_iotdevice_Select, msdyn_iotdevice_Filter, { msdyn_Device: msdyn_iotdevice_Result }>;
  msdyn_ParentAlert: WebExpand<msdyn_iotdevicecommand_Expand, msdyn_iotalert_Select, msdyn_iotalert_Filter, { msdyn_ParentAlert: msdyn_iotalert_Result }>;
  msdyn_iotdevicecommand_Annotations: WebExpand<msdyn_iotdevicecommand_Expand, Annotation_Select, Annotation_Filter, { msdyn_iotdevicecommand_Annotations: Annotation_Result[] }>;
  msdyn_iotdevicecommand_AsyncOperations: WebExpand<msdyn_iotdevicecommand_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotdevicecommand_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotdevicecommand_BulkDeleteFailures: WebExpand<msdyn_iotdevicecommand_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotdevicecommand_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotdevicecommand_DuplicateBaseRecord: WebExpand<msdyn_iotdevicecommand_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevicecommand_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevicecommand_DuplicateMatchingRecord: WebExpand<msdyn_iotdevicecommand_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevicecommand_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevicecommand_MailboxTrackingFolders: WebExpand<msdyn_iotdevicecommand_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotdevicecommand_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotdevicecommand_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotdevicecommand_ProcessSession: WebExpand<msdyn_iotdevicecommand_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotdevicecommand_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotdevicecommand_SyncErrors: WebExpand<msdyn_iotdevicecommand_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotdevicecommand_SyncErrors: SyncError_Result[] }>;
  msdyn_iotdevicecommand_UserEntityInstanceDatas: WebExpand<msdyn_iotdevicecommand_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotdevicecommand_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_iotdevicecommand_connections1: WebExpand<msdyn_iotdevicecommand_Expand, Connection_Select, Connection_Filter, { msdyn_iotdevicecommand_connections1: Connection_Result[] }>;
  msdyn_iotdevicecommand_connections2: WebExpand<msdyn_iotdevicecommand_Expand, Connection_Select, Connection_Filter, { msdyn_iotdevicecommand_connections2: Connection_Result[] }>;
  msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent: WebExpand<msdyn_iotdevicecommand_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent: msdyn_customerasset_Result[] }>;
  msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent: WebExpand<msdyn_iotdevicecommand_Expand, msdyn_iotalert_Select, msdyn_iotalert_Filter, { msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent: msdyn_iotalert_Result[] }>;
  msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent: WebExpand<msdyn_iotdevicecommand_Expand, msdyn_iotdevice_Select, msdyn_iotdevice_Filter, { msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent: msdyn_iotdevice_Result[] }>;
  ownerid: WebExpand<msdyn_iotdevicecommand_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotdevicecommand_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotdevicecommand_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotdevicecommand_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotdevicecommand_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_command_formatted?: string;
  msdyn_commandstatus_formatted?: string;
  msdyn_customerasset_formatted?: string;
  msdyn_device_formatted?: string;
  msdyn_parentalert_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotdevicecommand_Result extends msdyn_iotdevicecommand_Base, msdyn_iotdevicecommand_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_command_guid: string | null;
  msdyn_customerasset_guid: string | null;
  msdyn_device_guid: string | null;
  msdyn_parentalert_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iotdevicecommand_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Command: WebMappingRetrieve<msdyn_iotdevicecommanddefinition_Select,msdyn_iotdevicecommanddefinition_Expand,msdyn_iotdevicecommanddefinition_Filter,msdyn_iotdevicecommanddefinition_Fixed,msdyn_iotdevicecommanddefinition_Result,msdyn_iotdevicecommanddefinition_FormattedResult>;
  msdyn_CustomerAsset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_Device: WebMappingRetrieve<msdyn_iotdevice_Select,msdyn_iotdevice_Expand,msdyn_iotdevice_Filter,msdyn_iotdevice_Fixed,msdyn_iotdevice_Result,msdyn_iotdevice_FormattedResult>;
  msdyn_ParentAlert: WebMappingRetrieve<msdyn_iotalert_Select,msdyn_iotalert_Expand,msdyn_iotalert_Filter,msdyn_iotalert_Fixed,msdyn_iotalert_Result,msdyn_iotalert_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotdevicecommand_RelatedMany {
  msdyn_iotdevicecommand_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_iotdevicecommand_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotdevicecommand_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotdevicecommand_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevicecommand_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevicecommand_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotdevicecommand_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotdevicecommand_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotdevicecommand_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotdevicecommand_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_iotdevicecommand_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_iotdevicecommand_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_msdyn_iotdevicecommand_msdyn_customerasset_LastCommandSent: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_msdyn_iotdevicecommand_msdyn_iotalert_LastCommandSent: WebMappingRetrieve<msdyn_iotalert_Select,msdyn_iotalert_Expand,msdyn_iotalert_Filter,msdyn_iotalert_Fixed,msdyn_iotalert_Result,msdyn_iotalert_FormattedResult>;
  msdyn_msdyn_iotdevicecommand_msdyn_iotdevice_LastCommandSent: WebMappingRetrieve<msdyn_iotdevice_Select,msdyn_iotdevice_Expand,msdyn_iotdevice_Filter,msdyn_iotdevice_Fixed,msdyn_iotdevice_Result,msdyn_iotdevice_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotdevicecommands: WebMappingRetrieve<msdyn_iotdevicecommand_Select,msdyn_iotdevicecommand_Expand,msdyn_iotdevicecommand_Filter,msdyn_iotdevicecommand_Fixed,msdyn_iotdevicecommand_Result,msdyn_iotdevicecommand_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotdevicecommands: WebMappingRelated<msdyn_iotdevicecommand_RelatedOne,msdyn_iotdevicecommand_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotdevicecommands: WebMappingCUDA<msdyn_iotdevicecommand_Create,msdyn_iotdevicecommand_Update,msdyn_iotdevicecommand_Select>;
}
