interface msdyn_geolocationsettings_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_beaconconfiguration?: string | null;
  msdyn_enablelocationtracking?: boolean | null;
  msdyn_fridayendtime?: Date | null;
  msdyn_fridaystarttime?: Date | null;
  msdyn_geolocationsettingsid?: string | null;
  msdyn_mondayendtime?: Date | null;
  msdyn_mondaystarttime?: Date | null;
  msdyn_name?: string | null;
  msdyn_refreshintervalseconds?: number | null;
  msdyn_saturdayendtime?: Date | null;
  msdyn_saturdaystarttime?: Date | null;
  msdyn_sundayendtime?: Date | null;
  msdyn_sundaystarttime?: Date | null;
  msdyn_thursdayendtime?: Date | null;
  msdyn_thursdaystarttime?: Date | null;
  msdyn_tuesdayendtime?: Date | null;
  msdyn_tuesdaystarttime?: Date | null;
  msdyn_wednesdayendtime?: Date | null;
  msdyn_wednesdaystarttime?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_geolocationsettings_statecode | null;
  statuscode?: msdyn_geolocationsettings_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_geolocationsettings_Relationships {
  msdyn_geolocationsettings_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_geolocationsettings_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_geolocationsettings_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_geolocationsettings_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_geolocationsettings_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_geolocationsettings_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_geolocationsettings_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_geolocationsettings_SyncErrors?: SyncError_Result[] | null;
  msdyn_geolocationsettings_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_geolocationsettings extends msdyn_geolocationsettings_Base, msdyn_geolocationsettings_Relationships {
}
interface msdyn_geolocationsettings_Create extends msdyn_geolocationsettings {
}
interface msdyn_geolocationsettings_Update extends msdyn_geolocationsettings {
}
interface msdyn_geolocationsettings_Select {
  createdby_guid: WebAttribute<msdyn_geolocationsettings_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_geolocationsettings_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_geolocationsettings_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_geolocationsettings_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_geolocationsettings_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_geolocationsettings_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_geolocationsettings_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_beaconconfiguration: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_beaconconfiguration: string | null }, {  }>;
  msdyn_enablelocationtracking: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_enablelocationtracking: boolean | null }, {  }>;
  msdyn_fridayendtime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_fridayendtime: Date | null }, { msdyn_fridayendtime_formatted?: string }>;
  msdyn_fridaystarttime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_fridaystarttime: Date | null }, { msdyn_fridaystarttime_formatted?: string }>;
  msdyn_geolocationsettingsid: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_geolocationsettingsid: string | null }, {  }>;
  msdyn_mondayendtime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_mondayendtime: Date | null }, { msdyn_mondayendtime_formatted?: string }>;
  msdyn_mondaystarttime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_mondaystarttime: Date | null }, { msdyn_mondaystarttime_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_name: string | null }, {  }>;
  msdyn_refreshintervalseconds: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_refreshintervalseconds: number | null }, {  }>;
  msdyn_saturdayendtime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_saturdayendtime: Date | null }, { msdyn_saturdayendtime_formatted?: string }>;
  msdyn_saturdaystarttime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_saturdaystarttime: Date | null }, { msdyn_saturdaystarttime_formatted?: string }>;
  msdyn_sundayendtime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_sundayendtime: Date | null }, { msdyn_sundayendtime_formatted?: string }>;
  msdyn_sundaystarttime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_sundaystarttime: Date | null }, { msdyn_sundaystarttime_formatted?: string }>;
  msdyn_thursdayendtime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_thursdayendtime: Date | null }, { msdyn_thursdayendtime_formatted?: string }>;
  msdyn_thursdaystarttime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_thursdaystarttime: Date | null }, { msdyn_thursdaystarttime_formatted?: string }>;
  msdyn_tuesdayendtime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_tuesdayendtime: Date | null }, { msdyn_tuesdayendtime_formatted?: string }>;
  msdyn_tuesdaystarttime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_tuesdaystarttime: Date | null }, { msdyn_tuesdaystarttime_formatted?: string }>;
  msdyn_wednesdayendtime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_wednesdayendtime: Date | null }, { msdyn_wednesdayendtime_formatted?: string }>;
  msdyn_wednesdaystarttime: WebAttribute<msdyn_geolocationsettings_Select, { msdyn_wednesdaystarttime: Date | null }, { msdyn_wednesdaystarttime_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_geolocationsettings_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_geolocationsettings_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_geolocationsettings_Select, { statecode: msdyn_geolocationsettings_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_geolocationsettings_Select, { statuscode: msdyn_geolocationsettings_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_geolocationsettings_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_geolocationsettings_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_geolocationsettings_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_geolocationsettings_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_beaconconfiguration: string;
  msdyn_enablelocationtracking: boolean;
  msdyn_fridayendtime: Date;
  msdyn_fridaystarttime: Date;
  msdyn_geolocationsettingsid: XQW.Guid;
  msdyn_mondayendtime: Date;
  msdyn_mondaystarttime: Date;
  msdyn_name: string;
  msdyn_refreshintervalseconds: number;
  msdyn_saturdayendtime: Date;
  msdyn_saturdaystarttime: Date;
  msdyn_sundayendtime: Date;
  msdyn_sundaystarttime: Date;
  msdyn_thursdayendtime: Date;
  msdyn_thursdaystarttime: Date;
  msdyn_tuesdayendtime: Date;
  msdyn_tuesdaystarttime: Date;
  msdyn_wednesdayendtime: Date;
  msdyn_wednesdaystarttime: Date;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_geolocationsettings_statecode;
  statuscode: msdyn_geolocationsettings_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_geolocationsettings_Expand {
  createdby: WebExpand<msdyn_geolocationsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_geolocationsettings_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_geolocationsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_geolocationsettings_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_geolocationsettings_AsyncOperations: WebExpand<msdyn_geolocationsettings_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_geolocationsettings_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_geolocationsettings_BulkDeleteFailures: WebExpand<msdyn_geolocationsettings_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_geolocationsettings_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_geolocationsettings_DuplicateBaseRecord: WebExpand<msdyn_geolocationsettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_geolocationsettings_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_geolocationsettings_DuplicateMatchingRecord: WebExpand<msdyn_geolocationsettings_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_geolocationsettings_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_geolocationsettings_MailboxTrackingFolders: WebExpand<msdyn_geolocationsettings_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_geolocationsettings_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_geolocationsettings_PrincipalObjectAttributeAccesses: WebExpand<msdyn_geolocationsettings_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_geolocationsettings_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_geolocationsettings_ProcessSession: WebExpand<msdyn_geolocationsettings_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_geolocationsettings_ProcessSession: ProcessSession_Result[] }>;
  msdyn_geolocationsettings_SyncErrors: WebExpand<msdyn_geolocationsettings_Expand, SyncError_Select, SyncError_Filter, { msdyn_geolocationsettings_SyncErrors: SyncError_Result[] }>;
  msdyn_geolocationsettings_UserEntityInstanceDatas: WebExpand<msdyn_geolocationsettings_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_geolocationsettings_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_geolocationsettings_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_geolocationsettings_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_fridayendtime_formatted?: string;
  msdyn_fridaystarttime_formatted?: string;
  msdyn_mondayendtime_formatted?: string;
  msdyn_mondaystarttime_formatted?: string;
  msdyn_saturdayendtime_formatted?: string;
  msdyn_saturdaystarttime_formatted?: string;
  msdyn_sundayendtime_formatted?: string;
  msdyn_sundaystarttime_formatted?: string;
  msdyn_thursdayendtime_formatted?: string;
  msdyn_thursdaystarttime_formatted?: string;
  msdyn_tuesdayendtime_formatted?: string;
  msdyn_tuesdaystarttime_formatted?: string;
  msdyn_wednesdayendtime_formatted?: string;
  msdyn_wednesdaystarttime_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_geolocationsettings_Result extends msdyn_geolocationsettings_Base, msdyn_geolocationsettings_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_geolocationsettings_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_geolocationsettings_RelatedMany {
  msdyn_geolocationsettings_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_geolocationsettings_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_geolocationsettings_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_geolocationsettings_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_geolocationsettings_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_geolocationsettings_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_geolocationsettings_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_geolocationsettings_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_geolocationsettings_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_geolocationsettingscollection: WebMappingRetrieve<msdyn_geolocationsettings_Select,msdyn_geolocationsettings_Expand,msdyn_geolocationsettings_Filter,msdyn_geolocationsettings_Fixed,msdyn_geolocationsettings_Result,msdyn_geolocationsettings_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_geolocationsettingscollection: WebMappingRelated<msdyn_geolocationsettings_RelatedOne,msdyn_geolocationsettings_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_geolocationsettingscollection: WebMappingCUDA<msdyn_geolocationsettings_Create,msdyn_geolocationsettings_Update,msdyn_geolocationsettings_Select>;
}
