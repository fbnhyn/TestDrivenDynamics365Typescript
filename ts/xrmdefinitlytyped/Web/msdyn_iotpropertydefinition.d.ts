interface msdyn_iotpropertydefinition_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_additionalproperties?: string | null;
  msdyn_editable?: boolean | null;
  msdyn_iotpropertydefinitionid?: string | null;
  msdyn_name?: string | null;
  msdyn_type?: msdyn_iotpropertydefinition_msdyn_type | null;
  msdyn_unit?: string | null;
  msdyn_visible?: boolean | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotpropertydefinition_statecode | null;
  statuscode?: msdyn_iotpropertydefinition_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotpropertydefinition_Relationships {
  msdyn_ParentProperty?: msdyn_iotpropertydefinition_Result | null;
  msdyn_iotdevicecommandparameters?: msdyn_iotdevicecommanddefinition_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_measurement?: msdyn_iotdevicevisualizationconfiguration_Result[] | null;
  msdyn_iotpropertydefinition_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotpropertydefinition_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotpropertydefinition_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotpropertydefinition_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotpropertydefinition_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotpropertydefinition_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotpropertydefinition_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotpropertydefinition_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property?: msdyn_iotdeviceproperty_Result[] | null;
  msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter?: msdyn_iotpropertydefinition_Result[] | null;
}
interface msdyn_iotpropertydefinition extends msdyn_iotpropertydefinition_Base, msdyn_iotpropertydefinition_Relationships {
  msdyn_ParentProperty_bind$msdyn_iotpropertydefinitions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotpropertydefinition_Create extends msdyn_iotpropertydefinition {
}
interface msdyn_iotpropertydefinition_Update extends msdyn_iotpropertydefinition {
}
interface msdyn_iotpropertydefinition_Select {
  createdby_guid: WebAttribute<msdyn_iotpropertydefinition_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotpropertydefinition_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotpropertydefinition_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotpropertydefinition_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotpropertydefinition_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotpropertydefinition_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotpropertydefinition_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_additionalproperties: WebAttribute<msdyn_iotpropertydefinition_Select, { msdyn_additionalproperties: string | null }, {  }>;
  msdyn_editable: WebAttribute<msdyn_iotpropertydefinition_Select, { msdyn_editable: boolean | null }, {  }>;
  msdyn_iotpropertydefinitionid: WebAttribute<msdyn_iotpropertydefinition_Select, { msdyn_iotpropertydefinitionid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_iotpropertydefinition_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parentproperty_guid: WebAttribute<msdyn_iotpropertydefinition_Select, { msdyn_parentproperty_guid: string | null }, { msdyn_parentproperty_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_iotpropertydefinition_Select, { msdyn_type: msdyn_iotpropertydefinition_msdyn_type | null }, { msdyn_type_formatted?: string }>;
  msdyn_unit: WebAttribute<msdyn_iotpropertydefinition_Select, { msdyn_unit: string | null }, {  }>;
  msdyn_visible: WebAttribute<msdyn_iotpropertydefinition_Select, { msdyn_visible: boolean | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_iotpropertydefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotpropertydefinition_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotpropertydefinition_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotpropertydefinition_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotpropertydefinition_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotpropertydefinition_Select, { statecode: msdyn_iotpropertydefinition_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotpropertydefinition_Select, { statuscode: msdyn_iotpropertydefinition_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotpropertydefinition_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotpropertydefinition_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotpropertydefinition_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotpropertydefinition_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_additionalproperties: string;
  msdyn_editable: boolean;
  msdyn_iotpropertydefinitionid: XQW.Guid;
  msdyn_name: string;
  msdyn_parentproperty_guid: XQW.Guid;
  msdyn_type: msdyn_iotpropertydefinition_msdyn_type;
  msdyn_unit: string;
  msdyn_visible: boolean;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotpropertydefinition_statecode;
  statuscode: msdyn_iotpropertydefinition_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotpropertydefinition_Expand {
  createdby: WebExpand<msdyn_iotpropertydefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotpropertydefinition_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotpropertydefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotpropertydefinition_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ParentProperty: WebExpand<msdyn_iotpropertydefinition_Expand, msdyn_iotpropertydefinition_Select, msdyn_iotpropertydefinition_Filter, { msdyn_ParentProperty: msdyn_iotpropertydefinition_Result }>;
  msdyn_iotdevicecommandparameters: WebExpand<msdyn_iotpropertydefinition_Expand, msdyn_iotdevicecommanddefinition_Select, msdyn_iotdevicecommanddefinition_Filter, { msdyn_iotdevicecommandparameters: msdyn_iotdevicecommanddefinition_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_measurement: WebExpand<msdyn_iotpropertydefinition_Expand, msdyn_iotdevicevisualizationconfiguration_Select, msdyn_iotdevicevisualizationconfiguration_Filter, { msdyn_iotdevicevisualizationconfiguration_measurement: msdyn_iotdevicevisualizationconfiguration_Result[] }>;
  msdyn_iotpropertydefinition_AsyncOperations: WebExpand<msdyn_iotpropertydefinition_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotpropertydefinition_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotpropertydefinition_BulkDeleteFailures: WebExpand<msdyn_iotpropertydefinition_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotpropertydefinition_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotpropertydefinition_DuplicateBaseRecord: WebExpand<msdyn_iotpropertydefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotpropertydefinition_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotpropertydefinition_DuplicateMatchingRecord: WebExpand<msdyn_iotpropertydefinition_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotpropertydefinition_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotpropertydefinition_MailboxTrackingFolders: WebExpand<msdyn_iotpropertydefinition_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotpropertydefinition_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotpropertydefinition_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotpropertydefinition_ProcessSession: WebExpand<msdyn_iotpropertydefinition_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotpropertydefinition_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotpropertydefinition_SyncErrors: WebExpand<msdyn_iotpropertydefinition_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotpropertydefinition_SyncErrors: SyncError_Result[] }>;
  msdyn_iotpropertydefinition_UserEntityInstanceDatas: WebExpand<msdyn_iotpropertydefinition_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotpropertydefinition_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property: WebExpand<msdyn_iotpropertydefinition_Expand, msdyn_iotdeviceproperty_Select, msdyn_iotdeviceproperty_Filter, { msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property: msdyn_iotdeviceproperty_Result[] }>;
  msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter: WebExpand<msdyn_iotpropertydefinition_Expand, msdyn_iotpropertydefinition_Select, msdyn_iotpropertydefinition_Filter, { msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter: msdyn_iotpropertydefinition_Result[] }>;
  ownerid: WebExpand<msdyn_iotpropertydefinition_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotpropertydefinition_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotpropertydefinition_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotpropertydefinition_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotpropertydefinition_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_parentproperty_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotpropertydefinition_Result extends msdyn_iotpropertydefinition_Base, msdyn_iotpropertydefinition_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_parentproperty_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iotpropertydefinition_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ParentProperty: WebMappingRetrieve<msdyn_iotpropertydefinition_Select,msdyn_iotpropertydefinition_Expand,msdyn_iotpropertydefinition_Filter,msdyn_iotpropertydefinition_Fixed,msdyn_iotpropertydefinition_Result,msdyn_iotpropertydefinition_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotpropertydefinition_RelatedMany {
  msdyn_iotdevicecommandparameters: WebMappingRetrieve<msdyn_iotdevicecommanddefinition_Select,msdyn_iotdevicecommanddefinition_Expand,msdyn_iotdevicecommanddefinition_Filter,msdyn_iotdevicecommanddefinition_Fixed,msdyn_iotdevicecommanddefinition_Result,msdyn_iotdevicecommanddefinition_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_measurement: WebMappingRetrieve<msdyn_iotdevicevisualizationconfiguration_Select,msdyn_iotdevicevisualizationconfiguration_Expand,msdyn_iotdevicevisualizationconfiguration_Filter,msdyn_iotdevicevisualizationconfiguration_Fixed,msdyn_iotdevicevisualizationconfiguration_Result,msdyn_iotdevicevisualizationconfiguration_FormattedResult>;
  msdyn_iotpropertydefinition_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotpropertydefinition_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotpropertydefinition_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotpropertydefinition_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotpropertydefinition_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotpropertydefinition_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotpropertydefinition_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotpropertydefinition_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotpropertydefinition_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_iotpropertydefinition_msdyn_iotdeviceproperty_Property: WebMappingRetrieve<msdyn_iotdeviceproperty_Select,msdyn_iotdeviceproperty_Expand,msdyn_iotdeviceproperty_Filter,msdyn_iotdeviceproperty_Fixed,msdyn_iotdeviceproperty_Result,msdyn_iotdeviceproperty_FormattedResult>;
  msdyn_msdyn_iotpropertydefinition_msdyn_iotpropertydefinition_ParentParameter: WebMappingRetrieve<msdyn_iotpropertydefinition_Select,msdyn_iotpropertydefinition_Expand,msdyn_iotpropertydefinition_Filter,msdyn_iotpropertydefinition_Fixed,msdyn_iotpropertydefinition_Result,msdyn_iotpropertydefinition_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotpropertydefinitions: WebMappingRetrieve<msdyn_iotpropertydefinition_Select,msdyn_iotpropertydefinition_Expand,msdyn_iotpropertydefinition_Filter,msdyn_iotpropertydefinition_Fixed,msdyn_iotpropertydefinition_Result,msdyn_iotpropertydefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotpropertydefinitions: WebMappingRelated<msdyn_iotpropertydefinition_RelatedOne,msdyn_iotpropertydefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotpropertydefinitions: WebMappingCUDA<msdyn_iotpropertydefinition_Create,msdyn_iotpropertydefinition_Update,msdyn_iotpropertydefinition_Select>;
}
