interface msdyn_productivitymacrosolutionconfiguration_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_designerfallbackurl?: string | null;
  msdyn_designerurlconfigentity?: string | null;
  msdyn_designerurlconfigentityattrib?: string | null;
  msdyn_designerurlconfigentityid?: string | null;
  msdyn_designerurlconfigentityquery?: string | null;
  msdyn_designerurlrelativepath?: string | null;
  msdyn_macrosversion?: string | null;
  msdyn_name?: string | null;
  msdyn_productivitymacrosolutionconfigurationid?: string | null;
  msdyn_searchhint?: string | null;
  msdyn_uniquename?: string | null;
  msdyn_uservoicelink?: string | null;
  msdyn_uservoicetext?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_productivitymacrosolutionconfiguration_statecode | null;
  statuscode?: msdyn_productivitymacrosolutionconfiguration_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_productivitymacrosolutionconfiguration_Relationships {
  msdyn_productivitymacrosolutionconfiguration_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_productivitymacrosolutionconfiguration_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_productivitymacrosolutionconfiguration_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivitymacrosolutionconfiguration_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_productivitymacrosolutionconfiguration_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_productivitymacrosolutionconfiguration_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_productivitymacrosolutionconfiguration_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_productivitymacrosolutionconfiguration_SyncErrors?: SyncError_Result[] | null;
  msdyn_productivitymacrosolutionconfiguration_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_productivitymacrosolutionconfiguration extends msdyn_productivitymacrosolutionconfiguration_Base, msdyn_productivitymacrosolutionconfiguration_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_productivitymacrosolutionconfiguration_Create extends msdyn_productivitymacrosolutionconfiguration {
}
interface msdyn_productivitymacrosolutionconfiguration_Update extends msdyn_productivitymacrosolutionconfiguration {
}
interface msdyn_productivitymacrosolutionconfiguration_Select {
  componentidunique: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_designerfallbackurl: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_designerfallbackurl: string | null }, {  }>;
  msdyn_designerurlconfigentity: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_designerurlconfigentity: string | null }, {  }>;
  msdyn_designerurlconfigentityattrib: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_designerurlconfigentityattrib: string | null }, {  }>;
  msdyn_designerurlconfigentityid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_designerurlconfigentityid: string | null }, {  }>;
  msdyn_designerurlconfigentityquery: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_designerurlconfigentityquery: string | null }, {  }>;
  msdyn_designerurlrelativepath: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_designerurlrelativepath: string | null }, {  }>;
  msdyn_macrosversion: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_macrosversion: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_name: string | null }, {  }>;
  msdyn_productivitymacrosolutionconfigurationid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_productivitymacrosolutionconfigurationid: string | null }, {  }>;
  msdyn_searchhint: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_searchhint: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_uservoicelink: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_uservoicelink: string | null }, {  }>;
  msdyn_uservoicetext: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { msdyn_uservoicetext: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { statecode: msdyn_productivitymacrosolutionconfiguration_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { statuscode: msdyn_productivitymacrosolutionconfiguration_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_productivitymacrosolutionconfiguration_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_productivitymacrosolutionconfiguration_Filter {
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
  msdyn_designerfallbackurl: string;
  msdyn_designerurlconfigentity: string;
  msdyn_designerurlconfigentityattrib: string;
  msdyn_designerurlconfigentityid: string;
  msdyn_designerurlconfigentityquery: string;
  msdyn_designerurlrelativepath: string;
  msdyn_macrosversion: string;
  msdyn_name: string;
  msdyn_productivitymacrosolutionconfigurationid: XQW.Guid;
  msdyn_searchhint: string;
  msdyn_uniquename: string;
  msdyn_uservoicelink: string;
  msdyn_uservoicetext: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_productivitymacrosolutionconfiguration_statecode;
  statuscode: msdyn_productivitymacrosolutionconfiguration_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_productivitymacrosolutionconfiguration_Expand {
  createdby: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_productivitymacrosolutionconfiguration_AsyncOperations: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_productivitymacrosolutionconfiguration_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_productivitymacrosolutionconfiguration_BulkDeleteFailures: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_productivitymacrosolutionconfiguration_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_productivitymacrosolutionconfiguration_DuplicateBaseRecord: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivitymacrosolutionconfiguration_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_productivitymacrosolutionconfiguration_DuplicateMatchingRecord: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_productivitymacrosolutionconfiguration_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_productivitymacrosolutionconfiguration_MailboxTrackingFolders: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_productivitymacrosolutionconfiguration_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_productivitymacrosolutionconfiguration_PrincipalObjectAttributeAccesses: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_productivitymacrosolutionconfiguration_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_productivitymacrosolutionconfiguration_ProcessSession: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_productivitymacrosolutionconfiguration_ProcessSession: ProcessSession_Result[] }>;
  msdyn_productivitymacrosolutionconfiguration_SyncErrors: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, SyncError_Select, SyncError_Filter, { msdyn_productivitymacrosolutionconfiguration_SyncErrors: SyncError_Result[] }>;
  msdyn_productivitymacrosolutionconfiguration_UserEntityInstanceDatas: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_productivitymacrosolutionconfiguration_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_productivitymacrosolutionconfiguration_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_productivitymacrosolutionconfiguration_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_productivitymacrosolutionconfiguration_Result extends msdyn_productivitymacrosolutionconfiguration_Base, msdyn_productivitymacrosolutionconfiguration_Relationships {
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
interface msdyn_productivitymacrosolutionconfiguration_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_productivitymacrosolutionconfiguration_RelatedMany {
  msdyn_productivitymacrosolutionconfiguration_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_productivitymacrosolutionconfiguration_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_productivitymacrosolutionconfiguration_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivitymacrosolutionconfiguration_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_productivitymacrosolutionconfiguration_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_productivitymacrosolutionconfiguration_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_productivitymacrosolutionconfiguration_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_productivitymacrosolutionconfiguration_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_productivitymacrosolutionconfiguration_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_productivitymacrosolutionconfigurations: WebMappingRetrieve<msdyn_productivitymacrosolutionconfiguration_Select,msdyn_productivitymacrosolutionconfiguration_Expand,msdyn_productivitymacrosolutionconfiguration_Filter,msdyn_productivitymacrosolutionconfiguration_Fixed,msdyn_productivitymacrosolutionconfiguration_Result,msdyn_productivitymacrosolutionconfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_productivitymacrosolutionconfigurations: WebMappingRelated<msdyn_productivitymacrosolutionconfiguration_RelatedOne,msdyn_productivitymacrosolutionconfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_productivitymacrosolutionconfigurations: WebMappingCUDA<msdyn_productivitymacrosolutionconfiguration_Create,msdyn_productivitymacrosolutionconfiguration_Update,msdyn_productivitymacrosolutionconfiguration_Select>;
}
