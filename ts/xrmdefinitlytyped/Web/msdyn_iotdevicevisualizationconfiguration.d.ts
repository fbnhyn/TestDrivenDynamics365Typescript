interface msdyn_iotdevicevisualizationconfiguration_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actionname?: string | null;
  msdyn_aggregation?: msdyn_iotaggregation | null;
  msdyn_deviceevent?: msdyn_deviceevent | null;
  msdyn_iotdevicevisualizationconfigurationid?: string | null;
  msdyn_name?: string | null;
  msdyn_position?: number | null;
  msdyn_timerangetype?: msdyn_timerangetype | null;
  msdyn_timerangevalue?: number | null;
  msdyn_visualizationconfigurationtype?: msdyn_visualizationconfigtype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_iotdevicevisualizationconfiguration_statecode | null;
  statuscode?: msdyn_iotdevicevisualizationconfiguration_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_iotdevicevisualizationconfiguration_Relationships {
  msdyn_IoTDevice?: msdyn_iotdevice_Result | null;
  msdyn_IoTDeviceCategory?: msdyn_iotdevicecategory_Result | null;
  msdyn_Measurement?: msdyn_iotpropertydefinition_Result | null;
  msdyn_iotdevicevisualizationconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_iotdevicevisualizationconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_iotdevicevisualizationconfiguration extends msdyn_iotdevicevisualizationconfiguration_Base, msdyn_iotdevicevisualizationconfiguration_Relationships {
  msdyn_IoTDeviceCategory_bind$msdyn_iotdevicecategories?: string | null;
  msdyn_IoTDevice_bind$msdyn_iotdevices?: string | null;
  msdyn_Measurement_bind$msdyn_iotpropertydefinitions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_iotdevicevisualizationconfiguration_Create extends msdyn_iotdevicevisualizationconfiguration {
}
interface msdyn_iotdevicevisualizationconfiguration_Update extends msdyn_iotdevicevisualizationconfiguration {
}
interface msdyn_iotdevicevisualizationconfiguration_Select {
  createdby_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actionname: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_actionname: string | null }, {  }>;
  msdyn_aggregation: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_aggregation: msdyn_iotaggregation | null }, { msdyn_aggregation_formatted?: string }>;
  msdyn_deviceevent: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_deviceevent: msdyn_deviceevent | null }, { msdyn_deviceevent_formatted?: string }>;
  msdyn_iotdevice_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_iotdevice_guid: string | null }, { msdyn_iotdevice_formatted?: string }>;
  msdyn_iotdevicecategory_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_iotdevicecategory_guid: string | null }, { msdyn_iotdevicecategory_formatted?: string }>;
  msdyn_iotdevicevisualizationconfigurationid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_iotdevicevisualizationconfigurationid: string | null }, {  }>;
  msdyn_measurement_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_measurement_guid: string | null }, { msdyn_measurement_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_position: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_position: number | null }, {  }>;
  msdyn_timerangetype: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_timerangetype: msdyn_timerangetype | null }, { msdyn_timerangetype_formatted?: string }>;
  msdyn_timerangevalue: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_timerangevalue: number | null }, {  }>;
  msdyn_visualizationconfigurationtype: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { msdyn_visualizationconfigurationtype: msdyn_visualizationconfigtype | null }, { msdyn_visualizationconfigurationtype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { statecode: msdyn_iotdevicevisualizationconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { statuscode: msdyn_iotdevicevisualizationconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_iotdevicevisualizationconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_iotdevicevisualizationconfiguration_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actionname: string;
  msdyn_aggregation: msdyn_iotaggregation;
  msdyn_deviceevent: msdyn_deviceevent;
  msdyn_iotdevice_guid: XQW.Guid;
  msdyn_iotdevicecategory_guid: XQW.Guid;
  msdyn_iotdevicevisualizationconfigurationid: XQW.Guid;
  msdyn_measurement_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_position: number;
  msdyn_timerangetype: msdyn_timerangetype;
  msdyn_timerangevalue: number;
  msdyn_visualizationconfigurationtype: msdyn_visualizationconfigtype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_iotdevicevisualizationconfiguration_statecode;
  statuscode: msdyn_iotdevicevisualizationconfiguration_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_iotdevicevisualizationconfiguration_Expand {
  createdby: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_IoTDevice: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, msdyn_iotdevice_Select, msdyn_iotdevice_Filter, { msdyn_IoTDevice: msdyn_iotdevice_Result }>;
  msdyn_IoTDeviceCategory: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, msdyn_iotdevicecategory_Select, msdyn_iotdevicecategory_Filter, { msdyn_IoTDeviceCategory: msdyn_iotdevicecategory_Result }>;
  msdyn_Measurement: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, msdyn_iotpropertydefinition_Select, msdyn_iotpropertydefinition_Filter, { msdyn_Measurement: msdyn_iotpropertydefinition_Result }>;
  msdyn_iotdevicevisualizationconfiguration_AsyncOperations: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_iotdevicevisualizationconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_ProcessSession: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_iotdevicevisualizationconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_SyncErrors: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_iotdevicevisualizationconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_iotdevicevisualizationconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_iotdevicevisualizationconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_iotdevicevisualizationconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_iotdevicevisualizationconfiguration_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_aggregation_formatted?: string;
  msdyn_deviceevent_formatted?: string;
  msdyn_iotdevice_formatted?: string;
  msdyn_iotdevicecategory_formatted?: string;
  msdyn_measurement_formatted?: string;
  msdyn_timerangetype_formatted?: string;
  msdyn_visualizationconfigurationtype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_iotdevicevisualizationconfiguration_Result extends msdyn_iotdevicevisualizationconfiguration_Base, msdyn_iotdevicevisualizationconfiguration_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_iotdevice_guid: string | null;
  msdyn_iotdevicecategory_guid: string | null;
  msdyn_measurement_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_iotdevicevisualizationconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_IoTDevice: WebMappingRetrieve<msdyn_iotdevice_Select,msdyn_iotdevice_Expand,msdyn_iotdevice_Filter,msdyn_iotdevice_Fixed,msdyn_iotdevice_Result,msdyn_iotdevice_FormattedResult>;
  msdyn_IoTDeviceCategory: WebMappingRetrieve<msdyn_iotdevicecategory_Select,msdyn_iotdevicecategory_Expand,msdyn_iotdevicecategory_Filter,msdyn_iotdevicecategory_Fixed,msdyn_iotdevicecategory_Result,msdyn_iotdevicecategory_FormattedResult>;
  msdyn_Measurement: WebMappingRetrieve<msdyn_iotpropertydefinition_Select,msdyn_iotpropertydefinition_Expand,msdyn_iotpropertydefinition_Filter,msdyn_iotpropertydefinition_Fixed,msdyn_iotpropertydefinition_Result,msdyn_iotpropertydefinition_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_iotdevicevisualizationconfiguration_RelatedMany {
  msdyn_iotdevicevisualizationconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_iotdevicevisualizationconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_iotdevicevisualizationconfigurations: WebMappingRetrieve<msdyn_iotdevicevisualizationconfiguration_Select,msdyn_iotdevicevisualizationconfiguration_Expand,msdyn_iotdevicevisualizationconfiguration_Filter,msdyn_iotdevicevisualizationconfiguration_Fixed,msdyn_iotdevicevisualizationconfiguration_Result,msdyn_iotdevicevisualizationconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_iotdevicevisualizationconfigurations: WebMappingRelated<msdyn_iotdevicevisualizationconfiguration_RelatedOne,msdyn_iotdevicevisualizationconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_iotdevicevisualizationconfigurations: WebMappingCUDA<msdyn_iotdevicevisualizationconfiguration_Create,msdyn_iotdevicevisualizationconfiguration_Update,msdyn_iotdevicevisualizationconfiguration_Select>;
}
