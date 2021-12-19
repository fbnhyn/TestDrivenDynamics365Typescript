interface msdyn_transactionorigin_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_origin?: string | null;
  msdyn_origintype?: string | null;
  msdyn_transaction?: string | null;
  msdyn_transactionoriginid?: string | null;
  msdyn_transactiontype?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_transactionorigin_statecode | null;
  statuscode?: msdyn_transactionorigin_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_transactionorigin_Relationships {
  msdyn_transactionorigin_Annotations?: Annotation_Result[] | null;
  msdyn_transactionorigin_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_transactionorigin_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_transactionorigin_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactionorigin_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactionorigin_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_transactionorigin_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_transactionorigin_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_transactionorigin_SyncErrors?: SyncError_Result[] | null;
  msdyn_transactionorigin_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_transactionorigin extends msdyn_transactionorigin_Base, msdyn_transactionorigin_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_transactionorigin_Create extends msdyn_transactionorigin {
}
interface msdyn_transactionorigin_Update extends msdyn_transactionorigin {
}
interface msdyn_transactionorigin_Select {
  createdby_guid: WebAttribute<msdyn_transactionorigin_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_transactionorigin_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_transactionorigin_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_transactionorigin_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_transactionorigin_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_transactionorigin_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_transactionorigin_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_transactionorigin_Select, { msdyn_name: string | null }, {  }>;
  msdyn_origin: WebAttribute<msdyn_transactionorigin_Select, { msdyn_origin: string | null }, {  }>;
  msdyn_origintype: WebAttribute<msdyn_transactionorigin_Select, { msdyn_origintype: string | null }, {  }>;
  msdyn_transaction: WebAttribute<msdyn_transactionorigin_Select, { msdyn_transaction: string | null }, {  }>;
  msdyn_transactionoriginid: WebAttribute<msdyn_transactionorigin_Select, { msdyn_transactionoriginid: string | null }, {  }>;
  msdyn_transactiontype: WebAttribute<msdyn_transactionorigin_Select, { msdyn_transactiontype: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_transactionorigin_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_transactionorigin_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_transactionorigin_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_transactionorigin_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_transactionorigin_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_transactionorigin_Select, { statecode: msdyn_transactionorigin_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_transactionorigin_Select, { statuscode: msdyn_transactionorigin_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_transactionorigin_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_transactionorigin_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_transactionorigin_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_transactionorigin_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_origin: string;
  msdyn_origintype: string;
  msdyn_transaction: string;
  msdyn_transactionoriginid: XQW.Guid;
  msdyn_transactiontype: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_transactionorigin_statecode;
  statuscode: msdyn_transactionorigin_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_transactionorigin_Expand {
  createdby: WebExpand<msdyn_transactionorigin_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_transactionorigin_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_transactionorigin_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_transactionorigin_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_transactionorigin_Annotations: WebExpand<msdyn_transactionorigin_Expand, Annotation_Select, Annotation_Filter, { msdyn_transactionorigin_Annotations: Annotation_Result[] }>;
  msdyn_transactionorigin_AsyncOperations: WebExpand<msdyn_transactionorigin_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_transactionorigin_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_transactionorigin_BulkDeleteFailures: WebExpand<msdyn_transactionorigin_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_transactionorigin_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_transactionorigin_DuplicateBaseRecord: WebExpand<msdyn_transactionorigin_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactionorigin_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_transactionorigin_DuplicateMatchingRecord: WebExpand<msdyn_transactionorigin_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactionorigin_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_transactionorigin_MailboxTrackingFolders: WebExpand<msdyn_transactionorigin_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_transactionorigin_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_transactionorigin_PrincipalObjectAttributeAccesses: WebExpand<msdyn_transactionorigin_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_transactionorigin_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_transactionorigin_ProcessSession: WebExpand<msdyn_transactionorigin_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_transactionorigin_ProcessSession: ProcessSession_Result[] }>;
  msdyn_transactionorigin_SyncErrors: WebExpand<msdyn_transactionorigin_Expand, SyncError_Select, SyncError_Filter, { msdyn_transactionorigin_SyncErrors: SyncError_Result[] }>;
  msdyn_transactionorigin_UserEntityInstanceDatas: WebExpand<msdyn_transactionorigin_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_transactionorigin_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_transactionorigin_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_transactionorigin_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_transactionorigin_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_transactionorigin_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_transactionorigin_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_transactionorigin_Result extends msdyn_transactionorigin_Base, msdyn_transactionorigin_Relationships {
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
interface msdyn_transactionorigin_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_transactionorigin_RelatedMany {
  msdyn_transactionorigin_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_transactionorigin_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_transactionorigin_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_transactionorigin_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactionorigin_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactionorigin_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_transactionorigin_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_transactionorigin_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_transactionorigin_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_transactionorigin_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_transactionorigins: WebMappingRetrieve<msdyn_transactionorigin_Select,msdyn_transactionorigin_Expand,msdyn_transactionorigin_Filter,msdyn_transactionorigin_Fixed,msdyn_transactionorigin_Result,msdyn_transactionorigin_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_transactionorigins: WebMappingRelated<msdyn_transactionorigin_RelatedOne,msdyn_transactionorigin_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_transactionorigins: WebMappingCUDA<msdyn_transactionorigin_Create,msdyn_transactionorigin_Update,msdyn_transactionorigin_Select>;
}
