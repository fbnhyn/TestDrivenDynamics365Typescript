interface msdyn_skillattachmenttarget_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_skillattachmenttargetid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_skillattachmenttarget_statecode | null;
  statuscode?: msdyn_skillattachmenttarget_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_skillattachmenttarget_Relationships {
  msdyn_skillattachmenttarget_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_skillattachmenttarget_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_skillattachmenttarget_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_skillattachmenttarget_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_skillattachmenttarget_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_skillattachmenttarget_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_skillattachmenttarget_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_skillattachmenttarget_SyncErrors?: SyncError_Result[] | null;
  msdyn_skillattachmenttarget_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_skillattachmenttarget extends msdyn_skillattachmenttarget_Base, msdyn_skillattachmenttarget_Relationships {
  msdyn_characteristicid_bind$characteristics?: string | null;
  msdyn_ratingvalueid_bind$ratingvalues?: string | null;
  msdyn_skillattachmentruleitemid_bind$msdyn_skillattachmentruleitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_skillattachmenttarget_Create extends msdyn_skillattachmenttarget {
}
interface msdyn_skillattachmenttarget_Update extends msdyn_skillattachmenttarget {
}
interface msdyn_skillattachmenttarget_Select {
  createdby_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_skillattachmenttarget_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_skillattachmenttarget_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_skillattachmenttarget_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_characteristicid_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { msdyn_characteristicid_guid: string | null }, { msdyn_characteristicid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_skillattachmenttarget_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ratingvalueid_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { msdyn_ratingvalueid_guid: string | null }, { msdyn_ratingvalueid_formatted?: string }>;
  msdyn_skillattachmentruleitemid_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { msdyn_skillattachmentruleitemid_guid: string | null }, { msdyn_skillattachmentruleitemid_formatted?: string }>;
  msdyn_skillattachmenttargetid: WebAttribute<msdyn_skillattachmenttarget_Select, { msdyn_skillattachmenttargetid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_skillattachmenttarget_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_skillattachmenttarget_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_skillattachmenttarget_Select, { statecode: msdyn_skillattachmenttarget_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_skillattachmenttarget_Select, { statuscode: msdyn_skillattachmenttarget_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_skillattachmenttarget_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_skillattachmenttarget_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_skillattachmenttarget_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_skillattachmenttarget_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_characteristicid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ratingvalueid_guid: XQW.Guid;
  msdyn_skillattachmentruleitemid_guid: XQW.Guid;
  msdyn_skillattachmenttargetid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_skillattachmenttarget_statecode;
  statuscode: msdyn_skillattachmenttarget_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_skillattachmenttarget_Expand {
  createdby: WebExpand<msdyn_skillattachmenttarget_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_skillattachmenttarget_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_skillattachmenttarget_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_skillattachmenttarget_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_characteristicid: WebExpand<msdyn_skillattachmenttarget_Expand, Characteristic_Select, Characteristic_Filter, { msdyn_characteristicid: Characteristic_Result }>;
  msdyn_ratingvalueid: WebExpand<msdyn_skillattachmenttarget_Expand, RatingValue_Select, RatingValue_Filter, { msdyn_ratingvalueid: RatingValue_Result }>;
  msdyn_skillattachmentruleitemid: WebExpand<msdyn_skillattachmenttarget_Expand, msdyn_skillattachmentruleitem_Select, msdyn_skillattachmentruleitem_Filter, { msdyn_skillattachmentruleitemid: msdyn_skillattachmentruleitem_Result }>;
  msdyn_skillattachmenttarget_AsyncOperations: WebExpand<msdyn_skillattachmenttarget_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_skillattachmenttarget_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_skillattachmenttarget_BulkDeleteFailures: WebExpand<msdyn_skillattachmenttarget_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_skillattachmenttarget_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_skillattachmenttarget_DuplicateBaseRecord: WebExpand<msdyn_skillattachmenttarget_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_skillattachmenttarget_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_skillattachmenttarget_DuplicateMatchingRecord: WebExpand<msdyn_skillattachmenttarget_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_skillattachmenttarget_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_skillattachmenttarget_MailboxTrackingFolders: WebExpand<msdyn_skillattachmenttarget_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_skillattachmenttarget_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_skillattachmenttarget_PrincipalObjectAttributeAccesses: WebExpand<msdyn_skillattachmenttarget_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_skillattachmenttarget_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_skillattachmenttarget_ProcessSession: WebExpand<msdyn_skillattachmenttarget_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_skillattachmenttarget_ProcessSession: ProcessSession_Result[] }>;
  msdyn_skillattachmenttarget_SyncErrors: WebExpand<msdyn_skillattachmenttarget_Expand, SyncError_Select, SyncError_Filter, { msdyn_skillattachmenttarget_SyncErrors: SyncError_Result[] }>;
  msdyn_skillattachmenttarget_UserEntityInstanceDatas: WebExpand<msdyn_skillattachmenttarget_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_skillattachmenttarget_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_skillattachmenttarget_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_skillattachmenttarget_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_skillattachmenttarget_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_skillattachmenttarget_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_skillattachmenttarget_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_characteristicid_formatted?: string;
  msdyn_ratingvalueid_formatted?: string;
  msdyn_skillattachmentruleitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_skillattachmenttarget_Result extends msdyn_skillattachmenttarget_Base, msdyn_skillattachmenttarget_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_characteristicid_guid: string | null;
  msdyn_ratingvalueid_guid: string | null;
  msdyn_skillattachmentruleitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_skillattachmenttarget_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_characteristicid: WebMappingRetrieve<Characteristic_Select,Characteristic_Expand,Characteristic_Filter,Characteristic_Fixed,Characteristic_Result,Characteristic_FormattedResult>;
  msdyn_ratingvalueid: WebMappingRetrieve<RatingValue_Select,RatingValue_Expand,RatingValue_Filter,RatingValue_Fixed,RatingValue_Result,RatingValue_FormattedResult>;
  msdyn_skillattachmentruleitemid: WebMappingRetrieve<msdyn_skillattachmentruleitem_Select,msdyn_skillattachmentruleitem_Expand,msdyn_skillattachmentruleitem_Filter,msdyn_skillattachmentruleitem_Fixed,msdyn_skillattachmentruleitem_Result,msdyn_skillattachmentruleitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_skillattachmenttarget_RelatedMany {
  msdyn_skillattachmenttarget_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_skillattachmenttarget_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_skillattachmenttarget_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_skillattachmenttarget_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_skillattachmenttarget_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_skillattachmenttarget_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_skillattachmenttarget_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_skillattachmenttarget_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_skillattachmenttarget_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_skillattachmenttargets: WebMappingRetrieve<msdyn_skillattachmenttarget_Select,msdyn_skillattachmenttarget_Expand,msdyn_skillattachmenttarget_Filter,msdyn_skillattachmenttarget_Fixed,msdyn_skillattachmenttarget_Result,msdyn_skillattachmenttarget_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_skillattachmenttargets: WebMappingRelated<msdyn_skillattachmenttarget_RelatedOne,msdyn_skillattachmenttarget_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_skillattachmenttargets: WebMappingCUDA<msdyn_skillattachmenttarget_Create,msdyn_skillattachmenttarget_Update,msdyn_skillattachmenttarget_Select>;
}
