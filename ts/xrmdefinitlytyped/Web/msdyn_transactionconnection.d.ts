interface msdyn_transactionconnection_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_transaction1?: string | null;
  msdyn_transaction1role?: string | null;
  msdyn_transaction1type?: string | null;
  msdyn_transaction2?: string | null;
  msdyn_transaction2role?: string | null;
  msdyn_transaction2type?: string | null;
  msdyn_transactionconnectionid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_transactionconnection_statecode | null;
  statuscode?: msdyn_transactionconnection_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_transactionconnection_Relationships {
  msdyn_transactionconnection_Annotations?: Annotation_Result[] | null;
  msdyn_transactionconnection_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_transactionconnection_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_transactionconnection_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactionconnection_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_transactionconnection_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_transactionconnection_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_transactionconnection_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_transactionconnection_SyncErrors?: SyncError_Result[] | null;
  msdyn_transactionconnection_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_transactionconnection extends msdyn_transactionconnection_Base, msdyn_transactionconnection_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_transactionconnection_Create extends msdyn_transactionconnection {
}
interface msdyn_transactionconnection_Update extends msdyn_transactionconnection {
}
interface msdyn_transactionconnection_Select {
  createdby_guid: WebAttribute<msdyn_transactionconnection_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_transactionconnection_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_transactionconnection_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_transactionconnection_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_transactionconnection_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_transactionconnection_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_transactionconnection_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_transactionconnection_Select, { msdyn_name: string | null }, {  }>;
  msdyn_transaction1: WebAttribute<msdyn_transactionconnection_Select, { msdyn_transaction1: string | null }, {  }>;
  msdyn_transaction1role: WebAttribute<msdyn_transactionconnection_Select, { msdyn_transaction1role: string | null }, {  }>;
  msdyn_transaction1type: WebAttribute<msdyn_transactionconnection_Select, { msdyn_transaction1type: string | null }, {  }>;
  msdyn_transaction2: WebAttribute<msdyn_transactionconnection_Select, { msdyn_transaction2: string | null }, {  }>;
  msdyn_transaction2role: WebAttribute<msdyn_transactionconnection_Select, { msdyn_transaction2role: string | null }, {  }>;
  msdyn_transaction2type: WebAttribute<msdyn_transactionconnection_Select, { msdyn_transaction2type: string | null }, {  }>;
  msdyn_transactionconnectionid: WebAttribute<msdyn_transactionconnection_Select, { msdyn_transactionconnectionid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_transactionconnection_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_transactionconnection_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_transactionconnection_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_transactionconnection_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_transactionconnection_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_transactionconnection_Select, { statecode: msdyn_transactionconnection_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_transactionconnection_Select, { statuscode: msdyn_transactionconnection_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_transactionconnection_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_transactionconnection_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_transactionconnection_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_transactionconnection_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_transaction1: string;
  msdyn_transaction1role: string;
  msdyn_transaction1type: string;
  msdyn_transaction2: string;
  msdyn_transaction2role: string;
  msdyn_transaction2type: string;
  msdyn_transactionconnectionid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_transactionconnection_statecode;
  statuscode: msdyn_transactionconnection_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_transactionconnection_Expand {
  createdby: WebExpand<msdyn_transactionconnection_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_transactionconnection_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_transactionconnection_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_transactionconnection_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_transactionconnection_Annotations: WebExpand<msdyn_transactionconnection_Expand, Annotation_Select, Annotation_Filter, { msdyn_transactionconnection_Annotations: Annotation_Result[] }>;
  msdyn_transactionconnection_AsyncOperations: WebExpand<msdyn_transactionconnection_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_transactionconnection_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_transactionconnection_BulkDeleteFailures: WebExpand<msdyn_transactionconnection_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_transactionconnection_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_transactionconnection_DuplicateBaseRecord: WebExpand<msdyn_transactionconnection_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactionconnection_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_transactionconnection_DuplicateMatchingRecord: WebExpand<msdyn_transactionconnection_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_transactionconnection_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_transactionconnection_MailboxTrackingFolders: WebExpand<msdyn_transactionconnection_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_transactionconnection_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_transactionconnection_PrincipalObjectAttributeAccesses: WebExpand<msdyn_transactionconnection_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_transactionconnection_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_transactionconnection_ProcessSession: WebExpand<msdyn_transactionconnection_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_transactionconnection_ProcessSession: ProcessSession_Result[] }>;
  msdyn_transactionconnection_SyncErrors: WebExpand<msdyn_transactionconnection_Expand, SyncError_Select, SyncError_Filter, { msdyn_transactionconnection_SyncErrors: SyncError_Result[] }>;
  msdyn_transactionconnection_UserEntityInstanceDatas: WebExpand<msdyn_transactionconnection_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_transactionconnection_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_transactionconnection_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_transactionconnection_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_transactionconnection_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_transactionconnection_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_transactionconnection_FormattedResult {
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
interface msdyn_transactionconnection_Result extends msdyn_transactionconnection_Base, msdyn_transactionconnection_Relationships {
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
interface msdyn_transactionconnection_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_transactionconnection_RelatedMany {
  msdyn_transactionconnection_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_transactionconnection_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_transactionconnection_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_transactionconnection_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactionconnection_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_transactionconnection_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_transactionconnection_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_transactionconnection_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_transactionconnection_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_transactionconnection_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_transactionconnections: WebMappingRetrieve<msdyn_transactionconnection_Select,msdyn_transactionconnection_Expand,msdyn_transactionconnection_Filter,msdyn_transactionconnection_Fixed,msdyn_transactionconnection_Result,msdyn_transactionconnection_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_transactionconnections: WebMappingRelated<msdyn_transactionconnection_RelatedOne,msdyn_transactionconnection_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_transactionconnections: WebMappingCUDA<msdyn_transactionconnection_Create,msdyn_transactionconnection_Update,msdyn_transactionconnection_Select>;
}
