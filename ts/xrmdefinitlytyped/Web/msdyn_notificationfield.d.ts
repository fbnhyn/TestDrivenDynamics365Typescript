interface msdyn_notificationfield_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_notificationfieldid?: string | null;
  msdyn_order?: number | null;
  msdyn_title?: string | null;
  msdyn_uniquename?: string | null;
  msdyn_value?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_notificationfield_statecode | null;
  statuscode?: msdyn_notificationfield_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_notificationfield_Relationships {
  msdyn_notificationfield_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_notificationfield_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_notificationfield_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_notificationfield_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_notificationfield_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_notificationfield_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_notificationfield_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_notificationfield_SyncErrors?: SyncError_Result[] | null;
  msdyn_notificationfield_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_notificationtemplate_notificationfield?: msdyn_notificationtemplate_Result[] | null;
}
interface msdyn_notificationfield extends msdyn_notificationfield_Base, msdyn_notificationfield_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_notificationfield_Create extends msdyn_notificationfield {
}
interface msdyn_notificationfield_Update extends msdyn_notificationfield {
}
interface msdyn_notificationfield_Select {
  componentidunique: WebAttribute<msdyn_notificationfield_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_notificationfield_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_notificationfield_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_notificationfield_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_notificationfield_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_notificationfield_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_notificationfield_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_notificationfield_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_notificationfield_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_notificationfield_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_notificationfield_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_notificationfield_Select, { msdyn_name: string | null }, {  }>;
  msdyn_notificationfieldid: WebAttribute<msdyn_notificationfield_Select, { msdyn_notificationfieldid: string | null }, {  }>;
  msdyn_order: WebAttribute<msdyn_notificationfield_Select, { msdyn_order: number | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_notificationfield_Select, { msdyn_title: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_notificationfield_Select, { msdyn_uniquename: string | null }, {  }>;
  msdyn_value: WebAttribute<msdyn_notificationfield_Select, { msdyn_value: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_notificationfield_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_notificationfield_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_notificationfield_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_notificationfield_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_notificationfield_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_notificationfield_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_notificationfield_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_notificationfield_Select, { statecode: msdyn_notificationfield_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_notificationfield_Select, { statuscode: msdyn_notificationfield_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_notificationfield_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_notificationfield_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_notificationfield_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_notificationfield_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_notificationfield_Filter {
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
  msdyn_name: string;
  msdyn_notificationfieldid: XQW.Guid;
  msdyn_order: number;
  msdyn_title: string;
  msdyn_uniquename: string;
  msdyn_value: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_notificationfield_statecode;
  statuscode: msdyn_notificationfield_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_notificationfield_Expand {
  createdby: WebExpand<msdyn_notificationfield_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_notificationfield_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_notificationfield_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_notificationfield_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_notificationfield_AsyncOperations: WebExpand<msdyn_notificationfield_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_notificationfield_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_notificationfield_BulkDeleteFailures: WebExpand<msdyn_notificationfield_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_notificationfield_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_notificationfield_DuplicateBaseRecord: WebExpand<msdyn_notificationfield_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_notificationfield_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_notificationfield_DuplicateMatchingRecord: WebExpand<msdyn_notificationfield_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_notificationfield_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_notificationfield_MailboxTrackingFolders: WebExpand<msdyn_notificationfield_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_notificationfield_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_notificationfield_PrincipalObjectAttributeAccesses: WebExpand<msdyn_notificationfield_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_notificationfield_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_notificationfield_ProcessSession: WebExpand<msdyn_notificationfield_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_notificationfield_ProcessSession: ProcessSession_Result[] }>;
  msdyn_notificationfield_SyncErrors: WebExpand<msdyn_notificationfield_Expand, SyncError_Select, SyncError_Filter, { msdyn_notificationfield_SyncErrors: SyncError_Result[] }>;
  msdyn_notificationfield_UserEntityInstanceDatas: WebExpand<msdyn_notificationfield_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_notificationfield_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_notificationtemplate_notificationfield: WebExpand<msdyn_notificationfield_Expand, msdyn_notificationtemplate_Select, msdyn_notificationtemplate_Filter, { msdyn_notificationtemplate_notificationfield: msdyn_notificationtemplate_Result[] }>;
  ownerid: WebExpand<msdyn_notificationfield_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_notificationfield_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_notificationfield_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_notificationfield_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_notificationfield_FormattedResult {
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
interface msdyn_notificationfield_Result extends msdyn_notificationfield_Base, msdyn_notificationfield_Relationships {
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
interface msdyn_notificationfield_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_notificationfield_RelatedMany {
  msdyn_notificationfield_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_notificationfield_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_notificationfield_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_notificationfield_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_notificationfield_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_notificationfield_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_notificationfield_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_notificationfield_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_notificationfield_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_notificationtemplate_notificationfield: WebMappingRetrieve<msdyn_notificationtemplate_Select,msdyn_notificationtemplate_Expand,msdyn_notificationtemplate_Filter,msdyn_notificationtemplate_Fixed,msdyn_notificationtemplate_Result,msdyn_notificationtemplate_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_notificationfields: WebMappingRetrieve<msdyn_notificationfield_Select,msdyn_notificationfield_Expand,msdyn_notificationfield_Filter,msdyn_notificationfield_Fixed,msdyn_notificationfield_Result,msdyn_notificationfield_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_notificationfields: WebMappingRelated<msdyn_notificationfield_RelatedOne,msdyn_notificationfield_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_notificationfields: WebMappingCUDA<msdyn_notificationfield_Create,msdyn_notificationfield_Update,msdyn_notificationfield_Select>;
}
