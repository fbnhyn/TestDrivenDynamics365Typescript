interface msdyn_sequence_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_SequenceStats180d?: string | null;
  msdyn_SequenceStats1y?: string | null;
  msdyn_SequenceStats2y?: string | null;
  msdyn_SequenceStats30d?: string | null;
  msdyn_SequenceStats90d?: string | null;
  msdyn_definition?: string | null;
  msdyn_description?: string | null;
  msdyn_maxstepcount?: number | null;
  msdyn_name?: string | null;
  msdyn_orchestratorversion?: msdyn_orchestratorversion_options | null;
  msdyn_regardingentitydisplayname?: string | null;
  msdyn_regardingentityname?: string | null;
  msdyn_sequenceexitcriterion?: string | null;
  msdyn_sequenceid?: string | null;
  msdyn_sequencerecords?: string | null;
  msdyn_totaltasks?: number | null;
  msdyn_type?: msdyn_sequence_type_options | null;
  msdyn_version?: number | null;
  msdyn_versiondescription?: string | null;
  msdyn_workflowid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sequence_statecode | null;
  statuscode?: msdyn_sequence_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_sequence_Relationships {
  msdyn_ParentSequence?: msdyn_sequence_Result | null;
  msdyn_msdyn_sequence_msdyn_segment_Sequence?: msdyn_segment_Result[] | null;
  msdyn_sequence_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sequence_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sequence_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_sequence_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_sequence_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sequence_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sequence_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sequence_SyncErrors?: SyncError_Result[] | null;
  msdyn_sequence_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_sequence_appliedsequenceinstance?: msdyn_sequencetarget_Result[] | null;
  msdyn_sequence_connections1?: Connection_Result[] | null;
  msdyn_sequence_connections2?: Connection_Result[] | null;
  msdyn_sequence_parentsequence?: msdyn_sequence_Result[] | null;
  msdyn_sequence_sequencestat?: msdyn_sequencestat_Result[] | null;
  msdyn_sequenceparent?: msdyn_sequencetarget_Result[] | null;
}
interface msdyn_sequence extends msdyn_sequence_Base, msdyn_sequence_Relationships {
  msdyn_ParentSequence_bind$msdyn_sequences?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_sequence_Create extends msdyn_sequence {
}
interface msdyn_sequence_Update extends msdyn_sequence {
}
interface msdyn_sequence_Select {
  createdby_guid: WebAttribute<msdyn_sequence_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_sequence_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_sequence_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_sequence_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_sequence_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_sequence_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_sequence_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_SequenceStats180d: WebAttribute<msdyn_sequence_Select, { msdyn_SequenceStats180d: string | null }, {  }>;
  msdyn_SequenceStats1y: WebAttribute<msdyn_sequence_Select, { msdyn_SequenceStats1y: string | null }, {  }>;
  msdyn_SequenceStats2y: WebAttribute<msdyn_sequence_Select, { msdyn_SequenceStats2y: string | null }, {  }>;
  msdyn_SequenceStats30d: WebAttribute<msdyn_sequence_Select, { msdyn_SequenceStats30d: string | null }, {  }>;
  msdyn_SequenceStats90d: WebAttribute<msdyn_sequence_Select, { msdyn_SequenceStats90d: string | null }, {  }>;
  msdyn_definition: WebAttribute<msdyn_sequence_Select, { msdyn_definition: string | null }, {  }>;
  msdyn_description: WebAttribute<msdyn_sequence_Select, { msdyn_description: string | null }, {  }>;
  msdyn_maxstepcount: WebAttribute<msdyn_sequence_Select, { msdyn_maxstepcount: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_sequence_Select, { msdyn_name: string | null }, {  }>;
  msdyn_orchestratorversion: WebAttribute<msdyn_sequence_Select, { msdyn_orchestratorversion: msdyn_orchestratorversion_options | null }, { msdyn_orchestratorversion_formatted?: string }>;
  msdyn_parentsequence_guid: WebAttribute<msdyn_sequence_Select, { msdyn_parentsequence_guid: string | null }, { msdyn_parentsequence_formatted?: string }>;
  msdyn_regardingentitydisplayname: WebAttribute<msdyn_sequence_Select, { msdyn_regardingentitydisplayname: string | null }, {  }>;
  msdyn_regardingentityname: WebAttribute<msdyn_sequence_Select, { msdyn_regardingentityname: string | null }, {  }>;
  msdyn_sequenceexitcriterion: WebAttribute<msdyn_sequence_Select, { msdyn_sequenceexitcriterion: string | null }, {  }>;
  msdyn_sequenceid: WebAttribute<msdyn_sequence_Select, { msdyn_sequenceid: string | null }, {  }>;
  msdyn_sequencerecords: WebAttribute<msdyn_sequence_Select, { msdyn_sequencerecords: string | null }, {  }>;
  msdyn_totaltasks: WebAttribute<msdyn_sequence_Select, { msdyn_totaltasks: number | null }, {  }>;
  msdyn_type: WebAttribute<msdyn_sequence_Select, { msdyn_type: msdyn_sequence_type_options | null }, { msdyn_type_formatted?: string }>;
  msdyn_version: WebAttribute<msdyn_sequence_Select, { msdyn_version: number | null }, {  }>;
  msdyn_versiondescription: WebAttribute<msdyn_sequence_Select, { msdyn_versiondescription: string | null }, {  }>;
  msdyn_workflowid: WebAttribute<msdyn_sequence_Select, { msdyn_workflowid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_sequence_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_sequence_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_sequence_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_sequence_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_sequence_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_sequence_Select, { statecode: msdyn_sequence_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_sequence_Select, { statuscode: msdyn_sequence_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_sequence_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_sequence_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sequence_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sequence_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_SequenceStats180d: string;
  msdyn_SequenceStats1y: string;
  msdyn_SequenceStats2y: string;
  msdyn_SequenceStats30d: string;
  msdyn_SequenceStats90d: string;
  msdyn_definition: string;
  msdyn_description: string;
  msdyn_maxstepcount: number;
  msdyn_name: string;
  msdyn_orchestratorversion: msdyn_orchestratorversion_options;
  msdyn_parentsequence_guid: XQW.Guid;
  msdyn_regardingentitydisplayname: string;
  msdyn_regardingentityname: string;
  msdyn_sequenceexitcriterion: string;
  msdyn_sequenceid: XQW.Guid;
  msdyn_sequencerecords: string;
  msdyn_totaltasks: number;
  msdyn_type: msdyn_sequence_type_options;
  msdyn_version: number;
  msdyn_versiondescription: string;
  msdyn_workflowid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_sequence_statecode;
  statuscode: msdyn_sequence_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_sequence_Expand {
  createdby: WebExpand<msdyn_sequence_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_sequence_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_sequence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_sequence_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ParentSequence: WebExpand<msdyn_sequence_Expand, msdyn_sequence_Select, msdyn_sequence_Filter, { msdyn_ParentSequence: msdyn_sequence_Result }>;
  msdyn_msdyn_sequence_msdyn_segment_Sequence: WebExpand<msdyn_sequence_Expand, msdyn_segment_Select, msdyn_segment_Filter, { msdyn_msdyn_sequence_msdyn_segment_Sequence: msdyn_segment_Result[] }>;
  msdyn_sequence_AsyncOperations: WebExpand<msdyn_sequence_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sequence_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sequence_BulkDeleteFailures: WebExpand<msdyn_sequence_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sequence_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sequence_DuplicateBaseRecord: WebExpand<msdyn_sequence_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sequence_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_sequence_DuplicateMatchingRecord: WebExpand<msdyn_sequence_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sequence_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_sequence_MailboxTrackingFolders: WebExpand<msdyn_sequence_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sequence_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sequence_PrincipalObjectAttributeAccesses: WebExpand<msdyn_sequence_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sequence_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sequence_ProcessSession: WebExpand<msdyn_sequence_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sequence_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sequence_SyncErrors: WebExpand<msdyn_sequence_Expand, SyncError_Select, SyncError_Filter, { msdyn_sequence_SyncErrors: SyncError_Result[] }>;
  msdyn_sequence_UserEntityInstanceDatas: WebExpand<msdyn_sequence_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sequence_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_sequence_appliedsequenceinstance: WebExpand<msdyn_sequence_Expand, msdyn_sequencetarget_Select, msdyn_sequencetarget_Filter, { msdyn_sequence_appliedsequenceinstance: msdyn_sequencetarget_Result[] }>;
  msdyn_sequence_connections1: WebExpand<msdyn_sequence_Expand, Connection_Select, Connection_Filter, { msdyn_sequence_connections1: Connection_Result[] }>;
  msdyn_sequence_connections2: WebExpand<msdyn_sequence_Expand, Connection_Select, Connection_Filter, { msdyn_sequence_connections2: Connection_Result[] }>;
  msdyn_sequence_parentsequence: WebExpand<msdyn_sequence_Expand, msdyn_sequence_Select, msdyn_sequence_Filter, { msdyn_sequence_parentsequence: msdyn_sequence_Result[] }>;
  msdyn_sequence_sequencestat: WebExpand<msdyn_sequence_Expand, msdyn_sequencestat_Select, msdyn_sequencestat_Filter, { msdyn_sequence_sequencestat: msdyn_sequencestat_Result[] }>;
  msdyn_sequenceparent: WebExpand<msdyn_sequence_Expand, msdyn_sequencetarget_Select, msdyn_sequencetarget_Filter, { msdyn_sequenceparent: msdyn_sequencetarget_Result[] }>;
  ownerid: WebExpand<msdyn_sequence_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_sequence_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_sequence_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_sequence_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_sequence_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_orchestratorversion_formatted?: string;
  msdyn_parentsequence_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_sequence_Result extends msdyn_sequence_Base, msdyn_sequence_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_parentsequence_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_sequence_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ParentSequence: WebMappingRetrieve<msdyn_sequence_Select,msdyn_sequence_Expand,msdyn_sequence_Filter,msdyn_sequence_Fixed,msdyn_sequence_Result,msdyn_sequence_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_sequence_RelatedMany {
  msdyn_msdyn_sequence_msdyn_segment_Sequence: WebMappingRetrieve<msdyn_segment_Select,msdyn_segment_Expand,msdyn_segment_Filter,msdyn_segment_Fixed,msdyn_segment_Result,msdyn_segment_FormattedResult>;
  msdyn_sequence_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sequence_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sequence_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sequence_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sequence_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sequence_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sequence_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sequence_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sequence_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_sequence_appliedsequenceinstance: WebMappingRetrieve<msdyn_sequencetarget_Select,msdyn_sequencetarget_Expand,msdyn_sequencetarget_Filter,msdyn_sequencetarget_Fixed,msdyn_sequencetarget_Result,msdyn_sequencetarget_FormattedResult>;
  msdyn_sequence_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_sequence_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_sequence_parentsequence: WebMappingRetrieve<msdyn_sequence_Select,msdyn_sequence_Expand,msdyn_sequence_Filter,msdyn_sequence_Fixed,msdyn_sequence_Result,msdyn_sequence_FormattedResult>;
  msdyn_sequence_sequencestat: WebMappingRetrieve<msdyn_sequencestat_Select,msdyn_sequencestat_Expand,msdyn_sequencestat_Filter,msdyn_sequencestat_Fixed,msdyn_sequencestat_Result,msdyn_sequencestat_FormattedResult>;
  msdyn_sequenceparent: WebMappingRetrieve<msdyn_sequencetarget_Select,msdyn_sequencetarget_Expand,msdyn_sequencetarget_Filter,msdyn_sequencetarget_Fixed,msdyn_sequencetarget_Result,msdyn_sequencetarget_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sequences: WebMappingRetrieve<msdyn_sequence_Select,msdyn_sequence_Expand,msdyn_sequence_Filter,msdyn_sequence_Fixed,msdyn_sequence_Result,msdyn_sequence_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sequences: WebMappingRelated<msdyn_sequence_RelatedOne,msdyn_sequence_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sequences: WebMappingCUDA<msdyn_sequence_Create,msdyn_sequence_Update,msdyn_sequence_Select>;
}
