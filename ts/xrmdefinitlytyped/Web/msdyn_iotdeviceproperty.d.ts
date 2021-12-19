interface msdyn_iotdeviceproperty_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_iotdevicepropertyid?: string | null;
  msdyn_istag?: boolean | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotdeviceproperty_statecode | null;
  statuscode?: msdyn_iotdeviceproperty_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotdeviceproperty_Relationships {
  msdyn_DeviceCategory?: msdyn_iotdevicecategory_Result | null;
  msdyn_Property?: msdyn_iotpropertydefinition_Result | null;
  msdyn_iotdeviceproperty_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotdeviceproperty_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotdeviceproperty_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdeviceproperty_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdeviceproperty_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotdeviceproperty_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotdeviceproperty_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotdeviceproperty_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotdeviceproperty_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_iotdeviceproperty extends msdyn_iotdeviceproperty_Base, msdyn_iotdeviceproperty_Relationships {
  msdyn_DeviceCategory_bind$msdyn_iotdevicecategories?: string | null;
  msdyn_Property_bind$msdyn_iotpropertydefinitions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotdeviceproperty_Create extends msdyn_iotdeviceproperty {
}
interface msdyn_iotdeviceproperty_Update extends msdyn_iotdeviceproperty {
}
interface msdyn_iotdeviceproperty_Select {
  createdby_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotdeviceproperty_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotdeviceproperty_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotdeviceproperty_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_devicecategory_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { msdyn_devicecategory_guid: string | null }, { msdyn_devicecategory_formatted?: string }>;
  msdyn_iotdevicepropertyid: WebAttribute<msdyn_iotdeviceproperty_Select, { msdyn_iotdevicepropertyid: string | null }, {  }>;
  msdyn_istag: WebAttribute<msdyn_iotdeviceproperty_Select, { msdyn_istag: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_iotdeviceproperty_Select, { msdyn_name: string | null }, {  }>;
  msdyn_property_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { msdyn_property_guid: string | null }, { msdyn_property_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_iotdeviceproperty_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotdeviceproperty_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotdeviceproperty_Select, { statecode: msdyn_iotdeviceproperty_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotdeviceproperty_Select, { statuscode: msdyn_iotdeviceproperty_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotdeviceproperty_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotdeviceproperty_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotdeviceproperty_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotdeviceproperty_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_devicecategory_guid: XQW.Guid;
  msdyn_iotdevicepropertyid: XQW.Guid;
  msdyn_istag: boolean;
  msdyn_name: string;
  msdyn_property_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotdeviceproperty_statecode;
  statuscode: msdyn_iotdeviceproperty_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotdeviceproperty_Expand {
  createdby: WebExpand<msdyn_iotdeviceproperty_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotdeviceproperty_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotdeviceproperty_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotdeviceproperty_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_DeviceCategory: WebExpand<msdyn_iotdeviceproperty_Expand, msdyn_iotdevicecategory_Select, msdyn_iotdevicecategory_Filter, { msdyn_DeviceCategory: msdyn_iotdevicecategory_Result }>;
  msdyn_Property: WebExpand<msdyn_iotdeviceproperty_Expand, msdyn_iotpropertydefinition_Select, msdyn_iotpropertydefinition_Filter, { msdyn_Property: msdyn_iotpropertydefinition_Result }>;
  msdyn_iotdeviceproperty_AsyncOperations: WebExpand<msdyn_iotdeviceproperty_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotdeviceproperty_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotdeviceproperty_BulkDeleteFailures: WebExpand<msdyn_iotdeviceproperty_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotdeviceproperty_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotdeviceproperty_DuplicateBaseRecord: WebExpand<msdyn_iotdeviceproperty_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdeviceproperty_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdeviceproperty_DuplicateMatchingRecord: WebExpand<msdyn_iotdeviceproperty_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdeviceproperty_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdeviceproperty_MailboxTrackingFolders: WebExpand<msdyn_iotdeviceproperty_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotdeviceproperty_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotdeviceproperty_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotdeviceproperty_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotdeviceproperty_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotdeviceproperty_ProcessSession: WebExpand<msdyn_iotdeviceproperty_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotdeviceproperty_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotdeviceproperty_SyncErrors: WebExpand<msdyn_iotdeviceproperty_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotdeviceproperty_SyncErrors: SyncError_Result[] }>;
  msdyn_iotdeviceproperty_UserEntityInstanceDatas: WebExpand<msdyn_iotdeviceproperty_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotdeviceproperty_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_iotdeviceproperty_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotdeviceproperty_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotdeviceproperty_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotdeviceproperty_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotdeviceproperty_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_devicecategory_formatted?: string;
  msdyn_property_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotdeviceproperty_Result extends msdyn_iotdeviceproperty_Base, msdyn_iotdeviceproperty_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_devicecategory_guid: string | null;
  msdyn_property_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iotdeviceproperty_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_DeviceCategory: WebMappingRetrieve<msdyn_iotdevicecategory_Select,msdyn_iotdevicecategory_Expand,msdyn_iotdevicecategory_Filter,msdyn_iotdevicecategory_Fixed,msdyn_iotdevicecategory_Result,msdyn_iotdevicecategory_FormattedResult>;
  msdyn_Property: WebMappingRetrieve<msdyn_iotpropertydefinition_Select,msdyn_iotpropertydefinition_Expand,msdyn_iotpropertydefinition_Filter,msdyn_iotpropertydefinition_Fixed,msdyn_iotpropertydefinition_Result,msdyn_iotpropertydefinition_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotdeviceproperty_RelatedMany {
  msdyn_iotdeviceproperty_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotdeviceproperty_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotdeviceproperty_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdeviceproperty_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdeviceproperty_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotdeviceproperty_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotdeviceproperty_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotdeviceproperty_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotdeviceproperty_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotdeviceproperties: WebMappingRetrieve<msdyn_iotdeviceproperty_Select,msdyn_iotdeviceproperty_Expand,msdyn_iotdeviceproperty_Filter,msdyn_iotdeviceproperty_Fixed,msdyn_iotdeviceproperty_Result,msdyn_iotdeviceproperty_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotdeviceproperties: WebMappingRelated<msdyn_iotdeviceproperty_RelatedOne,msdyn_iotdeviceproperty_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotdeviceproperties: WebMappingCUDA<msdyn_iotdeviceproperty_Create,msdyn_iotdeviceproperty_Update,msdyn_iotdeviceproperty_Select>;
}
