interface msdyn_iotdevicecommanddefinition_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_iotdevicecommanddefinitionid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotdevicecommanddefinition_statecode | null;
  statuscode?: msdyn_iotdevicecommanddefinition_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotdevicecommanddefinition_Relationships {
  msdyn_iotdevicecategorycommands?: msdyn_iotdevicecategory_Result[] | null;
  msdyn_iotdevicecommanddefinition_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotdevicecommanddefinition_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotdevicecommanddefinition_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevicecommanddefinition_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevicecommanddefinition_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotdevicecommanddefinition_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotdevicecommanddefinition_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotdevicecommanddefinition_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotdevicecommanddefinition_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_iotdevicecommandparameters?: msdyn_iotpropertydefinition_Result[] | null;
  msdyn_msdyn_iotdevicecommanddefinition_msdyn_iotdevicecommand_Command?: msdyn_iotdevicecommand_Result[] | null;
}
interface msdyn_iotdevicecommanddefinition extends msdyn_iotdevicecommanddefinition_Base, msdyn_iotdevicecommanddefinition_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotdevicecommanddefinition_Create extends msdyn_iotdevicecommanddefinition {
}
interface msdyn_iotdevicecommanddefinition_Update extends msdyn_iotdevicecommanddefinition {
}
interface msdyn_iotdevicecommanddefinition_Select {
  createdby_guid: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_iotdevicecommanddefinitionid: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { msdyn_iotdevicecommanddefinitionid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { msdyn_name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { statecode: msdyn_iotdevicecommanddefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { statuscode: msdyn_iotdevicecommanddefinition_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotdevicecommanddefinition_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotdevicecommanddefinition_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_iotdevicecommanddefinitionid: XQW.Guid;
  msdyn_name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotdevicecommanddefinition_statecode;
  statuscode: msdyn_iotdevicecommanddefinition_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotdevicecommanddefinition_Expand {
  createdby: WebExpand<msdyn_iotdevicecommanddefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotdevicecommanddefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotdevicecommanddefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotdevicecommanddefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_iotdevicecategorycommands: WebExpand<msdyn_iotdevicecommanddefinition_Expand, msdyn_iotdevicecategory_Select, msdyn_iotdevicecategory_Filter, { msdyn_iotdevicecategorycommands: msdyn_iotdevicecategory_Result[] }>;
  msdyn_iotdevicecommanddefinition_AsyncOperations: WebExpand<msdyn_iotdevicecommanddefinition_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotdevicecommanddefinition_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotdevicecommanddefinition_BulkDeleteFailures: WebExpand<msdyn_iotdevicecommanddefinition_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotdevicecommanddefinition_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotdevicecommanddefinition_DuplicateBaseRecord: WebExpand<msdyn_iotdevicecommanddefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevicecommanddefinition_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevicecommanddefinition_DuplicateMatchingRecord: WebExpand<msdyn_iotdevicecommanddefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevicecommanddefinition_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevicecommanddefinition_MailboxTrackingFolders: WebExpand<msdyn_iotdevicecommanddefinition_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotdevicecommanddefinition_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotdevicecommanddefinition_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotdevicecommanddefinition_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotdevicecommanddefinition_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotdevicecommanddefinition_ProcessSession: WebExpand<msdyn_iotdevicecommanddefinition_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotdevicecommanddefinition_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotdevicecommanddefinition_SyncErrors: WebExpand<msdyn_iotdevicecommanddefinition_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotdevicecommanddefinition_SyncErrors: SyncError_Result[] }>;
  msdyn_iotdevicecommanddefinition_UserEntityInstanceDatas: WebExpand<msdyn_iotdevicecommanddefinition_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotdevicecommanddefinition_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_iotdevicecommandparameters: WebExpand<msdyn_iotdevicecommanddefinition_Expand, msdyn_iotpropertydefinition_Select, msdyn_iotpropertydefinition_Filter, { msdyn_iotdevicecommandparameters: msdyn_iotpropertydefinition_Result[] }>;
  msdyn_msdyn_iotdevicecommanddefinition_msdyn_iotdevicecommand_Command: WebExpand<msdyn_iotdevicecommanddefinition_Expand, msdyn_iotdevicecommand_Select, msdyn_iotdevicecommand_Filter, { msdyn_msdyn_iotdevicecommanddefinition_msdyn_iotdevicecommand_Command: msdyn_iotdevicecommand_Result[] }>;
  ownerid: WebExpand<msdyn_iotdevicecommanddefinition_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotdevicecommanddefinition_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotdevicecommanddefinition_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotdevicecommanddefinition_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotdevicecommanddefinition_FormattedResult {
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
interface msdyn_iotdevicecommanddefinition_Result extends msdyn_iotdevicecommanddefinition_Base, msdyn_iotdevicecommanddefinition_Relationships {
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
interface msdyn_iotdevicecommanddefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotdevicecommanddefinition_RelatedMany {
  msdyn_iotdevicecategorycommands: WebMappingRetrieve<msdyn_iotdevicecategory_Select,msdyn_iotdevicecategory_Expand,msdyn_iotdevicecategory_Filter,msdyn_iotdevicecategory_Fixed,msdyn_iotdevicecategory_Result,msdyn_iotdevicecategory_FormattedResult>;
  msdyn_iotdevicecommanddefinition_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotdevicecommanddefinition_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotdevicecommanddefinition_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevicecommanddefinition_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevicecommanddefinition_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotdevicecommanddefinition_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotdevicecommanddefinition_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotdevicecommanddefinition_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotdevicecommanddefinition_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_iotdevicecommandparameters: WebMappingRetrieve<msdyn_iotpropertydefinition_Select,msdyn_iotpropertydefinition_Expand,msdyn_iotpropertydefinition_Filter,msdyn_iotpropertydefinition_Fixed,msdyn_iotpropertydefinition_Result,msdyn_iotpropertydefinition_FormattedResult>;
  msdyn_msdyn_iotdevicecommanddefinition_msdyn_iotdevicecommand_Command: WebMappingRetrieve<msdyn_iotdevicecommand_Select,msdyn_iotdevicecommand_Expand,msdyn_iotdevicecommand_Filter,msdyn_iotdevicecommand_Fixed,msdyn_iotdevicecommand_Result,msdyn_iotdevicecommand_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotdevicecommanddefinitions: WebMappingRetrieve<msdyn_iotdevicecommanddefinition_Select,msdyn_iotdevicecommanddefinition_Expand,msdyn_iotdevicecommanddefinition_Filter,msdyn_iotdevicecommanddefinition_Fixed,msdyn_iotdevicecommanddefinition_Result,msdyn_iotdevicecommanddefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotdevicecommanddefinitions: WebMappingRelated<msdyn_iotdevicecommanddefinition_RelatedOne,msdyn_iotdevicecommanddefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotdevicecommanddefinitions: WebMappingCUDA<msdyn_iotdevicecommanddefinition_Create,msdyn_iotdevicecommanddefinition_Update,msdyn_iotdevicecommanddefinition_Select>;
}
