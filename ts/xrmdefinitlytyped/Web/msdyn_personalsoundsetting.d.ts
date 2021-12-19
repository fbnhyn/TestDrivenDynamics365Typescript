interface msdyn_Personalsoundsetting_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_enablesound?: boolean | null;
  msdyn_isdefaultrecord?: boolean | null;
  msdyn_linkchannel?: string | null;
  msdyn_loopsound?: boolean | null;
  msdyn_name?: string | null;
  msdyn_personalsoundsettingid?: string | null;
  msdyn_volume?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_personalsoundsetting_statecode | null;
  statuscode?: msdyn_personalsoundsetting_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_Personalsoundsetting_Relationships {
  msdyn_personalsoundsetting_Annotations?: Annotation_Result[] | null;
  msdyn_personalsoundsetting_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_personalsoundsetting_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_personalsoundsetting_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_personalsoundsetting_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_personalsoundsetting_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_personalsoundsetting_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_personalsoundsetting_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_personalsoundsetting_SyncErrors?: SyncError_Result[] | null;
  msdyn_personalsoundsetting_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_Personalsoundsetting extends msdyn_Personalsoundsetting_Base, msdyn_Personalsoundsetting_Relationships {
  msdyn_linksoundfile_bind$msdyn_soundfiles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_Personalsoundsetting_Create extends msdyn_Personalsoundsetting {
}
interface msdyn_Personalsoundsetting_Update extends msdyn_Personalsoundsetting {
}
interface msdyn_Personalsoundsetting_Select {
  createdby_guid: WebAttribute<msdyn_Personalsoundsetting_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_Personalsoundsetting_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_Personalsoundsetting_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_Personalsoundsetting_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_Personalsoundsetting_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_Personalsoundsetting_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_Personalsoundsetting_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_enablesound: WebAttribute<msdyn_Personalsoundsetting_Select, { msdyn_enablesound: boolean | null }, {  }>;
  msdyn_isdefaultrecord: WebAttribute<msdyn_Personalsoundsetting_Select, { msdyn_isdefaultrecord: boolean | null }, {  }>;
  msdyn_linkchannel: WebAttribute<msdyn_Personalsoundsetting_Select, { msdyn_linkchannel: string | null }, {  }>;
  msdyn_linksoundfile_guid: WebAttribute<msdyn_Personalsoundsetting_Select, { msdyn_linksoundfile_guid: string | null }, { msdyn_linksoundfile_formatted?: string }>;
  msdyn_loopsound: WebAttribute<msdyn_Personalsoundsetting_Select, { msdyn_loopsound: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_Personalsoundsetting_Select, { msdyn_name: string | null }, {  }>;
  msdyn_personalsoundsettingid: WebAttribute<msdyn_Personalsoundsetting_Select, { msdyn_personalsoundsettingid: string | null }, {  }>;
  msdyn_volume: WebAttribute<msdyn_Personalsoundsetting_Select, { msdyn_volume: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_Personalsoundsetting_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_Personalsoundsetting_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_Personalsoundsetting_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_Personalsoundsetting_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_Personalsoundsetting_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_Personalsoundsetting_Select, { statecode: msdyn_personalsoundsetting_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_Personalsoundsetting_Select, { statuscode: msdyn_personalsoundsetting_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_Personalsoundsetting_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_Personalsoundsetting_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_Personalsoundsetting_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_Personalsoundsetting_Filter {
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
  msdyn_personalsoundsettingid: XQW.Guid;
  msdyn_volume: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_personalsoundsetting_statecode;
  statuscode: msdyn_personalsoundsetting_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_Personalsoundsetting_Expand {
  createdby: WebExpand<msdyn_Personalsoundsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_Personalsoundsetting_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_Personalsoundsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_Personalsoundsetting_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_linksoundfile: WebExpand<msdyn_Personalsoundsetting_Expand, msdyn_soundfile_Select, msdyn_soundfile_Filter, { msdyn_linksoundfile: msdyn_soundfile_Result }>;
  msdyn_personalsoundsetting_Annotations: WebExpand<msdyn_Personalsoundsetting_Expand, Annotation_Select, Annotation_Filter, { msdyn_personalsoundsetting_Annotations: Annotation_Result[] }>;
  msdyn_personalsoundsetting_AsyncOperations: WebExpand<msdyn_Personalsoundsetting_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_personalsoundsetting_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_personalsoundsetting_BulkDeleteFailures: WebExpand<msdyn_Personalsoundsetting_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_personalsoundsetting_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_personalsoundsetting_DuplicateBaseRecord: WebExpand<msdyn_Personalsoundsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_personalsoundsetting_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_personalsoundsetting_DuplicateMatchingRecord: WebExpand<msdyn_Personalsoundsetting_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_personalsoundsetting_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_personalsoundsetting_MailboxTrackingFolders: WebExpand<msdyn_Personalsoundsetting_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_personalsoundsetting_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_personalsoundsetting_PrincipalObjectAttributeAccesses: WebExpand<msdyn_Personalsoundsetting_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_personalsoundsetting_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_personalsoundsetting_ProcessSession: WebExpand<msdyn_Personalsoundsetting_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_personalsoundsetting_ProcessSession: ProcessSession_Result[] }>;
  msdyn_personalsoundsetting_SyncErrors: WebExpand<msdyn_Personalsoundsetting_Expand, SyncError_Select, SyncError_Filter, { msdyn_personalsoundsetting_SyncErrors: SyncError_Result[] }>;
  msdyn_personalsoundsetting_UserEntityInstanceDatas: WebExpand<msdyn_Personalsoundsetting_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_personalsoundsetting_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_Personalsoundsetting_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_Personalsoundsetting_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_Personalsoundsetting_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_Personalsoundsetting_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_Personalsoundsetting_FormattedResult {
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
interface msdyn_Personalsoundsetting_Result extends msdyn_Personalsoundsetting_Base, msdyn_Personalsoundsetting_Relationships {
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
interface msdyn_Personalsoundsetting_RelatedOne {
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
interface msdyn_Personalsoundsetting_RelatedMany {
  msdyn_personalsoundsetting_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_personalsoundsetting_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_personalsoundsetting_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_personalsoundsetting_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_personalsoundsetting_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_personalsoundsetting_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_personalsoundsetting_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_personalsoundsetting_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_personalsoundsetting_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_personalsoundsetting_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_personalsoundsettings: WebMappingRetrieve<msdyn_Personalsoundsetting_Select,msdyn_Personalsoundsetting_Expand,msdyn_Personalsoundsetting_Filter,msdyn_Personalsoundsetting_Fixed,msdyn_Personalsoundsetting_Result,msdyn_Personalsoundsetting_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_personalsoundsettings: WebMappingRelated<msdyn_Personalsoundsetting_RelatedOne,msdyn_Personalsoundsetting_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_personalsoundsettings: WebMappingCUDA<msdyn_Personalsoundsetting_Create,msdyn_Personalsoundsetting_Update,msdyn_Personalsoundsetting_Select>;
}
