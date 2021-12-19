interface msdyn_urnotificationtemplate_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_channeltype?: msdyn_streamsource | null;
  msdyn_entitylogicalname?: string | null;
  msdyn_entitytitlemapping?: string | null;
  msdyn_name?: string | null;
  msdyn_urnotificationtemplateid?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_urnotificationtemplate_statecode | null;
  statuscode?: msdyn_urnotificationtemplate_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_urnotificationtemplate_Relationships {
  msdyn_msdyn_urnotificationtemplate_msdyn_urnotificationtemplatemapping_notificationtemplate?: msdyn_urnotificationtemplatemapping_Result[] | null;
  msdyn_urnotificationtemplate_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_urnotificationtemplate_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_urnotificationtemplate_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_urnotificationtemplate_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_urnotificationtemplate_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_urnotificationtemplate_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_urnotificationtemplate_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_urnotificationtemplate_SyncErrors?: SyncError_Result[] | null;
  msdyn_urnotificationtemplate_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_urnotificationtemplate extends msdyn_urnotificationtemplate_Base, msdyn_urnotificationtemplate_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_urnotificationtemplate_Create extends msdyn_urnotificationtemplate {
}
interface msdyn_urnotificationtemplate_Update extends msdyn_urnotificationtemplate {
}
interface msdyn_urnotificationtemplate_Select {
  componentidunique: WebAttribute<msdyn_urnotificationtemplate_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_urnotificationtemplate_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_urnotificationtemplate_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_urnotificationtemplate_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_urnotificationtemplate_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_urnotificationtemplate_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_urnotificationtemplate_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_urnotificationtemplate_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_urnotificationtemplate_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_urnotificationtemplate_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_urnotificationtemplate_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_channeltype: WebAttribute<msdyn_urnotificationtemplate_Select, { msdyn_channeltype: msdyn_streamsource | null }, { msdyn_channeltype_formatted?: string }>;
  msdyn_entitylogicalname: WebAttribute<msdyn_urnotificationtemplate_Select, { msdyn_entitylogicalname: string | null }, {  }>;
  msdyn_entitytitlemapping: WebAttribute<msdyn_urnotificationtemplate_Select, { msdyn_entitytitlemapping: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_urnotificationtemplate_Select, { msdyn_name: string | null }, {  }>;
  msdyn_urnotificationtemplateid: WebAttribute<msdyn_urnotificationtemplate_Select, { msdyn_urnotificationtemplateid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_urnotificationtemplate_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_urnotificationtemplate_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_urnotificationtemplate_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_urnotificationtemplate_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_urnotificationtemplate_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_urnotificationtemplate_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_urnotificationtemplate_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_urnotificationtemplate_Select, { statecode: msdyn_urnotificationtemplate_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_urnotificationtemplate_Select, { statuscode: msdyn_urnotificationtemplate_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_urnotificationtemplate_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_urnotificationtemplate_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_urnotificationtemplate_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_urnotificationtemplate_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_urnotificationtemplate_Filter {
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
  msdyn_channeltype: msdyn_streamsource;
  msdyn_entitylogicalname: string;
  msdyn_entitytitlemapping: string;
  msdyn_name: string;
  msdyn_urnotificationtemplateid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_urnotificationtemplate_statecode;
  statuscode: msdyn_urnotificationtemplate_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_urnotificationtemplate_Expand {
  createdby: WebExpand<msdyn_urnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_urnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_urnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_urnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_urnotificationtemplate_msdyn_urnotificationtemplatemapping_notificationtemplate: WebExpand<msdyn_urnotificationtemplate_Expand, msdyn_urnotificationtemplatemapping_Select, msdyn_urnotificationtemplatemapping_Filter, { msdyn_msdyn_urnotificationtemplate_msdyn_urnotificationtemplatemapping_notificationtemplate: msdyn_urnotificationtemplatemapping_Result[] }>;
  msdyn_urnotificationtemplate_AsyncOperations: WebExpand<msdyn_urnotificationtemplate_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_urnotificationtemplate_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_urnotificationtemplate_BulkDeleteFailures: WebExpand<msdyn_urnotificationtemplate_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_urnotificationtemplate_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_urnotificationtemplate_DuplicateBaseRecord: WebExpand<msdyn_urnotificationtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_urnotificationtemplate_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_urnotificationtemplate_DuplicateMatchingRecord: WebExpand<msdyn_urnotificationtemplate_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_urnotificationtemplate_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_urnotificationtemplate_MailboxTrackingFolders: WebExpand<msdyn_urnotificationtemplate_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_urnotificationtemplate_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_urnotificationtemplate_PrincipalObjectAttributeAccesses: WebExpand<msdyn_urnotificationtemplate_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_urnotificationtemplate_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_urnotificationtemplate_ProcessSession: WebExpand<msdyn_urnotificationtemplate_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_urnotificationtemplate_ProcessSession: ProcessSession_Result[] }>;
  msdyn_urnotificationtemplate_SyncErrors: WebExpand<msdyn_urnotificationtemplate_Expand, SyncError_Select, SyncError_Filter, { msdyn_urnotificationtemplate_SyncErrors: SyncError_Result[] }>;
  msdyn_urnotificationtemplate_UserEntityInstanceDatas: WebExpand<msdyn_urnotificationtemplate_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_urnotificationtemplate_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_urnotificationtemplate_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_urnotificationtemplate_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_urnotificationtemplate_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_urnotificationtemplate_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_urnotificationtemplate_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_channeltype_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_urnotificationtemplate_Result extends msdyn_urnotificationtemplate_Base, msdyn_urnotificationtemplate_Relationships {
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
interface msdyn_urnotificationtemplate_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_urnotificationtemplate_RelatedMany {
  msdyn_msdyn_urnotificationtemplate_msdyn_urnotificationtemplatemapping_notificationtemplate: WebMappingRetrieve<msdyn_urnotificationtemplatemapping_Select,msdyn_urnotificationtemplatemapping_Expand,msdyn_urnotificationtemplatemapping_Filter,msdyn_urnotificationtemplatemapping_Fixed,msdyn_urnotificationtemplatemapping_Result,msdyn_urnotificationtemplatemapping_FormattedResult>;
  msdyn_urnotificationtemplate_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_urnotificationtemplate_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_urnotificationtemplate_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_urnotificationtemplate_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_urnotificationtemplate_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_urnotificationtemplate_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_urnotificationtemplate_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_urnotificationtemplate_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_urnotificationtemplate_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_urnotificationtemplates: WebMappingRetrieve<msdyn_urnotificationtemplate_Select,msdyn_urnotificationtemplate_Expand,msdyn_urnotificationtemplate_Filter,msdyn_urnotificationtemplate_Fixed,msdyn_urnotificationtemplate_Result,msdyn_urnotificationtemplate_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_urnotificationtemplates: WebMappingRelated<msdyn_urnotificationtemplate_RelatedOne,msdyn_urnotificationtemplate_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_urnotificationtemplates: WebMappingCUDA<msdyn_urnotificationtemplate_Create,msdyn_urnotificationtemplate_Update,msdyn_urnotificationtemplate_Select>;
}
