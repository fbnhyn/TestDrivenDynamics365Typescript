interface msdyn_delegation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_delegationid?: string | null;
  msdyn_enddate?: Date | null;
  msdyn_name?: string | null;
  msdyn_startdate?: Date | null;
  msdyn_type?: msdyn_delegation_msdyn_type | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_delegation_statecode | null;
  statuscode?: msdyn_delegation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_delegation_Relationships {
  msdyn_delegation_Annotations?: Annotation_Result[] | null;
  msdyn_delegation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_delegation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_delegation_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_delegation_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_delegation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_delegation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_delegation_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_delegation_SyncErrors?: SyncError_Result[] | null;
  msdyn_delegation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_delegation extends msdyn_delegation_Base, msdyn_delegation_Relationships {
  msdyn_delegationfrom_bind$bookableresources?: string | null;
  msdyn_delegationto_bind$bookableresources?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_delegation_Create extends msdyn_delegation {
}
interface msdyn_delegation_Update extends msdyn_delegation {
}
interface msdyn_delegation_Select {
  createdby_guid: WebAttribute<msdyn_delegation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_delegation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_delegation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_delegation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_delegation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_delegation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_delegation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_delegationfrom_guid: WebAttribute<msdyn_delegation_Select, { msdyn_delegationfrom_guid: string | null }, { msdyn_delegationfrom_formatted?: string }>;
  msdyn_delegationid: WebAttribute<msdyn_delegation_Select, { msdyn_delegationid: string | null }, {  }>;
  msdyn_delegationto_guid: WebAttribute<msdyn_delegation_Select, { msdyn_delegationto_guid: string | null }, { msdyn_delegationto_formatted?: string }>;
  msdyn_enddate: WebAttribute<msdyn_delegation_Select, { msdyn_enddate: Date | null }, { msdyn_enddate_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_delegation_Select, { msdyn_name: string | null }, {  }>;
  msdyn_startdate: WebAttribute<msdyn_delegation_Select, { msdyn_startdate: Date | null }, { msdyn_startdate_formatted?: string }>;
  msdyn_type: WebAttribute<msdyn_delegation_Select, { msdyn_type: msdyn_delegation_msdyn_type | null }, { msdyn_type_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_delegation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_delegation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_delegation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_delegation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_delegation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_delegation_Select, { statecode: msdyn_delegation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_delegation_Select, { statuscode: msdyn_delegation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_delegation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_delegation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_delegation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_delegation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_delegationfrom_guid: XQW.Guid;
  msdyn_delegationid: XQW.Guid;
  msdyn_delegationto_guid: XQW.Guid;
  msdyn_enddate: Date;
  msdyn_name: string;
  msdyn_startdate: Date;
  msdyn_type: msdyn_delegation_msdyn_type;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_delegation_statecode;
  statuscode: msdyn_delegation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_delegation_Expand {
  createdby: WebExpand<msdyn_delegation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_delegation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_delegation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_delegation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_delegation_Annotations: WebExpand<msdyn_delegation_Expand, Annotation_Select, Annotation_Filter, { msdyn_delegation_Annotations: Annotation_Result[] }>;
  msdyn_delegation_AsyncOperations: WebExpand<msdyn_delegation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_delegation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_delegation_BulkDeleteFailures: WebExpand<msdyn_delegation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_delegation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_delegation_DuplicateBaseRecord: WebExpand<msdyn_delegation_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_delegation_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_delegation_DuplicateMatchingRecord: WebExpand<msdyn_delegation_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_delegation_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_delegation_MailboxTrackingFolders: WebExpand<msdyn_delegation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_delegation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_delegation_PrincipalObjectAttributeAccesses: WebExpand<msdyn_delegation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_delegation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_delegation_ProcessSession: WebExpand<msdyn_delegation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_delegation_ProcessSession: ProcessSession_Result[] }>;
  msdyn_delegation_SyncErrors: WebExpand<msdyn_delegation_Expand, SyncError_Select, SyncError_Filter, { msdyn_delegation_SyncErrors: SyncError_Result[] }>;
  msdyn_delegation_UserEntityInstanceDatas: WebExpand<msdyn_delegation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_delegation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_delegationfrom: WebExpand<msdyn_delegation_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_delegationfrom: BookableResource_Result }>;
  msdyn_delegationto: WebExpand<msdyn_delegation_Expand, BookableResource_Select, BookableResource_Filter, { msdyn_delegationto: BookableResource_Result }>;
  ownerid: WebExpand<msdyn_delegation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_delegation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_delegation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_delegation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_delegation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_delegationfrom_formatted?: string;
  msdyn_delegationto_formatted?: string;
  msdyn_enddate_formatted?: string;
  msdyn_startdate_formatted?: string;
  msdyn_type_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_delegation_Result extends msdyn_delegation_Base, msdyn_delegation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_delegationfrom_guid: string | null;
  msdyn_delegationto_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_delegation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_delegationfrom: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  msdyn_delegationto: WebMappingRetrieve<BookableResource_Select,BookableResource_Expand,BookableResource_Filter,BookableResource_Fixed,BookableResource_Result,BookableResource_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_delegation_RelatedMany {
  msdyn_delegation_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_delegation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_delegation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_delegation_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_delegation_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_delegation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_delegation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_delegation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_delegation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_delegation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_delegations: WebMappingRetrieve<msdyn_delegation_Select,msdyn_delegation_Expand,msdyn_delegation_Filter,msdyn_delegation_Fixed,msdyn_delegation_Result,msdyn_delegation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_delegations: WebMappingRelated<msdyn_delegation_RelatedOne,msdyn_delegation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_delegations: WebMappingCUDA<msdyn_delegation_Create,msdyn_delegation_Update,msdyn_delegation_Select>;
}
