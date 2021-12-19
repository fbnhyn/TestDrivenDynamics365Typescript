interface msdyn_soundnotificationsetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_enablesound?: boolean | null;
  msdyn_isdefaultrecord?: boolean | null;
  msdyn_linkchannel?: string | null;
  msdyn_loopsound?: boolean | null;
  msdyn_name?: string | null;
  msdyn_soundnotificationsettingid?: string | null;
  msdyn_volume?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_soundnotificationsetting_statecode | null;
  statuscode?: msdyn_soundnotificationsetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_soundnotificationsetting_Relationships {
  msdyn_soundnotificationsetting_Annotations?: Annotation_Result[] | null;
  msdyn_soundnotificationsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_soundnotificationsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_soundnotificationsetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_soundnotificationsetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_soundnotificationsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_soundnotificationsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_soundnotificationsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_soundnotificationsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_soundnotificationsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_soundnotificationsetting extends msdyn_soundnotificationsetting_Base, msdyn_soundnotificationsetting_Relationships {
  msdyn_linksoundfile_bind$msdyn_soundfiles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_soundnotificationsetting_Create extends msdyn_soundnotificationsetting {
}
interface msdyn_soundnotificationsetting_Update extends msdyn_soundnotificationsetting {
}
interface msdyn_soundnotificationsetting_Select {
  createdby_guid: WebAttribute<msdyn_soundnotificationsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_soundnotificationsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_soundnotificationsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_soundnotificationsetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_soundnotificationsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_soundnotificationsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_soundnotificationsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_enablesound: WebAttribute<msdyn_soundnotificationsetting_Select, { msdyn_enablesound: boolean | null }, {  }>;
  msdyn_isdefaultrecord: WebAttribute<msdyn_soundnotificationsetting_Select, { msdyn_isdefaultrecord: boolean | null }, {  }>;
  msdyn_linkchannel: WebAttribute<msdyn_soundnotificationsetting_Select, { msdyn_linkchannel: string | null }, {  }>;
  msdyn_linksoundfile_guid: WebAttribute<msdyn_soundnotificationsetting_Select, { msdyn_linksoundfile_guid: string | null }, { msdyn_linksoundfile_formatted?: string }>;
  msdyn_loopsound: WebAttribute<msdyn_soundnotificationsetting_Select, { msdyn_loopsound: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_soundnotificationsetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_soundnotificationsettingid: WebAttribute<msdyn_soundnotificationsetting_Select, { msdyn_soundnotificationsettingid: string | null }, {  }>;
  msdyn_volume: WebAttribute<msdyn_soundnotificationsetting_Select, { msdyn_volume: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_soundnotificationsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_soundnotificationsetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_soundnotificationsetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_soundnotificationsetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_soundnotificationsetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_soundnotificationsetting_Select, { statecode: msdyn_soundnotificationsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_soundnotificationsetting_Select, { statuscode: msdyn_soundnotificationsetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_soundnotificationsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_soundnotificationsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_soundnotificationsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_soundnotificationsetting_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_enablesound: boolean;
  msdyn_isdefaultrecord: boolean;
  msdyn_linkchannel: string;
  msdyn_linksoundfile_guid: XQW.Guid;
  msdyn_loopsound: boolean;
  msdyn_name: string;
  msdyn_soundnotificationsettingid: XQW.Guid;
  msdyn_volume: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_soundnotificationsetting_statecode;
  statuscode: msdyn_soundnotificationsetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_soundnotificationsetting_Expand {
  createdby: WebExpand<msdyn_soundnotificationsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_soundnotificationsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_soundnotificationsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_soundnotificationsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_linksoundfile: WebExpand<msdyn_soundnotificationsetting_Expand, msdyn_soundfile_Select, msdyn_soundfile_Filter, { msdyn_linksoundfile: msdyn_soundfile_Result }>;
  msdyn_soundnotificationsetting_Annotations: WebExpand<msdyn_soundnotificationsetting_Expand, Annotation_Select, Annotation_Filter, { msdyn_soundnotificationsetting_Annotations: Annotation_Result[] }>;
  msdyn_soundnotificationsetting_AsyncOperations: WebExpand<msdyn_soundnotificationsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_soundnotificationsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_soundnotificationsetting_BulkDeleteFailures: WebExpand<msdyn_soundnotificationsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_soundnotificationsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_soundnotificationsetting_DuplicateBaseRecord: WebExpand<msdyn_soundnotificationsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_soundnotificationsetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_soundnotificationsetting_DuplicateMatchingRecord: WebExpand<msdyn_soundnotificationsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_soundnotificationsetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_soundnotificationsetting_MailboxTrackingFolders: WebExpand<msdyn_soundnotificationsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_soundnotificationsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_soundnotificationsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_soundnotificationsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_soundnotificationsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_soundnotificationsetting_ProcessSession: WebExpand<msdyn_soundnotificationsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_soundnotificationsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_soundnotificationsetting_SyncErrors: WebExpand<msdyn_soundnotificationsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_soundnotificationsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_soundnotificationsetting_UserEntityInstanceDatas: WebExpand<msdyn_soundnotificationsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_soundnotificationsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_soundnotificationsetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_soundnotificationsetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_soundnotificationsetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_soundnotificationsetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_soundnotificationsetting_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_linksoundfile_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_soundnotificationsetting_Result extends msdyn_soundnotificationsetting_Base, msdyn_soundnotificationsetting_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_linksoundfile_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_soundnotificationsetting_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_linksoundfile: WebMappingRetrieve<msdyn_soundfile_Select,msdyn_soundfile_Expand,msdyn_soundfile_Filter,msdyn_soundfile_Fixed,msdyn_soundfile_Result,msdyn_soundfile_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_soundnotificationsetting_RelatedMany {
  msdyn_soundnotificationsetting_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_soundnotificationsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_soundnotificationsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_soundnotificationsetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_soundnotificationsetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_soundnotificationsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_soundnotificationsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_soundnotificationsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_soundnotificationsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_soundnotificationsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_soundnotificationsettings: WebMappingRetrieve<msdyn_soundnotificationsetting_Select,msdyn_soundnotificationsetting_Expand,msdyn_soundnotificationsetting_Filter,msdyn_soundnotificationsetting_Fixed,msdyn_soundnotificationsetting_Result,msdyn_soundnotificationsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_soundnotificationsettings: WebMappingRelated<msdyn_soundnotificationsetting_RelatedOne,msdyn_soundnotificationsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_soundnotificationsettings: WebMappingCUDA<msdyn_soundnotificationsetting_Create,msdyn_soundnotificationsetting_Update,msdyn_soundnotificationsetting_Select>;
}
