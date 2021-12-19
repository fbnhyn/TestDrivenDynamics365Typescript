interface msdyn_rulesetdependencymapping_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_referencedpolymorphiclogicalname?: string | null;
  msdyn_referencingruleid?: string | null;
  msdyn_referencingrulename?: string | null;
  msdyn_rulesetdependencymappingid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_rulesetdependencymapping_statecode | null;
  statuscode?: msdyn_rulesetdependencymapping_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_rulesetdependencymapping_Relationships {
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic?: Characteristic_Result | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile?: msdyn_capacityprofile_Result | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset?: msdyn_decisionruleset_Result | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream?: msdyn_liveworkstream_Result | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable?: msdyn_ocliveworkstreamcontextvariable_Result | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue?: Queue_Result | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue?: RatingValue_Result | null;
  msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset?: msdyn_decisionruleset_Result | null;
  msdyn_rulesetdependencymapping_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_rulesetdependencymapping_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_rulesetdependencymapping_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_rulesetdependencymapping_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_rulesetdependencymapping_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_rulesetdependencymapping_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_rulesetdependencymapping_SyncErrors?: SyncError_Result[] | null;
  msdyn_rulesetdependencymapping_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_rulesetdependencymapping extends msdyn_rulesetdependencymapping_Base, msdyn_rulesetdependencymapping_Relationships {
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic_bind$characteristics?: string | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile_bind$msdyn_capacityprofiles?: string | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset_bind$msdyn_decisionrulesets?: string | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream_bind$msdyn_liveworkstreams?: string | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable_bind$msdyn_ocliveworkstreamcontextvariables?: string | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue_bind$queues?: string | null;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue_bind$ratingvalues?: string | null;
  msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset_bind$msdyn_decisionrulesets?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_rulesetdependencymapping_Create extends msdyn_rulesetdependencymapping {
}
interface msdyn_rulesetdependencymapping_Update extends msdyn_rulesetdependencymapping {
}
interface msdyn_rulesetdependencymapping_Select {
  createdby_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_rulesetdependencymapping_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_rulesetdependencymapping_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_rulesetdependencymapping_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_rulesetdependencymapping_Select, { msdyn_name: string | null }, {  }>;
  msdyn_referencedpolymorphicentityid_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { msdyn_referencedpolymorphicentityid_guid: string | null }, { msdyn_referencedpolymorphicentityid_formatted?: string }>;
  msdyn_referencedpolymorphiclogicalname: WebAttribute<msdyn_rulesetdependencymapping_Select, { msdyn_referencedpolymorphiclogicalname: string | null }, {  }>;
  msdyn_referencingruleid: WebAttribute<msdyn_rulesetdependencymapping_Select, { msdyn_referencingruleid: string | null }, {  }>;
  msdyn_referencingrulename: WebAttribute<msdyn_rulesetdependencymapping_Select, { msdyn_referencingrulename: string | null }, {  }>;
  msdyn_referencingrulesetid_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { msdyn_referencingrulesetid_guid: string | null }, { msdyn_referencingrulesetid_formatted?: string }>;
  msdyn_rulesetdependencymappingid: WebAttribute<msdyn_rulesetdependencymapping_Select, { msdyn_rulesetdependencymappingid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_rulesetdependencymapping_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_rulesetdependencymapping_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_rulesetdependencymapping_Select, { statecode: msdyn_rulesetdependencymapping_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_rulesetdependencymapping_Select, { statuscode: msdyn_rulesetdependencymapping_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_rulesetdependencymapping_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_rulesetdependencymapping_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_rulesetdependencymapping_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_rulesetdependencymapping_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_referencedpolymorphicentityid_guid: XQW.Guid;
  msdyn_referencedpolymorphiclogicalname: string;
  msdyn_referencingruleid: string;
  msdyn_referencingrulename: string;
  msdyn_referencingrulesetid_guid: XQW.Guid;
  msdyn_rulesetdependencymappingid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_rulesetdependencymapping_statecode;
  statuscode: msdyn_rulesetdependencymapping_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_rulesetdependencymapping_Expand {
  createdby: WebExpand<msdyn_rulesetdependencymapping_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_rulesetdependencymapping_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_rulesetdependencymapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_rulesetdependencymapping_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic: WebExpand<msdyn_rulesetdependencymapping_Expand, Characteristic_Select, Characteristic_Filter, { msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic: Characteristic_Result }>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile: WebExpand<msdyn_rulesetdependencymapping_Expand, msdyn_capacityprofile_Select, msdyn_capacityprofile_Filter, { msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile: msdyn_capacityprofile_Result }>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset: WebExpand<msdyn_rulesetdependencymapping_Expand, msdyn_decisionruleset_Select, msdyn_decisionruleset_Filter, { msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset: msdyn_decisionruleset_Result }>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream: WebExpand<msdyn_rulesetdependencymapping_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream: msdyn_liveworkstream_Result }>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable: WebExpand<msdyn_rulesetdependencymapping_Expand, msdyn_ocliveworkstreamcontextvariable_Select, msdyn_ocliveworkstreamcontextvariable_Filter, { msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable: msdyn_ocliveworkstreamcontextvariable_Result }>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue: WebExpand<msdyn_rulesetdependencymapping_Expand, Queue_Select, Queue_Filter, { msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue: Queue_Result }>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue: WebExpand<msdyn_rulesetdependencymapping_Expand, RatingValue_Select, RatingValue_Filter, { msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue: RatingValue_Result }>;
  msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset: WebExpand<msdyn_rulesetdependencymapping_Expand, msdyn_decisionruleset_Select, msdyn_decisionruleset_Filter, { msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset: msdyn_decisionruleset_Result }>;
  msdyn_rulesetdependencymapping_AsyncOperations: WebExpand<msdyn_rulesetdependencymapping_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_rulesetdependencymapping_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_rulesetdependencymapping_BulkDeleteFailures: WebExpand<msdyn_rulesetdependencymapping_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_rulesetdependencymapping_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_rulesetdependencymapping_DuplicateBaseRecord: WebExpand<msdyn_rulesetdependencymapping_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rulesetdependencymapping_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_rulesetdependencymapping_DuplicateMatchingRecord: WebExpand<msdyn_rulesetdependencymapping_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rulesetdependencymapping_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_rulesetdependencymapping_MailboxTrackingFolders: WebExpand<msdyn_rulesetdependencymapping_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_rulesetdependencymapping_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses: WebExpand<msdyn_rulesetdependencymapping_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_rulesetdependencymapping_ProcessSession: WebExpand<msdyn_rulesetdependencymapping_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_rulesetdependencymapping_ProcessSession: ProcessSession_Result[] }>;
  msdyn_rulesetdependencymapping_SyncErrors: WebExpand<msdyn_rulesetdependencymapping_Expand, SyncError_Select, SyncError_Filter, { msdyn_rulesetdependencymapping_SyncErrors: SyncError_Result[] }>;
  msdyn_rulesetdependencymapping_UserEntityInstanceDatas: WebExpand<msdyn_rulesetdependencymapping_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_rulesetdependencymapping_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_rulesetdependencymapping_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_rulesetdependencymapping_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_rulesetdependencymapping_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_rulesetdependencymapping_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_rulesetdependencymapping_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_referencedpolymorphicentityid_formatted?: string;
  msdyn_referencingrulesetid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_rulesetdependencymapping_Result extends msdyn_rulesetdependencymapping_Base, msdyn_rulesetdependencymapping_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_referencedpolymorphicentityid_guid: string | null;
  msdyn_referencingrulesetid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_rulesetdependencymapping_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_characteristic: WebMappingRetrieve<Characteristic_Select,Characteristic_Expand,Characteristic_Filter,Characteristic_Fixed,Characteristic_Result,Characteristic_FormattedResult>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_capacityprofile: WebMappingRetrieve<msdyn_capacityprofile_Select,msdyn_capacityprofile_Expand,msdyn_capacityprofile_Filter,msdyn_capacityprofile_Fixed,msdyn_capacityprofile_Result,msdyn_capacityprofile_FormattedResult>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_decisionruleset: WebMappingRetrieve<msdyn_decisionruleset_Select,msdyn_decisionruleset_Expand,msdyn_decisionruleset_Filter,msdyn_decisionruleset_Fixed,msdyn_decisionruleset_Result,msdyn_decisionruleset_FormattedResult>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_liveworkstream: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_msdyn_ocliveworkstreamcontextvariable: WebMappingRetrieve<msdyn_ocliveworkstreamcontextvariable_Select,msdyn_ocliveworkstreamcontextvariable_Expand,msdyn_ocliveworkstreamcontextvariable_Filter,msdyn_ocliveworkstreamcontextvariable_Fixed,msdyn_ocliveworkstreamcontextvariable_Result,msdyn_ocliveworkstreamcontextvariable_FormattedResult>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_queue: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  msdyn_referencedpolymorphicentityid_msdyn_rulesetdependencymapping_ratingvalue: WebMappingRetrieve<RatingValue_Select,RatingValue_Expand,RatingValue_Filter,RatingValue_Fixed,RatingValue_Result,RatingValue_FormattedResult>;
  msdyn_referencingrulesetid_msdyn_rulesetdependencymapping_msdyn_decisionruleset: WebMappingRetrieve<msdyn_decisionruleset_Select,msdyn_decisionruleset_Expand,msdyn_decisionruleset_Filter,msdyn_decisionruleset_Fixed,msdyn_decisionruleset_Result,msdyn_decisionruleset_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_rulesetdependencymapping_RelatedMany {
  msdyn_rulesetdependencymapping_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_rulesetdependencymapping_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_rulesetdependencymapping_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rulesetdependencymapping_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rulesetdependencymapping_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_rulesetdependencymapping_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_rulesetdependencymapping_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_rulesetdependencymapping_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_rulesetdependencymapping_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_rulesetdependencymappings: WebMappingRetrieve<msdyn_rulesetdependencymapping_Select,msdyn_rulesetdependencymapping_Expand,msdyn_rulesetdependencymapping_Filter,msdyn_rulesetdependencymapping_Fixed,msdyn_rulesetdependencymapping_Result,msdyn_rulesetdependencymapping_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_rulesetdependencymappings: WebMappingRelated<msdyn_rulesetdependencymapping_RelatedOne,msdyn_rulesetdependencymapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_rulesetdependencymappings: WebMappingCUDA<msdyn_rulesetdependencymapping_Create,msdyn_rulesetdependencymapping_Update,msdyn_rulesetdependencymapping_Select>;
}
