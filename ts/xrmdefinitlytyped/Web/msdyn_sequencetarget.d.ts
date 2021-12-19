interface msdyn_sequencetarget_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_currentstepcount?: number | null;
  msdyn_currentstepname?: string | null;
  msdyn_currentstepsubtype?: msdyn_sequencestep_subtype | null;
  msdyn_currentsteptype?: msdyn_sequencestep_type | null;
  msdyn_deactivatereason?: msdyn_sequencetarget_deactivatereason | null;
  msdyn_msflowrunid?: string | null;
  msdyn_name?: string | null;
  msdyn_parentsequenceversion?: number | null;
  msdyn_regarding?: string | null;
  msdyn_sequencetargetid?: string | null;
  msdyn_sequencetargetuniquekey?: string | null;
  msdyn_totalstepcount?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sequencetarget_statecode | null;
  statuscode?: msdyn_sequencetarget_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_sequencetarget_Relationships {
  msdyn_sequencetarget_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sequencetarget_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sequencetarget_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_sequencetarget_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_sequencetarget_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sequencetarget_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sequencetarget_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sequencetarget_SyncErrors?: SyncError_Result[] | null;
  msdyn_sequencetarget_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_sequencetarget_connections1?: Connection_Result[] | null;
  msdyn_sequencetarget_connections2?: Connection_Result[] | null;
  msdyn_sequencetarget_sequencetargetstep?: msdyn_sequencetargetstep_Result[] | null;
}
interface msdyn_sequencetarget extends msdyn_sequencetarget_Base, msdyn_sequencetarget_Relationships {
  msdyn_appliedsequenceinstance_bind$msdyn_sequences?: string | null;
  msdyn_parentsequence_bind$msdyn_sequences?: string | null;
  msdyn_segment_bind$msdyn_segments?: string | null;
  msdyn_target_bind$accounts?: string | null;
  msdyn_target_bind$contacts?: string | null;
  msdyn_target_bind$leads?: string | null;
  msdyn_target_bind$opportunities?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_sequencetarget_Create extends msdyn_sequencetarget {
}
interface msdyn_sequencetarget_Update extends msdyn_sequencetarget {
}
interface msdyn_sequencetarget_Select {
  createdby_guid: WebAttribute<msdyn_sequencetarget_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_sequencetarget_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_sequencetarget_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_sequencetarget_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_sequencetarget_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_sequencetarget_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_sequencetarget_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_appliedsequenceinstance_guid: WebAttribute<msdyn_sequencetarget_Select, { msdyn_appliedsequenceinstance_guid: string | null }, { msdyn_appliedsequenceinstance_formatted?: string }>;
  msdyn_currentstepcount: WebAttribute<msdyn_sequencetarget_Select, { msdyn_currentstepcount: number | null }, {  }>;
  msdyn_currentstepname: WebAttribute<msdyn_sequencetarget_Select, { msdyn_currentstepname: string | null }, {  }>;
  msdyn_currentstepsubtype: WebAttribute<msdyn_sequencetarget_Select, { msdyn_currentstepsubtype: msdyn_sequencestep_subtype | null }, { msdyn_currentstepsubtype_formatted?: string }>;
  msdyn_currentsteptype: WebAttribute<msdyn_sequencetarget_Select, { msdyn_currentsteptype: msdyn_sequencestep_type | null }, { msdyn_currentsteptype_formatted?: string }>;
  msdyn_deactivatereason: WebAttribute<msdyn_sequencetarget_Select, { msdyn_deactivatereason: msdyn_sequencetarget_deactivatereason | null }, { msdyn_deactivatereason_formatted?: string }>;
  msdyn_msflowrunid: WebAttribute<msdyn_sequencetarget_Select, { msdyn_msflowrunid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_sequencetarget_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parentsequence_guid: WebAttribute<msdyn_sequencetarget_Select, { msdyn_parentsequence_guid: string | null }, { msdyn_parentsequence_formatted?: string }>;
  msdyn_parentsequenceversion: WebAttribute<msdyn_sequencetarget_Select, { msdyn_parentsequenceversion: number | null }, {  }>;
  msdyn_regarding: WebAttribute<msdyn_sequencetarget_Select, { msdyn_regarding: string | null }, {  }>;
  msdyn_segment_guid: WebAttribute<msdyn_sequencetarget_Select, { msdyn_segment_guid: string | null }, { msdyn_segment_formatted?: string }>;
  msdyn_sequencetargetid: WebAttribute<msdyn_sequencetarget_Select, { msdyn_sequencetargetid: string | null }, {  }>;
  msdyn_sequencetargetuniquekey: WebAttribute<msdyn_sequencetarget_Select, { msdyn_sequencetargetuniquekey: string | null }, {  }>;
  msdyn_target_guid: WebAttribute<msdyn_sequencetarget_Select, { msdyn_target_guid: string | null }, { msdyn_target_formatted?: string }>;
  msdyn_totalstepcount: WebAttribute<msdyn_sequencetarget_Select, { msdyn_totalstepcount: number | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_sequencetarget_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_sequencetarget_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_sequencetarget_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_sequencetarget_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_sequencetarget_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_sequencetarget_Select, { statecode: msdyn_sequencetarget_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_sequencetarget_Select, { statuscode: msdyn_sequencetarget_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_sequencetarget_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_sequencetarget_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sequencetarget_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sequencetarget_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_appliedsequenceinstance_guid: XQW.Guid;
  msdyn_currentstepcount: number;
  msdyn_currentstepname: string;
  msdyn_currentstepsubtype: msdyn_sequencestep_subtype;
  msdyn_currentsteptype: msdyn_sequencestep_type;
  msdyn_deactivatereason: msdyn_sequencetarget_deactivatereason;
  msdyn_msflowrunid: string;
  msdyn_name: string;
  msdyn_parentsequence_guid: XQW.Guid;
  msdyn_parentsequenceversion: number;
  msdyn_regarding: string;
  msdyn_segment_guid: XQW.Guid;
  msdyn_sequencetargetid: XQW.Guid;
  msdyn_sequencetargetuniquekey: string;
  msdyn_target_guid: XQW.Guid;
  msdyn_totalstepcount: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_sequencetarget_statecode;
  statuscode: msdyn_sequencetarget_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_sequencetarget_Expand {
  createdby: WebExpand<msdyn_sequencetarget_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_sequencetarget_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_sequencetarget_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_sequencetarget_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_appliedsequenceinstance: WebExpand<msdyn_sequencetarget_Expand, msdyn_sequence_Select, msdyn_sequence_Filter, { msdyn_appliedsequenceinstance: msdyn_sequence_Result }>;
  msdyn_parentsequence: WebExpand<msdyn_sequencetarget_Expand, msdyn_sequence_Select, msdyn_sequence_Filter, { msdyn_parentsequence: msdyn_sequence_Result }>;
  msdyn_segment: WebExpand<msdyn_sequencetarget_Expand, msdyn_segment_Select, msdyn_segment_Filter, { msdyn_segment: msdyn_segment_Result }>;
  msdyn_sequencetarget_AsyncOperations: WebExpand<msdyn_sequencetarget_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sequencetarget_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sequencetarget_BulkDeleteFailures: WebExpand<msdyn_sequencetarget_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sequencetarget_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sequencetarget_DuplicateBaseRecord: WebExpand<msdyn_sequencetarget_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sequencetarget_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_sequencetarget_DuplicateMatchingRecord: WebExpand<msdyn_sequencetarget_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sequencetarget_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_sequencetarget_MailboxTrackingFolders: WebExpand<msdyn_sequencetarget_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sequencetarget_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sequencetarget_PrincipalObjectAttributeAccesses: WebExpand<msdyn_sequencetarget_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sequencetarget_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sequencetarget_ProcessSession: WebExpand<msdyn_sequencetarget_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sequencetarget_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sequencetarget_SyncErrors: WebExpand<msdyn_sequencetarget_Expand, SyncError_Select, SyncError_Filter, { msdyn_sequencetarget_SyncErrors: SyncError_Result[] }>;
  msdyn_sequencetarget_UserEntityInstanceDatas: WebExpand<msdyn_sequencetarget_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sequencetarget_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_sequencetarget_connections1: WebExpand<msdyn_sequencetarget_Expand, Connection_Select, Connection_Filter, { msdyn_sequencetarget_connections1: Connection_Result[] }>;
  msdyn_sequencetarget_connections2: WebExpand<msdyn_sequencetarget_Expand, Connection_Select, Connection_Filter, { msdyn_sequencetarget_connections2: Connection_Result[] }>;
  msdyn_sequencetarget_sequencetargetstep: WebExpand<msdyn_sequencetarget_Expand, msdyn_sequencetargetstep_Select, msdyn_sequencetargetstep_Filter, { msdyn_sequencetarget_sequencetargetstep: msdyn_sequencetargetstep_Result[] }>;
  msdyn_target: WebExpand<msdyn_sequencetarget_Expand, Lead_Select, Lead_Filter, { msdyn_target: Lead_Result }>;
  msdyn_target1: WebExpand<msdyn_sequencetarget_Expand, Opportunity_Select, Opportunity_Filter, { msdyn_target: Opportunity_Result }>;
  msdyn_target2: WebExpand<msdyn_sequencetarget_Expand, Contact_Select, Contact_Filter, { msdyn_target: Contact_Result }>;
  msdyn_target3: WebExpand<msdyn_sequencetarget_Expand, Account_Select, Account_Filter, { msdyn_target: Account_Result }>;
  ownerid: WebExpand<msdyn_sequencetarget_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_sequencetarget_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_sequencetarget_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_sequencetarget_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_sequencetarget_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_appliedsequenceinstance_formatted?: string;
  msdyn_currentstepsubtype_formatted?: string;
  msdyn_currentsteptype_formatted?: string;
  msdyn_deactivatereason_formatted?: string;
  msdyn_parentsequence_formatted?: string;
  msdyn_segment_formatted?: string;
  msdyn_target_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_sequencetarget_Result extends msdyn_sequencetarget_Base, msdyn_sequencetarget_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_appliedsequenceinstance_guid: string | null;
  msdyn_parentsequence_guid: string | null;
  msdyn_segment_guid: string | null;
  msdyn_target_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_sequencetarget_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_appliedsequenceinstance: WebMappingRetrieve<msdyn_sequence_Select,msdyn_sequence_Expand,msdyn_sequence_Filter,msdyn_sequence_Fixed,msdyn_sequence_Result,msdyn_sequence_FormattedResult>;
  msdyn_parentsequence: WebMappingRetrieve<msdyn_sequence_Select,msdyn_sequence_Expand,msdyn_sequence_Filter,msdyn_sequence_Fixed,msdyn_sequence_Result,msdyn_sequence_FormattedResult>;
  msdyn_segment: WebMappingRetrieve<msdyn_segment_Select,msdyn_segment_Expand,msdyn_segment_Filter,msdyn_segment_Fixed,msdyn_segment_Result,msdyn_segment_FormattedResult>;
  msdyn_target: WebMappingRetrieve<Lead_Select,Lead_Expand,Lead_Filter,Lead_Fixed,Lead_Result,Lead_FormattedResult>;
  msdyn_target1: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  msdyn_target2: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msdyn_target3: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_sequencetarget_RelatedMany {
  msdyn_sequencetarget_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sequencetarget_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sequencetarget_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sequencetarget_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sequencetarget_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sequencetarget_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sequencetarget_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sequencetarget_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sequencetarget_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_sequencetarget_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_sequencetarget_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_sequencetarget_sequencetargetstep: WebMappingRetrieve<msdyn_sequencetargetstep_Select,msdyn_sequencetargetstep_Expand,msdyn_sequencetargetstep_Filter,msdyn_sequencetargetstep_Fixed,msdyn_sequencetargetstep_Result,msdyn_sequencetargetstep_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sequencetargets: WebMappingRetrieve<msdyn_sequencetarget_Select,msdyn_sequencetarget_Expand,msdyn_sequencetarget_Filter,msdyn_sequencetarget_Fixed,msdyn_sequencetarget_Result,msdyn_sequencetarget_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sequencetargets: WebMappingRelated<msdyn_sequencetarget_RelatedOne,msdyn_sequencetarget_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sequencetargets: WebMappingCUDA<msdyn_sequencetarget_Create,msdyn_sequencetarget_Update,msdyn_sequencetarget_Select>;
}
