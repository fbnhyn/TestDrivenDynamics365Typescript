interface msdyn_channelprovider_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_apiversion?: msdyn_apiversionoptions | null;
  msdyn_channelproviderid?: string | null;
  msdyn_channelurl?: string | null;
  msdyn_customparams?: string | null;
  msdyn_enableanalytics?: boolean | null;
  msdyn_enableoutbound?: boolean | null;
  msdyn_label?: string | null;
  msdyn_name?: string | null;
  msdyn_sortorder?: number | null;
  msdyn_trusteddomain?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_channelprovider_statecode | null;
  statuscode?: msdyn_channelprovider_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_channelprovider_Relationships {
  msdyn_appconfig_msdyn_channelprovider?: msdyn_appconfiguration_Result[] | null;
  msdyn_channelprovider_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_channelprovider_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_channelprovider_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_channelprovider_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_channelprovider_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_channelprovider_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_channelprovider_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_channelprovider_SyncErrors?: SyncError_Result[] | null;
  msdyn_channelprovider_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_channelprovider extends msdyn_channelprovider_Base, msdyn_channelprovider_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_channelprovider_Create extends msdyn_channelprovider {
}
interface msdyn_channelprovider_Update extends msdyn_channelprovider {
}
interface msdyn_channelprovider_Select {
  componentidunique: WebAttribute<msdyn_channelprovider_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_channelprovider_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_channelprovider_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_channelprovider_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_channelprovider_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_channelprovider_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_channelprovider_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_channelprovider_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_channelprovider_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_channelprovider_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_channelprovider_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_apiversion: WebAttribute<msdyn_channelprovider_Select, { msdyn_apiversion: msdyn_apiversionoptions | null }, { msdyn_apiversion_formatted?: string }>;
  msdyn_channelproviderid: WebAttribute<msdyn_channelprovider_Select, { msdyn_channelproviderid: string | null }, {  }>;
  msdyn_channelurl: WebAttribute<msdyn_channelprovider_Select, { msdyn_channelurl: string | null }, {  }>;
  msdyn_customparams: WebAttribute<msdyn_channelprovider_Select, { msdyn_customparams: string | null }, {  }>;
  msdyn_enableanalytics: WebAttribute<msdyn_channelprovider_Select, { msdyn_enableanalytics: boolean | null }, {  }>;
  msdyn_enableoutbound: WebAttribute<msdyn_channelprovider_Select, { msdyn_enableoutbound: boolean | null }, {  }>;
  msdyn_label: WebAttribute<msdyn_channelprovider_Select, { msdyn_label: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_channelprovider_Select, { msdyn_name: string | null }, {  }>;
  msdyn_sortorder: WebAttribute<msdyn_channelprovider_Select, { msdyn_sortorder: number | null }, {  }>;
  msdyn_trusteddomain: WebAttribute<msdyn_channelprovider_Select, { msdyn_trusteddomain: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_channelprovider_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_channelprovider_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_channelprovider_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_channelprovider_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_channelprovider_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_channelprovider_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_channelprovider_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_channelprovider_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_channelprovider_Select, { statecode: msdyn_channelprovider_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_channelprovider_Select, { statuscode: msdyn_channelprovider_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_channelprovider_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_channelprovider_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_channelprovider_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_channelprovider_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_channelprovider_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_apiversion: msdyn_apiversionoptions;
  msdyn_channelproviderid: XQW.Guid;
  msdyn_channelurl: string;
  msdyn_customparams: string;
  msdyn_enableanalytics: boolean;
  msdyn_enableoutbound: boolean;
  msdyn_label: string;
  msdyn_name: string;
  msdyn_sortorder: number;
  msdyn_trusteddomain: string;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_channelprovider_statecode;
  statuscode: msdyn_channelprovider_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_channelprovider_Expand {
  createdby: WebExpand<msdyn_channelprovider_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_channelprovider_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_channelprovider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_channelprovider_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_appconfig_msdyn_channelprovider: WebExpand<msdyn_channelprovider_Expand, msdyn_appconfiguration_Select, msdyn_appconfiguration_Filter, { msdyn_appconfig_msdyn_channelprovider: msdyn_appconfiguration_Result[] }>;
  msdyn_channelprovider_AsyncOperations: WebExpand<msdyn_channelprovider_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_channelprovider_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_channelprovider_BulkDeleteFailures: WebExpand<msdyn_channelprovider_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_channelprovider_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_channelprovider_DuplicateBaseRecord: WebExpand<msdyn_channelprovider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_channelprovider_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_channelprovider_DuplicateMatchingRecord: WebExpand<msdyn_channelprovider_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_channelprovider_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_channelprovider_MailboxTrackingFolders: WebExpand<msdyn_channelprovider_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_channelprovider_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_channelprovider_PrincipalObjectAttributeAccesses: WebExpand<msdyn_channelprovider_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_channelprovider_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_channelprovider_ProcessSession: WebExpand<msdyn_channelprovider_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_channelprovider_ProcessSession: ProcessSession_Result[] }>;
  msdyn_channelprovider_SyncErrors: WebExpand<msdyn_channelprovider_Expand, SyncError_Select, SyncError_Filter, { msdyn_channelprovider_SyncErrors: SyncError_Result[] }>;
  msdyn_channelprovider_UserEntityInstanceDatas: WebExpand<msdyn_channelprovider_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_channelprovider_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_channelprovider_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_channelprovider_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_channelprovider_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_channelprovider_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_channelprovider_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_apiversion_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_channelprovider_Result extends msdyn_channelprovider_Base, msdyn_channelprovider_Relationships {
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
interface msdyn_channelprovider_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_channelprovider_RelatedMany {
  msdyn_appconfig_msdyn_channelprovider: WebMappingRetrieve<msdyn_appconfiguration_Select,msdyn_appconfiguration_Expand,msdyn_appconfiguration_Filter,msdyn_appconfiguration_Fixed,msdyn_appconfiguration_Result,msdyn_appconfiguration_FormattedResult>;
  msdyn_channelprovider_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_channelprovider_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_channelprovider_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_channelprovider_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_channelprovider_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_channelprovider_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_channelprovider_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_channelprovider_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_channelprovider_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_channelproviders: WebMappingRetrieve<msdyn_channelprovider_Select,msdyn_channelprovider_Expand,msdyn_channelprovider_Filter,msdyn_channelprovider_Fixed,msdyn_channelprovider_Result,msdyn_channelprovider_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_channelproviders: WebMappingRelated<msdyn_channelprovider_RelatedOne,msdyn_channelprovider_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_channelproviders: WebMappingCUDA<msdyn_channelprovider_Create,msdyn_channelprovider_Update,msdyn_channelprovider_Select>;
}
