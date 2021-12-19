interface msdyn_schedulingparameter_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_advancedsettings?: string | null;
  msdyn_autoupdatebookingtravel?: msdyn_autoupdatebookingtraveltype | null;
  msdyn_backgroundjobsconfiguration?: string | null;
  msdyn_connecttomaps?: boolean | null;
  msdyn_customgeolatitudefield?: string | null;
  msdyn_customgeolocationentity?: string | null;
  msdyn_customgeolongitudefield?: string | null;
  msdyn_customgeoresourcefield?: string | null;
  msdyn_customgeotimestampfield?: string | null;
  msdyn_defaultradiusunit?: msdyn_distanceunit | null;
  msdyn_defaultradiusvalue?: number | null;
  msdyn_disablesanitizinghtmltemplates?: boolean | null;
  msdyn_enableappointments?: msdyn_enableappointmentsoption | null;
  msdyn_enablecustomgeolocation?: boolean | null;
  msdyn_enableoptimizer?: boolean | null;
  msdyn_enableoutlookschedules?: msdyn_enableappointmentsoption | null;
  msdyn_geolocationexpiresafterxminutes?: number | null;
  msdyn_geolocationrefreshintervalseconds?: number | null;
  msdyn_internalflag?: string | null;
  msdyn_mapapikey?: string | null;
  msdyn_name?: string | null;
  msdyn_saautofilterserviceterritory?: boolean | null;
  msdyn_scheduleboardrefreshintervalseconds?: number | null;
  msdyn_schedulingparameterid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_schedulingparameter_statecode | null;
  statuscode?: msdyn_schedulingparameter_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_schedulingparameter_Relationships {
  msdyn_schedulingparameter_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_schedulingparameter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_schedulingparameter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_schedulingparameter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_schedulingparameter_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_schedulingparameter_SyncErrors?: SyncError_Result[] | null;
  msdyn_schedulingparameter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_schedulingparameter extends msdyn_schedulingparameter_Base, msdyn_schedulingparameter_Relationships {
}
interface msdyn_schedulingparameter_Create extends msdyn_schedulingparameter {
}
interface msdyn_schedulingparameter_Update extends msdyn_schedulingparameter {
}
interface msdyn_schedulingparameter_Select {
  createdby_guid: WebAttribute<msdyn_schedulingparameter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_schedulingparameter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_schedulingparameter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_schedulingparameter_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_schedulingparameter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_schedulingparameter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_schedulingparameter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_advancedsettings: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_advancedsettings: string | null }, {  }>;
  msdyn_autoupdatebookingtravel: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_autoupdatebookingtravel: msdyn_autoupdatebookingtraveltype | null }, { msdyn_autoupdatebookingtravel_formatted?: string }>;
  msdyn_backgroundjobsconfiguration: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_backgroundjobsconfiguration: string | null }, {  }>;
  msdyn_connecttomaps: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_connecttomaps: boolean | null }, {  }>;
  msdyn_customgeolatitudefield: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_customgeolatitudefield: string | null }, {  }>;
  msdyn_customgeolocationentity: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_customgeolocationentity: string | null }, {  }>;
  msdyn_customgeolongitudefield: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_customgeolongitudefield: string | null }, {  }>;
  msdyn_customgeoresourcefield: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_customgeoresourcefield: string | null }, {  }>;
  msdyn_customgeotimestampfield: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_customgeotimestampfield: string | null }, {  }>;
  msdyn_defaultradiusunit: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_defaultradiusunit: msdyn_distanceunit | null }, { msdyn_defaultradiusunit_formatted?: string }>;
  msdyn_defaultradiusvalue: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_defaultradiusvalue: number | null }, {  }>;
  msdyn_disablesanitizinghtmltemplates: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_disablesanitizinghtmltemplates: boolean | null }, {  }>;
  msdyn_enableappointments: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_enableappointments: msdyn_enableappointmentsoption | null }, { msdyn_enableappointments_formatted?: string }>;
  msdyn_enablecustomgeolocation: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_enablecustomgeolocation: boolean | null }, {  }>;
  msdyn_enableoptimizer: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_enableoptimizer: boolean | null }, {  }>;
  msdyn_enableoutlookschedules: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_enableoutlookschedules: msdyn_enableappointmentsoption | null }, { msdyn_enableoutlookschedules_formatted?: string }>;
  msdyn_geolocationexpiresafterxminutes: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_geolocationexpiresafterxminutes: number | null }, {  }>;
  msdyn_geolocationrefreshintervalseconds: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_geolocationrefreshintervalseconds: number | null }, {  }>;
  msdyn_internalflag: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_internalflag: string | null }, {  }>;
  msdyn_mapapikey: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_mapapikey: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_name: string | null }, {  }>;
  msdyn_saautofilterserviceterritory: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_saautofilterserviceterritory: boolean | null }, {  }>;
  msdyn_scheduleboardrefreshintervalseconds: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_scheduleboardrefreshintervalseconds: number | null }, {  }>;
  msdyn_schedulingparameterid: WebAttribute<msdyn_schedulingparameter_Select, { msdyn_schedulingparameterid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_schedulingparameter_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_schedulingparameter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_schedulingparameter_Select, { statecode: msdyn_schedulingparameter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_schedulingparameter_Select, { statuscode: msdyn_schedulingparameter_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_schedulingparameter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_schedulingparameter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_schedulingparameter_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_schedulingparameter_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_advancedsettings: string;
  msdyn_autoupdatebookingtravel: msdyn_autoupdatebookingtraveltype;
  msdyn_backgroundjobsconfiguration: string;
  msdyn_connecttomaps: boolean;
  msdyn_customgeolatitudefield: string;
  msdyn_customgeolocationentity: string;
  msdyn_customgeolongitudefield: string;
  msdyn_customgeoresourcefield: string;
  msdyn_customgeotimestampfield: string;
  msdyn_defaultradiusunit: msdyn_distanceunit;
  msdyn_defaultradiusvalue: number;
  msdyn_disablesanitizinghtmltemplates: boolean;
  msdyn_enableappointments: msdyn_enableappointmentsoption;
  msdyn_enablecustomgeolocation: boolean;
  msdyn_enableoptimizer: boolean;
  msdyn_enableoutlookschedules: msdyn_enableappointmentsoption;
  msdyn_geolocationexpiresafterxminutes: number;
  msdyn_geolocationrefreshintervalseconds: number;
  msdyn_internalflag: string;
  msdyn_mapapikey: string;
  msdyn_name: string;
  msdyn_saautofilterserviceterritory: boolean;
  msdyn_scheduleboardrefreshintervalseconds: number;
  msdyn_schedulingparameterid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_schedulingparameter_statecode;
  statuscode: msdyn_schedulingparameter_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_schedulingparameter_Expand {
  createdby: WebExpand<msdyn_schedulingparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_schedulingparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_schedulingparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_schedulingparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_schedulingparameter_AsyncOperations: WebExpand<msdyn_schedulingparameter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_schedulingparameter_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_schedulingparameter_BulkDeleteFailures: WebExpand<msdyn_schedulingparameter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_schedulingparameter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_schedulingparameter_MailboxTrackingFolders: WebExpand<msdyn_schedulingparameter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_schedulingparameter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_schedulingparameter_PrincipalObjectAttributeAccesses: WebExpand<msdyn_schedulingparameter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_schedulingparameter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_schedulingparameter_ProcessSession: WebExpand<msdyn_schedulingparameter_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_schedulingparameter_ProcessSession: ProcessSession_Result[] }>;
  msdyn_schedulingparameter_SyncErrors: WebExpand<msdyn_schedulingparameter_Expand, SyncError_Select, SyncError_Filter, { msdyn_schedulingparameter_SyncErrors: SyncError_Result[] }>;
  msdyn_schedulingparameter_UserEntityInstanceDatas: WebExpand<msdyn_schedulingparameter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_schedulingparameter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  organizationid: WebExpand<msdyn_schedulingparameter_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_schedulingparameter_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_autoupdatebookingtravel_formatted?: string;
  msdyn_defaultradiusunit_formatted?: string;
  msdyn_enableappointments_formatted?: string;
  msdyn_enableoutlookschedules_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_schedulingparameter_Result extends msdyn_schedulingparameter_Base, msdyn_schedulingparameter_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_schedulingparameter_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_schedulingparameter_RelatedMany {
  msdyn_schedulingparameter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_schedulingparameter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_schedulingparameter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_schedulingparameter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_schedulingparameter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_schedulingparameter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_schedulingparameter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_schedulingparameters: WebMappingRetrieve<msdyn_schedulingparameter_Select,msdyn_schedulingparameter_Expand,msdyn_schedulingparameter_Filter,msdyn_schedulingparameter_Fixed,msdyn_schedulingparameter_Result,msdyn_schedulingparameter_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_schedulingparameters: WebMappingRelated<msdyn_schedulingparameter_RelatedOne,msdyn_schedulingparameter_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_schedulingparameters: WebMappingCUDA<msdyn_schedulingparameter_Create,msdyn_schedulingparameter_Update,msdyn_schedulingparameter_Select>;
}
