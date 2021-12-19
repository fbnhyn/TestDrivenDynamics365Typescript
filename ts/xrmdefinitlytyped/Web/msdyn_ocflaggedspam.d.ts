interface msdyn_ocflaggedspam_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_flaggedby?: string | null;
  msdyn_flaggedstatus?: msdyn_flaggedstatus | null;
  msdyn_name?: string | null;
  msdyn_ocflaggedspamid?: string | null;
  msdyn_spamtype?: msdyn_spamtype | null;
  msdyn_spamvalue?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocflaggedspam_statecode | null;
  statuscode?: msdyn_ocflaggedspam_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocflaggedspam_Relationships {
  msdyn_ocflaggedspam_Annotations?: Annotation_Result[] | null;
  msdyn_ocflaggedspam_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocflaggedspam_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocflaggedspam_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocflaggedspam_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocflaggedspam_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocflaggedspam_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocflaggedspam_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocflaggedspam_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocflaggedspam_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocflaggedspam extends msdyn_ocflaggedspam_Base, msdyn_ocflaggedspam_Relationships {
  msdyn_ruleid_bind$msdyn_ocautoblockrules?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocflaggedspam_Create extends msdyn_ocflaggedspam {
}
interface msdyn_ocflaggedspam_Update extends msdyn_ocflaggedspam {
}
interface msdyn_ocflaggedspam_Select {
  createdby_guid: WebAttribute<msdyn_ocflaggedspam_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocflaggedspam_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocflaggedspam_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocflaggedspam_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocflaggedspam_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocflaggedspam_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocflaggedspam_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_flaggedby: WebAttribute<msdyn_ocflaggedspam_Select, { msdyn_flaggedby: string | null }, {  }>;
  msdyn_flaggedstatus: WebAttribute<msdyn_ocflaggedspam_Select, { msdyn_flaggedstatus: msdyn_flaggedstatus | null }, { msdyn_flaggedstatus_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocflaggedspam_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocflaggedspamid: WebAttribute<msdyn_ocflaggedspam_Select, { msdyn_ocflaggedspamid: string | null }, {  }>;
  msdyn_ruleid_guid: WebAttribute<msdyn_ocflaggedspam_Select, { msdyn_ruleid_guid: string | null }, { msdyn_ruleid_formatted?: string }>;
  msdyn_spamtype: WebAttribute<msdyn_ocflaggedspam_Select, { msdyn_spamtype: msdyn_spamtype | null }, { msdyn_spamtype_formatted?: string }>;
  msdyn_spamvalue: WebAttribute<msdyn_ocflaggedspam_Select, { msdyn_spamvalue: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocflaggedspam_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocflaggedspam_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocflaggedspam_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocflaggedspam_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocflaggedspam_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocflaggedspam_Select, { statecode: msdyn_ocflaggedspam_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocflaggedspam_Select, { statuscode: msdyn_ocflaggedspam_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocflaggedspam_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocflaggedspam_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocflaggedspam_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocflaggedspam_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_flaggedby: string;
  msdyn_flaggedstatus: msdyn_flaggedstatus;
  msdyn_name: string;
  msdyn_ocflaggedspamid: XQW.Guid;
  msdyn_ruleid_guid: XQW.Guid;
  msdyn_spamtype: msdyn_spamtype;
  msdyn_spamvalue: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocflaggedspam_statecode;
  statuscode: msdyn_ocflaggedspam_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocflaggedspam_Expand {
  createdby: WebExpand<msdyn_ocflaggedspam_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocflaggedspam_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocflaggedspam_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocflaggedspam_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocflaggedspam_Annotations: WebExpand<msdyn_ocflaggedspam_Expand, Annotation_Select, Annotation_Filter, { msdyn_ocflaggedspam_Annotations: Annotation_Result[] }>;
  msdyn_ocflaggedspam_AsyncOperations: WebExpand<msdyn_ocflaggedspam_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocflaggedspam_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocflaggedspam_BulkDeleteFailures: WebExpand<msdyn_ocflaggedspam_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocflaggedspam_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocflaggedspam_DuplicateBaseRecord: WebExpand<msdyn_ocflaggedspam_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocflaggedspam_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocflaggedspam_DuplicateMatchingRecord: WebExpand<msdyn_ocflaggedspam_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocflaggedspam_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocflaggedspam_MailboxTrackingFolders: WebExpand<msdyn_ocflaggedspam_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocflaggedspam_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocflaggedspam_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocflaggedspam_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocflaggedspam_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocflaggedspam_ProcessSession: WebExpand<msdyn_ocflaggedspam_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocflaggedspam_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocflaggedspam_SyncErrors: WebExpand<msdyn_ocflaggedspam_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocflaggedspam_SyncErrors: SyncError_Result[] }>;
  msdyn_ocflaggedspam_UserEntityInstanceDatas: WebExpand<msdyn_ocflaggedspam_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocflaggedspam_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_ruleid: WebExpand<msdyn_ocflaggedspam_Expand, msdyn_ocautoblockrule_Select, msdyn_ocautoblockrule_Filter, { msdyn_ruleid: msdyn_ocautoblockrule_Result }>;
  ownerid: WebExpand<msdyn_ocflaggedspam_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocflaggedspam_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocflaggedspam_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocflaggedspam_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocflaggedspam_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_flaggedstatus_formatted?: string;
  msdyn_ruleid_formatted?: string;
  msdyn_spamtype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocflaggedspam_Result extends msdyn_ocflaggedspam_Base, msdyn_ocflaggedspam_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_ruleid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocflaggedspam_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ruleid: WebMappingRetrieve<msdyn_ocautoblockrule_Select,msdyn_ocautoblockrule_Expand,msdyn_ocautoblockrule_Filter,msdyn_ocautoblockrule_Fixed,msdyn_ocautoblockrule_Result,msdyn_ocautoblockrule_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocflaggedspam_RelatedMany {
  msdyn_ocflaggedspam_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_ocflaggedspam_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocflaggedspam_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocflaggedspam_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocflaggedspam_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocflaggedspam_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocflaggedspam_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocflaggedspam_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocflaggedspam_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocflaggedspam_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocflaggedspams: WebMappingRetrieve<msdyn_ocflaggedspam_Select,msdyn_ocflaggedspam_Expand,msdyn_ocflaggedspam_Filter,msdyn_ocflaggedspam_Fixed,msdyn_ocflaggedspam_Result,msdyn_ocflaggedspam_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocflaggedspams: WebMappingRelated<msdyn_ocflaggedspam_RelatedOne,msdyn_ocflaggedspam_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocflaggedspams: WebMappingCUDA<msdyn_ocflaggedspam_Create,msdyn_ocflaggedspam_Update,msdyn_ocflaggedspam_Select>;
}
