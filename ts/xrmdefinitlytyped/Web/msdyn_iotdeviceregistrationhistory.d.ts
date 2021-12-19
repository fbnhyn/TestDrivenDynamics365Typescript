interface msdyn_iotdeviceregistrationhistory_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_action?: msdyn_iotdeviceregistrationhistory_msdyn_action | null;
  msdyn_iotdeviceregistrationhistoryid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotdeviceregistrationhistory_statecode | null;
  statuscode?: msdyn_iotdeviceregistrationhistory_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotdeviceregistrationhistory_Relationships {
  msdyn_Device?: msdyn_iotdevice_Result | null;
  msdyn_iotdeviceregistrationhistory_Annotations?: Annotation_Result[] | null;
  msdyn_iotdeviceregistrationhistory_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotdeviceregistrationhistory_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotdeviceregistrationhistory_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdeviceregistrationhistory_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdeviceregistrationhistory_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotdeviceregistrationhistory_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotdeviceregistrationhistory_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotdeviceregistrationhistory_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotdeviceregistrationhistory_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_iotdeviceregistrationhistory_connections1?: Connection_Result[] | null;
  msdyn_iotdeviceregistrationhistory_connections2?: Connection_Result[] | null;
}
interface msdyn_iotdeviceregistrationhistory extends msdyn_iotdeviceregistrationhistory_Base, msdyn_iotdeviceregistrationhistory_Relationships {
  msdyn_Device_bind$msdyn_iotdevices?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotdeviceregistrationhistory_Create extends msdyn_iotdeviceregistrationhistory {
}
interface msdyn_iotdeviceregistrationhistory_Update extends msdyn_iotdeviceregistrationhistory {
}
interface msdyn_iotdeviceregistrationhistory_Select {
  createdby_guid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_action: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { msdyn_action: msdyn_iotdeviceregistrationhistory_msdyn_action | null }, { msdyn_action_formatted?: string }>;
  msdyn_device_guid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { msdyn_device_guid: string | null }, { msdyn_device_formatted?: string }>;
  msdyn_iotdeviceregistrationhistoryid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { msdyn_iotdeviceregistrationhistoryid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { statecode: msdyn_iotdeviceregistrationhistory_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { statuscode: msdyn_iotdeviceregistrationhistory_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotdeviceregistrationhistory_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotdeviceregistrationhistory_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_action: msdyn_iotdeviceregistrationhistory_msdyn_action;
  msdyn_device_guid: XQW.Guid;
  msdyn_iotdeviceregistrationhistoryid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotdeviceregistrationhistory_statecode;
  statuscode: msdyn_iotdeviceregistrationhistory_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotdeviceregistrationhistory_Expand {
  createdby: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_Device: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, msdyn_iotdevice_Select, msdyn_iotdevice_Filter, { msdyn_Device: msdyn_iotdevice_Result }>;
  msdyn_iotdeviceregistrationhistory_Annotations: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, Annotation_Select, Annotation_Filter, { msdyn_iotdeviceregistrationhistory_Annotations: Annotation_Result[] }>;
  msdyn_iotdeviceregistrationhistory_AsyncOperations: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotdeviceregistrationhistory_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotdeviceregistrationhistory_BulkDeleteFailures: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotdeviceregistrationhistory_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotdeviceregistrationhistory_DuplicateBaseRecord: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdeviceregistrationhistory_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdeviceregistrationhistory_DuplicateMatchingRecord: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdeviceregistrationhistory_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdeviceregistrationhistory_MailboxTrackingFolders: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotdeviceregistrationhistory_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotdeviceregistrationhistory_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotdeviceregistrationhistory_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotdeviceregistrationhistory_ProcessSession: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotdeviceregistrationhistory_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotdeviceregistrationhistory_SyncErrors: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotdeviceregistrationhistory_SyncErrors: SyncError_Result[] }>;
  msdyn_iotdeviceregistrationhistory_UserEntityInstanceDatas: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotdeviceregistrationhistory_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_iotdeviceregistrationhistory_connections1: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, Connection_Select, Connection_Filter, { msdyn_iotdeviceregistrationhistory_connections1: Connection_Result[] }>;
  msdyn_iotdeviceregistrationhistory_connections2: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, Connection_Select, Connection_Filter, { msdyn_iotdeviceregistrationhistory_connections2: Connection_Result[] }>;
  ownerid: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotdeviceregistrationhistory_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotdeviceregistrationhistory_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_action_formatted?: string;
  msdyn_device_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotdeviceregistrationhistory_Result extends msdyn_iotdeviceregistrationhistory_Base, msdyn_iotdeviceregistrationhistory_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_device_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iotdeviceregistrationhistory_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_Device: WebMappingRetrieve<msdyn_iotdevice_Select,msdyn_iotdevice_Expand,msdyn_iotdevice_Filter,msdyn_iotdevice_Fixed,msdyn_iotdevice_Result,msdyn_iotdevice_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotdeviceregistrationhistory_RelatedMany {
  msdyn_iotdeviceregistrationhistory_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_iotdeviceregistrationhistory_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotdeviceregistrationhistories: WebMappingRetrieve<msdyn_iotdeviceregistrationhistory_Select,msdyn_iotdeviceregistrationhistory_Expand,msdyn_iotdeviceregistrationhistory_Filter,msdyn_iotdeviceregistrationhistory_Fixed,msdyn_iotdeviceregistrationhistory_Result,msdyn_iotdeviceregistrationhistory_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotdeviceregistrationhistories: WebMappingRelated<msdyn_iotdeviceregistrationhistory_RelatedOne,msdyn_iotdeviceregistrationhistory_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotdeviceregistrationhistories: WebMappingCUDA<msdyn_iotdeviceregistrationhistory_Create,msdyn_iotdeviceregistrationhistory_Update,msdyn_iotdeviceregistrationhistory_Select>;
}
